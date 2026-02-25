import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight, CheckCircle2, Smartphone,
  Zap, Gift, ScanLine, TrendingUp
} from "lucide-react";
import superAppsImg from "@/assets/attached/image_1771581836411.png";
import { SEO } from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function SuperApps() {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Super Apps" description="Enhance your super app ecosystem with digital value services including mobile top-ups, bill payments, gaming pins, and gift cards." path="/who-we-serve/super-apps" />
      <Navigation />

      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Super Apps</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight mt-3" data-testid="text-superapps-title">
              Grow at scale and create recurring value streams
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sell revenue-generating, in-demand digital services at scale. Launch instantly and effortlessly across markets.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8" data-testid="button-superapps-contact">
                Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent -z-10" />
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Convenient & Sticky Services</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6">
                Diversify revenue with convenient services that keep customers coming back
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Diversify your digital value services to cross-sell and upsell valuable sticky services like top-ups, data bundles, and prepaid utilities — to increase both customer volume and frequency. With 3bn+ customers already using non-cash micropayments and prepaid digital services, they present a great opportunity to monetise new and existing markets.
              </p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <img src={superAppsImg} alt="Digital value services network" className="rounded-3xl w-full aspect-[4/3] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Partners & Products</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">
              Access our network of non-cash products and prepaid services
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              With a single connection, access our entire global network of country-specific digital prepaid services and non-cash incentives.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Smartphone, title: "Mobile Airtime & Data Top-ups", desc: "Enable users to send call and data top-ups worldwide." },
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
                Explore Partner Network <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Highly Effective Incentives</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">
              Incentivize users with flexible and highly motivating non-cash rewards
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Drive engagement and reduce churn with highly effective rewards. Find relevant incentives for every country, lifestyle, and occasion from our global network of products.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Scale fast with single connection", desc: "Make launching new products and new markets simple with a single integration and contract to reach 3bn+ people in 170+ countries." },
              { icon: TrendingUp, title: "Deliver higher conversion rates at a fraction of the cost", desc: "Our micropayments and rewards have a high-perceived value and proven impact at low cost — acquire customers from as little as $0.10." },
              { icon: Gift, title: "Offer a wide range of accessible and relevant rewards", desc: "Engage and reward users with high-perceived value non-cash payments including gift vouchers across mobile, gaming, commerce, food, and more." },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.15 }}>
                <Card className="h-full border-0 shadow-none bg-orange-50/50">
                  <CardContent className="p-8">
                    <CheckCircle2 className="text-primary mb-4" size={24} />
                    <h3 className="text-lg font-display font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
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
            Discover how NuovoConnect can help you monetise at scale
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
