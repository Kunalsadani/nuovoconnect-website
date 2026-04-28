import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useSubmitContact, contactFormSchema } from "@/hooks/use-contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form, FormControl, FormField, FormItem,
  FormLabel, FormMessage
} from "@/components/ui/form";
import { Globe2, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Contact() {
  const submitContact = useSubmitContact();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", company: "", message: "" }
  });

  const onSubmit = (data: any) => {
    submitContact.mutate(data, {
      onSuccess: () => {
        form.reset();
        toast({
          title: "Message delivered!",
          description: "We'll respond to your enquiry as soon as possible."
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Contact Us" description="Get in touch with NuovoConnect to discuss your digital value services, mobile top-ups, and micropayments requirements." path="/contact" />
      <Navigation />

      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6" data-testid="text-contact-title">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Complete the form below and our team will respond promptly.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent -z-10" />
      </section>

      <section className="pb-24 -mt-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-2xl shadow-orange-900/10 overflow-hidden">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 p-10 text-white flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-4 text-white">Reach out to us</h3>
                    <p className="text-white/80 mb-8 text-sm leading-relaxed">
                      Looking to scale your digital value offerings? Our specialists are here to help you integrate and grow.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Globe2 size={14} />
                      </div>
                      Global HQ: Dubai, UAE
                    </div>
                  </div>
                </div>

                <div className="md:col-span-3 p-10 bg-white">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700">Full Name</FormLabel>
                              <FormControl>
                                <Input data-testid="input-name" placeholder="John Doe" className="bg-gray-50 border-gray-200" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700">Work Email</FormLabel>
                              <FormControl>
                                <Input data-testid="input-email" placeholder="john@company.com" className="bg-gray-50 border-gray-200" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">Company Name</FormLabel>
                            <FormControl>
                              <Input data-testid="input-company" placeholder="Acme Inc." className="bg-gray-50 border-gray-200" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">How can we assist?</FormLabel>
                            <FormControl>
                              <Textarea
                                data-testid="input-message"
                                placeholder="Tell us about your project requirements..."
                                className="min-h-[120px] bg-gray-50 border-gray-200 resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        data-testid="button-submit-contact"
                        disabled={submitContact.isPending}
                        className="w-full h-12 text-base font-semibold"
                      >
                        {submitContact.isPending ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
