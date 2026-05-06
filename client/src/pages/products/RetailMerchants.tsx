import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowRight, CheckCircle2, Globe2, Smartphone,
  Gift, ScanLine, Zap, Users, Check, ArrowLeft, CheckCheck, Lock
} from "lucide-react";
import retailHeroImg from "@/assets/images/retail-merchant-hero.png";
import { SEO } from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const TOTAL_STEPS = 6;

const SALES_CHANNELS = [
  "Face to Face",
  "Mail or Telephone",
  "Online",
];

const REASONS = [
  "Want to reduce the fees",
  "Had a price increase",
  "Dissatisfied with the provider",
  "Provider closed the account",
];

const MONTHLY_SPENDS = [
  "$2K – $10K", "$10K – $25K",
  "$25K – $50K", "$50K – $250K",
  "$250K – $1M", "Over $1M",
];

const SUPPLIERS = [
  "No current supplier",
  "Comviva",
  "DITO",
  "Ding",
  "Ezetop",
  "Pareteum",
  "Other",
];

type Step = 1 | 2 | 3 | 4 | 5 | 6 | "success";

function RadioOption({
  label, selected, onClick, testId,
}: { label: string; selected: boolean; onClick: () => void; testId?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-testid={testId}
      className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg border text-sm font-medium transition-all text-left ${
        selected
          ? "border-primary bg-primary/5 text-primary"
          : "border-border text-foreground hover:border-primary/40"
      }`}
    >
      <span className={`w-4 h-4 flex-shrink-0 rounded-full border-2 flex items-center justify-center transition-colors ${
        selected ? "border-primary" : "border-muted-foreground/40"
      }`}>
        {selected && <span className="w-2 h-2 rounded-full bg-primary" />}
      </span>
      {label}
    </button>
  );
}

function CheckboxOption({
  label, checked, onClick, testId,
}: { label: string; checked: boolean; onClick: () => void; testId?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-testid={testId}
      className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg border text-sm font-medium transition-all text-left ${
        checked
          ? "border-primary bg-primary/5 text-primary"
          : "border-border text-foreground hover:border-primary/40"
      }`}
    >
      <span className={`w-4 h-4 flex-shrink-0 rounded border flex items-center justify-center transition-colors ${
        checked ? "bg-primary border-primary" : "border-muted-foreground/40"
      }`}>
        {checked && <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />}
      </span>
      {label}
    </button>
  );
}

export default function RetailMerchants() {
  const [step, setStep] = useState<Step>(1);
  const [currentlySells, setCurrentlySells] = useState("");
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
  const [reason, setReason] = useState("");
  const [monthlySpend, setMonthlySpend] = useState("");
  const [supplier, setSupplier] = useState("");
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", company: "", country: "", email: "", phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPending, setIsPending] = useState(false);

  const stepNum = step === "success" ? TOTAL_STEPS : (step as number);

  function goBack() {
    if (typeof step === "number" && step > 1) setStep((step - 1) as Step);
  }

  function toggleChannel(p: string) {
    setSelectedChannels(prev =>
      prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
    );
  }

  function validateFinal() {
    const e: Record<string, string> = {};
    if (!formData.firstName.trim()) e.firstName = "Required";
    if (!formData.lastName.trim()) e.lastName = "Required";
    if (!formData.company.trim()) e.company = "Required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) e.email = "Valid email required";
    if (!formData.phone.trim()) e.phone = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit() {
    if (!validateFinal()) return;
    setIsPending(true);
    try {
      const message = [
        `Currently sells digital products: ${currentlySells || "Not specified"}`,
        `Sales channels: ${selectedChannels.length ? selectedChannels.join(", ") : "Not specified"}`,
        `Reason: ${reason || "Not specified"}`,
        `Monthly spend: ${monthlySpend || "Not specified"}`,
        `Current supplier: ${supplier || "Not specified"}`,
        `Country: ${formData.country}`,
        `Phone: ${formData.phone}`,
        `Source: Retail Merchants lead form`,
      ].join("\n");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          company: formData.company,
          message,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStep("success");
    } catch {
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setIsPending(false);
    }
  }

  const headerText = step === 6
    ? "Final step. Please fill in your details below so we can get to work securing the best bespoke rates for your business from our network of 90% of the UK's leading card payment processors. Your details will not be shared."
    : "Complete this short form and get the most competitive quotes from the Middle East's card processing providers";

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Retail Merchants"
        description="Help your retail merchants grow basket size and footfall with digital airtime, data bundles, gift cards, and prepaid vouchers across 170+ countries."
        path="/who-we-serve/retail-merchants"
      />
      <Navigation />

      {/* ── HERO: two-column with multi-step lead form ── */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT */}
            <motion.div {...fadeUp}>
              <p className="text-sm text-foreground/60 mb-4">Payment Processing Quotes</p>
              <h1
                className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold leading-[1.1] text-foreground mb-8"
                data-testid="text-retail-title"
              >
                Compare preferential card processing fees from multiple trusted payment processors
              </h1>
              <ul className="space-y-5">
                {[
                  "Receive preferential rates from trusted payment processors",
                  "Compare multiple merchant service providers from a single source",
                  "Back up support throughout the agreement with the provider you choose",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-foreground/80 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* RIGHT — form card */}
            <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="max-w-[85%] mx-auto w-full">
              <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(13,27,75,0.12)] bg-white">

                {/* Dark header */}
                <div className="bg-[#0D1B4B] px-6 py-4 text-center">
                  <p className="text-white/90 text-sm leading-snug">
                    {headerText}
                  </p>
                </div>

                {/* Form body */}
                <div className="px-5 py-5 flex flex-col min-h-[340px]">
                  <AnimatePresence mode="wait">

                    {/* ── Step 1: Currently sell? ── */}
                    {step === 1 && (
                      <motion.div
                        key="s1"
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.22 }}
                        className="flex flex-col flex-1 gap-4"
                      >
                        <p className="text-center text-sm font-semibold text-foreground mb-2">
                          Do you currently take card payments?
                        </p>
                        <div className="space-y-2">
                          {["Yes", "No"].map(opt => (
                            <RadioOption
                              key={opt} label={opt}
                              selected={currentlySells === opt}
                              onClick={() => setCurrentlySells(opt)}
                              testId={`radio-currently-${opt.toLowerCase()}`}
                            />
                          ))}
                        </div>
                        <Button
                          className="mt-3 w-full rounded-lg btn-gradient"
                          data-testid="button-step1-continue"
                          onClick={() => currentlySells && setStep(2)}
                          disabled={!currentlySells}
                        >
                          Get Bespoke Quotes <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <p className="flex items-start gap-2 text-xs text-muted-foreground mt-2">
                          <Lock className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          You'll only deal with us. We are not a lead generation company. No multiple sales agents. No call centres. No referring your details.
                        </p>
                      </motion.div>
                    )}

                    {/* ── Step 2: Products ── */}
                    {step === 2 && (
                      <motion.div
                        key="s2"
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.22 }}
                        className="flex flex-col flex-1"
                      >
                        <p className="text-center text-sm font-semibold text-foreground mb-2">
                          How do you want to take card payments?
                        </p>
                        <div className="space-y-1.5 flex-1">
                          {SALES_CHANNELS.map(p => (
                            <CheckboxOption
                              key={p} label={p}
                              checked={selectedChannels.includes(p)}
                              onClick={() => toggleChannel(p)}
                              testId={`checkbox-${p.replace(/\s+/g, "-").toLowerCase()}`}
                            />
                          ))}
                        </div>
                        <Button
                          className="mt-3 w-full rounded-lg btn-gradient"
                          data-testid="button-step2-continue"
                          onClick={() => setStep(3)}
                        >
                          Continue <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </motion.div>
                    )}

                    {/* ── Step 3: Reason ── */}
                    {step === 3 && (
                      <motion.div
                        key="s3"
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.22 }}
                        className="flex flex-col flex-1"
                      >
                        <p className="text-center text-sm font-semibold text-foreground mb-2">
                          What's the main reason you want to switch providers?
                        </p>
                        <div className="space-y-1.5 flex-1">
                          {REASONS.map(r => (
                            <RadioOption
                              key={r} label={r}
                              selected={reason === r}
                              onClick={() => setReason(r)}
                              testId={`radio-reason-${r.replace(/\s+/g, "-").toLowerCase()}`}
                            />
                          ))}
                        </div>
                        <Button
                          className="mt-3 w-full rounded-lg btn-gradient"
                          data-testid="button-step3-continue"
                          onClick={() => reason && setStep(4)}
                          disabled={!reason}
                        >
                          Continue <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </motion.div>
                    )}

                    {/* ── Step 4: Monthly spend ── */}
                    {step === 4 && (
                      <motion.div
                        key="s4"
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.22 }}
                        className="flex flex-col flex-1"
                      >
                        <p className="text-center text-sm font-semibold text-foreground mb-2">
                          How much do you typically process by card{" "}
                          <strong>per month</strong>?
                        </p>
                        <div className="grid grid-cols-2 gap-1.5 flex-1">
                          {MONTHLY_SPENDS.map(s => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => setMonthlySpend(s)}
                              data-testid={`radio-spend-${s.replace(/[\s$–]/g, "-").toLowerCase()}`}
                              className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border text-sm font-medium transition-all text-left ${
                                monthlySpend === s
                                  ? "border-primary bg-primary/5 text-primary"
                                  : "border-border text-foreground hover:border-primary/40"
                              }`}
                            >
                              <span className={`w-4 h-4 flex-shrink-0 rounded-full border-2 flex items-center justify-center ${
                                monthlySpend === s ? "border-primary" : "border-muted-foreground/40"
                              }`}>
                                {monthlySpend === s && <span className="w-2 h-2 rounded-full bg-primary" />}
                              </span>
                              {s}
                            </button>
                          ))}
                        </div>
                        <Button
                          className="mt-3 w-full rounded-lg btn-gradient"
                          data-testid="button-step4-continue"
                          onClick={() => monthlySpend && setStep(5)}
                          disabled={!monthlySpend}
                        >
                          Continue <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </motion.div>
                    )}

                    {/* ── Step 5: Current supplier ── */}
                    {step === 5 && (
                      <motion.div
                        key="s5"
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.22 }}
                        className="flex flex-col flex-1"
                      >
                        <p className="text-sm font-semibold text-foreground mb-2">
                          Who is your current provider?
                        </p>
                        <Input
                          data-testid="input-supplier"
                          value={supplier}
                          onChange={e => setSupplier(e.target.value)}
                          placeholder="Please select an option"
                          className="h-10 text-sm"
                        />

                        <div className="mt-4 border border-dashed border-border rounded-lg p-4 text-center">
                          <p className="text-xs font-semibold text-foreground mb-1">
                            Recent Card Processing Statement (Optional)
                          </p>
                          <label
                            htmlFor="statement-upload"
                            className="cursor-pointer block mt-1.5"
                          >
                            <span className="text-sm font-semibold text-primary">
                              Click here to upload your statement
                            </span>
                            <span className="block text-xs text-muted-foreground mt-0.5">
                              Accepts png, jpeg, pdf
                            </span>
                            <input
                              id="statement-upload"
                              type="file"
                              accept=".png,.jpg,.jpeg,.pdf"
                              className="hidden"
                              data-testid="input-statement-upload"
                            />
                          </label>
                        </div>
                        <p className="text-xs text-muted-foreground text-center mt-2">
                          Uploading a card statement is optional at this stage but it will enable us to get you accurate quotes much quicker.
                        </p>

                        <Button
                          className="mt-3 w-full rounded-lg btn-gradient"
                          data-testid="button-step5-continue"
                          onClick={() => setStep(6)}
                        >
                          Continue <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </motion.div>
                    )}

                    {/* ── Step 6: Contact details ── */}
                    {step === 6 && (
                      <motion.div
                        key="s6"
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.22 }}
                        className="flex flex-col flex-1"
                      >
                        <div className="grid grid-cols-2 gap-2.5">
                          {([
                            { key: "firstName", placeholder: "First name", testId: "input-first-name" },
                            { key: "lastName", placeholder: "Last name", testId: "input-last-name" },
                            { key: "company", placeholder: "Company Name", testId: "input-company" },
                            { key: "country", placeholder: "Country", testId: "input-country" },
                          ] as const).map(f => (
                            <div key={f.key}>
                              <Input
                                placeholder={f.placeholder}
                                data-testid={f.testId}
                                value={formData[f.key]}
                                onChange={e => {
                                  setFormData(prev => ({ ...prev, [f.key]: e.target.value }));
                                  if (errors[f.key]) setErrors(prev => ({ ...prev, [f.key]: "" }));
                                }}
                                className={`h-10 text-sm ${errors[f.key] ? "border-destructive" : ""}`}
                              />
                              {errors[f.key] && (
                                <p className="text-xs text-destructive mt-0.5">{errors[f.key]}</p>
                              )}
                            </div>
                          ))}
                        </div>

                        <div className="mt-2.5 space-y-2.5">
                          <div>
                            <Input
                              type="email"
                              placeholder="Email"
                              data-testid="input-email"
                              value={formData.email}
                              onChange={e => {
                                setFormData(prev => ({ ...prev, email: e.target.value }));
                                if (errors.email) setErrors(prev => ({ ...prev, email: "" }));
                              }}
                              className={`h-10 text-sm ${errors.email ? "border-destructive" : ""}`}
                            />
                            <p className="text-xs text-muted-foreground mt-0.5">Where you'd like the bespoke quotes to be sent.</p>
                            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                          </div>
                          <div>
                            <Input
                              type="tel"
                              placeholder="Phone"
                              data-testid="input-phone"
                              value={formData.phone}
                              onChange={e => {
                                setFormData(prev => ({ ...prev, phone: e.target.value }));
                                if (errors.phone) setErrors(prev => ({ ...prev, phone: "" }));
                              }}
                              className={`h-10 text-sm ${errors.phone ? "border-destructive" : ""}`}
                            />
                            <p className="text-xs text-muted-foreground mt-0.5">Your contact details will not be shared. You will only be called by one of our payment experts to confirm your requirements, answer any questions you have and give indicative rates before quotes are emailed.</p>
                            {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                          </div>
                        </div>

                        {errors.submit && (
                          <p className="text-xs text-destructive mt-2">{errors.submit}</p>
                        )}

                        <Button
                          className="mt-4 w-full rounded-lg btn-gradient"
                          data-testid="button-submit"
                          onClick={handleSubmit}
                          disabled={isPending}
                        >
                          {isPending ? "Sending…" : "Get Quotes"} <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </motion.div>
                    )}

                    {/* ── Success ── */}
                    {step === "success" && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center justify-center flex-1 text-center py-6"
                      >
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <CheckCheck className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="font-display font-bold text-lg text-foreground mb-2">
                          You're all set!
                        </h3>
                        <p className="text-sm text-muted-foreground max-w-xs">
                          Our team will reach out within 2 business days with a tailored product proposal.
                        </p>
                      </motion.div>
                    )}

                  </AnimatePresence>

                  {/* Back + progress dots */}
                  {step !== "success" && (
                    <div className="mt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={goBack}
                        data-testid="button-back"
                        className={`flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors ${
                          step === 1 ? "invisible" : ""
                        }`}
                      >
                        <ArrowLeft className="w-3 h-3" /> Back
                      </button>
                      <div className="flex items-center gap-1.5">
                        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                          <span
                            key={i}
                            className={`rounded-full transition-all ${
                              i + 1 === stepNum
                                ? "w-4 h-1.5 bg-primary"
                                : i + 1 < stepNum
                                ? "w-1.5 h-1.5 bg-primary/40"
                                : "w-1.5 h-1.5 bg-border"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── rest of the page unchanged ── */}

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Instant in-store and online fulfilment", desc: "Top-ups, vouchers, and gift cards are delivered to the till — or to a shopper's phone — in real time." },
              { icon: Globe2, title: "One catalogue, 170+ countries", desc: "Stock thousands of high-demand digital products from a global network of telco, utility, and gift card partners." },
              { icon: Users, title: "One connection across every sales channel", desc: "Plug the same catalogue into POS, e-commerce, mobile apps, and loyalty programs — and tailor the experience for each." },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.15 }}>
                <Card className="h-full border-0 shadow-none bg-secondary/60">
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
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              The digital products shoppers actually want at the till
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Stock high-demand prepaid categories alongside your existing range — and give cashiers and shoppers a faster way to add them to the basket.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Smartphone, title: "Mobile Airtime & Data Top-ups", desc: "Sell call and data top-ups for thousands of mobile networks straight from your POS or checkout." },
              { icon: ScanLine, title: "eSIMs", desc: "Add the world's fastest-growing connectivity product to your range with no SIM logistics." },
              { icon: Gift, title: "Branded Vouchers & Gift Cards", desc: "Offer gift cards for groceries, entertainment, and lifestyle brands shoppers already love." },
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Add new revenue streams without adding overheads
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Digital products carry no stock, shrinkage, or supply-chain headaches. Plug in once and start earning margin on top-ups, vouchers, and gift cards across every store and channel from day one.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-display font-bold mb-1">Fast, friction-free at the till</h3>
                    <p className="text-sm text-muted-foreground">Cashiers complete a top-up or voucher sale in seconds — just a number, denomination, and tap.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-display font-bold mb-1">Multiple revenue streams from one contract</h3>
                    <p className="text-sm text-muted-foreground">One integration, one settlement, and a full catalogue of products to cross- and upsell to every shopper.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <img
                src={retailHeroImg}
                alt="Retail merchant serving a shopper at the counter"
                className="rounded-3xl aspect-[4/3] object-cover w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            See how NuovoConnect helps retail merchants grow basket and footfall
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
