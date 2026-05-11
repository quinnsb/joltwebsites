import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, AlertTriangle, Lightbulb, Target } from 'lucide-react';
import { useLocation } from 'wouter';

const examples = [
  {
    title: 'Storm Damage Roofing Page',
    accent: 'bg-slate-100 border-slate-300',
    problem: "Visitors land on a generic homepage after a storm. They can't tell if you serve their area, how to get an inspection, or whether you're trustworthy.",
    idea: 'A focused inspection page with social proof, service area map, common FAQs, and a single clear request form.',
    cta: 'Request an inspection',
    bestFor: 'Roofing, siding, windows, exterior repair',
  },
  {
    title: 'Spring Cleanup Landscaping Page',
    accent: 'bg-emerald-50 border-emerald-200',
    problem: 'Seasonal search traffic has nowhere to land. The homepage lists every service but doesn\'t capture the spring rush.',
    idea: 'A seasonal page capturing spring cleanup, mulch delivery, trimming, and yard refresh in one tight package with a quick quote form.',
    cta: 'Request a spring quote',
    bestFor: 'Landscaping, lawn care, hardscaping',
  },
  {
    title: 'First Visit Med Spa Page',
    accent: 'bg-rose-50 border-rose-200',
    problem: 'First-time visitors feel uncertain or intimidated. Existing pages lead with a menu of treatments rather than building trust.',
    idea: "A warm consultation page that explains what to expect, answers common first-timer questions, and makes booking feel like the obvious next step.",
    cta: 'Book a consultation',
    bestFor: 'Med spas, aesthetics, wellness studios',
  },
];

export function ExampleRefreshes() {
  const [, setLocation] = useLocation();

  return (
    <section id="examples" className="py-20 md:py-32 bg-secondary/30 border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Example refresh concepts</h2>
            <p className="text-lg text-muted-foreground">
              Real problems local businesses face, and the focused pages that fix them.
            </p>
          </div>
          <div className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1.5 rounded-md inline-block uppercase tracking-wider self-start md:self-end border border-amber-200 shrink-0">
            Concepts only &bull; Not real clients
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-7">
          {examples.map((ex, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border border-border/60 hover:border-primary/30 hover:shadow-md transition-all shadow-sm bg-card overflow-hidden flex flex-col">
                <div className={`px-6 py-4 border-b ${ex.accent}`}>
                  <h3 className="font-bold text-base font-display">{ex.title}</h3>
                </div>
                <CardContent className="p-6 space-y-5 flex-1 flex flex-col">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 text-destructive">
                      <AlertTriangle size={14} />
                      <h4 className="text-xs font-bold uppercase tracking-wider">The Problem</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{ex.problem}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1.5 text-primary">
                      <Lightbulb size={14} />
                      <h4 className="text-xs font-bold uppercase tracking-wider">Page Idea</h4>
                    </div>
                    <p className="text-sm text-foreground font-medium leading-relaxed">{ex.idea}</p>
                  </div>

                  <div className="bg-secondary/60 rounded-lg p-4 mt-auto">
                    <div className="flex flex-col gap-3">
                      <div>
                        <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider block mb-1.5">Primary CTA</span>
                        <div className="bg-background border border-border text-sm font-semibold py-2 px-3 rounded-md flex items-center justify-between">
                          {ex.cta}
                          <ArrowRight size={14} className="text-primary shrink-0 ml-2" />
                        </div>
                      </div>
                      <div className="flex items-start gap-2 pt-2 border-t border-border/50">
                        <Target size={13} className="text-muted-foreground mt-0.5 shrink-0" />
                        <span className="text-xs text-muted-foreground">
                          <strong>Best for:</strong> {ex.bestFor}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setLocation('/portfolio')}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary underline underline-offset-2 hover:no-underline"
            data-testid="link-view-portfolio"
          >
            See before/after portfolio examples
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
