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
import retailHeroImg from "@/assets/attached/image_1771510404087.png";
import { SEO } from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function RetailNetworks() {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Retail Networks" description="Expand your retail network offerings with digital airtime, data bundles, gift cards, and prepaid vouchers across 170+ countries." path="/who-we-serve/retail-networks" />
      <Navigation />

      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Retail Networks</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight mt-3" data-testid="text-retail-title">
              Enhance customer engagement and expand service offerings
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Drive recurring revenue and increase traffic with a range of convenient cross-border mobile top-up and digital value services.
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
              { icon: Zap, title: "Real-time digital delivery", desc: "Top-ups and vouchers are delivered in real time to instantly connect customers and their loved ones." },
              { icon: Globe2, title: "Offer multiple services that connect a market of 3bn+", desc: "Our global network of partners and products gives you a range of highly relevant products and services across 170+ countries." },
              { icon: Users, title: "A single connection with multiple user experiences", desc: "Customise your user experience to your multiple sales and engagement channels." },
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
              Drive revenue with in-demand mobile top-ups and prepaid services
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              With a single connection, enable a wide range of highly relevant products and services to drive foot traffic to store and grow revenues.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Smartphone, title: "Mobile Airtime & Data Top-ups", desc: "Drive recurring revenues by enabling customers to send call and data top-ups worldwide." },
              { icon: ScanLine, title: "eSIMs", desc: "Unlock growth with the world's fastest-growing connectivity product." },
              { icon: Gift, title: "Branded Vouchers & Gift Cards", desc: "Allow customers to send vouchers for groceries, entertainment, and other services to family and friends." },
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
                Diversify revenue and increase foot traffic fast — with no upfront cost
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Forget the challenges of managing small cash transactions. Customers increasingly expect digital-first rewards and incentives as an essential and convenient way to stay connected, access services, and enjoy greater flexibility.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-display font-bold mb-1">Customer-friendly and quick to sell</h3>
                    <p className="text-sm text-muted-foreground">With just a phone number, they can make real-time transfers and payments to their loved ones.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-display font-bold mb-1">Deliver multiple revenue streams from a single service</h3>
                    <p className="text-sm text-muted-foreground">With one contract and a single transaction, access a range of products to cross- and upsell to customers.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <img src={retailHeroImg} alt="People connecting across borders" className="rounded-3xl aspect-[4/3] object-cover w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Discover how NuovoConnect can help diversify your retail revenues
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
