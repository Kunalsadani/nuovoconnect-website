import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const FONTS = {
  black:    path.join(__dirname, 'fonts/Geist-Black.ttf'),
  bold:     path.join(__dirname, 'fonts/PlusJakartaSans-Bold.ttf'),
  semibold: path.join(__dirname, 'fonts/PlusJakartaSans-SemiBold.ttf'),
  regular:  path.join(__dirname, 'fonts/PlusJakartaSans-Regular.ttf'),
};

const COLORS = {
  orange:  '#F97316',
  amber:   '#F59E0B',
  dark:    '#111827',
  mid:     '#374151',
  muted:   '#6B7280',
  altRow:  '#FEF3E2',
  border:  '#E5E7EB',
  white:   '#FFFFFF',
  fieldBg: '#F9FAFB',
};

const LOGO_PATH = path.join(__dirname, '../client/src/assets/nuovoconnect-logo.png');
const OUT_PATH  = path.join(__dirname, '../attached_assets/NuovoConnect_Referral_Partner_Agreement.pdf');

const PAGE     = { width: 595.28, height: 841.89, margin: 50 };
const CONTENT_W = PAGE.width - PAGE.margin * 2;
const BOTTOM   = PAGE.height - PAGE.margin - 30;

// ── PDFKit: block all auto-page creation, only allow explicit _safeAdd ────────
function createDoc() {
  const doc = new PDFDocument({ autoFirstPage: false, bufferPages: true, size: 'A4' });
  const _orig = doc.addPage.bind(doc);
  let _allowed = false;
  doc.addPage = (opts) => { if (_allowed) return _orig(opts); return doc; };
  doc._safeAdd = () => {
    _allowed = true;
    _orig({ margin: PAGE.margin });
    _allowed = false;
    doc.y = PAGE.margin + 10;
  };
  return doc;
}

// ── Measure text height accurately ───────────────────────────────────────────
function textH(doc, text, fontSize, fontKey, width, lineGap = 3) {
  doc.font(FONTS[fontKey]).fontSize(fontSize);
  return doc.heightOfString(text, { width, lineGap });
}

// ── Ensure enough room, page-break if not ────────────────────────────────────
function need(doc, h) {
  if (doc.y + h > BOTTOM) doc._safeAdd();
}

// ── Horizontal rule ───────────────────────────────────────────────────────────
function hRule(doc, color = COLORS.border, w = 0.5) {
  doc.save().strokeColor(color).lineWidth(w)
    .moveTo(PAGE.margin, doc.y)
    .lineTo(PAGE.width - PAGE.margin, doc.y)
    .stroke().restore();
}

// ── Section heading ───────────────────────────────────────────────────────────
function sectionHead(doc, num, title) {
  need(doc, 44);
  doc.moveDown(0.5);
  doc.font(FONTS.bold).fontSize(10).fillColor(COLORS.orange)
    .text(`${num}. ${title.toUpperCase()}`, PAGE.margin, doc.y);
  doc.moveDown(0.3);
}

// ── Body clause ───────────────────────────────────────────────────────────────
function clause(doc, text) {
  const h = textH(doc, text, 9.5, 'regular', CONTENT_W) + 10;
  need(doc, h);
  doc.font(FONTS.regular).fontSize(9.5).fillColor(COLORS.dark)
    .text(text, PAGE.margin, doc.y, { width: CONTENT_W, lineGap: 3, align: 'justify' });
  doc.moveDown(0.35);
}

// ── Party info block (single-column table rows) ───────────────────────────────
function partyBlock(doc, title, rows, isCompany) {
  const ROW_PAD = 8;
  const LABEL_W = 155;
  const VAL_W   = CONTENT_W - LABEL_W - 24;

  // Pre-calculate each row's height
  const rowHeights = rows.map(([, val]) => {
    if (!val) return 24;
    const h = textH(doc, val, 9, 'bold', VAL_W) + ROW_PAD * 2;
    return Math.max(24, h);
  });
  const totalH = rowHeights.reduce((a, b) => a + b, 0) + 22 + 4;

  need(doc, totalH);

  const bx = PAGE.margin;
  const bw = CONTENT_W;
  const by = doc.y;

  // Header bar
  doc.save().rect(bx, by, bw, 22)
    .fillColor(isCompany ? COLORS.orange : COLORS.dark).fill().restore();
  doc.font(FONTS.bold).fontSize(10).fillColor(COLORS.white)
    .text(title, bx + 10, by + 7, { width: bw - 20 });

  let ry = by + 22;
  rows.forEach(([label, val], i) => {
    const rh = rowHeights[i];
    const bg = i % 2 === 0 ? COLORS.white : COLORS.fieldBg;
    doc.save().rect(bx, ry, bw, rh).fillColor(bg).fill().restore();
    doc.save().rect(bx, ry, bw, rh).strokeColor(COLORS.border).lineWidth(0.4).stroke().restore();

    // Label column divider
    doc.save().strokeColor(COLORS.border).lineWidth(0.4)
      .moveTo(bx + LABEL_W + 8, ry).lineTo(bx + LABEL_W + 8, ry + rh).stroke().restore();

    doc.font(FONTS.semibold).fontSize(8.5).fillColor(COLORS.muted)
      .text(label, bx + 8, ry + ROW_PAD, { width: LABEL_W });

    if (val) {
      doc.font(FONTS.bold).fontSize(9).fillColor(COLORS.dark)
        .text(val, bx + LABEL_W + 14, ry + ROW_PAD, { width: VAL_W, lineGap: 2 });
    } else {
      doc.save().strokeColor(isCompany ? COLORS.amber : COLORS.orange).lineWidth(0.7)
        .moveTo(bx + LABEL_W + 14, ry + rh - 8)
        .lineTo(bx + bw - 10, ry + rh - 8).stroke().restore();
    }
    ry += rh;
  });

  doc.y = ry + 6;
}

// ── Signature block with tall signature row ───────────────────────────────────
function sigBlock(doc, heading, position, name, datePlace) {
  const SIG_H  = 72; // 3 lines of space for signature
  const ROW_H  = 26;
  const totalH = 22 + SIG_H + ROW_H * 3 + 10;
  need(doc, totalH);

  const bx = PAGE.margin;
  const bw = CONTENT_W;
  const by = doc.y;

  // Header
  doc.save().rect(bx, by, bw, 22).fillColor(COLORS.dark).fill().restore();
  doc.font(FONTS.bold).fontSize(9.5).fillColor(COLORS.white)
    .text(`FOR AND ON BEHALF OF ${heading.toUpperCase()}`, bx + 8, by + 7, { width: bw - 16 });

  const rows = [
    ['Signature:', '', SIG_H],
    ['Position:', position, ROW_H],
    ['Name:', name, ROW_H],
    ['Date and place:', datePlace, ROW_H],
  ];

  let ry = by + 22;
  rows.forEach(([label, val, rh], i) => {
    const bg = i % 2 === 0 ? COLORS.white : COLORS.fieldBg;
    doc.save().rect(bx, ry, bw, rh).fillColor(bg).fill().restore();
    doc.save().rect(bx, ry, bw, rh).strokeColor(COLORS.border).lineWidth(0.4).stroke().restore();

    doc.font(FONTS.semibold).fontSize(9).fillColor(COLORS.muted)
      .text(label, bx + 8, ry + 8, { width: 120 });

    if (val) {
      doc.font(FONTS.regular).fontSize(9).fillColor(COLORS.dark)
        .text(val, bx + 130, ry + 8, { width: bw - 140 });
    } else {
      // blank line at bottom of the row
      doc.save().strokeColor(COLORS.orange).lineWidth(0.7)
        .moveTo(bx + 130, ry + rh - 10).lineTo(bx + bw - 10, ry + rh - 10).stroke().restore();
    }
    ry += rh;
  });

  doc.y = ry + 10;
}

// ── Page header stripe (for pages after page 1) ───────────────────────────────
function pageStripe(doc) {
  doc.save().rect(0, 0, PAGE.width, 8).fillColor(COLORS.orange).fill().restore();
  doc.save().rect(0, 8, PAGE.width, 4).fillColor(COLORS.amber).fill().restore();
}

// ── Footer on every page ──────────────────────────────────────────────────────
function drawFooters(doc) {
  const total = doc.bufferedPageRange().count;
  for (let i = 0; i < total; i++) {
    doc.switchToPage(i);
    const fy = PAGE.height - 28;
    doc.save().strokeColor(COLORS.border).lineWidth(0.4)
      .moveTo(PAGE.margin, fy - 5).lineTo(PAGE.width - PAGE.margin, fy - 5).stroke().restore();
    doc.font(FONTS.regular).fontSize(7.5).fillColor(COLORS.muted)
      .text('NuovoConnect FZE — Referral Partner Agreement — Confidential',
        PAGE.margin, fy, { width: CONTENT_W - 60 });
    doc.font(FONTS.semibold).fontSize(7.5).fillColor(COLORS.orange)
      .text(`Page ${i + 1} of ${total}`,
        PAGE.width - PAGE.margin - 60, fy, { width: 60, align: 'right' });
  }
}

// ─────────────────────────────────────────────────────────────────────────────
async function generate() {
  const doc = createDoc();
  const stream = fs.createWriteStream(OUT_PATH);
  doc.pipe(stream);

  // ══ PAGE 1 ══════════════════════════════════════════════════════════════════
  doc._safeAdd();

  // Top colour bar
  doc.save().rect(0, 0, PAGE.width, 8).fillColor(COLORS.orange).fill().restore();
  doc.save().rect(0, 8, PAGE.width, 4).fillColor(COLORS.amber).fill().restore();

  // Logo inline with company name (no FZE, no tagline)
  const logoY = PAGE.margin + 6;
  const ICON_H = 26;
  let textX = PAGE.margin;
  if (fs.existsSync(LOGO_PATH)) {
    doc.image(LOGO_PATH, PAGE.margin, logoY + 1, { height: ICON_H, fit: [ICON_H, ICON_H] });
    textX = PAGE.margin + ICON_H + 8;
  }
  doc.font(FONTS.black).fontSize(22).fillColor(COLORS.dark)
    .text('NuovoConnect', textX, logoY, { lineBreak: false });

  doc.y = logoY + ICON_H + 10;
  hRule(doc, COLORS.orange, 1.5);
  doc.moveDown(1);

  // Document title banner
  const titleBannerH = 46;
  doc.save().rect(PAGE.margin, doc.y, CONTENT_W, titleBannerH).fillColor(COLORS.dark).fill().restore();
  doc.font(FONTS.black).fontSize(17).fillColor(COLORS.white)
    .text('REFERRAL PARTNER AGREEMENT', PAGE.margin, doc.y + 9, { width: CONTENT_W, align: 'center' });
  doc.font(FONTS.regular).fontSize(8.5).fillColor(COLORS.amber)
    .text('Confidential — Commercial Agreement', PAGE.margin, doc.y + 30, { width: CONTENT_W, align: 'center' });
  doc.y += titleBannerH + 12;

  // Agreement date
  const dateLineY = doc.y;
  doc.font(FONTS.semibold).fontSize(10).fillColor(COLORS.dark)
    .text('THIS AGREEMENT is made and entered on:', PAGE.margin, dateLineY, { lineBreak: false });
  doc.save().strokeColor(COLORS.orange).lineWidth(0.8)
    .moveTo(PAGE.margin + 266, dateLineY + 11)
    .lineTo(PAGE.margin + 266 + 165, dateLineY + 11).stroke().restore();
  doc.y = dateLineY + 22;

  // BETWEEN
  doc.font(FONTS.bold).fontSize(10).fillColor(COLORS.orange)
    .text('BETWEEN', PAGE.margin, doc.y);
  doc.moveDown(0.4);

  // Company block — Red Dogfish
  partyBlock(doc, 'THE COMPANY', [
    ['Legal Name:',            'RED DOGFISH GROUP PTE. LTD.'],
    ['DBA / Trading Name:',    'RedDogFish'],
    ['Registration Number:',   '202510854H'],
    ['Incorporation Country:', 'Singapore'],
    ['Registered Address:',    '1 Liang Seah Street, #02-02 Liang Seah Place, Singapore 189022.'],
    ['Registered City:',       'Singapore'],
  ], true);

  doc.font(FONTS.regular).fontSize(9).fillColor(COLORS.mid)
    .text('Hereinafter referred to as "The Company"',
      PAGE.margin, doc.y, { width: CONTENT_W, align: 'center' });
  doc.moveDown(0.4);

  // AND
  doc.font(FONTS.bold).fontSize(10).fillColor(COLORS.orange)
    .text('AND', PAGE.margin, doc.y);
  doc.moveDown(0.4);

  // Referral Partner block — NuovoConnect
  partyBlock(doc, 'THE REFERRAL PARTNER', [
    ['Legal Name:',            'NuovoConnect FZE'],
    ['DBA / Trading Name:',    'NuovoConnect'],
    ['Registration Number:',   '4428796.01'],
    ['Incorporation Country:', 'United Arab Emirates'],
    ['Registered Address:',    'Business Center, Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates.'],
    ['Registered City:',       'Sharjah'],
  ], false);

  doc.font(FONTS.regular).fontSize(9).fillColor(COLORS.mid)
    .text('Hereinafter referred to as "The Referral Partner"',
      PAGE.margin, doc.y, { width: CONTENT_W, align: 'center' });
  doc.moveDown(0.4);

  doc.font(FONTS.regular).fontSize(9).fillColor(COLORS.muted)
    .text('Each party may be individually referred to herein as a "Party" or collectively as the "Parties".',
      PAGE.margin, doc.y, { width: CONTENT_W, lineGap: 3 });
  doc.moveDown(0.8);

  // ── Section 1 ────────────────────────────────────────────────────────────────
  sectionHead(doc, '1', 'Purpose of the Agreement');
  clause(doc, '1.1. The Company has agreements with payment partners.');
  clause(doc, '1.2. The Referral Partner undertakes to cooperate with The Company against payment of commissions by introducing potential Merchants to The Company.');
  clause(doc, '1.3. This Agreement is not exclusive for either Party. Consequently, both Parties are allowed to establish similar commercial and contractual relationships with other companies.');

  // ── Section 2 ────────────────────────────────────────────────────────────────
  sectionHead(doc, '2', 'Term of the Agreement');
  clause(doc, '2.1. This Agreement shall commence on the Effective Date and will remain in force until terminated by either Party in accordance with the termination clauses herein below.');
  clause(doc, '2.2. Each Party may terminate the Agreement at any time by giving the other Party 30 days written notice.');
  clause(doc, '2.3. Each Party may terminate the Agreement immediately and without giving notice if it reasonably believes that the other Party: (a) Is committing fraud or willful intentional misconduct; (b) Fails to comply with applicable laws, regulations, and Card Scheme Rules; (c) Proves to have been false or misleading in any material respect.');
  clause(doc, '2.4. Whenever the Agreement is terminated by the Company by cause under Art. 2.3., the payment of commissions shall cease as from the date of the termination.');
  clause(doc, '2.5. The termination will not affect the existing relationships between The Company and the Signed or Potential Merchants.');
  clause(doc, '2.6. All renewals with introduced vendors through the Referral Partner will continue to be managed through the Referral Partner in perpetuity. In the event the Agreement is terminated, the Company shall not engage directly with the vendor for a period of 12 months from the date of termination.');

  // ── Section 3 ────────────────────────────────────────────────────────────────
  sectionHead(doc, '3', 'Commission');
  clause(doc, "3.1. The Referral Partner's commission shall be paid in USD unless agreed otherwise.");
  clause(doc, "3.2. The Company will submit a monthly eSIM sales report for UAE visas by the 5th of each month. The Referral Partner will verify the data and raise an invoice for the commission due. The Company will settle the invoice within 7 days of receipt. Commission shall be paid monthly.");
  clause(doc, '3.3. The commission rate is at a fixed rate of 0.3 USD for every eSIM distributed on the UAE visa. The agreement would be valid till the completion of 200,000 visas.');
  clause(doc, "3.4. Commissions not disputed in writing with reasonably articulated details as to the basis of such dispute made by the Referral Partner within 90 days as from the date on which the commission is due will be deemed valid.");

  // ── Section 4 ────────────────────────────────────────────────────────────────
  sectionHead(doc, '4', 'Confidentiality');
  clause(doc, '4.1. During the course of this Agreement, it may be necessary for The Company to share proprietary information, including trade secrets, industry knowledge, and other confidential information, to the Referral Partner in order for the Referral Partner to seek out potential Merchants. The Referral Partner will not share any of this proprietary information at any time. The Referral Partner will not use any of this proprietary information for its personal benefit at any time. This clause remains in full force and effect even after termination for the Agreement.');

  // ── Section 5 ────────────────────────────────────────────────────────────────
  sectionHead(doc, '5', 'Representations and Warranties');
  clause(doc, '5.1. Both Parties represent that they are fully authorized to enter into this Agreement. The performance and obligations of either Party will not violate or infringe upon the rights of any third party or violate any other agreement between the Parties, individually, and any other person, organization, or business or any law or governmental regulation.');
  clause(doc, '5.2. Both Parties warrant that all information provided will be true, accurate and complete. Both Parties shall comply with all applicable law, regulations, and Card Scheme Rules. In addition, both Parties warrant that they will not engage in any illegal, fraudulent, abusive, malicious, or brand-damaging activities.');

  // ── Section 6 ────────────────────────────────────────────────────────────────
  sectionHead(doc, '6', 'Indemnity');
  clause(doc, '6.1. The Parties each agree to indemnify and hold harmless the other Party, its respective affiliates, officers, agents, employees, and permitted successors and assigns against any and all claims, losses, damages, liabilities, penalties, punitive damages, expenses, reasonable legal fees and costs of any kind or amount whatsoever, which result from the negligence of or breach of this Agreement by the indemnifying Party, or its respective successors and assigns that occurs in connection with this Agreement. This section remains in full force and effect even after termination of the Agreement by its natural termination or the early termination by either Party.');

  // ── Section 7 ────────────────────────────────────────────────────────────────
  sectionHead(doc, '7', 'Limitation of Liability');
  const s7text = "UNDER NO CIRCUMSTANCES SHALL EITHER PARTY BE LIABLE TO THE OTHER PARTY OR ANY THIRD PARTY FOR ANY DAMAGES RESULTING FROM ANY PART OF THIS AGREEMENT SUCH AS, BUT NOT LIMITED TO, LOSS OF REVENUE OR ANTICIPATED PROFIT OR LOST BUSINESS, COSTS OF DELAY OR FAILURE OF DELIVERY, WHICH ARE NOT RELATED TO OR THE DIRECT RESULT OF A PARTY'S NEGLIGENCE OR BREACH.";
  const s7h = textH(doc, s7text, 8.5, 'bold', CONTENT_W - 16, 2) + 16;
  need(doc, s7h);
  const s7y = doc.y;
  doc.save().rect(PAGE.margin, s7y, CONTENT_W, s7h).fillColor(COLORS.altRow).fill().restore();
  doc.save().rect(PAGE.margin, s7y, 3, s7h).fillColor(COLORS.orange).fill().restore();
  doc.font(FONTS.bold).fontSize(8.5).fillColor(COLORS.dark)
    .text(s7text, PAGE.margin + 10, s7y + 8, { width: CONTENT_W - 18, lineGap: 2 });
  doc.y = s7y + s7h + 6;

  // ── Section 8 ────────────────────────────────────────────────────────────────
  sectionHead(doc, '8', 'Disclaimer of Warranties');
  clause(doc, "8.1. The Referral Partner shall refer potential Merchants as requested by the Company. THE AFFILIATE DOES NOT REPRESENT OR WARRANT THAT SUCH REFERRALS WILL CREATE ANY ADDITIONAL PROFITS, SALES, EXPOSURE, BRAND RECOGNITION, OR THE LIKE. THE AFFILIATE HAS NO RESPONSIBILITY TO THE COMPANY IF THE REFERRALS DO NOT LEAD TO THE COMPANY'S DESIRED RESULT(S).");

  // ── Section 9 ────────────────────────────────────────────────────────────────
  sectionHead(doc, '9', 'Severability');
  clause(doc, '9.1. In the event any provision of this Agreement is deemed invalid or unenforceable, in whole or in part, that part shall be severed from the remainder of the Agreement and all other provisions should continue in full force and effect as valid and enforceable.');

  // ── Section 10 ───────────────────────────────────────────────────────────────
  sectionHead(doc, '10', 'Waiver');
  clause(doc, '10.1. The failure by either Party to exercise any right, power, or privilege under the terms of this Agreement will not be construed as a waiver of any subsequent or future exercise of that right, power, or privilege or the exercise of any other right, power, or privilege.');

  // ── Section 11 ───────────────────────────────────────────────────────────────
  sectionHead(doc, '11', 'Legal Fees');
  clause(doc, '11.1. In the event of a dispute resulting in legal action, each party shall only be responsible for its legal fees.');

  // ── Section 12 ───────────────────────────────────────────────────────────────
  sectionHead(doc, '12', 'Legal and Binding Agreement');
  clause(doc, '12.1. This Agreement is legal and binding between the Parties as stated above. This Agreement may be entered into and is legal and binding both in the United States and throughout Europe. The Parties each represent that they have the authority to enter into this Agreement.');

  // ── Section 13 ───────────────────────────────────────────────────────────────
  sectionHead(doc, '13', 'Governing Law and Jurisdiction');
  clause(doc, '13.1. This Agreement shall be governed by, interpreted and construed in accordance with the laws of the Republic of Cyprus (excluding its conflict of law provisions). The competent courts of the Republic of Cyprus shall have sole and exclusive jurisdiction regarding any dispute or claim arising hereunder.');

  // ── Section 14 ───────────────────────────────────────────────────────────────
  sectionHead(doc, '14', 'Entire Agreement');
  clause(doc, '14.1. The Parties acknowledge and agree that this Agreement represents the entire agreement between the Parties. In the event that the Parties desire to change, add, or otherwise modify any terms, they shall do so in writing to be signed by both Parties.');

  // ── Signature Blocks ─────────────────────────────────────────────────────────
  doc.moveDown(0.6);
  hRule(doc, COLORS.orange, 1);
  doc.moveDown(0.5);

  sigBlock(doc,
    'The Company — Red Dogfish Group PTE. LTD.',
    'Director',
    'Oleksii Lykhochas',
    '15/3/2026'
  );

  sigBlock(doc,
    'The Referral Partner — NuovoConnect FZE',
    'Managing Director',
    'Kunal Sadani',
    '15/3/2026'
  );

  // ══ ANNEX A PAGE ════════════════════════════════════════════════════════════
  doc._safeAdd();
  pageStripe(doc);
  doc.y = PAGE.margin + 10;

  // Annex title banner
  doc.save().rect(PAGE.margin, doc.y, CONTENT_W, 40).fillColor(COLORS.dark).fill().restore();
  doc.font(FONTS.black).fontSize(15).fillColor(COLORS.white)
    .text('ANNEX A: BANK ACCOUNT', PAGE.margin, doc.y + 10, { width: CONTENT_W, align: 'center' });
  doc.font(FONTS.regular).fontSize(8.5).fillColor(COLORS.amber)
    .text("Referral Partner's Bank Account Information", PAGE.margin, doc.y + 28, { width: CONTENT_W, align: 'center' });
  doc.y += 50;

  doc.font(FONTS.semibold).fontSize(10).fillColor(COLORS.orange)
    .text("1. REFERRAL PARTNER'S BANK ACCOUNT INFORMATION", PAGE.margin, doc.y);
  doc.moveDown(0.5);

  // Note box
  const noteText = 'The information supplied in this form will be used to execute the payment of your commission so please ensure it is true, accurate and complete. Please be also advised that NuovoConnect may disclose the information provided above to third-party banks or providers for the purpose of payment execution.';
  const noteH = textH(doc, noteText, 8.5, 'regular', CONTENT_W - 24, 2) + 20;
  const noteY = doc.y;
  doc.save().rect(PAGE.margin, noteY, CONTENT_W, noteH).fillColor(COLORS.altRow).fill().restore();
  doc.save().rect(PAGE.margin, noteY, 3, noteH).fillColor(COLORS.orange).fill().restore();
  doc.font(FONTS.semibold).fontSize(8.5).fillColor(COLORS.dark)
    .text('Note:', PAGE.margin + 10, noteY + 6);
  doc.font(FONTS.regular).fontSize(8.5).fillColor(COLORS.mid)
    .text(noteText, PAGE.margin + 10, noteY + 18, { width: CONTENT_W - 22, lineGap: 2 });
  doc.y = noteY + noteH + 10;

  // Helper to draw a bank account block
  const LABEL_W = 190;
  function drawBankRows(fields) {
    fields.forEach(([label, val], i) => {
      const ry = doc.y;
      const rh = 26;
      const bg = i % 2 === 0 ? COLORS.white : COLORS.fieldBg;
      doc.save().rect(PAGE.margin, ry, CONTENT_W, rh).fillColor(bg).fill().restore();
      doc.save().rect(PAGE.margin, ry, CONTENT_W, rh).strokeColor(COLORS.border).lineWidth(0.4).stroke().restore();
      doc.save().strokeColor(COLORS.border).lineWidth(0.4)
        .moveTo(PAGE.margin + LABEL_W, ry).lineTo(PAGE.margin + LABEL_W, ry + rh).stroke().restore();

      doc.font(FONTS.semibold).fontSize(9).fillColor(COLORS.mid)
        .text(label + ':', PAGE.margin + 8, ry + 9, { width: LABEL_W - 10 });

      if (val) {
        doc.font(FONTS.bold).fontSize(9).fillColor(COLORS.dark)
          .text(val, PAGE.margin + LABEL_W + 10, ry + 9, { width: CONTENT_W - LABEL_W - 16 });
      } else {
        doc.save().strokeColor(COLORS.orange).lineWidth(0.7)
          .moveTo(PAGE.margin + LABEL_W + 10, ry + rh - 8)
          .lineTo(PAGE.margin + CONTENT_W - 6, ry + rh - 8).stroke().restore();
      }

      doc.y = ry + rh;
    });
  }

  drawBankRows([
    ['Account holder name',      'NuovoConnect FZE'],
    ['IBAN or account number',   'AE 35 0860 0000 0916 8651 094'],
    ['Account currency',         'USD'],
    ['Beneficiary bank name',    'WIO'],
    ['Beneficiary SWIFT / BIC',  'WIOBAEADXX'],
    ['Beneficiary bank address', 'Etihad Airways Centre 5th Floor, Abu Dhabi, UAE'],
  ]);

  doc.moveDown(1);

  // Annex signature
  sigBlock(doc,
    'The Referral Partner — NuovoConnect FZE',
    'Managing Director',
    'Kunal Sadani',
    '15/3/2026'
  );

  // ── Footers on all pages ─────────────────────────────────────────────────────
  drawFooters(doc);

  doc.end();
  await new Promise((res, rej) => { stream.on('finish', res); stream.on('error', rej); });
  console.log(`✅  Saved → ${OUT_PATH}`);
}

generate().catch(e => { console.error('❌', e); process.exit(1); });
