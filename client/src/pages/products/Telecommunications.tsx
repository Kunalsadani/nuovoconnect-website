import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight, CheckCircle2, Globe2, Smartphone,
  Gift, ScanLine, Zap, Radio
} from "lucide-react";
import globeImg from "@/assets/attached/image_1771511000228.png";
import { SEO } from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Telecommunications() {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Telecommunications" description="Help telecommunications providers grow ARPU and reduce churn with cross-border top-ups, data bundles, eSIMs, and digital value services." path="/who-we-serve/telecommunications" />
      <Navigation />

      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Telecommunications</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight mt-3" data-testid="text-telecommunications-title">
              Grow ARPU and reduce churn with services your subscribers love
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Give your telecommunications business a single platform for cross-border top-ups, data bundles, eSIMs, and digital value services — and turn every subscriber interaction into recurring revenue.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8" data-testid="button-telecommunications-contact">
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
              { icon: Radio, title: "Reach every subscriber on every device", desc: "Smartphone, feature phone, or no internet at all — your customers can buy top-ups, data, and bill payments via app, web, SMS, or USSD." },
              { icon: Zap, title: "Launch new products without rebuilding the stack", desc: "One API and one contract gives your team a global catalogue of telco, utility, and digital products to spin up campaigns in days." },
              { icon: Globe2, title: "Real-time delivery, settled globally", desc: "Top-ups, eSIMs, and vouchers are delivered the moment your subscriber pays — backed by 24/7 monitoring and reconciliation." },
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

      <section className="py-12 border-y border-orange-200 bg-orange-200/80">
        <div className="container mx-auto px-4 md:px-6">
          <h3 className="text-center text-2xl md:text-3xl font-display font-bold mb-8 text-foreground">Access our Network</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "3bn+", label: "Consumer Access" },
              { value: "170+", label: "Countries" },
              { value: "2,100+", label: "Partners" },
              { value: "15k+", label: "Customised Products" },
            ].map((stat, i) => (
              <div key={i} className="p-2">
                <div className="text-3xl font-display font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Partners & Products</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">
              A complete digital catalogue for modern telecommunications
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Smartphone, title: "Mobile Airtime & Data Top-ups", desc: "Sell and bundle top-ups across thousands of mobile networks worldwide from a single API." },
              { icon: ScanLine, title: "eSIMs", desc: "Launch travel and roaming eSIM plans for your subscribers without managing SIM logistics." },
              { icon: Gift, title: "Branded Vouchers & Gift Cards", desc: "Use non-cash rewards to power loyalty programs, win-back offers, and partner promotions." },
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
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">White-Label Top-Up Solutions</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6">
                Launch a fully branded cross-border top-up service in weeks
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Give your subscribers a frictionless way to send airtime, data, and bill payments to family and friends abroad — through your own app, web portal, SMS, or USSD. We provide the rails, you keep the brand and the customer relationship.
              </p>
              <div className="space-y-4">
                {[
                  "Fully white-labelled across web, app, SMS, and USSD",
                  "Localised language, currency, and menu flows for every market",
                  "Shortened journeys for returning users to lift conversion"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary shrink-0" size={18} />
                    <span className="text-muted-foreground">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <img src={globeImg} alt="Global telecommunications connectivity network" className="rounded-3xl aspect-[4/3] object-cover w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            See how NuovoConnect helps telecommunications providers grow ARPU
          </h2>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-8 bg-orange-500 text-white border-orange-500">
              Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
