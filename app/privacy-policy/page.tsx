import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = "https://www.nuovoconnect.com";
const PAGE_URL = `${SITE_URL}/privacy-policy`;

export const metadata: Metadata = {
  title: "Privacy Policy — NuovoConnect",
  description:
    "NuovoConnect privacy policy covering data collection, usage, security, international transfers, and your rights regarding personal information under UAE PDPL and applicable regulations.",
  keywords: ["NuovoConnect privacy policy", "data protection NuovoConnect", "UAE PDPL privacy"],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: false },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Privacy Policy | NuovoConnect",
    description: "How NuovoConnect collects, uses, and protects your personal information.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: PAGE_URL,
  name: "Privacy Policy — NuovoConnect",
  description: "Privacy policy for NuovoConnect covering data collection, usage, and user rights.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: PAGE_URL },
    ],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={schema} />
      <Navigation />

      <section className="relative pt-32 pb-12 lg:pt-44 lg:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight" data-testid="text-privacy-title">Privacy Policy</h1>
            <p className="text-muted-foreground">Effective Date: February 20, 2026</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent -z-10" />
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-gray prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-muted-foreground prose-li:text-muted-foreground">
            <p>NuovoConnect (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is a company based in Dubai, United Arab Emirates, licensed under the Meydan Free Zone Authority. We provide digital value products and prepaid solutions, including mobile airtime and data recharges, eSIM bundles, global bank accounts, payment processing, brand vouchers and gift cards, gaming pins, loyalty programs for gamers, crypto vouchers, and non-cash rewards.</p>
            <p>We are committed to protecting your privacy and handling your personal data in compliance with applicable laws, including the UAE Federal Decree-Law No. 45/2021 on the Protection of Personal Data (PDPL) and other relevant regulations. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.</p>
            <p>By accessing our website or using our services, you consent to the practices described in this Privacy Policy. If you do not agree, please do not use our website or services.</p>

            <h2>1. Information We Collect</h2>
            <p>We may collect personal and non-personal information from you in the following ways:</p>
            <h3>a. Information You Provide Directly</h3>
            <ul>
              <li><strong>Contact Information:</strong> When you &ldquo;get in touch&rdquo; via our contact form, we may collect your name, email address, phone number, company name, and any other details you provide.</li>
              <li><strong>Business and Transactional Data:</strong> If you engage with our services, we may collect business details, payment information, and preferences.</li>
              <li><strong>Account Information:</strong> For clients or partners creating accounts, we may collect login credentials, billing addresses, and industry-specific details.</li>
            </ul>
            <h3>b. Information Collected Automatically</h3>
            <ul>
              <li><strong>Device and Usage Data:</strong> IP address, browser type, operating system, pages viewed, and clickstream data.</li>
              <li><strong>Cookies and Similar Technologies:</strong> We use cookies, web beacons, and analytics tools to track interactions.</li>
              <li><strong>Location Data:</strong> We may infer approximate location from your IP address.</li>
            </ul>
            <h3>c. Information from Third Parties</h3>
            <ul>
              <li>We may receive information from partners such as mobile operators or payment processors.</li>
              <li>Analytics providers (e.g., Google Analytics) may supply aggregated data on website traffic.</li>
            </ul>
            <p>We do not knowingly collect personal data from children under 18.</p>

            <h2>2. How We Use Your Information</h2>
            <ul>
              <li><strong>Providing Services:</strong> To process inquiries, deliver digital products, manage payments, and customize rewards.</li>
              <li><strong>Business Operations:</strong> To maintain client relationships and support worldwide reach.</li>
              <li><strong>Marketing and Communications:</strong> To send updates on new products and promotions. You can opt out at any time.</li>
              <li><strong>Improvement and Analytics:</strong> To analyze usage patterns and enhance our website.</li>
              <li><strong>Compliance and Security:</strong> To comply with legal obligations and prevent fraud.</li>
              <li><strong>Research and Development:</strong> To aggregate anonymized data for insights.</li>
            </ul>

            <h2>3. Sharing Your Information</h2>
            <p>We do not sell your personal data. We may share information with service providers, business partners (with consent), for legal requirements, in business transfers, and for international operations with appropriate safeguards.</p>

            <h2>4. Data Security</h2>
            <p>We implement reasonable technical, administrative, and physical measures to protect your data. In case of a data breach, we will notify affected individuals and authorities as required by law.</p>

            <h2>5. Data Retention</h2>
            <p>We retain personal data only as long as necessary for the purposes outlined, or as required by law. Anonymized data may be kept indefinitely for analytics.</p>

            <h2>6. Third-Party Links</h2>
            <p>Our website may contain links to third-party sites. We are not responsible for their privacy practices.</p>

            <h2>7. Changes to This Privacy Policy</h2>
            <p>We may update this policy to reflect changes in our practices or laws. The updated version will be posted on our website with the new effective date.</p>

            <h2>8. Contact Us</h2>
            <p>For questions, contact:<br />NuovoConnect<br />Meydan Free Zone, Dubai, UAE<br />Email: kunal@nuovoconnect.com<br />Website: https://www.nuovoconnect.com</p>
            <p className="text-sm italic">This Privacy Policy is a general template. It is not legal advice. We recommend consulting a qualified lawyer for full compliance.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
