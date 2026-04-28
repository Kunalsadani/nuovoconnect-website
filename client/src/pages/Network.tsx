import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe2, MapPin, Signal, Smartphone,
  ArrowRight, Building2, Wifi, Users
} from "lucide-react";
import partnerImg from "@/assets/attached/image_2_1771500258864.png";
import { SEO } from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Network() {
  const regions = [
    { name: "Africa", countries: "50+ countries", operators: "200+ operators" },
    { name: "Asia Pacific", countries: "30+ countries", operators: "400+ operators" },
    { name: "Latin America", countries: "25+ countries", operators: "150+ operators" },
    { name: "Middle East", countries: "15+ countries", operators: "80+ operators" },
    { name: "Europe", countries: "40+ countries", operators: "120+ operators" },
    { name: "North America", countries: "3 countries", operators: "50+ operators" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Network" description="NuovoConnect connects you to a global network of mobile operators, digital service providers, and payment platforms across 170+ countries." path="/network" />
      <Navigation />

      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight" data-testid="text-network-title">
              Your wholesale marketplace for digital products
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We've established a worldwide network of digital products that empowers businesses to transfer digital value instantly to anyone, anywhere, and engage with consumers on a global scale.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8" data-testid="button-network-explore">
                Explore Network <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent -z-10" />
      </section>

      <section className="py-12 border-y border-orange-100 bg-orange-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { value: "650+", label: "Mobile Operators & Billers" },
              { value: "170", label: "Countries" },
              { value: "15k+", label: "Products in Catalogue" },
            ].map((stat, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="p-4">
                <div className="text-3xl font-display font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold">One connection. Multiple products.</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Integrate once and gain access to mobile airtime, data top-ups, eSIMs, branded vouchers, gift cards, and prepaid utility solutions worldwide.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <Card className="border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-orange-50 text-primary flex items-center justify-center">
                        <MapPin size={18} />
                      </div>
                      <h3 className="text-lg font-display font-bold">{region.name}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Coverage</div>
                        <div className="font-semibold">{region.countries}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Partners</div>
                        <div className="font-semibold">{region.operators}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Become a NuovoConnect network partner
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Distribute your products on new platforms with effortless integration. Access untapped markets and audiences to unlock fresh growth opportunities.
              </p>
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8">
                  Become a Partner <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}
              className="rounded-3xl overflow-hidden aspect-square"
            >
              <img src={partnerImg} alt="Network partner onboarding" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Activate and grow your customer base
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
