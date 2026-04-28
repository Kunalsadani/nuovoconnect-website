import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe, Heart, ArrowRight, CheckCircle2, CreditCard, Landmark
} from "lucide-react";
import { SEO } from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Products() {
  const products = [
    {
      icon: Globe,
      name: "Global Connectivity",
      desc: "Keep customers connected worldwide with mobile airtime, data recharges, and eSIM bundles across 550+ operators in 160+ countries."
    },
    {
      icon: Landmark,
      name: "Global Bank Accounts",
      desc: "Open and manage bank accounts across multiple jurisdictions. Seamless onboarding with full KYC compliance built in."
    },
    {
      icon: CreditCard,
      name: "Payment Processing",
      desc: "Process payments across borders with competitive FX rates and real-time settlement. Support for multiple currencies and payment methods."
    },
    {
      icon: Heart,
      name: "Loyalty & Retention Tools",
      desc: "Drive repeat engagement and long-term value with branded vouchers, gift cards, gaming pins, and tailored loyalty programmes."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Products" description="Explore NuovoConnect's core offerings: global connectivity, global bank accounts, payment processing, and loyalty & retention tools." path="/products" />
      <Navigation />

      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight" data-testid="text-products-title">
              Digital products designed for every market
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A comprehensive portfolio of digital products accessible through our network, connecting you to billions of consumers across emerging and established markets.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-orange-50 to-transparent -z-10" />
      </section>

      <section className="py-10 border-y border-orange-100 bg-orange-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-display font-bold text-primary">3bn+</div>
              <div className="text-sm text-muted-foreground">Consumer Access</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-primary">170+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-primary">2,100+</div>
              <div className="text-sm text-muted-foreground">Partners</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-primary">15k+</div>
              <div className="text-sm text-muted-foreground">Customised Products</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <Card className="h-full border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 text-primary flex items-center justify-center mb-6">
                      <product.icon size={28} />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3">{product.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{product.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Why choose digital value services?</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Tap into a marketplace of over 3 billion potential consumers seeking seamless, mobile-first solutions.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Zero regulatory barriers or compliance overhead",
              "One POC to extend your global Value-added offerings",
              "Launch micro-value rewards starting as low $0.20",
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.15 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-border"
              >
                <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                <span className="text-foreground font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to browse our product catalogue?
          </h2>
          <Link href="/contact">
            <Button size="lg" className="btn-gradient rounded-full px-8">
              Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
