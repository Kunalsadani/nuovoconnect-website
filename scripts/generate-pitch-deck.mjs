import PptxGenJS from "pptxgenjs";
import fs from "fs";

const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "NuovoConnect";
pptx.company = "NuovoConnect";
pptx.subject = "Sales Pitch Deck";
pptx.title = "NuovoConnect – Global Digital Micropayments Platform";

const ORANGE = "F97316";
const AMBER = "F59E0B";
const DARK = "111827";
const WHITE = "FFFFFF";
const LIGHT_ORANGE = "FFF7ED";
const GRAY = "6B7280";
const LIGHT_GRAY = "F9FAFB";

function addBackground(slide, color) {
  slide.background = { color: color || WHITE };
}

function addFooter(slide) {
  slide.addText("www.nuovoconnect.com  |  kunal@nuovoconnect.com  |  +971 54 382 5670", {
    x: 0, y: 6.85, w: "100%", h: 0.4,
    fontSize: 9, color: GRAY, align: "center",
    fontFace: "Arial"
  });
}

function addSlideNumber(slide, num, total) {
  slide.addText(`${num} / ${total}`, {
    x: 12.2, y: 6.85, w: 1, h: 0.4,
    fontSize: 8, color: GRAY, align: "right",
    fontFace: "Arial"
  });
}

const TOTAL_SLIDES = 12;

// ── SLIDE 1: TITLE ──
let slide = pptx.addSlide();
addBackground(slide, DARK);
slide.addShape(pptx.ShapeType.rect, {
  x: 0, y: 0, w: 13.33, h: 7.5,
  fill: { type: "solid", color: DARK }
});
slide.addShape(pptx.ShapeType.rect, {
  x: 8.5, y: 0, w: 4.83, h: 7.5,
  fill: { type: "solid", color: ORANGE }, rectRadius: 0
});
slide.addText("NuovoConnect", {
  x: 0.8, y: 1.5, w: 7, h: 1.2,
  fontSize: 52, fontFace: "Arial Black", color: ORANGE, bold: true
});
slide.addText("Global Digital\nMicropayments Platform", {
  x: 0.8, y: 2.8, w: 7, h: 1.6,
  fontSize: 36, fontFace: "Arial", color: WHITE, bold: true, lineSpacingMultiple: 1.1
});
slide.addText("Activate global audiences. Unlock new territories.\nDeliver compelling digital value products worldwide.", {
  x: 0.8, y: 4.6, w: 7, h: 1,
  fontSize: 16, fontFace: "Arial", color: GRAY, lineSpacingMultiple: 1.4
});
slide.addText("Sales Presentation 2026", {
  x: 0.8, y: 6.0, w: 4, h: 0.5,
  fontSize: 13, fontFace: "Arial", color: AMBER, bold: true
});
const statsRight = [
  { val: "3bn+", label: "Consumer Access" },
  { val: "170+", label: "Countries" },
  { val: "650+", label: "Operators" },
  { val: "15k+", label: "Products" },
];
statsRight.forEach((s, i) => {
  slide.addText(s.val, {
    x: 9.2, y: 1.5 + i * 1.3, w: 3.5, h: 0.6,
    fontSize: 32, fontFace: "Arial Black", color: WHITE, bold: true
  });
  slide.addText(s.label, {
    x: 9.2, y: 2.0 + i * 1.3, w: 3.5, h: 0.4,
    fontSize: 13, fontFace: "Arial", color: LIGHT_ORANGE
  });
});

// ── SLIDE 2: THE OPPORTUNITY ──
slide = pptx.addSlide();
addBackground(slide, WHITE);
addFooter(slide);
addSlideNumber(slide, 2, TOTAL_SLIDES);
slide.addShape(pptx.ShapeType.rect, {
  x: 0, y: 0, w: 13.33, h: 0.08,
  fill: { type: "solid", color: ORANGE }
});
slide.addText("The Opportunity", {
  x: 0.8, y: 0.5, w: 11, h: 0.8,
  fontSize: 32, fontFace: "Arial", color: DARK, bold: true
});
slide.addText("The global digital prepaid market is rapidly expanding, driven by mobile-first consumers who demand instant, seamless value delivery. Over 3 billion consumers worldwide are seeking digital top-ups, gift cards, gaming credits, and more.", {
  x: 0.8, y: 1.4, w: 11, h: 1.0,
  fontSize: 14, fontFace: "Arial", color: GRAY, lineSpacingMultiple: 1.5
});
const opportunities = [
  { title: "Mobile-First Growth", desc: "Emerging markets are leapfrogging to mobile payments, creating massive demand for digital value services." },
  { title: "Zero Regulatory Barriers", desc: "Digital micropayments bypass traditional financial compliance, enabling rapid market entry across borders." },
  { title: "Micro-Value Economy", desc: "Launch rewards starting as low as $0.20, making digital incentives accessible for any campaign budget." },
  { title: "B2B Platform Demand", desc: "Enterprises need a single integration point to access global digital products without managing hundreds of operator relationships." },
];
opportunities.forEach((item, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const xPos = 0.8 + col * 6;
  const yPos = 2.8 + row * 1.8;
  slide.addShape(pptx.ShapeType.roundRect, {
    x: xPos, y: yPos, w: 5.5, h: 1.5,
    fill: { type: "solid", color: LIGHT_ORANGE },
    rectRadius: 0.15, line: { color: "FED7AA", width: 1 }
  });
  slide.addText(item.title, {
    x: xPos + 0.3, y: yPos + 0.15, w: 4.9, h: 0.4,
    fontSize: 15, fontFace: "Arial", color: ORANGE, bold: true
  });
  slide.addText(item.desc, {
    x: xPos + 0.3, y: yPos + 0.6, w: 4.9, h: 0.7,
    fontSize: 11.5, fontFace: "Arial", color: GRAY, lineSpacingMultiple: 1.3
  });
});

// ── SLIDE 3: WHO WE ARE ──
slide = pptx.addSlide();
addBackground(slide, LIGHT_GRAY);
addFooter(slide);
addSlideNumber(slide, 3, TOTAL_SLIDES);
slide.addShape(pptx.ShapeType.rect, {
  x: 0, y: 0, w: 13.33, h: 0.08,
  fill: { type: "solid", color: ORANGE }
});
slide.addText("Who We Are", {
  x: 0.8, y: 0.5, w: 11, h: 0.8,
  fontSize: 32, fontFace: "Arial", color: DARK, bold: true
});
slide.addText("NuovoConnect is a global B2B digital micropayments platform that powers compelling digital incentives and prepaid solutions for enterprises worldwide. We connect businesses to 3 billion+ consumers across 170+ countries through a single, powerful API integration.", {
  x: 0.8, y: 1.4, w: 11, h: 1.0,
  fontSize: 14, fontFace: "Arial", color: GRAY, lineSpacingMultiple: 1.5
});

const pillars = [
  { title: "Single Integration", desc: "One API connection unlocks 650+ mobile operators, 15,000+ digital products across 170+ countries." },
  { title: "Real-Time Processing", desc: "Instant transaction processing with complete visibility and 99.9% platform uptime." },
  { title: "Local Expertise", desc: "Region-specific products and partner connections refined by geography and client needs." },
  { title: "24/7 Support", desc: "Dedicated account management with around-the-clock technical and operational support." },
];
pillars.forEach((item, i) => {
  const xPos = 0.8 + i * 3.05;
  slide.addShape(pptx.ShapeType.roundRect, {
    x: xPos, y: 2.7, w: 2.8, h: 3.5,
    fill: { type: "solid", color: WHITE },
    rectRadius: 0.15, shadow: { type: "outer", blur: 6, offset: 2, color: "E5E7EB", opacity: 0.5 }
  });
  slide.addShape(pptx.ShapeType.roundRect, {
    x: xPos + 0.3, y: 2.95, w: 0.6, h: 0.6,
    fill: { type: "solid", color: LIGHT_ORANGE }, rectRadius: 0.1
  });
  slide.addText(`0${i + 1}`, {
    x: xPos + 0.3, y: 2.95, w: 0.6, h: 0.6,
    fontSize: 16, fontFace: "Arial", color: ORANGE, bold: true, align: "center", valign: "middle"
  });
  slide.addText(item.title, {
    x: xPos + 0.3, y: 3.75, w: 2.2, h: 0.5,
    fontSize: 14, fontFace: "Arial", color: DARK, bold: true
  });
  slide.addText(item.desc, {
    x: xPos + 0.3, y: 4.3, w: 2.2, h: 1.5,
    fontSize: 11, fontFace: "Arial", color: GRAY, lineSpacingMultiple: 1.4
  });
});

// ── SLIDE 4: PRODUCT PORTFOLIO ──
slide = pptx.addSlide();
addBackground(slide, WHITE);
addFooter(slide);
addSlideNumber(slide, 4, TOTAL_SLIDES);
slide.addShape(pptx.ShapeType.rect, {
  x: 0, y: 0, w: 13.33, h: 0.08,
  fill: { type: "solid", color: ORANGE }
});
slide.addText("Product Portfolio", {
  x: 0.8, y: 0.5, w: 11, h: 0.8,
  fontSize: 32, fontFace: "Arial", color: DARK, bold: true
});
slide.addText("A comprehensive portfolio of digital products accessible through a single integration.", {
  x: 0.8, y: 1.2, w: 11, h: 0.5,
  fontSize: 14, fontFace: "Arial", color: GRAY
});

const products = [
  { name: "Mobile Airtime &\nData Recharges", desc: "550+ operators in 160+ countries. Real-time processing." },
  { name: "eSIM Bundles", desc: "Digital SIM solutions. Instant activation via QR code." },
  { name: "Global Bank\nAccounts", desc: "Multi-jurisdiction accounts with built-in KYC compliance." },
  { name: "Payment\nProcessing", desc: "Cross-border payments with competitive FX rates." },
  { name: "Brand Vouchers &\nGift Cards", desc: "Local & international brands for rewards programmes." },
  { name: "Gaming Pins", desc: "Prepaid credits for leading gaming platforms." },
  { name: "Loyalty Programs\nfor Gamers", desc: "Tailored loyalty programmes for gaming audiences." },
  { name: "Crypto Vouchers", desc: "Including Binance Gift Cards. Bridge traditional & digital." },
];
products.forEach((p, i) => {
  const col = i % 4;
  const row = Math.floor(i / 4);
  const xPos = 0.8 + col * 3.05;
  const yPos = 2.0 + row * 2.5;
  slide.addShape(pptx.ShapeType.roundRect, {
    x: xPos, y: yPos, w: 2.8, h: 2.2,
    fill: { type: "solid", color: LIGHT_ORANGE },
    rectRadius: 0.15, line: { color: "FED7AA", width: 1 }
  });
  slide.addText(p.name, {
    x: xPos + 0.2, y: yPos + 0.2, w: 2.4, h: 0.7,
    fontSize: 13, fontFace: "Arial", color: DARK, bold: true, lineSpacingMultiple: 1.1
  });
  slide.addText(p.desc, {
    x: xPos + 0.2, y: yPos + 1.0, w: 2.4, h: 1.0,
    fontSize: 10.5, fontFace: "Arial", color: GRAY, lineSpacingMultiple: 1.3
  });
});

// ── SLIDE 5: GLOBAL NETWORK ──
slide = pptx.addSlide();
addBackground(slide, DARK);
addFooter(slide);
addSlideNumber(slide, 5, TOTAL_SLIDES);
slide.addText("Our Global Network", {
  x: 0.8, y: 0.5, w: 11, h: 0.8,
  fontSize: 32, fontFace: "Arial", color: WHITE, bold: true
});
slide.addText("Your wholesale marketplace for digital products. One connection, multiple products worldwide.", {
  x: 0.8, y: 1.2, w: 11, h: 0.5,
  fontSize: 14, fontFace: "Arial", color: GRAY
});

const regions = [
  { name: "Africa", countries: "50+ countries", operators: "200+ operators" },
  { name: "Asia Pacific", countries: "30+ countries", operators: "400+ operators" },
  { name: "Latin America", countries: "25+ countries", operators: "150+ operators" },
  { name: "Middle East", countries: "15+ countries", operators: "80+ operators" },
  { name: "Europe", countries: "40+ countries", operators: "120+ operators" },
  { name: "North America", countries: "3 countries", operators: "50+ operators" },
];
regions.forEach((r, i) => {
  const col = i % 3;
  const row = Math.floor(i / 3);
  const xPos = 0.8 + col * 4;
  const yPos = 2.2 + row * 2.4;
  slide.addShape(pptx.ShapeType.roundRect, {
    x: xPos, y: yPos, w: 3.7, h: 2.0,
    fill: { type: "solid", color: "1F2937" },
    rectRadius: 0.15, line: { color: "374151", width: 1 }
  });
  slide.addText(r.name, {
    x: xPos + 0.3, y: yPos + 0.2, w: 3.1, h: 0.5,
    fontSize: 18, fontFace: "Arial", color: ORANGE, bold: true
  });
  slide.addText(`${r.countries}  ·  ${r.operators}`, {
    x: xPos + 0.3, y: yPos + 0.8, w: 3.1, h: 0.4,
    fontSize: 12, fontFace: "Arial", color: "9CA3AF"
  });
  slide.addShape(pptx.ShapeType.rect, {
    x: xPos + 0.3, y: yPos + 1.4, w: 3.1, h: 0.04,
    fill: { type: "solid", color: ORANGE }
  });
});

// ── SLIDE 6: WHO WE SERVE ──
slide = pptx.addSlide();
addBackground(slide, WHITE);
addFooter(slide);
addSlideNumber(slide, 6, TOTAL_SLIDES);
slide.addShape(pptx.ShapeType.rect, {
  x: 0, y: 0, w: 13.33, h: 0.08,
  fill: { type: "solid", color: ORANGE }
});
slide.addText("Who We Serve", {
  x: 0.8, y: 0.5, w: 11, h: 0.8,
  fontSize: 32, fontFace: "Arial", color: DARK, bold: true
});
slide.addText("Purpose-built solutions for every industry. Client-centric, region-specific strategic solutions.", {
  x: 0.8, y: 1.2, w: 11, h: 0.5,
  fontSize: 14, fontFace: "Arial", color: GRAY
});

const industries = [
  { name: "Retail Networks", desc: "Distribute digital products across retail POS networks and agent locations." },
  { name: "Mobile Operators", desc: "Expand product portfolios and offer cross-network recharges to subscribers." },
  { name: "Money Transfer Operators", desc: "Add digital value services to remittance corridors for added revenue." },
  { name: "eWallets", desc: "Enrich mobile wallet ecosystems with top-ups, vouchers, and gaming pins." },
  { name: "Super Apps", desc: "Integrate digital value services into multi-service super app platforms." },
  { name: "Creator Economy", desc: "Enable digital rewards and monetization tools for content creators." },
  { name: "eSIM Services", desc: "Deliver instant digital connectivity solutions worldwide." },
  { name: "Banking & Finance", desc: "Offer digital value products through banking and fintech channels." },
];
industries.forEach((ind, i) => {
  const col = i % 4;
  const row = Math.floor(i / 4);
  const xPos = 0.8 + col * 3.05;
  const yPos = 2.0 + row * 2.5;
  slide.addShape(pptx.ShapeType.roundRect, {
    x: xPos, y: yPos, w: 2.8, h: 2.2,
    fill: { type: "solid", color: LIGHT_GRAY },
    rectRadius: 0.15, line: { color: "E5E7EB", width: 1 }
  });
  slide.addShape(pptx.ShapeType.roundRect, {
    x: xPos + 0.2, y: yPos + 0.2, w: 0.5, h: 0.5,
    fill: { type: "solid", color: LIGHT_ORANGE }, rectRadius: 0.08
  });
  slide.addText(`0${i + 1}`, {
    x: xPos + 0.2, y: yPos + 0.2, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial", color: ORANGE, bold: true, align: "center", valign: "middle"
  });
  slide.addText(ind.name, {
    x: xPos + 0.2, y: yPos + 0.85, w: 2.4, h: 0.4,
    fontSize: 13, fontFace: "Arial", color: DARK, bold: true
  });
  slide.addText(ind.desc, {
    x: xPos + 0.2, y: yPos + 1.3, w: 2.4, h: 0.8,
    fontSize: 10.5, fontFace: "Arial", color: GRAY, lineSpacingMultiple: 1.3
  });
});

// ── SLIDE 7: WHY NUOVOCONNECT ──
slide = pptx.addSlide();
addBackground(slide, LIGHT_ORANGE);
addFooter(slide);
addSlideNumber(slide, 7, TOTAL_SLIDES);
slide.addShape(pptx.ShapeType.rect, {
  x: 0, y: 0, w: 13.33, h: 0.08,
  fill: { type: "solid", color: ORANGE }
});
slide.addText("Why NuovoConnect?", {
  x: 0.8, y: 0.5, w: 11, h: 0.8,
  fontSize: 32, fontFace: "Arial", color: DARK, bold: true
});

const whyUs = [
  { title: "Compelling, Affordable Digital Incentives", desc: "Provide non-cash rewards and digital motivators with strong perceived value at minimal cost. Launch rewards starting as low as $0.20." },
  { title: "Worldwide Reach with Local Relevance", desc: "Grow rapidly with our network that delivers highly pertinent, region-specific products and partner connections across 170+ countries." },
  { title: "Single Point of Contact", desc: "One integration to extend your global value-added offerings. No need to manage hundreds of operator relationships individually." },
  { title: "Tailor-Made Solutions", desc: "Optimise and localise campaigns and promotions for any geography or customer segment with dedicated support from our team." },
  { title: "Measurable Results", desc: "Build personalised promotional campaigns with actionable data, dashboards, and reports to track response rates, retention, and ROI." },
  { title: "Proven Track Record", desc: "200 million+ transactions processed. Seasoned specialists support you with market intelligence and learnings from prior campaigns." },
];
whyUs.forEach((item, i) => {
  const col = i % 3;
  const row = Math.floor(i / 3);
  const xPos = 0.8 + col * 4;
  const yPos = 1.7 + row * 2.5;
  slide.addShape(pptx.ShapeType.roundRect, {
    x: xPos, y: yPos, w: 3.7, h: 2.2,
    fill: { type: "solid", color: WHITE },
    rectRadius: 0.15, shadow: { type: "outer", blur: 4, offset: 2, color: "FED7AA", opacity: 0.3 }
  });
  slide.addText(item.title, {
    x: xPos + 0.3, y: yPos + 0.2, w: 3.1, h: 0.6,
    fontSize: 14, fontFace: "Arial", color: ORANGE, bold: true, lineSpacingMultiple: 1.1
  });
  slide.addText(item.desc, {
    x: xPos + 0.3, y: yPos + 0.9, w: 3.1, h: 1.1,
    fontSize: 11, fontFace: "Arial", color: GRAY, lineSpacingMultiple: 1.3
  });
});

// ── SLIDE 8: KEY METRICS ──
slide = pptx.addSlide();
addBackground(slide, WHITE);
addFooter(slide);
addSlideNumber(slide, 8, TOTAL_SLIDES);
slide.addShape(pptx.ShapeType.rect, {
  x: 0, y: 0, w: 13.33, h: 0.08,
  fill: { type: "solid", color: ORANGE }
});
slide.addText("Platform at a Glance", {
  x: 0.8, y: 0.5, w: 11, h: 0.8,
  fontSize: 32, fontFace: "Arial", color: DARK, bold: true
});

const metrics = [
  { value: "3bn+", label: "Reachable Consumers", sub: "Access to over 3 billion consumers globally" },
  { value: "170+", label: "Countries", sub: "Products available in 170+ countries" },
  { value: "650+", label: "Mobile Operators & Billers", sub: "Direct connections to global operators" },
  { value: "2,100+", label: "Partners", sub: "Trusted by thousands of distribution partners" },
  { value: "15,000+", label: "Digital Products", sub: "Comprehensive customised product catalogue" },
  { value: "200mn+", label: "Transactions Processed", sub: "Proven scale and reliability" },
  { value: "99.9%", label: "Platform Uptime", sub: "Enterprise-grade reliability" },
  { value: "24/7", label: "Support", sub: "Around-the-clock operational support" },
];
metrics.forEach((m, i) => {
  const col = i % 4;
  const row = Math.floor(i / 4);
  const xPos = 0.8 + col * 3.05;
  const yPos = 1.8 + row * 2.7;
  slide.addShape(pptx.ShapeType.roundRect, {
    x: xPos, y: yPos, w: 2.8, h: 2.3,
    fill: { type: "solid", color: row === 0 ? LIGHT_ORANGE : LIGHT_GRAY },
    rectRadius: 0.15
  });
  slide.addText(m.value, {
    x: xPos + 0.2, y: yPos + 0.3, w: 2.4, h: 0.7,
    fontSize: 30, fontFace: "Arial Black", color: ORANGE, bold: true
  });
  slide.addText(m.label, {
    x: xPos + 0.2, y: yPos + 1.0, w: 2.4, h: 0.4,
    fontSize: 13, fontFace: "Arial", color: DARK, bold: true
  });
  slide.addText(m.sub, {
    x: xPos + 0.2, y: yPos + 1.4, w: 2.4, h: 0.6,
    fontSize: 10, fontFace: "Arial", color: GRAY, lineSpacingMultiple: 1.3
  });
});

// ── SLIDE 9: HOW IT WORKS ──
slide = pptx.addSlide();
addBackground(slide, LIGHT_GRAY);
addFooter(slide);
addSlideNumber(slide, 9, TOTAL_SLIDES);
slide.addShape(pptx.ShapeType.rect, {
  x: 0, y: 0, w: 13.33, h: 0.08,
  fill: { type: "solid", color: ORANGE }
});
slide.addText("How It Works", {
  x: 0.8, y: 0.5, w: 11, h: 0.8,
  fontSize: 32, fontFace: "Arial", color: DARK, bold: true
});
slide.addText("A simple, streamlined process to get you connected and transacting.", {
  x: 0.8, y: 1.2, w: 11, h: 0.5,
  fontSize: 14, fontFace: "Arial", color: GRAY
});

const steps = [
  { num: "01", title: "Connect", desc: "Integrate with our unified API. One connection gives you access to our entire product catalogue across all regions." },
  { num: "02", title: "Configure", desc: "Select products, define pricing, and customise your offering based on your target markets and customer segments." },
  { num: "03", title: "Launch", desc: "Go live with real-time transaction processing. Our team provides hands-on support during launch and beyond." },
  { num: "04", title: "Grow", desc: "Scale across markets with data-driven insights. Add new products and regions on-demand as your business grows." },
];
steps.forEach((step, i) => {
  const xPos = 0.8 + i * 3.05;
  slide.addShape(pptx.ShapeType.roundRect, {
    x: xPos, y: 2.2, w: 2.8, h: 3.8,
    fill: { type: "solid", color: WHITE },
    rectRadius: 0.15, shadow: { type: "outer", blur: 4, offset: 2, color: "E5E7EB", opacity: 0.3 }
  });
  slide.addShape(pptx.ShapeType.ellipse, {
    x: xPos + 0.8, y: 2.5, w: 1.2, h: 1.2,
    fill: { type: "solid", color: ORANGE }
  });
  slide.addText(step.num, {
    x: xPos + 0.8, y: 2.5, w: 1.2, h: 1.2,
    fontSize: 24, fontFace: "Arial Black", color: WHITE, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText(step.title, {
    x: xPos + 0.3, y: 3.9, w: 2.2, h: 0.5,
    fontSize: 18, fontFace: "Arial", color: DARK, bold: true, align: "center"
  });
  slide.addText(step.desc, {
    x: xPos + 0.3, y: 4.5, w: 2.2, h: 1.3,
    fontSize: 11, fontFace: "Arial", color: GRAY, lineSpacingMultiple: 1.4, align: "center"
  });
  if (i < 3) {
    slide.addText("\u2192", {
      x: xPos + 2.8, y: 2.8, w: 0.3, h: 0.6,
      fontSize: 24, fontFace: "Arial", color: ORANGE, bold: true, valign: "middle"
    });
  }
});

// ── SLIDE 10: SOLUTIONS APPROACH ──
slide = pptx.addSlide();
addBackground(slide, WHITE);
addFooter(slide);
addSlideNumber(slide, 10, TOTAL_SLIDES);
slide.addShape(pptx.ShapeType.rect, {
  x: 0, y: 0, w: 13.33, h: 0.08,
  fill: { type: "solid", color: ORANGE }
});
slide.addText("Our Solutions Approach", {
  x: 0.8, y: 0.5, w: 11, h: 0.8,
  fontSize: 32, fontFace: "Arial", color: DARK, bold: true
});
slide.addText("Client-centric, region-specific strategic solutions tailored to your business.", {
  x: 0.8, y: 1.2, w: 11, h: 0.5,
  fontSize: 14, fontFace: "Arial", color: GRAY
});

const solutions = [
  { title: "Tailor-Made Solutions & Dedicated Support", desc: "Optimise and localise your campaigns and promotions for any geography or customer segment. Our team works alongside you to deliver measurable results." },
  { title: "Measurable Results at Minimal Investment", desc: "Build personalised promotional campaigns and spark emotional engagement for as little as $0.10. Track performance with daily analytics and ROI dashboards." },
  { title: "Deep Expertise & Proven Track Record", desc: "Our seasoned specialists support you with actionable data, market intelligence, and learnings from prior campaigns across 170+ markets." },
  { title: "Extensive Regional & Local Partners", desc: "With 650+ mobile operators and billers, we help identify the most suitable and cost-effective product or partner for each market." },
  { title: "Bespoke Solutions with Hands-On Guidance", desc: "Our team delivers technical support and shares invaluable insights drawn from successful real-world case studies." },
  { title: "Robust Platform with Daily Analytics", desc: "Access the data you need to drive campaign performance — with dashboards and reports to track response rates, retention, and ROI." },
];
solutions.forEach((s, i) => {
  const col = i % 3;
  const row = Math.floor(i / 3);
  const xPos = 0.8 + col * 4;
  const yPos = 2.0 + row * 2.5;
  slide.addShape(pptx.ShapeType.roundRect, {
    x: xPos, y: yPos, w: 3.7, h: 2.2,
    fill: { type: "solid", color: LIGHT_ORANGE },
    rectRadius: 0.15, line: { color: "FED7AA", width: 1 }
  });
  slide.addText(s.title, {
    x: xPos + 0.3, y: yPos + 0.2, w: 3.1, h: 0.6,
    fontSize: 13, fontFace: "Arial", color: DARK, bold: true, lineSpacingMultiple: 1.1
  });
  slide.addText(s.desc, {
    x: xPos + 0.3, y: yPos + 0.85, w: 3.1, h: 1.1,
    fontSize: 10.5, fontFace: "Arial", color: GRAY, lineSpacingMultiple: 1.3
  });
});

// ── SLIDE 11: PARTNERSHIP MODEL ──
slide = pptx.addSlide();
addBackground(slide, DARK);
addFooter(slide);
addSlideNumber(slide, 11, TOTAL_SLIDES);
slide.addText("Partnership Model", {
  x: 0.8, y: 0.5, w: 11, h: 0.8,
  fontSize: 32, fontFace: "Arial", color: WHITE, bold: true
});
slide.addText("Flexible engagement options designed to fit your business needs.", {
  x: 0.8, y: 1.2, w: 11, h: 0.5,
  fontSize: 14, fontFace: "Arial", color: "9CA3AF"
});

const partnerships = [
  { title: "Distribution Partners", desc: "Distribute our digital products through your existing channels — retail, mobile, online, or agent networks. Access 15,000+ products instantly.", points: ["White-label solutions available", "Competitive margins", "Real-time inventory management", "Dedicated account manager"] },
  { title: "Product Partners", desc: "List your digital products on our global marketplace. Reach new audiences and platforms you couldn't access before.", points: ["Instant global distribution", "170+ country coverage", "Automated reconciliation", "Performance analytics dashboard"] },
  { title: "Technology Partners", desc: "Integrate our API into your platform to offer digital value services. Perfect for fintechs, super apps, and payment platforms.", points: ["RESTful API with full docs", "Sandbox environment available", "SDKs for major platforms", "99.9% uptime SLA"] },
];
partnerships.forEach((p, i) => {
  const xPos = 0.8 + i * 4;
  slide.addShape(pptx.ShapeType.roundRect, {
    x: xPos, y: 2.1, w: 3.7, h: 4.5,
    fill: { type: "solid", color: "1F2937" },
    rectRadius: 0.15, line: { color: ORANGE, width: 1.5 }
  });
  slide.addText(p.title, {
    x: xPos + 0.3, y: 2.3, w: 3.1, h: 0.5,
    fontSize: 16, fontFace: "Arial", color: ORANGE, bold: true
  });
  slide.addText(p.desc, {
    x: xPos + 0.3, y: 2.9, w: 3.1, h: 1.0,
    fontSize: 11, fontFace: "Arial", color: "9CA3AF", lineSpacingMultiple: 1.3
  });
  p.points.forEach((pt, j) => {
    slide.addText(`\u2713  ${pt}`, {
      x: xPos + 0.3, y: 4.1 + j * 0.5, w: 3.1, h: 0.4,
      fontSize: 11, fontFace: "Arial", color: WHITE
    });
  });
});

// ── SLIDE 12: CONTACT / CTA ──
slide = pptx.addSlide();
addBackground(slide, DARK);
slide.addShape(pptx.ShapeType.rect, {
  x: 0, y: 0, w: 13.33, h: 7.5,
  fill: { type: "solid", color: DARK }
});
slide.addShape(pptx.ShapeType.roundRect, {
  x: 2, y: 1.2, w: 9.33, h: 5.1,
  fill: { type: "solid", color: "1F2937" },
  rectRadius: 0.3, line: { color: ORANGE, width: 2 }
});
slide.addText("Let's Connect", {
  x: 2.5, y: 1.6, w: 8.33, h: 0.9,
  fontSize: 40, fontFace: "Arial", color: WHITE, bold: true, align: "center"
});
slide.addText("Ready to activate global audiences and unlock new territories?\nLet's discuss how NuovoConnect can power your digital value strategy.", {
  x: 3, y: 2.6, w: 7.33, h: 0.9,
  fontSize: 15, fontFace: "Arial", color: "9CA3AF", align: "center", lineSpacingMultiple: 1.5
});

slide.addShape(pptx.ShapeType.rect, {
  x: 4.5, y: 3.7, w: 4.33, h: 0.02,
  fill: { type: "solid", color: ORANGE }
});

slide.addText("Kunal Sadani", {
  x: 2.5, y: 4.0, w: 8.33, h: 0.5,
  fontSize: 20, fontFace: "Arial", color: ORANGE, bold: true, align: "center"
});
slide.addText("Managing Director", {
  x: 2.5, y: 4.45, w: 8.33, h: 0.4,
  fontSize: 14, fontFace: "Arial", color: "9CA3AF", align: "center"
});

slide.addText("kunal@nuovoconnect.com   |   +971 54 382 5670   |   www.nuovoconnect.com", {
  x: 2.5, y: 5.1, w: 8.33, h: 0.4,
  fontSize: 13, fontFace: "Arial", color: WHITE, align: "center"
});

slide.addText("NuovoConnect", {
  x: 2.5, y: 5.7, w: 8.33, h: 0.5,
  fontSize: 24, fontFace: "Arial Black", color: ORANGE, bold: true, align: "center"
});

const outputPath = "/home/runner/workspace/NuovoConnect_Sales_Pitch_Deck.pptx";
pptx.writeFile({ fileName: outputPath }).then(() => {
  console.log(`Pitch deck saved to: ${outputPath}`);
}).catch(err => {
  console.error("Error:", err);
});
