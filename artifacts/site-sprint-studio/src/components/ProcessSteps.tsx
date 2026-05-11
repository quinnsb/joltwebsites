import { motion } from 'framer-motion';
import { scrollTo } from '@/lib/scrollTo';

const steps = [
  {
    num: '01',
    title: 'Free Teardown',
    desc: 'I review your current site and identify the biggest missed opportunities in trust, clarity, and mobile flow.',
  },
  {
    num: '02',
    title: 'Rough Direction',
    desc: 'We choose the highest-value path: landing page, homepage refresh, or full website sprint.',
  },
  {
    num: '03',
    title: 'Build Sprint',
    desc: 'I write, design, and build the page or site with a clear, frictionless quote request flow.',
  },
  {
    num: '04',
    title: 'Launch and Grow',
    desc: 'We connect forms, analytics, and optional monthly support so the site keeps getting better.',
  },
];

export function ProcessSteps() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Here's how it works.</h2>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
            No bloated discovery phases. We figure out what needs fixing and fix it.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative">
          <div
            className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-primary-foreground/15 z-0"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative z-10"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-background text-primary flex items-center justify-center font-bold text-lg mb-6 shadow-md border-2 border-primary/30 font-display">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2 font-display">{step.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-[220px]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <button
            type="button"
            onClick={() => scrollTo('free-teardown')}
            className="inline-flex items-center gap-2 bg-primary-foreground text-foreground font-semibold text-sm px-6 py-3 rounded-lg hover:bg-primary-foreground/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/50"
            data-testid="button-process-cta"
          >
            Start with a free teardown
          </button>
        </div>
      </div>
    </section>
  );
}
