import { motion } from 'framer-motion';
import { Search, Route, Hammer, Rocket } from 'lucide-react';
import { scrollTo } from '@/lib/scrollTo';

const steps = [
  {
    num: '01',
    icon: <Search className="h-7 w-7" />,
    title: 'Free Teardown',
    desc: 'I review your current site and identify the biggest missed opportunities in trust, clarity, and mobile flow.',
    color: 'bg-amber-500/15 text-amber-600 border-amber-500/20',
    accent: 'from-amber-500/10 to-transparent',
  },
  {
    num: '02',
    icon: <Route className="h-7 w-7" />,
    title: 'Rough Direction',
    desc: 'We choose the highest-value path: landing page, homepage refresh, or full website sprint.',
    color: 'bg-blue-500/15 text-blue-600 border-blue-500/20',
    accent: 'from-blue-500/10 to-transparent',
  },
  {
    num: '03',
    icon: <Hammer className="h-7 w-7" />,
    title: 'Build Sprint',
    desc: 'I write, design, and build the page or site with a clear, frictionless quote request flow.',
    color: 'bg-violet-500/15 text-violet-600 border-violet-500/20',
    accent: 'from-violet-500/10 to-transparent',
  },
  {
    num: '04',
    icon: <Rocket className="h-7 w-7" />,
    title: 'Launch & Grow',
    desc: 'We connect forms, analytics, and optional monthly support so the site keeps getting better.',
    color: 'bg-emerald-500/15 text-emerald-600 border-emerald-500/20',
    accent: 'from-emerald-500/10 to-transparent',
  },
];

export function ProcessSteps() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Here's how it works.</h2>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
            No bloated discovery phases. We figure out what needs fixing and fix it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div
            className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px z-0"
            aria-hidden="true"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 8px, transparent 8px, transparent 16px)',
            }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative z-10"
            >
              <div className="bg-primary-foreground/[0.06] border border-primary-foreground/10 rounded-2xl p-6 h-full flex flex-col items-center text-center hover:bg-primary-foreground/[0.09] transition-colors">
                <div className={`w-14 h-14 rounded-xl ${step.color} border flex items-center justify-center mb-5`}>
                  {step.icon}
                </div>

                <span className="text-xs font-bold tracking-widest uppercase text-primary-foreground/40 mb-2 font-display">
                  Step {step.num}
                </span>

                <h3 className="text-lg font-bold mb-3 font-display">{step.title}</h3>

                <p className="text-primary-foreground/60 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center mt-14"
        >
          <button
            type="button"
            onClick={() => scrollTo('free-teardown')}
            className="inline-flex items-center gap-2 bg-primary-foreground text-foreground font-semibold text-sm px-6 py-3 rounded-lg hover:bg-primary-foreground/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/50"
            data-testid="button-process-cta"
          >
            Start with a free teardown
          </button>
        </motion.div>
      </div>
    </section>
  );
}
