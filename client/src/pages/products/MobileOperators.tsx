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

export default function MobileOperators() {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Mobile Operators" description="Partner with NuovoConnect to extend your mobile operator reach with cross-border top-ups, data bundles, and digital value services." path="/who-we-serve/mobile-operators" />
      <Navigation />

      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Mobile Operators</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight mt-3" data-testid="text-mobile-title">
              Drive recurring revenue with meaningful services that connect communities
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Unlock new revenue streams by providing cost-effective, cross-border mobile top-up solutions and other prepaid services to millions of diaspora customers.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8" data-testid="button-mobile-contact">
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
              { icon: Radio, title: "Make connectivity accessible to all with white-label solutions", desc: "Your customers can send top-ups, data bundles, and pay bills across the world with a simple feature phone and without the internet — via text message or USSD." },
              { icon: Zap, title: "Scale fast with single connection", desc: "Forget time-consuming integrations and complex product management. With a single connection — and contract — NuovoConnect solves it all." },
              { icon: Globe2, title: "Instant real-time delivery", desc: "Top-ups and vouchers are delivered in real time to connect customers and their loved ones instantly." },
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
              Diversify revenue with convenient services that connect customers worldwide
            </h2>
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
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Phone-to-Phone Solutions</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6">
                Drive recurring revenues with our white-label phone-to-phone solution
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Let diaspora customers send data, call, or text time instantly with our white-label, easy-to-implement API for mobile operators. Users can complete top-ups with a simple feature phone via text message or USSD — ideal for users without internet access.
              </p>
              <div className="space-y-4">
                {[
                  "A unique service for diaspora customers",
                  "Customised language, currencies, and short menus",
                  "Shortened user journey for returning users"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary shrink-0" size={18} />
                    <span className="text-muted-foreground">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <img src={globeImg} alt="Global connectivity network" className="rounded-3xl aspect-[4/3] object-cover w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Discover how NuovoConnect unlocks growth for your business
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
