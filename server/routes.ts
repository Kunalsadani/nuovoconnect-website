import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { getUncachableGitHubClient } from "./github";
import { sendContactNotification } from "./email";
import * as fs from "fs";
import * as path from "path";

async function getAllFiles(dir: string, baseDir: string): Promise<{path: string, content: string}[]> {
  const files: {path: string, content: string}[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const ignoreList = ['node_modules', '.git', 'dist', '.local', '.cache', '.config', '.upm', 'attached_assets'];

  for (const entry of entries) {
    if (ignoreList.includes(entry.name)) continue;
    if (entry.name.startsWith('.') && entry.name !== '.gitignore') continue;

    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(baseDir, fullPath);

    if (entry.isDirectory()) {
      files.push(...await getAllFiles(fullPath, baseDir));
    } else {
      try {
        const stat = fs.statSync(fullPath);
        if (stat.size > 5 * 1024 * 1024) continue;

        const ext = path.extname(entry.name).toLowerCase();
        const binaryExts = ['.png', '.jpg', '.jpeg', '.gif', '.ico', '.woff', '.woff2', '.ttf', '.eot', '.svg', '.webp', '.mp4', '.mp3', '.pdf'];
        if (binaryExts.includes(ext)) {
          const buffer = fs.readFileSync(fullPath);
          files.push({ path: relativePath, content: buffer.toString('base64') });
        } else {
          const content = fs.readFileSync(fullPath, 'utf-8');
          files.push({ path: relativePath, content: Buffer.from(content).toString('base64') });
        }
      } catch {}
    }
  }
  return files;
}

const industrySlugRedirects: Record<string, string> = {
  '/who-we-serve/retail-networks': '/who-we-serve/retail-merchants',
  '/who-we-serve/mobile-operators': '/who-we-serve/telecommunications',
  '/who-we-serve/money-transfer-operators': '/who-we-serve/forex',
  '/who-we-serve/creator-economy': '/who-we-serve/gaming',
};

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get(Object.keys(industrySlugRedirects), (req, res) => {
    const target = industrySlugRedirects[req.path];
    if (target) {
      res.redirect(301, target);
      return;
    }
    res.status(404).end();
  });

  app.post('/api/github/push', async (req, res) => {
    try {
      const { repoName = 'nuovoconnect-website' } = req.body || {};
      const octokit = await getUncachableGitHubClient();

      const { data: user } = await octokit.users.getAuthenticated();

      let repo;
      let isNew = false;
      try {
        const { data } = await octokit.repos.get({ owner: user.login, repo: repoName });
        repo = data;
      } catch {
        isNew = true;
        const { data } = await octokit.repos.createForAuthenticatedUser({
          name: repoName,
          description: 'NuovoConnect - Global Digital Micropayments Platform',
          private: false,
          auto_init: true,
        });
        repo = data;
        await new Promise(resolve => setTimeout(resolve, 3000));
      }

      let isEmpty = false;
      try {
        await octokit.git.getRef({ owner: user.login, repo: repoName, ref: 'heads/main' });
      } catch {
        isEmpty = true;
      }

      if (isEmpty) {
        try {
          await octokit.repos.createOrUpdateFileContents({
            owner: user.login,
            repo: repoName,
            path: 'README.md',
            message: 'Initial commit',
            content: Buffer.from('# NuovoConnect Website\n\nGlobal Digital Micropayments Platform\n').toString('base64'),
          });
          await new Promise(resolve => setTimeout(resolve, 2000));
        } catch {}
      }

      const projectDir = process.cwd();
      const files = await getAllFiles(projectDir, projectDir);

      const BATCH_SIZE = 20;
      const blobs = [];
      for (let i = 0; i < files.length; i += BATCH_SIZE) {
        const batch = files.slice(i, i + BATCH_SIZE);
        const results = await Promise.all(
          batch.map(file =>
            octokit.git.createBlob({
              owner: user.login,
              repo: repoName,
              content: file.content,
              encoding: 'base64',
            }).then(({ data }) => ({ path: file.path, sha: data.sha }))
          )
        );
        blobs.push(...results);
      }

      const tree = blobs.map(b => ({
        path: b.path,
        mode: '100644' as const,
        type: 'blob' as const,
        sha: b.sha,
      }));

      const { data: treeData } = await octokit.git.createTree({
        owner: user.login,
        repo: repoName,
        tree,
      });

      let parentSha: string | undefined;
      try {
        const { data: ref } = await octokit.git.getRef({
          owner: user.login,
          repo: repoName,
          ref: 'heads/main',
        });
        parentSha = ref.object.sha;
      } catch {}

      const commitParams: any = {
        owner: user.login,
        repo: repoName,
        message: 'Push NuovoConnect website code',
        tree: treeData.sha,
      };
      if (parentSha) commitParams.parents = [parentSha];

      const { data: commit } = await octokit.git.createCommit(commitParams);

      try {
        await octokit.git.updateRef({
          owner: user.login,
          repo: repoName,
          ref: 'heads/main',
          sha: commit.sha,
          force: true,
        });
      } catch {
        await octokit.git.createRef({
          owner: user.login,
          repo: repoName,
          ref: 'refs/heads/main',
          sha: commit.sha,
        });
      }

      res.json({
        success: true,
        url: repo.html_url,
        filesCount: files.length,
        message: `Pushed ${files.length} files to ${repo.html_url}`,
      });
    } catch (err: any) {
      console.error('GitHub push error:', err);
      res.status(500).json({ success: false, message: err.message });
    }
  });

  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const inquiry = await storage.createContactInquiry(input);

      try {
        await sendContactNotification(input);
      } catch (emailErr) {
        console.error("Failed to send contact notification email:", emailErr);
      }

      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
