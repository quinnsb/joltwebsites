# Prairecraft

A single-page marketing website for Prairecraft — a lean local web design and lead-generation studio based in Bloomington-Normal, Illinois. Helps service businesses turn outdated websites into clean, mobile-friendly sales pages that get more quote requests.

Live URL: prairecraft.com

## Run & Operate

- `pnpm --filter @workspace/site-sprint-studio run dev` — run the marketing site (dev)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000, not yet used)
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- React + TypeScript + Vite + Tailwind CSS
- Framer Motion for scroll animations
- react-hook-form + Zod for form validation
- Lucide React for icons
- Wouter for client-side routing

## Where things live

```
artifacts/site-sprint-studio/src/
  App.tsx                    — route definitions (/ and /portfolio)
  index.css                  — theme colors, fonts, CSS variables
  lib/
    scrollTo.ts              — shared anchor scroll utility
  components/
    Header.tsx               — sticky nav with mobile menu
    Hero.tsx                 — headline, CTA buttons, audit card visual
    ProblemCards.tsx         — 6 problem cards (id="problem")
    SolutionCards.tsx        — 3 service cards
    IndustryGrid.tsx         — industry list (id="who-its-for")
    PricingCards.tsx         — 4 pricing tiers (id="packages")
    ExampleRefreshes.tsx     — 3 concept cards (id="examples")
    ProcessSteps.tsx         — 4-step process (id="how-it-works")
    TeardownForm.tsx         — contact form (id="free-teardown")
    FAQ.tsx                  — accordion FAQ (id="faq")
    Footer.tsx               — links, email, copyright
  pages/
    Portfolio.tsx            — /portfolio route, before/after cards
    not-found.tsx            — 404 page
```

## Customization Guide

**To change the business name:**
- `src/components/Header.tsx` — logo text
- `src/components/Footer.tsx` — footer name and email
- `src/components/SolutionCards.tsx` — "Prairecraft helps local…" body copy
- `src/pages/Portfolio.tsx` — header, footer, meta text

**To change pricing:**
- `src/components/PricingCards.tsx` — the `packages` array at the top of the file (price, features, CTA label)

**To change copy (headlines, body text):**
- Each component has its copy inline. All section headlines are in the respective component files listed above.
- Hero copy: `src/components/Hero.tsx`
- Problem cards: `src/components/ProblemCards.tsx` → `problems` array
- FAQ answers: `src/components/FAQ.tsx` → `faqs` array

**To change colors:**
- `src/index.css` → `:root` block
- Primary accent (forest green): `--primary: 144 61% 26%`
- Background (warm off-white): `--background: 40 18% 97%`
- Text (dark charcoal): `--foreground: 0 0% 10%`

**To change fonts:**
- `src/index.css` line 1 — Google Fonts import URL
- `src/index.css` → `--app-font-sans` and `--app-font-display` variables

**To wire up the contact form:**
- `src/components/TeardownForm.tsx` → `onSubmit` function
- Currently logs values to console. Add your Formspree/Resend/Airtable fetch call there.
- See the TODO comment in the file for an example Formspree snippet.

**To add a new portfolio example:**
- `src/pages/Portfolio.tsx` → `portfolioItems` array — add a new object following the same shape.

**To add/remove FAQ items:**
- `src/components/FAQ.tsx` → `faqs` array

**To update the email address:**
- `src/components/Footer.tsx` — `href="mailto:..."` and display text
- `src/pages/Portfolio.tsx` — footer email link

## Architecture decisions

- Single-page app with anchor navigation; only two routes: `/` (home) and `/portfolio`
- `scrollTo` extracted to `src/lib/scrollTo.ts` to avoid duplication across components
- Anchor IDs: `how-it-works` → ProcessSteps, `problem` → ProblemCards, `packages` → PricingCards, `examples` → ExampleRefreshes, `who-its-for` → IndustryGrid, `free-teardown` → TeardownForm, `faq` → FAQ
- Form has no backend yet — wire up in `TeardownForm.tsx` `onSubmit`
- No dark mode — light mode only, warm off-white palette

## User preferences

- Business name: Prairecraft (URL: prairecraft.com)
- Email: hello@prairecraft.com
- Location: Bloomington-Normal, Illinois
- Accent color: forest green (#1a6b3a)
- Tone: practical, local, trustworthy, slightly punchy — no agency buzzwords
