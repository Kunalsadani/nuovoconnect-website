import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight, CheckCircle2,
  Zap, Globe2, DollarSign, BarChart3
} from "lucide-react";
import gamingAcquisitionImg from "@/assets/images/gaming-acquisition.png";
import gamingEngagementImg from "@/assets/images/gaming-engagement.png";
import gamingPayoutsImg from "@/assets/images/gaming-payouts.png";
import gamingRevenueImg from "@/assets/images/gaming-revenue.png";
import { SEO } from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Gaming() {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Gaming" description="Help gaming companies and publishers acquire players, boost engagement, reward winners, and grow in-app revenue with cost-effective digital value services and real-time rewards." path="/who-we-serve/gaming" />
      <Navigation />

      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Gaming</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight mt-3" data-testid="text-gaming-title">
              Acquire more players, keep them in-game longer
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Give your gaming studio or publishing platform a single connection to high-impact digital rewards — for player acquisition campaigns, in-game incentives, esports prizes, and faster payouts.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8" data-testid="button-gaming-contact">
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
              { icon: Globe2, title: "One connection to a global player base", desc: "Run player acquisition and reward campaigns across 170+ countries — from a single API and a single contract." },
              { icon: DollarSign, title: "High-impact rewards at low CAC", desc: "Mobile top-ups, gift cards, and vouchers carry high perceived value for players — acquire and reactivate from as little as $0.10 each." },
              { icon: Zap, title: "Built for live ops and game launches", desc: "Trigger rewards from any backend event — install, win, level-up, tournament, or seasonal drop — and deliver them in real time." },
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

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 space-y-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Scalable Player Acquisition Incentives
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Acquire players from as little as $0.10</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">Run install, sign-up, and re-engagement campaigns in any market with personalised digital rewards your players actually want — from in-game currency top-ups to global gaming and commerce gift cards.</p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <img src={gamingAcquisitionImg} alt="Mobile gamers playing competitive games in a gaming lounge" className="rounded-3xl w-full object-cover" data-testid="img-gaming-acquisition" />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <img src={gamingEngagementImg} alt="Engaged gamer celebrating a victory at a desktop gaming setup" className="rounded-3xl w-full object-cover" data-testid="img-gaming-engagement" />
            </motion.div>
            <motion.div {...fadeUp}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Relevant & Motivating Rewards
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Boost engagement and reduce player churn</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">Drop in personalised rewards for daily logins, streaks, missions, and feature adoption. High-perceived-value incentives bring lapsed players back and keep your most loyal cohorts active for longer.</p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Tournament & Affiliate Payouts
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Pay out winners, streamers, and affiliates instantly</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">Settle esports prize pools, tournament winnings, and affiliate rewards in real time — as gift cards, top-ups, or vouchers in the player's local currency, with full reporting and reconciliation.</p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <img src={gamingPayoutsImg} alt="Esports tournament winner lifting a trophy on stage with prize pool displayed" className="rounded-3xl w-full object-cover" data-testid="img-gaming-payouts" />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <img src={gamingRevenueImg} alt="In-game store on a smartphone showing virtual currency, skins, and a data bundle add-on" className="rounded-3xl w-full object-cover" data-testid="img-gaming-revenue" />
            </motion.div>
            <motion.div {...fadeUp}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                In-Game Purchases & Connectivity
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Grow in-game revenue and daily playtime</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">Cross-sell mobile data bundles that keep mobile players online longer, and bundle gift cards or in-game currency into your store. Build a richer in-game economy that lifts ARPDAU and session frequency.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold">Why non-cash rewards work for gaming</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle2, text: "Sidestep the compliance and fraud overhead of cash payouts in-game" },
              { icon: DollarSign, text: "Reward players in their local currency and language — without FX or processing fees eroding margin" },
              { icon: BarChart3, text: "Trigger rewards from any backend event in real time, with full reporting on conversion and ROI" },
              { icon: Zap, text: "Micropayouts from $0.10 unlock incentives across every player segment" },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <item.icon className="mx-auto text-primary mb-4" size={28} />
                    <p className="text-sm text-muted-foreground">{item.text}</p>
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
            See how NuovoConnect helps gaming companies acquire and retain players
          </h2>
          <Link href="/contact">
            <Button size="lg" className="btn-gradient rounded-full px-8 mt-4">
              Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
