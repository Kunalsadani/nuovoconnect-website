import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight, Globe2, Shield, Users,
  Lightbulb, Target, BarChart3
} from "lucide-react";
import logoImg from "@/assets/nuovoconnect-logo.png";
import { SEO } from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Solutions" description="Client-centric strategic solutions and bespoke digital value services tailored to your business needs. Global solutions with local customizations." path="/solutions" />
      <Navigation />

      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight" data-testid="text-about-title">
                Global Solutions. <span className="text-primary">Local Customizations</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                We power compelling digital incentives and prepaid solutions for enterprises worldwide. Our strategic digital value platform supports businesses at every stage of their growth journey.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full" />
                <svg viewBox="0 0 400 400" className="w-full h-full max-w-[500px] animate-[spin_60s_linear_infinite]">
                  <defs>
                    <radialGradient id="solutionGlobeGrad" cx="0.5" cy="0.5" r="0.5">
                      <stop offset="0%" stopColor="rgba(255, 138, 76, 0.1)" />
                      <stop offset="100%" stopColor="rgba(255, 138, 76, 0.0)" />
                    </radialGradient>
                  </defs>
                  <circle cx="200" cy="200" r="180" fill="url(#solutionGlobeGrad)" stroke="rgba(249, 115, 22, 0.2)" strokeWidth="1" />
                  <motion.ellipse cx="200" cy="200" rx="180" ry="80" stroke="rgba(249, 115, 22, 0.3)" strokeWidth="1" fill="none" transform="rotate(45, 200, 200)" />
                  <motion.ellipse cx="200" cy="200" rx="180" ry="80" stroke="rgba(249, 115, 22, 0.3)" strokeWidth="1" fill="none" transform="rotate(-45, 200, 200)" />
                  <motion.ellipse cx="200" cy="200" rx="180" ry="40" stroke="rgba(249, 115, 22, 0.2)" strokeWidth="1" fill="none" />
                  {[...Array(8)].map((_, i) => (
                    <motion.circle
                      key={i}
                      cx={200 + Math.cos(i * 0.8) * 140}
                      cy={200 + Math.sin(i * 0.8) * 60}
                      r="4"
                      fill="#F97316"
                      animate={{
                        r: [4, 6, 4],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                  <path d="M60 200 Q200 100 340 200" stroke="rgba(249, 115, 22, 0.2)" fill="none" />
                  <path d="M200 60 Q100 200 200 340" stroke="rgba(249, 115, 22, 0.2)" fill="none" />
                </svg>
                <motion.img
                  src={logoImg}
                  alt="NuovoConnect"
                  className="absolute w-[65px] h-[65px] object-contain"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute top-[20%] right-[10%] bg-white p-3 rounded-xl shadow-lg border border-orange-100 flex items-center gap-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xs">$</div>
                  <div>
                    <div className="text-xs text-muted-foreground">Transaction</div>
                    <div className="text-sm font-bold text-foreground">Success</div>
                  </div>
                </motion.div>
                <motion.div
                  className="absolute bottom-[20%] left-[10%] bg-white p-3 rounded-xl shadow-lg border border-orange-100 flex items-center gap-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs">5G</div>
                  <div>
                    <div className="text-xs text-muted-foreground">Data Bundle</div>
                    <div className="text-sm font-bold text-foreground">Activated</div>
                  </div>
                </motion.div>
                <motion.div
                  className="absolute top-[55%] right-[5%] bg-white p-3 rounded-xl shadow-lg border border-orange-100 flex items-center gap-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xs">B</div>
                  <div>
                    <div className="text-xs text-muted-foreground">Bank Account</div>
                    <div className="text-sm font-bold text-foreground">Approved</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent -z-10" />
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">
              Client-centric, region-specific strategic solutions
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              We partner closely with you to craft bespoke strategies that empower your business to forge meaningful connections with your customers.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
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

      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div {...fadeUp}>
            <Globe2 className="mx-auto text-primary mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Trusted by leading enterprises in 170+ countries
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Our platform processes millions of transactions daily, connecting businesses with consumers across the globe through reliable, high-performance digital value delivery.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "3bn+", label: "Reachable Audience" },
              { value: "5,000+", label: "Products Available" },
              { value: "99.9%", label: "Platform Uptime" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-2xl font-display font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
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
