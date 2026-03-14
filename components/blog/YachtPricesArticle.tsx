"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Anchor,
  Award,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  DollarSign,
  MapPin,
  Music,
  ShieldCheck,
  Sun,
  TrendingDown,
  Users,
  Waves,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/lib/language-context";
import { asset } from "@/lib/constants";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const GUIDE_SECTIONS = [
  { id: "short-answer", titleKey: "yp.nav.shortAnswer" },
  { id: "whats-included", titleKey: "yp.nav.included" },
  { id: "captain-crew", titleKey: "yp.nav.captain" },
  { id: "duration-pricing", titleKey: "yp.nav.duration" },
  { id: "add-ons", titleKey: "yp.nav.addons" },
  { id: "price-factors", titleKey: "yp.nav.factors" },
  { id: "save-money", titleKey: "yp.nav.save" },
  { id: "tipping-guide", titleKey: "yp.nav.tipping" },
  { id: "faq", titleKey: "yp.nav.faq" },
];

const INCLUDED_ITEMS = [
  { emoji: "\u{26F5}", key: "vessel" },
  { emoji: "\u{1F3B5}", key: "sound" },
  { emoji: "\u{26FD}", key: "fuel" },
  { emoji: "\u{1F9CA}", key: "ice" },
  { emoji: "\u{1FA82}", key: "mats" },
  { emoji: "\u{1F3C4}", key: "toys" },
  { emoji: "\u{1F4A7}", key: "water" },
  { emoji: "\u{1F942}", key: "glass" },
];

const DURATION_CARDS = [
  {
    titleKey: "yp.dur.4hr.title",
    priceKey: "yp.dur.4hr.price",
    descKey: "yp.dur.4hr.desc",
    perHourKey: "yp.dur.4hr.perHour",
    accent: "emerald" as const,
    icon: Clock,
  },
  {
    titleKey: "yp.dur.6hr.title",
    priceKey: "yp.dur.6hr.price",
    descKey: "yp.dur.6hr.desc",
    perHourKey: "yp.dur.6hr.perHour",
    accent: "gold" as const,
    icon: Sun,
  },
  {
    titleKey: "yp.dur.8hr.title",
    priceKey: "yp.dur.8hr.price",
    descKey: "yp.dur.8hr.desc",
    perHourKey: "yp.dur.8hr.perHour",
    accent: "emerald" as const,
    icon: Waves,
  },
];

const ADDON_CARDS = [
  {
    titleKey: "yp.addon.captain.title",
    priceKey: "yp.addon.captain.price",
    descKey: "yp.addon.captain.desc",
    icon: ShieldCheck,
  },
  {
    titleKey: "yp.addon.sax.title",
    priceKey: "yp.addon.sax.price",
    descKey: "yp.addon.sax.desc",
    icon: Music,
  },
  {
    titleKey: "yp.addon.sushi.title",
    priceKey: "yp.addon.sushi.price",
    descKey: "yp.addon.sushi.desc",
    icon: Award,
  },
  {
    titleKey: "yp.addon.jetski.title",
    priceKey: "yp.addon.jetski.price",
    descKey: "yp.addon.jetski.desc",
    icon: Waves,
  },
  {
    titleKey: "yp.addon.catering.title",
    priceKey: "yp.addon.catering.price",
    descKey: "yp.addon.catering.desc",
    icon: Award,
  },
  {
    titleKey: "yp.addon.dj.title",
    priceKey: "yp.addon.dj.price",
    descKey: "yp.addon.dj.desc",
    icon: Music,
  },
  {
    titleKey: "yp.addon.photo.title",
    priceKey: "yp.addon.photo.price",
    descKey: "yp.addon.photo.desc",
    icon: Sun,
  },
  {
    titleKey: "yp.addon.hookah.title",
    priceKey: "yp.addon.hookah.price",
    descKey: "yp.addon.hookah.desc",
    icon: Waves,
  },
  {
    titleKey: "yp.addon.decor.title",
    priceKey: "yp.addon.decor.price",
    descKey: "yp.addon.decor.desc",
    icon: Award,
  },
];

const FACTOR_CARDS = [
  {
    titleKey: "yp.factor.size.title",
    textKey: "yp.factor.size.text",
    icon: Anchor,
  },
  {
    titleKey: "yp.factor.season.title",
    textKey: "yp.factor.season.text",
    icon: Calendar,
  },
  {
    titleKey: "yp.factor.group.title",
    textKey: "yp.factor.group.text",
    icon: Users,
  },
  {
    titleKey: "yp.factor.day.title",
    textKey: "yp.factor.day.text",
    icon: Sun,
  },
];

const SAVE_TIPS = [
  {
    num: 1,
    titleKey: "yp.save.weekday.title",
    textKey: "yp.save.weekday.text",
    accent: "emerald" as const,
  },
  {
    num: 2,
    titleKey: "yp.save.offpeak.title",
    textKey: "yp.save.offpeak.text",
    accent: "emerald" as const,
  },
  {
    num: 3,
    titleKey: "yp.save.direct.title",
    textKey: "yp.save.direct.text",
    accent: "gold" as const,
  },
  {
    num: 4,
    titleKey: "yp.save.longer.title",
    textKey: "yp.save.longer.text",
    accent: "gold" as const,
  },
];

const FAQ_ITEMS = [
  { qKey: "yp.faq.q1", aKey: "yp.faq.a1" },
  { qKey: "yp.faq.q2", aKey: "yp.faq.a2" },
  { qKey: "yp.faq.q3", aKey: "yp.faq.a3" },
  { qKey: "yp.faq.q4", aKey: "yp.faq.a4" },
  { qKey: "yp.faq.q5", aKey: "yp.faq.a5" },
  { qKey: "yp.faq.q6", aKey: "yp.faq.a6" },
  { qKey: "yp.faq.q7", aKey: "yp.faq.a7" },
  { qKey: "yp.faq.q8", aKey: "yp.faq.a8" },
];

const RELATED_LINKS = [
  {
    href: "/experiences/haulover-sandbar-yacht-miami",
    labelKey: "yp.related.sandbar",
  },
  {
    href: "/blog/haulover-sandbar-yacht-charter-miami",
    labelKey: "yp.related.haulover",
  },
  {
    href: "/experiences/sunset-cruise-miami",
    labelKey: "yp.related.sunset",
  },
  { href: "/book", labelKey: "yp.related.book" },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function YachtPricesArticle() {
  const { t } = useLanguage();

  return (
    <article itemScope itemType="https://schema.org/Article">
      {/* -- Hero --------------------------------------------------------- */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(46, 196, 165, 0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(212, 168, 67, 0.14), transparent 28%), linear-gradient(180deg, #0d1b2a 0%, #132436 100%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-6 px-5 pb-12 pt-20 md:gap-10 md:px-6 md:pb-20 md:pt-36 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div className="max-w-2xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-[--color-emerald] hover:underline underline-offset-4"
            >
              &larr; {t("blog.backToBlog")}
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[--color-emerald]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-[--color-emerald]">
                <DollarSign className="h-3.5 w-3.5" />
                {t("blog.cat.guides")}
              </span>
              <span className="text-white/50">
                <time dateTime="2026-03-14" itemProp="datePublished">
                  March 14, 2026
                </time>{" "}
                &middot; {t("yp.readTime")}
              </span>
            </div>
            <h1
              className="mt-6 font-[family-name:var(--font-heading)] text-2xl leading-tight text-white sm:text-3xl md:text-5xl lg:text-6xl"
              itemProp="headline"
            >
              {t("yp.heroTitle")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/72">
              {t("yp.intro1")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/58">
              {t("yp.intro2")}
            </p>
            <div
              className="mt-4 text-sm text-white/40"
              itemProp="author"
              itemScope
              itemType="https://schema.org/Person"
            >
              By <span itemProp="name">Sasha</span>,{" "}
              <span itemProp="jobTitle">
                Partner &amp; Director of Operations
              </span>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#short-answer"
                className="inline-flex items-center justify-center rounded-full border border-[--color-emerald] bg-transparent px-8 py-3.5 text-lg text-[--color-emerald] transition-colors hover:bg-[--color-emerald-dim]"
              >
                {t("yp.hero.seeBreakdown")}
              </a>
              <Button href="/book" variant="secondary" size="lg">
                {t("yp.cta.getQuote")}
              </Button>
            </div>
          </div>

          <div className="space-y-5">
            <div className="relative mx-auto w-full max-w-md">
              <div className="overflow-hidden rounded-[2rem] border-2 border-[--color-emerald]/20 shadow-[0_30px_80px_rgba(0,0,0,0.32)]">
                <Image
                  src={asset("/images/emeraldeyes.jpg")}
                  alt="Emerald Eyes Miami luxury yacht charter"
                  width={784}
                  height={1168}
                  sizes="(max-width: 768px) 100vw, 448px"
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-[2rem] border border-[--color-emerald]/15 bg-[--color-emerald]/5 -z-10" />
              <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full border border-[--color-gold]/15 bg-[--color-gold]/5 -z-10" />
            </div>

            {/* Quick Facts Card */}
            <div className="rounded-[2rem] border border-white/10 bg-[--color-navy]/80 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.25)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-gold]">
                {t("yp.quick.title")}
              </p>
              <div className="mt-4 space-y-3">
                {[
                  { icon: DollarSign, textKey: "yp.quick.starting" },
                  { icon: Clock, textKey: "yp.quick.minimum" },
                  { icon: CheckCircle, textKey: "yp.quick.included" },
                  { icon: Calendar, textKey: "yp.quick.peak" },
                ].map((item) => (
                  <div
                    key={item.textKey}
                    className="flex items-start gap-3 text-sm text-white/65"
                  >
                    <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-[--color-emerald]" />
                    <span>{t(item.textKey)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Trust Strip -------------------------------------------------- */}
      <Section
        dark
        className="border-y border-white/5 bg-[--color-navy-light]/60"
      >
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              label: t("trust.uscg"),
              sub: t("trust.uscg.sub"),
            },
            {
              icon: Award,
              label: t("trust.captains"),
              sub: t("trust.captains.sub"),
            },
            {
              icon: MapPin,
              label: t("trust.location"),
              sub: t("trust.location.sub"),
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-[2rem] border border-white/8 bg-[--color-navy]/45 p-5"
            >
              <item.icon className="h-7 w-7 text-[--color-emerald]" />
              <h2 className="mt-4 text-lg font-medium text-white">
                {item.label}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-white/60">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* -- The Short Answer + Sidebar Nav ------------------------------- */}
      <Section id="short-answer" className="scroll-mt-28">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="scroll-mt-28 rounded-[2rem] border border-white/8 bg-[--color-navy-light]/55 p-5 sm:p-6 md:p-8 lg:p-10">
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white md:text-4xl">
              {t("yp.short.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75">
              {t("yp.short.p1")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/68">
              {t("yp.short.p2")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/68">
              {t("yp.short.p3")}
            </p>
            <div className="mt-6 rounded-2xl border border-[--color-emerald]/20 bg-[--color-emerald]/5 px-5 py-4">
              <p className="text-sm font-medium text-[--color-emerald]">
                {t("yp.short.note")}
              </p>
            </div>
          </div>

          {/* Sidebar Nav */}
          <aside className="self-start rounded-[2rem] border border-white/8 bg-[--color-navy-light]/80 p-6 lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-gold]">
              {t("yp.nav.title")}
            </p>
            <nav className="mt-4 space-y-2">
              {GUIDE_SECTIONS.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/65 transition-colors hover:bg-[--color-navy]/80 hover:text-[--color-emerald]"
                >
                  <ChevronRight className="h-4 w-4 text-[--color-emerald] transition-transform group-hover:translate-x-1" />
                  {t(section.titleKey)}
                </a>
              ))}
            </nav>
          </aside>
        </div>
      </Section>

      {/* -- What's Included ---------------------------------------------- */}
      <Section id="whats-included" dark className="scroll-mt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-6 md:gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-[2rem] border-2 border-[--color-emerald]/20 shadow-[0_26px_70px_rgba(0,0,0,0.26)]">
              <Image
                src={asset("/images/sax.jpg")}
                alt="Live saxophone performance on a Miami yacht charter"
                width={832}
                height={1248}
                sizes="(max-width: 768px) 100vw, 448px"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-[2rem] border border-[--color-emerald]/15 bg-[--color-emerald]/5 -z-10" />
            <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full border border-[--color-gold]/15 bg-[--color-gold]/5 -z-10" />
          </div>

          <div className="max-w-2xl">
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-gold]">
              {t("yp.included.label")}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl text-white md:text-4xl">
              {t("yp.included.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75">
              {t("yp.included.intro")}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {INCLUDED_ITEMS.map((item) => (
                <div
                  key={item.key}
                  className="flex items-start gap-3 rounded-2xl border border-[--color-emerald]/10 bg-[--color-emerald]/[0.03] p-4"
                >
                  <span className="shrink-0 text-2xl">{item.emoji}</span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {t(`yp.inc.${item.key}.title`)}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-white/55">
                      {t(`yp.inc.${item.key}.text`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* -- Your Captain & Crew ------------------------------------------ */}
      <Section id="captain-crew" className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-gold]">
              {t("yp.captain.label")}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl text-white sm:text-4xl md:text-5xl">
              {t("yp.captain.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/50">
              {t("yp.captain.intro")}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Anchor,
                titleKey: "yp.captain.bareboat.title",
                textKey: "yp.captain.bareboat.text",
                accent: "emerald",
              },
              {
                icon: ShieldCheck,
                titleKey: "yp.captain.addon.title",
                textKey: "yp.captain.addon.text",
                accent: "emerald",
              },
              {
                icon: Users,
                titleKey: "yp.captain.self.title",
                textKey: "yp.captain.self.text",
                accent: "gold",
              },
            ].map((item) => (
              <div
                key={item.titleKey}
                className="rounded-[1.75rem] border border-white/8 bg-[--color-navy-light]/55 p-6"
              >
                <item.icon
                  className={`h-8 w-8 ${
                    item.accent === "gold"
                      ? "text-[--color-gold]"
                      : "text-[--color-emerald]"
                  }`}
                />
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl text-white">
                  {t(item.titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {t(item.textKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* -- Charter Duration & Pricing ----------------------------------- */}
      <Section id="duration-pricing" className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white sm:text-4xl md:text-5xl">
              {t("yp.dur.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/50">
              {t("yp.dur.intro")}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {DURATION_CARDS.map((card) => (
              <div
                key={card.titleKey}
                className="rounded-[1.75rem] border border-white/8 bg-[--color-navy-light]/55 p-6"
              >
                <card.icon
                  className={`h-8 w-8 ${
                    card.accent === "gold"
                      ? "text-[--color-gold]"
                      : "text-[--color-emerald]"
                  }`}
                />
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl text-white">
                  {t(card.titleKey)}
                </h3>
                <p className="mt-2 font-[family-name:var(--font-heading)] text-3xl text-[--color-emerald]">
                  {t(card.priceKey)}
                </p>
                <p className="mt-1 text-xs text-white/40">
                  {t(card.perHourKey)}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {t(card.descKey)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-[--color-gold]/20 bg-[--color-gold]/5 px-5 py-4 text-center">
            <p className="text-sm font-medium text-[--color-gold]">
              {t("yp.dur.tipNote")}
            </p>
          </div>
        </div>
      </Section>

      {/* -- Add-On Costs ------------------------------------------------- */}
      <Section id="add-ons" dark className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white sm:text-4xl md:text-5xl">
              {t("yp.addons.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/50">
              {t("yp.addons.intro")}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ADDON_CARDS.map((addon) => (
              <div
                key={addon.titleKey}
                className="rounded-[1.5rem] border border-[--color-gold]/20 bg-[--color-navy]/70 p-5"
              >
                <addon.icon className="h-7 w-7 text-[--color-gold]" />
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-lg text-white">
                  {t(addon.titleKey)}
                </h3>
                <p className="mt-1 font-[family-name:var(--font-heading)] text-xl text-[--color-gold]">
                  {t(addon.priceKey)}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {t(addon.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* -- Factors That Affect Price ------------------------------------ */}
      <Section id="price-factors" className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white sm:text-4xl md:text-5xl">
              {t("yp.factors.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/50">
              {t("yp.factors.intro")}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {FACTOR_CARDS.map((factor) => (
              <div
                key={factor.titleKey}
                className="rounded-[1.5rem] border border-white/8 bg-[--color-navy-light]/55 p-6"
              >
                <factor.icon className="h-7 w-7 text-[--color-emerald]" />
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl text-white">
                  {t(factor.titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {t(factor.textKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* -- How to Save -------------------------------------------------- */}
      <Section id="save-money" dark className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold] sm:text-4xl md:text-5xl">
              {t("yp.save.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/55">
              {t("yp.save.intro")}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {SAVE_TIPS.map((tip) => (
              <div
                key={tip.titleKey}
                className="rounded-[1.75rem] border border-white/8 bg-[--color-navy-light]/55 p-6"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                      tip.accent === "gold"
                        ? "border border-[--color-gold]/30 bg-[--color-gold]/10 text-[--color-gold]"
                        : "border border-[--color-emerald]/30 bg-[--color-emerald]/10 text-[--color-emerald]"
                    }`}
                  >
                    {tip.num}
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl text-white">
                    {t(tip.titleKey)}
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/65">
                  {t(tip.textKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* -- Tipping Guide ------------------------------------------------ */}
      <Section id="tipping-guide" className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white sm:text-4xl md:text-5xl">
              {t("yp.tipping.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/50">
              {t("yp.tipping.intro")}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: DollarSign,
                titleKey: "yp.tipping.standard.title",
                textKey: "yp.tipping.standard.text",
                accent: "emerald",
              },
              {
                icon: CheckCircle,
                titleKey: "yp.tipping.example.title",
                textKey: "yp.tipping.example.text",
                accent: "emerald",
              },
              {
                icon: Users,
                titleKey: "yp.tipping.how.title",
                textKey: "yp.tipping.how.text",
                accent: "emerald",
              },
            ].map((item) => (
              <div
                key={item.titleKey}
                className="rounded-[1.75rem] border border-white/8 bg-[--color-navy-light]/55 p-6"
              >
                <item.icon className="h-8 w-8 text-[--color-emerald]" />
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl text-white">
                  {t(item.titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {t(item.textKey)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-[--color-emerald]/20 bg-[--color-emerald]/5 px-5 py-4 text-center">
            <p className="text-sm font-medium text-[--color-emerald]">
              {t("yp.tipping.note")}
            </p>
          </div>
        </div>
      </Section>

      {/* -- Mid CTA ------------------------------------------------------ */}
      <Section>
        <div className="mx-auto grid max-w-6xl items-center gap-6 md:gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-2xl">
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-emerald]">
              {t("yp.midCta.label")}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl text-white md:text-4xl">
              {t("yp.midCta.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/72">
              {t("yp.midCta.text")}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/book" size="lg">
                {t("yp.cta.getQuote")}
              </Button>
              <Button href="/experiences" variant="secondary" size="lg">
                {t("yp.cta.experiences")}
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-[2rem] border-2 border-[--color-gold]/20 shadow-[0_26px_70px_rgba(0,0,0,0.26)]">
              <Image
                src={asset("/images/sushi.jpg")}
                alt="Sushi chef preparing food on a Miami yacht charter"
                width={784}
                height={1168}
                sizes="(max-width: 768px) 100vw, 448px"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-[2rem] border border-[--color-gold]/15 bg-[--color-gold]/5 -z-10" />
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full border border-[--color-emerald]/15 bg-[--color-emerald]/5 -z-10" />
          </div>
        </div>
      </Section>

      {/* -- FAQ ---------------------------------------------------------- */}
      <Section id="faq" dark className="scroll-mt-28">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white sm:text-4xl md:text-5xl">
              {t("yp.faq.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/50">
              {t("yp.faq.intro")}
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {FAQ_ITEMS.map((faq) => (
              <div
                key={faq.qKey}
                className="rounded-[1.5rem] border border-white/8 bg-[--color-navy]/70 p-6"
              >
                <h3 className="font-[family-name:var(--font-heading)] text-lg text-white">
                  {t(faq.qKey)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {t(faq.aKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* -- Related + Links ---------------------------------------------- */}
      <Section className="scroll-mt-28">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/8 bg-[--color-navy-light]/55 p-5 sm:p-6 md:p-8">
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-white sm:text-3xl md:text-4xl">
              {t("yp.related.title")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              {t("yp.related.intro")}
            </p>
            <div className="mt-6 space-y-2">
              {RELATED_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-3 rounded-2xl border border-transparent px-4 py-3 text-sm text-white/60 transition-all hover:border-white/8 hover:bg-[--color-navy] hover:text-[--color-emerald]"
                >
                  <ChevronRight className="h-4 w-4 text-[--color-emerald] transition-transform group-hover:translate-x-1" />
                  {t(link.labelKey)}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/8 bg-[--color-navy-light]/55 p-5 sm:p-6 md:p-8">
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-white sm:text-3xl">
              {t("yp.sample.title")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              {t("yp.sample.intro")}
            </p>
            <div className="mt-6 space-y-3">
              {[
                {
                  icon: DollarSign,
                  textKey: "yp.sample.base",
                },
                {
                  icon: Music,
                  textKey: "yp.sample.sax",
                },
                {
                  icon: TrendingDown,
                  textKey: "yp.sample.tip",
                },
                {
                  icon: CheckCircle,
                  textKey: "yp.sample.total",
                },
                {
                  icon: Users,
                  textKey: "yp.sample.perPerson",
                },
                {
                  icon: Users,
                  textKey: "yp.sample.perPersonBase",
                },
              ].map((item) => (
                <div
                  key={item.textKey}
                  className="flex items-start gap-3 text-sm text-white/65"
                >
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-[--color-gold]" />
                  <span>{t(item.textKey)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* -- Final CTA ---------------------------------------------------- */}
      <section className="relative overflow-hidden">
        <Image
          src={asset("/images/sasha.jpg")}
          alt="Sasha from Emerald Eyes Miami yacht charters"
          fill
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[--color-navy]/85 via-[--color-navy]/55 to-[--color-navy]/35" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 py-16 text-center md:px-6 md:py-28">
          <Anchor className="mx-auto mb-5 h-10 w-10 text-[--color-emerald] drop-shadow-lg md:h-12 md:w-12" />
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-white drop-shadow-lg sm:text-3xl md:text-5xl">
            {t("yp.finalCta.title")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/88 drop-shadow-md">
            {t("yp.finalCta.text")}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/book" size="lg">
              {t("yp.cta.getQuote")}
            </Button>
            <Button href="/experiences" variant="secondary" size="lg">
              {t("yp.cta.experiences")}
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}
