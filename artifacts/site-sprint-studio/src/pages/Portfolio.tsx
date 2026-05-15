import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  FileSearch,
  MapPin,
  MousePointerClick,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  X,
  Zap,
} from 'lucide-react';
import { useLocation } from 'wouter';
import { scrollTo } from '@/lib/scrollTo';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TeardownForm } from '@/components/TeardownForm';
import heartlandLogo from '@assets/heartland-logo-transparent.png';
import northMainLogo from '@assets/north-main-logo-transparent.png';
import glowHouseLogo from '@assets/glow-house-logo-transparent.png';

const stockImages = {
  roofingHero:
    'https://images.unsplash.com/photo-1681049400158-0ff6249ac315?auto=format&fit=crop&crop=entropy&w=900&h=420&q=80',
  roofingProject:
    'https://images.unsplash.com/photo-1726589004565-bedfba94d3a2?auto=format&fit=crop&crop=entropy&w=420&h=240&q=80',
  landscapingHero:
    'https://images.unsplash.com/photo-1762461838534-ca26dfa134a8?auto=format&fit=crop&crop=entropy&w=900&h=420&q=80',
  medSpaHero:
    'https://images.unsplash.com/photo-1757689373248-a6cd07328ba5?auto=format&fit=crop&crop=entropy&w=900&h=420&q=80',
} as const;

// ─── Browser chrome wrapper ───────────────────────────────────────────────────

function BrowserWindow({
  url,
  children,
  scale = 1,
  bodyClassName = 'h-[420px]',
}: {
  url: string;
  children: React.ReactNode;
  scale?: number;
  bodyClassName?: string;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border-2 border-[#17130b] bg-white shadow-[8px_8px_0_#17130b]">
      <div className="flex shrink-0 items-center gap-2 border-b-2 border-[#17130b] bg-[#f7f0df] px-3 py-2.5">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded border border-gray-200 text-[10px] text-gray-400 px-2 py-0.5 truncate font-mono">
          {url}
        </div>
      </div>
      <div className={bodyClassName}>
        <div style={{ transform: `scale(${scale})`, transformOrigin: 'top left', width: `${100 / scale}%` }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function InlinePreview({
  after,
  afterUrl,
  before,
  beforeUrl,
  business,
  onClose,
}: {
  after: React.ComponentType;
  afterUrl: string;
  before: React.ComponentType;
  beforeUrl: string;
  business: string;
  onClose: () => void;
}) {
  const [tab, setTab] = useState<'before' | 'after'>('after');
  const BeforeComp = before;
  const AfterComp = after;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="mt-6 overflow-hidden rounded-2xl border-2 border-[#17130b] bg-white shadow-[8px_8px_0_#17130b]"
    >
      <div className="flex flex-col gap-3 border-b-2 border-[#17130b] bg-[#f7f0df] px-4 py-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-black text-[#17130b]">{business}</span>
          <div className="flex overflow-hidden rounded-lg border-2 border-[#17130b] text-xs font-black">
            <button
              type="button"
              onClick={() => setTab('before')}
              className={`px-3 py-1.5 transition-colors ${tab === 'before' ? 'bg-[#fff0ec] text-[#b9432b]' : 'bg-white text-[#5f5748] hover:bg-[#f4cf30]'}`}
            >
              Before
            </button>
            <button
              type="button"
              onClick={() => setTab('after')}
              className={`px-3 py-1.5 transition-colors ${tab === 'after' ? 'bg-[#eef7df] text-[#347f4f]' : 'bg-white text-[#5f5748] hover:bg-[#f4cf30]'}`}
            >
              After
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#5f5748] transition-colors hover:text-[#17130b]"
        >
          Close preview
          <X size={16} />
        </button>
      </div>

      <div className="bg-[#f7f0df] p-4">
        <div className="overflow-hidden rounded-2xl border-2 border-[#17130b] bg-white">
          <div className="flex items-center justify-between gap-3 border-b-2 border-[#17130b] bg-white px-4 py-2.5">
            <div className="min-w-0">
              <p className="text-[10px] font-black uppercase tracking-normal text-[#b9432b]">
                Scrollable demo page
              </p>
              <p className="truncate text-sm font-bold text-[#17130b]">{tab === 'before' ? beforeUrl : afterUrl}</p>
            </div>
            <span className="whitespace-nowrap text-xs font-bold text-[#6d6352]">Scroll inside</span>
          </div>
          <div className="h-[72vh] overflow-y-auto bg-white">
            <div className="min-h-full">
              {tab === 'before' ? <BeforeComp /> : <AfterComp />}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Photo simulation helper

function Photo({
  gradient,
  label,
  className = '',
  overlay = 'bg-black/0',
  src,
}: {
  gradient: string;
  label?: string;
  className?: string;
  overlay?: string;
  src?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-cover bg-center ${gradient} ${className}`}
      style={src ? { backgroundImage: `url("${src}")` } : undefined}
    >
      <div className={`absolute inset-0 ${overlay}`} />
      {label && (
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[6px] px-1.5 py-0.5 truncate">
          {label}
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// EXAMPLE 1 - Heartland Roofing & Siding
// ═══════════════════════════════════════════════════════════════════════════════

function RoofingBefore() {
  return (
    <div className="bg-[#f5f0e8] font-sans text-gray-800" style={{ fontSize: 11 }}>
      <div className="bg-[#cc3300] text-white text-center py-1 text-[8px] font-bold">
        CALL US TODAY! (309) 555-0142 &nbsp;|&nbsp; SERVING BLOOMINGTON-NORMAL SINCE 1994
      </div>
      <div className="bg-[#1a1a1a] px-3 py-2 flex items-center justify-between">
        <div>
          <div className="text-[13px] font-bold text-[#cc3300]" style={{ fontFamily: 'Georgia, serif' }}>
            HEARTLAND ROOFING &amp; SIDING
          </div>
          <div className="text-[7px] text-gray-400">Your Local Exterior Specialists!</div>
        </div>
        <div className="grid grid-cols-4 gap-x-2 gap-y-0.5 text-[7.5px] text-gray-300">
          {['HOME','ABOUT US','SERVICES','ROOFING','SIDING','GUTTERS','WINDOWS','DECKS','CONTACT US','FREE ESTIMATE','GALLERY','BLOG'].map(l => (
            <span key={l}>{l}</span>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-b from-gray-600 to-gray-500 px-4 py-4 text-center">
        <p className="text-[9px] text-yellow-300 uppercase tracking-widest mb-1">★ Award Winning Service ★</p>
        <h1 className="text-[16px] font-bold text-white mb-1" style={{ fontFamily: 'Georgia, serif' }}>
          Welcome to Heartland Roofing &amp; Siding!
        </h1>
        <p className="text-[8px] text-gray-300 leading-relaxed mb-2 max-w-xs mx-auto">
          We are a family-owned exterior company serving Bloomington, Normal, and surrounding communities. From roofing and siding to gutters, windows, decks and more, we do it all!
        </p>
        <div className="flex gap-2 justify-center">
          <button className="bg-[#cc3300] text-white text-[8px] px-3 py-1.5 border border-red-700">GET A FREE ESTIMATE</button>
          <button className="bg-gray-700 text-white text-[8px] px-3 py-1.5 border border-gray-600">VIEW GALLERY</button>
          <button className="bg-gray-700 text-white text-[8px] px-3 py-1.5 border border-gray-600">ABOUT US</button>
        </div>
      </div>
      <div className="bg-[#f5f0e8] px-3 py-2 border-t-4 border-[#cc3300]">
        <p className="text-[9px] font-bold text-center text-[#cc3300] uppercase tracking-wider mb-2">OUR SERVICES</p>
        <div className="grid grid-cols-4 gap-1 text-[7.5px] text-center text-gray-600">
          {['Roof Replace','Roof Repair','Storm Damage','Siding Install','Siding Repair','Gutter Install','Gutter Guards','Window Replace','Entry Doors','Deck Build','Deck Repair','Insulation','Skylight','Chimney','Flashing','Attic Venting'].map(s => (
            <div key={s} className="bg-white border border-gray-200 p-1 rounded">{s}</div>
          ))}
        </div>
      </div>
      <div className="px-4 py-2 bg-white border-t border-gray-200">
        <p className="text-[7.5px] text-gray-400 leading-relaxed text-center">
          Heartland Roofing &amp; Siding LLC is a licensed, bonded, and insured exterior contractor serving McLean County. We pride ourselves on quality workmanship, honest pricing, and outstanding customer service. BBB accredited. Ask about our senior discount!
        </p>
      </div>
    </div>
  );
}

function RoofingAfter() {
  return (
    <div className="bg-white font-sans" style={{ fontSize: 11 }}>
      <div className="bg-[#1B3A6B] px-3 py-2.5 flex items-center justify-between">
        <img src={heartlandLogo} alt="Heartland Roofing" className="h-9 w-[126px] object-contain object-left" style={{ filter: 'invert(1)' }} />
        <div className="flex items-center gap-3">
          <span className="text-[8px] text-blue-200">Storm Damage</span>
          <span className="text-[8px] text-blue-200">Services</span>
          <span className="text-[8px] text-blue-200">Reviews</span>
          <button className="bg-[#D46000] text-white text-[8px] px-2.5 py-1.5 rounded font-bold shadow">Free Inspection</button>
        </div>
      </div>
      <div className="relative">
        <Photo gradient="bg-gradient-to-r from-[#0F2340] via-[#1B3A6B] to-[#0F2340]" overlay="bg-gradient-to-r from-[#071424]/75 via-[#1B3A6B]/55 to-black/20" className="h-[130px]" src={stockImages.roofingHero} />
        <div className="absolute inset-0 flex flex-col justify-center px-4 py-3">
          <div className="bg-[#D46000] text-white text-[7px] font-bold px-2 py-0.5 rounded w-fit mb-2 uppercase tracking-wider">Storm Damage Page - McLean County</div>
          <h1 className="text-[17px] font-extrabold text-white leading-tight mb-1" style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '-0.01em' }}>Free roof inspection.<br />48-hour turnaround.</h1>
          <p className="text-[8px] text-blue-200 mb-2.5">Honest assessment. No pushy sales pitch. We tell you exactly what needs fixing.</p>
          <div className="flex gap-2">
            <button className="bg-[#D46000] text-white text-[8.5px] font-bold px-3 py-1.5 rounded shadow-lg">Request a Free Inspection</button>
            <button className="border border-white/40 text-white text-[8px] px-2.5 py-1.5 rounded"><Phone size={8} className="inline mr-0.5" /> (309) 555-0142</button>
          </div>
        </div>
      </div>
      <div className="bg-[#1B3A6B] px-4 py-2 flex justify-between">
        {[['Proof slot','years active'],['Project photos','local work'],['Real reviews','near CTA'],['Licensed info','visible']].map(([a, b]) => (
          <div key={a} className="text-center">
            <div className="text-[8.5px] font-bold text-white">{a}</div>
            <div className="text-[6.5px] text-blue-300">{b}</div>
          </div>
        ))}
      </div>
      <div className="px-3 pt-3 pb-1">
        <div className="text-[7.5px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Recent Projects</div>
        <div className="grid grid-cols-3 gap-1.5">
          <Photo gradient="bg-gradient-to-br from-slate-700 via-slate-600 to-zinc-500" label="Roof replacement - Normal IL" className="h-[52px] rounded" src={stockImages.roofingHero} overlay="bg-black/5" />
          <Photo gradient="bg-gradient-to-br from-stone-600 via-stone-500 to-amber-800" label="Storm repair - Bloomington" className="h-[52px] rounded" src={stockImages.roofingProject} overlay="bg-black/5" />
          <Photo gradient="bg-gradient-to-br from-zinc-600 via-neutral-600 to-slate-500" label="Siding + gutters - Lexington" className="h-[52px] rounded" src={stockImages.roofingHero} overlay="bg-[#1B3A6B]/15" />
        </div>
      </div>
      <div className="mx-3 my-2 bg-amber-50 border border-amber-100 rounded-lg p-2">
        <div className="flex gap-0.5 mb-0.5">{Array(5).fill(0).map((_, i) => <Star key={i} size={8} className="fill-amber-400 text-amber-400" />)}</div>
        <p className="text-[8px] text-gray-700 leading-snug">Real review slot: place an approved Google review near the inspection CTA before publishing.</p>
        <p className="text-[7px] text-gray-400 mt-0.5">Clearly labeled demo placement</p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// EXAMPLE 2 - North Main Landscaping
// ═══════════════════════════════════════════════════════════════════════════════

function LandscapingBefore() {
  return (
    <div className="bg-white font-sans" style={{ fontSize: 11 }}>
      <div className="bg-[#2d5a1b] px-3 py-2">
        <div className="flex items-center justify-between">
          <div className="text-[13px] font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>North Main Landscaping</div>
          <div className="flex gap-2 text-[7.5px] text-green-200 flex-wrap justify-end max-w-[55%]">
            {['Home','About','Lawn Mowing','Mulching','Spring Cleanup','Fall Cleanup','Snow Removal','Hardscaping','Contact','Request Quote'].map(l => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#3d7a22] to-[#2d5a1b] px-4 py-5 text-center">
        <h1 className="text-[14px] font-semibold text-white mb-1" style={{ fontFamily: 'Georgia, serif' }}>North Main Landscaping Co.</h1>
        <p className="text-[8px] text-green-200 mb-1">Serving Bloomington-Normal and Surrounding Areas</p>
        <p className="text-[8px] text-green-300 mb-3">Residential &amp; Commercial | Licensed &amp; Insured | Free Estimates</p>
        <button className="bg-white text-[#2d5a1b] text-[8px] font-semibold px-3 py-1.5 rounded border border-green-200">View Our Services</button>
      </div>
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
        <p className="text-[9px] font-bold text-gray-600 uppercase tracking-wider text-center mb-1.5">ALL SERVICES</p>
        <p className="text-[7.5px] text-gray-500 text-center leading-loose">
          Lawn Mowing &amp; Edging · Spring &amp; Fall Cleanup · Mulching &amp; Bed Work · Fertilization · Weed Control ·
          Aeration · Overseeding · Shrub Trimming · Tree Trimming · Irrigation · Retaining Walls ·
          Patio &amp; Walkway · Landscape Design · Grading · Snow Plowing · Salting · Stump Grinding · Hydroseeding
        </p>
      </div>
      <div className="px-4 py-3 bg-white border-t border-gray-100">
        <p className="text-[8px] font-bold text-gray-700 mb-1">About Us</p>
        <p className="text-[7.5px] text-gray-400 leading-relaxed">
          North Main Landscaping has been providing quality landscaping services in the Bloomington-Normal area for over 15 years. We are committed to excellence in every project we undertake. Contact us today for a free estimate.
        </p>
      </div>
      <div className="px-4 py-2 bg-[#2d5a1b] text-center">
        <p className="text-[7px] text-green-200">📞 (309) 555-0147 &nbsp;·&nbsp; info@northmainlandscaping.com</p>
      </div>
    </div>
  );
}

function LandscapingAfter() {
  return (
    <div className="bg-[#FAFAF5] font-sans" style={{ fontSize: 11 }}>
      <div className="bg-[#FAFAF5] border-b border-[#D8E8C8] px-3 py-2.5 flex items-center justify-between">
        <img src={northMainLogo} alt="North Main Landscaping" className="h-10 w-[128px] object-contain object-left" style={{ filter: 'brightness(0) saturate(100%) invert(24%) sepia(40%) saturate(600%) hue-rotate(80deg) brightness(85%)' }} />
        <div className="flex items-center gap-2.5">
          <span className="text-[7.5px] text-[#2d5a1b]">Services</span>
          <span className="text-[7.5px] text-[#2d5a1b]">Gallery</span>
          <span className="text-[7.5px] text-[#2d5a1b]">Reviews</span>
          <button className="bg-[#1C4A1C] text-white text-[7.5px] px-2.5 py-1.5 rounded font-bold">Get a Free Quote</button>
        </div>
      </div>
      <div className="relative">
        <Photo gradient="bg-gradient-to-r from-[#0F2E0F] via-[#1C4A1C] to-[#264F1A]" overlay="bg-gradient-to-r from-[#0F2E0F]/75 via-[#1C4A1C]/45 to-transparent" className="h-[120px]" src={stockImages.landscapingHero} />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(170deg, transparent, transparent 3px, rgba(100,200,80,0.06) 3px, rgba(100,200,80,0.06) 4px)' }} />
        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-3">
          <div className="bg-[#8CC63F] text-[#0F2E0F] text-[7px] font-bold px-2 py-0.5 rounded w-fit mb-1.5 uppercase tracking-wider">Spring Cleanup - Booking Path</div>
          <h1 className="text-[17px] font-extrabold text-white leading-tight" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>Spring cleanup &amp; mulch.<br />Request your quote today.</h1>
        </div>
      </div>
      <div className="bg-white mx-3 mt-3 mb-2 rounded-lg border border-[#D8E8C8] p-2.5 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <div className="text-[8.5px] font-bold text-[#1C4A1C] uppercase tracking-wider">Spring Cleanup Package</div>
          <div className="text-[9px] font-bold text-[#1C4A1C]">From $285</div>
        </div>
        <div className="grid grid-cols-2 gap-1 mb-2">
          {['Debris &amp; leaf removal','Bed edging &amp; weeding','Fresh mulch (2 cu yd)','Shrub trim &amp; shaping','Lawn edge cleanup','Haul-away included'].map((s, i) => (
            <div key={i} className="flex items-center gap-1 text-[7.5px] text-gray-600">
              <CheckCircle2 size={8} className="text-[#5E8C3A] shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: s }} />
            </div>
          ))}
        </div>
        <button className="w-full bg-[#1C4A1C] text-white text-[8.5px] font-bold py-2 rounded">Request Spring Cleanup Quote</button>
      </div>
      <div className="px-3 pb-2">
        <div className="text-[7.5px] font-bold text-[#1C4A1C] uppercase tracking-wider mb-1.5">Before &amp; After</div>
        <div className="grid grid-cols-2 gap-2">
          <Photo gradient="bg-gradient-to-br from-yellow-900 via-amber-800 to-yellow-700" label="Before - leaf-covered beds" className="h-[50px] rounded" src={stockImages.landscapingHero} overlay="bg-amber-950/35" />
          <Photo gradient="bg-gradient-to-br from-emerald-700 via-green-600 to-lime-700" label="After - mulched &amp; edged" className="h-[50px] rounded" src={stockImages.landscapingHero} overlay="bg-emerald-900/5" />
        </div>
      </div>
      <div className="mx-3 mb-2 bg-[#F0F8E8] border border-[#D8E8C8] rounded-lg p-2">
        <div className="flex gap-0.5 mb-0.5">{Array(5).fill(0).map((_, i) => <Star key={i} size={8} className="fill-amber-400 text-amber-400" />)}</div>
        <p className="text-[8px] text-gray-700">Real review slot: use an approved local review beside the quote path, not buried at the bottom.</p>
        <p className="text-[7px] text-gray-400 mt-0.5">Clearly labeled demo placement</p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// EXAMPLE 3 - Glow House Aesthetics
// ═══════════════════════════════════════════════════════════════════════════════

function MedSpaBefore() {
  return (
    <div className="bg-white font-sans" style={{ fontSize: 11 }}>
      <div className="bg-[#d4a0c0]">
        <div className="text-center py-1 text-[8px] text-white/80">✨ Now accepting new patients ✨ (309) 555-0183</div>
        <div className="px-3 py-2 flex items-center justify-between border-t border-pink-200">
          <span className="font-bold text-[13px] text-white italic" style={{ fontFamily: 'Georgia, serif' }}>Glow House Aesthetics</span>
          <div className="flex flex-wrap gap-1.5 text-[7px] text-white/80 max-w-[55%] justify-end">
            {['Home','About','Botox','Fillers','Facials','Laser','PRP','Kybella','Morpheus8','Weight Loss','Gift Cards','Contact'].map(l => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-pink-100 to-rose-50 px-4 py-5 text-center">
        <p className="text-[9px] text-pink-400 tracking-widest mb-1" style={{ fontFamily: 'Georgia, serif' }}>✦ Beauty &amp; Wellness ✦</p>
        <h1 className="text-[14px] font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Georgia, serif' }}>Welcome to Glow House Aesthetics</h1>
        <p className="text-[8px] text-gray-500 mb-3 leading-relaxed max-w-xs mx-auto">We offer a full range of aesthetic treatments including Botox, fillers, laser hair removal, HydraFacial, Morpheus8, Kybella, PRP, weight loss, and much more.</p>
        <button className="bg-[#d4a0c0] text-white text-[8px] px-4 py-1.5 rounded-full">Book an Appointment</button>
      </div>
      <div className="px-3 py-2 border-t border-gray-100">
        <p className="text-[8px] font-bold text-gray-500 text-center uppercase tracking-wider mb-1.5">OUR TREATMENTS</p>
        <div className="grid grid-cols-4 gap-1 text-[7px] text-center text-gray-500">
          {['Botox','Juvederm','Restylane','Sculptra','Kybella','PRP Hair','HydraFacial','Morpheus8','Laser Hair','CO2 Laser','Skin Tight','BBL Photo','Weight Loss','IV Therapy','Lash Lift','Microneed'].map(t => (
            <div key={t} className="border border-pink-100 rounded p-1 bg-pink-50/50">{t}</div>
          ))}
        </div>
      </div>
      <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 text-center">
        <p className="text-[7.5px] text-gray-400">To book an appointment call us at (309) 555-0183 or send an email to appointments@glowhouse.com. We are open Monday through Friday 9am–5pm.</p>
      </div>
    </div>
  );
}

function MedSpaAfter() {
  return (
    <div className="bg-[#FAF7F4] font-sans" style={{ fontSize: 11 }}>
      <div className="bg-[#FAF7F4] border-b border-[#E8D8CE] px-3 py-2.5 flex items-center justify-between">
        <img src={glowHouseLogo} alt="Glow House Aesthetics" className="h-8 w-[128px] object-contain object-left" style={{ filter: 'brightness(0) saturate(100%) invert(12%) sepia(25%) saturate(400%) hue-rotate(290deg) brightness(80%)' }} />
        <div className="flex items-center gap-2.5">
          <span className="text-[7.5px] text-[#4A1C3A]">Treatments</span>
          <span className="text-[7.5px] text-[#4A1C3A]">Providers</span>
          <span className="text-[7.5px] text-[#4A1C3A]">Gallery</span>
          <button className="bg-[#4A1C3A] text-white text-[7.5px] px-2.5 py-1.5 rounded font-semibold tracking-wide">Book Consultation</button>
        </div>
      </div>
      <div className="relative">
        <Photo gradient="bg-gradient-to-r from-[#2E0A22] via-[#4A1C3A] to-[#6B2A52]" overlay="bg-gradient-to-r from-[#2E0A22]/85 via-[#4A1C3A]/50 to-transparent" className="h-[120px]" src={stockImages.medSpaHero} />
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(ellipse at 80% 40%, rgba(210,160,130,0.5) 0%, transparent 60%)' }} />
        <div className="absolute inset-0 flex flex-col justify-center px-4">
          <div className="bg-[#C8A882]/20 border border-[#C8A882]/40 text-[#E8D0BC] text-[7px] font-medium px-2 py-0.5 rounded-full w-fit mb-2 tracking-wider uppercase">First visit? Start here.</div>
          <h1 className="text-[16px] font-bold text-white leading-tight mb-1" style={{ fontFamily: 'Georgia, serif' }}>A consultation first.<br />No pressure. No guessing.</h1>
          <p className="text-[7.5px] text-[#E8D0BC]">New-patient consult path shown above the fold.</p>
        </div>
      </div>
      <div className="bg-[#4A1C3A] px-4 py-2 flex items-center justify-between">
        <p className="text-[7.5px] text-[#E8D0BC]">Leave with a written treatment plan, no obligation.</p>
        <button className="bg-[#C8A882] text-[#2E0A22] text-[7.5px] font-bold px-3 py-1.5 rounded shadow-sm whitespace-nowrap">Book Free Consult</button>
      </div>
      <div className="px-3 py-2.5 border-b border-[#E8D8CE]">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-[#C8A882]">
            <Photo gradient="bg-gradient-to-br from-[#D4B0A0] via-[#C8A090] to-[#B89080]" className="w-full h-full" src={stockImages.medSpaHero} overlay="bg-[#4A1C3A]/10" />
          </div>
          <div>
            <div className="text-[9px] font-bold text-[#2E0A22]">Lead Provider, NP</div>
            <div className="text-[7px] text-gray-500">Credentials and consultation focus shown clearly</div>
            <div className="flex gap-0.5 mt-0.5">{Array(5).fill(0).map((_, i) => <Star key={i} size={7} className="fill-amber-400 text-amber-400" />)}<span className="text-[7px] text-gray-400 ml-0.5">Real review slot</span></div>
          </div>
        </div>
      </div>
      <div className="px-3 py-2 border-b border-[#E8D8CE]">
        <div className="text-[7.5px] font-bold text-[#4A1C3A] uppercase tracking-wider mb-1.5">Your first visit:</div>
        <div className="space-y-1">
          {['First visit starts with a provider consult','Personalized treatment plan created','Written plan with pricing, no surprise bills'].map((s, i) => (
            <div key={i} className="flex items-start gap-1.5 text-[7.5px] text-gray-700">
              <span className="w-3.5 h-3.5 rounded-full bg-[#4A1C3A]/10 text-[#4A1C3A] font-bold flex items-center justify-center shrink-0 text-[7px]">{i+1}</span>
              {s}
            </div>
          ))}
        </div>
      </div>
      <div className="px-3 pt-2.5 pb-2">
        <div className="text-[7.5px] font-bold text-[#4A1C3A] uppercase tracking-wider mb-1.5">Popular Treatments</div>
        <div className="grid grid-cols-3 gap-1.5">
          <Photo gradient="bg-gradient-to-br from-rose-300 via-pink-200 to-rose-100" label="Botox &amp; Fillers" className="h-[44px] rounded" src={stockImages.medSpaHero} overlay="bg-[#4A1C3A]/10" />
          <Photo gradient="bg-gradient-to-br from-purple-400 via-violet-300 to-purple-200" label="Morpheus8" className="h-[44px] rounded" src={stockImages.medSpaHero} overlay="bg-[#4A1C3A]/25" />
          <Photo gradient="bg-gradient-to-br from-amber-200 via-orange-100 to-rose-100" label="HydraFacial" className="h-[44px] rounded" src={stockImages.medSpaHero} overlay="bg-[#C8A882]/15" />
        </div>
      </div>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const examples = [
  {
    id: 'heartland-roofing',
    num: '01',
    category: 'Roofing & Exteriors',
    business: 'Heartland Roofing & Siding',
    issue: 'Too many services, too many CTAs, and no storm-damage path for high-intent homeowners.',
    primaryIssue: 'Generic exterior homepage',
    mainFix: 'Storm-damage inspection path',
    recommendedPackage: 'Core Website Refresh + focused service landing page',
    packagePrice: 'Typical fit: $2,500 refresh, plus landing-page scope if needed.',
    filters: ['Home Services', 'Quote Flow', 'Trust Signals'],
    scores: [
      { label: 'Service Clarity', score: 42, status: 'Needs Fix' },
      { label: 'Quote Flow', score: 36, status: 'High Impact' },
      { label: 'Trust Signals', score: 58, status: 'Patchy' },
    ],
    before: RoofingBefore,
    after: RoofingAfter,
    beforeUrl: 'heartlandroofing-il.com',
    afterUrl: 'heartlandroofing-il.com/storm-damage',
    beforeTags: ['12-item nav', 'No storm focus', 'Three competing CTAs', 'Buried contact', 'No project photos'],
    afterTags: ['Storm-specific page', 'Single clear CTA', 'Project photo gallery', 'Trust bar visible', 'Reviews near CTA'],
    wrong: ['12 navigation items create decision paralysis','Three CTAs compete for attention','No storm damage path despite urgent search intent','Contact information is not treated like the main action'],
    changed: ['Storm-specific headline and page path','One inspection CTA repeated in the right places','Project photo area above the fold','Real-review slot placed near the conversion point'],
    why: 'After a storm, homeowners are not browsing every exterior service. They need to know if the roofer handles storm damage, looks credible, and makes inspection requests easy from a phone.',
  },
  {
    id: 'north-main-landscaping',
    num: '02',
    category: 'Landscaping & Outdoor Services',
    business: 'North Main Landscaping',
    issue: 'The current site lists too many services without giving seasonal customers a clear reason to request a quote now.',
    primaryIssue: 'Seasonal offer buried',
    mainFix: 'Spring cleanup landing page',
    recommendedPackage: 'Starter Landing Page or Core Website Refresh',
    packagePrice: 'Typical fit: $650-$1,250 landing page or $2,500 refresh.',
    filters: ['Seasonal Services', 'Quote Flow', 'Mobile Clarity'],
    scores: [
      { label: 'Service Clarity', score: 45, status: 'Needs Fix' },
      { label: 'Mobile Flow', score: 48, status: 'Blocked' },
      { label: 'Local Intent', score: 52, status: 'Seasonal Gap' },
    ],
    before: LandscapingBefore,
    after: LandscapingAfter,
    beforeUrl: 'northmainlandscaping.com',
    afterUrl: 'northmainlandscaping.com/spring-cleanup',
    beforeTags: ['18-service text wall', 'No seasonal offer', 'No before/after proof', 'CTA leads to list page', 'Contact buried'],
    afterTags: ['Seasonal urgency headline', 'Package clearly priced', 'Before/after photos', 'Quote CTA prominent', 'Local social proof'],
    wrong: ['18-service text wall with no hierarchy','No seasonal reason to act now','No proof of finished cleanup work','Quote path sends people to another list'],
    changed: ['Seasonal headline tied to spring cleanup','Package card explains what is included','Before/after photo area shows the visible result','Quote CTA stays close to the offer'],
    why: 'In spring, many landscaping searches are specific and time-sensitive. A focused seasonal page can answer the real buying question faster than a generic all-services homepage.',
  },
  {
    id: 'glow-house-aesthetics',
    num: '03',
    category: 'Med Spa & Aesthetics',
    business: 'Glow House Aesthetics',
    issue: 'The current site is treatment-heavy but does not guide first-time patients toward trust, consultation, or clarity.',
    primaryIssue: 'First visit anxiety',
    mainFix: 'Consultation-first entry page',
    recommendedPackage: 'Core Website Refresh',
    packagePrice: 'Typical fit: $2,500 refresh.',
    filters: ['Premium Services', 'Trust Signals', 'Mobile Clarity'],
    scores: [
      { label: 'Trust Signals', score: 39, status: 'Missing' },
      { label: 'Service Clarity', score: 46, status: 'Muddy' },
      { label: 'Quote Flow', score: 41, status: 'Book Path' },
    ],
    before: MedSpaBefore,
    after: MedSpaAfter,
    beforeUrl: 'glowhouse-aesthetics.com',
    afterUrl: 'glowhouse-aesthetics.com/first-visit',
    beforeTags: ['16 treatments no path', 'Booking buried in copy', 'No provider trust', 'No first-timer guidance', 'Inconsistent branding'],
    afterTags: ['First-visit framing', 'Consultation CTA above fold', 'Provider photo shown', 'Step-by-step process', 'Warm premium aesthetic'],
    wrong: ['16 treatments with no path for first-time patients','Booking is buried in copy','Provider trust is not visible early','No explanation of what happens at the first appointment'],
    changed: ['First-visit framing instead of a treatment wall','Consultation CTA above the fold','Provider and credential area near the booking path','Step-by-step visit flow before asking for a booking'],
    why: 'First-time med spa patients need confidence before they book. A consultation-first page reduces hesitation by explaining who they will meet, what happens, and how to take the next step.',
  },
];

type PortfolioExample = (typeof examples)[number];

const filterOptions = ['All', ...Array.from(new Set(examples.flatMap((example) => example.filters)))];

const lensItems = [
  {
    label: 'Trust',
    copy: 'Does the business feel credible quickly?',
    icon: ShieldCheck,
    status: 'High impact',
  },
  {
    label: 'Clarity',
    copy: 'Is it obvious what they do and who they help?',
    icon: FileSearch,
    status: 'Core fix',
  },
  {
    label: 'Mobile Flow',
    copy: 'Can someone contact them easily from a phone?',
    icon: Smartphone,
    status: 'Must work',
  },
  {
    label: 'Quote Path',
    copy: 'Is there one obvious next step?',
    icon: MousePointerClick,
    status: 'Lead driver',
  },
  {
    label: 'Local Intent',
    copy: 'Does the page match what people are searching for?',
    icon: MapPin,
    status: 'SEO fit',
  },
];

const proofPoints = [
  'Fewer choices can create a clearer contact path.',
  'Service-specific pages beat generic homepages when intent is high.',
  'Real reviews belong near the decision point, not buried at the bottom.',
  'Seasonal and first-visit pages need focused copy, not a service dump.',
];

// Shared motion wrapper for scroll reveals. It turns itself off for reduced-motion users.
function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const media = window.matchMedia(query);
    const handleChange = () => setMatches(media.matches);
    handleChange();
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
}

// Animated score rows for the hero diagnostic panel.
function ScoreRail({ label, score, status }: { label: string; score: number; status: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="text-sm font-bold text-white">{label}</span>
        <span className="rounded-full bg-[#f4cf30] px-2 py-0.5 text-[10px] font-black uppercase text-[#17130b]">
          {status}
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/15">
        <motion.div
          className="h-full rounded-full bg-[#f4cf30]"
          initial={shouldReduceMotion ? false : { width: 0 }}
          whileInView={{ width: `${score}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

function PortfolioHero({ onViewDemos }: { onViewDemos: () => void }) {
  const shouldReduceMotion = useReducedMotion();
  const scanItems = [
    { label: 'Mobile clarity', score: 38, status: 'Needs Fix' },
    { label: 'Quote flow', score: 31, status: 'Blocked' },
    { label: 'Trust signals', score: 46, status: 'Patchy' },
    { label: 'Service clarity', score: 41, status: 'Muddy' },
  ];

  return (
    <section className="relative overflow-hidden border-b-2 border-[#17130b] bg-[#17130b] px-4 pb-16 pt-28 text-white md:px-6 md:pb-20 md:pt-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(244,207,48,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(244,207,48,0.12) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      <div className="container relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#f4cf30] px-4 py-2 text-xs font-black uppercase text-[#17130b]">
            <Sparkles size={14} />
            Proof by demonstration
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-[0.98] md:text-6xl">
            See what a Jolt refresh actually fixes.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            These demo transformations show the trust, clarity, mobile, and quote-flow issues Jolt looks for when reviewing local service websites.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              type="button"
              size="lg"
              onClick={() => scrollTo('free-teardown')}
              className="h-12 rounded-lg border-2 border-[#f4cf30] bg-[#f4cf30] px-6 text-base font-bold text-[#17130b] shadow-[4px_4px_0_#000] hover:bg-[#ffe36a]"
            >
              Get a free website teardown
              <ArrowRight size={17} />
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              onClick={onViewDemos}
              className="h-12 rounded-lg border-2 border-white/30 bg-transparent px-6 text-base font-bold text-white hover:bg-white/10"
            >
              View demo transformations
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative">
            <motion.div
              aria-hidden="true"
              className="absolute -right-3 -top-4 hidden rounded-xl border-2 border-[#17130b] bg-[#f4cf30] px-4 py-2 text-xs font-black uppercase text-[#17130b] shadow-[5px_5px_0_#000] md:block"
              animate={shouldReduceMotion ? undefined : { y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              Demo scan
            </motion.div>
            <div className="rounded-3xl border-2 border-[#f4cf30] bg-[#0f0d08] p-5 shadow-[14px_14px_0_#f4cf30]">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-black uppercase text-[#f4cf30]">Website health meter</p>
                  <p className="text-sm text-white/55">Local service site preview</p>
                </div>
                <div className="grid h-20 w-20 place-items-center rounded-2xl border border-[#f4cf30]/40 bg-[#f4cf30] font-display text-4xl font-black text-[#17130b]">
                  A
                </div>
              </div>
              <div className="grid gap-3">
                {scanItems.map((item, index) => (
                  <ScoreRail key={item.label} {...item} score={item.score + index * 11} />
                ))}
              </div>
              <div className="mt-5 rounded-2xl border border-[#f4cf30]/25 bg-[#f4cf30]/10 p-4">
                <p className="text-xs font-black uppercase text-[#f4cf30]">Jolt path</p>
                <p className="mt-1 text-sm leading-relaxed text-white/80">
                  Make the service obvious, reduce choices, add real proof, and move the contact path where buyers expect it.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MiniPreview({ type }: { type: 'before' | 'after' }) {
  const after = type === 'after';
  return (
    <div className={`rounded-lg border-2 border-[#17130b] p-2 ${after ? 'bg-[#eef7df]' : 'bg-[#fff0ec]'}`}>
      <div className="mb-2 flex gap-1">
        <span className="h-2 w-2 rounded-full bg-red-400" />
        <span className="h-2 w-2 rounded-full bg-amber-400" />
        <span className="h-2 w-2 rounded-full bg-green-400" />
      </div>
      <div className={`mb-2 h-9 rounded ${after ? 'bg-[#17130b]' : 'bg-[#b9432b]'}`} />
      <div className="space-y-1">
        <div className={`h-2 rounded ${after ? 'w-5/6 bg-[#347f4f]' : 'w-full bg-[#b9432b]/50'}`} />
        <div className={`h-2 rounded ${after ? 'w-2/3 bg-[#347f4f]/70' : 'w-11/12 bg-[#b9432b]/35'}`} />
        <div className={`h-2 rounded ${after ? 'w-1/2 bg-[#f4cf30]' : 'w-10/12 bg-[#b9432b]/30'}`} />
      </div>
    </div>
  );
}

function TransformationCard({ example }: { example: PortfolioExample }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.18 }}
      className="group flex h-full flex-col rounded-2xl border-2 border-[#17130b] bg-white p-5 shadow-[8px_8px_0_#17130b]"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase text-[#b9432b]">{example.category}</p>
          <h3 className="mt-1 font-display text-2xl font-bold leading-none">{example.business}</h3>
        </div>
        <span className="rounded-full bg-[#f4cf30] px-3 py-1 text-xs font-black text-[#17130b]">{example.num}</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <MiniPreview type="before" />
        <MiniPreview type="after" />
      </div>
      <div className="mt-5 grid gap-3 text-sm">
        <div>
          <p className="text-xs font-black uppercase text-[#6d6352]">Primary issue</p>
          <p className="font-semibold">{example.primaryIssue}</p>
        </div>
        <div>
          <p className="text-xs font-black uppercase text-[#6d6352]">Main fix</p>
          <p className="font-semibold">{example.mainFix}</p>
        </div>
        <div>
          <p className="text-xs font-black uppercase text-[#6d6352]">Recommended package</p>
          <p className="font-semibold">{example.recommendedPackage}</p>
          <p className="mt-1 text-xs font-semibold leading-relaxed text-[#6d6352]">{example.packagePrice}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => document.getElementById(example.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        className="mt-6 inline-flex items-center justify-between rounded-lg border-2 border-[#17130b] bg-[#f4cf30] px-4 py-3 text-sm font-black transition-transform group-hover:translate-x-1"
      >
        View transformation
        <ArrowRight size={16} />
      </button>
    </motion.article>
  );
}

function PortfolioOverview({
  activeFilter,
  filteredExamples,
  onFilter,
}: {
  activeFilter: string;
  filteredExamples: PortfolioExample[];
  onFilter: (filter: string) => void;
}) {
  return (
    <section id="demo-transformations" className="border-b-2 border-[#17130b] bg-[#f7f0df] px-4 py-16 md:px-6 md:py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex rounded-full bg-[#17130b] px-3 py-1 text-xs font-black uppercase text-[#f4cf30]">
              Demo gallery
            </p>
            <h2 className="font-display text-3xl font-bold leading-none md:text-5xl">Three ways messy websites lose good leads.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => onFilter(filter)}
                data-testid={`filter-${filter.toLowerCase().replaceAll(' ', '-')}`}
                className={`rounded-full border-2 border-[#17130b] px-3 py-1.5 text-xs font-black uppercase transition-colors ${
                  activeFilter === filter ? 'bg-[#17130b] text-[#f4cf30]' : 'bg-white text-[#17130b] hover:bg-[#f4cf30]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {filteredExamples.map((example) => (
            <TransformationCard key={example.id} example={example} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterFrame({ example }: { example: PortfolioExample }) {
  const [mobileView, setMobileView] = useState<'before' | 'after'>('after');
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const BeforeComp = example.before;
  const AfterComp = example.after;

  if (!isDesktop) {
    return (
      <div>
        <div className="mb-4 flex rounded-xl border-2 border-[#17130b] bg-[#17130b] p-1">
          {(['before', 'after'] as const).map((view) => (
            <button
              key={view}
              type="button"
              onClick={() => setMobileView(view)}
              className={`flex-1 rounded-lg px-3 py-2 text-sm font-black capitalize ${
                mobileView === view ? 'bg-[#f4cf30] text-[#17130b]' : 'text-white/70'
              }`}
            >
              {view}
            </button>
          ))}
        </div>
        {mobileView === 'before' ? (
          <BrowserWindow url={example.beforeUrl} bodyClassName="h-[380px] overflow-hidden">
            <BeforeComp />
          </BrowserWindow>
        ) : (
          <BrowserWindow url={example.afterUrl} bodyClassName="h-[380px] overflow-hidden">
            <AfterComp />
          </BrowserWindow>
        )}
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2">
      <div>
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-100 px-3 py-1 text-xs font-black uppercase text-red-700">
          <X size={11} />
          Before Jolt
        </div>
        <BrowserWindow url={example.beforeUrl} bodyClassName="h-[430px] overflow-hidden">
          <BeforeComp />
        </BrowserWindow>
      </div>
      <div>
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-100 px-3 py-1 text-xs font-black uppercase text-green-700">
          <CheckCircle2 size={11} />
          After Jolt
        </div>
        <BrowserWindow url={example.afterUrl} bodyClassName="h-[430px] overflow-hidden">
          <AfterComp />
        </BrowserWindow>
      </div>
    </div>
  );
}

function CaseStudyModule({
  example,
  isExpanded,
  onToggleExpanded,
}: {
  example: PortfolioExample;
  isExpanded: boolean;
  onToggleExpanded: () => void;
}) {
  return (
    <Reveal>
      <article id={example.id} className="scroll-mt-24 rounded-[1.5rem] border-2 border-[#17130b] bg-white p-5 shadow-[10px_10px_0_#17130b] md:p-8">
        <div className="mb-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-[#f4cf30] px-3 py-1 text-xs font-black uppercase text-[#17130b]">
              {example.category}
            </p>
            <h2 className="font-display text-3xl font-bold leading-none md:text-5xl">{example.business}</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5f5748]">{example.issue}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {example.scores.map((score) => (
              <div key={score.label} className="rounded-xl border-2 border-[#17130b] bg-[#f7f0df] p-4">
                <p className="text-xs font-black uppercase text-[#6d6352]">{score.label}</p>
                <p className="mt-2 text-lg font-black">{score.status}</p>
              </div>
            ))}
          </div>
        </div>

        <BeforeAfterFrame example={example} />

        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1fr_0.9fr]">
          <div className="rounded-2xl border-2 border-[#17130b] bg-[#fff4ef] p-5">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-black uppercase text-[#b9432b]">
              <X size={14} />
              What was wrong
            </h3>
            <ul className="space-y-3">
              {example.wrong.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-[#5f5748]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b9432b]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-[#17130b] bg-[#eef7df] p-5">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-black uppercase text-[#347f4f]">
              <CheckCircle2 size={14} />
              What changed
            </h3>
            <ul className="space-y-3">
              {example.changed.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-[#5f5748]">
                  <CheckCircle2 size={14} className="mt-1 shrink-0 text-[#347f4f]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-[#17130b] bg-[#17130b] p-5 text-white">
            <h3 className="mb-3 text-sm font-black uppercase text-[#f4cf30]">Why it matters</h3>
            <p className="text-sm leading-relaxed text-white/70">{example.why}</p>
            <div className="mt-5 rounded-xl border border-[#f4cf30]/25 bg-[#f4cf30]/10 p-4">
              <p className="text-xs font-black uppercase text-[#f4cf30]">Recommended package</p>
              <p className="mt-1 text-sm font-bold">{example.recommendedPackage}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/60">{example.packagePrice}</p>
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button
            type="button"
            onClick={() => scrollTo('free-teardown')}
            className="h-12 rounded-lg border-2 border-[#17130b] bg-[#f4cf30] px-5 font-black text-[#17130b] shadow-[4px_4px_0_#17130b]"
          >
            Want a teardown like this?
            <ArrowRight size={16} />
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={onToggleExpanded}
            className="h-12 rounded-lg border-2 border-[#17130b] bg-white px-5 font-black text-[#17130b]"
          >
            {isExpanded ? 'Close scrollable preview' : 'Open scrollable preview'}
          </Button>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <InlinePreview
              after={example.after}
              afterUrl={example.afterUrl}
              before={example.before}
              beforeUrl={example.beforeUrl}
              business={example.business}
              onClose={onToggleExpanded}
            />
          )}
        </AnimatePresence>
      </article>
    </Reveal>
  );
}

function JoltLens() {
  return (
    <section className="border-y-2 border-[#17130b] bg-[#17130b] px-4 py-16 text-white md:px-6 md:py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="mb-3 inline-flex rounded-full bg-[#f4cf30] px-3 py-1 text-xs font-black uppercase text-[#17130b]">
              The Jolt lens
            </p>
            <h2 className="font-display text-3xl font-bold leading-none md:text-5xl">Every demo is reviewed like an audit tool, not a design mood board.</h2>
            <p className="mt-5 text-base leading-relaxed text-white/65">
              The visual polish matters, but the first question is simpler: can a real buyer trust the business and take the next step without fighting the page?
            </p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {lensItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.label} delay={index * 0.04}>
                  <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition-colors hover:bg-white/[0.09]">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#f4cf30] text-[#17130b]">
                        <Icon size={21} />
                      </div>
                      <span className="rounded-full border border-[#f4cf30]/30 px-3 py-1 text-[10px] font-black uppercase text-[#f4cf30]">
                        {item.status}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold">{item.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{item.copy}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatExamplesProve() {
  return (
    <section className="bg-white px-4 py-16 md:px-6 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 inline-flex rounded-full bg-[#17130b] px-3 py-1 text-xs font-black uppercase text-[#f4cf30]">
            What these examples prove
          </p>
          <h2 className="font-display text-3xl font-bold leading-none md:text-5xl">The examples are demo. The problems are real.</h2>
          <p className="mt-5 text-base leading-relaxed text-[#5f5748]">
            Local service websites often lose leads because visitors have to work too hard to find the right service, trust the business, or request a quote.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((point, index) => (
            <Reveal key={point} delay={index * 0.04}>
              <div className="h-full rounded-2xl border-2 border-[#17130b] bg-[#f7f0df] p-5 shadow-[6px_6px_0_#17130b]">
                <div className="mb-5 grid h-10 w-10 place-items-center rounded-lg bg-[#f4cf30] font-display text-2xl font-bold">
                  {index + 1}
                </div>
                <p className="text-sm font-semibold leading-relaxed">{point}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCTA({ onViewPackages }: { onViewPackages: () => void }) {
  return (
    <section className="border-y-2 border-[#17130b] bg-[#f7f0df] px-4 py-16 md:px-6 md:py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="rounded-[1.5rem] border-2 border-[#17130b] bg-[#17130b] p-8 text-center text-white shadow-[10px_10px_0_#f4cf30] md:p-12">
          <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[#f4cf30] text-[#17130b]">
            <Zap size={28} />
          </div>
          <h2 className="font-display text-3xl font-bold leading-none md:text-5xl">Want to see what Jolt would fix on your site?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70">
            Send over your current website. I will review it through the same lens: trust, clarity, mobile experience, and quote flow.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm font-semibold leading-relaxed text-[#f4cf30]">
            Most demo fixes map to a $650-$1,250 landing page or a $2,500 Core Website Refresh.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              type="button"
              size="lg"
              onClick={() => scrollTo('free-teardown')}
              className="h-12 rounded-lg border-2 border-[#f4cf30] bg-[#f4cf30] px-6 text-base font-black text-[#17130b] hover:bg-[#ffe36a]"
            >
              Get a free website teardown
              <ArrowRight size={16} />
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              onClick={onViewPackages}
              className="h-12 rounded-lg border-2 border-white/35 bg-transparent px-6 text-base font-black text-white hover:bg-white/10"
            >
              View packages
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main page

export default function Portfolio() {
  const [, setLocation] = useLocation();
  const [expandedIdx, setExpandedIdx] = useState<null | number>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredExamples =
    activeFilter === 'All' ? examples : examples.filter((example) => example.filters.includes(activeFilter));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f0df] text-[#17130b] font-sans">
      <Header />

      <main>
        <PortfolioHero onViewDemos={() => scrollTo('demo-transformations')} />
        <PortfolioOverview
          activeFilter={activeFilter}
          filteredExamples={filteredExamples}
          onFilter={setActiveFilter}
        />
        <section className="px-4 py-16 md:px-6 md:py-24">
          <div className="container mx-auto max-w-7xl space-y-16">
            {filteredExamples.map((example, index) => (
              <CaseStudyModule
                key={example.id}
                example={example}
                isExpanded={expandedIdx === index}
                onToggleExpanded={() => setExpandedIdx(expandedIdx === index ? null : index)}
              />
            ))}
          </div>
        </section>
        <JoltLens />
        <WhatExamplesProve />
        <PortfolioCTA
          onViewPackages={() => {
            setLocation('/');
            window.setTimeout(() => scrollTo('packages'), 80);
          }}
        />

        <TeardownForm />
      </main>

      <Footer />
    </div>
  );
}
