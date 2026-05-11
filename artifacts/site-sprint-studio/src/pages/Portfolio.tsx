import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, X, CheckCircle2, Star, Phone } from 'lucide-react';
import { useLocation } from 'wouter';
import { scrollTo } from '@/lib/scrollTo';
import { Button } from '@/components/ui/button';
import { BrandMark } from '@/components/BrandMark';
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

function BrowserWindow({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden border border-border shadow-xl flex flex-col">
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
      <div className="h-[420px] overflow-hidden">{children}</div>
    </div>
  );
}

// ─── Annotation tag ───────────────────────────────────────────────────────────

function Tag({ label, bad }: { label: string; bad?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full border ${
      bad ? 'bg-red-50 text-red-600 border-red-200' : 'bg-green-50 text-green-700 border-green-200'
    }`}>
      {bad ? <X size={8} /> : <CheckCircle2 size={8} />}
      {label}
    </span>
  );
}

// ─── Photo simulation helper ──────────────────────────────────────────────────
// Creates a gradient block that reads as a photo at small scale

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
// EXAMPLE 1 — Heartland Roofing & Siding
// Brand: Navy #1B3A6B + amber #D46000 | Bold, trustworthy contractor
// ═══════════════════════════════════════════════════════════════════════════════

function RoofingBefore() {
  return (
    <div className="bg-[#f5f0e8] font-sans text-gray-800" style={{ fontSize: 11 }}>
      <div className="bg-[#cc3300] text-white text-center py-1 text-[8px] font-bold">
        ☎ CALL US TODAY! (309) 555-0142 &nbsp;|&nbsp; SERVING BLOOMINGTON-NORMAL SINCE 1994
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
          We are a family-owned exterior company serving Bloomington, Normal, and surrounding communities. From roofing and siding to gutters, windows, decks and more — we do it all!
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
      {/* Nav — clean navy brand */}
      <div className="bg-[#1B3A6B] px-3 py-2.5 flex items-center justify-between">
        <img
          src={heartlandLogo}
          alt="Heartland Roofing"
          className="h-9 w-[126px] object-contain object-left"
          style={{ filter: 'invert(1)' }}
        />
        <div className="flex items-center gap-3">
          <span className="text-[8px] text-blue-200">Storm Damage</span>
          <span className="text-[8px] text-blue-200">Services</span>
          <span className="text-[8px] text-blue-200">Reviews</span>
          <button className="bg-[#D46000] text-white text-[8px] px-2.5 py-1.5 rounded font-bold shadow">
            Free Inspection
          </button>
        </div>
      </div>
      {/* Hero — full photo block */}
      <div className="relative">
        <Photo
          gradient="bg-gradient-to-r from-[#0F2340] via-[#1B3A6B] to-[#0F2340]"
          overlay="bg-gradient-to-r from-[#071424]/75 via-[#1B3A6B]/55 to-black/20"
          className="h-[130px]"
          src={stockImages.roofingHero}
        />
        <div className="absolute inset-0 flex flex-col justify-center px-4 py-3">
          <div className="bg-[#D46000] text-white text-[7px] font-bold px-2 py-0.5 rounded w-fit mb-2 uppercase tracking-wider">
            Storm Damage Specialists — McLean County
          </div>
          <h1 className="text-[17px] font-extrabold text-white leading-tight mb-1" style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '-0.01em' }}>
            Free roof inspection.<br />48-hour turnaround.
          </h1>
          <p className="text-[8px] text-blue-200 mb-2.5">Honest assessment. No pushy sales pitch. We tell you exactly what needs fixing.</p>
          <div className="flex gap-2">
            <button className="bg-[#D46000] text-white text-[8.5px] font-bold px-3 py-1.5 rounded shadow-lg">
              Request a Free Inspection
            </button>
            <button className="border border-white/40 text-white text-[8px] px-2.5 py-1.5 rounded">
              <Phone size={8} className="inline mr-0.5" /> (309) 555-0142
            </button>
          </div>
        </div>
      </div>
      {/* Trust bar */}
      <div className="bg-[#1B3A6B] px-4 py-2 flex justify-between">
        {[['30 yrs','in business'],['200+','local projects'],['5.0 ★','94 reviews'],['Licensed','& insured']].map(([a, b]) => (
          <div key={a} className="text-center">
            <div className="text-[8.5px] font-bold text-white">{a}</div>
            <div className="text-[6.5px] text-blue-300">{b}</div>
          </div>
        ))}
      </div>
      {/* Photo grid — recent projects */}
      <div className="px-3 pt-3 pb-1">
        <div className="text-[7.5px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Recent Projects</div>
        <div className="grid grid-cols-3 gap-1.5">
          <Photo gradient="bg-gradient-to-br from-slate-700 via-slate-600 to-zinc-500" label="Roof replacement · Normal IL" className="h-[52px] rounded" src={stockImages.roofingHero} overlay="bg-black/5" />
          <Photo gradient="bg-gradient-to-br from-stone-600 via-stone-500 to-amber-800" label="Storm repair · Bloomington" className="h-[52px] rounded" src={stockImages.roofingProject} overlay="bg-black/5" />
          <Photo gradient="bg-gradient-to-br from-zinc-600 via-neutral-600 to-slate-500" label="Siding + gutters · Lexington" className="h-[52px] rounded" src={stockImages.roofingHero} overlay="bg-[#1B3A6B]/15" />
        </div>
      </div>
      {/* Review */}
      <div className="mx-3 my-2 bg-amber-50 border border-amber-100 rounded-lg p-2">
        <div className="flex gap-0.5 mb-0.5">{Array(5).fill(0).map((_, i) => <Star key={i} size={8} className="fill-amber-400 text-amber-400" />)}</div>
        <p className="text-[8px] text-gray-700 italic leading-snug">"Quick inspection, honest quote, done in one day. Best contractor experience I have had."</p>
        <p className="text-[7px] text-gray-400 mt-0.5">— Jason M., Normal IL · Google Review</p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// EXAMPLE 2 — North Main Landscaping
// Brand: Deep green #1C4A1C + sage #5E8C3A + warm cream | Craft, natural, neighborhood
// ═══════════════════════════════════════════════════════════════════════════════

function LandscapingBefore() {
  return (
    <div className="bg-white font-sans" style={{ fontSize: 11 }}>
      <div className="bg-[#2d5a1b] px-3 py-2">
        <div className="flex items-center justify-between">
          <div className="text-[13px] font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
            North Main Landscaping
          </div>
          <div className="flex gap-2 text-[7.5px] text-green-200 flex-wrap justify-end max-w-[55%]">
            {['Home','About','Lawn Mowing','Mulching','Spring Cleanup','Fall Cleanup','Snow Removal','Hardscaping','Contact','Request Quote'].map(l => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#3d7a22] to-[#2d5a1b] px-4 py-5 text-center">
        <h1 className="text-[14px] font-semibold text-white mb-1" style={{ fontFamily: 'Georgia, serif' }}>
          North Main Landscaping Co.
        </h1>
        <p className="text-[8px] text-green-200 mb-1">Serving Bloomington-Normal and Surrounding Areas</p>
        <p className="text-[8px] text-green-300 mb-3">Residential &amp; Commercial | Licensed &amp; Insured | Free Estimates</p>
        <button className="bg-white text-[#2d5a1b] text-[8px] font-semibold px-3 py-1.5 rounded border border-green-200">
          View Our Services
        </button>
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
      {/* Nav — cream with dark green logo */}
      <div className="bg-[#FAFAF5] border-b border-[#D8E8C8] px-3 py-2.5 flex items-center justify-between">
        <img
          src={northMainLogo}
          alt="North Main Landscaping"
          className="h-10 w-[128px] object-contain object-left"
          style={{
            filter: 'brightness(0) saturate(100%) invert(24%) sepia(40%) saturate(600%) hue-rotate(80deg) brightness(85%)',
          }}
        />
        <div className="flex items-center gap-2.5">
          <span className="text-[7.5px] text-[#2d5a1b]">Services</span>
          <span className="text-[7.5px] text-[#2d5a1b]">Gallery</span>
          <span className="text-[7.5px] text-[#2d5a1b]">Reviews</span>
          <button className="bg-[#1C4A1C] text-white text-[7.5px] px-2.5 py-1.5 rounded font-bold">
            Get a Free Quote
          </button>
        </div>
      </div>
      {/* Hero — lush landscape photo */}
      <div className="relative">
        <Photo
          gradient="bg-gradient-to-r from-[#0F2E0F] via-[#1C4A1C] to-[#264F1A]"
          overlay="bg-gradient-to-r from-[#0F2E0F]/75 via-[#1C4A1C]/45 to-transparent"
          className="h-[120px]"
          src={stockImages.landscapingHero}
        />
        {/* Simulated lawn texture overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'repeating-linear-gradient(170deg, transparent, transparent 3px, rgba(100,200,80,0.06) 3px, rgba(100,200,80,0.06) 4px)'
        }} />
        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-3">
          <div className="bg-[#8CC63F] text-[#0F2E0F] text-[7px] font-bold px-2 py-0.5 rounded w-fit mb-1.5 uppercase tracking-wider">
            Spring Cleanup — Booking Now
          </div>
          <h1 className="text-[17px] font-extrabold text-white leading-tight" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
            Spring cleanup &amp; mulch.<br />Request your quote today.
          </h1>
        </div>
      </div>
      {/* Package card */}
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
        <button className="w-full bg-[#1C4A1C] text-white text-[8.5px] font-bold py-2 rounded">
          Request Spring Cleanup Quote
        </button>
      </div>
      {/* Before/after photo proof */}
      <div className="px-3 pb-2">
        <div className="text-[7.5px] font-bold text-[#1C4A1C] uppercase tracking-wider mb-1.5">Before &amp; After</div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Photo
              gradient="bg-gradient-to-br from-yellow-900 via-amber-800 to-yellow-700"
              label="Before — leaf-covered beds"
              className="h-[50px] rounded"
              src={stockImages.landscapingHero}
              overlay="bg-amber-950/35"
            />
          </div>
          <div>
            <Photo
              gradient="bg-gradient-to-br from-emerald-700 via-green-600 to-lime-700"
              label="After — mulched &amp; edged"
              className="h-[50px] rounded"
              src={stockImages.landscapingHero}
              overlay="bg-emerald-900/5"
            />
          </div>
        </div>
      </div>
      {/* Review */}
      <div className="mx-3 mb-2 bg-[#F0F8E8] border border-[#D8E8C8] rounded-lg p-2">
        <div className="flex gap-0.5 mb-0.5">{Array(5).fill(0).map((_, i) => <Star key={i} size={8} className="fill-amber-400 text-amber-400" />)}</div>
        <p className="text-[8px] text-gray-700 italic">"They did our whole yard in one morning. Looks brand new every spring."</p>
        <p className="text-[7px] text-gray-400 mt-0.5">— Linda K., Bloomington IL · Google Review</p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// EXAMPLE 3 — Glow House Aesthetics
// Brand: Warm champagne #C8A882 + deep plum #4A1C3A | Luxury, elevated, warm
// ═══════════════════════════════════════════════════════════════════════════════

function MedSpaBefore() {
  return (
    <div className="bg-white font-sans" style={{ fontSize: 11 }}>
      <div className="bg-[#d4a0c0]">
        <div className="text-center py-1 text-[8px] text-white/80">✨ Now accepting new patients ✨ (309) 555-0183</div>
        <div className="px-3 py-2 flex items-center justify-between border-t border-pink-200">
          <span className="font-bold text-[13px] text-white italic" style={{ fontFamily: 'Georgia, serif' }}>
            Glow House Aesthetics
          </span>
          <div className="flex flex-wrap gap-1.5 text-[7px] text-white/80 max-w-[55%] justify-end">
            {['Home','About','Botox','Fillers','Facials','Laser','PRP','Kybella','Morpheus8','Weight Loss','Gift Cards','Contact'].map(l => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-pink-100 to-rose-50 px-4 py-5 text-center">
        <p className="text-[9px] text-pink-400 tracking-widest mb-1" style={{ fontFamily: 'Georgia, serif' }}>✦ Beauty &amp; Wellness ✦</p>
        <h1 className="text-[14px] font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
          Welcome to Glow House Aesthetics
        </h1>
        <p className="text-[8px] text-gray-500 mb-3 leading-relaxed max-w-xs mx-auto">
          We offer a full range of aesthetic treatments including Botox, fillers, laser hair removal, HydraFacial, Morpheus8, Kybella, PRP, weight loss, and much more.
        </p>
        <button className="bg-[#d4a0c0] text-white text-[8px] px-4 py-1.5 rounded-full">
          Book an Appointment
        </button>
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
        <p className="text-[7.5px] text-gray-400">To book an appointment call us at (309) 555-0183 or send an email to appointments@glowhouse.com. We are open Monday through Friday 9am–5pm. Allow 24 hours for email responses.</p>
      </div>
    </div>
  );
}

function MedSpaAfter() {
  return (
    <div className="bg-[#FAF7F4] font-sans" style={{ fontSize: 11 }}>
      {/* Nav — warm cream, elegant */}
      <div className="bg-[#FAF7F4] border-b border-[#E8D8CE] px-3 py-2.5 flex items-center justify-between">
        <img
          src={glowHouseLogo}
          alt="Glow House Aesthetics"
          className="h-8 w-[128px] object-contain object-left"
          style={{
            filter: 'brightness(0) saturate(100%) invert(12%) sepia(25%) saturate(400%) hue-rotate(290deg) brightness(80%)',
          }}
        />
        <div className="flex items-center gap-2.5">
          <span className="text-[7.5px] text-[#4A1C3A]">Treatments</span>
          <span className="text-[7.5px] text-[#4A1C3A]">Providers</span>
          <span className="text-[7.5px] text-[#4A1C3A]">Gallery</span>
          <button className="bg-[#4A1C3A] text-white text-[7.5px] px-2.5 py-1.5 rounded font-semibold tracking-wide">
            Book Consultation
          </button>
        </div>
      </div>
      {/* Hero — warm spa photo */}
      <div className="relative">
        <Photo
          gradient="bg-gradient-to-r from-[#2E0A22] via-[#4A1C3A] to-[#6B2A52]"
          overlay="bg-gradient-to-r from-[#2E0A22]/85 via-[#4A1C3A]/50 to-transparent"
          className="h-[120px]"
          src={stockImages.medSpaHero}
        />
        {/* Warm light simulation */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: 'radial-gradient(ellipse at 80% 40%, rgba(210,160,130,0.5) 0%, transparent 60%)'
        }} />
        <div className="absolute inset-0 flex flex-col justify-center px-4">
          <div className="bg-[#C8A882]/20 border border-[#C8A882]/40 text-[#E8D0BC] text-[7px] font-medium px-2 py-0.5 rounded-full w-fit mb-2 tracking-wider uppercase">
            First visit? Start here.
          </div>
          <h1 className="text-[16px] font-bold text-white leading-tight mb-1" style={{ fontFamily: 'Georgia, serif' }}>
            A consultation first.<br />No pressure. No guessing.
          </h1>
          <p className="text-[7.5px] text-[#E8D0BC]">30-min new patient consult — always complimentary.</p>
        </div>
      </div>
      {/* CTA strip */}
      <div className="bg-[#4A1C3A] px-4 py-2 flex items-center justify-between">
        <p className="text-[7.5px] text-[#E8D0BC]">Leave with a written treatment plan, no obligation.</p>
        <button className="bg-[#C8A882] text-[#2E0A22] text-[7.5px] font-bold px-3 py-1.5 rounded shadow-sm whitespace-nowrap">
          Book Free Consult
        </button>
      </div>
      {/* Provider bio */}
      <div className="px-3 py-2.5 border-b border-[#E8D8CE]">
        <div className="flex items-center gap-3">
          {/* Simulated provider portrait */}
          <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-[#C8A882]">
            <Photo
              gradient="bg-gradient-to-br from-[#D4B0A0] via-[#C8A090] to-[#B89080]"
              className="w-full h-full"
              src={stockImages.medSpaHero}
              overlay="bg-[#4A1C3A]/10"
            />
          </div>
          <div>
            <div className="text-[9px] font-bold text-[#2E0A22]">Ashley K., NP — Lead Provider</div>
            <div className="text-[7px] text-gray-500">8 yrs aesthetics · 400+ patients · Board Certified</div>
            <div className="flex gap-0.5 mt-0.5">{Array(5).fill(0).map((_, i) => <Star key={i} size={7} className="fill-amber-400 text-amber-400" />)}<span className="text-[7px] text-gray-400 ml-0.5">4.9 (112 reviews)</span></div>
          </div>
        </div>
      </div>
      {/* What to expect */}
      <div className="px-3 py-2 border-b border-[#E8D8CE]">
        <div className="text-[7.5px] font-bold text-[#4A1C3A] uppercase tracking-wider mb-1.5">Your first visit:</div>
        <div className="space-y-1">
          {['30-min skin assessment with Ashley','Personalized treatment plan created','Written plan with pricing — no surprise bills'].map((s, i) => (
            <div key={i} className="flex items-start gap-1.5 text-[7.5px] text-gray-700">
              <span className="w-3.5 h-3.5 rounded-full bg-[#4A1C3A]/10 text-[#4A1C3A] font-bold flex items-center justify-center shrink-0 text-[7px]">{i+1}</span>
              {s}
            </div>
          ))}
        </div>
      </div>
      {/* Treatment photo grid */}
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
    num: '01',
    category: 'Roofing & Exteriors',
    business: 'Heartland Roofing & Siding',
    before: RoofingBefore,
    after: RoofingAfter,
    beforeUrl: 'heartlandroofing-il.com',
    afterUrl: 'heartlandroofing-il.com/storm-damage',
    beforeTags: ['12-item nav', 'No storm focus', 'Three competing CTAs', 'Buried contact', 'No project photos'],
    afterTags: ['Storm-specific page', 'Single clear CTA', 'Project photo gallery', 'Trust bar visible', 'Reviews near CTA'],
    wrong: [
      'Homepage headline says "Welcome" with no customer benefit',
      '12 navigation items create decision paralysis',
      'Three CTAs compete for attention and all lead to generic pages',
      'No storm damage or insurance content despite that being peak demand',
      'Contact info buried — no click-to-call above the fold',
    ],
    changed: [
      'Headline targets storm damage specifically to match high-intent searches',
      'Single "Request Inspection" CTA in nav, hero, and CTA strip',
      'Photo grid shows three completed local projects above the fold',
      'Trust bar shows years in business, project count, and review score',
      'Customer review appears directly before the conversion point',
    ],
    why: 'After a storm, homeowners search with urgency. A focused page that speaks to that moment and makes requesting an inspection effortless converts significantly better than a generic homepage with a buried phone number.',
  },
  {
    num: '02',
    category: 'Landscaping & Outdoor Services',
    business: 'North Main Landscaping',
    before: LandscapingBefore,
    after: LandscapingAfter,
    beforeUrl: 'northmainlandscaping.com',
    afterUrl: 'northmainlandscaping.com/spring-cleanup',
    beforeTags: ['18-service text wall', 'No seasonal offer', 'No before/after proof', 'CTA leads to list page', 'Contact buried'],
    afterTags: ['Seasonal urgency headline', 'Package clearly priced', 'Before/after photos', 'Quote CTA prominent', 'Local social proof'],
    wrong: [
      'Homepage lists 18 services in a comma-separated paragraph with no hierarchy',
      'No seasonal messaging — same page in March and October',
      'No photos showing what a completed cleanup actually looks like',
      '"View Our Services" CTA leads to another list, not a quote flow',
      'Contact details only in the footer with no quick quote path',
    ],
    changed: [
      'Seasonal headline creates real urgency for spring cleanup specifically',
      'Package card shows exactly what is included and a starting price',
      'Before/after photo pair shows the transformation customers are buying',
      '"Request Spring Cleanup Quote" CTA inside the package card and nav',
      'Local customer review near the conversion point builds confidence',
    ],
    why: 'In spring, most landscaping searches are looking for one thing: someone to come handle the yard. A seasonal page that names what is included, shows before/after proof, and makes quoting easy wins more business than an all-services homepage.',
  },
  {
    num: '03',
    category: 'Med Spa & Aesthetics',
    business: 'Glow House Aesthetics',
    before: MedSpaBefore,
    after: MedSpaAfter,
    beforeUrl: 'glowhouse-aesthetics.com',
    afterUrl: 'glowhouse-aesthetics.com/first-visit',
    beforeTags: ['16 treatments no path', 'Booking buried in copy', 'No provider trust', 'No first-timer guidance', 'Inconsistent branding'],
    afterTags: ['First-visit framing', 'Consultation CTA above fold', 'Provider photo shown', 'Step-by-step process', 'Warm premium aesthetic'],
    wrong: [
      '16 treatments in a grid with no guidance for first-time patients',
      'Booking requires calling or emailing — buried in a footer paragraph',
      'No provider photo, name, or credentials visible anywhere on the page',
      'No explanation of what to expect at a first appointment',
      'Inconsistent pink palette feels low-budget despite a premium service price',
    ],
    changed: [
      '"First visit? Start here." speaks immediately to new patients who need context',
      'Book Consultation button in nav, hero, and CTA strip — no hunting required',
      'Provider portrait, name, credentials, and review score shown before the CTA',
      'Three-step walkthrough removes first-visit anxiety before asking for a booking',
      'Deep plum + champagne palette signals premium without feeling cold or clinical',
    ],
    why: 'First-time med spa patients research for weeks before booking. What tips them is trust — do they know who they are seeing and what will happen? A consultation-first page that answers those questions converts far better than a treatment menu.',
  },
];

const improvements = [
  'Clearer service offers',
  'Stronger calls to action',
  'Mobile-first layout',
  'Better trust signals',
  'Real photo proof',
  'Service-specific pages',
  'Simpler quote request flow',
  'Local, seasonal messaging',
];

// ─── Main page ────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setLocation('/')}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            <BrandMark />
          </button>
          <button
            type="button"
            onClick={() => setLocation('/')}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            <ArrowLeft size={15} />
            Back to main site
          </button>
        </div>
      </header>

      <section className="pt-14 pb-12 md:pt-20 md:pb-16 px-4 md:px-6 border-b-4 border-foreground bg-foreground text-background">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 leading-none">
            Website refreshes for local service businesses.
          </h1>
          <p className="text-lg text-background/70 leading-relaxed">
            Three before-and-after examples showing what a more focused, conversion-ready website looks like — and what made the original fall short.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl space-y-28">
          {examples.map((ex, idx) => {
            const BeforeComp = ex.before;
            const AfterComp = ex.after;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-5xl font-display font-bold text-border select-none">0{idx + 1}</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{ex.category}</p>
                    <h2 className="text-2xl md:text-3xl font-display font-bold">{ex.business}</h2>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 bg-red-100 text-red-700 border border-red-200 text-xs font-bold px-3 py-1 rounded-full">
                        <X size={11} /> Before
                      </span>
                    </div>
                    <BrowserWindow url={ex.beforeUrl}>
                      <BeforeComp />
                    </BrowserWindow>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {ex.beforeTags.map((t, i) => <Tag key={i} label={t} bad />)}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 border border-green-200 text-xs font-bold px-3 py-1 rounded-full">
                        <CheckCircle2 size={11} /> After
                      </span>
                    </div>
                    <BrowserWindow url={ex.afterUrl}>
                      <AfterComp />
                    </BrowserWindow>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {ex.afterTags.map((t, i) => <Tag key={i} label={t} />)}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 bg-card border-2 border-foreground shadow-[8px_8px_0_hsl(var(--foreground))] p-6">
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

      <section className="py-16 md:py-20 px-4 md:px-6 bg-primary border-y-4 border-foreground">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-3 leading-none">What I'm usually improving</h2>
            <p className="text-foreground/70">The same problems show up on most local service sites.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {improvements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card border-2 border-foreground p-4 shadow-[5px_5px_0_hsl(var(--foreground))] flex items-start gap-3"
              >
                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6 bg-foreground text-background border-y-4 border-primary">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Want this applied to your website?
          </h2>
          <p className="text-background/70 text-lg mb-8 leading-relaxed">
            If your business does solid work but your website feels dated, unclear, or hard to navigate, send it over. I'll review it through the lens of trust, clarity, mobile experience, and lead generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              type="button"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base h-12 font-semibold border-primary"
              onClick={() => { setLocation('/'); setTimeout(() => scrollTo('free-teardown'), 100); }}
            >
              Get a free site review
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              className="border-background/30 text-background hover:bg-background/10 text-base h-12"
              onClick={() => setLocation('/')}
            >
              Back to main site
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 md:px-6 border-t border-border">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Jolt. All rights reserved.</p>
          <a href="mailto:hello@joltwebsites.com" className="hover:text-foreground transition-colors">
            hello@joltwebsites.com
          </a>
        </div>
      </footer>
    </div>
  );
}
