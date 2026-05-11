import { motion } from 'framer-motion';
import { Hammer, Home, Scissors, Trash2, HeartPulse, Dog, Car, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { scrollTo } from '@/lib/scrollTo';
import { Button } from '@/components/ui/button';

const industries = [
  { name: 'Roofing & Exteriors', icon: <Hammer className="w-4 h-4" /> },
  { name: 'Home Remodeling', icon: <Home className="w-4 h-4" /> },
  { name: 'Landscaping & Hardscaping', icon: <Scissors className="w-4 h-4" /> },
  { name: 'Junk Removal & Cleanouts', icon: <Trash2 className="w-4 h-4" /> },
  { name: 'Med Spas & Aesthetics', icon: <HeartPulse className="w-4 h-4" /> },
  { name: 'Dog Grooming & Boarding', icon: <Dog className="w-4 h-4" /> },
  { name: 'Auto Repair', icon: <Car className="w-4 h-4" /> },
  { name: 'Cleaning Services', icon: <Sparkles className="w-4 h-4" /> },
  { name: 'Fence & Deck Repair', icon: <ShieldCheck className="w-4 h-4" /> },
  { name: 'Senior Services & Estate', icon: <HeartHandshake className="w-4 h-4" /> },
];

export function IndustryGrid() {
  return (
    <section id="who-its-for" className="py-20 md:py-32 bg-secondary/40 border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-5 leading-tight">
              Built for Bloomington-Normal service businesses.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The best fit is a business that already does good work, already has customers, but has a website that doesn't match the quality of the service.
            </p>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              If a potential customer looks you up after getting your name from a neighbor, do they feel confident enough to contact you? That's the question Prairecraft helps you answer with a clear yes.
            </p>
            <Button
              type="button"
              onClick={() => scrollTo('free-teardown')}
              data-testid="button-industry-cta"
            >
              Get a free site review
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="flex items-center gap-3 bg-card p-3.5 rounded-xl border border-border/60 shadow-sm hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="text-primary flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  {industry.icon}
                </div>
                <span className="font-medium text-sm">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
