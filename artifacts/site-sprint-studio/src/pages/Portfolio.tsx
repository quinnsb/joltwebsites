import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, X, Minus, Square, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useLocation } from 'wouter';
import { scrollTo } from '@/lib/scrollTo';
import { Button } from '@/components/ui/button';

// ─── Browser window chrome wrapper ───────────────────────────────────────────

function BrowserWindow({
  url,
  children,
  className = '',
}: {
  url: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-xl overflow-hidden border border-border shadow-xl flex flex-col ${className}`}>
      {/* Chrome bar */}
      <div className="flex items-center gap-2 px-3 py-2.5 bg-gray-100 border-b border-gray-200 shrink-0">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded border border-gray-200 text-[10px] text-gray-400 px-2 py-0.5 truncate font-mono">
          {url}
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
}

// ─── Annotation badge ─────────────────────────────────────────────────────────

function Annotation({
  label,
  variant,
  className = '',
}: {
  label: string;
  variant: 'bad' | 'good';
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full border shadow-sm ${
        variant === 'bad'
          ? 'bg-red-100 text-red-700 border-red-200'
          : 'bg-green-100 text-green-700 border-green-200'
      } ${className}`}
    >
      {variant === 'bad' ? <AlertCircle size={9} /> : <CheckCircle2 size={9} />}
      {label}
    </span>
  );
}

// ─── EXAMPLE 1 ── Prairie Ridge Exteriors (Roofing) ──────────────────────────

function RoofingBefore() {
  return (
    <div className="bg-[#2d4a6b] text-white font-sans" style={{ fontSize: 11 }}>
      {/* Nav */}
      <div className="bg-[#1e3450] px-3 py-2 flex items-center justify-between">
        <span className="font-bold text-[13px] tracking-wide text-white/90">PRAIRIE RIDGE EXTERIORS</span>
        <div className="flex gap-2 text-[9px] text-white/60 hidden sm:flex">
          {['HOME','ABOUT','SERVICES','GALLERY','CONTACT','GET QUOTE','BLOG'].map(l => (
            <span key={l} className="hover:text-white cursor-pointer">{l}</span>
          ))}
        </div>
      </div>
      {/* Hero */}
      <div className="px-4 py-6 bg-[#2d4a6b] text-center">
        <div className="text-[9px] text-white/40 uppercase tracking-widest mb-2">Est. 1998 · Bloomington, IL</div>
        <h1 className="text-[15px] font-medium text-white/80 mb-2 leading-snug">
          Welcome to Prairie Ridge Exteriors
        </h1>
        <p className="text-[9px] text-white/50 leading-relaxed max-w-xs mx-auto mb-4">
          We provide quality roofing, siding, gutters, windows, decks, and more for residential and commercial properties in the greater Bloomington-Normal area since 1998. Call us today for a free estimate.
        </p>
        <button className="bg-[#4a7fa5] text-white text-[9px] px-3 py-1.5 rounded">
          Learn More
        </button>
      </div>
      {/* Services grid — too many */}
      <div className="bg-gray-100 px-3 py-3">
        <div className="text-[9px] font-bold text-gray-600 uppercase tracking-wider mb-2 text-center">Our Services</div>
        <div className="grid grid-cols-3 gap-1.5 text-[8px] text-gray-500">
          {['Roofing','Siding','Gutters','Windows','Decks','Fencing','Painting','Insulation','Solar'].map(s => (
            <div key={s} className="bg-white rounded border border-gray-200 p-1.5 text-center">{s}</div>
          ))}
        </div>
      </div>
      {/* Body copy block */}
      <div className="px-4 py-3 bg-white">
        <p className="text-[8px] text-gray-400 leading-relaxed">
          Prairie Ridge Exteriors has been serving the Bloomington-Normal community for over 25 years. 
          Our team of experienced professionals is dedicated to providing top-quality workmanship on every project. 
          We are licensed, bonded, and insured. Contact us for a free quote.
        </p>
        <div className="mt-2 text-[8px] text-gray-300 text-center">
          Phone: (309) 555-0192 &nbsp;|&nbsp; Email: info@prairieridge.com
        </div>
      </div>
    </div>
  );
}

function RoofingAfter() {
  return (
    <div className="bg-white font-sans" style={{ fontSize: 11 }}>
      {/* Nav */}
      <div className="bg-white border-b border-gray-100 px-3 py-2 flex items-center justify-between">
        <span className="font-bold text-[11px] text-gray-900">Prairie Ridge Exteriors</span>
        <div className="flex items-center gap-2">
          <span className="text-[8px] text-gray-500">Services</span>
          <span className="text-[8px] text-gray-500">Area</span>
          <span className="text-[8px] text-gray-500">Reviews</span>
          <button className="bg-[#b45309] text-white text-[8px] px-2 py-1 rounded font-semibold">
            Request Inspection
          </button>
        </div>
      </div>
      {/* Hero */}
      <div className="bg-[#1c3a5c] px-4 py-5">
        <div className="inline-block bg-amber-500 text-white text-[8px] font-bold px-2 py-0.5 rounded mb-2 uppercase tracking-wider">
          Storm Damage? Act Before Repairs Cost More
        </div>
        <h1 className="text-[16px] font-bold text-white leading-tight mb-2">
          Free roof inspection.<br />48-hour turnaround.
        </h1>
        <p className="text-[9px] text-blue-200 leading-relaxed mb-3 max-w-xs">
          We assess your roof, siding, and gutters honestly. No pushy sales. Just a clear picture of what needs fixing and what can wait.
        </p>
        <button className="bg-amber-500 text-white text-[9px] font-bold px-4 py-2 rounded shadow-md">
          Request a Free Inspection
        </button>
        <div className="flex gap-3 mt-3 text-[8px] text-blue-200">
          <span>✓ Licensed &amp; insured</span>
          <span>✓ Serving McLean County</span>
          <span>✓ 200+ local jobs</span>
        </div>
      </div>
      {/* Reviews strip */}
      <div className="bg-gray-50 px-3 py-2 border-b border-gray-100">
        <div className="text-[8px] text-gray-500 font-semibold mb-1.5">What neighbors say:</div>
        <div className="text-[8px] text-gray-600 italic">"Fast, honest, no upsell. Fixed my storm damage in one day." — Jason M., Normal IL</div>
      </div>
      {/* Process */}
      <div className="px-3 py-3">
        <div className="text-[8px] font-bold text-gray-700 uppercase tracking-wider mb-2">How it works</div>
        <div className="flex gap-2">
          {['1. Request', '2. Inspect', '3. Report', '4. Repair'].map((s, i) => (
            <div key={i} className="flex-1 text-center">
              <div className="w-5 h-5 rounded-full bg-[#1c3a5c] text-white text-[8px] font-bold flex items-center justify-center mx-auto mb-1">{i+1}</div>
              <div className="text-[7px] text-gray-500">{s.split('. ')[1]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── EXAMPLE 2 ── North Main Landscaping ─────────────────────────────────────

function LandscapingBefore() {
  return (
    <div className="bg-white font-sans" style={{ fontSize: 11 }}>
      {/* Nav */}
      <div className="bg-[#3a5a3a] px-3 py-2 flex items-center justify-between">
        <span className="font-bold text-[11px] text-white">NORTH MAIN LANDSCAPING</span>
        <div className="flex gap-2 text-[8px] text-green-200">
          {['Home','About','Services','Portfolio','Testimonials','Blog','Contact'].map(l => (
            <span key={l}>{l}</span>
          ))}
        </div>
      </div>
      {/* Generic hero */}
      <div className="relative">
        <div className="bg-gradient-to-b from-green-800 to-green-600 px-4 py-5 text-white text-center">
          <h1 className="text-[14px] font-semibold mb-1 text-white/80">North Main Landscaping</h1>
          <p className="text-[9px] text-green-200 mb-3">Serving Bloomington-Normal for over 15 years</p>
          <button className="bg-white text-green-700 text-[8px] px-3 py-1 rounded border border-green-200">
            View Our Work
          </button>
        </div>
      </div>
      {/* Services dump */}
      <div className="px-3 py-3">
        <div className="text-[9px] font-bold text-gray-600 mb-2 text-center">All Services</div>
        <div className="text-[8px] text-gray-500 leading-loose">
          Lawn mowing · Mulching · Trimming · Fertilization · Aeration · Overseeding · Weed control · Spring cleanup · Fall cleanup · Leaf removal · Snow removal · Irrigation · Hardscaping · Retaining walls · Patios · Fire pits · Planting · Tree trimming · Stump removal · Drainage
        </div>
      </div>
      {/* Block of text */}
      <div className="px-3 py-2 bg-gray-50 border-t border-gray-100">
        <p className="text-[8px] text-gray-400 leading-relaxed">
          North Main Landscaping is a full-service landscaping company offering residential and commercial services throughout the Bloomington-Normal metro area. Our team of professionals brings years of experience to every project big or small. Contact us today to schedule your free consultation.
        </p>
        <div className="mt-2 text-[8px] text-gray-300">📞 (309) 555-0147</div>
      </div>
    </div>
  );
}

function LandscapingAfter() {
  return (
    <div className="bg-white font-sans" style={{ fontSize: 11 }}>
      {/* Nav */}
      <div className="bg-white border-b border-gray-100 px-3 py-2 flex items-center justify-between">
        <span className="font-bold text-[11px] text-gray-900">North Main Landscaping</span>
        <button className="bg-[#2d6a2d] text-white text-[8px] px-2.5 py-1 rounded font-semibold">
          Get Spring Quote
        </button>
      </div>
      {/* Seasonal hero */}
      <div className="bg-[#1e4620] px-4 py-4">
        <div className="inline-block bg-lime-400 text-green-900 text-[8px] font-bold px-2 py-0.5 rounded mb-2 uppercase tracking-wider">
          Spring Cleanup — Limited Spots Left
        </div>
        <h1 className="text-[15px] font-bold text-white leading-tight mb-1.5">
          Spring cleanup &amp; mulch.<br />Request your quote today.
        </h1>
        <p className="text-[9px] text-green-200 leading-relaxed mb-3">
          We handle spring cleanups, mulch delivery, bed edging, and trim for neighborhoods across Bloomington-Normal. One quote, one crew, one day.
        </p>
        <button className="bg-lime-400 text-green-900 text-[9px] font-bold px-4 py-2 rounded shadow">
          Request a Spring Quote
        </button>
      </div>
      {/* What's included */}
      <div className="px-3 py-2.5 bg-gray-50 border-b border-gray-100">
        <div className="text-[8px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Spring package includes:</div>
        <div className="grid grid-cols-2 gap-1">
          {['Debris removal','Bed edging','Mulch (2 cu yd)','Shrub trim'].map(s => (
            <div key={s} className="flex items-center gap-1 text-[8px] text-gray-600">
              <CheckCircle2 size={8} className="text-green-600 shrink-0" />{s}
            </div>
          ))}
        </div>
      </div>
      {/* Reviews */}
      <div className="px-3 py-2">
        <div className="text-[8px] text-amber-500 font-bold">★★★★★</div>
        <div className="text-[8px] text-gray-600 italic">"They did our whole yard in one morning. Looked brand new." — Linda K., Bloomington</div>
      </div>
    </div>
  );
}

// ─── EXAMPLE 3 ── Glow House Aesthetics ──────────────────────────────────────

function MedSpaBefore() {
  return (
    <div className="bg-white font-sans" style={{ fontSize: 11 }}>
      {/* Nav — inconsistent */}
      <div className="bg-[#c49a9a] px-3 py-2 flex items-center justify-between">
        <span className="font-bold text-[12px] text-white italic">Glow House Aesthetics</span>
        <div className="flex gap-1.5 text-[8px] text-white/80 flex-wrap">
          {['Home','About','Botox','Fillers','Facials','Laser','PRP','Weight Loss','Contact'].map(l => (
            <span key={l}>{l}</span>
          ))}
        </div>
      </div>
      {/* Hero — treatment dump */}
      <div className="bg-pink-50 px-4 py-4 text-center">
        <h1 className="text-[13px] font-semibold text-gray-600 mb-1">Glow House Aesthetics</h1>
        <p className="text-[9px] text-gray-400 mb-3">Botox · Fillers · Facials · Laser · PRP · Kybella · Morpheus8 · HydraFacial · Weight Loss · Skin Tightening</p>
        <button className="bg-pink-300 text-white text-[8px] px-3 py-1 rounded">
          Book Now
        </button>
      </div>
      {/* Treatment list */}
      <div className="px-3 py-2">
        <div className="text-[8px] font-bold text-gray-500 mb-1.5 text-center">TREATMENTS</div>
        <div className="grid grid-cols-3 gap-1 text-[7.5px] text-center text-gray-400">
          {['Botox','Juvederm','Restylane','Sculptra','Kybella','PRP','HydraFacial','Morpheus8','Laser Hair','Laser Resurfacing','Skin Tightening','Weight Loss'].map(t => (
            <div key={t} className="border border-gray-100 rounded p-1 bg-gray-50">{t}</div>
          ))}
        </div>
      </div>
      {/* Footer nav — booking buried */}
      <div className="bg-gray-100 px-3 py-2 mt-1 text-center">
        <p className="text-[7px] text-gray-400">To schedule, call (309) 555-0183 or email appointments@glowhouse.com during business hours M–F 9–5</p>
      </div>
    </div>
  );
}

function MedSpaAfter() {
  return (
    <div className="bg-white font-sans" style={{ fontSize: 11 }}>
      {/* Nav */}
      <div className="bg-white border-b border-gray-100 px-3 py-2 flex items-center justify-between">
        <span className="font-bold text-[11px] text-gray-900 tracking-wide">Glow House</span>
        <button className="bg-[#7c3d6b] text-white text-[8px] px-2.5 py-1 rounded font-semibold">
          Book Consultation
        </button>
      </div>
      {/* First-visit hero */}
      <div className="bg-gradient-to-b from-[#f5edf3] to-white px-4 py-4">
        <div className="inline-block bg-[#7c3d6b]/10 text-[#7c3d6b] text-[8px] font-semibold px-2 py-0.5 rounded-full mb-2">
          First visit? Start here.
        </div>
        <h1 className="text-[15px] font-bold text-gray-900 leading-tight mb-1.5">
          A consultation first.<br />No pressure. No guessing.
        </h1>
        <p className="text-[9px] text-gray-500 leading-relaxed mb-3">
          Not sure what treatment is right for you? We start every new patient with a 30-minute consultation so you leave with a clear plan, not just a price list.
        </p>
        <button className="bg-[#7c3d6b] text-white text-[9px] font-bold px-4 py-2 rounded shadow-sm">
          Book My Free Consultation
        </button>
      </div>
      {/* What to expect */}
      <div className="px-3 py-2.5 bg-[#fdf6fb] border-y border-purple-100">
        <div className="text-[8px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">What your first visit looks like:</div>
        <div className="space-y-1">
          {['30-min skin assessment with a licensed provider','Honest recommendation — no upsell pressure','Leave with a written treatment plan'].map((s, i) => (
            <div key={i} className="flex items-start gap-1.5 text-[8px] text-gray-600">
              <span className="w-3.5 h-3.5 rounded-full bg-[#7c3d6b]/10 text-[#7c3d6b] font-bold flex items-center justify-center shrink-0 text-[7px]">{i+1}</span>
              {s}
            </div>
          ))}
        </div>
      </div>
      {/* Provider trust */}
      <div className="px-3 py-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-[10px] shrink-0">AK</div>
          <div>
            <div className="text-[8px] font-semibold text-gray-900">Ashley K., NP — Lead Provider</div>
            <div className="text-[7px] text-gray-400">8 years aesthetics · 400+ patients · Bloomington-Normal</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Annotations overlay ──────────────────────────────────────────────────────

const examples = [
  {
    num: '01',
    category: 'Roofing / Exteriors',
    business: 'Prairie Ridge Exteriors',
    before: RoofingBefore,
    after: RoofingAfter,
    beforeUrl: 'prairieridgeexteriors.com',
    afterUrl: 'prairieridgeexteriors.com/storm-damage',
    beforeAnnotations: ['Weak generic headline', 'No storm-damage focus', 'Buried CTA', '7-item nav', 'Contact in footer only'],
    afterAnnotations: ['Storm-specific headline', 'Inspection CTA above fold', 'Trust signals upfront', 'Process section', 'Reviews near CTA'],
    wrong: [
      'Homepage headline says "Welcome" — no customer benefit',
      'Contact info buried at the bottom of the page',
      'Seven nav items create decision paralysis',
      'No storm damage or insurance-specific content anywhere',
      'Generic "Learn More" CTA leads nowhere specific',
    ],
    changed: [
      'Headline targets storm damage directly — matches what people search for',
      'Request Inspection button appears above the fold and repeats throughout',
      'Trust signals (licensed, insured, local job count) visible immediately',
      'Simple 4-step process removes uncertainty about what happens next',
      'Neighbor review near CTA builds confidence right before the decision',
    ],
    why: 'After a storm, homeowners are anxious and searching with intent. A generic homepage makes them work too hard to figure out if you do storm damage and how to contact you. A focused page removes every friction point between their search and your inspection request.',
  },
  {
    num: '02',
    category: 'Landscaping / Outdoor Services',
    business: 'North Main Landscaping',
    before: LandscapingBefore,
    after: LandscapingAfter,
    beforeUrl: 'northmainlandscaping.com',
    afterUrl: 'northmainlandscaping.com/spring-cleanup',
    beforeAnnotations: ['Too many services listed', 'No seasonal offer', 'Generic homepage copy', 'No quote flow', 'Phone buried in footer'],
    afterAnnotations: ['Seasonal urgency messaging', 'One focused offer', 'Package clearly defined', 'Quote request prominent', 'Social proof near CTA'],
    wrong: [
      'Homepage lists 20 services in a text blob with no visual priority',
      'No seasonal messaging — same page in March as in October',
      'Contact is phone-only, buried at the bottom',
      'No explanation of what a cleanup actually includes',
      'No before/after proof or reviews visible',
    ],
    changed: [
      '"Limited spots left" headline creates real seasonal urgency',
      'Single service focus: spring cleanup package, not 20 services',
      'Package clearly shows exactly what is included for one price',
      'Quote request button appears in the nav and hero',
      'Customer review directly below the offer builds trust fast',
    ],
    why: 'In spring, most landscaping searches are looking for one specific thing: someone to come handle the yard before summer. A seasonal page that names exactly what is included, shows availability pressure, and makes requesting a quote easy will out-convert a generic services homepage every time.',
  },
  {
    num: '03',
    category: 'Med Spa / Aesthetics',
    business: 'Glow House Aesthetics',
    before: MedSpaBefore,
    after: MedSpaAfter,
    beforeUrl: 'glowhouse-aesthetics.com',
    afterUrl: 'glowhouse-aesthetics.com/first-visit',
    beforeAnnotations: ['12 treatments, no path', 'Booking info buried in footer', 'No first-timer guidance', 'Inconsistent visual style', 'No provider trust signals'],
    afterAnnotations: ['First-visit framing reduces anxiety', 'Consultation CTA above fold', 'Step-by-step process shown', 'Provider credentials visible', 'No pressure positioning'],
    wrong: [
      'Treatment menu leads with 12 options — overwhelming for first-timers',
      'Booking requires calling during business hours — too much friction',
      'No explanation of what to expect at a first appointment',
      'No provider credentials or photos to build personal trust',
      'Visual style feels inconsistent and slightly dated',
    ],
    changed: [
      '"First visit? Start here" framing immediately speaks to new patients',
      'Consultation button appears in the nav and hero — no hunting required',
      'Three-step walkthrough removes uncertainty about the first visit',
      'Provider name, credentials, and experience shown before the CTA',
      'Clean, minimal aesthetic feels premium without being cold',
    ],
    why: 'First-time med spa patients often spend weeks researching before booking. The thing that tips them is trust — do they feel like they know who they are seeing and what will happen? A consultation-first page that answers those questions before anyone has to ask converts far better than a treatment menu.',
  },
];

const improvements = [
  'Clearer service offers',
  'Stronger calls to action',
  'Mobile-friendly layout',
  'Better trust signals',
  'Cleaner visual hierarchy',
  'Service-specific landing pages',
  'Simpler quote request flow',
  'Seasonal and local messaging',
];

// ─── Main page ────────────────────────────────────────────────────────────────

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
            className="font-display font-bold text-xl tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            data-testid="portfolio-logo"
          >
            Prairecraft
          </button>
          <button
            type="button"
            onClick={() => setLocation('/')}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            data-testid="portfolio-back"
          >
            <ArrowLeft size={15} />
            Back to main site
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-14 pb-12 md:pt-20 md:pb-16 px-4 md:px-6 border-b border-border/50">
        <div className="container mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1.5 rounded-md uppercase tracking-wider border border-amber-200 mb-6">
            Sample refreshes &bull; Not real client work
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
            Concept refreshes that show what better can look like.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm building a portfolio of sample website transformations to show how I help local service businesses turn outdated websites into cleaner, clearer, more effective sales tools.
          </p>
          <p className="text-sm text-muted-foreground/70 border-l-2 border-border pl-4 italic">
            These are not real client projects. They are concept examples designed to show how a stronger website can improve trust, clarity, and quote requests.
          </p>
        </div>
      </section>

      {/* What these show */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-secondary/30 border-b border-border/50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-display font-bold mb-4">What these examples are meant to show</h2>
          <p className="text-muted-foreground leading-relaxed">
            A lot of local service businesses already do great work. Their websites just don't always reflect it. These concept refreshes show the kinds of improvements I focus on: clearer messaging, stronger calls to action, better mobile layout, more trust signals, and simpler paths to request a quote or book a consultation.
          </p>
        </div>
      </section>

      {/* Before / After examples */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl space-y-24">
          {examples.map((ex, idx) => {
            const BeforeComp = ex.before;
            const AfterComp = ex.after;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                {/* Section label */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-4xl font-display font-bold text-border">0{idx + 1}</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{ex.category}</p>
                    <h2 className="text-2xl font-display font-bold">{ex.business}</h2>
                  </div>
                  <span className="ml-auto text-xs bg-secondary border border-border text-muted-foreground font-semibold px-3 py-1 rounded-full hidden sm:inline">
                    Concept Refresh {ex.num}
                  </span>
                </div>

                {/* Side-by-side browser mockups */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Before */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 bg-red-100 text-red-700 border border-red-200 text-xs font-bold px-3 py-1 rounded-full">
                        <X size={11} /> Before
                      </span>
                    </div>
                    <BrowserWindow url={ex.beforeUrl} className="ring-2 ring-red-100">
                      <BeforeComp />
                    </BrowserWindow>
                    {/* Before annotations */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {ex.beforeAnnotations.map((a, i) => (
                        <Annotation key={i} label={a} variant="bad" />
                      ))}
                    </div>
                  </div>

                  {/* After */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 border border-green-200 text-xs font-bold px-3 py-1 rounded-full">
                        <CheckCircle2 size={11} /> After
                      </span>
                    </div>
                    <BrowserWindow url={ex.afterUrl} className="ring-2 ring-green-100">
                      <AfterComp />
                    </BrowserWindow>
                    {/* After annotations */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {ex.afterAnnotations.map((a, i) => (
                        <Annotation key={i} label={a} variant="good" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Breakdown */}
                <div className="grid md:grid-cols-3 gap-5 bg-secondary/30 rounded-2xl border border-border/60 p-6">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-destructive mb-3 flex items-center gap-1.5">
                      <X size={13} /> What was wrong
                    </h3>
                    <ul className="space-y-2">
                      {ex.wrong.map((w, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-destructive/50 mt-1.5 shrink-0" />
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-1.5">
                      <CheckCircle2 size={13} /> What changed
                    </h3>
                    <ul className="space-y-2">
                      {ex.changed.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 size={13} className="text-primary mt-0.5 shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">Why it matters</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{ex.why}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* What I'm usually improving */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-secondary/30 border-y border-border/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold mb-3">What I'm usually improving</h2>
            <p className="text-muted-foreground">The same handful of problems show up on most local service sites.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {improvements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card border border-border rounded-xl p-4 shadow-sm flex items-start gap-3"
              >
                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-foreground text-primary-foreground">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Want this kind of thinking applied to your website?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 leading-relaxed">
            If your business already does solid work but your website feels dated, cluttered, or unclear, I can help. Send me your site and I'll review it through the lens of trust, clarity, mobile experience, and lead generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              type="button"
              size="lg"
              className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 text-base h-12 font-semibold"
              onClick={() => { setLocation('/'); setTimeout(() => scrollTo('free-teardown'), 100); }}
              data-testid="portfolio-cta-teardown"
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
              data-testid="portfolio-cta-home"
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
          <a
            href="mailto:hello@prairecraft.com"
            className="hover:text-foreground transition-colors"
            data-testid="portfolio-email"
          >
            hello@prairecraft.com
          </a>
        </div>
      </footer>
    </div>
  );
}
