import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle2, Globe2, Smartphone,
  Gamepad2, Coins, ScanLine, CreditCard,
  Building2, Users, Wallet, ShoppingCart, Layers, Landmark
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { NetworkGlobe } from "@/components/NetworkGlobe";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  const products = [
    { icon: Smartphone, label: "Mobile Airtime & Data Recharges" },
    { icon: ScanLine, label: "eSIM Bundles" },
    { icon: Landmark, label: "Global Bank Accounts" },
    { icon: CreditCard, label: "Payment Processing" },
    { icon: ShoppingCart, label: "Brand Vouchers & Gift Cards" },
    { icon: Gamepad2, label: "Gaming Pins" },
    { icon: Users, label: "Loyalty Programs for Gamers" },
    { icon: Coins, label: "Crypto Vouchers" },
  ];

  const sectors = [
    { icon: ShoppingCart, title: "Retail Networks" },
    { icon: Smartphone, title: "Mobile Operators" },
    { icon: Wallet, title: "eWallets" },
    { icon: Building2, title: "Money Transfer Operators" },
    { icon: Layers, title: "Super Apps" },
    { icon: Users, title: "Creator Economy" },
  ];


  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <SEO title="Global Digital Value Services Platform" description="NuovoConnect is a worldwide B2B platform for mobile top-ups, data bundles, gaming pins, gift cards, crypto vouchers, and digital micropayments across 170+ countries." path="/" />
      <Navigation />

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 tracking-tight text-foreground" data-testid="text-hero-title">
                Activate global audiences.{" "}
                <span className="text-gradient">Unlock new territories.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Deliver compelling digital value products and provide in-demand prepaid solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    data-testid="button-hero-contact"
                    className="rounded-full px-8 text-lg shadow-lg shadow-orange-500/25"
                  >
                    Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:block"
            >
              <NetworkGlobe />
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent -z-10" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      <section className="py-10 border-y border-orange-200 bg-orange-100/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <h3 className="text-center text-2xl md:text-3xl font-display font-bold mb-8 text-foreground" data-testid="text-access-network">Access our network</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              { value: "3bn+", label: "Consumer Access" },
              { value: "170+", label: "Countries" },
              { value: "2,100+", label: "Partners" },
              { value: "200mn+", label: "Transactions Processed" },
              { value: "15k+", label: "Customised Products" },
            ].map((stat, i) => (
              <div key={i} className="p-2">
                <div className="text-3xl font-display font-bold text-primary mb-1" data-testid={`text-stat-${i}`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Globe2,
                title: "Compelling, affordable digital incentives",
                desc: "Provide non-cash rewards and digital motivators with strong perceived value and demonstrable results at minimal cost."
              },
              {
                icon: Layers,
                title: "Worldwide reach with local relevance",
                desc: "Grow rapidly with our network that delivers highly pertinent, region-specific products and partner connections."
              },
            ].map((item, idx) => (
              <motion.div key={idx} {...fadeUp} transition={{ delay: idx * 0.15 }}
                className="group p-8 rounded-3xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Offerings</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-6">
              Digital products tailored for every region
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((Product, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-orange-100 flex flex-col items-center justify-center text-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-primary">
                  <Product.icon size={28} />
                </div>
                <span className="font-semibold text-sm">{Product.label}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products">
              <Button variant="outline" className="rounded-full px-8 border-orange-200 text-orange-700">
                Browse All Products <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Why choose digital value services?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tap into a marketplace of over 3 billion potential consumers seeking seamless, mobile-first solutions.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Zero regulatory barriers or compliance headaches",
              "One POC to extend your global Value-added offerings",
              "Launch micro-value rewards starting as low $0.20",
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.15 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-orange-50/50 border border-orange-100"
              >
                <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={20} />
                <span className="text-foreground font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/solutions">
              <Button variant="outline" className="rounded-full px-8 border-orange-200 text-orange-700">
                Discover Solutions <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Purpose-built solutions for every industry
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our client-centric, industry-specific solutions — underpinned by regional expertise and worldwide support.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {sectors.map((sector, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-white border border-border flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary flex items-center justify-center shrink-0">
                  <sector.icon size={22} />
                </div>
                <h3 className="font-display font-bold">{sector.title}</h3>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/who-we-serve">
              <Button className="rounded-full px-8 bg-orange-500 text-white shadow-lg shadow-orange-500/25">
                Who We Serve <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Activate and grow your customer base
            </h2>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8 bg-orange-500 text-white shadow-lg shadow-orange-500/25" data-testid="button-cta-contact">
                Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
