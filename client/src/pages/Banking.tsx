import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight, Globe2, Code, Shield,
  CreditCard, Send, Building2, Wallet,
  Layers, Banknote, ChevronDown, HelpCircle
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SEO } from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Banking() {
  const services = [
    { icon: CreditCard, title: "Receive Payments", desc: "Collect payments in every major currency with effortless reconciliation." },
    { icon: Send, title: "Dispatch Payments", desc: "Automate worldwide payouts at scale with real-time tracking and reporting." },
    { icon: Building2, title: "Virtual IBANs", desc: "Instantly provision unlimited virtual IBANs for your customers." },
    { icon: Wallet, title: "Business Accounts", desc: "Centralise all your business expenditure in a single platform." },
    { icon: Layers, title: "Pooled Accounts", desc: "Segregate funds to power your day-to-day business operations." },
    { icon: Banknote, title: "Multi-Currency Accounts", desc: "Manage 35 major currencies within one unified account structure." },
  ];

  const faqs = [
    {
      q: "What exactly is BaaS?",
      a: "BaaS (Banking-as-a-Service) is designed to give businesses access to the precise financial services they require, without needing to build them from scratch. Unlike conventional banking products, BaaS services are accessed via API and are integrated directly into a company's customer-facing portal or back-office systems."
    },
    {
      q: "How does Banking-as-a-Service operate?",
      a: "Every BaaS service relies on API calls to exchange messages between a company's internal systems and the BaaS platform. This bidirectional infrastructure enables businesses to construct more sophisticated digital products, services, and data flows by embedding financial services."
    },
    {
      q: "What advantages does Banking-as-a-Service offer?",
      a: "BaaS enables businesses to tackle some of the most challenging operational hurdles they face, particularly around payment reconciliation. Streamlining these processes results in a smoother, more intuitive user experience. It also allows businesses to cultivate deeper, more enduring relationships with their customers by using financial services as new engagement touchpoints."
    },
    {
      q: "How does Embedded Finance differ from BaaS?",
      a: "\"Embedded Finance\" refers to the customer-facing service a business delivers — the account issued in an end user's name, or the unique pay-in details assigned to them. BaaS is the underlying business model that makes this possible. It encompasses the technology, the licensing, and the product development — all delivered through an API — that empowers companies to embed financial services."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Relocation Providers" description="Help relocated individuals stay connected with family through affordable mobile top-ups, data bundles, and digital services across borders." path="/who-we-serve/banking" />
      <Navigation />

      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
              Products
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight" data-testid="text-banking-title">
              Banking-as-a-Service
            </h1>
            <p className="text-2xl text-muted-foreground mb-4 font-display font-medium">
              Banking, made seamless.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Banking-as-a-Service (BaaS) enables you to offer a comprehensive suite of banking and payment capabilities to your customers through a single API.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8" data-testid="button-banking-demo">
                  Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full px-8 border-orange-200 text-orange-700">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent -z-10" />
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Banking-as-a-Service
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                BaaS carries a straightforward promise: Provide accounts, payments, foreign exchange, or any other banking capabilities to your clients — without the need to become a fully licensed bank.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Connect to our developer-friendly API and integrate the services you require into your client-facing portal. A unified experience for your customers is just one integration away.
              </p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-orange-100 to-amber-50 rounded-3xl p-16 flex items-center justify-center aspect-square"
            >
              <Building2 size={160} className="text-primary/20" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Banking-as-a-Service without boundaries
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Layers, title: "Broaden your offering", subtitle: "Unlock New Services, Fast", desc: "Open additional revenue streams and increase brand loyalty with a full spectrum of banking services." },
              { icon: Globe2, title: "Worldwide licensing network", subtitle: "Regulated Wherever You Operate", desc: "Our international reach means we can support your business as you grow and expand into new territories." },
              { icon: Code, title: "The only API you'll ever need", subtitle: "Ready When You Are", desc: "Everything delivered via a single, developer-friendly API integration, regardless of how rapidly you scale." },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.15 }}>
                <Card className="h-full border-border">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                      <item.icon size={28} />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-1">{item.title}</h3>
                    <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">{item.subtitle}</div>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Payments that are swift, secure, and simple to manage
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our rail-agnostic infrastructure grants you access to our full product suite, optimising money management and opening new revenue channels.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((service, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <Card className="h-full border-border hover:border-primary/30 transition-colors group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <service.icon size={22} />
                      </div>
                      <h3 className="text-lg font-display font-bold">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold">FAQ</h2>
              <p className="text-muted-foreground mt-3">Answered by our specialists</p>
            </motion.div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-2xl px-6 overflow-hidden">
                  <AccordionTrigger className="text-left font-display font-bold text-base py-5" data-testid={`button-faq-${i}`}>
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Your new Banking-as-a-Service platform awaits
          </h2>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-8 bg-orange-500 text-white border-orange-500 mt-4">
              Contact Us <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
