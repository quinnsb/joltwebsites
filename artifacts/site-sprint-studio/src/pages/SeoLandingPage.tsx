import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ClipboardCheck, Link as LinkIcon, Search } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TeardownForm } from "@/components/TeardownForm";
import { Button } from "@/components/ui/button";
import { scrollTo } from "@/lib/scrollTo";
import type { SeoPage } from "@/data/seoPages";

function updateMeta(name: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.name = name;
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function pageSchema(page: SeoPage) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": page.schemaTypes.includes("Article") ? "Article" : "Service",
        name: page.h1,
        headline: page.h1,
        description: page.metaDescription,
        areaServed: "Central Illinois",
        provider: {
          "@type": "LocalBusiness",
          name: "Jolt",
          areaServed: "Central Illinois",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.h1,
            item: page.slug,
          },
        ],
      },
    ],
  };
}

export function SeoLandingPage({ page }: { page: SeoPage }) {
  useEffect(() => {
    document.title = page.seoTitle;
    updateMeta("description", page.metaDescription);
  }, [page]);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#f7f0df] font-sans text-[#17130b]">
      <Header />
      <main className="flex-grow">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema(page)) }} />

        <section className="relative overflow-hidden border-b-2 border-[#17130b] pt-24 pb-14 md:pt-32 md:pb-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-35"
            style={{
              backgroundImage:
                "linear-gradient(rgba(23,19,11,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(23,19,11,0.08) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-14 items-start">
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#17130b] px-4 py-2 text-xs font-bold uppercase tracking-normal text-[#f4cf30]">
                  <Search size={14} />
                  {page.eyebrow}
                </div>
                <h1 className="mb-6 font-display text-4xl font-bold leading-[0.98] md:text-5xl">
                  {page.h1}
                </h1>
                <p className="mb-8 text-lg leading-relaxed text-[#524a3d] md:text-xl">
                  {page.intro}
                </p>
                {page.quickAnswer && (
                  <div className="mb-8 rounded-2xl border-2 border-[#17130b] bg-white p-5 shadow-[7px_7px_0_#17130b] md:p-6">
                    <p className="text-xs font-bold uppercase tracking-normal text-[#b9432b] mb-2">Quick answer</p>
                    <p className="text-base md:text-lg leading-relaxed text-[#17130b]">
                      {page.quickAnswer}
                    </p>
                  </div>
                )}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    type="button"
                    onClick={() => scrollTo("free-teardown")}
                    className="h-12 rounded-lg border-2 border-[#17130b] bg-[#f4cf30] px-6 text-base font-bold text-[#17130b] shadow-[4px_4px_0_#17130b] hover:bg-[#ffe36a]"
                  >
                    {page.primaryCta}
                  </Button>
                  {page.secondaryCta && (
                    <Button
                      size="lg"
                      variant="outline"
                      type="button"
                      onClick={() => scrollTo("package-fit")}
                      className="h-12 rounded-lg border-2 border-[#17130b] bg-white px-6 text-base font-bold text-[#17130b] shadow-[4px_4px_0_#17130b]"
                    >
                      {page.secondaryCta}
                    </Button>
                  )}
                </div>
              </div>

              <aside className="rounded-2xl border-2 border-[#17130b] bg-white p-6 shadow-[8px_8px_0_#17130b]">
                <p className="text-xs font-bold text-[#b9432b] uppercase tracking-normal mb-3">What this helps with</p>
                <ul className="space-y-3 text-sm">
                  {page.pains.slice(0, 4).map((pain) => (
                    <li key={pain} className="flex gap-3 text-[#5f5748] leading-relaxed">
                      <CheckCircle2 size={15} className="text-[#347f4f] mt-0.5 shrink-0" />
                      {pain}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-y-2 border-[#17130b] bg-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-[0.75fr_1fr] gap-10 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">{page.painHeading}</h2>
                <p className="text-[#5f5748] leading-relaxed">{page.painIntro}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {page.pains.map((pain) => (
                  <div key={pain} className="rounded-lg border-2 border-[#17130b] bg-[#f7f0df] p-4">
                    <div className="flex gap-3">
                      <CheckCircle2 size={17} className="text-[#347f4f] mt-0.5 shrink-0" />
                      <p className="text-sm leading-relaxed">{pain}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">{page.fixesHeading}</h2>
              <p className="text-[#5f5748] leading-relaxed">
                Jolt focuses on website friction that affects real customer behavior: clarity, trust, mobile usability, and the path to contact.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {page.fixes.map((fix) => (
                <div key={fix} className="rounded-lg border-2 border-[#17130b] bg-white p-5 shadow-[5px_5px_0_#17130b]">
                  <CheckCircle2 size={18} className="text-[#347f4f] mb-3" />
                  <p className="font-medium">{fix}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="package-fit" className="border-y-2 border-[#17130b] bg-[#17130b] py-16 text-white md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Which Jolt package fits?</h2>
              <p className="text-white/65 leading-relaxed">
                Start with the teardown, then choose the smallest practical fix that matches the problem.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                ["Free Website Teardown", page.packageFit.teardown],
                ["Starter Landing Page", page.packageFit.starter],
                ["Core Website Refresh", page.packageFit.refresh],
                ["Growth Support", page.packageFit.growth],
              ].map(([title, text]) => (
                <div key={title} className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
                  <h3 className="font-display text-xl font-bold mb-3">{title}</h3>
                  <p className="text-sm text-white/65 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-[0.8fr_1fr] gap-10">
              <div>
                <div className="inline-flex w-11 h-11 rounded-full bg-[#f4cf30] text-[#17130b] items-center justify-center mb-5">
                  <ClipboardCheck size={21} />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">{page.trustHeading}</h2>
                <p className="text-[#5f5748] leading-relaxed">{page.trustIntro}</p>
              </div>
              <div className="space-y-3">
                {page.trustItems.map((item) => (
                  <div key={item} className="flex gap-3 border-b border-[#17130b]/15 pb-3">
                    <CheckCircle2 size={17} className="text-[#347f4f] mt-0.5 shrink-0" />
                    <p className="text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">FAQs</h2>
            <div className="space-y-4">
              {page.faqs.map((faq) => (
                <div key={faq.question} className="rounded-lg border-2 border-[#17130b] bg-white p-5">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-[#5f5748] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl border-2 border-[#17130b] bg-white p-6 shadow-[8px_8px_0_#17130b]">
                <div className="flex items-center gap-3 mb-5">
                  <LinkIcon size={19} className="text-[#b9432b]" />
                  <h2 className="font-display text-2xl font-bold">Related website help</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {page.internalLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group flex items-center justify-between gap-3 rounded-lg border-2 border-[#17130b] bg-[#f7f0df] px-4 py-3 text-sm font-bold transition-colors hover:bg-[#f4cf30]"
                    >
                      <span>{link.label}</span>
                      <ArrowRight size={15} className="text-[#5f5748] group-hover:text-[#17130b]" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <TeardownForm />
      </main>
      <Footer />
    </div>
  );
}
