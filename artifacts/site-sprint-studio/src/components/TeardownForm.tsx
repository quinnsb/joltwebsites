import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  businessName: z.string().min(2, 'Business name is required'),
  websiteUrl: z.string().url('Must be a valid URL (e.g., https://example.com)'),
  email: z.string().email('Must be a valid email'),
  service: z.string().min(2, 'Please tell us what you want more leads for'),
  message: z.string().optional(),
});

export function TeardownForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Connect to form handler (Formspree, Resend, Airtable, or similar)
    console.log(values);
    setIsSubmitted(true);
  }

  return (
    <section id="free-teardown" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">Want to see what your website could be doing better?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Send over your current site and I'll review it through the lens of trust, clarity, mobile experience, and quote requests. You'll get practical notes whether we work together or not.
            </p>
            <div className="bg-secondary/50 border border-border p-6 rounded-xl">
              <p className="font-medium text-foreground italic">"No pressure. No giant sales deck. Just a practical review of what could be improved."</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border shadow-xl rounded-2xl p-6 md:p-8"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-display mb-2">Request Received</h3>
                <p className="text-muted-foreground">Thanks. I'll review your site and follow up soon.</p>
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
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} data-testid="input-name" />
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
                            <Input placeholder="Acme Services" {...field} data-testid="input-business-name" />
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
                          <Input placeholder="https://..." {...field} data-testid="input-website" />
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
                          <Input placeholder="john@example.com" {...field} data-testid="input-email" />
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
                          <Input placeholder="e.g. Roof repair, spring cleanups..." {...field} data-testid="input-service" />
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
                        <FormLabel>Anything else I should know? (Optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Context about your business..." className="resize-none" rows={3} {...field} data-testid="input-message" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full h-12 text-base mt-2" data-testid="button-submit-teardown">
                    Request my free teardown
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
