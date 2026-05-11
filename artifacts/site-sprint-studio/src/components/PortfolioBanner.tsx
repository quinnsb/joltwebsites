import { motion } from 'framer-motion';
import { ArrowRight, Eye } from 'lucide-react';
import { useLocation } from 'wouter';

export function PortfolioBanner() {
  const [, setLocation] = useLocation();

  return (
    <section className="py-6 bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Eye size={18} className="text-primary" />
            </div>
            <p className="text-sm md:text-base font-medium text-foreground">
              See real before &amp; after website transformations
            </p>
          </div>
          <button
            type="button"
            onClick={() => setLocation('/portfolio')}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors shrink-0"
            data-testid="button-portfolio-cta"
          >
            View portfolio
            <ArrowRight size={15} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
