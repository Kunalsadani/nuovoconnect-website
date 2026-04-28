import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight, CheckCircle2, Globe2, Smartphone,
  Gift, ScanLine, Zap, TrendingUp
} from "lucide-react";
import meshGlobeImg from "@/assets/attached/image_1771511729836.png";
import { SEO } from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Forex() {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Forex" description="Help forex providers grow wallet share with digital value services — top-ups, gift cards, and bill payments alongside currency exchange and FX transfers." path="/who-we-serve/forex" />
      <Navigation />

      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Forex</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight mt-3" data-testid="text-forex-title">
              Turn every FX customer into a digital-first relationship
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Add high-margin digital value services alongside your currency exchange and FX transfers — and give customers more reasons to come back to your app or branch every week.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8" data-testid="button-forex-contact">
                Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent -z-10" />
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe2, title: "A global digital catalogue, ready to plug into your FX app", desc: "Add products from 2,100+ partners across 170+ countries through a single API — no extra agreements, no extra ops." },
              { icon: TrendingUp, title: "Lift wallet share around every FX trade", desc: "Cross-sell mobile top-ups, gift cards, and bill payments alongside currency exchange to grow per-customer value." },
              { icon: Zap, title: "Go live in days, not quarters", desc: "Developer-friendly APIs, full hosting, real-time delivery, and 24/7 support — so your team can focus on the FX product." },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.15 }}>
                <Card className="h-full border-0 shadow-none bg-orange-50/50">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                      <item.icon size={28} />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              The digital products that pair perfectly with FX
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Customers visit your app to move money — give them a reason to stay. Add airtime, data, eSIMs, vouchers, and bill payments to your FX flow with one connection.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Smartphone, title: "Mobile Airtime & Data Top-ups", desc: "Let customers send airtime and data to recipients worldwide right after their FX transfer clears." },
              { icon: ScanLine, title: "eSIMs", desc: "Bundle travel and roaming eSIMs with multi-currency wallets for the modern global customer." },
              { icon: Gift, title: "Branded Vouchers & Gift Cards", desc: "Reward FX traders with high-perceived-value gift cards to drive sign-up, referral, and repeat trades." },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <item.icon className="text-primary mb-4" size={28} />
                    <h3 className="font-display font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/network">
              <Button variant="outline" className="rounded-full px-6">
                Explore Our Network <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">One Connection, One Contract</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6">
                Open new corridors and product lines without new integrations
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Scale into new currencies and digital product categories with one global partner. Our in-market expertise — built alongside leading FX and fintech brands — keeps your launches fast and compliant.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Developer-friendly APIs", desc: "Drop a unified digital catalogue into your existing FX app, website, or branch portal in days." },
                  { title: "24/7 operational support", desc: "Hosting, delivery, monitoring, and reconciliation all handled by our team — including overnight FX windows." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-display font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <img src={meshGlobeImg} alt="Global currency exchange and FX network" className="rounded-3xl aspect-[4/3] object-cover w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            See how NuovoConnect helps forex providers grow wallet share
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
