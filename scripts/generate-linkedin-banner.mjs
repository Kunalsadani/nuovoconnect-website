import { createCanvas, registerFont, loadImage } from "canvas";
import sharp from "sharp";
import fs from "fs";
import path from "path";

const GEIST_FONT = path.join(process.cwd(), "scripts/fonts/Geist-Black.ttf");
const LOGO_PATH = path.join(process.cwd(), "client/src/assets/nuovoconnect-logo.png");
const OUTPUT_PATH = path.join(process.cwd(), "attached_assets/nuovoconnect-linkedin-banner.png");

registerFont(GEIST_FONT, { family: "Geist", weight: "900" });

const WIDTH = 1128;
const HEIGHT = 191;

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

  const gradient = ctx.createLinearGradient(0, 0, WIDTH, 0);
  gradient.addColorStop(0, "#111827");
  gradient.addColorStop(0.6, "#1a1f2e");
  gradient.addColorStop(1, "#111827");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  ctx.strokeStyle = "rgba(249, 115, 22, 0.08)";
  ctx.lineWidth = 1;
  for (let i = 0; i < WIDTH; i += 60) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, HEIGHT);
    ctx.stroke();
  }
  for (let j = 0; j < HEIGHT; j += 60) {
    ctx.beginPath();
    ctx.moveTo(0, j);
    ctx.lineTo(WIDTH, j);
    ctx.stroke();
  }

  const nodes = [
    { x: 50, y: 40, r: 3 }, { x: 120, y: 150, r: 2.5 },
    { x: 200, y: 80, r: 2 }, { x: 780, y: 50, r: 3 },
    { x: 850, y: 130, r: 2.5 }, { x: 920, y: 70, r: 2 },
    { x: 1000, y: 140, r: 3 }, { x: 1060, y: 50, r: 2 },
    { x: 150, y: 100, r: 2 }, { x: 950, y: 100, r: 2.5 },
  ];

  ctx.strokeStyle = "rgba(249, 115, 22, 0.12)";
  ctx.lineWidth = 0.8;
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
      if (dist < 250) {
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }
  }

  for (const node of nodes) {
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(249, 115, 22, 0.5)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(node.x, node.y, node.r + 4, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(249, 115, 22, 0.1)";
    ctx.fill();
  }

  const accentGradient = ctx.createLinearGradient(0, HEIGHT - 3, WIDTH, HEIGHT - 3);
  accentGradient.addColorStop(0, "rgba(249, 115, 22, 0)");
  accentGradient.addColorStop(0.3, "rgba(249, 115, 22, 0.6)");
  accentGradient.addColorStop(0.7, "rgba(245, 158, 11, 0.6)");
  accentGradient.addColorStop(1, "rgba(245, 158, 11, 0)");
  ctx.fillStyle = accentGradient;
  ctx.fillRect(0, HEIGHT - 3, WIDTH, 3);

  const rawLogo = fs.readFileSync(LOGO_PATH);
  const cleanLogo = await removeWhiteBackground(rawLogo);
  const logoImg = await loadImage(cleanLogo);

  const logoSize = 72;
  const centerX = WIDTH / 2;
  const logoX = centerX - 180;
  const logoY = (HEIGHT - logoSize) / 2 - 10;

  ctx.drawImage(logoImg, logoX, logoY, logoSize, logoSize);

  const textX = logoX + logoSize + 14;
  const textY = logoY + logoSize / 2 - 2;

  ctx.font = '900 32px "Geist"';
  ctx.fillStyle = "#ffffff";
  ctx.textBaseline = "middle";
  ctx.fillText("NuovoConnect", textX, textY);

  const taglineY = logoY + logoSize + 14;
  ctx.font = '900 15px "Geist"';

  const tagline = "Activate. Grow. Engage. Reward.";
  const taglineWidth = ctx.measureText(tagline).width;
  const taglineX = centerX - taglineWidth / 2;

  const words = ["Activate.", "Grow.", "Engage.", "Reward."];
  let currentX = taglineX;

  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      const wordGrad = ctx.createLinearGradient(currentX, 0, currentX + ctx.measureText(words[i]).width, 0);
      wordGrad.addColorStop(0, "#f97316");
      wordGrad.addColorStop(1, "#f59e0b");
      ctx.fillStyle = wordGrad;
    } else {
      ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
    }
    ctx.fillText(words[i], currentX, taglineY);
    currentX += ctx.measureText(words[i] + " ").width;
  }

  const buffer = canvas.toBuffer("image/png");
  await sharp(buffer).png({ quality: 100 }).toFile(OUTPUT_PATH);
  console.log(`Banner saved to: ${OUTPUT_PATH}`);
}

generateBanner().catch(console.error);
