type SeoPage = Record<string, unknown> & { slug: string };

type Link = {
  label: string;
  href: string;
};

type CitySeed = {
  businessTypes: string;
  city: string;
  note: string;
  relatedIndustry: Link;
  relatedProblem: Link;
  slug: string;
};

type IndustrySeed = {
  industry: string;
  note: string;
  relatedCity: Link;
  relatedProblem: Link;
  services: string;
  slug: string;
};

type CityIndustrySeed = {
  city: string;
  industry: string;
  note: string;
  relatedProblem: Link;
  services: string;
  slug: string;
};

type AnswerSeed = {
  slug: string;
  question: string;
  eyebrow: string;
  intro: string;
  quickAnswer: string;
  targetKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  painHeading: string;
  painIntro: string;
  pains: string[];
  fixesHeading: string;
  fixes: string[];
  trustHeading: string;
  trustIntro: string;
  trustItems: string[];
  faqs: { question: string; answer: string }[];
  internalLinks: Link[];
  humanReviewChecklist: string[];
};

const commonPackages = {
  teardown:
    "Start here if you know the site is not working as clearly as it should, but you want a practical diagnosis before choosing a package.",
  starter:
    "Best for one focused offer, seasonal service, ad campaign, or service line that needs its own clear path to inquiry.",
  refresh:
    "Best when the current site has usable bones but needs sharper messaging, better structure, stronger mobile flow, and clearer calls to action.",
  growth:
    "Best when the business wants steady improvements to pages, offers, local SEO structure, and conversion paths after the initial refresh.",
};

const commonLinks: Link[] = [
  { label: "Free Website Teardown", href: "/services/free-website-teardown" },
  { label: "Core Website Refresh", href: "/services/core-website-refresh" },
  { label: "Starter Landing Page", href: "/services/starter-landing-page" },
  { label: "Website not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" },
];

const citySeeds: CitySeed[] = [
  { slug: "/locations/bloomington-il", city: "Bloomington", businessTypes: "contractors, clinics, cleaners, and home-service providers", note: "a mixed local market where people still compare a few options before they call", relatedIndustry: { label: "Website Refreshes for Contractors", href: "/industries/contractors" }, relatedProblem: { label: "Website not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/locations/normal-il", city: "Normal", businessTypes: "contractors, auto shops, med spas, and neighborhood service businesses", note: "a paired city market where mobile clarity and fast contact paths matter", relatedIndustry: { label: "Website Refreshes for Med Spas", href: "/industries/med-spas" }, relatedProblem: { label: "Website looks bad on mobile", href: "/website-problems/website-looks-bad-on-mobile" } },
  { slug: "/locations/peoria-il/website-help", city: "Peoria", businessTypes: "roofers, remodelers, clinics, cleaners, and auto shops", note: "a bigger comparison-heavy market where trust signals and service clarity can change the decision", relatedIndustry: { label: "Website Refreshes for Roofers", href: "/industries/roofers" }, relatedProblem: { label: "Website not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/locations/east-peoria-il", city: "East Peoria", businessTypes: "auto shops, contractors, cleaners, and home-service providers", note: "a corridor city where quick contact and clear service pages usually win over generic copy", relatedIndustry: { label: "Website Refreshes for Auto Shops", href: "/industries/auto-shops" }, relatedProblem: { label: "Website looks bad on mobile", href: "/website-problems/website-looks-bad-on-mobile" } },
  { slug: "/locations/morton-il", city: "Morton", businessTypes: "remodelers, landscapers, contractors, and family-run service businesses", note: "a referral-heavy market where a clean site still has to do the explaining", relatedIndustry: { label: "Website Refreshes for Remodelers", href: "/industries/remodelers" }, relatedProblem: { label: "Why your website is not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/locations/washington-il", city: "Washington", businessTypes: "roofers, plumbers, electricians, and lawn care businesses", note: "a smaller local market where service area language and phone-first design matter", relatedIndustry: { label: "Website Refreshes for Plumbers", href: "/industries/plumbers" }, relatedProblem: { label: "Website looks bad on mobile", href: "/website-problems/website-looks-bad-on-mobile" } },
  { slug: "/locations/pekin-il", city: "Pekin", businessTypes: "roofers, junk removal companies, cleaners, and contractors", note: "a practical market with homeowners who want straightforward pricing and a quick next step", relatedIndustry: { label: "Website Refreshes for Junk Removal", href: "/industries/junk-removal" }, relatedProblem: { label: "Website not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/locations/springfield-il", city: "Springfield", businessTypes: "clinics, contractors, cleaners, med spas, and professional service businesses", note: "the state-capital market where trust, clarity, and a clear contact path matter a lot", relatedIndustry: { label: "Website Refreshes for Clinics", href: "/industries/clinics" }, relatedProblem: { label: "Website looks bad on mobile", href: "/website-problems/website-looks-bad-on-mobile" } },
  { slug: "/locations/champaign-il", city: "Champaign", businessTypes: "clinics, contractors, med spas, cleaners, and specialty providers", note: "a dense comparison market where visitors often look at several options before they choose", relatedIndustry: { label: "Website Refreshes for Chiropractors", href: "/industries/chiropractors" }, relatedProblem: { label: "Website not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/locations/urbana-il", city: "Urbana", businessTypes: "clinics, cleaners, contractors, and appointment-based service businesses", note: "a campus-adjacent market where mobile booking and easy-to-scan pages help a lot", relatedIndustry: { label: "Website Refreshes for Cleaners", href: "/industries/cleaners" }, relatedProblem: { label: "Website looks bad on mobile", href: "/website-problems/website-looks-bad-on-mobile" } },
  { slug: "/locations/decatur-il", city: "Decatur", businessTypes: "contractors, junk removal companies, auto shops, and clinics", note: "a practical market where visitors usually want a direct answer, not a long sales pitch", relatedIndustry: { label: "Website Refreshes for Junk Removal", href: "/industries/junk-removal" }, relatedProblem: { label: "Why your website is not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/locations/lincoln-il", city: "Lincoln", businessTypes: "plumbers, HVAC companies, contractors, and small-town service businesses", note: "a smaller market where trust, service area clarity, and easy contact usually matter most", relatedIndustry: { label: "Website Refreshes for HVAC", href: "/industries/hvac" }, relatedProblem: { label: "Website looks bad on mobile", href: "/website-problems/website-looks-bad-on-mobile" } },
  { slug: "/locations/clinton-il", city: "Clinton", businessTypes: "HVAC companies, electricians, plumbers, and family-run local businesses", note: "a smaller market where the site has to make a strong first impression quickly", relatedIndustry: { label: "Website Refreshes for Electricians", href: "/industries/electricians" }, relatedProblem: { label: "Website not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/locations/pontiac-il", city: "Pontiac", businessTypes: "electricians, contractors, cleaners, and service businesses that rely on local trust", note: "a route-and-commuter market where a clear phone number and service list can matter more than fancy design", relatedIndustry: { label: "Website Refreshes for Electricians", href: "/industries/electricians" }, relatedProblem: { label: "Website looks bad on mobile", href: "/website-problems/website-looks-bad-on-mobile" } },
  { slug: "/locations/eureka-il", city: "Eureka", businessTypes: "groomers, contractors, HVAC companies, and local service businesses", note: "a small market where proof, simple navigation, and a no-nonsense offer help more than big marketing language", relatedIndustry: { label: "Website Refreshes for Groomers", href: "/industries/groomers" }, relatedProblem: { label: "Website not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/locations/chenoa-il", city: "Chenoa", businessTypes: "plumbers, contractors, cleaners, and nearby-town service providers", note: "a very small market where phone-first design and service area clarity carry a lot of weight", relatedIndustry: { label: "Website Refreshes for Plumbers", href: "/industries/plumbers" }, relatedProblem: { label: "Website looks bad on mobile", href: "/website-problems/website-looks-bad-on-mobile" } },
  { slug: "/locations/el-paso-il", city: "El Paso", businessTypes: "contractors, cleaners, HVAC companies, and local specialists", note: "a nearby-town market where visitors want to know quickly whether the business is a fit", relatedIndustry: { label: "Website Refreshes for Contractors", href: "/industries/contractors" }, relatedProblem: { label: "Why your website is not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/locations/mahomet-il", city: "Mahomet", businessTypes: "contractors, med spas, landscapers, and family-run service businesses", note: "a growing community where buyers still want local proof and an easy next step", relatedIndustry: { label: "Website Refreshes for Landscapers", href: "/industries/landscapers" }, relatedProblem: { label: "Website looks bad on mobile", href: "/website-problems/website-looks-bad-on-mobile" } },
  { slug: "/locations/heyworth-il", city: "Heyworth", businessTypes: "roofers, contractors, cleaners, and small local service businesses", note: "a small town market where service-area wording and trust signals need to do the heavy lifting", relatedIndustry: { label: "Website Refreshes for Roofers", href: "/industries/roofers" }, relatedProblem: { label: "Why your website is not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/locations/leroy-il", city: "Le Roy", businessTypes: "HVAC companies, plumbers, contractors, and service businesses that serve nearby towns", note: "a small market where a straightforward website often outperforms a flashy one", relatedIndustry: { label: "Website Refreshes for HVAC", href: "/industries/hvac" }, relatedProblem: { label: "Website looks bad on mobile", href: "/website-problems/website-looks-bad-on-mobile" } },
];

const industrySeeds: IndustrySeed[] = [
  { slug: "/industries/remodelers", industry: "Remodelers", note: "clients need scope clarity, galleries, and a trustworthy consultation path", services: "kitchens, baths, basements, additions, and whole-home remodels", relatedCity: { label: "Bloomington-Normal website refresh services", href: "/locations/bloomington-normal-il" }, relatedProblem: { label: "Website not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/industries/plumbers", industry: "Plumbers", note: "customers often need help fast, so the site has to answer immediately", services: "repairs, water heaters, drain cleaning, remodel plumbing, and emergency calls", relatedCity: { label: "Peoria website refresh services", href: "/locations/peoria-il" }, relatedProblem: { label: "Website looks bad on mobile", href: "/website-problems/website-looks-bad-on-mobile" } },
  { slug: "/industries/electricians", industry: "Electricians", note: "buyers want clear services, licensing, and an obvious call path", services: "repairs, panels, wiring, lighting, and service upgrades", relatedCity: { label: "Springfield website refresh services", href: "/locations/springfield-il" }, relatedProblem: { label: "Website not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/industries/hvac", industry: "HVAC Companies", note: "seasonal urgency and repair-vs-replace clarity change the conversion path", services: "repair, replacement, maintenance, indoor air quality, and emergency service", relatedCity: { label: "Decatur website refresh services", href: "/locations/decatur-il" }, relatedProblem: { label: "Website looks bad on mobile", href: "/website-problems/website-looks-bad-on-mobile" } },
  { slug: "/industries/cleaners", industry: "Cleaning Companies", note: "buyers want trust, reliability, and easy booking more than clever marketing", services: "recurring home cleaning, deep cleaning, move-out cleaning, and commercial cleaning", relatedCity: { label: "Urbana website refresh services", href: "/locations/urbana-il" }, relatedProblem: { label: "Website not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/industries/junk-removal", industry: "Junk Removal Companies", note: "pricing clarity and quick response matter more than long explanations", services: "same-day removal, cleanouts, hauling, disposal, and light demo", relatedCity: { label: "Pekin website refresh services", href: "/locations/pekin-il" }, relatedProblem: { label: "Website looks bad on mobile", href: "/website-problems/website-looks-bad-on-mobile" } },
  { slug: "/industries/auto-shops", industry: "Auto Shops", note: "people want to know what you fix, when you can fit them in, and how to book", services: "repair, diagnostics, brakes, tires, alignments, and maintenance", relatedCity: { label: "East Peoria website refresh services", href: "/locations/east-peoria-il" }, relatedProblem: { label: "Website not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/industries/landscapers", industry: "Landscapers", note: "seasonal offers, project photos, and recurring maintenance all need a clear path", services: "mowing, cleanup, mulch, planting, hardscape, and seasonal service", relatedCity: { label: "Morton website refresh services", href: "/locations/morton-il" }, relatedProblem: { label: "Website looks bad on mobile", href: "/website-problems/website-looks-bad-on-mobile" } },
  { slug: "/industries/roofers-2", industry: "Roofers", note: "storm damage, inspections, and replacements need one clear page flow", services: "repairs, inspections, replacements, storm damage, and commercial roofing", relatedCity: { label: "Bloomington website refresh services", href: "/locations/bloomington-il" }, relatedProblem: { label: "Website not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/industries/contractors-2", industry: "Contractors", note: "project photos, specialties, and estimate flow should be obvious", services: "remodels, additions, repairs, and specialty projects", relatedCity: { label: "Normal website refresh services", href: "/locations/normal-il" }, relatedProblem: { label: "Why your website is not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/industries/med-spas-2", industry: "Med Spas", note: "service clarity, consultations, provider proof, and booking flow matter most", services: "injectables, facials, laser services, skin treatments, and wellness offers", relatedCity: { label: "Peoria website refresh services", href: "/locations/peoria-il" }, relatedProblem: { label: "Website looks bad on mobile", href: "/website-problems/website-looks-bad-on-mobile" } },
  { slug: "/industries/clinics", industry: "Clinics", note: "patients need clarity, trust, and easy appointment paths", services: "primary care, wellness, specialty visits, and patient onboarding", relatedCity: { label: "Springfield website refresh services", href: "/locations/springfield-il" }, relatedProblem: { label: "Website not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/industries/chiropractors", industry: "Chiropractors", note: "new patient questions, insurance details, and treatment clarity matter", services: "spinal care, injury care, wellness visits, and new patient appointments", relatedCity: { label: "Champaign website refresh services", href: "/locations/champaign-il" }, relatedProblem: { label: "Website looks bad on mobile", href: "/website-problems/website-looks-bad-on-mobile" } },
  { slug: "/industries/groomers", industry: "Groomers", note: "pet owners want trust, safety, and a simple booking path", services: "baths, cuts, de-shedding, nail trims, and full-service grooming", relatedCity: { label: "Eureka website refresh services", href: "/locations/eureka-il" }, relatedProblem: { label: "Why your website is not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/industries/painters", industry: "Painters", note: "buyers want to see finish quality, scope, and a clear estimate path", services: "interior painting, exterior painting, cabinet painting, and prep work", relatedCity: { label: "Pontiac website refresh services", href: "/locations/pontiac-il" }, relatedProblem: { label: "Website not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/industries/window-cleaners", industry: "Window Cleaners", note: "recurring routes, residential/commercial split, and before/after proof help the most", services: "residential windows, storefront windows, screen cleaning, and recurring maintenance", relatedCity: { label: "Chenoa website refresh services", href: "/locations/chenoa-il" }, relatedProblem: { label: "Website looks bad on mobile", href: "/website-problems/website-looks-bad-on-mobile" } },
];

const cityIndustrySeeds: CityIndustrySeed[] = [
  { slug: "/locations/bloomington-il/contractors", city: "Bloomington", industry: "Contractors", note: "buyers still compare a few contractors and want to see specialty work, not just a generic services list", services: "remodels, additions, repairs, and specialty projects", relatedProblem: { label: "Why your website is not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/locations/bloomington-il/roofers", city: "Bloomington", industry: "Roofers", note: "storm repair and replacement visitors need an inspection path they can trust quickly", services: "repairs, inspections, replacements, and storm damage", relatedProblem: { label: "Website looks bad on mobile", href: "/website-problems/website-looks-bad-on-mobile" } },
  { slug: "/locations/normal-il/landscapers", city: "Normal", industry: "Landscapers", note: "homeowners want seasonal offers, cleanup examples, and a fast quote path", services: "mowing, cleanup, mulch, planting, and maintenance", relatedProblem: { label: "Website not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/locations/normal-il/med-spas", city: "Normal", industry: "Med Spas", note: "first-time patients want consultation clarity, provider trust, and a booking path that works on mobile", services: "injectables, facials, laser services, and skin treatments", relatedProblem: { label: "Website looks bad on mobile", href: "/website-problems/website-looks-bad-on-mobile" } },
  { slug: "/locations/peoria-il/contractors", city: "Peoria", industry: "Contractors", note: "a larger market means a site has to show scope, proof, and trust fast", services: "remodels, additions, repairs, and specialty projects", relatedProblem: { label: "Why your website is not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/locations/peoria-il/roofers", city: "Peoria", industry: "Roofers", note: "roofing buyers usually need an inspection-first experience that feels direct and credible", services: "repairs, inspections, replacements, and storm damage", relatedProblem: { label: "Website looks bad on mobile", href: "/website-problems/website-looks-bad-on-mobile" } },
  { slug: "/locations/east-peoria-il/auto-shops", city: "East Peoria", industry: "Auto Shops", note: "drivers want to know what gets fixed, how to book, and whether the shop looks trustworthy", services: "diagnostics, brakes, tires, alignments, and maintenance", relatedProblem: { label: "Website not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/locations/springfield-il/clinics", city: "Springfield", industry: "Clinics", note: "patients need appointment details, provider information, and a clean mobile experience", services: "visits, specialties, patient onboarding, and appointments", relatedProblem: { label: "Website looks bad on mobile", href: "/website-problems/website-looks-bad-on-mobile" } },
  { slug: "/locations/champaign-il/chiropractors", city: "Champaign", industry: "Chiropractors", note: "patients often compare a few providers, then choose the one that explains the first visit best", services: "new patient visits, spinal care, injury care, and wellness", relatedProblem: { label: "Why your website is not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/locations/urbana-il/cleaners", city: "Urbana", industry: "Cleaners", note: "homeowners and offices want trust, pricing clarity, and a simple booking path", services: "recurring home cleaning, deep cleaning, move-out cleaning, and commercial cleaning", relatedProblem: { label: "Website looks bad on mobile", href: "/website-problems/website-looks-bad-on-mobile" } },
  { slug: "/locations/decatur-il/junk-removal", city: "Decatur", industry: "Junk Removal", note: "buyers care about same-day timing, transparent pricing, and before/after proof", services: "haul-away, cleanouts, junk removal, and light demo", relatedProblem: { label: "Website not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/locations/lincoln-il/plumbers", city: "Lincoln", industry: "Plumbers", note: "customers want a phone-first layout for leaks, repairs, and install work", services: "repairs, drain cleaning, water heaters, remodel plumbing, and emergency service", relatedProblem: { label: "Website looks bad on mobile", href: "/website-problems/website-looks-bad-on-mobile" } },
  { slug: "/locations/pontiac-il/electricians", city: "Pontiac", industry: "Electricians", note: "service calls need a clean list of work types and a fast contact option", services: "repairs, panels, wiring, lighting, and service upgrades", relatedProblem: { label: "Why your website is not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/locations/clinton-il/hvac", city: "Clinton", industry: "HVAC Companies", note: "seasonal repair and replacement work needs a clear path to booking", services: "repair, replacement, maintenance, and emergency service", relatedProblem: { label: "Website looks bad on mobile", href: "/website-problems/website-looks-bad-on-mobile" } },
  { slug: "/locations/eureka-il/groomers", city: "Eureka", industry: "Groomers", note: "pet owners want safety, trust, and a booking flow that feels easy", services: "baths, cuts, de-shedding, nail trims, and full-service grooming", relatedProblem: { label: "Why your website is not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
  { slug: "/locations/morton-il/remodelers", city: "Morton", industry: "Remodelers", note: "remodeling buyers need scope clarity, galleries, and a consultation path that feels calm", services: "kitchens, baths, basements, additions, and whole-home remodels", relatedProblem: { label: "Website not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" } },
];

const answerSeeds: AnswerSeed[] = [
  {
    slug: "/website-problems/how-much-does-a-website-refresh-cost",
    question: "How Much Does a Website Refresh Cost?",
    eyebrow: "Cost and scope",
    intro: "A website refresh is usually the right move when the current site still has usable structure but is not clear enough to bring in quote requests.",
    quickAnswer: "The real cost depends on how much copy, layout, and service-page work is needed. A small refresh is usually much simpler than a full rebuild, especially for local service businesses that already have a live site.",
    targetKeyword: "how much does a website refresh cost",
    secondaryKeywords: ["website refresh pricing", "small business website refresh cost", "website redesign cost for local business"],
    searchIntent: "A business owner wants a realistic price range and wants to know whether a refresh or a rebuild is the better use of money.",
    painHeading: "Why this question matters",
    painIntro: "Most owners are not shopping for design for its own sake. They want to know whether the site can be improved without starting over.",
    pains: [
      "The current site feels outdated but not completely broken.",
      "It is unclear whether the work should be copy, design, or both.",
      "Agency pricing sounds inflated compared with the size of the problem.",
      "The owner wants to avoid paying for a full rebuild if the site can be salvaged.",
    ],
    fixesHeading: "What Jolt would look at first",
    fixes: [
      "Homepage clarity",
      "Service page structure",
      "Mobile quote flow",
      "Trust signals and photos",
      "Local service-area wording",
      "Whether a refresh or landing page is the smallest practical fix",
    ],
    trustHeading: "What should be real before you buy",
    trustIntro: "A useful answer depends on the actual state of the site, not on a canned package name.",
    trustItems: [
      "Current website URL",
      "Service priorities",
      "Whether the site already has usable copy or photos",
      "Any proof, reviews, or project examples that can be reused",
    ],
    faqs: [
      { question: "Is a refresh cheaper than a rebuild?", answer: "Usually, yes. If the existing structure can be reused, the work is often more efficient than starting from scratch." },
      { question: "What makes the price go up?", answer: "The big drivers are copywriting, number of pages, photo work, and how much of the site needs to be rethought." },
      { question: "Can I start small?", answer: "Yes. A landing page or a focused refresh is often a smart first step when the site only needs one clear fix." },
      { question: "Should I ask for a quote or a teardown first?", answer: "A teardown first usually helps you avoid overbuying. It shows where the real problem is." },
      { question: "Does a lower price always mean a better deal?", answer: "No. If the work does not improve clarity or conversion, even a cheap project can be expensive in the long run." },
    ],
    internalLinks: mergeLinks(commonLinks, [
      { label: "Core Website Refresh", href: "/services/core-website-refresh" },
      { label: "Free Website Teardown", href: "/services/free-website-teardown" },
      { label: "How to choose website help for a local business", href: "/website-problems/how-to-choose-website-help-for-a-local-business" },
    ]),
    humanReviewChecklist: [
      "Do not add a price claim unless there is an actual pricing policy to support it.",
      "Keep the page framed around diagnosis, not a fake quote range.",
      "Make sure the CTA still points to the teardown.",
    ],
  },
  {
    slug: "/website-problems/website-refresh-vs-redesign",
    question: "Website Refresh vs Redesign",
    eyebrow: "Decision help",
    intro: "If the site still works in some places but fails in others, the better question is usually whether it needs a refresh, not a full redesign.",
    quickAnswer: "A refresh improves the existing site. A redesign starts over more aggressively. For many local service businesses, a refresh is enough if the problem is clarity, mobile flow, or quote conversion.",
    targetKeyword: "website refresh vs redesign",
    secondaryKeywords: ["refresh or redesign website", "website rebuild vs refresh", "small business website redesign"],
    searchIntent: "A business owner wants help deciding whether the current site can be improved or needs a new build.",
    painHeading: "Why this decision gets messy",
    painIntro: "People often hear different advice from designers, agencies, and DIY tools, but the site itself usually tells the truth.",
    pains: [
      "The current site has decent content but a weak structure.",
      "The business is not sure whether the platform itself is the problem.",
      "The owner does not want to overspend on a full rebuild.",
      "The site has a few good pages but a weak mobile experience.",
    ],
    fixesHeading: "How to tell the difference",
    fixes: [
      "Refresh if the bones are good and the message is the problem",
      "Redesign if the structure is broken or the site is too hard to use",
      "Start with the highest-friction page",
      "Keep the goal tied to quote requests, not aesthetics",
      "Use the teardown to choose the smallest fix that makes the site clearer",
      "Protect any existing proof that already works",
    ],
    trustHeading: "The honest version of this answer",
    trustIntro: "If a site can be made more useful without throwing away what already works, that is usually the smarter move.",
    trustItems: [
      "Existing site structure",
      "Mobile usability",
      "Current proof and photos",
      "Whether the message is simply unclear versus structurally broken",
    ],
    faqs: [
      { question: "When is a redesign worth it?", answer: "When the site is too tangled to fix cleanly or the platform blocks the changes that matter." },
      { question: "Can a refresh still feel modern?", answer: "Yes. A refresh can look and feel much better if the layout, spacing, and copy are tightened up." },
      { question: "Is a redesign always better for SEO?", answer: "No. A redesign can help or hurt depending on how much useful content gets preserved." },
      { question: "What should I do first?", answer: "Start with a teardown so you know whether the issue is structure, copy, or conversion flow." },
      { question: "Can Jolt help with either option?", answer: "Yes. Jolt is designed to decide and execute the smallest practical fix, not push a bigger project than you need." },
    ],
    internalLinks: mergeLinks(commonLinks, [
      { label: "Core Website Refresh", href: "/services/core-website-refresh" },
      { label: "Starter Landing Page", href: "/services/starter-landing-page" },
      { label: "Free Website Teardown", href: "/services/free-website-teardown" },
    ]),
    humanReviewChecklist: [
      "Keep the language practical, not design-industry jargon.",
      "Make sure the page helps the owner decide, not just compare buzzwords.",
      "Do not imply a redesign is always better.",
    ],
  },
  {
    slug: "/website-problems/how-to-get-more-quote-requests",
    question: "How to Get More Quote Requests From Your Website",
    eyebrow: "Conversion help",
    intro: "If the site gets traffic but not enough calls or quote forms, the issue is usually clarity, trust, or too much friction between interest and contact.",
    quickAnswer: "More quote requests usually come from clearer service pages, stronger proof, simpler mobile CTAs, and fewer steps between the visitor and the form.",
    targetKeyword: "how to get more quote requests from website",
    secondaryKeywords: ["how to get more leads from website", "website not getting quote requests", "convert website visitors into leads"],
    searchIntent: "A local business owner wants practical ways to turn existing website traffic into inquiries.",
    painHeading: "Why quote requests stall",
    painIntro: "The visitor may already be interested. The site just has to make the next step feel obvious and low-friction.",
    pains: [
      "The CTA is hard to find on mobile.",
      "Service pages do not answer the first few buyer questions.",
      "The site feels generic and does not build trust quickly.",
      "The form asks for too much too soon.",
    ],
    fixesHeading: "What usually helps first",
    fixes: [
      "Move the CTA higher on the page",
      "Make the service and service area obvious",
      "Use real photos and real proof",
      "Shorten the form",
      "Add FAQs that answer objections",
      "Create one clear page for one clear service when needed",
    ],
    trustHeading: "What to review before changing the site",
    trustIntro: "The best fix depends on whether the problem is traffic, clarity, trust, or the offer itself.",
    trustItems: [
      "Which pages get the most visits",
      "Where visitors drop off",
      "What services matter most",
      "What proof can be shown honestly",
    ],
    faqs: [
      { question: "Should I add more buttons?", answer: "Not if the page is already confusing. The better move is usually to clarify the offer and make one primary CTA easy to find." },
      { question: "Do landing pages help?", answer: "Yes, if the visitor is looking for one service or one action. A landing page can reduce distraction." },
      { question: "Do I need more traffic or a better site?", answer: "If traffic exists already, improve the site first. It is usually cheaper than buying more traffic to a broken page." },
      { question: "Does local proof matter?", answer: "Yes. People contact businesses faster when they see real work, real people, and a real local footprint." },
      { question: "What should I send for a teardown?", answer: "The website URL and the services you most want more of are enough to start." },
    ],
    internalLinks: mergeLinks(commonLinks, [
      { label: "Free Website Teardown", href: "/services/free-website-teardown" },
      { label: "Starter Landing Page", href: "/services/starter-landing-page" },
      { label: "Website not getting quote requests", href: "/website-problems/website-not-getting-quote-requests" },
    ]),
    humanReviewChecklist: [
      "Keep the page focused on conversion, not generic SEO advice.",
      "Use concrete examples of friction, not platitudes.",
      "Make sure the CTA stays the teardown.",
    ],
  },
  {
    slug: "/website-problems/what-should-a-contractor-website-include",
    question: "What Should a Contractor Website Include?",
    eyebrow: "Contractor SEO",
    intro: "A contractor website should help a buyer understand the specialty, see proof of work, and know how to request an estimate without hunting around.",
    quickAnswer: "The essentials are clear services, a service area, project photos, trust signals, an estimate CTA, and a mobile layout that makes contact easy.",
    targetKeyword: "what should a contractor website include",
    secondaryKeywords: ["contractor website checklist", "contractor website design", "what makes a good contractor website"],
    searchIntent: "A contractor owner wants to know what their website needs in order to bring in better leads and look credible.",
    painHeading: "What contractors usually need online",
    painIntro: "Contracting buyers do not need a long brand story. They need enough information to trust the company and ask for an estimate.",
    pains: [
      "The site lists services without explaining specialties.",
      "Project photos are too sparse or not labeled well.",
      "The estimate request path is buried.",
      "The service area is vague or too broad to be believable.",
    ],
    fixesHeading: "What Jolt would prioritize",
    fixes: [
      "Specialty-focused service pages",
      "Project photos with simple context",
      "Clear estimate CTA",
      "Service-area language",
      "Proof and trust sections",
      "FAQs that answer scope and timing questions",
    ],
    trustHeading: "Proof should feel like proof",
    trustIntro: "For contractors, the site should show the work, not just describe it.",
    trustItems: [
      "Before and after photos",
      "Crew or jobsite photos",
      "Licensing or insurance details where accurate",
      "Review snippets if approved",
    ],
    faqs: [
      { question: "Do contractors need separate service pages?", answer: "Usually yes. Separate pages help buyers understand specialties and help search engines understand the site." },
      { question: "Can a one-page site work?", answer: "It can, but only if the service is narrow. Most contractors benefit from clearer sections or a few strong service pages." },
      { question: "What photos matter most?", answer: "Real project photos and team photos usually outperform stock images." },
      { question: "What makes the estimate CTA better?", answer: "A short, visible form and a clear promise about what happens next usually help." },
      { question: "Can Jolt help if the site already exists?", answer: "Yes. A refresh often beats a rebuild when the site just needs to be clearer and easier to use." },
    ],
    internalLinks: mergeLinks(commonLinks, [
      { label: "Website Refreshes for Contractors", href: "/industries/contractors" },
      { label: "Free Website Teardown", href: "/services/free-website-teardown" },
      { label: "Bloomington-Normal website refresh services", href: "/locations/bloomington-normal-il" },
    ]),
    humanReviewChecklist: [
      "Do not use generic contractor language that could fit any trade.",
      "Make sure the page stays practical and photo-driven.",
      "Keep claims tied to actual work and proof.",
    ],
  },
  {
    slug: "/website-problems/what-should-a-roofer-website-include",
    question: "What Should a Roofer Website Include?",
    eyebrow: "Roofing SEO",
    intro: "A roofer website has to answer a simple question quickly: do you handle the type of roof issue I have, and can I trust you enough to call?",
    quickAnswer: "A strong roofer site should show services, service area, roof photos, inspection or estimate flow, trust signals, and a phone-first mobile layout.",
    targetKeyword: "what should a roofer website include",
    secondaryKeywords: ["roofer website checklist", "roofing company website design", "roofing website must haves"],
    searchIntent: "A roofing owner wants a practical checklist for a site that earns trust and requests.",
    painHeading: "What buyers want from a roofing site",
    painIntro: "Roofing visitors usually arrive with a real issue. They need clarity fast, especially if the page is being viewed on a phone after a storm or leak.",
    pains: [
      "The site does not separate repairs, replacements, and inspections.",
      "There is not enough real project proof.",
      "The mobile contact path is too hard.",
      "Trust details are missing or buried.",
    ],
    fixesHeading: "What Jolt would emphasize",
    fixes: [
      "Inspection-first messaging",
      "Clear service categories",
      "Real roof and crew photos",
      "Short estimate or inspection forms",
      "Service-area clarity",
      "FAQ answers about timing, storms, and next steps",
    ],
    trustHeading: "Trust signals should be easy to find",
    trustIntro: "A roofer website should not make the buyer work to see that the company is legitimate.",
    trustItems: [
      "License and insurance details where accurate",
      "Reviews or testimonials with permission",
      "Project photos",
      "Simple explanation of the inspection or estimate process",
    ],
    faqs: [
      { question: "Should roofing sites focus on storms?", answer: "Only if storm work is a real part of the business. Otherwise the site should reflect the actual mix of services." },
      { question: "Do roofing sites need financing info?", answer: "Only if financing is actually available. If it is, it should be easy to find." },
      { question: "Are stock photos okay?", answer: "They are better than nothing, but real roof photos usually build more trust." },
      { question: "Do I need separate repair and replacement pages?", answer: "If both are important services, yes. It helps the visitor choose the right path faster." },
      { question: "What should I send for a teardown?", answer: "The site, the main roofing services, and any proof or project photos you already have are enough." },
    ],
    internalLinks: mergeLinks(commonLinks, [
      { label: "Website Refreshes for Roofers", href: "/industries/roofers" },
      { label: "Free Website Teardown", href: "/services/free-website-teardown" },
      { label: "Peoria website help", href: "/locations/peoria-il/website-help" },
    ]),
    humanReviewChecklist: [
      "Confirm any warranty, financing, or certification language.",
      "Do not imply storm damage coverage or insurance help if it is not offered.",
      "Use real roofing-specific examples only.",
    ],
  },
  {
    slug: "/website-problems/what-should-a-med-spa-website-include",
    question: "What Should a Med Spa Website Include?",
    eyebrow: "Med spa SEO",
    intro: "A med spa website has to do more than look polished. It needs to make first-time visitors feel informed enough to book or ask a question.",
    quickAnswer: "Med spa sites should clearly show treatments, provider trust, booking or consultation flow, photos, mobile usability, and enough education to reduce hesitation.",
    targetKeyword: "what should a med spa website include",
    secondaryKeywords: ["med spa website checklist", "med spa website design", "what makes a good med spa website"],
    searchIntent: "A med spa owner wants a practical checklist for a website that builds trust and supports bookings.",
    painHeading: "What med spa visitors are trying to decide",
    painIntro: "People are usually comparing providers, looking for clear treatment explanations, and trying to judge whether the business feels current and credible.",
    pains: [
      "Treatments are listed but not explained clearly.",
      "Booking or consultation steps are hard to find on mobile.",
      "Provider trust is buried.",
      "Photos do not feel current or specific to the business.",
    ],
    fixesHeading: "What Jolt would prioritize",
    fixes: [
      "Plain-language treatment pages",
      "Consultation-focused calls to action",
      "Provider and staff trust sections",
      "Mobile booking paths",
      "Local context without filler",
      "FAQs that answer common first-visit questions",
    ],
    trustHeading: "Trust should be visible before the CTA",
    trustIntro: "For med spas, the site should calm doubt before asking for a booking.",
    trustItems: [
      "Provider photos and names",
      "Approved credential language",
      "Real space or treatment photos",
      "Clear explanation of what happens next",
    ],
    faqs: [
      { question: "Do med spa sites need separate treatment pages?", answer: "Yes. It helps visitors find the service they want and makes the site easier to scan." },
      { question: "Should the site talk about pricing?", answer: "If pricing is public, yes. If not, the page should explain the consultation path clearly." },
      { question: "Can I use stock images?", answer: "You can, but real photos usually build more trust and make the business feel less generic." },
      { question: "What matters more: design or clarity?", answer: "Clarity. A pretty site that does not explain the service usually underperforms." },
      { question: "Can Jolt help with landing pages for one treatment?", answer: "Yes. A focused landing page can work well for one treatment or one promotion." },
    ],
    internalLinks: mergeLinks(commonLinks, [
      { label: "Website Refreshes for Med Spas", href: "/industries/med-spas" },
      { label: "Free Website Teardown", href: "/services/free-website-teardown" },
      { label: "Website refreshes for med spas in Peoria, IL", href: "/locations/peoria-il" },
    ]),
    humanReviewChecklist: [
      "Have the business review any credential or treatment language.",
      "Do not make medical or outcome claims without approval.",
      "Keep the page focused on clarity and booking flow.",
    ],
  },
  {
    slug: "/website-problems/what-should-a-cleaning-company-website-include",
    question: "What Should a Cleaning Company Website Include?",
    eyebrow: "Cleaning company SEO",
    intro: "A cleaning company website should make trust, service type, and booking feel simple from the first visit.",
    quickAnswer: "The essentials are service types, service area, trust signals, straightforward pricing or estimate language, a booking CTA, and real photos if available.",
    targetKeyword: "what should a cleaning company website include",
    secondaryKeywords: ["cleaning company website checklist", "cleaning company website design", "what makes a good cleaning business website"],
    searchIntent: "A cleaning business owner wants a website checklist that supports new inquiries and recurring bookings.",
    painHeading: "What buyers need to see",
    painIntro: "Visitors want to know what kind of cleaning is offered, whether the company feels trustworthy, and how to book without back-and-forth.",
    pains: [
      "The site does not clearly separate residential, deep, and commercial cleaning.",
      "The booking path is buried or vague.",
      "There is not enough trust proof.",
      "Pricing and service area expectations are unclear.",
    ],
    fixesHeading: "What Jolt would tighten up",
    fixes: [
      "Separate service pages",
      "Simple booking or estimate CTA",
      "Trust and reliability signals",
      "Clean mobile layout",
      "Service-area wording",
      "FAQs about scheduling, supplies, and what is included",
    ],
    trustHeading: "Trust matters more than clever copy",
    trustIntro: "A cleaning site should feel reliable and easy to work with.",
    trustItems: [
      "Real team or van photos",
      "Insurance or background-check language if true",
      "Review snippets if permitted",
      "Clear explanation of the first booking step",
    ],
    faqs: [
      { question: "Do cleaning sites need online booking?", answer: "It helps if the business can support it. If not, the site should still make the request form very easy to use." },
      { question: "Should I list pricing?", answer: "If the business has a clear pricing model, yes. If not, explain how quotes are handled." },
      { question: "Can one page cover every cleaning service?", answer: "Sometimes, but separate sections or pages usually convert better when the service mix is broad." },
      { question: "Do local photos matter?", answer: "Yes. Real photos can make the business feel much more trustworthy." },
      { question: "What should I send for a teardown?", answer: "The website URL and the service types you want to grow are enough to begin." },
    ],
    internalLinks: mergeLinks(commonLinks, [
      { label: "Website Refreshes for Cleaning Companies", href: "/industries/cleaners" },
      { label: "Free Website Teardown", href: "/services/free-website-teardown" },
      { label: "Urbana cleaning company page", href: "/locations/urbana-il/cleaners" },
    ]),
    humanReviewChecklist: [
      "Keep the tone practical and trust-driven.",
      "Do not invent service guarantees or pricing structure.",
      "Make sure the CTA is still the teardown.",
    ],
  },
  {
    slug: "/website-problems/what-pages-do-local-service-businesses-need",
    question: "What Pages Do Local Service Businesses Need?",
    eyebrow: "Site structure",
    intro: "A lot of local service sites fail because the page structure is incomplete, not because the design is bad.",
    quickAnswer: "Most local service businesses need a clear homepage, service pages, about or trust page, contact page, service-area page, and a few FAQ pages that answer real questions.",
    targetKeyword: "what pages do local service businesses need",
    secondaryKeywords: ["local business website pages", "small business website structure", "service business website checklist"],
    searchIntent: "A business owner wants to know the minimum useful site structure for local search and conversions.",
    painHeading: "Why site structure matters",
    painIntro: "If the visitor has to hunt for the basics, the site loses momentum before the business gets a chance to explain itself.",
    pains: [
      "Everything is crammed onto the homepage.",
      "There is no clear service-area page.",
      "The site lacks trust or about content.",
      "Questions that buyers ask are not answered anywhere.",
    ],
    fixesHeading: "The pages that usually matter most",
    fixes: [
      "Homepage",
      "Core service pages",
      "About or trust page",
      "Contact page",
      "Service-area or location pages",
      "FAQ pages for recurring objections",
    ],
    trustHeading: "Good structure should support trust",
    trustIntro: "The goal is to make the business easier to understand, not just to add more pages.",
    trustItems: [
      "What the business does",
      "Where it serves",
      "Why a buyer should trust it",
      "What happens next after contact",
    ],
    faqs: [
      { question: "Do local businesses need a blog?", answer: "Not necessarily. Helpful service pages usually matter more than a generic blog if the site is thin." },
      { question: "How many service pages is enough?", answer: "Enough to clearly explain the actual services. The right number depends on how broad the business is." },
      { question: "Do I need location pages?", answer: "If the business serves multiple towns or search locations, yes, but only when each page can be meaningfully different." },
      { question: "Should the contact page be separate?", answer: "Yes. It keeps the next step simple and easy to find." },
      { question: "What should I start with?", answer: "Start with the homepage and the highest-intent service pages, then fill the gaps that stop people from contacting you." },
    ],
    internalLinks: mergeLinks(commonLinks, [
      { label: "Core Website Refresh", href: "/services/core-website-refresh" },
      { label: "Free Website Teardown", href: "/services/free-website-teardown" },
      { label: "Website help for Central Illinois service businesses", href: "/locations/central-illinois" },
    ]),
    humanReviewChecklist: [
      "Avoid making the page read like a generic website checklist.",
      "Tie the structure advice back to quote requests.",
      "Keep the answer focused on local service businesses.",
    ],
  },
  {
    slug: "/website-problems/ai-website-builder-vs-hire-help",
    question: "AI Website Builder vs Hire Help",
    eyebrow: "AI search answer",
    intro: "AI builders can get a site live quickly, but they do not always solve the parts that matter most for local service businesses: clarity, trust, and conversion flow.",
    quickAnswer: "Use AI when speed is the priority and the site is simple. Hire help when the website has to explain services, build trust, and turn real visitors into quote requests.",
    targetKeyword: "ai website builder vs hire help",
    secondaryKeywords: ["should I use an AI website builder", "AI website builder for small business", "hire a website designer or use AI"],
    searchIntent: "A business owner is comparing AI tools with a more thoughtful website service and wants a clear recommendation.",
    painHeading: "Where AI builders usually fall short",
    painIntro: "AI tools can make a page look finished, but a local service site usually needs more than a polished shell.",
    pains: [
      "The copy sounds generic or too broad.",
      "The page does not match how buyers actually choose a service business.",
      "The site may look fine but still fail to convert.",
      "The business still has to figure out service pages, proof, and local context.",
    ],
    fixesHeading: "When Jolt is the better fit",
    fixes: [
      "When the business needs a clearer offer",
      "When the site needs better service-page structure",
      "When proof and trust matter more than speed",
      "When the owner wants a practical teardown first",
      "When the current site exists but needs a better conversion path",
      "When the site has to support real local search intent",
    ],
    trustHeading: "Choose based on the job, not the hype",
    trustIntro: "A tool can generate pages. It cannot decide what your site should say unless someone does the strategy work.",
    trustItems: [
      "What the business actually sells",
      "How much trust the buyer needs",
      "How much local specificity matters",
      "Whether the site must support leads, not just presence",
    ],
    faqs: [
      { question: "Can AI build a usable site?", answer: "Yes, for simple use cases. But simple does not always mean effective for a local service business." },
      { question: "Does AI replace a designer?", answer: "Not when the site needs strategy, structure, or conversion thinking." },
      { question: "Can AI help with copy?", answer: "It can help draft copy, but the business still needs a sharper offer, proof, and local context." },
      { question: "Is a productized service better than a full agency?", answer: "For many local businesses, yes. It can be faster and more focused." },
      { question: "What should I do first?", answer: "Start with a teardown so you can see whether AI is enough or whether the problem is bigger than a template." },
    ],
    internalLinks: mergeLinks(commonLinks, [
      { label: "Free Website Teardown", href: "/services/free-website-teardown" },
      { label: "Core Website Refresh", href: "/services/core-website-refresh" },
      { label: "Starter Landing Page", href: "/services/starter-landing-page" },
    ]),
    humanReviewChecklist: [
      "Keep the AI discussion grounded in practical business outcomes.",
      "Do not trash AI tools; explain when they are enough and when they are not.",
      "Make the recommended next step a teardown.",
    ],
  },
  {
    slug: "/website-problems/how-to-choose-website-help-for-a-local-business",
    question: "How to Choose Website Help for a Local Business",
    eyebrow: "Buyer guide",
    intro: "The best website help is not the fanciest one. It is the one that understands the business, the buyer, and the next action that matters.",
    quickAnswer: "Look for someone who can diagnose the problem, improve the site without unnecessary bloat, and show work that fits your actual type of business.",
    targetKeyword: "how to choose website help for local business",
    secondaryKeywords: ["local business website designer", "website help for small business", "how to hire website help"],
    searchIntent: "A business owner wants practical guidance for choosing the right type of website partner.",
    painHeading: "What to watch for",
    painIntro: "A lot of website help sounds the same until you ask what the process looks like, what gets changed, and what proof they need from you.",
    pains: [
      "The provider sells a generic package without asking about the business.",
      "The process is unclear or oversized.",
      "The portfolio does not resemble the buyer's market.",
      "There is no explanation of what happens after the site launch.",
    ],
    fixesHeading: "What a useful partner should do",
    fixes: [
      "Start with a teardown or diagnosis",
      "Explain what will change and why",
      "Match the scope to the actual problem",
      "Use proof and examples that fit the business",
      "Keep the site focused on inquiries, not decoration",
      "Help the owner decide the smallest practical next step",
    ],
    trustHeading: "Questions worth asking before you hire",
    trustIntro: "A good fit should feel specific, not vague.",
    trustItems: [
      "What are you fixing first?",
      "What pages matter most?",
      "How do you handle existing proof and content?",
      "What does success look like for this business?",
    ],
    faqs: [
      { question: "Should I choose the cheapest option?", answer: "Not if the cheapest option does not solve the actual problem. The better question is which option is most likely to improve inquiries." },
      { question: "Is a freelancer or agency better?", answer: "Either can work. What matters is whether they understand the business and can keep the scope focused." },
      { question: "What should I send first?", answer: "Your URL, your main services, and what feels wrong with the current site are enough to begin." },
      { question: "Can I start with one page?", answer: "Yes. A landing page or a targeted refresh can be a sensible first move." },
      { question: "What if I just want a second opinion?", answer: "That is exactly what a teardown is for. It helps you decide before spending more." },
    ],
    internalLinks: mergeLinks(commonLinks, [
      { label: "Free Website Teardown", href: "/services/free-website-teardown" },
      { label: "Core Website Refresh", href: "/services/core-website-refresh" },
      { label: "Growth Support", href: "/services/growth-support" },
    ]),
    humanReviewChecklist: [
      "Keep the page practical and buyer-focused.",
      "Make sure it does not read like a vendor checklist only.",
      "Use the teardown as the default next step.",
    ],
  },
];

function mergeLinks(...groups: Link[][]): Link[] {
  const seen = new Set<string>();
  return groups.flat().filter((link) => {
    if (seen.has(link.href)) return false;
    seen.add(link.href);
    return true;
  });
}

function cityFaqs(city: string) {
  return [
    { question: `Do I need a full redesign in ${city}?`, answer: "Not always. Many businesses need clearer messaging, better mobile structure, and a stronger quote path before they need a full rebuild." },
    { question: "Can you work with nearby towns too?", answer: "Yes. The site should reflect where the business actually serves, without stuffing the page with city names." },
    { question: "Will this help with Google rankings?", answer: "A clearer site can support SEO, but no one should promise rankings." },
    { question: "What should I send for a teardown?", answer: "Your website URL and a few notes about your priority services and biggest frustrations are enough to start." },
    { question: "Do local photos matter?", answer: "Usually, yes. Real photos of the work, team, storefront, vehicles, or process make the site feel more trustworthy." },
  ];
}

function industryFaqs(industry: string) {
  return [
    { question: `What should a ${industry.toLowerCase()} website include?`, answer: "It should clearly show services, service area, quote or booking options, trust signals, and real examples of the work." },
    { question: `Can Jolt improve ${industry.toLowerCase()} service pages?`, answer: "Yes. The work usually starts by making the offer clearer, the layout easier to scan, and the contact path easier to use." },
    { question: "Do photos matter?", answer: "Yes. Real photos help the visitor understand the business faster than stock imagery." },
    { question: "Can you work with an existing site?", answer: "Often, yes. The teardown will show whether the current site can be refreshed or should be simplified first." },
    { question: "What package usually fits?", answer: "Most businesses start with the Free Website Teardown and then choose the smallest practical next step." },
  ];
}

function cityIndustryFaqs(city: string, industry: string) {
  return [
    { question: `Is there enough demand for ${industry.toLowerCase()} work in ${city}?`, answer: "If people are already searching for the service, the page should help them understand the business and take the next step." },
    { question: `What should a ${industry.toLowerCase()} page in ${city} include?`, answer: "The service list, local service area, proof, mobile CTA, and a few practical FAQs that answer real objections." },
    { question: "Can one page be enough?", answer: "Yes, if it is focused on one service or one clear next step. Otherwise a refresh of the full site may be a better fit." },
    { question: "Do I need local proof?", answer: "Real local proof helps, but if it is not available yet, the page should stay honest and practical instead of pretending." },
    { question: "What package usually fits?", answer: "Start with the Free Website Teardown. That will show whether a landing page, refresh, or ongoing support is the best next step." },
  ];
}

function buildCityPage(seed: CitySeed): SeoPage {
  return {
    slug: seed.slug,
    seoTitle: `Website Refresh Services for ${seed.city} Businesses | Jolt`,
    metaDescription: `Practical website refresh help for ${seed.city} service businesses that need clearer pages, better mobile flow, and more quote requests.`,
    eyebrow: `${seed.city}, IL`,
    h1: `Website Refresh Services for ${seed.city} Businesses`,
    intro: `Jolt helps local service businesses in ${seed.city} fix the website friction that keeps good customers from reaching out.`,
    primaryCta: "Request a Free Website Teardown",
    secondaryCta: "View Website Refresh Packages",
    targetKeyword: `website refresh ${seed.city} IL`,
    secondaryKeywords: [`website help ${seed.city}`, `small business website redesign ${seed.city} IL`, `local service business website ${seed.city}`],
    searchIntent: `A business owner in ${seed.city} is looking for practical website help without a bloated agency process.`,
    whyThisPageExists: `${seed.city} has local service businesses that need a clearer site, not more jargon or a generic template.`,
    uniqueValue: `This page speaks to the kinds of service businesses common in ${seed.city}: ${seed.businessTypes}.`,
    proofToAdd: [
      `${seed.city} screenshots from approved teardowns`,
      `Real photos from ${seed.city} work, storefronts, crews, or service vehicles`,
      `Notes from actual conversations with ${seed.city} business owners`,
    ],
    painHeading: `The website problems ${seed.city} customers notice first`,
    painIntro: `In ${seed.city}, a customer can compare a few businesses in a short search session and still leave if the site does not answer fast enough.`,
    pains: [
      "The homepage does not explain the business clearly in the first few seconds.",
      "Service pages are too thin, too broad, or buried in the navigation.",
      "The phone number and quote request path are hard to use on mobile.",
      "Photos feel generic or disconnected from the actual work.",
      "The site does not clearly mention nearby service areas or the next step.",
    ],
    fixesHeading: `What Jolt fixes for ${seed.city} businesses`,
    fixes: [
      "Clearer homepage messaging",
      "Stronger service page structure",
      "Mobile-first quote request paths",
      "Cleaner navigation",
      "Better use of real photos and trust signals",
      "Useful local service-area language without city-name stuffing",
    ],
    packageFit: commonPackages,
    trustHeading: "Local trust should feel real",
    trustIntro: `A page like this should stay practical until there is real proof to show from ${seed.city} or nearby work.`,
    trustItems: [
      "Use real teardown screenshots when approved.",
      "Use actual local photos and service-area wording.",
      `Avoid claims about ${seed.city} results unless documented.`,
    ],
    faqs: cityFaqs(seed.city),
    internalLinks: mergeLinks(commonLinks, [seed.relatedIndustry, seed.relatedProblem]),
    schemaTypes: ["LocalBusiness", "Service", "FAQPage", "BreadcrumbList"],
    humanReviewChecklist: [
      `Add true ${seed.city} examples as soon as proof is available.`,
      "Confirm all service-area wording is accurate.",
      "Avoid any claim that sounds like completed local work unless documented.",
    ],
  };
}

function buildIndustryPage(seed: IndustrySeed): SeoPage {
  return {
    slug: seed.slug,
    seoTitle: `Website Refreshes for ${seed.industry} | Jolt`,
    metaDescription: `Jolt helps ${seed.industry.toLowerCase()} improve unclear, outdated, or underperforming websites with clearer services, better proof, and easier quote paths.`,
    eyebrow: seed.industry,
    h1: `Website Refreshes for ${seed.industry}`,
    intro: `A ${seed.industry.toLowerCase()} website needs to explain the work clearly, build trust fast, and make the next step obvious on mobile.`,
    primaryCta: `Request a Free ${seed.industry} Website Teardown`,
    secondaryCta: "See Core Website Refresh",
    targetKeyword: `website design for ${seed.industry.toLowerCase()}`,
    secondaryKeywords: [`${seed.industry.toLowerCase()} website refresh`, `${seed.industry.toLowerCase()} website help`, `${seed.industry.toLowerCase()} landing page`],
    searchIntent: `A ${seed.industry.toLowerCase()} owner wants a website that supports quote requests, trust, and simple navigation.`,
    whyThisPageExists: `${seed.industry} have their own conversion problems, from service clarity to proof to the contact path.`,
    uniqueValue: `This page shows how ${seed.industry.toLowerCase()} buyers decide whether to call based on service clarity, proof, and trust.`,
    proofToAdd: [
      `Real ${seed.industry.toLowerCase()} screenshots from approved teardowns`,
      `Photos showing ${seed.services}`,
      `Business-approved notes on process, licensing, or credentials`,
    ],
    painHeading: `Why ${seed.industry.toLowerCase()} websites lose good leads`,
    painIntro: `People usually arrive with a real need, but they still need a website that answers the practical questions quickly.`,
    pains: [
      `The site does not clearly separate ${seed.services}.`,
      "The phone number or quote path is hard to find on mobile.",
      "Project or service photos are missing, tiny, or generic.",
      "The estimate or booking process feels vague.",
      "The page does not give enough reason to trust the business yet.",
    ],
    fixesHeading: `What Jolt fixes for ${seed.industry}`,
    fixes: [
      "Homepage messaging that says exactly what the business does",
      "Clear service sections and simple navigation",
      "Mobile-first phone and quote request CTAs",
      "Better photo placement",
      "Trust sections for credentials, reviews, or service proof where accurate",
      "FAQs that answer real buyer concerns",
    ],
    packageFit: commonPackages,
    trustHeading: `${seed.industry} proof matters more than polish`,
    trustIntro: `Jolt should present the real work clearly and avoid making unsupported claims for this category.`,
    trustItems: [
      `Real ${seed.industry.toLowerCase()} photos`,
      "Before and after images where approved",
      "Crew, truck, or jobsite photos if relevant",
      "Review snippets with permission",
    ],
    faqs: industryFaqs(seed.industry),
    internalLinks: mergeLinks(commonLinks, [seed.relatedCity, seed.relatedProblem]),
    schemaTypes: ["Service", "FAQPage", "BreadcrumbList"],
    humanReviewChecklist: [
      `Confirm every ${seed.industry.toLowerCase()} service category before publishing.`,
      "Verify license, warranty, financing, or certification claims where relevant.",
      "Avoid generic copy that could describe any business in the category.",
    ],
  };
}

function buildCityIndustryPage(seed: CityIndustrySeed): SeoPage {
  return {
    slug: seed.slug,
    seoTitle: `Website Refreshes for ${seed.industry} in ${seed.city}, IL | Jolt`,
    metaDescription: `Practical website refresh help for ${seed.city} ${seed.industry.toLowerCase()} businesses that need clearer service pages, stronger trust, and better quote requests.`,
    eyebrow: `${seed.city} ${seed.industry}`,
    h1: `Website Refreshes for ${seed.industry} in ${seed.city}, IL`,
    intro: `Jolt helps ${seed.city} ${seed.industry.toLowerCase()} businesses fix website friction so the right customers can understand the offer and reach out.`,
    primaryCta: "Request a Free Website Teardown",
    secondaryCta: "See Core Website Refresh",
    targetKeyword: `website refresh for ${seed.industry.toLowerCase()} in ${seed.city} IL`,
    secondaryKeywords: [`${seed.city} ${seed.industry.toLowerCase()} website help`, `${seed.city} ${seed.industry.toLowerCase()} website design`, `${seed.industry.toLowerCase()} landing page ${seed.city} IL`],
    searchIntent: `A ${seed.city} business owner is looking for website help that fits the ${seed.industry.toLowerCase()} market.`,
    whyThisPageExists: `${seed.city} and ${seed.industry.toLowerCase()} create a narrower search intent than either page alone.`,
    uniqueValue: `The page focuses on how ${seed.city} buyers compare ${seed.industry.toLowerCase()} businesses and what they need to see before they contact someone.`,
    proofToAdd: [
      `${seed.city} screenshots from approved teardowns`,
      `Photos or examples that show ${seed.services}`,
      `Local proof or process notes relevant to ${seed.city}`,
    ],
    painHeading: `Why this ${seed.city} page should convert better`,
    painIntro: `The visitor already has location intent and category intent. The page should answer the last few questions standing between browsing and contacting.`,
    pains: [
      `The page does not clearly explain ${seed.services}.`,
      "The mobile CTA is too hard to find.",
      "The site lacks local proof or a clear service area.",
      "The photos do not make the business feel real or current.",
      "The booking or quote path feels longer than it should.",
    ],
    fixesHeading: `What Jolt fixes for ${seed.city} ${seed.industry.toLowerCase()} businesses`,
    fixes: [
      "Clear service summary above the fold",
      "Simple mobile quote or booking flow",
      "Real photos and trust signals",
      "Local service-area language",
      "FAQ answers for the most common objections",
      "A tighter path from page view to contact",
    ],
    packageFit: commonPackages,
    trustHeading: "Local proof should be real",
    trustIntro: `If proof exists, this is the place to use it. If it does not yet exist, the page should stay honest and practical.`,
    trustItems: [
      `Approved ${seed.city} photos and screenshots`,
      "Business-reviewed claims and language",
      "Service proof instead of generic marketing fluff",
    ],
    faqs: cityIndustryFaqs(seed.city, seed.industry),
    internalLinks: mergeLinks(commonLinks, [{ label: `${seed.city} website refresh services`, href: seed.slug.replace(/\/[^/]+$/, "") } as Link, seed.relatedProblem]),
    schemaTypes: ["Service", "FAQPage", "BreadcrumbList"],
    humanReviewChecklist: [
      `Confirm ${seed.city} service-area wording.`,
      `Confirm ${seed.industry.toLowerCase()} service examples before publishing.`,
      "Do not publish until the page is more specific than either parent page.",
    ],
  };
}

export const expandedSeoPages: SeoPage[] = [
  ...citySeeds.map(buildCityPage),
  ...industrySeeds.map(buildIndustryPage),
  ...cityIndustrySeeds.map(buildCityIndustryPage),
  ...answerSeeds.map((seed) => ({
    slug: seed.slug,
    seoTitle: `${seed.question} | Jolt`,
    metaDescription: seed.quickAnswer,
    eyebrow: seed.eyebrow,
    h1: seed.question,
    intro: seed.intro,
    quickAnswer: seed.quickAnswer,
    primaryCta: "Request a Free Website Teardown",
    secondaryCta: "View Package Fit",
    targetKeyword: seed.targetKeyword,
    secondaryKeywords: seed.secondaryKeywords,
    searchIntent: seed.searchIntent,
    whyThisPageExists: seed.searchIntent,
    uniqueValue: seed.quickAnswer,
    proofToAdd: [
      "Real screenshots from approved teardown examples",
      "Business-approved photos or service examples",
      "Any relevant local or category-specific proof",
    ],
    painHeading: seed.painHeading,
    painIntro: seed.painIntro,
    pains: seed.pains,
    fixesHeading: seed.fixesHeading,
    fixes: seed.fixes,
    packageFit: commonPackages,
    trustHeading: seed.trustHeading,
    trustIntro: seed.trustIntro,
    trustItems: seed.trustItems,
    faqs: seed.faqs,
    internalLinks: seed.internalLinks,
    schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
    humanReviewChecklist: seed.humanReviewChecklist,
  })),
];
