import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CalendarDays, CheckCircle2, Clock, Mail, Shield } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  businessName: z.string().min(2, 'Business name is required'),
  websiteUrl: z.string().url('Must be a valid URL (e.g., https://example.com)'),
  email: z.string().email('Must be a valid email address'),
  service: z.string().min(2, 'Please tell us what service you want more leads for'),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const contactSchema = z.object({
  contactName: z.string().min(2, 'Name is required'),
  contactBusinessName: z.string().min(2, 'Business name is required'),
  contactEmail: z.string().email('Must be a valid email address'),
  contactMessage: z.string().min(10, 'Please share a little context'),
});

type ContactValues = z.infer<typeof contactSchema>;

export function TeardownForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);
  const [mode, setMode] = useState<'teardown' | 'contact'>('teardown');

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

  const contactForm = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      contactName: '',
      contactBusinessName: '',
      contactEmail: '',
      contactMessage: '',
    },
  });

  function onSubmit(_values: FormValues) {
    // TODO: Connect to a form handler such as Formspree, Resend, Airtable, or similar.
    // Example with Formspree:
    //   fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(_values),
    //   });
    setIsSubmitted(true);
  }

  function onContactSubmit(_values: ContactValues) {
    // TODO: Connect to the same form handler as the teardown request.
    setIsContactSubmitted(true);
  }

  return (
    <section id="free-teardown" className="border-y-2 border-[#17130b] bg-[#17130b] py-16 text-white md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f4cf30] px-3 py-1 text-xs font-bold uppercase text-[#17130b]">
              <CheckCircle2 size={13} />
              Low pressure next step
            </p>
            <h2 className="mb-5 font-display text-3xl font-bold leading-[0.98] md:text-5xl">
              Get a free review of your website.
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-white/65">
              Send me your current site. I'll look at it from the perspective of a customer trying to contact you, then share what's working, what's not, and what to fix first.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#f4cf30]" />
                <p className="text-sm text-white/70">You'll get a practical written review, not a sales deck.</p>
              </div>
              <div className="flex items-start gap-3">
                <Shield size={18} className="mt-0.5 shrink-0 text-[#f4cf30]" />
                <p className="text-sm text-white/70">Useful whether we work together or not.</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-[#f4cf30]" />
                <p className="text-sm text-white/70">Takes 2 minutes to submit. I'll follow up within a few days.</p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.06] p-5">
              <div className="flex items-start gap-3">
                <CalendarDays size={19} className="mt-0.5 shrink-0 text-[#f4cf30]" />
                <div>
                  <h3 className="font-display text-xl font-bold mb-1">Want to talk first?</h3>
                  <p className="mb-3 text-sm leading-relaxed text-white/65">
                    If you are not ready for a teardown and just want to ask a question or talk through fit, send a short note instead.
                  </p>
                  <button
                    type="button"
                    onClick={() => setMode('contact')}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#f4cf30] transition-colors hover:text-white"
                  >
                    Open the contact form
                    <Mail size={15} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border-2 border-[#17130b] bg-[#f7f0df] p-5 text-[#17130b] shadow-[12px_12px_0_#f4cf30] md:p-8"
          >
            <div className="mb-6 grid grid-cols-2 gap-2 rounded-xl border-2 border-[#17130b] bg-[#17130b] p-1">
              <button
                type="button"
                onClick={() => setMode('teardown')}
                className={`rounded-lg px-3 py-2 text-sm font-bold transition-colors ${
                  mode === 'teardown' ? 'bg-[#f4cf30] text-[#17130b]' : 'text-white/70 hover:text-white'
                }`}
              >
                Free teardown
              </button>
              <button
                type="button"
                onClick={() => setMode('contact')}
                className={`rounded-lg px-3 py-2 text-sm font-bold transition-colors ${
                  mode === 'contact' ? 'bg-[#f4cf30] text-[#17130b]' : 'text-white/70 hover:text-white'
                }`}
              >
                Talk first
              </button>
            </div>

            {mode === 'teardown' && isSubmitted ? (
              <div className="text-center py-10">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f4cf30] text-[#17130b]">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-xl font-bold font-display mb-2">Request Received</h3>
                <p className="text-sm leading-relaxed text-[#5f5748]">
                  Thanks. I'll review your site and follow up soon.
                </p>
              </div>
            ) : mode === 'teardown' ? (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
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
                    className="mt-1 h-12 w-full rounded-lg border-2 border-[#17130b] bg-[#f4cf30] text-base font-bold text-[#17130b] shadow-[4px_4px_0_#17130b]"
                    data-testid="button-submit-teardown"
                  >
                    Request my free site review
                  </Button>
                  <p className="text-center text-xs text-[#6d6352]">
                    Takes 2 minutes. No pressure. No giant sales deck.
                  </p>
                </form>
              </Form>
            ) : isContactSubmitted ? (
              <div className="text-center py-10">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f4cf30] text-[#17130b]">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-xl font-bold font-display mb-2">Message Received</h3>
                <p className="text-sm leading-relaxed text-[#5f5748]">
                  Thanks. I'll read this and follow up soon.
                </p>
              </div>
            ) : (
              <Form {...contactForm}>
                <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      control={contactForm.control}
                      name="contactName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Smith" {...field} data-testid="input-contact-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={contactForm.control}
                      name="contactBusinessName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Smith Roofing" {...field} data-testid="input-contact-business-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={contactForm.control}
                    name="contactEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="jane@smithroofing.com" {...field} data-testid="input-contact-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={contactForm.control}
                    name="contactMessage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What would you like to talk about?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="I want to talk through whether Jolt is a fit, timing, packages, or a specific website issue..."
                            className="resize-none"
                            rows={5}
                            {...field}
                            data-testid="input-contact-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="mt-1 h-12 w-full rounded-lg border-2 border-[#17130b] bg-[#f4cf30] text-base font-bold text-[#17130b] shadow-[4px_4px_0_#17130b]"
                    data-testid="button-submit-contact"
                  >
                    Send a note
                  </Button>
                  <p className="text-center text-xs text-[#6d6352]">
                    Good for questions, fit checks, and meeting requests.
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
