import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Free Teardown',
    desc: 'I review your current site and identify the biggest missed opportunities in trust, clarity, and mobile flow.'
  },
  {
    num: '02',
    title: 'Rough Direction',
    desc: 'We choose the highest-value path: landing page, homepage refresh, or full website sprint.'
  },
  {
    num: '03',
    title: 'Build Sprint',
    desc: 'I write, design, and build the page or site with a clear, frictionless quote/contact flow.'
  },
  {
    num: '04',
    title: 'Launch and Improve',
    desc: 'We connect forms, analytics, and optional monthly support so the site keeps getting better over time.'
  }
];

export function ProcessSteps() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">A simple sprint process.</h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">No bloated discovery phases. We figure out what needs fixing and fix it.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-6 left-12 right-12 h-[1px] bg-primary-foreground/20 z-0"></div>

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
                <div className="w-12 h-12 rounded-full bg-background text-primary flex items-center justify-center font-bold text-lg mb-6 shadow-md border-4 border-primary">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">{step.title}</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-[250px]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
