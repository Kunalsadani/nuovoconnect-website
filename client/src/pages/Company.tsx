import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight, MapPin, Globe2, Users,
  Briefcase, Newspaper, Building
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Company() {
  const offices = [
    { city: "Singapore", address: "1 Raffles Place #28-61, One Raffles Place, Tower 2, Singapore 048616", flag: "HQ" },
    { city: "Barcelona", address: "Carrer Roger de Flor 233, Gracia, 08025 Barcelona, Spain", flag: "" },
    { city: "Dubai", address: "DSO-HQ-D302-D303, Dubai Silicon Oasis, Dubai, UAE", flag: "" },
    { city: "Miami", address: "1010 S Federal Hwy, Suite 1400, Hallandale Beach, FL 33009, USA", flag: "" },
  ];

  const leadership = [
    { name: "Peter De Caluwe", role: "Chief Executive Officer" },
    { name: "Grant Manicom", role: "Chief Financial Officer" },
    { name: "Bruno Coindre", role: "Chief Revenue Officer" },
    { name: "Jacques Van Niekerk", role: "Chief Technology Officer" },
    { name: "Wan See McNeill", role: "Head of Human Resources" },
    { name: "Monica Mestanza", role: "General Counsel" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight" data-testid="text-company-title">
              About NuovoConnect
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We power compelling digital incentives and prepaid solutions for enterprises worldwide. Our strategic digital value platform supports businesses at every stage of their growth journey.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent -z-10" />
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6">
                Driving smart fintech solutions across the globe
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                NuovoConnect belongs to a family of pioneering technology companies driving smart fintech solutions worldwide — championing economic inclusion and participation for all, with a particular focus on developing markets.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our strategic digital value platform and prepaid solutions enable businesses to create compelling, relevant, and motivating connections with a reachable audience of 3bn+ people across 170+ countries. We are specialists in emerging markets.
              </p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "2005", label: "Established" },
                  { value: "90+", label: "Team Members" },
                  { value: "170+", label: "Countries" },
                  { value: "3bn+", label: "Consumer Access" },
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-orange-50 rounded-2xl text-center">
                    <div className="text-3xl font-display font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Our Worldwide Offices</h2>
            <p className="text-muted-foreground mt-3">A diverse international company with presence across strategic markets</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-orange-50 text-primary flex items-center justify-center">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold">{office.city}</h3>
                        {office.flag && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{office.flag}</span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{office.address}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Meet Our Leadership Team</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {leadership.map((person, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-100 to-amber-50 mx-auto mb-4 flex items-center justify-center">
                      <Users size={32} className="text-primary/40" />
                    </div>
                    <h3 className="font-display font-bold">{person.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{person.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/contact">
              <Card className="h-full hover:border-primary/30 transition-colors cursor-pointer group">
                <CardContent className="p-8 text-center">
                  <Briefcase className="mx-auto text-primary mb-4" size={32} />
                  <h3 className="font-display font-bold text-lg mb-2">Have a Question?</h3>
                  <span className="text-primary text-sm font-semibold flex items-center justify-center gap-1">
                    Get in Touch <ArrowRight size={14} />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Card className="h-full">
              <CardContent className="p-8 text-center">
                <Newspaper className="mx-auto text-primary mb-4" size={32} />
                <h3 className="font-display font-bold text-lg mb-2">News & Events</h3>
                <span className="text-muted-foreground text-sm">Stay informed with our latest updates</span>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="p-8 text-center">
                <Building className="mx-auto text-primary mb-4" size={32} />
                <h3 className="font-display font-bold text-lg mb-2">Careers</h3>
                <span className="text-muted-foreground text-sm">Join our worldwide team</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
