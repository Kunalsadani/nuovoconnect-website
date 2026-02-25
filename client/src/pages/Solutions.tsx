import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Lightbulb, Target, BarChart3, Globe2,
  Users, Shield, ArrowRight, CheckCircle2,
  Sparkles, TrendingUp, Heart
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Solutions() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight" data-testid="text-solutions-title">
              Client-centric, region-specific strategic solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We partner closely with you to craft bespoke strategies that empower your business to forge meaningful connections with your customers.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8" data-testid="button-solutions-demo">
                Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
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
              { icon: Lightbulb, title: "Tailor-made solutions and dedicated support", desc: "Optimise and localise your campaigns and promotions for any geography or customer segment." },
              { icon: Target, title: "Measurable results at minimal investment", desc: "Build personalised promotional campaigns and spark emotional engagement for as little as $0.10." },
              { icon: BarChart3, title: "Deep expertise and proven track record", desc: "Our seasoned specialists support you with actionable data, market intelligence, and learnings from prior campaigns." },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.15 }}>
                <Card className="border-0 shadow-none bg-orange-50/50 h-full">
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

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 space-y-24">
          {[
            {
              icon: Sparkles,
              badge: "Activate",
              title: "Attract and engage worldwide customers with scalable rewards",
              desc: "Motivate and incentivise consumers with highly compelling and budget-friendly data bundles and vouchers. Sidestep the complexity of cash-based rewards with digital incentives, delivered in real time with comprehensive reporting to measure conversion.",
              color: "from-orange-500 to-amber-400"
            },
            {
              icon: TrendingUp,
              badge: "Grow",
              title: "Transform existing relationships into revenue opportunities",
              desc: "Generate new value by offering relevant, high-demand digital products such as recharges, data bundles, and utility vouchers. Leverage real-time analytics to fine-tune product offerings and deepen customer engagement.",
              color: "from-amber-500 to-yellow-400"
            },
            {
              icon: Heart,
              badge: "Retain & Reward",
              title: "Strengthen customer loyalty and long-term engagement",
              desc: "Minimise churn and elevate user retention with digital-first incentives. Reward consumers with high-perceived-value digital solutions, powered by market-specific intelligence from our experienced team.",
              color: "from-orange-600 to-red-400"
            },
          ].map((item, i) => (
            <motion.div key={i} {...fadeUp} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                  {item.badge}
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{item.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
              <div className={`bg-gradient-to-br ${item.color} rounded-3xl aspect-[4/3] flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <item.icon size={120} className="text-white/30" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Worldwide Solutions</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">
              Bespoke solutions, refined by client and geography
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe2, title: "Extensive range of regional and local partners", desc: "With over 650+ mobile operators and billers, we help identify the most suitable (and cost-effective) product or partner for each market." },
              { icon: Users, title: "Bespoke solutions with hands-on guidance", desc: "Our team delivers technical support and shares invaluable insights drawn from successful real-world case studies." },
              { icon: Shield, title: "Robust platform with daily analytics", desc: "Access the data you need to drive campaign performance — with dashboards and reports to track response rates, retention, and ROI." },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.15 }}
                className="p-8 rounded-3xl border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-primary flex items-center justify-center mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Connect with our team today to explore your requirements
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
