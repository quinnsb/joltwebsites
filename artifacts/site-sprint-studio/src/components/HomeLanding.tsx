import { useEffect } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  FileSearch,
  Gauge,
  Hammer,
  MapPin,
  MessageSquareText,
  MousePointerClick,
  PhoneCall,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Wrench,
  Zap,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { TeardownForm } from '@/components/TeardownForm';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { scrollTo } from '@/lib/scrollTo';

const chips = ['Central Illinois based', '2-4 week turnaround', 'No retainers. No bloat.'];

const painPoints = [
  {
    title: 'Looks broken on phones',
    copy: "If the page fights the visitor's thumb, the quote request usually never happens.",
    icon: Smartphone,
  },
  {
    title: "Visitors can't tell what you do",
    copy: 'Vague homepages make good customers work too hard before they ever call.',
    icon: FileSearch,
  },
  {
    title: 'Customers give up before contacting you',
    copy: 'Buried phone numbers, long forms, and weak CTAs quietly leak the best leads.',
    icon: MousePointerClick,
  },
  {
    title: 'Nothing builds trust',
    copy: 'Thin copy, stock photos, and missing proof make a good business feel risky.',
    icon: ShieldCheck,
  },
  {
    title: "It's about you, not them",
    copy: 'Customers need to see their problem, your service, and the next step first.',
    icon: MessageSquareText,
  },
  {
    title: 'Your Google clicks go nowhere',
    copy: 'Traffic is wasted when local searchers land on a generic page with no clear action.',
    icon: Gauge,
  },
];

const auditItems = [
  { label: 'Mobile clarity', score: 42, status: 'Weak' },
  { label: 'Quote flow', score: 34, status: 'Blocked' },
  { label: 'Service clarity', score: 51, status: 'Muddy' },
  { label: 'Trust signals', score: 29, status: 'Missing' },
  { label: 'Local SEO basics', score: 63, status: 'Patchy' },
  { label: 'Speed feel', score: 58, status: 'Uneven' },
];

const fixes = [
  'Make the service obvious above the fold',
  'Move the quote CTA into the hero',
  'Add reviews near the contact point',
  'Replace vague copy with customer-focused language',
  'Simplify the mobile form',
];

const offers = [
  {
    title: 'Outdated Website Refreshes',
    copy: 'Tighten the homepage, service pages, mobile layout, copy, photos, and contact path without dragging the business into a huge rebuild.',
    icon: Wrench,
  },
  {
    title: 'Service Landing Pages',
    copy: 'Build one focused page for a high-value service, seasonal push, or ad campaign with one obvious customer action.',
    icon: MousePointerClick,
  },
  {
    title: 'Launch + Growth Support',
    copy: 'Keep improving after launch with new service pages, updates, local SEO structure, and clearer conversion paths.',
    icon: Sparkles,
  },
];

const industries = [
  'Contractors',
  'Remodelers',
  'Landscapers',
  'Roofers',
  'Med spas',
  'Cleaning companies',
  'Auto shops',
  'Groomers',
  'Junk removal',
  'Clinics',
  'Wellness',
  'Specialty home service',
];

const packages = [
  {
    name: 'Starter Landing Page',
    price: '$650-$1,250',
    note: 'For one service, one campaign, or one clear offer.',
    cta: 'Start with a landing page',
    items: ['One custom landing page', 'Copy refresh', 'Mobile-first layout', 'Contact form', 'Basic SEO setup'],
  },
  {
    name: 'Core Website Refresh',
    price: '$2,500',
    note: 'The main Jolt offer for a service business with an existing site.',
    cta: 'Refresh my current site',
    featured: true,
    items: ['Homepage refresh', 'Core service pages', 'Quote-flow cleanup', 'Trust sections', 'Launch support'],
  },
  {
    name: 'Growth Support',
    price: '$400/mo',
    note: 'For steady improvements after launch.',
    cta: 'Ask about growth support',
    items: ['Monthly updates', 'New service pages', 'SEO structure help', 'Reporting notes', 'Conversion tweaks'],
  },
  {
    name: 'Premium Growth',
    price: '$900-$1,250/mo',
    note: 'For businesses that want more frequent page and offer work.',
    cta: 'Discuss premium support',
    items: ['Priority support', 'Campaign pages', 'Content expansion', 'Testing ideas', 'Deeper monthly review'],
  },
];

const process = [
  { step: '01', title: 'Free teardown', copy: 'Send the site. Jolt reviews it like a customer trying to request help.' },
  { step: '02', title: 'Rough direction', copy: 'You get the clearest fixes first, not a giant agency deck.' },
  { step: '03', title: 'Build sprint', copy: 'The chosen pages get rebuilt around clarity, trust, mobile, and contact flow.' },
  { step: '04', title: 'Launch and grow', copy: 'Go live, then keep improving the pages that matter most.' },
];

const faqs = [
  {
    q: 'Is Jolt a full custom web design agency?',
    a: 'No. Jolt is focused website refresh work for local service businesses that need a clearer site and a better path to contact.',
  },
  {
    q: 'What happens in the free teardown?',
    a: 'Jolt reviews your site for mobile clarity, service clarity, trust signals, quote flow, and obvious friction that could stop someone from reaching out.',
  },
  {
    q: 'Do I need to rebuild my entire website?',
    a: 'Not always. Many businesses need a focused refresh, a better landing page, or a cleaned-up quote path before they need a full rebuild.',
  },
  {
    q: 'Can this work for med spas, clinics, or professional services?',
    a: 'Yes. The CTA language shifts from quote requests to consultations, bookings, appointments, intake, or contact depending on the business.',
  },
  {
    q: 'Do you guarantee more leads?',
    a: 'No. The honest goal is to remove website friction so qualified visitors have a clearer reason and easier path to contact you.',
  },
];

function SectionHeading({
  eyebrow,
  title,
  copy,
  align = 'left',
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#17130b]/15 bg-[#f4cf30] px-3 py-1 text-xs font-bold uppercase tracking-normal text-[#17130b]">
        <Zap size={13} />
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold leading-[0.98] text-[#17130b] md:text-5xl">
        {title}
      </h2>
      {copy && <p className="mt-5 text-base leading-relaxed text-[#5f5748] md:text-lg">{copy}</p>}
    </div>
  );
}

function ScoreBar({ label, score, status }: { label: string; score: number; status: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="text-sm font-semibold text-white">{label}</span>
        <span className="rounded-full bg-[#f4cf30] px-2 py-1 text-[11px] font-bold uppercase text-[#17130b]">{status}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/15">
        <div className="h-full rounded-full bg-[#f4cf30]" style={{ width: `${score}%` }} />
      </div>
      <p className="mt-2 text-xs text-white/55">{score}/100 sample score</p>
    </div>
  );
}

export function HomeLanding() {
  useEffect(() => {
    document.title = 'Jolt | Website Refreshes for Local Service Businesses';

    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }
    description.content =
      'Jolt helps Central Illinois service businesses refresh outdated websites, clarify their offers, and turn more visitors into quote requests.';
  }, []);

  return (
    <div className="min-h-[100dvh] bg-[#f7f0df] font-sans text-[#17130b]">
      <Header />
      <main>
        <section className="relative overflow-hidden border-b-2 border-[#17130b] bg-[#f7f0df] pt-20 md:pt-24">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'linear-gradient(rgba(23,19,11,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(23,19,11,0.08) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="container relative mx-auto px-4 pb-10 md:px-6 md:pb-14">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              {chips.map((chip) => (
                <span key={chip} className="rounded-full border border-[#17130b] bg-white px-3 py-1 text-xs font-bold uppercase tracking-normal shadow-[3px_3px_0_#17130b]">
                  {chip}
                </span>
              ))}
            </div>

            <div className="grid items-center gap-9 lg:grid-cols-[0.95fr_0.78fr]">
              <div className="max-w-3xl">
                <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#17130b] px-4 py-2 text-xs font-bold uppercase tracking-normal text-[#f4cf30]">
                  <MapPin size={14} />
                  Central Illinois website refresh studio
                </p>
                <h1 className="max-w-3xl font-display text-4xl font-bold leading-[0.96] text-[#17130b] sm:text-5xl md:text-5xl xl:text-6xl">
                  Turn your outdated website into a simple sales machine.
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#524a3d] md:text-xl">
                  Jolt helps service businesses refresh their websites, clarify their offers, and make it easier for customers to request a quote.
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#6d6352] md:text-base">
                  Built for contractors, clinics, landscapers, remodelers, junk removal companies, groomers, auto shops, and local service businesses that need their website to work harder.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    type="button"
                    size="lg"
                    onClick={() => scrollTo('free-teardown')}
                    className="h-12 rounded-lg border-2 border-[#17130b] bg-[#f4cf30] px-7 text-base font-bold text-[#17130b] shadow-[5px_5px_0_#17130b] hover:bg-[#ffe36a]"
                  >
                    Get a free website teardown
                    <ArrowRight size={18} />
                  </Button>
                  <Button
                    type="button"
                    size="lg"
                    variant="outline"
                    onClick={() => scrollTo('packages')}
                    className="h-12 rounded-lg border-2 border-[#17130b] bg-white px-7 text-base font-bold text-[#17130b] shadow-[5px_5px_0_#17130b]"
                  >
                    View packages
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -right-4 -top-4 hidden rotate-3 rounded-lg border-2 border-[#17130b] bg-[#f4cf30] px-4 py-2 text-xs font-bold uppercase shadow-[5px_5px_0_#17130b] md:block">
                  Website friction scan
                </div>
                <div className="rounded-2xl border-2 border-[#17130b] bg-[#17130b] p-4 shadow-[14px_14px_0_#f4cf30]">
                  <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-xs font-bold uppercase text-[#f4cf30]">Site diagnostic</p>
                      <p className="text-sm text-white/60">Local service website</p>
                    </div>
                    <div className="rounded-xl border border-[#f4cf30]/40 bg-[#f4cf30] px-4 py-2 text-4xl font-black leading-none text-[#17130b]">
                      C-
                    </div>
                  </div>
                  <div className="grid gap-3">
                    {auditItems.slice(0, 4).map((item) => (
                      <ScoreBar key={item.label} {...item} />
                    ))}
                  </div>
                  <div className="mt-4 rounded-xl border border-[#f4cf30]/25 bg-[#f4cf30]/10 p-4">
                    <p className="text-xs font-bold uppercase text-[#f4cf30]">Recommendation</p>
                    <p className="mt-1 text-sm leading-relaxed text-white">
                      Core Website Refresh: make the service obvious, rebuild the quote path, and add trust near the contact point.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b-2 border-[#17130b] bg-[#17130b] py-5 text-[#f7f0df]">
          <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 text-sm font-bold uppercase tracking-normal md:px-6">
            <span>Example diagnosis, clearly labeled</span>
            <span className="hidden h-2 w-2 rounded-full bg-[#f4cf30] sm:block" />
            <span>Practical diagnosis first</span>
            <span className="hidden h-2 w-2 rounded-full bg-[#f4cf30] sm:block" />
            <span>Built around quote requests</span>
          </div>
        </section>

        <section id="who-its-for" className="bg-[#17130b] py-14 text-white md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f4cf30] px-3 py-1 text-xs font-bold uppercase text-[#17130b]">
                  <Hammer size={13} />
                  Built around real buying behavior
                </p>
                <h2 className="font-display text-4xl font-bold leading-[0.98] md:text-5xl">Built for businesses where trust creates the next call.</h2>
                <p className="mt-5 text-base leading-relaxed text-white/65">
                  Many visitors already know something about you. They saw your truck, heard your name from a neighbor, found you on Google, or got a referral. Your site has to confirm trust and make the next step obvious.
                </p>
              </div>
              <div className="grid gap-3">
                {[
                  'Show the actual service before they scroll.',
                  'Put proof close to the contact point.',
                  'Make the mobile form short enough to finish.',
                  'Use language that sounds like a real local business.',
                ].map((line) => (
                  <div key={line} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4">
                    <Star size={16} className="text-[#f4cf30]" />
                    <p className="text-sm font-semibold">{line}</p>
                  </div>
                ))}
                <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3">
                  {industries.slice(0, 9).map((industry) => (
                    <div key={industry} className="rounded-lg border border-white/10 bg-white/[0.06] p-3 text-sm font-bold">
                      {industry}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <SectionHeading
                eyebrow="The quiet leak"
                title="Your website might be costing you real jobs."
                copy="A lot of local customers already know enough to check you out. They found you on Google, saw the truck, heard your name from a neighbor, or clicked from a referral. The website's job is to confirm trust and make contacting easy."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {painPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <div key={point.title} className="rounded-xl border-2 border-[#17130b] bg-white p-5 shadow-[7px_7px_0_#17130b]">
                      <Icon size={22} className="mb-4 text-[#b9432b]" />
                      <h3 className="font-display text-2xl font-bold leading-none">{point.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#5f5748]">{point.copy}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="examples" className="border-y-2 border-[#17130b] bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              eyebrow="Proof by demonstration"
              title="See what a teardown finds."
              copy="No fake case studies. No invented testimonials. This is a practical sample of the kind of friction Jolt looks for before recommending a fix."
              align="center"
            />

            {/* Replace this sample proof block with approved client screenshots or case studies once real proof is available. */}
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {[
                {
                  label: 'Problem spotted',
                  title: 'The service is not clear above the fold',
                  copy: 'A visitor should know what you do, where you work, and what to do next before they start hunting through the menu.',
                },
                {
                  label: 'Why it matters',
                  title: 'Referrals still check the website',
                  copy: 'Even warm leads use the site to confirm trust. If the page feels dated or vague, they may keep comparing.',
                },
                {
                  label: 'First fix',
                  title: 'Turn the hero into a contact path',
                  copy: 'Rewrite the headline around the service, add the quote CTA, and put proof close to the form or phone number.',
                },
              ].map((card) => (
                <div key={card.title} className="rounded-2xl border-2 border-[#17130b] bg-[#f7f0df] p-6 shadow-[8px_8px_0_#17130b]">
                  <p className="mb-4 inline-flex rounded-full bg-[#17130b] px-3 py-1 text-xs font-bold uppercase text-[#f4cf30]">{card.label}</p>
                  <h3 className="font-display text-3xl font-bold leading-none">{card.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#5f5748]">{card.copy}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border-2 border-[#17130b] bg-[#17130b] p-6 text-white md:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <p className="text-xs font-bold uppercase text-[#f4cf30]">Example only</p>
                  <h3 className="mt-3 font-display text-3xl font-bold leading-none md:text-4xl">A teardown should produce a short fix list, not just a grade.</h3>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {fixes.map((fix, index) => (
                    <div key={fix} className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f4cf30] text-xs font-black text-[#17130b]">{index + 1}</span>
                      <p className="text-sm font-semibold leading-relaxed">{fix}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f0df] py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <SectionHeading
                eyebrow="What we check"
                title="A mini audit interface for the pages that make or lose money."
                copy="Jolt reviews the moments right before a visitor calls, books, or requests an estimate."
              />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {auditItems.map((item) => (
                  <div key={item.label} className="rounded-xl border-2 border-[#17130b] bg-white p-5">
                    <Gauge className="mb-4 text-[#f4cf30]" size={24} />
                    <h3 className="font-display text-2xl font-bold">{item.label}</h3>
                    <p className="mt-2 text-sm text-[#5f5748]">Sample status: {item.status}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14 rounded-2xl border-2 border-[#17130b] bg-[#17130b] p-6 text-white md:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
                <div>
                  <p className="text-xs font-bold uppercase text-[#f4cf30]">What we fix first</p>
                  <h3 className="mt-3 font-display text-3xl font-bold leading-none md:text-4xl">Priority beats polish.</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/65">
                    The first round should fix the highest-friction issues, not decorate around them.
                  </p>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {fixes.map((fix, index) => (
                    <div key={fix} className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f4cf30] text-xs font-black text-[#17130b]">{index + 1}</span>
                      <p className="text-sm font-semibold leading-relaxed">{fix}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y-2 border-[#17130b] bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              eyebrow="What Jolt fixes"
              title="Focused website help, not a bloated agency process."
              copy="Jolt stays close to the work that actually changes the visitor experience: clearer pages, better trust, stronger mobile flow, and an easier next step."
              align="center"
            />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {offers.map((offer) => {
                const Icon = offer.icon;
                return (
                  <div key={offer.title} className="rounded-2xl border-2 border-[#17130b] bg-[#f7f0df] p-6 shadow-[8px_8px_0_#17130b]">
                    <Icon className="mb-5 text-[#b9432b]" size={28} />
                    <h3 className="font-display text-3xl font-bold leading-none">{offer.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#5f5748]">{offer.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="packages" className="bg-[#f7f0df] py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              eyebrow="Packages"
              title="Simple scope. Clear pricing."
              copy="Pick the smallest practical fix that matches the problem. Most businesses should start with the free teardown."
              align="center"
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-4">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative rounded-2xl border-2 border-[#17130b] p-6 ${
                    pkg.featured
                      ? 'bg-[#17130b] text-white shadow-[10px_10px_0_#f4cf30]'
                      : 'bg-white text-[#17130b] shadow-[8px_8px_0_#17130b]'
                  }`}
                >
                  {pkg.featured && (
                    <span className="absolute -top-4 left-5 rounded-full border-2 border-[#17130b] bg-[#f4cf30] px-3 py-1 text-xs font-black uppercase text-[#17130b]">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-display text-3xl font-bold leading-none">{pkg.name}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${pkg.featured ? 'text-white/65' : 'text-[#5f5748]'}`}>{pkg.note}</p>
                  <p className="mt-6 font-display text-4xl font-bold">{pkg.price}</p>
                  <ul className="mt-6 space-y-3">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm">
                        <CheckCircle2 size={16} className={pkg.featured ? 'mt-0.5 shrink-0 text-[#f4cf30]' : 'mt-0.5 shrink-0 text-[#347f4f]'} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    type="button"
                    onClick={() => scrollTo('free-teardown')}
                    className={`mt-7 w-full rounded-lg border-2 font-bold ${
                      pkg.featured
                        ? 'border-[#f4cf30] bg-[#f4cf30] text-[#17130b]'
                        : 'border-[#17130b] bg-[#f4cf30] text-[#17130b]'
                    }`}
                  >
                    {pkg.cta}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="border-y-2 border-[#17130b] bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              eyebrow="How it works"
              title="A short path from messy site to clearer next step."
              align="center"
            />
            <div className="mt-12 grid gap-4 md:grid-cols-4">
              {process.map((step) => (
                <div key={step.step} className="rounded-2xl border-2 border-[#17130b] bg-[#f7f0df] p-5">
                  <div className="mb-6 inline-flex rounded-lg bg-[#17130b] px-3 py-2 font-display text-3xl font-bold leading-none text-[#f4cf30]">
                    {step.step}
                  </div>
                  <h3 className="font-display text-3xl font-bold leading-none">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5f5748]">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TeardownForm />

        <section id="faq" className="border-t-2 border-[#17130b] bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              eyebrow="FAQ"
              title="Straight answers before you send the site."
              align="center"
            />
            <Accordion
              type="single"
              collapsible
              className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border-2 border-[#17130b] bg-[#f7f0df] shadow-[8px_8px_0_#17130b]"
            >
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.q} value={`faq-${index}`} className="border-[#17130b]/15 px-5">
                  <AccordionTrigger className="py-5 text-left font-display text-2xl font-bold leading-none hover:text-[#b9432b] hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-[#5f5748]">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-2xl border-2 border-[#17130b] bg-[#17130b] p-6 text-center text-white md:p-8">
              <PhoneCall className="text-[#f4cf30]" size={30} />
              <h2 className="font-display text-4xl font-bold leading-none">Want the first look?</h2>
              <p className="max-w-xl text-sm leading-relaxed text-white/65">
                Send the current website and Jolt will review the highest-friction moments first.
              </p>
              <Button
                type="button"
                onClick={() => scrollTo('free-teardown')}
                className="rounded-lg border-2 border-[#f4cf30] bg-[#f4cf30] font-bold text-[#17130b]"
              >
                Get a free website teardown
                <ArrowRight size={17} />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
