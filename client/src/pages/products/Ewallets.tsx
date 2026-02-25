import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight, CheckCircle2, Smartphone,
  Gift, ScanLine
} from "lucide-react";
import ewalletsImg1 from "@/assets/attached/image_1771594693859.png";
import ewalletsImg2 from "@/assets/attached/image_1771594913227.png";
import ewalletsImg3 from "@/assets/attached/image_1771595101691.png";
import { SEO } from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Ewallets() {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="eWallets" description="Diversify revenue and supercharge user acquisition for your eWallet platform with digital value services, rewards, and loyalty programs." path="/who-we-serve/ewallets" />
      <Navigation />

      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">eWallets</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight mt-3" data-testid="text-ewallets-title">
              Accelerate growth with digital prepaid services directly through your wallet
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sell revenue-generating, in-demand digital services at scale. Launch instantly and effortlessly across markets.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8" data-testid="button-ewallets-contact">
                Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent -z-10" />
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

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Convenient & Sticky Services</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6">
                Diversify revenue with convenient services that keep customers coming back
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Unlock new growth opportunities by offering valuable, high-engagement services like mobile top-ups, data bundles, and prepaid utility vouchers. Leverage the market of 3bn+ customers already using prepaid digital value services and take the opportunity to grow new and existing markets.
              </p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <img src={ewalletsImg1} alt="Digital value services" className="rounded-3xl w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <img src={ewalletsImg2} alt="Supercharge user acquisition" className="rounded-3xl w-full object-cover" />
            </motion.div>
            <motion.div {...fadeUp}>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Scalable & Highly Effective Incentives</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6">
                Supercharge your user acquisition with motivating non-cash incentives
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Acquire new users through referral programmes and promotional campaigns. Motivate customers to advocate your platform and generate referrals that raise brand awareness and trust.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Easy-to-integrate, developer-friendly API", desc: "Integrate our simple API to create a unified user experience across your app, website, or portal." },
                  { title: "24/7 tech support", desc: "Our in-house team handles hosting, delivery, and offers round-the-clock support." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-display font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Drive Loyalty With Incentives</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6">
                Grow user loyalty and reduce churn
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Drive feature adoption by encouraging and reinforcing desired behaviours — loading their wallet, paying for purchases at selected merchants, or performing other services. You decide what action to reward.
              </p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <img src={ewalletsImg3} alt="Grow user loyalty" className="rounded-3xl w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Partners & Products</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">
              Access the world's largest non-cash payment partner network with a single connection
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Smartphone, title: "Mobile Airtime & Data Top-ups", desc: "Enable users to purchase and send airtime and data top-ups worldwide." },
              { icon: ScanLine, title: "eSIMs", desc: "Unlock growth with the world's fastest-growing connectivity product." },
              { icon: Gift, title: "Branded Vouchers & Gift Cards", desc: "Drive revenue with purchases of popular gaming, music, and entertainment vouchers." },
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
                Explore Our Partner Network <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Let NuovoConnect help you expand digital value services at scale
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
