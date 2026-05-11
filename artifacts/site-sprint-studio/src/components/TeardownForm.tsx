import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2, Clock, Shield } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  businessName: z.string().min(2, 'Business name is required'),
  websiteUrl: z.string().url('Must be a valid URL (e.g., https://example.com)'),
  email: z.string().email('Must be a valid email address'),
  service: z.string().min(2, 'Please tell us what service you want more leads for'),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function TeardownForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      businessName: '',
      websiteUrl: '',
      email: '',
      service: '',
      message: '',
    },
  });

  function onSubmit(_values: FormValues) {
    // TODO: Connect to a form handler — Formspree, Resend, Airtable, or similar.
    // Example with Formspree:
    //   fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(_values),
    //   });
    setIsSubmitted(true);
  }

  return (
    <section id="free-teardown" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-5 leading-tight">
              Get a free review of your website.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Send me your current site. I'll look at it from the perspective of a customer trying to contact you — and share what's working, what's not, and what to fix first.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">You'll get a practical written review, not a sales deck.</p>
              </div>
              <div className="flex items-start gap-3">
                <Shield size={18} className="text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">Useful whether we work together or not.</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">Takes 2 minutes to submit. I'll follow up within a few days.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-card border-l-4 border-l-primary border border-border shadow-lg rounded-2xl p-6 md:p-8"
          >
            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-xl font-bold font-display mb-2">Request Received</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Thanks. I'll review your site and follow up soon.
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Smith" {...field} data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="businessName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Smith Roofing" {...field} data-testid="input-business-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="websiteUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Website URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://yoursite.com" {...field} data-testid="input-website" />
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
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="jane@smithroofing.com" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What service do you want more leads for?</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Roof repair, spring cleanups, HVAC installs..." {...field} data-testid="input-service" />
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
                        <FormLabel>Anything else? (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Context about your business, biggest frustrations, goals..."
                            className="resize-none"
                            rows={3}
                            {...field}
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full h-12 text-base mt-1"
                    data-testid="button-submit-teardown"
                  >
                    Request my free site review
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Takes 2 minutes. No pressure. No giant sales deck.
                  </p>
                </form>
              </Form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
