"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Smartphone, Gift, ScanLine, CreditCard, ShoppingCart, Globe2, Zap, TrendingUp } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export function RetailMerchantsClient() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Retail Merchants</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight mt-3" data-testid="text-retail-title">
              Unlock new revenue channels and grow customer loyalty
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Diversify your product portfolio with high-demand digital value services — mobile top-ups, gift cards, eSIMs, and more — and give your customers compelling reasons to visit more often.
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe2,
                title: "Tap into a global market of digital buyers",
                desc: "With over 3 billion consumers already purchasing prepaid digital services, the addressable market is huge — and your store or platform is perfectly positioned to capture it.",
              },
              {
                icon: TrendingUp,
                title: "Boost basket size and visit frequency",
                desc: "Repeat digital purchases drive footfall and online sessions. Customers who top up weekly are some of the most loyal and highest-frequency buyers.",
              },
              {
                icon: Zap,
                title: "Launch in days with a single integration",
                desc: "One API connection gives you access to thousands of digital products across 170+ countries. No complex procurement, no separate supplier agreements.",
              },
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

      {[
        {
          tag: "New Revenue Streams",
          title: "Add high-margin digital products to your existing offer",
          body: "Mobile airtime, data top-ups, eSIMs, gaming pins, and gift cards carry strong margins and near-zero shrinkage compared to physical goods. Launch them in-store, online, or via kiosk with minimal overhead.",
          img: "/assets/attached/image_1771500258864.png",
          alt: "Retail merchant selling digital top-ups",
          reverse: false,
        },
        {
          tag: "Diaspora & Migrant Communities",
          title: "Serve international communities with products they need",
          body: "Retailers located near diaspora communities can become go-to destinations for international top-ups and remittance-adjacent services. Give your customers the ability to support family back home from your counter.",
          img: "/assets/attached/image_1771511000228.png",
          alt: "Diaspora community digital services",
          reverse: true,
          items: [
            { title: "Country-specific products", desc: "Curate top-ups and vouchers for the specific countries your community connects with most." },
            { title: "Multilingual support available", desc: "Our platform supports localisation so your customers can transact in their preferred language." },
          ],
        },
        {
          tag: "Loyalty & Gifting",
          title: "Drive loyalty with gift cards and reward programmes",
          body: "Bundle gift cards and branded vouchers into loyalty schemes, seasonal promotions, or corporate gifting. Digital gifting is one of the fastest-growing retail categories — and your business can capitalise on it today.",
          img: "/assets/attached/image_1771511729836.png",
          alt: "Gift card loyalty programme retail",
          reverse: false,
        },
      ].map((section, si) => (
        <section key={si} className={`py-24 ${si % 2 === 0 ? "bg-background" : "bg-white"}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {section.reverse ? (
                <>
                  <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
                    <img src={section.img} alt={section.alt} className="rounded-3xl w-full aspect-[4/3] object-cover" />
                  </motion.div>
                  <motion.div {...fadeUp}>
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">{section.tag}</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6">{section.title}</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">{section.body}</p>
                    {section.items && (
                      <div className="space-y-4">
                        {section.items.map((item, i) => (
                          <div key={i} className="flex gap-4">
                            <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                            <div>
                              <h3 className="font-display font-bold mb-1">{item.title}</h3>
                              <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div {...fadeUp}>
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">{section.tag}</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6">{section.title}</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">{section.body}</p>
                  </motion.div>
                  <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
                    <img src={section.img} alt={section.alt} className="rounded-3xl w-full aspect-[4/3] object-cover" />
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Partners &amp; Products</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">
              A complete digital product catalogue for retail
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Access thousands of digital products through a single integration.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Smartphone, title: "Mobile Airtime & Data", desc: "Top-up any network in 170+ countries for your customers in real time." },
              { icon: ScanLine, title: "eSIMs", desc: "Sell travel and international eSIMs over the counter or online." },
              { icon: Gift, title: "Gift Cards & Vouchers", desc: "Hundreds of branded gift cards for gaming, retail, entertainment, and more." },
              { icon: CreditCard, title: "Utility & Bill Payments", desc: "Prepaid electricity, water, and bill payment vouchers for your community." },
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

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            See how NuovoConnect helps retail merchants grow revenue
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
