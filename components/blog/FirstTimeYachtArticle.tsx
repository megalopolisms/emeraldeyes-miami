"use client";

import Link from "next/link";
import Image from "next/image";
import {
  AlertTriangle,
  Anchor,
  Award,
  BookOpen,
  CheckCircle,
  ChevronRight,
  Clock,
  CloudRain,
  Compass,
  DollarSign,
  HelpCircle,
  Heart,
  MapPin,
  ShieldCheck,
  Shirt,
  Sun,
  UserCheck,
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
  { id: "what-to-expect", titleKey: "ft.expect.title" },
  { id: "pricing", titleKey: "ft.pricing.title" },
  { id: "bareboat-vs-crewed", titleKey: "ft.charter.title" },
  { id: "captain-crew", titleKey: "ft.captain.title" },
  { id: "booking-process", titleKey: "ft.booking.title" },
  { id: "what-to-bring", titleKey: "ft.bring.title" },
  { id: "what-to-wear", titleKey: "ft.wear.title" },
  { id: "etiquette", titleKey: "ft.etiquette.title" },
  { id: "mistakes", titleKey: "ft.mistakes.title" },
  { id: "seasickness", titleKey: "ft.seasick.title" },
  { id: "safety", titleKey: "ft.safety.title" },
  { id: "faq", titleKey: "ft.faq.title" },
];

const BOOKING_STEPS = [
  {
    num: 1,
    titleKey: "ft.booking.step1.title",
    textKey: "ft.booking.step1.text",
    icon: Compass,
  },
  {
    num: 2,
    titleKey: "ft.booking.step2.title",
    textKey: "ft.booking.step2.text",
    icon: Clock,
  },
  {
    num: 3,
    titleKey: "ft.booking.step3.title",
    textKey: "ft.booking.step3.text",
    icon: Award,
  },
  {
    num: 4,
    titleKey: "ft.booking.step4.title",
    textKey: "ft.booking.step4.text",
    icon: Anchor,
  },
];

const BRING_ITEMS = [
  { emoji: "\u{2600}\uFE0F", key: "sunscreen" },
  { emoji: "\u{1FA74}", key: "swimsuit" },
  { emoji: "\u{1F4B5}", key: "cash" },
  { emoji: "\u{1FAAA}", key: "id" },
];

const PROVIDE_ITEMS = [
  { emoji: "\u{2693}", key: "captain" },
  { emoji: "\u{1F465}", key: "crew" },
  { emoji: "\u{1F3B5}", key: "sound" },
  { emoji: "\u{1F9CA}", key: "ice" },
  { emoji: "\u{1FA82}", key: "toys" },
  { emoji: "\u{1F6E1}\uFE0F", key: "safety" },
];

const WEAR_CARDS = [
  {
    titleKey: "ft.wear.casual.title",
    textKey: "ft.wear.casual.text",
    icon: Sun,
    accent: "emerald" as const,
  },
  {
    titleKey: "ft.wear.evening.title",
    textKey: "ft.wear.evening.text",
    icon: Compass,
    accent: "gold" as const,
  },
  {
    titleKey: "ft.wear.shoes.title",
    textKey: "ft.wear.shoes.text",
    icon: Shirt,
    accent: "emerald" as const,
  },
];

const ETIQUETTE_RULES = [
  {
    num: 1,
    titleKey: "ft.etiquette.shoes.title",
    textKey: "ft.etiquette.shoes.text",
    accent: "emerald" as const,
  },
  {
    num: 2,
    titleKey: "ft.etiquette.time.title",
    textKey: "ft.etiquette.time.text",
    accent: "gold" as const,
  },
  {
    num: 3,
    titleKey: "ft.etiquette.tip.title",
    textKey: "ft.etiquette.tip.text",
    accent: "emerald" as const,
  },
  {
    num: 4,
    titleKey: "ft.etiquette.respect.title",
    textKey: "ft.etiquette.respect.text",
    accent: "gold" as const,
  },
];

const MISTAKE_CARDS = [
  {
    titleKey: "ft.mistakes.short.title",
    textKey: "ft.mistakes.short.text",
    icon: Clock,
  },
  {
    titleKey: "ft.mistakes.crowd.title",
    textKey: "ft.mistakes.crowd.text",
    icon: Users,
  },
  {
    titleKey: "ft.mistakes.sun.title",
    textKey: "ft.mistakes.sun.text",
    icon: Sun,
  },
  {
    titleKey: "ft.mistakes.glass.title",
    textKey: "ft.mistakes.glass.text",
    icon: AlertTriangle,
  },
  {
    titleKey: "ft.mistakes.weather.title",
    textKey: "ft.mistakes.weather.text",
    icon: CloudRain,
  },
  {
    titleKey: "ft.mistakes.headcount.title",
    textKey: "ft.mistakes.headcount.text",
    icon: UserCheck,
  },
];

const FAQ_ITEMS = [
  { qKey: "ft.faq.q1", aKey: "ft.faq.a1" },
  { qKey: "ft.faq.q2", aKey: "ft.faq.a2" },
  { qKey: "ft.faq.q3", aKey: "ft.faq.a3" },
  { qKey: "ft.faq.q4", aKey: "ft.faq.a4" },
  { qKey: "ft.faq.q5", aKey: "ft.faq.a5" },
  { qKey: "ft.faq.q6", aKey: "ft.faq.a6" },
  { qKey: "ft.faq.q7", aKey: "ft.faq.a7" },
  { qKey: "ft.faq.q8", aKey: "ft.faq.a8" },
];

const RELATED_LINKS = [
  {
    href: "/blog/miami-yacht-charter-prices",
    labelKey: "ft.related.prices",
  },
  {
    href: "/blog/bachelorette-party-yacht-miami",
    labelKey: "ft.related.bachelorette",
  },
  {
    href: "/blog/haulover-sandbar-yacht-charter-miami",
    labelKey: "ft.related.haulover",
  },
  {
    href: "/blog/coast-guard-inspection-bareboat-charter",
    labelKey: "ft.related.coastGuard",
  },
  {
    href: "/blog/jet-ski-license-miami",
    labelKey: "ft.related.jetski",
  },
  {
    href: "/experiences",
    labelKey: "ft.related.experience",
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function FirstTimeYachtArticle() {
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
                <BookOpen className="h-3.5 w-3.5" />
                {t("blog.cat.guides")}
              </span>
              <span className="text-white/50">
                <time dateTime="2026-03-14" itemProp="datePublished">
                  March 14, 2026
                </time>{" "}
                &middot; {t("ft.readTime")}
              </span>
            </div>
            <h1
              className="mt-6 font-[family-name:var(--font-heading)] text-2xl leading-tight text-white sm:text-3xl md:text-5xl lg:text-6xl"
              itemProp="headline"
            >
              {t("ft.heroTitle")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/72">
              {t("ft.intro1")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/58">
              {t("ft.intro2")}
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
                href="#guide"
                className="inline-flex items-center justify-center rounded-full border border-[--color-emerald] bg-transparent px-8 py-3.5 text-lg text-[--color-emerald] transition-colors hover:bg-[--color-emerald-dim]"
              >
                {t("ft.guide.title")}
              </a>
              <Button href="/book" variant="secondary" size="lg">
                {t("ft.cta.book")}
              </Button>
            </div>
          </div>

          <div className="space-y-5">
            <div className="relative mx-auto w-full max-w-md">
              <div className="overflow-hidden rounded-[2rem] border-2 border-[--color-emerald]/20 shadow-[0_30px_80px_rgba(0,0,0,0.32)]">
                <Image
                  src={asset("/images/emeraldeyes.jpg")}
                  alt="Emerald Eyes Miami yacht charter — first time rental guide"
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
                {t("ft.quick.title")}
              </p>
              <div className="mt-4 space-y-3">
                {[
                  { icon: Anchor, textKey: "ft.quick.price" },
                  { icon: Users, textKey: "ft.quick.group" },
                  { icon: CheckCircle, textKey: "ft.quick.included" },
                  { icon: ShieldCheck, textKey: "ft.quick.noLicense" },
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

      {/* -- Guide Nav + What to Expect ----------------------------------- */}
      <Section id="guide" className="scroll-mt-28">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div
            id="what-to-expect"
            className="scroll-mt-28 rounded-[2rem] border border-white/8 bg-[--color-navy-light]/55 p-5 sm:p-6 md:p-8 lg:p-10"
          >
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-gold]">
              {t("ft.expect.label")}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl text-white md:text-4xl">
              {t("ft.expect.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75">
              {t("ft.expect.p1")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/68">
              {t("ft.expect.p2")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/68">
              {t("ft.expect.p3")}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              {["ft.expect.tag1", "ft.expect.tag2", "ft.expect.tag3"].map(
                (key) => (
                  <span
                    key={key}
                    className="rounded-full border border-[--color-emerald]/30 bg-[--color-emerald]/10 px-4 py-1.5 font-medium text-[--color-emerald]"
                  >
                    {t(key)}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Sidebar Nav */}
          <aside className="self-start rounded-[2rem] border border-white/8 bg-[--color-navy-light]/80 p-6 lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-gold]">
              {t("ft.guide.title")}
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

      {/* -- How Much Does It Cost? --------------------------------------- */}
      <Section id="pricing" dark className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white sm:text-4xl md:text-5xl">
              {t("ft.pricing.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/55">
              {t("ft.pricing.intro")}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-[2rem] border border-[--color-gold]/20 bg-[--color-navy]/70 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <DollarSign className="mt-1 h-8 w-8 shrink-0 text-[--color-gold]" />
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl text-white">
                  {t("ft.pricing.starting.title")}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  {t("ft.pricing.starting.text")}
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                {
                  labelKey: "ft.pricing.includes.captain",
                  icon: Anchor,
                },
                {
                  labelKey: "ft.pricing.includes.crew",
                  icon: Users,
                },
                {
                  labelKey: "ft.pricing.includes.gear",
                  icon: CheckCircle,
                },
              ].map((item) => (
                <div
                  key={item.labelKey}
                  className="flex items-center gap-2 text-sm text-white/60"
                >
                  <item.icon className="h-4 w-4 shrink-0 text-[--color-emerald]" />
                  <span>{t(item.labelKey)}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/8 bg-white/[0.03] p-5">
              <p className="text-sm leading-relaxed text-white/65">
                {t("ft.pricing.detail")}
              </p>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/blog/miami-yacht-charter-prices"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[--color-gold] hover:underline underline-offset-4"
              >
                <DollarSign className="h-4 w-4" />
                {t("ft.pricing.link")}
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* -- Bareboat vs Crewed ------------------------------------------- */}
      <Section id="bareboat-vs-crewed" className="scroll-mt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-6 md:gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-[2rem] border-2 border-[--color-emerald]/20 shadow-[0_26px_70px_rgba(0,0,0,0.26)]">
              <Image
                src={asset("/images/sax.jpg")}
                alt="Professional crew on Emerald Eyes yacht charter Miami"
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
              {t("ft.charter.label")}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl text-white md:text-4xl">
              {t("ft.charter.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75">
              {t("ft.charter.p1")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/68">
              {t("ft.charter.p2")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/68">
              {t("ft.charter.p3")}
            </p>
            <div className="mt-6 rounded-2xl border border-[--color-emerald]/20 bg-[--color-emerald]/5 px-5 py-4">
              <p className="text-sm font-medium text-[--color-emerald]">
                {t("ft.charter.note")}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* -- Your Captain Handles Everything ------------------------------- */}
      <Section id="captain-crew" dark className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white sm:text-4xl md:text-5xl">
              {t("ft.captain.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/55">
              {t("ft.captain.intro")}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                titleKey: "ft.captain.nav.title",
                textKey: "ft.captain.nav.text",
                icon: Compass,
                accent: "emerald" as const,
              },
              {
                titleKey: "ft.captain.anchor.title",
                textKey: "ft.captain.anchor.text",
                icon: Anchor,
                accent: "gold" as const,
              },
              {
                titleKey: "ft.captain.weather.title",
                textKey: "ft.captain.weather.text",
                icon: CloudRain,
                accent: "emerald" as const,
              },
              {
                titleKey: "ft.captain.safety.title",
                textKey: "ft.captain.safety.text",
                icon: ShieldCheck,
                accent: "gold" as const,
              },
              {
                titleKey: "ft.captain.crew.title",
                textKey: "ft.captain.crew.text",
                icon: Users,
                accent: "emerald" as const,
              },
              {
                titleKey: "ft.captain.local.title",
                textKey: "ft.captain.local.text",
                icon: MapPin,
                accent: "gold" as const,
              },
            ].map((card) => (
              <div
                key={card.titleKey}
                className="rounded-[1.75rem] border border-white/8 bg-[--color-navy-light]/55 p-6"
              >
                <card.icon
                  className={`h-7 w-7 ${
                    card.accent === "gold"
                      ? "text-[--color-gold]"
                      : "text-[--color-emerald]"
                  }`}
                />
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl text-white">
                  {t(card.titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {t(card.textKey)}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-[--color-emerald]/20 bg-[--color-emerald]/5 px-5 py-4">
            <p className="text-sm font-medium text-[--color-emerald]">
              {t("ft.captain.note")}
            </p>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/blog/coast-guard-inspection-bareboat-charter"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[--color-emerald] hover:underline underline-offset-4"
            >
              <ShieldCheck className="h-4 w-4" />
              {t("ft.captain.cgLink")}
            </Link>
          </div>
        </div>
      </Section>

      {/* -- Booking Process ---------------------------------------------- */}
      <Section id="booking-process" className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white sm:text-4xl md:text-5xl">
              {t("ft.booking.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/50">
              {t("ft.booking.intro")}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {BOOKING_STEPS.map((step) => (
              <div
                key={step.titleKey}
                className="rounded-[1.75rem] border border-white/8 bg-[--color-navy-light]/55 p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[--color-emerald]/30 bg-[--color-emerald]/10 text-sm font-bold text-[--color-emerald]">
                    {step.num}
                  </div>
                  <step.icon className="h-6 w-6 text-[--color-emerald]" />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl text-white">
                  {t(step.titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {t(step.textKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* -- What to Bring ------------------------------------------------ */}
      <Section id="what-to-bring" dark className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white sm:text-4xl md:text-5xl">
              {t("ft.bring.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/50">
              {t("ft.bring.intro")}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* You Bring */}
            <div className="rounded-[2rem] border border-white/8 bg-[--color-navy]/70 p-5 sm:p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-gold]">
                {t("ft.bring.you")}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {BRING_ITEMS.map((item) => (
                  <div
                    key={item.key}
                    className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                  >
                    <span className="shrink-0 text-2xl">{item.emoji}</span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {t(`ft.bring.${item.key}.title`)}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-white/55">
                        {t(`ft.bring.${item.key}.text`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* We Provide */}
            <div className="rounded-[2rem] border border-[--color-emerald]/20 bg-[--color-navy]/70 p-5 sm:p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-emerald]">
                {t("ft.bring.we")}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {PROVIDE_ITEMS.map((item) => (
                  <div
                    key={item.key}
                    className="flex items-start gap-3 rounded-2xl border border-[--color-emerald]/10 bg-[--color-emerald]/[0.03] p-4"
                  >
                    <span className="shrink-0 text-2xl">{item.emoji}</span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {t(`ft.provide.${item.key}.title`)}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-white/55">
                        {t(`ft.provide.${item.key}.text`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* -- What to Wear ------------------------------------------------- */}
      <Section id="what-to-wear" className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white sm:text-4xl md:text-5xl">
              {t("ft.wear.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/50">
              {t("ft.wear.intro")}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {WEAR_CARDS.map((card) => (
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
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {t(card.textKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* -- Yacht Etiquette ---------------------------------------------- */}
      <Section id="etiquette" dark className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white sm:text-4xl md:text-5xl">
              {t("ft.etiquette.title")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/50">
              {t("ft.etiquette.intro")}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {ETIQUETTE_RULES.map((rule) => (
              <div
                key={rule.titleKey}
                className="rounded-[1.75rem] border border-white/8 bg-[--color-navy-light]/55 p-6"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                      rule.accent === "gold"
                        ? "border border-[--color-gold]/30 bg-[--color-gold]/10 text-[--color-gold]"
                        : "border border-[--color-emerald]/30 bg-[--color-emerald]/10 text-[--color-emerald]"
                    }`}
                  >
                    {rule.num}
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl text-white">
                    {t(rule.titleKey)}
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/65">
                  {t(rule.textKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* -- Common Mistakes ---------------------------------------------- */}
      <Section id="mistakes" className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold] sm:text-4xl md:text-5xl">
              {t("ft.mistakes.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/55">
              {t("ft.mistakes.intro")}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {MISTAKE_CARDS.map((card) => (
              <div
                key={card.titleKey}
                className="rounded-[1.5rem] border border-[--color-gold]/20 bg-[--color-navy-light]/55 p-6"
              >
                <card.icon className="h-7 w-7 text-[--color-gold]" />
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl text-white">
                  {t(card.titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {t(card.textKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* -- Safety On Board ---------------------------------------------- */}
      <Section id="safety" dark className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white sm:text-4xl md:text-5xl">
              {t("ft.safety.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/55">
              {t("ft.safety.intro")}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-5">
            <div className="rounded-[1.5rem] border border-white/8 bg-[--color-navy]/70 p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-xl text-white">
                {t("ft.safety.briefing.title")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {t("ft.safety.briefing.text")}
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/8 bg-[--color-navy]/70 p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-xl text-white">
                {t("ft.safety.jackets.title")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {t("ft.safety.jackets.text")}
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-[--color-emerald]/20 bg-[--color-navy]/70 p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-xl text-white">
                {t("ft.safety.captain.title")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {t("ft.safety.captain.text")}
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/blog/coast-guard-inspection-bareboat-charter"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[--color-emerald] hover:underline underline-offset-4"
            >
              <ShieldCheck className="h-4 w-4" />
              {t("ft.safety.cgLink")}
            </Link>
          </div>
        </div>
      </Section>

      {/* -- Mid CTA ------------------------------------------------------ */}
      <Section>
        <div className="mx-auto grid max-w-6xl items-center gap-6 md:gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-2xl">
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-emerald]">
              {t("blog.cat.guides")}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl text-white md:text-4xl">
              {t("ft.midCta.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/72">
              {t("ft.midCta.text")}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/book" size="lg">
                {t("ft.midCta.btn")}
              </Button>
              <Button href="/experiences" variant="secondary" size="lg">
                {t("ft.cta.explore")}
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-[2rem] border-2 border-[--color-gold]/20 shadow-[0_26px_70px_rgba(0,0,0,0.26)]">
              <Image
                src={asset("/images/sushi.jpg")}
                alt="Yacht charter experience with sushi chef — Emerald Eyes Miami"
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
          <div className="text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white sm:text-4xl md:text-5xl">
              {t("ft.faq.title")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/50">
              {t("ft.faq.intro")}
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {FAQ_ITEMS.map((faq) => (
              <div
                key={faq.qKey}
                className="rounded-[1.5rem] border border-white/8 bg-[--color-navy]/70 p-6"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-[--color-emerald]" />
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {t(faq.qKey)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {t(faq.aKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* -- Related Links + Keep Reading --------------------------------- */}
      <Section className="scroll-mt-28">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-[2rem] border border-white/8 bg-[--color-navy-light]/55 p-5 sm:p-6 md:p-8">
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-white sm:text-3xl">
              {t("ft.related.title")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              {t("ft.related.intro")}
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
        </div>
      </Section>

      {/* -- Final CTA ---------------------------------------------------- */}
      <section className="relative overflow-hidden">
        <Image
          src={asset("/images/sasha.jpg")}
          alt="Yacht charter at sunset — Emerald Eyes Miami"
          fill
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[--color-navy]/85 via-[--color-navy]/55 to-[--color-navy]/35" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 py-16 text-center md:px-6 md:py-28">
          <Anchor className="mx-auto mb-5 h-10 w-10 text-[--color-emerald] drop-shadow-lg md:h-12 md:w-12" />
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-white drop-shadow-lg sm:text-3xl md:text-5xl">
            {t("ft.cta.title")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/88 drop-shadow-md">
            {t("ft.cta.text")}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/book" size="lg">
              {t("ft.cta.book")}
            </Button>
            <Button href="/experiences" variant="secondary" size="lg">
              {t("ft.cta.explore")}
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}
