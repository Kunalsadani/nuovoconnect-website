import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight, Building2, Smartphone, Wallet,
  ShoppingCart, Users, Globe2, ScanLine,
  Layers, Landmark
} from "lucide-react";
import { SEO } from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function WhoWeServe() {
  const sectors = [
    { icon: ShoppingCart, title: "Retail Networks", desc: "Unlock new revenue channels and diversify your portfolio with services tailored for global communities.", href: "/who-we-serve/retail-networks" },
    { icon: Smartphone, title: "Mobile & e-SIM Providers", desc: "Deliver bespoke data & SIM solutions for frictionless connectivity across borders.", href: "/who-we-serve/mobile-operators" },
    { icon: ScanLine, title: "eSIM Services", desc: "Deliver digital SIM solutions for frictionless connectivity across borders without needing physical SIM cards.", href: "/who-we-serve/esim-services" },
    { icon: Landmark, title: "Relocation Providers", desc: "Offer a comprehensive suite of banking and payment capabilities to your customers through a single API.", href: "/who-we-serve/banking" },
    { icon: Wallet, title: "eWallets", desc: "Grow faster and strengthen user retention with frictionless, highly relevant digital offerings.", href: "/who-we-serve/ewallets" },
    { icon: Building2, title: "Money Transfer Operators", desc: "Deliver cutting-edge cross-border digital products that enhance and complement your core proposition.", href: "/who-we-serve/money-transfer-operators" },
    { icon: Layers, title: "Super Apps", desc: "Expand rapidly and build sustainable value streams that keep your audience engaged and loyal.", href: "/who-we-serve/super-apps" },
    { icon: Users, title: "Creator Economy", desc: "Accelerate user growth and amplify creator engagement with compelling digital rewards.", href: "/who-we-serve/creator-economy" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Who We Serve" description="NuovoConnect serves retail networks, mobile operators, eWallets, relocation providers, money transfer operators, super apps, and the creator economy." path="/who-we-serve" />
      <Navigation />

      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight" data-testid="text-serve-title">
              Grow your business with our industry-specific solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We provide tailored solutions for every sector, backed by the region-specific intelligence you need to curate the ideal product mix for your audience.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8" data-testid="button-serve-demo">
                Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent -z-10" />
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }}>
                <Card className="h-full border-border hover:border-primary/30 transition-all group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                      <sector.icon size={28} />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3">{sector.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{sector.desc}</p>
                    <Link href={sector.href}>
                      <span className="text-primary font-semibold text-sm flex items-center gap-1 cursor-pointer hover:gap-2 transition-all">
                        Learn more <ArrowRight size={14} />
                      </span>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to explore bespoke solutions for your business?
          </h2>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-8 bg-orange-500 text-white border-orange-500 mt-4">
              Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
