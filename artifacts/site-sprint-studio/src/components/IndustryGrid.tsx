import { motion } from 'framer-motion';
import { Hammer, Home, Scissors, Trash2, HeartPulse, Dog, Car, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

const industries = [
  { name: 'Roofing & Exteriors', icon: <Hammer className="w-5 h-5" /> },
  { name: 'Home Remodeling', icon: <Home className="w-5 h-5" /> },
  { name: 'Landscaping & Hardscaping', icon: <Scissors className="w-5 h-5" /> },
  { name: 'Junk Removal & Cleanouts', icon: <Trash2 className="w-5 h-5" /> },
  { name: 'Med Spas & Aesthetics', icon: <HeartPulse className="w-5 h-5" /> },
  { name: 'Dog Grooming & Boarding', icon: <Dog className="w-5 h-5" /> },
  { name: 'Auto Repair', icon: <Car className="w-5 h-5" /> },
  { name: 'Cleaning Services', icon: <Sparkles className="w-5 h-5" /> },
  { name: 'Fence & Deck Repair', icon: <ShieldCheck className="w-5 h-5" /> },
  { name: 'Senior Services & Estate', icon: <HeartHandshake className="w-5 h-5" /> },
];

export function IndustryGrid() {
  return (
    <section id="who-its-for" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Built for Bloomington-Normal service businesses.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The best fit is a business that already does good work, already has customers, but has a website that doesn't match the quality of the service.
            </p>
            <div className="w-16 h-1 bg-primary mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border/50 shadow-sm"
              >
                <div className="text-primary flex-shrink-0">
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
