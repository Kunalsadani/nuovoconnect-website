import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight, CheckCircle2, Globe2, Smartphone,
  Gift, CreditCard, ScanLine, Zap, Users, Signal
} from "lucide-react";
import { SEO } from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function EsimServices() {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="eSIM Services" description="Offer global eSIM bundles and connectivity solutions for travelers, remote workers, and digital nomads across 170+ countries." path="/who-we-serve/esim-services" />
      <Navigation />

      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">eSIM Services</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight mt-3" data-testid="text-esim-title">
              Scale globally with a single partner to deliver digital goods and prepaid services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              NuovoConnect's API is a one-stop shop for all your customers' needs — from mobile top-ups to prepaid utility vouchers and gift cards covering entertainment, transport, gaming, and more. Deliver to anyone, anywhere, anytime.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8" data-testid="button-esim-contact">
                Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent -z-10" />
      </section>

      <section className="py-12 border-y border-orange-100 bg-orange-50/50">
        <div className="container mx-auto px-4 md:px-6">
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Easy integration and quick setup", desc: "Forget time-consuming integrations and complex product management. Our plug-and-play components give you complete control to create the ideal user journey for your customers." },
              { icon: Globe2, title: "Instant real-time delivery", desc: "Delight customers with a seamless purchase experience and fulfil every transaction on the spot." },
              { icon: Signal, title: "Offer a complimentary solution to long-distance calling", desc: "Cross-border mobile top-ups increase user stickiness, creating more opportunities to upsell and cross-sell." },
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
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Partners & Products</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">
              Diversify revenue with new products
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Launching new products and markets is simple when you have access to our global network of country-specific digital prepaid services and non-cash incentives.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Smartphone, title: "Mobile Airtime & Data Top-ups", desc: "Enable users to send call and data top-ups worldwide and stay connected with their families." },
              { icon: ScanLine, title: "eSIMs", desc: "Unlock growth with the world's fastest-growing connectivity product." },
              { icon: Gift, title: "Branded Vouchers & Gift Cards", desc: "Allow customers to send vouchers for groceries, entertainment, and other services to friends and family." },
              { icon: CreditCard, title: "Prepaid Utility Vouchers", desc: "Offer valuable diaspora-relevant digital value services such as prepaid utility and gift vouchers." },
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
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Team & Network</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">
              An experienced and dedicated partner to your business
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              We partner with you to deliver high-impact strategic growth solutions based on your business needs.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "A global team with local expertise", desc: "With offices in all key locations, we have the local market expertise and insights to recommend the right product mix for your customers. Launch new markets with confidence." },
              { title: "An experienced and trusted partner", desc: "Our dedicated team and robust technology will handle all the complexities. We make delivering high-impact solutions simple and easy." },
              { title: "A powerful network built on long-standing relationships", desc: "We developed multi-year relationships with both in-country and global providers. With our leading partner network, we've delivered solutions with proven business impact." },
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
            Let NuovoConnect help you scale globally
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
