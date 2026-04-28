import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight, CheckCircle2, Globe2, Smartphone,
  Gift, ScanLine, Zap, Users
} from "lucide-react";
import retailHeroImg from "@/assets/images/retail-merchant-hero.png";
import { SEO } from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function RetailMerchants() {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Retail Merchants" description="Help your retail merchants grow basket size and footfall with digital airtime, data bundles, gift cards, and prepaid vouchers across 170+ countries." path="/who-we-serve/retail-merchants" />
      <Navigation />

      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Retail Merchants</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight mt-3" data-testid="text-retail-title">
              Bigger baskets, more footfall, happier shoppers
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Give your stores and online checkouts a single connection to high-demand digital top-ups, vouchers, and gift cards — and turn every transaction into recurring revenue.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8" data-testid="button-retail-contact">
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
              { icon: Zap, title: "Instant in-store and online fulfilment", desc: "Top-ups, vouchers, and gift cards are delivered to the till — or to a shopper's phone — in real time." },
              { icon: Globe2, title: "One catalogue, 170+ countries", desc: "Stock thousands of high-demand digital products from a global network of telco, utility, and gift card partners." },
              { icon: Users, title: "One connection across every sales channel", desc: "Plug the same catalogue into POS, e-commerce, mobile apps, and loyalty programs — and tailor the experience for each." },
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
              The digital products shoppers actually want at the till
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Stock high-demand prepaid categories alongside your existing range — and give cashiers and shoppers a faster way to add them to the basket.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Smartphone, title: "Mobile Airtime & Data Top-ups", desc: "Sell call and data top-ups for thousands of mobile networks straight from your POS or checkout." },
              { icon: ScanLine, title: "eSIMs", desc: "Add the world's fastest-growing connectivity product to your range with no SIM logistics." },
              { icon: Gift, title: "Branded Vouchers & Gift Cards", desc: "Offer gift cards for groceries, entertainment, and lifestyle brands shoppers already love." },
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
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Add new revenue streams without adding overheads
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Digital products carry no stock, shrinkage, or supply-chain headaches. Plug in once and start earning margin on top-ups, vouchers, and gift cards across every store and channel from day one.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-display font-bold mb-1">Fast, friction-free at the till</h3>
                    <p className="text-sm text-muted-foreground">Cashiers complete a top-up or voucher sale in seconds — just a number, denomination, and tap.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-display font-bold mb-1">Multiple revenue streams from one contract</h3>
                    <p className="text-sm text-muted-foreground">One integration, one settlement, and a full catalogue of products to cross- and upsell to every shopper.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <img src={retailHeroImg} alt="Retail merchant serving a shopper at the counter" className="rounded-3xl aspect-[4/3] object-cover w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            See how NuovoConnect helps retail merchants grow basket and footfall
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
