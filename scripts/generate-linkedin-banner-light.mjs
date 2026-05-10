import { createCanvas, registerFont, loadImage } from "canvas";
import sharp from "sharp";
import fs from "fs";
import path from "path";

const FONT_BOLD    = path.join(process.cwd(), "scripts/fonts/PlusJakartaSans-Bold.ttf");
const FONT_SEMIBOLD = path.join(process.cwd(), "scripts/fonts/PlusJakartaSans-SemiBold.ttf");
const LOGO_PATH    = path.join(process.cwd(), "client/src/assets/nuovoconnect-logo.png");
const OUTPUT_PATH  = path.join(process.cwd(), "brand_assets/nuovoconnect-linkedin-banner-light.png");

registerFont(FONT_BOLD,     { family: "PlusJakarta", weight: "700" });
registerFont(FONT_SEMIBOLD, { family: "PlusJakarta", weight: "600" });

const WIDTH  = 1584;
const HEIGHT = 396;

async function removeWhiteBackground(inputBuffer) {
  const { data, info } = await sharp(inputBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = new Uint8Array(data);
  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i], g = pixels[i + 1], b = pixels[i + 2];
    if (r > 220 && g > 220 && b > 220) {
      pixels[i + 3] = 0;
    } else if (r > 200 && g > 200 && b > 200) {
      const avg = (r + g + b) / 3;
      pixels[i + 3] = Math.round(255 * (1 - (avg - 200) / 55));
    }
  }

  return sharp(Buffer.from(pixels), {
    raw: { width: info.width, height: info.height, channels: 4 },
  }).png().toBuffer();
}

async function generateBanner() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext("2d");

  // ── Light background: subtle warm-white → cool-gray gradient ──
  const bg = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  bg.addColorStop(0,   "#ffffff");
  bg.addColorStop(0.5, "#F4F4F6");
  bg.addColorStop(1,   "#EDE9FE");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // ── Subtle grid lines (purple-tinted) ──
  ctx.strokeStyle = "rgba(124, 58, 237, 0.06)";
  ctx.lineWidth = 1;
  const GRID = 80;
  for (let x = 0; x < WIDTH; x += GRID) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, HEIGHT); ctx.stroke();
  }
  for (let y = 0; y < HEIGHT; y += GRID) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(WIDTH, y); ctx.stroke();
  }

  // ── Network nodes and connecting lines (left + right clusters) ──
  const nodes = [
    // left cluster
    { x:  80, y:  70, r: 3.5 }, { x: 170, y: 290, r: 3 },
    { x: 290, y: 120, r: 2.5 }, { x: 200, y: 180, r: 2 },
    { x:  60, y: 220, r: 2.5 }, { x: 340, y: 310, r: 2 },
    // right cluster
    { x: 1240, y:  80, r: 3.5 }, { x: 1380, y: 270, r: 3 },
    { x: 1460, y: 110, r: 2.5 }, { x: 1300, y: 210, r: 2 },
    { x: 1520, y: 320, r: 2 },   { x: 1180, y: 300, r: 2.5 },
  ];

  // connection lines
  ctx.lineWidth = 0.9;
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
      if (dist < 320) {
        const lineGrad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
        lineGrad.addColorStop(0, "rgba(124, 58, 237, 0.18)");
        lineGrad.addColorStop(1, "rgba(59, 130, 246, 0.14)");
        ctx.strokeStyle = lineGrad;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }
  }

  // node dots with soft glow
  for (const node of nodes) {
    // glow
    const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.r + 10);
    glow.addColorStop(0, "rgba(124, 58, 237, 0.18)");
    glow.addColorStop(1, "rgba(124, 58, 237, 0)");
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.r + 10, 0, Math.PI * 2);
    ctx.fillStyle = glow;
    ctx.fill();
    // dot
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(124, 58, 237, 0.55)";
    ctx.fill();
  }

  // ── Logo ──
  const rawLogo = fs.readFileSync(LOGO_PATH);
  const cleanLogo = await removeWhiteBackground(rawLogo);
  const logoImg = await loadImage(cleanLogo);

  const logoH    = 100;
  const logoW    = Math.round(logoImg.width * (logoH / logoImg.height));
  const centerX  = WIDTH / 2;
  const centerY  = HEIGHT / 2;
  const blockGap = 20;

  // measure company name to find total block width
  ctx.font = '700 52px "PlusJakarta"';
  const nameW  = ctx.measureText("NuovoConnect").width;
  const totalW = logoW + blockGap + nameW;
  const blockX = centerX - totalW / 2;
  const logoY  = centerY - logoH / 2 - 24;

  ctx.drawImage(logoImg, blockX, logoY, logoW, logoH);

  // Company name — stroke + fill to simulate ExtraBold weight
  ctx.font = '700 52px "PlusJakarta"';
  ctx.textBaseline = "middle";
  ctx.strokeStyle = "#0D1B4B";
  ctx.lineWidth = 2.4;
  ctx.lineJoin = "round";
  ctx.strokeText("NuovoConnect", blockX + logoW + blockGap, logoY + logoH / 2);
  ctx.fillStyle = "#0D1B4B";
  ctx.fillText("NuovoConnect", blockX + logoW + blockGap, logoY + logoH / 2);

  // ── Tagline: "Activate. Grow. Engage. Reward." ──
  ctx.font = '600 26px "PlusJakarta"';
  const words = ["Activate.", "Grow.", "Engage.", "Reward."];
  const spaces = words.map(w => ctx.measureText(w + " ").width);
  const taglineTotal = spaces.reduce((a, b) => a + b, 0) - ctx.measureText(" ").width;
  let tx = centerX - taglineTotal / 2;
  const taglineY = logoY + logoH + 36;

  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      // "Activate." in brand purple
      ctx.fillStyle = "#7C3AED";
    } else {
      // remaining words in navy
      ctx.fillStyle = "#0D1B4B";
    }
    ctx.textBaseline = "alphabetic";
    ctx.fillText(words[i], tx, taglineY);
    tx += spaces[i];
  }

  // ── Bottom accent bar: purple → blue → teal ──
  const accent = ctx.createLinearGradient(0, 0, WIDTH, 0);
  accent.addColorStop(0,   "#7C3AED");
  accent.addColorStop(0.5, "#3B82F6");
  accent.addColorStop(1,   "#34D399");
  ctx.fillStyle = accent;
  ctx.fillRect(0, HEIGHT - 5, WIDTH, 5);

  // ── Save ──
  const buffer = canvas.toBuffer("image/png");
  await sharp(buffer).png({ quality: 100 }).toFile(OUTPUT_PATH);
  console.log(`Banner saved to: ${OUTPUT_PATH}`);
}

generateBanner().catch(console.error);
