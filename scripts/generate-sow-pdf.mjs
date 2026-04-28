import PDFDocument from "pdfkit";
import fs from "fs";

const LOGO = "client/src/assets/nuovoconnect-logo.png";
const OUT = "attached_assets/CP_SOW_NuovoConnect.pdf";
const G = "scripts/fonts/Geist-Black.ttf";
const J = "scripts/fonts/PlusJakartaSans-Regular.ttf";
const JSB = "scripts/fonts/PlusJakartaSans-SemiBold.ttf";
const JBD = "scripts/fonts/PlusJakartaSans-Bold.ttf";

const ML = 60, W = 475, PB = 740, PW = 595.28;

const content = [];
let currentY = 0;
let currentPage = 0;

function newPage() {
  currentPage++;
  currentY = 40;
  content.push({ type: "pageBreak" });
}

function checkSpace(needed) {
  if (currentY + needed > PB) newPage();
}

function addItem(item) {
  content.push({ ...item, y: currentY, page: currentPage });
  currentY += item.h;
}

function th(text, font, size, width, lineGap) {
  const charWidth = size * 0.5;
  const charsPerLine = Math.floor(width / charWidth);
  const lines = Math.ceil(text.length / charsPerLine);
  const lh = size * 1.2 + (lineGap || 0);
  return lines * lh;
}

currentPage = 0;
currentY = 120;

addItem({ type: "header", h: 100 });

currentY = 120;
addItem({ type: "title1", h: 24 });
addItem({ type: "title2", h: 26 });
addItem({ type: "subtitle", h: 18 });
addItem({ type: "divider", h: 20 });

function addSec(n, t) {
  checkSpace(50);
  addItem({ type: "section", n, t, h: 44 });
}

function addBody(t) {
  const h = th(t, "J", 10, W, 3);
  checkSpace(h + 10);
  addItem({ type: "body", t, h: h + 8 });
}

function addBullet(t) {
  const h = th(t, "J", 10, W - 16, 3);
  checkSpace(h + 6);
  addItem({ type: "bullet", t, h: h + 4 });
}

function addSubHead(t) {
  checkSpace(25);
  addItem({ type: "subhead", t, h: 20 });
}

function addTh2(c) {
  checkSpace(30);
  addItem({ type: "th2", c, h: 28 });
}

function addTr2(c, alt) {
  const h = Math.max(28, th(c[1], "J", 9, 335) + 16);
  checkSpace(h);
  addItem({ type: "tr2", c, alt, h });
}

function addTh3(c) {
  checkSpace(30);
  addItem({ type: "th3", c, h: 28 });
}

function addTr3(c, alt) {
  const h = Math.max(28, th(c[2], "J", 9, 251) + 16);
  checkSpace(h);
  addItem({ type: "tr3", c, alt, h });
}

function addSpace(s) { currentY += s; }

addSec(1, "Executive Summary");
addBody("This Statement of Work (SOW) outlines the development of a comprehensive travel eSIM connectivity management platform. The platform will enable activation, lifecycle management, usage monitoring, reporting, and secure API-based integrations for enterprise clients.");

addSpace(4);
addSec(2, "Scope");
addBullet("Admin Dashboard & Control Panel");
addBullet("Subscriber Management Module");
addBullet("Backend APIs & Database Infrastructure");
addBullet("Performance, Scalability & Security Framework");

addSpace(4);
addSec(3, "Admin Dashboard \u2013 Functional Overview");
addSpace(4);
addTh2(["Module", "Key Features"]);
addTr2(["Plan Management", "Create, edit, delete plans; pricing control; inventory tracking; scheduling; coverage mapping"], false);
addTr2(["User Management", "User search & filters; profile details; status control; segmentation; export tools"], true);
addTr2(["Order Monitoring", "Transaction tracking; order history; financial reporting; usage trends"], false);
addTr2(["Support Management", "Ticket management; email templates; communication tools"], true);
addTr2(["System Configuration", "Role-based access control; API key management; audit logs; system health monitoring"], false);
addTr2(["Financial Overview", "Wallet balance; credit top-up; transaction summaries"], true);

addSpace(4);
addSec(4, "Subscriber Management Module");
addBullet("eSIM status visibility (IMSI, ICCID, Country, Network)");
addBullet("Order tracking per profile");
addBullet("IMSI-to-network access mapping");
addBullet("Usage monitoring & reporting");

addSpace(4);
addSec(5, "Backend API & Database Architecture");
addSubHead("RESTful API Capabilities");
addBullet("Authentication (login, registration, password reset)");
addBullet("User management endpoints");
addBullet("eSIM plan CRUD operations");
addBullet("Order & payment processing endpoints");
addBullet("Usage tracking & analytics endpoints");
addBullet("Admin dashboard data endpoints");
addBullet("API versioning & rate limiting");
addBullet("Swagger/OpenAPI documentation");
addSpace(8);
addSubHead("Database Architecture");
addBullet("Normalised schema design");
addBullet("Encrypted user data storage");
addBullet("Plan & inventory tables");
addBullet("Transaction & payment records (PCI aligned)");
addBullet("Usage tracking structure");
addBullet("Audit logs & activity tracking");
addBullet("Backup & recovery mechanisms");

addSpace(4);
addSec(6, "Performance & Scalability");
addBullet("Redis caching");
addBullet("Load balancing configuration");
addBullet("API response compression");
addBullet("Asynchronous job queues");
addBullet("Auto-scaling infrastructure");
addBullet("Performance monitoring tools");

addSpace(4);
addSec(7, "Project Timeline");
addSpace(4);
addTh3(["Phase", "Duration", "Scope"]);
addTr3(["Backend Development", "4 Weeks", "API development, database implementation, authentication setup"], false);
addTr3(["Testing & QA", "1 Week", "Functional testing, security validation, performance optimization"], true);
addTr3(["Deployment", "1 Week", "Production deployment & post-launch support"], false);

addSpace(4);
addSec(8, "Assumptions & Dependencies");
addSubHead("Assumptions");
addBullet("Client will develop and manage its own frontend.");
addBullet("Client will integrate via the provided APIs.");
addBullet("Client will manage IMSI mapping and exposure.");
addSpace(8);
addSubHead("Dependencies");
addBullet("Complete country-IMSI mapping to be provided by the client.");
addBullet("Timely API integration to avoid project delays.");
addBullet("Scope changes beyond 5 weeks are treated as Change Requests (CRs).");

const expectedPages = currentPage + 1;

const d = new PDFDocument({ size: "A4", autoFirstPage: false, margins: { top: 40, bottom: 60, left: ML, right: 60 } });
d.registerFont("G", G);
d.registerFont("J", J);
d.registerFont("JSB", JSB);
d.registerFont("JBD", JBD);

const stream = fs.createWriteStream(OUT);
d.pipe(stream);

function drawFooter(pageIdx) {
  const fy = 780;
  d.save();
  const fg = d.linearGradient(0, fy, PW, fy);
  fg.stop(0, "#f97316").stop(1, "#f59e0b");
  d.rect(0, fy, PW, 2).fill(fg);
  d.font("J").fontSize(8).fillColor("#6b7280")
    .text("www.nuovoconnect.com", ML, fy + 10, { lineBreak: false });
  d.font("J").fontSize(8).fillColor("#6b7280")
    .text(`Page ${pageIdx + 1} of ${expectedPages}`, 0, fy + 10, { width: PW - 60, align: "right", lineBreak: false });
  d.font("J").fontSize(7).fillColor("#9ca3af")
    .text("Confidential", 0, fy + 10, { width: PW, align: "center", lineBreak: false });
  d.restore();
}

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

function drawWrapped(doc, text, font, size, color, x, y, maxWidth, lineGap) {
  doc.font(font).fontSize(size).fillColor(color);
  const words = text.split(" ");
  let line = "";
  let cy = y;
  const lh = size * 1.2 + (lineGap || 0);
  for (const word of words) {
    const test = line ? line + " " + word : word;
    if (doc.widthOfString(test) > maxWidth && line) {
      doc.text(line, x, cy, { lineBreak: false });
      cy += lh;
      line = word;
    } else {
      line = test;
    }
  }
  if (line) doc.text(line, x, cy, { lineBreak: false });
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
      case "title1":
        d.font("G").fontSize(18).fillColor("#111827")
          .text("Travel eSIM Connectivity", ML, y, { width: W, align: "center", lineBreak: false });
        break;
      case "title2":
        d.font("G").fontSize(18).fillColor("#111827")
          .text("Management Platform", ML, y, { width: W, align: "center", lineBreak: false });
        break;
      case "subtitle":
        d.font("J").fontSize(10).fillColor("#6b7280")
          .text("Comprehensive International eSIM Connectivity Management Platform", ML, y, { width: W, align: "center", lineBreak: false });
        break;
      case "divider": {
        const dg = d.linearGradient(ML + 100, y, PW - 60 - 100, y);
        dg.stop(0, "#f97316").stop(1, "#f59e0b");
        d.moveTo(ML + 100, y).lineTo(PW - 60 - 100, y).lineWidth(1.5).stroke(dg);
        break;
      }
      case "section":
        d.roundedRect(ML, y, W, 32, 4).fill("#fff7ed");
        d.font("JBD").fontSize(13).fillColor("#f97316")
          .text(`${item.n}.`, ML + 12, y + 9, { lineBreak: false });
        const nw = d.widthOfString(`${item.n}. `);
        d.font("JBD").fontSize(13).fillColor("#111827")
          .text(item.t, ML + 12 + nw, y + 9, { lineBreak: false });
        break;
      case "body":
        drawWrapped(d, item.t, "J", 10, "#374151", ML, y, W, 3);
        break;
      case "bullet":
        d.circle(ML + 8, y + 6, 2.5).fill("#f97316");
        drawWrapped(d, item.t, "J", 10, "#374151", ML + 16, y, W - 16, 3);
        break;
      case "subhead":
        d.font("JSB").fontSize(11).fillColor("#111827")
          .text(item.t, ML + 8, y, { lineBreak: false });
        break;
      case "th2": {
        const g = d.linearGradient(ML, y, ML + W, y);
        g.stop(0, "#f97316").stop(1, "#f59e0b");
        d.roundedRect(ML, y, W, 28, 4).fill(g);
        d.font("JSB").fontSize(9).fillColor("#ffffff")
          .text(item.c[0], ML + 8, y + 8, { width: 130, lineBreak: false });
        d.font("JSB").fontSize(9).fillColor("#ffffff")
          .text(item.c[1], ML + 140, y + 8, { width: 335, lineBreak: false });
        break;
      }
      case "tr2":
        d.rect(ML, y, W, item.h).fill(item.alt ? "#fef3e2" : "#ffffff");
        d.rect(ML, y, W, item.h).lineWidth(0.5).stroke("#e5e7eb");
        d.font("J").fontSize(9).fillColor("#374151")
          .text(item.c[0], ML + 8, y + 8, { width: 130, lineBreak: false });
        d.font("J").fontSize(9).fillColor("#374151")
          .text(item.c[1], ML + 140, y + 8, { width: 335, lineBreak: false });
        break;
      case "th3": {
        const g = d.linearGradient(ML, y, ML + W, y);
        g.stop(0, "#f97316").stop(1, "#f59e0b");
        d.roundedRect(ML, y, W, 28, 4).fill(g);
        d.font("JSB").fontSize(9).fillColor("#ffffff")
          .text(item.c[0], ML + 8, y + 8, { width: 132, lineBreak: false });
        d.font("JSB").fontSize(9).fillColor("#ffffff")
          .text(item.c[1], ML + 148, y + 8, { width: 112, lineBreak: false });
        d.font("JSB").fontSize(9).fillColor("#ffffff")
          .text(item.c[2], ML + 268, y + 8, { width: 259, lineBreak: false });
        break;
      }
      case "tr3":
        d.rect(ML, y, W, item.h).fill(item.alt ? "#fef3e2" : "#ffffff");
        d.rect(ML, y, W, item.h).lineWidth(0.5).stroke("#e5e7eb");
        d.font("J").fontSize(9).fillColor("#374151")
          .text(item.c[0], ML + 8, y + 8, { width: 132, lineBreak: false });
        d.font("J").fontSize(9).fillColor("#374151")
          .text(item.c[1], ML + 148, y + 8, { width: 112, lineBreak: false });
        d.font("J").fontSize(9).fillColor("#374151")
          .text(item.c[2], ML + 268, y + 8, { width: 251, lineBreak: false });
        break;
    }
  }
  drawFooter(p);
}

d.end();
stream.on("finish", () => {
  console.log(`PDF saved to: ${OUT}`);
  console.log(`Pages: ${expectedPages}`);
});
