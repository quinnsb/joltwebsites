import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Shield, Zap, Search } from 'lucide-react';

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 md:px-6 overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight mb-6">
            Turn your outdated website into a simple sales machine.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
            I help Bloomington-Normal service businesses refresh their websites, clarify their offers, and make it easier for customers to request a quote.
          </p>
          <p className="text-sm text-muted-foreground/80 mb-8 border-l-2 border-primary/30 pl-4 py-1">
            Built for contractors, clinics, landscapers, remodelers, junk removal companies, groomers, auto shops, and local service businesses that need their website to work harder.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button size="lg" className="text-base h-12" onClick={() => scrollTo('free-teardown')} data-testid="button-hero-primary">
              Get a free website teardown
            </Button>
            <Button size="lg" variant="outline" className="text-base h-12" onClick={() => scrollTo('packages')} data-testid="button-hero-secondary">
              View packages
            </Button>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-primary" />
              <span>Local to Bloomington-Normal</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-primary" />
              <span>Fast website sprints</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-primary" />
              <span>No bloated agency process</span>
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
          <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-3 scale-105" />
          <div className="bg-card border border-border shadow-xl rounded-2xl p-6 md:p-8 relative z-10">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Search size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Diagnostic Report</h3>
                  <p className="text-xs text-muted-foreground">Local Service Website</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-destructive">C-</div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Current Score</div>
              </div>
            </div>

            <div className="space-y-5">
              <AuditRow label="Mobile Clarity" status="needs-work" score="Poor" />
              <AuditRow label="Quote Flow" status="critical" score="Broken" />
              <AuditRow label="Local SEO Basics" status="ok" score="Okay" />
              <AuditRow label="Conversion Opportunities" status="needs-work" score="Low" />
              <AuditRow label="Trust Signals" status="critical" score="Missing" />
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="bg-primary/5 rounded-lg p-4">
                <p className="text-sm font-medium text-foreground mb-1">Recommendation:</p>
                <p className="text-sm text-muted-foreground">Core Refresh Sprint to simplify navigation and rebuild the quote request path.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AuditRow({ label, status, score }: { label: string, status: 'ok' | 'needs-work' | 'critical', score: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <div className="flex items-center gap-3">
        <div className="h-1.5 w-24 bg-secondary rounded-full overflow-hidden">
          <div className={`h-full rounded-full ${
            status === 'ok' ? 'w-3/4 bg-primary' : 
            status === 'needs-work' ? 'w-1/2 bg-amber-500' : 'w-1/4 bg-destructive'
          }`} />
        </div>
        <span className={`text-xs font-semibold w-12 text-right ${
          status === 'ok' ? 'text-primary' : 
          status === 'needs-work' ? 'text-amber-600' : 'text-destructive'
        }`}>{score}</span>
      </div>
    </div>
  )
}
