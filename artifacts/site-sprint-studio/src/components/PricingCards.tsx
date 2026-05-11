import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const packages = [
  {
    title: 'Starter Landing Page',
    price: '$750–$1,500',
    description: 'Best for testing one service, seasonal offer, or campaign.',
    features: [
      'One custom landing page',
      'Copy refresh',
      'Mobile-friendly design',
      'Contact form',
      'Basic SEO setup',
      'Simple analytics'
    ],
    popular: false,
    recurring: false
  },
  {
    title: 'Core Website Refresh',
    price: '$3,000',
    description: 'Best for businesses that need a cleaner, sharper website.',
    features: [
      '5-page website (Homepage, Services, About, Contact, one service/location page)',
      'Visual polish',
      'Quote/contact flow',
      'Basic SEO setup',
      'Analytics/Search Console setup'
    ],
    popular: true,
    recurring: false
  },
  {
    title: 'Growth Support',
    price: '$500',
    period: '/month',
    description: 'Best after the site is live and needs consistent improvement.',
    features: [
      'Hosting/support',
      'Monthly site updates',
      'Google Business Profile post support',
      'One new service or SEO page per month',
      'Basic reporting',
      'Light copy/content refresh'
    ],
    popular: false,
    recurring: true
  },
  {
    title: 'Premium Growth',
    price: '$1,000–$1,500',
    period: '/month',
    description: 'Best for businesses that want ongoing lead generation support.',
    features: [
      'Everything in Growth',
      'Landing page testing',
      'Review generation flow',
      'Quarterly photo/video content session',
      'Local SEO buildout',
      'Email or SMS campaign support'
    ],
    popular: false,
    recurring: true
  }
];

export function PricingCards() {
  const scrollToTeardown = () => {
    document.getElementById('free-teardown')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="packages" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Simple packages. Clear scope.</h2>
          <p className="text-lg text-muted-foreground">Transparent pricing for local businesses.</p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col"
            >
              <Card className={`flex flex-col h-full ${pkg.popular ? 'border-primary shadow-lg scale-[1.02] md:scale-105 z-10' : 'border-border shadow-sm'}`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 uppercase tracking-wider">
                    <span>⭐</span> Most Popular
                  </div>
                )}
                <CardHeader className={pkg.popular ? 'pt-8' : ''}>
                  <CardTitle className="text-xl font-display">{pkg.title}</CardTitle>
                  <div className="mt-4 flex items-baseline text-3xl font-extrabold">
                    {pkg.price}
                    {pkg.period && <span className="ml-1 text-sm font-medium text-muted-foreground">{pkg.period}</span>}
                  </div>
                  <CardDescription className="mt-2 text-sm text-foreground/80 font-medium">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 text-sm">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    variant={pkg.popular ? "default" : "outline"}
                    onClick={scrollToTeardown}
                    data-testid={`button-pricing-${i}`}
                  >
                    Inquire
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
