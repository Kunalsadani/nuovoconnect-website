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

export default function MoneyTransferOperators() {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Money Transfer Operators" description="Enhance your money transfer platform with digital value services, enabling customers to send mobile top-ups and digital gifts alongside remittances." path="/who-we-serve/money-transfer-operators" />
      <Navigation />

      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Money Transfer Operators</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight mt-3" data-testid="text-mto-title">
              Deliver cutting-edge cross-border digital products
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Enhance and complement your core proposition with cost-effective, high-impact digital value services that create new revenue streams and deepen customer loyalty.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8" data-testid="button-mto-contact">
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
              { icon: Globe2, title: "Access our extensive global network", desc: "Expand your digital product portfolio across 170+ countries with a single API integration — no complex multi-partner agreements needed." },
              { icon: TrendingUp, title: "Cross-sell to maximise customer value", desc: "Complement money transfers with high-demand digital products like mobile top-ups, gift cards, and utility payments to increase average transaction value." },
              { icon: Zap, title: "Launch fast with developer-friendly APIs", desc: "Integrate once and start offering new digital services in days, not months. Our platform handles hosting, delivery, and 24/7 support." },
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
              Diversify revenue with convenient services that connect customers worldwide
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Unlock new revenue streams with cost-effective cross-border digital transfer solutions. Sending airtime, data, vouchers, and bill payments can be as simple as sending a text message — both instant and low-cost.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Smartphone, title: "Mobile Airtime & Data Top-ups", desc: "Enable users to purchase and send airtime and data top-ups worldwide." },
              { icon: ScanLine, title: "eSIMs", desc: "Unlock growth with the world's fastest-growing connectivity product." },
              { icon: Gift, title: "Branded Vouchers & Gift Cards", desc: "Use non-cash incentives to reward interactions and drive brand loyalty." },
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
                Launch new markets seamlessly and get all the benefits — at no added cost
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Scale quickly and confidently with our global network of providers and our in-market expertise and insights from partnering with leading brands globally.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Easy-to-integrate, developer-friendly API", desc: "Integrate our simple API to create a unified user experience across your app, website, or portal." },
                  { title: "24/7 tech support", desc: "Our in-house team handles hosting, delivery, and offers round-the-clock support." },
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
              <img src={meshGlobeImg} alt="Global money transfer network" className="rounded-3xl aspect-[4/3] object-cover w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Discover how NuovoConnect unlocks growth with cross-border digital products
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
