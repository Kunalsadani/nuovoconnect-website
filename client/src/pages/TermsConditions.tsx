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

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Terms & Conditions" description="Terms and conditions governing the use of NuovoConnect digital value services platform and website." path="/terms-and-conditions" />
      <Navigation />

      <section className="relative pt-32 pb-12 lg:pt-44 lg:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight" data-testid="text-terms-title">
              Terms and Conditions
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
              NuovoConnect ("we," "our," or "us") is a company based in Dubai, United Arab Emirates, licensed under the Meydan Free Zone Authority. These Terms and Conditions ("Terms") govern your access to and use of our website and our services, including the provision of digital value products and prepaid solutions such as mobile airtime and data recharges, eSIM bundles, global bank accounts, payment processing, brand vouchers and gift cards, gaming pins, loyalty programs for gamers, crypto vouchers, and non-cash rewards.
            </p>
            <p>
              By accessing our website, using our services, or engaging with our products, you agree to be bound by these Terms. If you do not agree, please do not access or use our website or services.
            </p>

            <h2>1. Description of Services</h2>
            <p>We offer a range of digital and prepaid solutions designed to activate global audiences, unlock new territories, and support industries including retail networks, mobile operators, eWallets, money transfer operators, super apps, and the creator economy. Our services include:</p>
            <ul>
              <li>Mobile airtime and data recharges.</li>
              <li>eSIM bundles for seamless connectivity.</li>
              <li>Global bank accounts and payment processing.</li>
              <li>Brand vouchers, gift cards, and gaming pins.</li>
              <li>Loyalty programs and crypto vouchers.</li>
              <li>Non-cash rewards starting at micro-values like $0.20.</li>
            </ul>
            <p>We connect with over 2,100 partners worldwide, reaching more than 3 billion consumers across 170+ countries, and have processed over 200 million transactions.</p>
            <p>Services may be provided through our website, APIs, or partner integrations. We reserve the right to modify, suspend, or discontinue any service at any time without notice.</p>

            <h2>2. Eligibility and Account Registration</h2>
            <p>To use our services, you must be at least 18 years old or the age of majority in your jurisdiction, and capable of forming a binding contract. If you are using our services on behalf of a business or entity, you represent that you have the authority to bind that entity to these Terms.</p>
            <p>Certain services may require account registration. You agree to provide accurate, current, and complete information during registration and to update it as necessary. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately of any unauthorized access.</p>

            <h2>3. User Obligations</h2>
            <p>You agree to:</p>
            <ul>
              <li>Use our services only for lawful purposes and in compliance with applicable laws, including UAE regulations and international trade laws.</li>
              <li>Not misuse our website or services, such as by interfering with their functionality, introducing viruses, or engaging in unauthorized access.</li>
              <li>Not resell, redistribute, or exploit our digital products (e.g., vouchers, pins) without our express written permission, unless part of an authorized partnership.</li>
              <li>Provide accurate information for transactions, including payment details and delivery preferences.</li>
              <li>Comply with any specific terms for products, such as expiration dates for vouchers or usage restrictions for crypto vouchers.</li>
            </ul>
            <p>We may monitor usage to ensure compliance and reserve the right to terminate access for violations.</p>

            <h2>4. Payments and Refunds</h2>
            <p>Payments for services are processed through secure third-party gateways. You agree to pay all applicable fees, taxes, and charges. All payments are non-refundable unless otherwise specified or required by law.</p>
            <p>In cases of digital product delivery (e.g., airtime recharges or vouchers), refunds may be issued only if the product is undelivered due to our error. Refunds, if approved, will be processed within a reasonable timeframe.</p>
            <p>We are not responsible for fluctuations in currency, network fees, or third-party charges.</p>

            <h2>5. Intellectual Property</h2>
            <p>All content on our website, including text, graphics, logos, software, and digital products, is owned by us or our licensors and protected by intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to access and use our services for personal or business purposes as intended.</p>
            <p>You may not copy, modify, distribute, or create derivative works from our content without permission. Trademarks such as "NuovoConnect" are our property.</p>

            <h2>6. Limitations of Liability</h2>
            <p>To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services, including loss of profits, data, or goodwill.</p>
            <p>Our total liability shall not exceed the amount you paid us in the preceding 12 months. We are not liable for issues beyond our control, such as network failures, partner delays, or force majeure events (e.g., natural disasters, wars).</p>
            <p>Services are provided "as is" without warranties of any kind, express or implied, including merchantability or fitness for a particular purpose.</p>

            <h2>7. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold us harmless from any claims, losses, liabilities, or expenses (including legal fees) arising from your misuse of our services, violation of these Terms, or infringement of third-party rights.</p>

            <h2>8. Governing Law and Dispute Resolution</h2>
            <p>These Terms are governed by the laws of the United Arab Emirates, without regard to conflict of law principles. Any disputes shall be resolved exclusively in the courts of Dubai, UAE.</p>
            <p>We encourage informal resolution first; contact us with any issues.</p>

            <h2>9. Changes to These Terms</h2>
            <p>We may update these Terms at any time. Changes will be posted on our website with the new effective date. Continued use after changes constitutes acceptance.</p>

            <h2>10. Termination</h2>
            <p>We may terminate or suspend your access to our services at any time for any reason, including violations of these Terms. Upon termination, your rights to use our services cease.</p>

            <h2>11. Miscellaneous</h2>
            <p>These Terms constitute the entire agreement between you and us. If any provision is deemed invalid, the remainder shall remain in effect. No waiver of any term shall be deemed a further or continuing waiver.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
