import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { useLocation } from 'wouter';
import { scrollTo } from '@/lib/scrollTo';
import { Button } from '@/components/ui/button';

const portfolioItems = [
  {
    industry: 'Roofing & Exteriors',
    title: 'Storm Damage Inspection Page',
    accent: 'border-slate-400',
    headerBg: 'bg-slate-100',
    before: {
      label: 'Before',
      summary: 'Generic homepage with no storm-specific messaging',
      problems: [
        'No mention of storm damage or insurance claims',
        'Phone number buried in the footer',
        'No service area information visible',
        'No photos of real completed jobs',
        'Contact form required 8 fields',
      ],
    },
    after: {
      label: 'After',
      summary: 'Focused inspection landing page built to convert storm traffic',
      improvements: [
        'Above-fold headline targets storm damage specifically',
        'Click-to-call button at the top of every section',
        'Service area map embedded prominently',
        'Before/after project photos with captions',
        'Simple 3-field inspection request form',
      ],
    },
    result: 'Page designed to capture inspection requests immediately after weather events, when homeowners are actively searching.',
  },
  {
    industry: 'Landscaping & Lawn Care',
    title: 'Spring Cleanup Seasonal Page',
    accent: 'border-emerald-400',
    headerBg: 'bg-emerald-50',
    before: {
      label: 'Before',
      summary: 'All-services homepage with no seasonal focus',
      problems: [
        'Listed 12 services on one page with no priority',
        'No seasonal offer or urgency messaging',
        'Pricing section vague — "call for quote"',
        'No customer reviews visible',
        'Mobile layout broke on smaller phones',
      ],
    },
    after: {
      label: 'After',
      summary: 'Spring cleanup page with tight offer and clear next step',
      improvements: [
        'Single service focus: spring cleanup package',
        'Seasonal urgency copy — limited availability messaging',
        'Clear package description with what is included',
        'Three Google review quotes pulled to the page',
        'Mobile-first layout with sticky quote button',
      ],
    },
    result: 'Page built to capture spring traffic from Google, neighborhood groups, and seasonal mailers with one clear offer.',
  },
  {
    industry: 'Med Spa & Aesthetics',
    title: 'First Visit Consultation Page',
    accent: 'border-rose-300',
    headerBg: 'bg-rose-50',
    before: {
      label: 'Before',
      summary: 'Treatment menu page that overwhelmed first-timers',
      problems: [
        'Listed 20+ treatments with no guidance for new patients',
        'No "what to expect at your first visit" content',
        'Booking button linked to a third-party site with no context',
        'Photos felt clinical and cold',
        'No FAQ for common first-timer concerns',
      ],
    },
    after: {
      label: 'After',
      summary: 'Warm, trust-first consultation page for new patients',
      improvements: [
        'Opens with "Is this your first visit?" framing',
        'Step-by-step walkthrough of the consultation process',
        'Friendly staff photo with short personal intro',
        'FAQ section answers the top 5 first-timer questions',
        'Booking form on the page — no redirect needed',
      ],
    },
    result: 'Page designed to reduce first-visit anxiety and convert curious browsers into booked consultations.',
  },
  {
    industry: 'Auto Repair',
    title: 'Oil Change & Maintenance Page',
    accent: 'border-amber-400',
    headerBg: 'bg-amber-50',
    before: {
      label: 'Before',
      summary: 'Homepage that tried to cover every service at once',
      problems: [
        'No clear pricing for routine services',
        'No online scheduling — phone only',
        'Hours and location hard to find on mobile',
        'No reviews or trust signals anywhere',
        'Slow load time on mobile (heavy images)',
      ],
    },
    after: {
      label: 'After',
      summary: 'Simple service page focused on routine maintenance',
      improvements: [
        'Transparent pricing for oil change packages',
        'Embedded online scheduling form',
        'Hours, location, and directions at the top',
        'Five-star review badges from Google',
        'Optimized images and fast mobile load',
      ],
    },
    result: 'Page designed to win the routine maintenance customer who compares 2–3 shops before deciding where to go.',
  },
  {
    industry: 'Junk Removal & Estate Cleanouts',
    title: 'Estate Cleanout Landing Page',
    accent: 'border-stone-400',
    headerBg: 'bg-stone-100',
    before: {
      label: 'Before',
      summary: 'Generic junk removal homepage with no estate focus',
      problems: [
        'No mention of estate or senior cleanout services',
        'Contact form asked for details not relevant to cleanouts',
        'No indication of how pricing works',
        'Sparse copy that didn\'t build trust for a sensitive job',
        'No photos showing the team at work',
      ],
    },
    after: {
      label: 'After',
      summary: 'Empathetic estate cleanout page with clear next steps',
      improvements: [
        'Headline speaks directly to estate and senior situations',
        'Plain-English explanation of how the process works',
        'Transparent pricing approach — free on-site estimates',
        'Reassuring copy for families in difficult situations',
        'Team photos and local trust signals above the fold',
      ],
    },
    result: 'Page built to rank for "estate cleanout Bloomington" and convert families looking for a trustworthy local company.',
  },
  {
    industry: 'Dog Grooming & Boarding',
    title: 'First-Time Booking Page',
    accent: 'border-violet-300',
    headerBg: 'bg-violet-50',
    before: {
      label: 'Before',
      summary: 'Services list with no first-timer guidance',
      problems: [
        'No explanation of what services are right for each breed',
        'Booking was email-only with no response time stated',
        'No photos of the actual grooming space',
        'No cancellation or pricing policy visible',
        'Mobile booking flow was broken',
      ],
    },
    after: {
      label: 'After',
      summary: 'First-timer focused page that answers every question upfront',
      improvements: [
        '"New dog? Here\'s how to book your first visit" framing',
        'Online booking form with service selection',
        'Photos of the grooming space for trust and comfort',
        'Clear pricing table and cancellation policy',
        'Mobile-first layout with sticky book button',
      ],
    },
    result: 'Page designed to convert the cautious first-time pet owner who is comparing 3–4 local groomers before picking one.',
  },
];

export default function Portfolio() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setLocation('/')}
            className="font-display font-bold text-xl tracking-tight cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            data-testid="portfolio-link-logo"
          >
            Prairecraft
          </button>
          <button
            type="button"
            onClick={() => setLocation('/')}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            data-testid="portfolio-link-back"
          >
            <ArrowLeft size={16} />
            Back to main site
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-16 pb-12 md:pt-20 md:pb-16 px-4 md:px-6 border-b border-border/50">
        <div className="container mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1.5 rounded-md uppercase tracking-wider border border-amber-200 mb-6">
            Concept examples &bull; Not real client work
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-5 leading-tight">
            Before and after refresh concepts.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            These are concept examples showing the kinds of problems Prairecraft identifies and the page improvements that fix them. Each one is built around a real situation that local service businesses face.
          </p>
        </div>
      </section>

      {/* Portfolio Items */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl space-y-16">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`rounded-2xl border-2 ${item.accent} overflow-hidden shadow-sm`}
            >
              {/* Card Header */}
              <div className={`${item.headerBg} px-6 py-5 border-b border-border/50`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">{item.industry}</p>
                    <h2 className="text-xl font-display font-bold">{item.title}</h2>
                  </div>
                  <span className="text-xs bg-white/80 border border-border text-muted-foreground font-semibold px-3 py-1 rounded-full self-start sm:self-center">
                    Concept Example
                  </span>
                </div>
              </div>

              {/* Before / After Grid */}
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                {/* Before */}
                <div className="p-6 bg-red-50/40">
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle size={16} className="text-destructive shrink-0" />
                    <h3 className="font-bold text-sm uppercase tracking-wider text-destructive">Before</h3>
                  </div>
                  <p className="text-sm font-medium text-foreground mb-4 italic">{item.before.summary}</p>
                  <ul className="space-y-2.5">
                    {item.before.problems.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-destructive/60 mt-1.5 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* After */}
                <div className="p-6 bg-green-50/40">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                    <h3 className="font-bold text-sm uppercase tracking-wider text-primary">After</h3>
                  </div>
                  <p className="text-sm font-medium text-foreground mb-4 italic">{item.after.summary}</p>
                  <ul className="space-y-2.5">
                    {item.after.improvements.map((imp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                        {imp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Result */}
              <div className="px-6 py-4 bg-secondary/40 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground font-semibold">Goal:</strong> {item.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-foreground text-primary-foreground">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to see what your site could be doing better?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 leading-relaxed">
            Send over your current site and I'll review it through the lens of trust, clarity, mobile experience, and quote requests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              type="button"
              size="lg"
              className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 text-base h-12"
              onClick={() => { setLocation('/'); setTimeout(() => scrollTo('free-teardown'), 100); }}
              data-testid="portfolio-button-teardown"
            >
              Get a free website teardown
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base h-12"
              onClick={() => setLocation('/')}
              data-testid="portfolio-button-home"
            >
              Back to main site
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-6 border-t border-border">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Prairecraft. All rights reserved.</p>
          <a href="mailto:hello@prairecraft.com" className="hover:text-foreground transition-colors" data-testid="portfolio-link-email">
            hello@prairecraft.com
          </a>
        </div>
      </footer>
    </div>
  );
}
