import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, AlertTriangle, Lightbulb, Target } from 'lucide-react';

const examples = [
  {
    title: 'Storm Damage Roofing Page',
    problem: 'Visitors don\'t know where to start after a storm. Generic homepages lose them.',
    idea: 'A focused inspection page with trust signals, local service area maps, FAQs, and a clear request form.',
    cta: 'Request an inspection',
    bestFor: 'Roofing, siding, windows, exterior repair'
  },
  {
    title: 'Spring Cleanup Landscaping Page',
    problem: 'Seasonal traffic searching for "mulch delivery" has no specific place to land.',
    idea: 'A seasonal service page capturing spring cleanup, mulch, trimming, and yard refresh work in one neat package.',
    cta: 'Request a spring quote',
    bestFor: 'Landscaping, lawn care, hardscaping'
  },
  {
    title: 'First Visit Med Spa Page',
    problem: 'First-time visitors feel uncertain, intimidated, or confused about what to expect.',
    idea: 'A polished consultation page making first-time customers feel informed, safe, and comfortable booking.',
    cta: 'Book a consultation',
    bestFor: 'Med spas, aesthetics, wellness studios'
  }
];

export function ExampleRefreshes() {
  return (
    <section id="examples" className="py-20 md:py-32 bg-secondary/30 border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Example refresh concepts</h2>
            <p className="text-lg text-muted-foreground">
              These are concept examples of how to focus a page to capture more leads.
            </p>
          </div>
          <div className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1.5 rounded-md inline-block uppercase tracking-wider self-start md:self-end border border-amber-200">
            Concept Examples • Not real clients
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {examples.map((ex, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:border-primary/30 transition-colors shadow-sm bg-card overflow-hidden">
                <div className="bg-muted px-6 py-4 border-b border-border/50">
                  <h3 className="font-bold text-lg font-display">{ex.title}</h3>
                </div>
                <CardContent className="p-6 space-y-6">
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-destructive">
                      <AlertTriangle size={16} />
                      <h4 className="text-sm font-semibold uppercase tracking-wider">The Problem</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{ex.problem}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      <Lightbulb size={16} />
                      <h4 className="text-sm font-semibold uppercase tracking-wider">Page Idea</h4>
                    </div>
                    <p className="text-sm text-foreground font-medium leading-relaxed">{ex.idea}</p>
                  </div>

                  <div className="bg-secondary/50 rounded-lg p-4 mt-auto">
                    <div className="flex flex-col gap-3">
                      <div>
                        <span className="text-xs text-muted-foreground block mb-1">Primary CTA:</span>
                        <div className="bg-background border border-border text-sm font-semibold py-2 px-3 rounded-md flex items-center justify-between">
                          {ex.cta} <ArrowRight size={14} className="text-primary" />
                        </div>
                      </div>
                      <div className="flex items-start gap-2 pt-2 border-t border-border/50">
                        <Target size={14} className="text-muted-foreground mt-0.5" />
                        <span className="text-xs text-muted-foreground"><strong>Best for:</strong> {ex.bestFor}</span>
                      </div>
                    </div>
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
