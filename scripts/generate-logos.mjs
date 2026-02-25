import { createCanvas, registerFont, loadImage } from "canvas";
import sharp from "sharp";
import fs from "fs";
import path from "path";

const FONT_PATH = path.join(process.cwd(), "scripts/fonts/Geist-Black.ttf");
const LOGO_ICON_PATH = path.join(process.cwd(), "attached_assets/image_(1)_1772045866564.jpg");
const OUTPUT_DIR = path.join(process.cwd(), "client/public/images");

registerFont(FONT_PATH, { family: "Geist", weight: "900" });

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

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
    raw: { width: info.width, height: info.height, channels: 4 }
  }).png().toBuffer();
}

async function createIconOnly() {
  const original = await sharp(LOGO_ICON_PATH).png().toBuffer();
  const transparent = await removeWhiteBackground(original);

  const trimmed = await sharp(transparent)
    .trim({ threshold: 10 })
    .toBuffer();

  const trimMeta = await sharp(trimmed).metadata();

  const padding = Math.round(trimMeta.width * 0.08);
  const finalSize = Math.max(trimMeta.width, trimMeta.height) + padding * 2;

  const result = await sharp({
    create: {
      width: finalSize,
      height: finalSize,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      {
        input: trimmed,
        left: padding + Math.round((finalSize - padding * 2 - trimMeta.width) / 2),
        top: padding + Math.round((finalSize - padding * 2 - trimMeta.height) / 2),
      },
    ])
    .png()
    .toBuffer();

  const finalPath = path.join(OUTPUT_DIR, "nuovoconnect-logo-icon.png");
  fs.writeFileSync(finalPath, result);
  console.log(`Icon-only logo saved: ${finalPath} (${finalSize}x${finalSize})`);
}

async function createLogoWithName() {
  const original = await sharp(LOGO_ICON_PATH).png().toBuffer();
  const transparent = await removeWhiteBackground(original);
  const iconBuffer = await sharp(transparent)
    .trim({ threshold: 10 })
    .png()
    .toBuffer();

  const iconMeta = await sharp(iconBuffer).metadata();

  const iconHeight = 200;
  const iconWidth = Math.round((iconMeta.width / iconMeta.height) * iconHeight);

  const resizedIcon = await sharp(iconBuffer)
    .resize(iconWidth, iconHeight, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const text = "NuovoConnect";
  const fontSize = 140;
  const gap = 30;

  const measureCanvas = createCanvas(2000, 300);
  const measureCtx = measureCanvas.getContext("2d");
  measureCtx.font = `900 ${fontSize}px "Geist"`;
  const textMetrics = measureCtx.measureText(text);
  const textWidth = Math.ceil(textMetrics.width);

  const padding = 40;
  const totalWidth = iconWidth + gap + textWidth + padding * 2;
  const totalHeight = iconHeight + padding * 2;

  const canvas = createCanvas(totalWidth, totalHeight);
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, totalWidth, totalHeight);

  const img = await loadImage(resizedIcon);
  const iconY = padding;
  ctx.drawImage(img, padding, iconY, iconWidth, iconHeight);

  ctx.font = `900 ${fontSize}px "Geist"`;
  ctx.fillStyle = "#111827";
  ctx.textBaseline = "middle";
  ctx.fillText(text, padding + iconWidth + gap, totalHeight / 2 + 4);

  const pngBuffer = canvas.toBuffer("image/png");

  const finalPath = path.join(OUTPUT_DIR, "nuovoconnect-logo-full.png");
  fs.writeFileSync(finalPath, pngBuffer);
  console.log(`Full logo saved: ${finalPath} (${totalWidth}x${totalHeight})`);

  const darkCanvas = createCanvas(totalWidth, totalHeight);
  const darkCtx = darkCanvas.getContext("2d");
  darkCtx.clearRect(0, 0, totalWidth, totalHeight);
  darkCtx.drawImage(img, padding, iconY, iconWidth, iconHeight);
  darkCtx.font = `900 ${fontSize}px "Geist"`;
  darkCtx.fillStyle = "#FFFFFF";
  darkCtx.textBaseline = "middle";
  darkCtx.fillText(text, padding + iconWidth + gap, totalHeight / 2 + 4);

  const darkPngBuffer = darkCanvas.toBuffer("image/png");
  const darkPath = path.join(OUTPUT_DIR, "nuovoconnect-logo-full-white.png");
  fs.writeFileSync(darkPath, darkPngBuffer);
  console.log(`Full logo (white text) saved: ${darkPath} (${totalWidth}x${totalHeight})`);
}

async function main() {
  await createIconOnly();
  await createLogoWithName();
  console.log("\nAll logos generated successfully!");
}

main().catch(console.error);
