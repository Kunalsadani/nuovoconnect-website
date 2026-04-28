import {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  BorderStyle, WidthType, AlignmentType, ShadingType, HeadingLevel,
  PageBreak, UnderlineType, convertInchesToTwip, convertMillimetersToTwip,
  Header, Footer, PageNumber, NumberFormat,
} from 'docx';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_PATH = path.join(__dirname, '../attached_assets/NuovoConnect_Referral_Partner_Agreement.docx');

// ── Brand colours (hex without #) ─────────────────────────────────────────────
const C = {
  orange:  'F97316',
  amber:   'F59E0B',
  dark:    '111827',
  mid:     '374151',
  muted:   '6B7280',
  altRow:  'FEF3E2',
  fieldBg: 'F9FAFB',
  border:  'E5E7EB',
  white:   'FFFFFF',
};

const FONT   = 'Plus Jakarta Sans';
const FONT_B = 'Geist';  // Closest available for headings

// Twips helpers
const PT  = (n) => n * 20;        // points → twips
const CM  = convertMillimetersToTwip;

// ── Cell border helpers ────────────────────────────────────────────────────────
const border = (color = C.border, sz = 4) => ({
  top:    { style: BorderStyle.SINGLE, size: sz, color },
  bottom: { style: BorderStyle.SINGLE, size: sz, color },
  left:   { style: BorderStyle.SINGLE, size: sz, color },
  right:  { style: BorderStyle.SINGLE, size: sz, color },
});
const noBorder = () => ({
  top:    { style: BorderStyle.NONE, size: 0, color: C.white },
  bottom: { style: BorderStyle.NONE, size: 0, color: C.white },
  left:   { style: BorderStyle.NONE, size: 0, color: C.white },
  right:  { style: BorderStyle.NONE, size: 0, color: C.white },
});

// ── Paragraph factories ────────────────────────────────────────────────────────
function p(runs, opts = {}) {
  return new Paragraph({ children: Array.isArray(runs) ? runs : [runs], ...opts });
}

function run(text, { bold, color, size, font, underline, italic } = {}) {
  return new TextRun({
    text,
    bold:      bold ?? false,
    italics:   italic ?? false,
    color:     color ?? C.dark,
    size:      PT(size ?? 10),
    font:      font ?? FONT,
    underline: underline ? { type: UnderlineType.SINGLE } : undefined,
  });
}

function spacer(lines = 1) {
  return Array.from({ length: lines }, () => p(run(''), { spacing: { after: 0, before: 0 } }));
}

// ── Heading paragraph ──────────────────────────────────────────────────────────
function heading(text, level = 1) {
  return p(
    run(text, { bold: true, size: level === 1 ? 14 : 11, color: C.orange }),
    {
      spacing: { before: PT(10), after: PT(4) },
      border: {
        bottom: { style: BorderStyle.SINGLE, size: 6, color: C.amber },
      },
    }
  );
}

// ── Clause paragraph ───────────────────────────────────────────────────────────
function clause(text) {
  return p(
    run(text, { size: 9.5 }),
    {
      spacing: { after: PT(5), before: 0 },
      alignment: AlignmentType.JUSTIFIED,
    }
  );
}

// ── Party info table ───────────────────────────────────────────────────────────
function partyTable(title, rows, isCompany) {
  const headerColor  = isCompany ? C.orange : C.dark;
  const headerCell = new TableCell({
    children: [p(run(title, { bold: true, size: 10, color: C.white }))],
    columnSpan: 2,
    shading: { type: ShadingType.SOLID, fill: headerColor },
    margins: { top: CM(2), bottom: CM(2), left: CM(3), right: CM(3) },
    borders: noBorder(),
  });

  const dataRows = rows.map(([label, val], i) => {
    const bg = i % 2 === 0 ? C.white : C.fieldBg;
    return new TableRow({
      children: [
        new TableCell({
          children: [p(run(label, { bold: true, size: 8.5, color: C.muted }))],
          width: { size: 30, type: WidthType.PERCENTAGE },
          shading: { type: ShadingType.SOLID, fill: bg },
          margins: { top: CM(1.5), bottom: CM(1.5), left: CM(3), right: CM(2) },
          borders: border(C.border, 3),
        }),
        new TableCell({
          children: val
            ? [p(run(val, { bold: true, size: 9, color: C.dark }))]
            : [p(run('', { underline: true }))],
          width: { size: 70, type: WidthType.PERCENTAGE },
          shading: { type: ShadingType.SOLID, fill: bg },
          margins: { top: CM(1.5), bottom: CM(1.5), left: CM(3), right: CM(3) },
          borders: border(C.border, 3),
        }),
      ],
    });
  });

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({ children: [headerCell] }),
      ...dataRows,
    ],
  });
}

// ── Signature table ────────────────────────────────────────────────────────────
function sigTable(heading, position, name, datePlace) {
  const rows = [
    ['Signature:', '', true],
    ['Position:', position, false],
    ['Name:', name, false],
    ['Date and place:', datePlace, false],
  ];

  const headerCell = new TableCell({
    children: [p(run(`FOR AND ON BEHALF OF ${heading.toUpperCase()}`, { bold: true, size: 10, color: C.white }))],
    columnSpan: 2,
    shading: { type: ShadingType.SOLID, fill: C.dark },
    margins: { top: CM(2), bottom: CM(2), left: CM(3), right: CM(3) },
    borders: noBorder(),
  });

  const dataRows = rows.map(([label, val, isSig], i) => {
    const bg = i % 2 === 0 ? C.white : C.fieldBg;
    const sigH = isSig ? [
      p(run('', {})),
      p(run('', {})),
      p(run('', {})),
    ] : [p(run(val || '', { size: 9.5, color: C.dark }))];

    return new TableRow({
      height: isSig ? { value: CM(20), rule: 'atLeast' } : undefined,
      children: [
        new TableCell({
          children: [p(run(label, { bold: true, size: 9, color: C.muted }))],
          width: { size: 22, type: WidthType.PERCENTAGE },
          shading: { type: ShadingType.SOLID, fill: bg },
          margins: { top: CM(2), bottom: CM(2), left: CM(3), right: CM(2) },
          borders: border(C.border, 3),
        }),
        new TableCell({
          children: sigH,
          width: { size: 78, type: WidthType.PERCENTAGE },
          shading: { type: ShadingType.SOLID, fill: bg },
          margins: { top: CM(2), bottom: CM(2), left: CM(3), right: CM(3) },
          borders: border(C.border, 3),
        }),
      ],
    });
  });

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({ children: [headerCell] }),
      ...dataRows,
    ],
  });
}

// ── Bank account table ─────────────────────────────────────────────────────────
function bankTable(fields) {
  const headerCell = new TableCell({
    children: [p(run("REFERRAL PARTNER'S BANK ACCOUNT INFORMATION", { bold: true, size: 10, color: C.white }))],
    columnSpan: 2,
    shading: { type: ShadingType.SOLID, fill: C.dark },
    margins: { top: CM(2), bottom: CM(2), left: CM(3), right: CM(3) },
    borders: noBorder(),
  });

  const dataRows = fields.map(([label, val], i) => {
    const bg = i % 2 === 0 ? C.white : C.fieldBg;
    return new TableRow({
      children: [
        new TableCell({
          children: [p(run(label + ':', { bold: true, size: 8.5, color: C.muted }))],
          width: { size: 35, type: WidthType.PERCENTAGE },
          shading: { type: ShadingType.SOLID, fill: bg },
          margins: { top: CM(1.5), bottom: CM(1.5), left: CM(3), right: CM(2) },
          borders: border(C.border, 3),
        }),
        new TableCell({
          children: val
            ? [p(run(val, { bold: true, size: 9.5, color: C.dark }))]
            : [p(run('', { underline: true, size: 9.5 }), { spacing: { after: PT(8) } })],
          width: { size: 65, type: WidthType.PERCENTAGE },
          shading: { type: ShadingType.SOLID, fill: bg },
          margins: { top: CM(1.5), bottom: CM(1.5), left: CM(3), right: CM(3) },
          borders: border(C.border, 3),
        }),
      ],
    });
  });

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({ children: [headerCell] }),
      ...dataRows,
    ],
  });
}

// ── Orange divider ─────────────────────────────────────────────────────────────
function divider() {
  return p(run(''), {
    border: { bottom: { style: BorderStyle.SINGLE, size: 10, color: C.orange } },
    spacing: { before: PT(6), after: PT(6) },
  });
}

// ─────────────────────────────────────────────────────────────────────────────
async function generate() {

  const sections = [];

  // ── SECTION 1: Main agreement body ──────────────────────────────────────────
  const body = [
    // Title block
    p(run('REFERRAL PARTNER AGREEMENT', { bold: true, size: 20, color: C.white, font: FONT_B }), {
      alignment: AlignmentType.CENTER,
      shading: { type: ShadingType.SOLID, fill: C.dark },
      spacing: { before: PT(8), after: 0 },
      border: noBorder(),
      frame: undefined,
    }),
    p(run('Confidential — Commercial Agreement', { size: 9, color: C.amber }), {
      alignment: AlignmentType.CENTER,
      shading: { type: ShadingType.SOLID, fill: C.dark },
      spacing: { before: 0, after: PT(12) },
    }),

    ...spacer(1),

    // Agreement date line
    p([
      run('THIS AGREEMENT is made and entered on: ', { bold: true, size: 10 }),
      run('_______________________', { underline: true, color: C.muted, size: 10 }),
    ], { spacing: { after: PT(8) } }),

    p(run('BETWEEN', { bold: true, size: 11, color: C.orange }),
      { spacing: { before: PT(6), after: PT(6) } }),

    // Referral partner table
    partyTable('THE REFERRAL PARTNER', [
      ['Legal Name:',            'RED DOGFISH GROUP PTE. LTD.'],
      ['DBA / Trading Name:',    'RedDogFish'],
      ['Registration Number:',   '202510854H'],
      ['Incorporation Country:', 'Singapore'],
      ['Registered Address:',    '1 Liang Seah Street, #02-02 Liang Seah Place, Singapore 189022.'],
      ['Registered City:',       'Singapore'],
    ], false),

    p(run('Hereinafter referred to as "The Referral Partner"', { size: 9, color: C.mid, italic: true }),
      { alignment: AlignmentType.CENTER, spacing: { before: PT(4), after: PT(4) } }),

    p(run('AND', { bold: true, size: 11, color: C.orange }),
      { spacing: { before: PT(4), after: PT(4) } }),

    // Company table
    partyTable('THE COMPANY', [
      ['Legal Name:',            'NuovoConnect FZE'],
      ['DBA / Trading Name:',    'NuovoConnect'],
      ['Registration Number:',   '4428796.01'],
      ['Incorporation Country:', 'United Arab Emirates'],
      ['Registered Address:',    'Business Center, Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates.'],
      ['Registered City:',       'Sharjah'],
    ], true),

    p(run('Hereinafter referred to as "The Company"', { size: 9, color: C.mid, italic: true }),
      { alignment: AlignmentType.CENTER, spacing: { before: PT(4), after: PT(4) } }),

    p(run('Each party may be individually referred to herein as a "Party" or collectively as the "Parties".', { size: 9.5, color: C.muted }),
      { spacing: { after: PT(10) } }),

    // ── Clauses ────────────────────────────────────────────────────────────────
    heading('1. PURPOSE OF THE AGREEMENT'),
    clause('1.1. The Company has agreements with payment partners.'),
    clause('1.2. The Referral Partner undertakes to cooperate with The Company against payment of commissions by introducing potential Merchants to The Company.'),
    clause('1.3. This Agreement is not exclusive for either Party. Consequently, both Parties are allowed to establish similar commercial and contractual relationships with other companies.'),

    heading('2. TERM OF THE AGREEMENT'),
    clause('2.1. This Agreement shall commence on the Effective Date and will remain in force until terminated by either Party in accordance with the termination clauses herein below.'),
    clause('2.2. Each Party may terminate the Agreement at any time by giving the other Party 30 days written notice.'),
    clause('2.3. Whenever the Agreement is terminated by notice, whether by The Company or by The Referral Partner, The Company shall continue to pay commissions to the Referral Partner for an indefinite period of time, limited to the lifetime of the Introduced Merchants.'),
    clause('2.4. Each Party may terminate the Agreement immediately and without giving notice if it reasonably believes that the other Party: (a) Is committing fraud or willful intentional misconduct; (b) Fails to comply with applicable laws, regulations, and Card Scheme Rules; (c) Proves to have been false or misleading in any material respect.'),
    clause('2.5. Whenever the Agreement is terminated by the Company by cause under Art. 2.4., the payment of commissions shall cease as from the date of the termination.'),
    clause('2.6. The termination will not affect the existing relationships between The Company and the Signed or Potential Merchants.'),

    heading('3. COMMISSION'),
    clause("3.1. The Referral Partner will receive XXX% of net revenue for all Introduced Merchants. For sake of clarity, no commission will be due if The Introduced Merchants don't generate profit."),
    clause("3.2. The Referral Partner's commission shall be paid in EUR unless agreed otherwise."),
    clause("3.3. The Referral Partner's commission shall be paid monthly, subject to the following conditions: (a) The Company has received its commissions of the transactions processed or service delivered for the Introduced Merchants; (b) The amount due to the Referral Partner is greater than the minimum payment threshold, set at 500 EUR (or the equivalent in other currency). The payment will be deferred until the due amount reaches that threshold."),
    clause('3.4. The Company shall pay commission within thirty (30) days, upon receipt of the invoice from the Referral Partner.'),
    clause('3.5. Commissions not disputed in writing with reasonably articulated details as to the basis of such dispute made by the Referral Partner within 90 days as from the date on which the commission is due will be deemed valid.'),
    clause('3.6. The Company shall provide the buy rate negotiated with its partners for each Signed Merchant. In addition, The Company will provide a detailed commission report to the Partner.'),

    heading('4. CONFIDENTIALITY'),
    clause('4.1. During the course of this Agreement, it may be necessary for The Company to share proprietary information, including trade secrets, industry knowledge, and other confidential information, to the Referral Partner in order for the Referral Partner to seek out potential Merchants. The Referral Partner will not share any of this proprietary information at any time. The Referral Partner will not use any of this proprietary information for its personal benefit at any time. This clause remains in full force and effect even after termination for the Agreement.'),

    heading('5. REPRESENTATIONS AND WARRANTIES'),
    clause('5.1. Both Parties represent that they are fully authorized to enter into this Agreement. The performance and obligations of either Party will not violate or infringe upon the rights of any third party or violate any other agreement between the Parties, individually, and any other person, organization, or business or any law or governmental regulation.'),
    clause('5.2. Both Parties warrant that all information provided will be true, accurate and complete. Both Parties shall comply with all applicable law, regulations, and Card Scheme Rules. In addition, both Parties warrant that they will not engage in any illegal, fraudulent, abusive, malicious, or brand-damaging activities.'),

    heading('6. INDEMNITY'),
    clause('6.1. The Parties each agree to indemnify and hold harmless the other Party, its respective affiliates, officers, agents, employees, and permitted successors and assigns against any and all claims, losses, damages, liabilities, penalties, punitive damages, expenses, reasonable legal fees and costs of any kind or amount whatsoever, which result from the negligence of or breach of this Agreement by the indemnifying Party, or its respective successors and assigns that occurs in connection with this Agreement. This section remains in full force and effect even after termination of the Agreement by its natural termination or the early termination by either Party.'),

    heading('7. LIMITATION OF LIABILITY'),
    p(run("UNDER NO CIRCUMSTANCES SHALL EITHER PARTY BE LIABLE TO THE OTHER PARTY OR ANY THIRD PARTY FOR ANY DAMAGES RESULTING FROM ANY PART OF THIS AGREEMENT SUCH AS, BUT NOT LIMITED TO, LOSS OF REVENUE OR ANTICIPATED PROFIT OR LOST BUSINESS, COSTS OF DELAY OR FAILURE OF DELIVERY, WHICH ARE NOT RELATED TO OR THE DIRECT RESULT OF A PARTY'S NEGLIGENCE OR BREACH.", { bold: true, size: 9, color: C.dark }), {
      shading: { type: ShadingType.SOLID, fill: C.altRow },
      alignment: AlignmentType.JUSTIFIED,
      spacing: { before: PT(4), after: PT(8) },
      border: {
        left: { style: BorderStyle.SINGLE, size: 12, color: C.orange },
      },
      indent: { left: CM(5) },
    }),

    heading('8. DISCLAIMER OF WARRANTIES'),
    clause("8.1. The Referral Partner shall refer potential Merchants as requested by the Company. THE AFFILIATE DOES NOT REPRESENT OR WARRANT THAT SUCH REFERRALS WILL CREATE ANY ADDITIONAL PROFITS, SALES, EXPOSURE, BRAND RECOGNITION, OR THE LIKE. THE AFFILIATE HAS NO RESPONSIBILITY TO THE COMPANY IF THE REFERRALS DO NOT LEAD TO THE COMPANY'S DESIRED RESULT(S)."),

    heading('9. SEVERABILITY'),
    clause('9.1. In the event any provision of this Agreement is deemed invalid or unenforceable, in whole or in part, that part shall be severed from the remainder of the Agreement and all other provisions should continue in full force and effect as valid and enforceable.'),

    heading('10. WAIVER'),
    clause('10.1. The failure by either Party to exercise any right, power, or privilege under the terms of this Agreement will not be construed as a waiver of any subsequent or future exercise of that right, power, or privilege or the exercise of any other right, power, or privilege.'),

    heading('11. LEGAL FEES'),
    clause('11.1. In the event of a dispute resulting in legal action, each party shall only be responsible for its legal fees.'),

    heading('12. LEGAL AND BINDING AGREEMENT'),
    clause('12.1. This Agreement is legal and binding between the Parties as stated above. This Agreement may be entered into and is legal and binding both in the United States and throughout Europe. The Parties each represent that they have the authority to enter into this Agreement.'),

    heading('13. GOVERNING LAW AND JURISDICTION'),
    clause('13.1. This Agreement shall be governed by, interpreted and construed in accordance with the laws of the Republic of Cyprus (excluding its conflict of law provisions). The competent courts of the Republic of Cyprus shall have sole and exclusive jurisdiction regarding any dispute or claim arising hereunder.'),

    heading('14. ENTIRE AGREEMENT'),
    clause('14.1. The Parties acknowledge and agree that this Agreement represents the entire agreement between the Parties. In the event that the Parties desire to change, add, or otherwise modify any terms, they shall do so in writing to be signed by both Parties.'),

    ...spacer(1),
    divider(),
    ...spacer(1),

    // Signatures
    sigTable('The Company — NuovoConnect FZE', 'Managing Director', 'Kunal Sadani', '15/3/2026'),
    ...spacer(1),
    sigTable('The Referral Partner', 'Director', 'Oleksii Lykhochas', '15/3/2026'),
  ];

  // ── SECTION 2: Annex A ───────────────────────────────────────────────────────
  const annexBody = [
    p(new PageBreak()),

    p(run('ANNEX A: BANK ACCOUNT', { bold: true, size: 18, color: C.white, font: FONT_B }), {
      alignment: AlignmentType.CENTER,
      shading: { type: ShadingType.SOLID, fill: C.dark },
      spacing: { before: PT(8), after: 0 },
    }),
    p(run("Referral Partner's Bank Account Information", { size: 9, color: C.amber }), {
      alignment: AlignmentType.CENTER,
      shading: { type: ShadingType.SOLID, fill: C.dark },
      spacing: { before: 0, after: PT(12) },
    }),

    p(run("1. REFERRAL PARTNER'S BANK ACCOUNT INFORMATION", { bold: true, size: 11, color: C.orange }),
      { spacing: { before: PT(6), after: PT(4) } }),

    // Note
    p(run('Note: The information supplied in this form will be used to execute the payment of your commission so please ensure it is true, accurate and complete. Please be also advised that NuovoConnect may disclose the information provided above to third-party banks or providers for the purpose of payment execution.', { size: 9, color: C.mid }), {
      shading: { type: ShadingType.SOLID, fill: C.altRow },
      border: { left: { style: BorderStyle.SINGLE, size: 12, color: C.orange } },
      indent: { left: CM(5) },
      spacing: { before: PT(4), after: PT(10) },
    }),

    bankTable([
      ['Account holder name',       'NuovoConnect FZE'],
      ['Account holder address',    ''],
      ['IBAN or account number',    'AE 54 0860 0933 6353 664'],
      ['Account currency',          'AED'],
      ['Beneficiary bank name',     'WIO'],
      ['Beneficiary SWIFT / BIC',   'WIOBAEADXX'],
      ['Beneficiary bank address',  'Etihad Airways Centre 5th Floor, Abu Dhabi, UAE'],
      ['Routing number (if any)',   ''],
    ]),

    ...spacer(1),

    sigTable('The Referral Partner', 'Director', 'Oleksii Lykhochas', '15/3/2026'),
  ];

  const doc = new Document({
    creator: 'NuovoConnect FZE',
    title:   'Referral Partner Agreement',
    subject: 'Commercial Agreement',
    sections: [
      {
        properties: {
          page: {
            margin: {
              top:    CM(18),
              bottom: CM(18),
              left:   CM(20),
              right:  CM(18),
            },
          },
        },
        headers: {
          default: new Header({
            children: [
              new Table({
                width: { size: 100, type: WidthType.PERCENTAGE },
                rows: [
                  new TableRow({
                    children: [
                      new TableCell({
                        children: [p(run('NuovoConnect', { bold: true, size: 11, color: C.dark, font: FONT_B }))],
                        borders: noBorder(),
                        margins: { top: 0, bottom: 0, left: 0, right: 0 },
                      }),
                      new TableCell({
                        children: [p(run('Referral Partner Agreement — Confidential', { size: 8.5, color: C.muted }),
                          { alignment: AlignmentType.RIGHT })],
                        borders: noBorder(),
                        margins: { top: 0, bottom: 0, left: 0, right: 0 },
                      }),
                    ],
                  }),
                ],
              }),
              p(run(''), {
                border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: C.orange } },
                spacing: { before: PT(2), after: PT(4) },
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              p(run(''), {
                border: { top: { style: BorderStyle.SINGLE, size: 4, color: C.border } },
                spacing: { before: PT(4), after: 0 },
              }),
              new Table({
                width: { size: 100, type: WidthType.PERCENTAGE },
                rows: [
                  new TableRow({
                    children: [
                      new TableCell({
                        children: [p(run('NuovoConnect FZE — Confidential', { size: 7.5, color: C.muted }))],
                        borders: noBorder(),
                      }),
                      new TableCell({
                        children: [
                          new Paragraph({
                            children: [
                              run('Page ', { size: 7.5, color: C.muted }),
                              new TextRun({ children: [PageNumber.CURRENT], size: PT(7.5), color: C.orange }),
                              run(' of ', { size: 7.5, color: C.muted }),
                              new TextRun({ children: [PageNumber.TOTAL_PAGES], size: PT(7.5), color: C.orange }),
                            ],
                            alignment: AlignmentType.RIGHT,
                          }),
                        ],
                        borders: noBorder(),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        },
        children: [...body, ...annexBody],
      },
    ],
  });

  const buf = await Packer.toBuffer(doc);
  fs.writeFileSync(OUT_PATH, buf);
  console.log(`✅  DOCX saved → ${OUT_PATH}`);
}

generate().catch(e => { console.error('❌', e); process.exit(1); });
