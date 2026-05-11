import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { scrollTo } from '@/lib/scrollTo';

const packages = [
  {
    title: 'Starter Landing Page',
    price: '$750–$1,500',
    period: null,
    tag: 'One-time',
    description: 'Best for testing one service, seasonal offer, or paid ad campaign.',
    features: [
      'One custom landing page',
      'Copy refresh',
      'Mobile-first design',
      'Contact form',
      'Basic SEO setup',
      'Simple analytics',
    ],
    popular: false,
    cta: 'Start with a landing page',
  },
  {
    title: 'Core Website Refresh',
    price: '$3,000',
    period: null,
    tag: 'One-time',
    description: 'Best for businesses whose current site actively loses leads.',
    features: [
      '5-page website',
      'Homepage, Services, About, Contact',
      'One service or location page',
      'Visual polish and layout restructure',
      'Quote/contact flow',
      'SEO basics + Search Console setup',
    ],
    popular: true,
    cta: 'Get a quote',
  },
  {
    title: 'Growth Support',
    price: '$500',
    period: '/month',
    tag: 'Monthly',
    description: 'Best after the site is live and needs consistent improvement.',
    features: [
      'Hosting and support',
      'Monthly site updates',
      'Google Business Profile posts',
      'One new service or SEO page/month',
      'Basic reporting',
      'Light copy/content refresh',
    ],
    popular: false,
    cta: 'Add monthly support',
  },
  {
    title: 'Premium Growth',
    price: '$1,000–$1,500',
    period: '/month',
    tag: 'Monthly',
    description: 'Best for businesses that want ongoing lead generation support.',
    features: [
      'Everything in Growth',
      'Landing page testing',
      'Review generation flow',
      'Quarterly photo/video session',
      'Local SEO buildout',
      'Email or SMS campaign support',
    ],
    popular: false,
    cta: 'Talk about premium',
  },
];

export function PricingCards() {
  return (
    <section id="packages" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Simple packages. Clear scope.</h2>
          <p className="text-lg text-muted-foreground">Transparent pricing for local businesses. No surprises.</p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative flex flex-col"
            >
              <Card
                className={`flex flex-col h-full transition-shadow ${
                  pkg.popular
                    ? 'border-primary border-l-4 shadow-lg ring-1 ring-primary/20'
                    : 'border-border shadow-sm hover:shadow-md'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-4 -translate-y-1/2 bg-primary text-primary-foreground text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <CardHeader className={pkg.popular ? 'pt-7' : ''}>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <CardTitle className="text-lg font-display leading-snug">{pkg.title}</CardTitle>
                    <span className="text-[10px] font-semibold uppercase tracking-wider bg-secondary text-muted-foreground px-2 py-0.5 rounded-full shrink-0 mt-0.5">
                      {pkg.tag}
                    </span>
                  </div>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold font-display">{pkg.price}</span>
                    {pkg.period && (
                      <span className="text-sm font-medium text-muted-foreground">{pkg.period}</span>
                    )}
                  </div>
                  <CardDescription className="mt-2 text-sm text-foreground/75 font-medium leading-snug">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 pt-0">
                  <div className="w-full h-px bg-border mb-4" />
                  <ul className="space-y-2.5 text-sm">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-muted-foreground">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    type="button"
                    className="w-full"
                    variant={pkg.popular ? 'default' : 'outline'}
                    onClick={() => scrollTo('free-teardown')}
                    data-testid={`button-pricing-${i}`}
                  >
                    {pkg.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Not sure which fits? The free teardown will tell you.{' '}
          <button
            type="button"
            onClick={() => scrollTo('free-teardown')}
            className="text-primary font-medium underline underline-offset-2 hover:no-underline"
            data-testid="link-pricing-teardown"
          >
            Request yours
          </button>
        </p>
      </div>
    </section>
  );
}
