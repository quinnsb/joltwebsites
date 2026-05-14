import { expandedSeoPages } from "@/data/seoPageExpansion";

export type SeoPage = {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  quickAnswer?: string;
  primaryCta: string;
  secondaryCta?: string;
  targetKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  whyThisPageExists: string;
  uniqueValue: string;
  proofToAdd: string[];
  painHeading: string;
  painIntro: string;
  pains: string[];
  fixesHeading: string;
  fixes: string[];
  packageFit: {
    teardown: string;
    starter: string;
    refresh: string;
    growth: string;
  };
  trustHeading: string;
  trustIntro: string;
  trustItems: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  internalLinks: {
    label: string;
    href: string;
  }[];
  schemaTypes: string[];
  humanReviewChecklist: string[];
};

const commonPackages = {
  teardown: "Start here if you know the website is not working as clearly as it should, but you want a practical diagnosis before choosing a package.",
  starter: "Best for one focused offer, seasonal service, ad campaign, or service line that needs its own clear path to inquiry.",
  refresh: "Best when the current site has usable bones but needs sharper messaging, better structure, stronger mobile flow, and clearer calls to action.",
  growth: "Best when the business wants steady improvements to pages, offers, local SEO structure, and conversion paths after the initial refresh.",
};

const coreLinks = [
  { label: "Free Website Teardown", href: "/services/free-website-teardown" },
  { label: "Core Website Refresh", href: "/services/core-website-refresh" },
  { label: "Starter Landing Page", href: "/services/starter-landing-page" },
  { label: "Why Your Website Is Not Getting Quote Requests", href: "/website-problems/website-not-getting-quote-requests" },
];

export const seoPages: SeoPage[] = [
  {
    slug: "/locations/bloomington-normal-il",
    seoTitle: "Website Refresh Services for Bloomington-Normal Businesses | Jolt",
    metaDescription:
      "Jolt helps Bloomington-Normal service businesses fix outdated, confusing, or underperforming websites so more visitors become quote requests.",
    eyebrow: "Bloomington-Normal, IL",
    h1: "Website Refresh Services for Bloomington-Normal Businesses",
    intro:
      "Jolt helps local service businesses in Bloomington-Normal fix the website friction that keeps good customers from reaching out.",
    primaryCta: "Request a Free Website Teardown",
    secondaryCta: "View Website Refresh Packages",
    targetKeyword: "website refresh Bloomington IL",
    secondaryKeywords: [
      "website help Bloomington-Normal",
      "local service business website redesign Bloomington IL",
      "small business website help Normal IL",
    ],
    searchIntent:
      "A local business owner is looking for practical website help in the Bloomington-Normal market, usually because the current site feels outdated or does not generate enough inquiries.",
    whyThisPageExists:
      "Bloomington-Normal is Jolt's starting market and can support a useful local page with specific service business context.",
    uniqueValue:
      "The page explains how local customers compare contractors, clinics, med spas, auto shops, landscapers, and other service businesses before requesting a quote.",
    proofToAdd: [
      "Real screenshots from approved local teardown examples",
      "Photos of Central Illinois work vehicles, storefronts, crews, or service environments",
      "Actual notes from Bloomington-Normal business owner conversations",
    ],
    painHeading: "The website problems local customers notice first",
    painIntro:
      "A Bloomington-Normal customer may find you through Google, a referral, Facebook, a yard sign, or a truck in town. Once they reach your site, they still need fast answers.",
    pains: [
      "The homepage does not explain the business clearly in the first few seconds.",
      "Service pages are too thin, too broad, or buried in the navigation.",
      "The phone number and quote request path are hard to use on mobile.",
      "Photos feel dated, generic, or disconnected from the actual business.",
      "The site does not clearly mention Bloomington, Normal, or nearby service areas.",
    ],
    fixesHeading: "What Jolt fixes for Bloomington-Normal businesses",
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
    trustIntro:
      "A local page should not pretend Jolt has done work it has not done. This page should use real examples as they become available and stay practical until proof exists.",
    trustItems: [
      "Use real teardown screenshots when approved.",
      "Use real service-area language from the business.",
      "Use actual review snippets only with permission.",
      "Avoid claims about Bloomington-Normal results unless they are documented.",
    ],
    faqs: [
      {
        question: "Do I need a full redesign?",
        answer:
          "Not always. Many local service businesses need clearer messaging, better mobile structure, and a stronger quote path before they need a full rebuild.",
      },
      {
        question: "Can Jolt help if I serve both Bloomington and Normal?",
        answer:
          "Yes. For many businesses, Bloomington-Normal should be treated as one connected local market while still mentioning nearby communities naturally.",
      },
      {
        question: "Will this help with Google rankings?",
        answer:
          "A clearer, more useful website can support SEO, but Jolt does not guarantee rankings. The first goal is to remove friction for real customers.",
      },
      {
        question: "What should I send for a teardown?",
        answer:
          "Your website URL is enough to start. Notes about your priority services, ideal customers, and biggest website frustrations are helpful too.",
      },
      {
        question: "Do local photos matter?",
        answer:
          "Usually, yes. Real photos of your work, team, storefront, vehicles, or process can make the site feel more trustworthy than stock imagery.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "Website Refreshes for Roofers", href: "/industries/roofers" },
    ],
    schemaTypes: ["LocalBusiness", "Service", "FAQPage", "BreadcrumbList"],
    humanReviewChecklist: [
      "Add true Bloomington-Normal examples as soon as proof is available.",
      "Confirm all service-area wording is accurate.",
      "Add real photo ideas before publishing a client-specific version.",
      "Remove any claim that sounds like completed local work unless documented.",
    ],
  },
  {
    slug: "/industries/roofers",
    seoTitle: "Website Refreshes for Roofers | Jolt",
    metaDescription:
      "Jolt helps roofing companies fix unclear, outdated, or underperforming websites so homeowners can understand services and request a quote.",
    eyebrow: "Roofing companies",
    h1: "Website Refreshes for Roofers",
    intro:
      "A roofing website needs to build trust quickly, explain the work clearly, and make it easy for a homeowner or property owner to ask for help.",
    primaryCta: "Request a Free Roofing Website Teardown",
    secondaryCta: "See Core Website Refresh",
    targetKeyword: "website refresh for roofers",
    secondaryKeywords: [
      "roofing company website help",
      "website design for roofers",
      "roofing landing page",
      "website teardown for roofers",
    ],
    searchIntent:
      "A roofing company owner or marketer wants a clearer website that can support estimate requests, service pages, and local trust.",
    whyThisPageExists:
      "Roofing has distinct conversion problems around emergency needs, inspection requests, service-area clarity, project photos, and trust signals.",
    uniqueValue:
      "The page gives roofing-specific guidance on repair, replacement, storm damage, inspection, commercial roofing, and estimate request flow.",
    proofToAdd: [
      "Approved before and after roofing website screenshots",
      "Real project photo examples",
      "Accurate license, warranty, financing, or certification details from each roofing client",
    ],
    painHeading: "Why roofing websites lose good leads",
    painIntro:
      "Most roofing customers are not casually browsing. They may have a leak, storm damage, an aging roof, or a repair they have delayed too long.",
    pains: [
      "The site does not separate repairs, replacements, inspections, and storm damage.",
      "The phone number and estimate request button are hard to find on mobile.",
      "Project photos are missing, tiny, or replaced by generic stock images.",
      "Service-area pages are thin and do not help homeowners decide whether to call.",
      "The estimate process is vague, which can make customers hesitate.",
    ],
    fixesHeading: "What Jolt fixes for roofing companies",
    fixes: [
      "Homepage messaging that says exactly what roofing work you do",
      "Clear service sections for repairs, replacements, inspections, storm damage, and commercial roofing",
      "Mobile-first phone and quote request CTAs",
      "Better project photo placement",
      "Trust sections for credentials, warranties, financing, or insurance where accurate",
      "FAQ content that answers real homeowner concerns",
    ],
    packageFit: commonPackages,
    trustHeading: "Roofing proof matters more than polish",
    trustIntro:
      "Roofing customers want signs that the company is real, reachable, and experienced. Jolt helps present that proof clearly without inventing it.",
    trustItems: [
      "Real project photos",
      "Before and after images where approved",
      "Crew, truck, or jobsite photos",
      "Manufacturer certifications if accurate",
      "Review snippets with permission",
    ],
    faqs: [
      {
        question: "What should a roofing website include?",
        answer:
          "It should clearly show services, service areas, quote options, phone number, trust signals, project photos, and answers to common repair or replacement questions.",
      },
      {
        question: "Can Jolt help with storm damage landing pages?",
        answer:
          "Yes. A Starter Landing Page can work well for storm damage, roof inspections, or a seasonal roofing campaign.",
      },
      {
        question: "Should roofers use real project photos?",
        answer:
          "Yes. Clear real photos usually build more trust than stock images. They do not need to be perfect, but they should be credible.",
      },
      {
        question: "Can you refresh my roofing website without rebuilding it?",
        answer:
          "Often, yes. If the current platform and structure are usable, Jolt can focus on messaging, layout, service pages, and quote flow.",
      },
      {
        question: "Do you guarantee more roofing leads?",
        answer:
          "No. Jolt does not guarantee leads. The goal is to remove website friction so qualified visitors have a clearer reason and easier path to reach out.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "Bloomington-Normal Website Refresh Services", href: "/locations/bloomington-normal-il" },
    ],
    schemaTypes: ["Service", "FAQPage", "BreadcrumbList"],
    humanReviewChecklist: [
      "Confirm every roofing service category with the client before publishing.",
      "Verify license, insurance, financing, warranty, and certification claims.",
      "Add real roofing photos before using project-specific language.",
      "Keep storm damage copy practical and compliant.",
    ],
  },
  {
    slug: "/locations/peoria-il/med-spas",
    seoTitle: "Website Refreshes for Med Spas in Peoria, IL | Jolt",
    metaDescription:
      "Jolt helps Peoria med spas improve outdated or unclear websites with better service pages, mobile layout, trust signals, and booking-focused calls to action.",
    eyebrow: "Peoria med spas",
    h1: "Website Refreshes for Med Spas in Peoria, IL",
    intro:
      "A med spa website has to help someone understand the treatment, feel comfortable with the provider, and know how to book or ask a question.",
    primaryCta: "Request a Free Med Spa Website Teardown",
    secondaryCta: "See Starter Landing Pages",
    targetKeyword: "website design for med spas in Peoria IL",
    secondaryKeywords: [
      "Peoria med spa website refresh",
      "med spa website help Peoria",
      "landing pages for med spas Peoria IL",
    ],
    searchIntent:
      "A Peoria med spa owner or manager wants a clearer website that supports service education, trust, and booking inquiries.",
    whyThisPageExists:
      "Med spas have distinct trust, compliance, service clarity, and booking-flow needs that differ from general local service pages.",
    uniqueValue:
      "The page explains how treatment pages, provider proof, photos, consultation language, and mobile booking shape inquiry quality.",
    proofToAdd: [
      "Real treatment room and provider photos",
      "Approved credential details",
      "Business-reviewed treatment descriptions",
      "Actual booking process details",
    ],
    painHeading: "Why med spa websites need extra clarity",
    painIntro:
      "Peoria customers may compare local providers, clinics, salons, and regional options before booking a consultation or asking a question.",
    pains: [
      "Treatment pages are too vague or too heavy with jargon.",
      "Booking buttons are hard to find on mobile.",
      "Provider credentials or experience are buried.",
      "Photos do not match the quality of the service.",
      "The consultation process is unclear.",
      "The site makes claims that need business or compliance review before publishing.",
    ],
    fixesHeading: "What Jolt fixes for Peoria med spas",
    fixes: [
      "Clearer treatment page structure",
      "Better mobile booking CTAs",
      "Plainspoken service descriptions",
      "Stronger provider and trust sections",
      "Better photo placement",
      "Consultation-focused landing pages",
      "FAQ sections for common pre-booking concerns",
    ],
    packageFit: commonPackages,
    trustHeading: "Med spa trust needs careful proof",
    trustIntro:
      "Jolt can improve clarity and conversion paths, but treatment claims, credentials, and outcomes should always be reviewed by the business before publishing.",
    trustItems: [
      "Real provider and treatment room photos",
      "Approved credential details",
      "Approved before and after policies",
      "Permitted review snippets",
      "Accurate booking and consultation language",
    ],
    faqs: [
      {
        question: "Can Jolt help a Peoria med spa improve online booking?",
        answer:
          "Yes. Jolt can review how visible and clear the booking path is, then recommend or build stronger calls to action, landing pages, or service page layouts.",
      },
      {
        question: "Do med spa service pages need to be rewritten?",
        answer:
          "Often, yes. Many treatment pages are either too thin or too filled with jargon. Strong pages explain who the treatment may be for, what to expect, and how to ask questions.",
      },
      {
        question: "Can you write before and after claims?",
        answer:
          "Only with accurate source material from the business. Jolt will not invent outcomes, imply guaranteed results, or publish unsupported medical claims.",
      },
      {
        question: "Is a landing page useful for one treatment?",
        answer:
          "Yes. A Starter Landing Page can be useful for a specific treatment, consultation campaign, or ad campaign when the main website is too broad.",
      },
      {
        question: "What photos should a med spa website use?",
        answer:
          "Real photos of the space, providers, treatment rooms, and approved service visuals usually work better than generic stock photos. Any client imagery should follow consent and compliance rules.",
      },
    ],
    internalLinks: [
      { label: "Peoria Website Refresh Services", href: "/locations/peoria-il" },
      { label: "Website Refreshes for Med Spas", href: "/industries/med-spas" },
      { label: "Free Website Teardown", href: "/services/free-website-teardown" },
      { label: "Starter Landing Page", href: "/services/starter-landing-page" },
      { label: "What To Do If Your Website Looks Bad on Mobile", href: "/website-problems/website-looks-bad-on-mobile" },
    ],
    schemaTypes: ["Service", "FAQPage", "BreadcrumbList"],
    humanReviewChecklist: [
      "Confirm all treatment claims with the business.",
      "Add real Peoria context before heavy promotion.",
      "Add actual service list and booking flow.",
      "Review compliance-sensitive copy before publishing.",
    ],
  },
  {
    slug: "/locations/central-illinois",
    seoTitle: "Website Help for Central Illinois Service Businesses | Jolt",
    metaDescription:
      "Practical website refresh help for Central Illinois service businesses that need clearer pages, better mobile flow, and more quote requests.",
    eyebrow: "Central Illinois",
    h1: "Website Help for Central Illinois Service Businesses",
    intro:
      "Jolt helps service businesses across Central Illinois turn outdated or confusing websites into clearer paths to contact.",
    primaryCta: "Request a Free Website Teardown",
    targetKeyword: "website help Central Illinois",
    secondaryKeywords: ["small business website help Central Illinois", "local service business website refresh"],
    searchIntent: "A regional service business owner wants practical website help from someone focused on Central Illinois.",
    whyThisPageExists: "This hub connects city pages, service pages, and industry pages without forcing every small town into a thin page.",
    uniqueValue: "It frames Jolt's regional focus and explains when city-specific pages should or should not be published.",
    proofToAdd: ["Regional teardown examples", "Photos from real Central Illinois service businesses", "Search Console query patterns by town"],
    painHeading: "Common website friction across the region",
    painIntro: "Local service buyers often compare several businesses before calling, even when they begin with a referral.",
    pains: [
      "Unclear services",
      "Weak mobile layout",
      "Hard-to-find quote buttons",
      "Generic service-area copy",
      "Missing real photos and trust signals",
    ],
    fixesHeading: "What Jolt fixes",
    fixes: [
      "Cleaner homepage messaging",
      "Service pages that answer practical questions",
      "Mobile quote paths",
      "Local SEO structure",
      "Photo and trust signal placement",
    ],
    packageFit: commonPackages,
    trustHeading: "A regional page should be useful, not inflated",
    trustIntro: "This page should point people to the most relevant city, industry, service, or problem page.",
    trustItems: ["Use this as the location hub.", "Add proof over time.", "Avoid creating small-town pages until there is unique context."],
    faqs: [
      { question: "What areas does Jolt focus on?", answer: "Jolt focuses on Central Illinois, starting with Bloomington-Normal and nearby communities." },
      { question: "Do you work with businesses outside Bloomington-Normal?", answer: "Yes, when the service fit is right and the business needs practical website help." },
      { question: "Should every town get its own page?", answer: "No. A town page should only exist when it can include useful local context." },
      { question: "What businesses are a fit?", answer: "Contractors, remodelers, roofers, landscapers, med spas, clinics, cleaners, auto shops, and similar service businesses." },
      { question: "Where should I start?", answer: "Start with the Free Website Teardown so Jolt can identify the highest-priority fixes." },
    ],
    internalLinks: [
      { label: "Bloomington-Normal Website Refresh Services", href: "/locations/bloomington-normal-il" },
      { label: "Peoria Website Refresh Services", href: "/locations/peoria-il" },
      ...coreLinks,
    ],
    schemaTypes: ["Service", "FAQPage", "BreadcrumbList"],
    humanReviewChecklist: ["Add real regional examples.", "Keep city lists restrained.", "Link to strong pages instead of publishing thin town pages."],
  },
  {
    slug: "/locations/peoria-il",
    seoTitle: "Website Refresh Services for Peoria Businesses | Jolt",
    metaDescription:
      "Jolt helps Peoria service businesses improve outdated websites with clearer messaging, better mobile structure, and easier quote requests.",
    eyebrow: "Peoria, IL",
    h1: "Website Refresh Services for Peoria Businesses",
    intro:
      "Jolt helps Peoria service businesses improve websites that look dated, feel confusing, or make it too hard for customers to reach out.",
    primaryCta: "Request a Free Website Teardown",
    targetKeyword: "website design Peoria IL",
    secondaryKeywords: ["website refresh Peoria IL", "small business website help Peoria", "Peoria service business website"],
    searchIntent: "A Peoria business owner wants website help that is practical, local, and focused on inquiries.",
    whyThisPageExists: "Peoria is a high-priority Central Illinois market with a large mix of service businesses.",
    uniqueValue: "The page can discuss comparison-heavy service markets and why clear trust signals matter.",
    proofToAdd: ["Peoria-specific teardown notes", "Real photos from Peoria-area businesses", "Approved examples from Peoria service categories"],
    painHeading: "Where Peoria service websites often lose people",
    painIntro: "Customers need enough clarity to choose whether to call, book, or request a quote.",
    pains: ["Unclear service menus", "Generic homepage copy", "Weak mobile calls to action", "Photos that do not match the work", "No clear next step"],
    fixesHeading: "What Jolt improves",
    fixes: ["Messaging", "Mobile layout", "Service pages", "Quote paths", "Local trust sections", "Basic SEO structure"],
    packageFit: commonPackages,
    trustHeading: "Use specific proof as it becomes available",
    trustIntro: "This Peoria page should stay honest and practical until real local proof can be added.",
    trustItems: ["Approved screenshots", "Real photos", "Category-specific examples", "Business-reviewed claims"],
    faqs: [
      { question: "Can Jolt refresh an existing Peoria business website?", answer: "Yes, if the current platform and structure are workable." },
      { question: "Do you build brand-new sites?", answer: "Jolt is positioned around practical refreshes and landing pages, not bloated custom builds." },
      { question: "Can this help with quote requests?", answer: "The work focuses on reducing friction so visitors have a clearer path to contact." },
      { question: "What industries are a fit?", answer: "Contractors, clinics, med spas, cleaners, auto shops, landscapers, roofers, and similar service businesses." },
      { question: "What is the first step?", answer: "Request a Free Website Teardown." },
    ],
    internalLinks: [
      { label: "Website Refreshes for Med Spas in Peoria", href: "/locations/peoria-il/med-spas" },
      ...coreLinks,
    ],
    schemaTypes: ["LocalBusiness", "Service", "FAQPage", "BreadcrumbList"],
    humanReviewChecklist: ["Add Peoria examples.", "Confirm any local claims.", "Avoid thin location copy."],
  },
  {
    slug: "/industries/contractors",
    seoTitle: "Website Refreshes for Contractors | Jolt",
    metaDescription:
      "Jolt helps contractors improve outdated websites with clearer services, better project proof, and easier quote request paths.",
    eyebrow: "Contractors",
    h1: "Website Refreshes for Contractors",
    intro: "Contractor websites need to show what you do, where you work, what kind of projects you want, and how to request a quote.",
    primaryCta: "Request a Free Contractor Website Teardown",
    targetKeyword: "website design for contractors",
    secondaryKeywords: ["contractor website refresh", "website help for contractors", "contractor landing pages"],
    searchIntent: "A contractor wants the website to support project inquiries and look credible to local buyers.",
    whyThisPageExists: "Contractors have specific needs around project photos, service area, project type, and estimate flow.",
    uniqueValue: "The page explains how to present trades, specialties, project fit, and quote steps clearly.",
    proofToAdd: ["Project photos", "Before and after examples", "Service category notes", "Estimate process details"],
    painHeading: "Contractor website problems that slow down inquiries",
    painIntro: "A customer may be ready to talk, but only if the site answers practical questions first.",
    pains: ["No clear project types", "Thin service pages", "Missing project photos", "Vague service area", "Quote forms that feel risky or confusing"],
    fixesHeading: "What Jolt fixes for contractors",
    fixes: ["Service hierarchy", "Project photo layout", "Quote request flow", "Trust signals", "Local SEO basics", "Plainspoken copy"],
    packageFit: commonPackages,
    trustHeading: "Contractor proof should be concrete",
    trustIntro: "Real work photos, process details, and clear project fit usually matter more than fancy copy.",
    trustItems: ["Project photos", "Crew photos", "Truck or jobsite photos", "Reviews with permission", "Clear estimate steps"],
    faqs: [
      { question: "Do contractors need separate service pages?", answer: "Usually, yes. Separate pages help customers understand each service and can support local SEO." },
      { question: "Can Jolt use my job photos?", answer: "Yes, with permission and enough quality to present the work clearly." },
      { question: "Should my site list every city I serve?", answer: "List real service areas naturally. Do not create thin pages for every town." },
      { question: "Can Jolt improve my quote form?", answer: "Yes. Quote forms should ask enough to qualify the lead without creating friction." },
      { question: "What package fits most contractors?", answer: "Many contractors fit the Core Website Refresh, starting with a Free Website Teardown." },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "Bloomington-Normal Website Refresh Services", href: "/locations/bloomington-normal-il" },
    ],
    schemaTypes: ["Service", "FAQPage", "BreadcrumbList"],
    humanReviewChecklist: ["Confirm services.", "Add real project photos.", "Check licensing and claims.", "Avoid generic contractor copy."],
  },
  {
    slug: "/industries/med-spas",
    seoTitle: "Website Refreshes for Med Spas | Jolt",
    metaDescription:
      "Jolt helps med spas improve service pages, mobile booking paths, provider trust, and website clarity without unsupported claims.",
    eyebrow: "Med spas",
    h1: "Website Refreshes for Med Spas",
    intro: "Med spa websites need to explain services clearly, build trust carefully, and make booking or consultation requests easy on mobile.",
    primaryCta: "Request a Free Med Spa Website Teardown",
    targetKeyword: "website design for med spas",
    secondaryKeywords: ["med spa website refresh", "med spa landing page", "med spa website help"],
    searchIntent: "A med spa owner wants a clearer website that supports consultations and bookings.",
    whyThisPageExists: "Med spas need more careful copy, proof, imagery, and booking flow than generic local service pages.",
    uniqueValue: "The page highlights treatment clarity, provider proof, compliance review, and mobile booking.",
    proofToAdd: ["Treatment room photos", "Provider photos", "Credential details", "Business-approved treatment claims"],
    painHeading: "Where med spa websites create hesitation",
    painIntro: "People often compare several providers and may have quiet concerns before they book.",
    pains: ["Vague treatments", "Hidden booking CTAs", "Weak provider bios", "Unsupported claims", "Generic photos", "Unclear consultation process"],
    fixesHeading: "What Jolt fixes for med spas",
    fixes: ["Treatment page structure", "Mobile booking CTAs", "Plain-language service copy", "Provider trust sections", "Photo placement", "FAQs"],
    packageFit: commonPackages,
    trustHeading: "Claims need review",
    trustIntro: "Jolt improves clarity, but the business should review all treatment claims and credential language.",
    trustItems: ["Approved service language", "Real photos", "Credential details", "Consent-safe visuals", "Clear booking steps"],
    faqs: [
      { question: "Can Jolt write med spa treatment pages?", answer: "Yes, with source material from the business and review before publishing." },
      { question: "Can you guarantee bookings?", answer: "No. Jolt reduces website friction but does not guarantee bookings or leads." },
      { question: "Are landing pages useful for med spas?", answer: "Yes, especially for one treatment, consultation offer, or campaign." },
      { question: "Can you use stock photos?", answer: "Stock photos can fill gaps, but real photos usually build more trust." },
      { question: "What needs compliance review?", answer: "Treatment outcomes, credentials, before and after language, safety claims, and pricing details should be reviewed." },
    ],
    internalLinks: [
      { label: "Website Refreshes for Med Spas in Peoria", href: "/locations/peoria-il/med-spas" },
      ...coreLinks,
    ],
    schemaTypes: ["Service", "FAQPage", "BreadcrumbList"],
    humanReviewChecklist: ["Review all claims.", "Add real service list.", "Confirm photo consent rules.", "Check booking CTA accuracy."],
  },
  {
    slug: "/services/free-website-teardown",
    seoTitle: "Free Website Teardown for Local Service Businesses | Jolt",
    metaDescription:
      "Send Jolt your current website and get a practical review of what is working, what is causing friction, and what to fix first.",
    eyebrow: "Free Website Teardown",
    h1: "Free Website Teardown for Local Service Businesses",
    intro: "Send your current site and Jolt will review it from the perspective of a customer trying to understand your business and reach out.",
    primaryCta: "Request Your Free Teardown",
    targetKeyword: "free website teardown",
    secondaryKeywords: ["website review for small business", "local service business website audit", "website conversion review"],
    searchIntent: "A business owner wants low-risk feedback before committing to website work.",
    whyThisPageExists: "The teardown is Jolt's primary conversion offer and should be easy to understand.",
    uniqueValue: "It explains the teardown as a practical written review, not a generic sales audit.",
    proofToAdd: ["Sample teardown screenshot", "Example checklist", "Approved anonymized findings"],
    painHeading: "What the teardown looks for",
    painIntro: "The review focuses on friction that can stop a real customer from contacting you.",
    pains: ["Unclear offer", "Weak mobile experience", "Confusing navigation", "Missing trust signals", "Hard-to-use forms", "Thin service pages"],
    fixesHeading: "What you get back",
    fixes: ["A practical diagnosis", "Highest-priority fixes", "Package recommendation if there is a fit", "Notes you can use whether or not you hire Jolt"],
    packageFit: commonPackages,
    trustHeading: "Useful first, sales second",
    trustIntro: "The teardown should help the business owner understand the site better before any paid package is discussed.",
    trustItems: ["No giant sales deck", "No fake urgency", "No ranking guarantees", "No pressure to rebuild everything"],
    faqs: [
      { question: "Is the teardown really free?", answer: "Yes. It is the first step for understanding whether Jolt can help." },
      { question: "What do I need to send?", answer: "Your website URL and a few notes about what you want more customers to do." },
      { question: "How long does it take?", answer: "The form takes a few minutes. Jolt follows up within a few days." },
      { question: "Will you tell me what package I need?", answer: "Yes, if there is a clear fit. Sometimes the answer may be that a smaller fix comes first." },
      { question: "Can I use the feedback myself?", answer: "Yes. The teardown should be useful whether you work with Jolt or not." },
    ],
    internalLinks: [
      { label: "Core Website Refresh", href: "/services/core-website-refresh" },
      { label: "Starter Landing Page", href: "/services/starter-landing-page" },
      { label: "Bloomington-Normal Website Refresh Services", href: "/locations/bloomington-normal-il" },
    ],
    schemaTypes: ["Service", "FAQPage", "BreadcrumbList"],
    humanReviewChecklist: ["Add sample teardown.", "Connect form handler.", "Keep CTA visible.", "Avoid overpromising outcomes."],
  },
  {
    slug: "/services/starter-landing-page",
    seoTitle: "Starter Landing Pages for Local Service Businesses | Jolt",
    metaDescription:
      "Focused landing pages for local service businesses that need one clear page for a service, campaign, or quote request path.",
    eyebrow: "Starter Landing Page",
    h1: "Starter Landing Pages for Local Service Businesses",
    intro: "A Starter Landing Page gives one offer, service, or campaign a clearer path from visitor to quote request.",
    primaryCta: "Request a Free Website Teardown",
    targetKeyword: "landing pages for local businesses",
    secondaryKeywords: ["landing pages for landscapers", "service business landing page", "local lead landing page"],
    searchIntent: "A business owner needs one focused page without rebuilding the whole site.",
    whyThisPageExists: "This is a clear productized offer that fits seasonal services, ad traffic, and specific service pushes.",
    uniqueValue: "The page explains when a landing page is enough and when a full refresh is better.",
    proofToAdd: ["Wireframe examples", "Approved landing page screenshots", "Offer-specific photo ideas"],
    painHeading: "When one focused page beats a full rebuild",
    painIntro: "Sometimes the main site is too broad, but one service needs a clean path to inquiry.",
    pains: ["Ad traffic lands on a generic homepage", "Seasonal service pages are too thin", "A new service needs a simple launch page", "The current site cannot be changed quickly"],
    fixesHeading: "What the Starter Landing Page includes",
    fixes: ["Clear offer", "Mobile-first layout", "Quote CTA", "Trust section", "FAQs", "Simple local SEO structure"],
    packageFit: commonPackages,
    trustHeading: "Focused pages still need real proof",
    trustIntro: "A landing page works well when it uses specific service details, real photos, and a clear next step.",
    trustItems: ["Service photos", "Short process notes", "Review snippets with permission", "Clear form or booking path"],
    faqs: [
      { question: "Is this a full website?", answer: "No. It is one focused page for one service, campaign, or offer." },
      { question: "Can it be used for ads?", answer: "Yes. It can give paid traffic a more focused destination than the homepage." },
      { question: "Can it rank in Google?", answer: "It can support search if it is useful and specific, but no ranking is guaranteed." },
      { question: "What do you need from me?", answer: "Service details, photos if available, service area, and the action you want visitors to take." },
      { question: "When is Core Website Refresh better?", answer: "When the problems are sitewide across the homepage, navigation, service pages, and contact flow." },
    ],
    internalLinks: [
      { label: "Free Website Teardown", href: "/services/free-website-teardown" },
      { label: "Core Website Refresh", href: "/services/core-website-refresh" },
      { label: "What To Do If Your Website Looks Bad on Mobile", href: "/website-problems/website-looks-bad-on-mobile" },
    ],
    schemaTypes: ["Service", "FAQPage", "BreadcrumbList"],
    humanReviewChecklist: ["Define offer clearly.", "Add service-specific proof.", "Confirm CTA.", "Avoid creating thin landing pages for every keyword."],
  },
  {
    slug: "/services/core-website-refresh",
    seoTitle: "Core Website Refresh for Local Service Businesses | Jolt",
    metaDescription:
      "A practical website refresh for local service businesses with outdated, confusing, or underperforming websites.",
    eyebrow: "Core Website Refresh",
    h1: "Core Website Refresh for Local Service Businesses",
    intro: "The Core Website Refresh is for businesses whose current site needs clearer messaging, better mobile structure, and a stronger path to inquiry.",
    primaryCta: "Request a Free Website Teardown",
    targetKeyword: "small business website refresh",
    secondaryKeywords: ["local service business website redesign", "website refresh for service businesses", "website help for small businesses"],
    searchIntent: "A business owner wants a practical website improvement package without a full custom agency process.",
    whyThisPageExists: "This is Jolt's primary paid offer and should explain fit, scope, and outcomes clearly.",
    uniqueValue: "The page positions refresh work as practical conversion improvement instead of cheap AI websites or custom agency bloat.",
    proofToAdd: ["Before and after screenshots", "Process examples", "Approved client examples", "Package scope details"],
    painHeading: "When a refresh is the right fit",
    painIntro: "A refresh is usually right when the current site exists, but it is not making the business easy to understand or contact.",
    pains: ["Outdated layout", "Unclear homepage", "Weak service pages", "Poor mobile flow", "Buried contact path", "Generic copy"],
    fixesHeading: "What the Core Website Refresh improves",
    fixes: ["Messaging", "Layout", "Service pages", "Mobile quote flow", "Trust sections", "Local SEO basics", "CTA placement"],
    packageFit: commonPackages,
    trustHeading: "Practical scope, clear priorities",
    trustIntro: "The refresh should focus on the highest-impact website friction before adding anything extra.",
    trustItems: ["Teardown-led priorities", "Clear deliverables", "No bloated retainer", "No fake guarantees"],
    faqs: [
      { question: "How is this different from a full redesign?", answer: "A refresh improves what matters most without assuming every part of the site needs to be rebuilt." },
      { question: "How do I know if I am a fit?", answer: "Start with the Free Website Teardown." },
      { question: "Can you work with my existing platform?", answer: "Often, yes. The teardown will identify whether the platform is workable." },
      { question: "Does this include copywriting?", answer: "Yes, practical conversion copy is part of the refresh scope when needed." },
      { question: "Does this include SEO?", answer: "It includes foundational structure and page clarity that support SEO, not ranking guarantees." },
    ],
    internalLinks: [
      { label: "Free Website Teardown", href: "/services/free-website-teardown" },
      { label: "Bloomington-Normal Website Refresh Services", href: "/locations/bloomington-normal-il" },
      { label: "Website Refreshes for Contractors", href: "/industries/contractors" },
    ],
    schemaTypes: ["Service", "FAQPage", "BreadcrumbList"],
    humanReviewChecklist: ["Add final scope details.", "Clarify timeline and pricing if available.", "Add proof only when documented.", "Keep expectations grounded."],
  },
  {
    slug: "/website-problems/website-looks-bad-on-mobile",
    seoTitle: "What To Do If Your Website Looks Bad on Mobile | Jolt",
    metaDescription:
      "A practical guide for local service businesses whose websites look dated, cramped, or hard to use on mobile.",
    eyebrow: "Website problem",
    h1: "What To Do If Your Website Looks Bad on Mobile",
    intro: "Most local service customers check your website from a phone. If the mobile version is cramped, slow, or confusing, good customers can leave before they contact you.",
    primaryCta: "Request a Free Mobile Website Teardown",
    targetKeyword: "website looks bad on mobile",
    secondaryKeywords: ["small business website mobile problems", "mobile website help", "local business website mobile"],
    searchIntent: "A business owner notices the mobile site feels broken or outdated and wants to know what to fix.",
    whyThisPageExists: "Mobile problems are a common, high-intent symptom that can lead naturally to a teardown.",
    uniqueValue: "The page gives a practical diagnostic checklist for local service websites.",
    proofToAdd: ["Mobile screenshot examples", "Before and after mobile layouts", "Common mobile teardown findings"],
    painHeading: "Signs your mobile site is costing you inquiries",
    painIntro: "Mobile issues are not always dramatic. Sometimes the site technically works but makes every next step harder.",
    pains: ["Tiny text", "Buttons too close together", "Phone number hard to tap", "Forms that feel too long", "Images that push the CTA down", "Navigation that hides key services"],
    fixesHeading: "What Jolt checks first",
    fixes: ["First-screen clarity", "Tap targets", "Sticky or visible CTA options", "Service page readability", "Form length", "Load and layout issues"],
    packageFit: commonPackages,
    trustHeading: "Mobile fixes should be judged by customer behavior",
    trustIntro: "A strong mobile site is not just prettier. It helps someone understand the business and take the next step faster.",
    trustItems: ["Phone CTA visibility", "Quote form clarity", "Readable service sections", "Real photos that do not crowd the page"],
    faqs: [
      { question: "Do I need a new website if mobile looks bad?", answer: "Not always. Some mobile problems can be fixed with a focused refresh." },
      { question: "What is the first thing to check?", answer: "Check whether a customer can understand what you do and tap to call or request a quote without hunting." },
      { question: "Can Jolt review mobile screenshots?", answer: "Yes. The Free Website Teardown includes mobile usability notes." },
      { question: "Are mobile issues bad for SEO?", answer: "A poor mobile experience can hurt users and may limit search performance, but Jolt focuses first on practical customer friction." },
      { question: "What package usually fits?", answer: "If the problem is sitewide, Core Website Refresh is often the fit. If it is one campaign page, Starter Landing Page may be enough." },
    ],
    internalLinks: [
      { label: "Free Website Teardown", href: "/services/free-website-teardown" },
      { label: "Core Website Refresh", href: "/services/core-website-refresh" },
      { label: "Starter Landing Page", href: "/services/starter-landing-page" },
    ],
    schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
    humanReviewChecklist: ["Add real mobile screenshots.", "Avoid vague mobile advice.", "Make CTA visible on mobile.", "Link to teardown."],
  },
  {
    slug: "/website-problems/website-not-getting-quote-requests",
    seoTitle: "Why Your Website Is Not Getting Quote Requests | Jolt",
    metaDescription:
      "A practical guide for local service businesses whose websites get visitors but not enough calls, form fills, or quote requests.",
    eyebrow: "Website problem",
    h1: "Why Your Website Is Not Getting Quote Requests",
    intro: "If people visit your website but do not call, book, or request a quote, the issue is often friction, not traffic alone.",
    primaryCta: "Request a Free Website Teardown",
    targetKeyword: "website not getting quote requests",
    secondaryKeywords: ["website not getting leads", "small business website not converting", "local business quote requests"],
    searchIntent: "A business owner is frustrated that the website is not producing enough inquiries.",
    whyThisPageExists: "This is one of Jolt's clearest problem-aware pages and maps directly to the teardown offer.",
    uniqueValue: "The page helps owners diagnose offer clarity, trust, mobile flow, forms, and service page issues.",
    proofToAdd: ["Teardown examples", "Annotated homepage screenshots", "Before and after CTA examples"],
    painHeading: "Common reasons visitors do not reach out",
    painIntro: "A visitor may be interested but still leave if the site does not make the next step feel clear and worth taking.",
    pains: ["The offer is unclear", "The next step is buried", "The service page does not answer enough questions", "The form asks too much", "Trust signals are weak", "The site sounds generic"],
    fixesHeading: "What Jolt looks for",
    fixes: ["Message clarity", "CTA placement", "Service page depth", "Trust signals", "Mobile path", "Form friction", "Local relevance"],
    packageFit: commonPackages,
    trustHeading: "Better quote flow starts with clarity",
    trustIntro: "Jolt does not promise leads. It fixes the parts of the site that make a qualified visitor hesitate.",
    trustItems: ["Clearer services", "Visible quote buttons", "Specific proof", "Simpler forms", "Better FAQs"],
    faqs: [
      { question: "Why do people visit but not contact us?", answer: "They may not understand what you do, where you work, whether you are a fit, or what happens after they submit a form." },
      { question: "Should I buy more traffic first?", answer: "Not if the current site has clear conversion friction. Fix the path before sending more people to it." },
      { question: "Can a website refresh increase leads?", answer: "It can reduce friction and improve inquiry paths, but Jolt does not guarantee lead volume." },
      { question: "What should the quote form ask?", answer: "Enough to qualify the request without making the visitor feel like they are doing homework." },
      { question: "How do I know what to fix first?", answer: "Start with the Free Website Teardown." },
    ],
    internalLinks: [
      { label: "Free Website Teardown", href: "/services/free-website-teardown" },
      { label: "Core Website Refresh", href: "/services/core-website-refresh" },
      { label: "Website Refreshes for Contractors", href: "/industries/contractors" },
      { label: "Bloomington-Normal Website Refresh Services", href: "/locations/bloomington-normal-il" },
    ],
    schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
    humanReviewChecklist: ["Add real examples.", "Avoid lead guarantees.", "Keep diagnosis practical.", "Make teardown CTA obvious."],
  },
  ...(expandedSeoPages as SeoPage[]),
];

export const seoPageMap = new Map(seoPages.map((page) => [page.slug, page]));
