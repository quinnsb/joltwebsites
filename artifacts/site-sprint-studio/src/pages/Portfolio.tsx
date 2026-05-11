import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, X, CheckCircle2, Star, Phone, MapPin, Clock, Shield, Award } from 'lucide-react';
import { useLocation } from 'wouter';
import { scrollTo } from '@/lib/scrollTo';
import { Button } from '@/components/ui/button';

// ─── Browser window chrome ────────────────────────────────────────────────────

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
      {/* Fixed-height viewport — same for before and after */}
      <div className="h-[400px] overflow-hidden">{children}</div>
    </div>
  );
}

// ─── Annotation badge ─────────────────────────────────────────────────────────

function Tag({ label, bad }: { label: string; bad?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full border ${
      bad
        ? 'bg-red-50 text-red-600 border-red-200'
        : 'bg-green-50 text-green-700 border-green-200'
    }`}>
      {bad ? <X size={8} /> : <CheckCircle2 size={8} />}
      {label}
    </span>
  );
}

// ─── EXAMPLE 1 ─ Heartland Roofing & Siding (BEFORE) ─────────────────────────

function RoofingBefore() {
  return (
    <div className="bg-[#f5f0e8] font-sans text-gray-800" style={{ fontSize: 11 }}>
      {/* Chaotic top bar */}
      <div className="bg-[#cc3300] text-white text-center py-1 text-[8px] font-bold">
        ☎ CALL US TODAY! (309) 555-0142 &nbsp;|&nbsp; SERVING BLOOMINGTON-NORMAL SINCE 1994
      </div>
      {/* Header */}
      <div className="bg-[#1a1a1a] px-3 py-2 flex items-center justify-between">
        <div>
          <div className="text-[13px] font-bold text-[#cc3300]" style={{ fontFamily: 'Georgia, serif' }}>
            HEARTLAND ROOFING &amp; SIDING
          </div>
          <div className="text-[7px] text-gray-400">Your Local Exterior Specialists!</div>
        </div>
        <div className="grid grid-cols-4 gap-x-2 gap-y-0.5 text-[7.5px] text-gray-300">
          {['HOME','ABOUT US','SERVICES','ROOFING','SIDING','GUTTERS','WINDOWS','DECKS','CONTACT US','FREE ESTIMATE','GALLERY','BLOG'].map(l => (
            <span key={l} className="hover:text-red-400 cursor-pointer">{l}</span>
          ))}
        </div>
      </div>
      {/* Hero — no real image, just text on a gradient */}
      <div className="bg-gradient-to-b from-gray-600 to-gray-500 px-4 py-4 text-center">
        <p className="text-[9px] text-yellow-300 uppercase tracking-widest mb-1">★ Award Winning Service ★</p>
        <h1 className="text-[16px] font-bold text-white mb-1" style={{ fontFamily: 'Georgia, serif' }}>
          Welcome to Heartland Roofing &amp; Siding!
        </h1>
        <p className="text-[8px] text-gray-300 leading-relaxed mb-2 max-w-xs mx-auto">
          We are a family-owned exterior company serving Bloomington, Normal, and surrounding communities. 
          From roofing and siding to gutters, windows, decks and more — we do it all! Call us or fill out 
          our online form to get your FREE estimate today.
        </p>
        <div className="flex gap-2 justify-center">
          <button className="bg-[#cc3300] text-white text-[8px] px-3 py-1.5 border border-red-700">GET A FREE ESTIMATE</button>
          <button className="bg-gray-700 text-white text-[8px] px-3 py-1.5 border border-gray-600">VIEW GALLERY</button>
          <button className="bg-gray-700 text-white text-[8px] px-3 py-1.5 border border-gray-600">ABOUT US</button>
        </div>
      </div>
      {/* Service dump */}
      <div className="bg-[#f5f0e8] px-3 py-2 border-t-4 border-[#cc3300]">
        <p className="text-[9px] font-bold text-center text-[#cc3300] uppercase tracking-wider mb-2">OUR SERVICES</p>
        <div className="grid grid-cols-4 gap-1 text-[7.5px] text-center text-gray-600">
          {['Roof Replacement','Roof Repair','Storm Damage','Siding Install','Siding Repair','Gutter Install','Gutter Guards','Window Replace','Entry Doors','Deck Build','Deck Repair','Insulation','Skylight Install','Chimney Repair','Flashing Repair','Attic Venting'].map(s => (
            <div key={s} className="bg-white border border-gray-200 p-1 rounded">{s}</div>
          ))}
        </div>
      </div>
      {/* Block of copy */}
      <div className="px-4 py-2 bg-white border-t border-gray-200">
        <p className="text-[7.5px] text-gray-500 leading-relaxed text-center">
          Heartland Roofing &amp; Siding LLC is a licensed, bonded, and insured exterior contractor serving McLean County and surrounding areas. We pride ourselves on quality workmanship, honest pricing, and outstanding customer service. All work is backed by our satisfaction guarantee. We accept cash, check, and credit cards. Financing available. BBB accredited. Ask about our senior discount!
        </p>
      </div>
    </div>
  );
}

// ─── EXAMPLE 1 ─ Heartland Roofing & Siding (AFTER) ──────────────────────────

function RoofingAfter() {
  return (
    <div className="bg-white font-sans" style={{ fontSize: 11 }}>
      {/* Clean nav */}
      <div className="bg-white border-b border-gray-100 px-4 py-2.5 flex items-center justify-between">
        <div>
          <div className="font-bold text-[12px] text-gray-900">Heartland Roofing</div>
          <div className="text-[7px] text-gray-400">Bloomington-Normal, IL</div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[8px] text-gray-500 hidden sm:inline">Roofing</span>
          <span className="text-[8px] text-gray-500 hidden sm:inline">Storm Damage</span>
          <span className="text-[8px] text-gray-500 hidden sm:inline">Reviews</span>
          <button className="bg-[#b45309] text-white text-[8px] px-2.5 py-1.5 rounded font-bold">
            Free Inspection
          </button>
        </div>
      </div>
      {/* Hero with image block */}
      <div className="relative">
        <div className="h-[110px] bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 relative overflow-hidden">
          {/* Simulated photo texture */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.03) 4px, rgba(255,255,255,0.03) 8px)'
          }} />
          {/* Overlay content */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent" />
          <div className="absolute inset-0 px-4 py-3 flex flex-col justify-center">
            <div className="inline-block bg-amber-500 text-white text-[7px] font-bold px-2 py-0.5 rounded mb-1.5 uppercase tracking-wider w-fit">
              Storm Damage Specialists
            </div>
            <h1 className="text-[15px] font-bold text-white leading-tight">
              Free roof inspection.<br />48-hour turnaround.
            </h1>
          </div>
        </div>
      </div>
      {/* CTA strip */}
      <div className="bg-amber-600 px-4 py-2 flex items-center justify-between">
        <p className="text-[8px] text-white font-medium">Insurance claim? We walk you through every step.</p>
        <button className="bg-white text-amber-700 text-[8px] font-bold px-3 py-1 rounded shadow-sm">Request Inspection</button>
      </div>
      {/* Trust bar */}
      <div className="bg-gray-50 border-b border-gray-100 px-4 py-2 flex gap-4">
        {[['30+ yrs', 'in business'], ['200+', 'local projects'], ['5.0★', '84 reviews'], ['Licensed', '& insured']].map(([a, b]) => (
          <div key={a} className="text-center">
            <div className="text-[9px] font-bold text-gray-800">{a}</div>
            <div className="text-[7px] text-gray-400">{b}</div>
          </div>
        ))}
      </div>
      {/* Photo gallery row */}
      <div className="px-4 py-3">
        <div className="text-[8px] font-bold text-gray-700 uppercase tracking-wider mb-2">Recent Projects</div>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            'from-slate-600 to-slate-500',
            'from-stone-600 to-stone-500',
            'from-zinc-600 to-zinc-500',
          ].map((g, i) => (
            <div key={i} className={`h-12 rounded bg-gradient-to-br ${g} relative overflow-hidden`}>
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-[6px] text-white px-1 py-0.5">
                {['Roof replace · Normal', 'Storm repair · BLN', 'Siding + gutters'][i]}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Review */}
      <div className="px-4 py-2 bg-amber-50 border-t border-amber-100 mx-4 rounded-lg">
        <div className="flex gap-0.5 mb-0.5">{Array(5).fill(0).map((_, i) => <Star key={i} size={8} className="fill-amber-400 text-amber-400" />)}</div>
        <p className="text-[8px] text-gray-700 italic">"Quick inspection, honest quote, done in one day. Best contractor experience I've had."</p>
        <p className="text-[7px] text-gray-400 mt-0.5">— Jason M., Normal IL</p>
      </div>
    </div>
  );
}

// ─── EXAMPLE 2 ─ North Main Landscaping (BEFORE) ─────────────────────────────

function LandscapingBefore() {
  return (
    <div className="bg-white font-sans" style={{ fontSize: 11 }}>
      {/* Dated header */}
      <div className="bg-[#2d5a1b] px-3 py-2">
        <div className="flex items-center justify-between">
          <div className="text-[13px] font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
            North Main Landscaping
          </div>
          <div className="flex gap-2 text-[7.5px] text-green-200 flex-wrap justify-end max-w-[55%]">
            {['Home','About','Lawn Mowing','Mulching','Spring Cleanup','Fall Cleanup','Snow Removal','Hardscaping','Contact','Request Quote'].map(l => (
              <span key={l} className="hover:text-white">{l}</span>
            ))}
          </div>
        </div>
      </div>
      {/* Hero - no image */}
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
      {/* Service list wall */}
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
        <p className="text-[9px] font-bold text-gray-600 uppercase tracking-wider text-center mb-1.5">ALL SERVICES</p>
        <p className="text-[7.5px] text-gray-500 text-center leading-loose">
          Lawn Mowing &amp; Edging · Spring &amp; Fall Cleanup · Mulching &amp; Bed Work · Fertilization &amp; Weed Control ·
          Aeration &amp; Overseeding · Shrub &amp; Tree Trimming · Irrigation Install &amp; Repair · Retaining Walls ·
          Patio &amp; Walkway Install · Landscape Design · Grading &amp; Drainage · Snow Plowing · Salting · Junk Removal ·
          Stump Grinding · Hydroseeding
        </p>
      </div>
      {/* About block */}
      <div className="px-4 py-3 bg-white border-t border-gray-100">
        <p className="text-[8px] font-bold text-gray-700 mb-1">About Us</p>
        <p className="text-[7.5px] text-gray-400 leading-relaxed">
          North Main Landscaping has been providing quality landscaping services in the Bloomington-Normal area for over 15 years. We are committed to excellence in every project we undertake, from simple lawn maintenance to full landscape design and installation. Our team of experienced professionals takes pride in our work and we are dedicated to making your outdoor spaces look their best. Contact us today for a free estimate.
        </p>
      </div>
      {/* Footer contact */}
      <div className="px-4 py-2 bg-[#2d5a1b] text-center">
        <p className="text-[7px] text-green-200">📞 (309) 555-0147 &nbsp;·&nbsp; info@northmainlandscaping.com &nbsp;·&nbsp; Bloomington, IL 61701</p>
      </div>
    </div>
  );
}

// ─── EXAMPLE 2 ─ North Main Landscaping (AFTER) ──────────────────────────────

function LandscapingAfter() {
  return (
    <div className="bg-white font-sans" style={{ fontSize: 11 }}>
      {/* Clean nav */}
      <div className="bg-white border-b border-gray-100 px-4 py-2.5 flex items-center justify-between">
        <div className="font-bold text-[12px] text-gray-900">North Main Landscaping</div>
        <button className="bg-[#2d6a2d] text-white text-[8px] px-3 py-1.5 rounded font-bold shadow-sm">
          Get a Free Quote
        </button>
      </div>
      {/* Hero with image */}
      <div className="relative">
        <div className="h-[120px] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-800 to-green-700" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(134,239,172,0.15) 0%, transparent 60%)'
          }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute inset-0 px-4 py-3 flex flex-col justify-end">
            <div className="bg-lime-400 text-green-900 text-[7px] font-bold px-2 py-0.5 rounded w-fit mb-1 uppercase tracking-wider">
              Spring Cleanup — Book Now
            </div>
            <h1 className="text-[16px] font-bold text-white leading-tight">
              Yard cleanup &amp; mulch.<br />Request your quote.
            </h1>
          </div>
        </div>
      </div>
      {/* Package card */}
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="text-[8px] font-bold text-gray-700 uppercase tracking-wider mb-2">Spring Cleanup Package</div>
        <div className="grid grid-cols-2 gap-1">
          {['Debris &amp; leaf removal', 'Bed edging', 'Mulch (2 cu yd)', 'Shrub trim', 'Lawn edge cleanup', 'Haul-away included'].map((s, i) => (
            <div key={i} className="flex items-center gap-1 text-[7.5px] text-gray-600">
              <CheckCircle2 size={8} className="text-green-600 shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: s }} />
            </div>
          ))}
        </div>
        <button className="mt-3 w-full bg-[#2d6a2d] text-white text-[8px] font-bold py-1.5 rounded">
          Request Spring Cleanup Quote
        </button>
      </div>
      {/* Before/after photo proof */}
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="text-[8px] font-bold text-gray-700 uppercase tracking-wider mb-2">Before &amp; After</div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <div className="h-[52px] bg-gradient-to-br from-yellow-800 to-yellow-700 rounded relative overflow-hidden">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 4px)' }} />
              <div className="absolute bottom-0 left-0 right-0 text-center bg-black/50 text-[6px] text-white py-0.5">Before</div>
            </div>
          </div>
          <div>
            <div className="h-[52px] bg-gradient-to-br from-green-600 to-emerald-500 rounded relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(135deg, transparent, transparent 3px, rgba(255,255,255,0.05) 3px, rgba(255,255,255,0.05) 4px)' }} />
              <div className="absolute bottom-0 left-0 right-0 text-center bg-black/30 text-[6px] text-white py-0.5">After</div>
            </div>
          </div>
        </div>
      </div>
      {/* Review */}
      <div className="px-4 py-2">
        <div className="flex gap-0.5 mb-0.5">{Array(5).fill(0).map((_, i) => <Star key={i} size={8} className="fill-amber-400 text-amber-400" />)}</div>
        <p className="text-[8px] text-gray-700 italic">"They did our whole yard in one morning. Looks brand new every spring."</p>
        <p className="text-[7px] text-gray-400 mt-0.5">— Linda K., Bloomington</p>
      </div>
    </div>
  );
}

// ─── EXAMPLE 3 ─ Glow House Aesthetics (BEFORE) ──────────────────────────────

function MedSpaBefore() {
  return (
    <div className="bg-white font-sans" style={{ fontSize: 11 }}>
      {/* Busy header */}
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
      {/* Hero — no image */}
      <div className="bg-gradient-to-b from-pink-100 to-rose-50 px-4 py-5 text-center">
        <p className="text-[9px] text-pink-400 tracking-widest mb-1" style={{ fontFamily: 'Georgia, serif' }}>✦ Beauty &amp; Wellness ✦</p>
        <h1 className="text-[14px] font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
          Welcome to Glow House Aesthetics
        </h1>
        <p className="text-[8px] text-gray-500 mb-3 leading-relaxed max-w-xs mx-auto">
          We offer a full range of aesthetic treatments including Botox, fillers, laser hair removal, HydraFacial, Morpheus8, Kybella, PRP, weight loss, and much more. Our experienced team is here to help you look and feel your best.
        </p>
        <button className="bg-[#d4a0c0] text-white text-[8px] px-4 py-1.5 rounded-full">
          Book an Appointment
        </button>
      </div>
      {/* Treatment grid */}
      <div className="px-3 py-2 border-t border-gray-100">
        <p className="text-[8px] font-bold text-gray-500 text-center uppercase tracking-wider mb-1.5">OUR TREATMENTS</p>
        <div className="grid grid-cols-4 gap-1 text-[7px] text-center text-gray-500">
          {['Botox','Juvederm','Restylane','Sculptra','Kybella','PRP Hair','HydraFacial','Morpheus8','Laser Hair','CO2 Laser','Skin Tight','BBL Photo','Weight Loss','IV Therapy','Lash Lift','Microneed'].map(t => (
            <div key={t} className="border border-pink-100 rounded p-1 bg-pink-50/50">{t}</div>
          ))}
        </div>
      </div>
      {/* Booking copy */}
      <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 text-center">
        <p className="text-[7.5px] text-gray-400">To book an appointment call us at (309) 555-0183 or send an email to appointments@glowhouse.com. We are open Monday through Friday 9am–5pm and Saturday 9am–1pm. New patient consultations are available. Please allow 24 hours for email responses.</p>
      </div>
    </div>
  );
}

// ─── EXAMPLE 3 ─ Glow House Aesthetics (AFTER) ───────────────────────────────

function MedSpaAfter() {
  return (
    <div className="bg-white font-sans" style={{ fontSize: 11 }}>
      {/* Clean nav */}
      <div className="bg-white border-b border-gray-100 px-4 py-2.5 flex items-center justify-between">
        <div>
          <div className="font-bold text-[12px] tracking-wide text-gray-900">Glow House</div>
          <div className="text-[7px] text-gray-400">Medical Aesthetics · Bloomington, IL</div>
        </div>
        <button className="bg-[#7c3d6b] text-white text-[8px] px-3 py-1.5 rounded font-bold shadow-sm">
          Book Consultation
        </button>
      </div>
      {/* Hero with image */}
      <div className="relative">
        <div className="h-[115px] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#3d1c35] to-[#7c3d6b]" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 80% 40%, rgba(236,182,220,0.3) 0%, transparent 50%)'
          }} />
          <div className="absolute right-0 bottom-0 w-24 h-full opacity-20" style={{
            backgroundImage: 'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)'
          }} />
          <div className="absolute inset-0 px-4 py-3 flex flex-col justify-center">
            <div className="bg-[#d4a0c0]/30 text-pink-100 border border-pink-300/30 text-[7px] font-semibold px-2 py-0.5 rounded-full w-fit mb-2">
              First visit? Start here.
            </div>
            <h1 className="text-[15px] font-bold text-white leading-tight">
              A consultation first.<br />No pressure. No guessing.
            </h1>
            <p className="text-[8px] text-pink-200 mt-1">30-min new patient consult — always included.</p>
          </div>
        </div>
      </div>
      {/* CTA button */}
      <div className="px-4 py-2.5 bg-[#f9f0f6]">
        <button className="w-full bg-[#7c3d6b] text-white text-[8.5px] font-bold py-2 rounded-lg shadow-sm">
          Book My Free Consultation
        </button>
      </div>
      {/* Provider + photo block */}
      <div className="px-4 py-2.5 border-b border-gray-100">
        <div className="flex items-center gap-3">
          {/* Simulated photo */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4a0c0] to-[#7c3d6b] flex items-center justify-center text-white font-bold text-[11px] shrink-0">AK</div>
          <div>
            <div className="text-[9px] font-bold text-gray-900">Ashley K., NP — Lead Provider</div>
            <div className="text-[7px] text-gray-500">8 yrs aesthetics · 400+ patients · Board certified</div>
            <div className="flex gap-0.5 mt-0.5">{Array(5).fill(0).map((_, i) => <Star key={i} size={7} className="fill-amber-400 text-amber-400" />)}<span className="text-[7px] text-gray-400 ml-0.5">4.9 (112 reviews)</span></div>
          </div>
        </div>
      </div>
      {/* What to expect */}
      <div className="px-4 py-2.5 bg-[#fdf6fb]">
        <div className="text-[8px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Your first visit:</div>
        <div className="space-y-1">
          {[
            '30-min skin assessment with Ashley',
            'Personalized treatment recommendation',
            'Written plan — no obligation to book',
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-1.5 text-[8px] text-gray-600">
              <span className="w-3.5 h-3.5 rounded-full bg-[#7c3d6b]/15 text-[#7c3d6b] font-bold flex items-center justify-center shrink-0 text-[7px]">{i+1}</span>
              {s}
            </div>
          ))}
        </div>
      </div>
      {/* Treatment photos strip */}
      <div className="px-4 py-2">
        <div className="text-[8px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Popular Treatments</div>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            ['from-rose-300 to-pink-200', 'Botox & Fillers'],
            ['from-purple-300 to-violet-200', 'Morpheus8'],
            ['from-pink-300 to-rose-200', 'HydraFacial'],
          ].map(([g, label]) => (
            <div key={label} className={`h-10 rounded bg-gradient-to-br ${g} relative`}>
              <div className="absolute bottom-0 left-0 right-0 bg-black/20 text-[6px] text-white text-center py-0.5 rounded-b">{label}</div>
            </div>
          ))}
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
    beforeTags: ['12-item nav', 'No storm focus', 'Weak generic headline', 'Buried contact info', 'No trust proof'],
    afterTags: ['Storm-specific page', 'Inspection CTA prominent', 'Photo proof', 'Trust signals upfront', 'Reviews near CTA'],
    wrong: [
      'Homepage headline says "Welcome" with no clear customer benefit',
      '12-item navigation creates decision paralysis',
      'No storm damage or insurance claim content despite that being peak demand',
      'Three competing CTAs all lead to generic pages',
      'Contact info buried — no click-to-call above the fold',
    ],
    changed: [
      'Headline targets storm damage directly to match high-intent searches',
      'Single "Request Inspection" CTA appears in nav, hero, and strip — no competing actions',
      'Project photo gallery shows real completed work above the fold',
      'Trust bar shows years in business, local project count, and review score',
      'Customer review appears just before the final CTA',
    ],
    why: 'After a storm, homeowners search with urgency. A focused page that speaks to that moment and makes requesting an inspection effortless converts at a significantly higher rate than a generic homepage with a buried phone number.',
  },
  {
    num: '02',
    category: 'Landscaping & Outdoor Services',
    business: 'North Main Landscaping',
    before: LandscapingBefore,
    after: LandscapingAfter,
    beforeUrl: 'northmainlandscaping.com',
    afterUrl: 'northmainlandscaping.com/spring-cleanup',
    beforeTags: ['16-service text wall', 'No seasonal offer', 'No photo proof', 'Contact buried', 'Weak CTA'],
    afterTags: ['Seasonal focus', 'Package clearly defined', 'Before/after photos', 'Quote CTA prominent', 'Social proof included'],
    wrong: [
      'Homepage lists 16 services in a single paragraph with no visual hierarchy',
      'No seasonal messaging — identical in March and October',
      'No photos showing actual completed work',
      '"View Our Services" CTA leads to a list page, not a quote',
      'Contact details only in footer — no quick path to request a quote',
    ],
    changed: [
      'Seasonal headline creates real urgency for spring cleanup specifically',
      'Package checklist shows exactly what is included so customers can decide quickly',
      'Before/after photo section shows the transformation customers are buying',
      '"Request Spring Cleanup Quote" button repeats throughout the page',
      'Review quote from a local customer near the quote button',
    ],
    why: 'In spring, most landscaping searches are looking for a single specific service. A seasonal page that names what is included, shows before/after proof, and makes requesting a quote simple wins more business than a generic all-services homepage.',
  },
  {
    num: '03',
    category: 'Med Spa & Aesthetics',
    business: 'Glow House Aesthetics',
    before: MedSpaBefore,
    after: MedSpaAfter,
    beforeUrl: 'glowhouse-aesthetics.com',
    afterUrl: 'glowhouse-aesthetics.com/first-visit',
    beforeTags: ['16 treatments no path', 'Booking buried in footer', 'No provider info', 'No first-timer guidance', 'Inconsistent branding'],
    afterTags: ['First-visit framing', 'Consultation CTA above fold', 'Provider credentials shown', 'Step-by-step process', 'Premium, clean aesthetic'],
    wrong: [
      '16 treatments listed in a grid with no guidance for first-time patients',
      'Booking requires calling or emailing during business hours — too much friction',
      'No provider name, credentials, or photo to build personal trust',
      'No explanation of what to expect at a first appointment',
      'Inconsistent pink branding feels low-budget despite a premium service',
    ],
    changed: [
      '"First visit? Start here." immediately speaks to new patients who need context',
      'Booking button appears in nav, hero, and as a full-width button — no hunting',
      'Provider photo, name, and credentials appear before the CTA',
      'Three-step walkthrough removes first-visit anxiety',
      'Deep plum palette and clean layout signal premium without feeling cold',
    ],
    why: 'First-time med spa patients research for weeks before booking. What tips them is trust — do they feel like they know who they are seeing and what will happen? A consultation-first page that answers those questions converts far better than a treatment menu.',
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

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setLocation('/')}
            className="font-display font-bold text-xl tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            Prairecraft
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

      {/* Hero */}
      <section className="pt-14 pb-12 md:pt-20 md:pb-16 px-4 md:px-6 border-b border-border/50">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
            Website refreshes for local service businesses.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Three examples of what a more focused, conversion-ready website looks like — and what made the original version fall short.
          </p>
        </div>
      </section>

      {/* Before / After examples */}
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
                {/* Label row */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-5xl font-display font-bold text-border select-none">0{idx + 1}</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{ex.category}</p>
                    <h2 className="text-2xl font-display font-bold">{ex.business}</h2>
                  </div>
                </div>

                {/* Side-by-side mockups */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Before */}
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

                  {/* After */}
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

                {/* Breakdown */}
                <div className="grid md:grid-cols-3 gap-6 bg-secondary/40 rounded-2xl border border-border/60 p-6">
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

      {/* What I usually improve */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-secondary/30 border-y border-border/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold mb-3">What I'm usually improving</h2>
            <p className="text-muted-foreground">The same problems show up on most local service sites.</p>
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
            If your business does solid work but your website feels dated, unclear, or hard to navigate, send it over. I'll review it through the lens of trust, clarity, mobile experience, and lead generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              type="button"
              size="lg"
              className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 text-base h-12 font-semibold"
              onClick={() => { setLocation('/'); setTimeout(() => scrollTo('free-teardown'), 100); }}
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
          <a href="mailto:hello@prairecraft.com" className="hover:text-foreground transition-colors">
            hello@prairecraft.com
          </a>
        </div>
      </footer>
    </div>
  );
}
