import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Privacy Policy" description="NuovoConnect privacy policy covering data collection, usage, security, and your rights regarding personal information." path="/privacy-policy" />
      <Navigation />

      <section className="relative pt-32 pb-12 lg:pt-44 lg:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight" data-testid="text-privacy-title">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">Effective Date: February 20, 2026</p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent -z-10" />
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-gray prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-muted-foreground prose-li:text-muted-foreground">
            <p>
              NuovoConnect ("we," "our," or "us") is a company based in Dubai, United Arab Emirates, licensed under the Meydan Free Zone Authority. We provide digital value products and prepaid solutions, including mobile airtime and data recharges, eSIM bundles, global bank accounts, payment processing, brand vouchers and gift cards, gaming pins, loyalty programs for gamers, crypto vouchers, and non-cash rewards. Our services aim to activate global audiences, unlock new territories, and support industries such as retail networks, mobile operators, eWallets, money transfer operators, super apps, and the creator economy.
            </p>
            <p>
              We are committed to protecting your privacy and handling your personal data in compliance with applicable laws, including the UAE Federal Decree-Law No. 45/2021 on the Protection of Personal Data (PDPL) and other relevant regulations. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
            </p>
            <p>
              By accessing our website or using our services, you consent to the practices described in this Privacy Policy. If you do not agree, please do not use our website or services.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We may collect personal and non-personal information from you in the following ways:</p>

            <h3>a. Information You Provide Directly</h3>
            <ul>
              <li><strong>Contact Information:</strong> When you "get in touch" via our contact form, subscribe to updates, or inquire about our products, we may collect your name, email address, phone number, company name, and any other details you provide in your message.</li>
              <li><strong>Business and Transactional Data:</strong> If you engage with our services, such as purchasing or distributing digital products (e.g., vouchers, recharges, or crypto vouchers), we may collect business details, payment information (processed through secure third-party gateways), and preferences for customized solutions.</li>
              <li><strong>Account Information:</strong> For clients or partners creating accounts, we may collect login credentials, billing addresses, and industry-specific details to facilitate global bank accounts, payment processing, or loyalty programs.</li>
            </ul>

            <h3>b. Information Collected Automatically</h3>
            <ul>
              <li><strong>Device and Usage Data:</strong> When you visit our website, we automatically collect information such as your IP address, browser type, operating system, referring URLs, pages viewed, time spent on pages, and clickstream data. This helps us understand user behavior and improve our site.</li>
              <li><strong>Cookies and Similar Technologies:</strong> We use cookies, web beacons, and analytics tools to track interactions. You can manage cookie preferences through your browser settings.</li>
              <li><strong>Location Data:</strong> If relevant to our services (e.g., region-specific products), we may infer approximate location from your IP address, but we do not collect precise geolocation without consent.</li>
            </ul>

            <h3>c. Information from Third Parties</h3>
            <ul>
              <li>We may receive information from partners, such as mobile operators or payment processors, including transaction history or verification data, to fulfill services like airtime recharges or voucher distribution.</li>
              <li>Analytics providers (e.g., Google Analytics) may supply aggregated data on website traffic.</li>
            </ul>
            <p>We do not knowingly collect personal data from children under 18. If we become aware of such collection, we will delete it promptly.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes, aligned with our business activities:</p>
            <ul>
              <li><strong>Providing Services:</strong> To process inquiries, deliver digital products (e.g., eSIM bundles, gaming pins, crypto vouchers), manage payments, and customize rewards or loyalty programs.</li>
              <li><strong>Business Operations:</strong> To maintain client relationships, support worldwide reach across 170+ countries, and connect with our network of 2,100+ partners.</li>
              <li><strong>Marketing and Communications:</strong> To send updates on new products, promotions, or industry insights (e.g., for retail networks or super apps). You can opt out at any time.</li>
              <li><strong>Improvement and Analytics:</strong> To analyze usage patterns, enhance our website, and develop new offerings like micro-value rewards starting at $0.20.</li>
              <li><strong>Compliance and Security:</strong> To comply with legal obligations under UAE laws, prevent fraud in transactions (e.g., over 200 million processed), and ensure data integrity.</li>
              <li><strong>Research and Development:</strong> To aggregate anonymized data for insights into global consumer networks (over 3 billion consumers) without identifying individuals.</li>
            </ul>
            <p>We process data based on legitimate interests, contractual necessity, consent, or legal requirements.</p>

            <h2>3. Sharing Your Information</h2>
            <p>We do not sell your personal data. We may share information as follows:</p>
            <ul>
              <li><strong>Service Providers:</strong> With third-party vendors for payment processing, data storage, analytics, or delivery of services. These providers are bound by confidentiality and data protection agreements.</li>
              <li><strong>Business Partners:</strong> With our network of partners (e.g., mobile operators, eWallets) to enable joint services, such as global bank accounts or loyalty programs, only with your consent or as necessary.</li>
              <li><strong>Legal Requirements:</strong> If required by law, court order, or regulatory authorities (e.g., Meydan Free Zone or UAE PDPL enforcers), or to protect our rights, property, or safety.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred to the new entity.</li>
              <li><strong>International Transfers:</strong> As a global service provider, data may be transferred outside the UAE. We ensure adequate safeguards, such as standard contractual clauses, in line with PDPL.</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement reasonable technical, administrative, and physical measures to protect your data from unauthorized access, loss, or alteration. This includes encryption for sensitive information (e.g., payment details), secure servers, and regular audits. However, no system is completely secure, and we cannot guarantee absolute security.
            </p>
            <p>In case of a data breach, we will notify affected individuals and authorities as required by law.</p>

            <h2>5. Data Retention</h2>
            <p>We retain personal data only as long as necessary for the purposes outlined, or as required by law (e.g., for transaction records). Anonymized data may be kept indefinitely for analytics.</p>

            <h2>6. Third-Party Links</h2>
            <p>Our website may contain links to third-party sites (e.g., partner portals). We are not responsible for their privacy practices. Review their policies separately.</p>

            <h2>7. Changes to This Privacy Policy</h2>
            <p>We may update this policy to reflect changes in our practices or laws. The updated version will be posted on our website with the new effective date. Continued use after changes constitutes acceptance.</p>

            <h2>8. Contact Us</h2>
            <p>For questions, contact:</p>
            <p>
              NuovoConnect<br />
              Meydan Free Zone, Dubai, UAE<br />
              Email: kunal@nuovoconnect.com<br />
              Website: https://www.nuovoconnect.com
            </p>
            <p className="text-sm italic">
              This Privacy Policy is a general template based on your described activities and website content. It is not legal advice. We recommend consulting a qualified lawyer to customize it for full compliance with UAE and international laws.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
