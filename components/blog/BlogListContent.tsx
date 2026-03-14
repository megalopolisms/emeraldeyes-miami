"use client";

import Link from "next/link";
import {
  Anchor,
  BookOpen,
  Compass,
  FileText,
  ShieldCheck,
  Users,
  Waves,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/lib/language-context";

const POST = {
  slug: "coast-guard-inspection-bareboat-charter",
  titleKey: "blog.cg.title",
  excerptKey: "blog.cg.excerpt",
  date: "March 13, 2026",
  readTimeKey: "blog.cg.readTime",
  categoryKey: "blog.cat.safety",
  icon: ShieldCheck,
};

const FEATURE_POINTS = [
  { icon: Users, titleKey: "cg.step2.title" },
  { icon: FileText, titleKey: "cg.step3.title" },
  { icon: ShieldCheck, titleKey: "cg.step6.title" },
  { icon: Anchor, titleKey: "cg.pass.title" },
];

export default function BlogListContent() {
  const { t } = useLanguage();
  const PostIcon = POST.icon;

  return (
    <main itemScope itemType="https://schema.org/Blog">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(46, 196, 165, 0.18), transparent 32%), radial-gradient(circle at bottom right, rgba(212, 168, 67, 0.14), transparent 28%), linear-gradient(180deg, #0d1b2a 0%, #132436 100%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-20 md:px-6 md:pb-24 md:pt-36">
          <div className="grid gap-6 md:gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="max-w-xl">
              <span className="inline-flex items-center rounded-full border border-[--color-gold]/25 bg-[--color-gold]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-[--color-gold]">
                {t("blog.featured")}
              </span>
              <h1 className="mt-6 font-[family-name:var(--font-heading)] text-3xl leading-none text-white sm:text-4xl md:text-5xl lg:text-6xl">
                {t("blog.title")}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-white/68">
                {t("blog.subtitle")}
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/52">
                {t("blog.cornerstone")}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href={`/blog/${POST.slug}`} size="lg">
                  {t("blog.readArticle")}
                </Button>
                <Button href="/book" variant="secondary" size="lg">
                  {t("blog.ctaBook")}
                </Button>
              </div>
            </div>

            <Link
              href={`/blog/${POST.slug}`}
              className="group block rounded-[2rem] border border-white/10 bg-white/[0.04] p-1 shadow-[0_30px_90px_rgba(0,0,0,0.32)] transition-all duration-300 hover:-translate-y-1 hover:border-[--color-emerald]/35"
            >
              <div className="rounded-[calc(2rem-1px)] border border-white/6 bg-[--color-navy-light]/80 p-5 sm:p-6 md:p-8 lg:p-10 backdrop-blur">
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[--color-emerald]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-[--color-emerald]">
                    <PostIcon className="h-3.5 w-3.5" />
                    {t(POST.categoryKey)}
                  </span>
                  <span className="text-white/40">
                    {POST.date} &middot; {t(POST.readTimeKey)}
                  </span>
                </div>

                <h2 className="mt-4 font-[family-name:var(--font-heading)] text-2xl leading-tight text-white transition-colors group-hover:text-[--color-emerald] sm:mt-6 sm:text-3xl md:text-4xl">
                  {t(POST.titleKey)}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/62">
                  {t(POST.excerptKey)}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {FEATURE_POINTS.map((point) => (
                    <div
                      key={point.titleKey}
                      className="rounded-2xl border border-white/8 bg-[--color-navy]/80 p-4 transition-colors group-hover:border-[--color-emerald]/20"
                    >
                      <point.icon className="h-5 w-5 text-[--color-emerald]" />
                      <p className="mt-3 text-sm leading-relaxed text-white/72">
                        {t(point.titleKey)}
                      </p>
                    </div>
                  ))}
                </div>

                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[--color-emerald] group-hover:underline underline-offset-4">
                  <BookOpen className="h-4 w-4" />
                  {t("blog.readArticle")}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* More Articles */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 font-[family-name:var(--font-heading)] text-3xl text-white">
            {t("blog.moreArticles")}
          </h2>

          <div className="space-y-5">
            {/* Haulover Sandbar */}
            <Link
              href="/blog/haulover-sandbar-yacht-charter-miami"
              className="group block rounded-2xl border border-white/10 bg-[--color-navy-light]/60 p-5 sm:p-6 md:p-8 transition-all duration-300 hover:border-[--color-emerald]/30"
            >
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[--color-emerald]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-[--color-emerald]">
                  <Compass className="h-3.5 w-3.5" />
                  {t("blog.cat.destinations")}
                </span>
                <span className="text-xs text-white/40">
                  March 14, 2026 &middot; {t("blog.hs.readTime")}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl leading-snug text-white transition-colors group-hover:text-[--color-emerald] md:text-3xl">
                {t("blog.hs.title")}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/60">
                {t("blog.hs.excerpt")}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[--color-emerald] group-hover:underline underline-offset-4">
                <BookOpen className="h-4 w-4" />
                {t("blog.readArticle")}
              </span>
            </Link>

            {/* Jet Ski License */}
            <Link
              href="/blog/jet-ski-license-miami"
              className="group block rounded-2xl border border-white/10 bg-[--color-navy-light]/60 p-5 sm:p-6 md:p-8 transition-all duration-300 hover:border-[--color-emerald]/30"
            >
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[--color-emerald]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-[--color-emerald]">
                  <Waves className="h-3.5 w-3.5" />
                  {t("blog.cat.guides")}
                </span>
                <span className="text-xs text-white/40">
                  March 14, 2026 &middot; {t("blog.js.readTime")}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl leading-snug text-white transition-colors group-hover:text-[--color-emerald] md:text-3xl">
                {t("blog.js.title")}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/60">
                {t("blog.js.excerpt")}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[--color-emerald] group-hover:underline underline-offset-4">
                <BookOpen className="h-4 w-4" />
                {t("blog.readArticle")}
              </span>
            </Link>
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="mx-auto max-w-3xl py-8 text-center">
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
