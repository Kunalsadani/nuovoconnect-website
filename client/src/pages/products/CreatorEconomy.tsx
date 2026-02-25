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
import creatorAcquisitionImg from "@/assets/images/creator-acquisition.png";
import creatorLoyaltyImg from "@/assets/images/creator-loyalty.png";
import creatorPayoutsImg from "@/assets/images/creator-payouts.png";
import creatorRevenueImg from "@/assets/images/creator-revenue.png";
import { SEO } from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function CreatorEconomy() {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Creator Economy" description="Supercharge user acquisition and drive engagement with cost-effective digital value services, real-time rewards, and flexible payout options for creators." path="/who-we-serve/creator-economy" />
      <Navigation />

      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Creator Economy</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight mt-3" data-testid="text-creator-title">
              Supercharge user acquisition and drive engagement
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Attract and retain users with cost-effective, high-impact digital value services. Deliver rewards in real time with a seamless and flexible user experience.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8" data-testid="button-creator-contact">
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
              { icon: Globe2, title: "One connection to access our global network", desc: "Launch new products and mobilise users across 3bn+ potential customers in 170+ countries with a single API integration." },
              { icon: DollarSign, title: "Highly motivating low-cost solutions", desc: "Our digital value services and rewards have a high-perceived value and proven impact at low cost — acquire customers from as little as $0.10." },
              { icon: Zap, title: "Fast-to-launch API-led platform", desc: "With a simple API connection you can integrate anywhere and deliver the user journey and trigger point you demand in days — not weeks." },
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
                Scalable & Highly Effective Incentives
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Supercharge your user acquisition</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">Reach new markets easily and drive penetration in key existing markets with personalised promotional campaigns — and acquire customers from as little as $0.10. Engage and incentivize customers with a wide range of mobile top-ups and gift cards across gaming, commerce, and mobile.</p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <img src={creatorAcquisitionImg} alt="Supercharge user acquisition" className="rounded-3xl w-full object-cover" data-testid="img-creator-acquisition" />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <img src={creatorLoyaltyImg} alt="Grow user loyalty" className="rounded-3xl w-full object-cover" data-testid="img-creator-loyalty" />
            </motion.div>
            <motion.div {...fadeUp}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Relevant & Motivating Rewards
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Grow user loyalty and reduce churn</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">Reduce churn, encourage new feature adoption and bring customers closer by rewarding desired behaviour from a wide selection of loyalty-driving rewards and high-perceived value incentives.</p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Accessible Cash-Outs
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Offer faster and more flexible payout options</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">Enable long-tail creators to cash out their earnings faster to spend on important day-to-day needs such as top-ups, bill payments, gift cards, food vouchers, and more.</p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <img src={creatorPayoutsImg} alt="Flexible payout options" className="rounded-3xl w-full object-cover" data-testid="img-creator-payouts" />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <img src={creatorRevenueImg} alt="Generate revenue and increase usage" className="rounded-3xl w-full object-cover" data-testid="img-creator-revenue" />
            </motion.div>
            <motion.div {...fadeUp}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                In-App Purchase & Data-Based Rewards
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Generate revenue and increase daily app usage</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">Cross-sell and upsell data bundles that extend time spent in-app. Sell diverse digital services that increase frequency of visits and traffic. Using non-cash rewards and in-app purchases, you can create an in-app economy that boosts revenue and encourages ongoing usage.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold">Why non-cash micropayments?</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle2, text: "Avoid the complexity and compliance issues of cash rewards" },
              { icon: DollarSign, text: "Save costs of cash processing by offering non-cash alternatives in the currency of the user" },
              { icon: BarChart3, text: "Distribute incentives in real time with full reporting to track conversion" },
              { icon: Zap, text: "Allow micropayouts from as little as $0.10" },
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
            Speak to our team today to discuss your requirements
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
