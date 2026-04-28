import PDFDocument from "pdfkit";
import XLSX from "xlsx";
import fs from "fs";

const LOGO = "client/src/assets/nuovoconnect-logo.png";
const OUT = "attached_assets/Customer_Proposal_NuovoConnect.pdf";
const G = "scripts/fonts/Geist-Black.ttf";
const J = "scripts/fonts/PlusJakartaSans-Regular.ttf";
const JSB = "scripts/fonts/PlusJakartaSans-SemiBold.ttf";
const JBD = "scripts/fonts/PlusJakartaSans-Bold.ttf";

const ML = 50, MR = 50, PW = 595.28, W = PW - ML - MR, PB = 740;

const wb = XLSX.readFile("attached_assets/Customer_proposal_1773135930801.xlsx");
const ws = wb.Sheets[wb.SheetNames[0]];
const raw = XLSX.utils.sheet_to_json(ws, { header: 1, defval: "" });

const costRows = [];
for (let i = 1; i <= 5; i++) {
  const r = raw[i];
  if (r && r[0]) costRows.push({ item: r[0], value: r[1], mechanism: r[2] });
}

const countryRows = [];
for (let i = 9; i < raw.length; i++) {
  const r = raw[i];
  if (r && r[0]) {
    countryRows.push({
      country: String(r[0]).trim(),
      region: String(r[1]).trim(),
      price: typeof r[2] === "number" ? r[2] : parseFloat(r[2]) || 0,
      operator: String(r[3]).trim(),
      imsi: String(r[5]).trim(),
    });
  }
}

const regions = [...new Set(countryRows.map((c) => c.region).filter(Boolean))].sort();

const content = [];
let cy = 0, cp = 0;

function np() { cp++; cy = 40; content.push({ type: "pb" }); }
function ck(s) { if (cy + s > PB) np(); }
function add(item) { content.push({ ...item, y: cy, page: cp }); cy += item.h; }
function sp(s) { cy += s; }


cy = 100;
add({ type: "header", h: 0 });
cy = 115;
add({ type: "docTitle", h: 30 });
add({ type: "docSubtitle", h: 22 });
sp(4);
add({ type: "divider", h: 16 });

add({ type: "sec", n: "1", t: "Additional Cost Details", h: 40 });
sp(4);
add({ type: "costHeader", h: 28 });
costRows.forEach((r, i) => {
  const rh = 28;
  ck(rh);
  add({ type: "costRow", d: r, alt: i % 2 === 1, h: rh });
});

sp(12);
add({ type: "sec", n: "2", t: "Coverage & Pricing by Region", h: 40 });
sp(4);

add({ type: "summary", h: 30 });
sp(8);

regions.forEach((region) => {
  const countries = countryRows.filter((c) => c.region === region);
  ck(50);
  add({ type: "regionHeader", region, count: countries.length, h: 28 });
  add({ type: "priceHeader", h: 24 });
  countries.sort((a, b) => a.country.localeCompare(b.country));
  countries.forEach((c, i) => {
    const rh = 20;
    ck(rh);
    add({ type: "priceRow", d: c, alt: i % 2 === 1, h: rh });
  });
  sp(10);
});

const expectedPages = cp + 1;

const d = new PDFDocument({ size: "A4", autoFirstPage: false, margins: { top: 40, bottom: 60, left: ML, right: MR } });
d.registerFont("G", G);
d.registerFont("J", J);
d.registerFont("JSB", JSB);
d.registerFont("JBD", JBD);

const stream = fs.createWriteStream(OUT);
d.pipe(stream);

const _origAddPage = d.addPage.bind(d);
let _allowAddPage = false;
d.addPage = function(...args) {
  if (!_allowAddPage) return d;
  return _origAddPage(...args);
};
function safeAddPage() {
  _allowAddPage = true;
  d.addPage();
  _allowAddPage = false;
}

function drawFooter(pageIdx) {
  const fy = 780;
  d.save();
  const fg = d.linearGradient(0, fy, PW, fy);
  fg.stop(0, "#f97316").stop(1, "#f59e0b");
  d.rect(0, fy, PW, 2).fill(fg);
  d.font("J").fontSize(8).fillColor("#6b7280")
    .text("www.nuovoconnect.com", ML, fy + 10, { lineBreak: false });
  d.font("J").fontSize(8).fillColor("#6b7280")
    .text(`Page ${pageIdx + 1} of ${expectedPages}`, 0, fy + 10, { width: PW - MR, align: "right", lineBreak: false });
  d.font("J").fontSize(7).fillColor("#9ca3af")
    .text("Confidential", 0, fy + 10, { width: PW, align: "center", lineBreak: false });
  d.restore();
}

for (let p = 0; p < expectedPages; p++) {
  safeAddPage();
  const items = content.filter((c) => c.page === p);
  for (const item of items) {
    const y = item.y;
    switch (item.type) {
      case "header": {
        const grad = d.linearGradient(0, 0, PW, 0);
        grad.stop(0, "#f97316").stop(1, "#f59e0b");
        d.rect(0, 0, PW, 100).fill(grad);
        d.image(LOGO, ML, 30, { width: 36, height: 36 });
        d.font("G").fontSize(22).fillColor("#ffffff")
          .text("NuovoConnect", ML + 46, 38, { lineBreak: false });
        break;
      }
      case "docTitle":
        d.font("G").fontSize(20).fillColor("#111827")
          .text("eSIM Connectivity Proposal", ML, y, { width: W, align: "center", lineBreak: false });
        break;
      case "docSubtitle":
        d.font("J").fontSize(10).fillColor("#6b7280")
          .text("Customer Facing Pricing Sheet \u2022 All numbers in USD", ML, y, { width: W, align: "center", lineBreak: false });
        break;
      case "divider": {
        const dg = d.linearGradient(ML + 80, y, PW - MR - 80, y);
        dg.stop(0, "#f97316").stop(1, "#f59e0b");
        d.moveTo(ML + 80, y).lineTo(PW - MR - 80, y).lineWidth(1.5).stroke(dg);
        break;
      }
      case "sec": {
        d.roundedRect(ML, y, W, 32, 4).fill("#fff7ed");
        d.font("JBD").fontSize(13).fillColor("#f97316")
          .text(`${item.n}.`, ML + 12, y + 9, { lineBreak: false });
        const nw = d.widthOfString(`${item.n}. `);
        d.font("JBD").fontSize(13).fillColor("#111827")
          .text(item.t, ML + 12 + nw, y + 9, { lineBreak: false });
        break;
      }
      case "costHeader": {
        const g = d.linearGradient(ML, y, ML + W, y);
        g.stop(0, "#f97316").stop(1, "#f59e0b");
        d.roundedRect(ML, y, W, 28, 4).fill(g);
        d.font("JSB").fontSize(9).fillColor("#ffffff")
          .text("Cost Item", ML + 10, y + 9, { width: 160, lineBreak: false });
        d.font("JSB").fontSize(9).fillColor("#ffffff")
          .text("Amount (USD)", ML + 175, y + 9, { width: 100, align: "right", lineBreak: false });
        d.font("JSB").fontSize(9).fillColor("#ffffff")
          .text("Charging Mechanism", ML + 290, y + 9, { width: 200, lineBreak: false });
        break;
      }
      case "costRow": {
        const cr = item.d;
        d.rect(ML, y, W, 28).fill(item.alt ? "#fef3e2" : "#ffffff");
        d.rect(ML, y, W, 28).lineWidth(0.5).stroke("#e5e7eb");
        d.font("JSB").fontSize(9).fillColor("#111827")
          .text(cr.item, ML + 10, y + 9, { width: 160, lineBreak: false });
        const val = typeof cr.value === "number"
          ? cr.value >= 1000 ? `$${cr.value.toLocaleString()}` : `$${cr.value.toFixed(2)}`
          : String(cr.value);
        d.font("J").fontSize(9).fillColor("#f97316")
          .text(val, ML + 175, y + 9, { width: 100, align: "right", lineBreak: false });
        d.font("J").fontSize(8).fillColor("#6b7280")
          .text(cr.mechanism, ML + 290, y + 9, { width: 200, lineBreak: false });
        break;
      }
      case "summary":
        d.font("J").fontSize(10).fillColor("#374151")
          .text(`Coverage across ${countryRows.length} countries in ${regions.length} regions worldwide.`, ML, y, { width: W, lineBreak: false });
        break;
      case "regionHeader": {
        d.roundedRect(ML, y, W, 24, 3).fill("#111827");
        d.font("JSB").fontSize(10).fillColor("#ffffff")
          .text(item.region, ML + 10, y + 6, { lineBreak: false });
        d.font("J").fontSize(8).fillColor("#f59e0b")
          .text(`${item.count} countries`, ML + W - 80, y + 7, { width: 70, align: "right", lineBreak: false });
        break;
      }
      case "priceHeader": {
        d.rect(ML, y, W, 22).fill("#f3f4f6");
        d.rect(ML, y, W, 22).lineWidth(0.3).stroke("#e5e7eb");
        d.font("JSB").fontSize(7.5).fillColor("#6b7280")
          .text("Country", ML + 10, y + 7, { width: 120, lineBreak: false });
        d.font("JSB").fontSize(7.5).fillColor("#6b7280")
          .text("Price/GB", ML + 135, y + 7, { width: 65, lineBreak: false });
        d.font("JSB").fontSize(7.5).fillColor("#6b7280")
          .text("Operator", ML + 210, y + 7, { width: 200, lineBreak: false });
        d.font("JSB").fontSize(7.5).fillColor("#6b7280")
          .text("IMSI", ML + W - 45, y + 7, { width: 40, lineBreak: false });
        break;
      }
      case "priceRow": {
        const c = item.d;
        if (item.alt) d.rect(ML, y, W, 20).fill("#fafafa");
        d.rect(ML, y, W, 20).lineWidth(0.2).stroke("#f3f4f6");
        d.font("J").fontSize(8).fillColor("#111827")
          .text(c.country, ML + 10, y + 5, { width: 120, lineBreak: false });
        d.font("JSB").fontSize(8).fillColor("#f97316")
          .text(`$${c.price.toFixed(2)}`, ML + 135, y + 5, { width: 65, lineBreak: false });
        d.font("J").fontSize(7.5).fillColor("#374151")
          .text(c.operator, ML + 210, y + 5, { width: 200, lineBreak: false });
        d.font("J").fontSize(7.5).fillColor("#9ca3af")
          .text(c.imsi, ML + W - 45, y + 5, { width: 40, lineBreak: false });
        break;
      }
    }
  }
  drawFooter(p);
}

d.end();
stream.on("finish", () => {
  console.log(`PDF saved to: ${OUT}`);
  console.log(`Pages: ${expectedPages}`);
});
