import { motion } from "framer-motion";
import {
  ArrowRight, Globe, CreditCard,
  Wallet, ShoppingCart, Layers, Landmark, Heart, Radio, Banknote, Gamepad2
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { NetworkGlobe } from "@/components/NetworkGlobe";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  const products = [
    { icon: Globe, label: "Global Connectivity" },
    { icon: Landmark, label: "Global Bank Accounts" },
    { icon: CreditCard, label: "Payment Processing" },
    { icon: Heart, label: "Loyalty & Retention Tools" },
  ];

  const sectors = [
    { icon: ShoppingCart, title: "Retail Merchants", href: "/who-we-serve/retail-merchants" },
    { icon: Radio, title: "Telecom", href: "/who-we-serve/telecommunications" },
    { icon: Wallet, title: "eWallets", href: "/who-we-serve/ewallets" },
    { icon: Banknote, title: "Forex", href: "/who-we-serve/forex" },
    { icon: Layers, title: "Super Apps", href: "/who-we-serve/super-apps" },
    { icon: Gamepad2, title: "Gaming", href: "/who-we-serve/gaming" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <SEO title="Global Digital Value Services Platform" description="NuovoConnect is a worldwide B2B platform for mobile top-ups, data bundles, gaming pins, gift cards, crypto vouchers, and digital micropayments across 170+ countries." path="/" />
      <Navigation />

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div
          aria-hidden
          className="absolute pointer-events-none hero-glow"
          style={{
            top: "10%",
            left: "30%",
            width: "800px",
            height: "600px",
            zIndex: 0,
          }}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-display font-extrabold leading-[1.1] mb-6 tracking-tight text-foreground" data-testid="text-hero-title">
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
                    className="btn-gradient rounded-full px-8 text-base"
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
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#7C3AED", letterSpacing: "0.05em" }}>
              Our Offerings
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-6 text-foreground">
              Digital products tailored for every region
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.map((Product, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white p-5 md:p-6 rounded-2xl border border-border flex flex-col items-center justify-center text-center gap-3 md:gap-4 shadow-[0_6px_24px_rgba(13,27,75,0.08)]"
              >
                <div className="w-11 h-11 rounded-xl icon-tile-gradient flex items-center justify-center shrink-0">
                  <Product.icon size={22} />
                </div>
                <span className="font-semibold text-sm text-foreground leading-tight break-words">{Product.label}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products">
              <Button className="btn-gradient rounded-full px-8" data-testid="button-browse-all-products">
                Browse All Products <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "#F0F4FF" }}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Purpose-built solutions for every industry
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore our client-centric, industry-specific solutions — underpinned by regional expertise and worldwide support.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {sectors.map((sector, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl shadow-[0_6px_24px_rgba(13,27,75,0.08)]"
              >
                <Link href={sector.href}>
                  <span
                    className="p-5 md:p-6 rounded-2xl bg-white border border-border flex items-center gap-3 md:gap-4 cursor-pointer transition-colors hover:border-primary/40 min-w-0"
                    data-testid={`link-sector-${sector.href.split('/').pop()}`}
                  >
                    <div className="w-11 h-11 rounded-xl icon-tile-gradient flex items-center justify-center shrink-0">
                      <sector.icon size={22} />
                    </div>
                    <h3 className="font-display font-bold text-foreground text-sm md:text-base leading-tight break-words min-w-0">{sector.title}</h3>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/who-we-serve">
              <Button className="btn-gradient rounded-full px-8">
                Who We Serve <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
              Activate and grow your customer base
            </h2>
            <Link href="/contact">
              <Button size="lg" className="btn-gradient rounded-full px-8" data-testid="button-cta-contact">
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
