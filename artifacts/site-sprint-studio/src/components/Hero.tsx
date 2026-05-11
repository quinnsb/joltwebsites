import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock, Ban, Search } from 'lucide-react';
import { scrollTo } from '@/lib/scrollTo';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 md:px-6 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #1a1a1a 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-primary/20">
            Central Illinois
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.08] tracking-tight mb-6">
            Turn your outdated website into a simple sales machine.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
            Jolt helps service businesses refresh their websites, clarify their offers, and make it easier for customers to request a quote.
          </p>
          <p className="text-sm text-muted-foreground/80 mb-8 border-l-2 border-primary/40 pl-4 py-1 italic">
            Built for contractors, clinics, landscapers, remodelers, junk removal companies, groomers, auto shops, and local service businesses that need their website to work harder.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button
              size="lg"
              className="text-base h-12 shadow-md"
              onClick={() => scrollTo('free-teardown')}
              data-testid="button-hero-primary"
              type="button"
            >
              Get a free website teardown
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base h-12"
              onClick={() => scrollTo('packages')}
              data-testid="button-hero-secondary"
              type="button"
            >
              View packages
            </Button>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-primary" />
              <span>Central Illinois based</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={15} className="text-primary" />
              <span>2–4 week turnaround</span>
            </div>
            <div className="flex items-center gap-2">
              <Ban size={15} className="text-primary" />
              <span>No retainers. No bloat.</span>
            </div>
          </div>
        </motion.div>

        {/* Audit Card Visual */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:ml-auto"
        >
          <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-2 scale-105" aria-hidden="true" />
          <div className="bg-card border border-border shadow-xl rounded-2xl p-6 md:p-8 relative z-10">
            <div className="flex items-center justify-between mb-6 pb-5 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <Search size={17} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground text-sm">Site Diagnostic</h3>
                  <p className="text-xs text-muted-foreground">Local Service Website</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-destructive font-display">C&minus;</div>
                <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">Before Jolt</div>
              </div>
            </div>

            <div className="space-y-4">
              <AuditRow label="Mobile Clarity" status="needs-work" score="Poor" />
              <AuditRow label="Quote Flow" status="critical" score="Broken" />
              <AuditRow label="Local SEO Basics" status="ok" score="Okay" />
              <AuditRow label="Conversion Opportunities" status="needs-work" score="Low" />
              <AuditRow label="Trust Signals" status="critical" score="Missing" />
            </div>

            <div className="mt-6 pt-5 border-t border-border">
              <div className="bg-primary/5 border border-primary/15 rounded-lg p-4">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Recommendation</p>
                <p className="text-sm text-foreground font-medium">Core Refresh Sprint — simplify navigation and rebuild the quote request path.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AuditRow({ label, status, score }: { label: string; status: 'ok' | 'needs-work' | 'critical'; score: string }) {
  const barColor = status === 'ok' ? 'bg-primary' : status === 'needs-work' ? 'bg-amber-500' : 'bg-destructive';
  const barWidth = status === 'ok' ? 'w-3/4' : status === 'needs-work' ? 'w-2/5' : 'w-1/5';
  const textColor = status === 'ok' ? 'text-primary' : status === 'needs-work' ? 'text-amber-600' : 'text-destructive';

  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm font-medium text-foreground flex-1 min-w-0 truncate">{label}</span>
      <div className="flex items-center gap-3 shrink-0">
        <div className="h-1.5 w-20 bg-secondary rounded-full overflow-hidden">
          <div className={`h-full rounded-full ${barColor} ${barWidth}`} />
        </div>
        <span className={`text-xs font-semibold w-14 text-right ${textColor}`}>{score}</span>
      </div>
    </div>
  );
}
