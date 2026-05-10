import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = "https://www.nuovoconnect.com";
const PAGE_URL = `${SITE_URL}/terms-and-conditions`;

export const metadata: Metadata = {
  title: "Terms & Conditions — NuovoConnect",
  description:
    "Terms and conditions governing the use of NuovoConnect's digital value services platform, website, and API. Governed by UAE law, Meydan Free Zone, Dubai.",
  keywords: ["NuovoConnect terms and conditions", "digital services terms", "NuovoConnect UAE terms"],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: false },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Terms & Conditions | NuovoConnect",
    description: "Terms governing use of NuovoConnect's digital value services platform and API.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: PAGE_URL,
  name: "Terms & Conditions — NuovoConnect",
  description: "Terms and conditions for using NuovoConnect's digital value services platform.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Terms & Conditions", item: PAGE_URL },
    ],
  },
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={schema} />
      <Navigation />

      <section className="relative pt-32 pb-12 lg:pt-44 lg:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight" data-testid="text-terms-title">Terms and Conditions</h1>
            <p className="text-muted-foreground">Effective Date: February 20, 2026</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent -z-10" />
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-gray prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-muted-foreground prose-li:text-muted-foreground">
            <p>NuovoConnect (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is a company based in Dubai, United Arab Emirates, licensed under the Meydan Free Zone Authority. These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of our website and services.</p>
            <p>By accessing our website, using our services, or engaging with our products, you agree to be bound by these Terms. If you do not agree, please do not access or use our website or services.</p>

            <h2>1. Description of Services</h2>
            <p>We offer a range of digital and prepaid solutions designed to activate global audiences, including:</p>
            <ul>
              <li>Mobile airtime and data recharges.</li>
              <li>eSIM bundles for seamless connectivity.</li>
              <li>Global bank accounts and payment processing.</li>
              <li>Brand vouchers, gift cards, and gaming pins.</li>
              <li>Loyalty programs and crypto vouchers.</li>
              <li>Non-cash rewards starting at micro-values like $0.20.</li>
            </ul>
            <p>We connect with over 2,100 partners worldwide, reaching more than 3 billion consumers across 170+ countries.</p>

            <h2>2. Eligibility and Account Registration</h2>
            <p>To use our services, you must be at least 18 years old and capable of forming a binding contract. If using on behalf of a business, you represent you have authority to bind that entity.</p>

            <h2>3. User Obligations</h2>
            <p>You agree to use our services only for lawful purposes, not misuse our systems, not resell products without permission, provide accurate information, and comply with product-specific terms.</p>

            <h2>4. Payments and Refunds</h2>
            <p>Payments are processed through secure third-party gateways. All payments are non-refundable unless otherwise specified or required by law. Refunds for undelivered digital products may be issued if due to our error.</p>

            <h2>5. Intellectual Property</h2>
            <p>All content on our website is owned by us or our licensors. You are granted a limited, non-exclusive license to access and use our services as intended. Trademarks such as &ldquo;NuovoConnect&rdquo; are our property.</p>

            <h2>6. Limitations of Liability</h2>
            <p>To the fullest extent permitted by law, we shall not be liable for indirect, incidental, special, or consequential damages. Our total liability shall not exceed amounts paid to us in the preceding 12 months.</p>

            <h2>7. Indemnification</h2>
            <p>You agree to indemnify and hold us harmless from claims arising from your misuse of our services, violation of these Terms, or infringement of third-party rights.</p>

            <h2>8. Governing Law and Dispute Resolution</h2>
            <p>These Terms are governed by the laws of the United Arab Emirates. Any disputes shall be resolved exclusively in the courts of Dubai, UAE.</p>

            <h2>9. Changes to These Terms</h2>
            <p>We may update these Terms at any time. Changes will be posted on our website with the new effective date. Continued use after changes constitutes acceptance.</p>

            <h2>10. Termination</h2>
            <p>We may terminate or suspend your access to our services at any time for any reason, including violations of these Terms.</p>

            <h2>11. Miscellaneous</h2>
            <p>These Terms constitute the entire agreement between you and us. If any provision is deemed invalid, the remainder shall remain in effect.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
