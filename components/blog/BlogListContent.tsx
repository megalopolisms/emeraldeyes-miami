"use client";

import Link from "next/link";
import {
  Anchor,
  BookOpen,
  Compass,
  DollarSign,
  Heart,
  ShieldCheck,
  Waves,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/lib/language-context";

// ---------------------------------------------------------------------------
// All Articles — data-driven grid
// ---------------------------------------------------------------------------
const ARTICLES = [
  {
    slug: "coast-guard-inspection-bareboat-charter",
    titleKey: "blog.cg.title",
    excerptKey: "blog.cg.excerpt",
    date: "March 13, 2026",
    readTimeKey: "blog.cg.readTime",
    categoryKey: "blog.cat.safety",
    icon: ShieldCheck,
    featured: true,
  },
  {
    slug: "haulover-sandbar-yacht-charter-miami",
    titleKey: "blog.hs.title",
    excerptKey: "blog.hs.excerpt",
    date: "March 14, 2026",
    readTimeKey: "blog.hs.readTime",
    categoryKey: "blog.cat.destinations",
    icon: Compass,
  },
  {
    slug: "first-time-yacht-rental-miami",
    titleKey: "blog.ft.title",
    excerptKey: "blog.ft.excerpt",
    date: "March 14, 2026",
    readTimeKey: "blog.ft.readTime",
    categoryKey: "blog.cat.guides",
    icon: BookOpen,
  },
  {
    slug: "miami-yacht-charter-prices",
    titleKey: "blog.yp.title",
    excerptKey: "blog.yp.excerpt",
    date: "March 14, 2026",
    readTimeKey: "blog.yp.readTime",
    categoryKey: "blog.cat.guides",
    icon: DollarSign,
  },
  {
    slug: "jet-ski-license-miami",
    titleKey: "blog.js.title",
    excerptKey: "blog.js.excerpt",
    date: "March 14, 2026",
    readTimeKey: "blog.js.readTime",
    categoryKey: "blog.cat.guides",
    icon: Waves,
  },
  {
    slug: "bachelorette-party-yacht-miami",
    titleKey: "blog.bach.title",
    excerptKey: "blog.bach.excerpt",
    date: "March 14, 2026",
    readTimeKey: "blog.bach.readTime",
    categoryKey: "blog.cat.guides",
    icon: Heart,
  },
];

export default function BlogListContent() {
  const { t } = useLanguage();

  return (
    <main itemScope itemType="https://schema.org/Blog">
      {/* Compact Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(46, 196, 165, 0.18), transparent 32%), radial-gradient(circle at bottom right, rgba(212, 168, 67, 0.14), transparent 28%), linear-gradient(180deg, #0d1b2a 0%, #132436 100%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-20 md:px-6 md:pb-14 md:pt-32 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl leading-none text-white sm:text-4xl md:text-5xl">
            {t("blog.title")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            {t("blog.subtitle")}
          </p>
        </div>
      </section>

      {/* All Articles Grid */}
      <Section>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((article) => {
              const Icon = article.icon;
              return (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-[--color-navy-light]/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[--color-emerald]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[--color-emerald]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-[--color-emerald]">
                      <Icon className="h-3 w-3" />
                      {t(article.categoryKey)}
                    </span>
                    {article.featured && (
                      <span className="rounded-full border border-[--color-gold]/25 bg-[--color-gold]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-[--color-gold]">
                        {t("blog.featured")}
                      </span>
                    )}
                  </div>

                  <h2 className="font-[family-name:var(--font-heading)] text-lg leading-snug text-white transition-colors group-hover:text-[--color-emerald]">
                    {t(article.titleKey)}
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-white/55 line-clamp-3 flex-1">
                    {t(article.excerptKey)}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[11px] text-white/35">
                      {article.date} &middot; {t(article.readTimeKey)}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[--color-emerald] group-hover:underline underline-offset-4">
                      <BookOpen className="h-3.5 w-3.5" />
                      Read
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="mx-auto max-w-3xl py-4 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Anchor className="h-6 w-6 text-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-white sm:text-3xl">
              {t("blog.ctaTitle")}
            </h2>
          </div>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/60">
            {t("blog.ctaText")}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/book" size="lg">
              {t("blog.ctaBook")}
            </Button>
            <Button href="/experiences" variant="secondary" size="lg">
              {t("blog.ctaExperiences")}
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
