"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Anchor,
  Award,
  BookOpen,
  CheckCircle,
  ChevronRight,
  Clock,
  Compass,
  DollarSign,
  Heart,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
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
  { id: "what-is", titleKey: "hs.what.title" },
  { id: "the-experience", titleKey: "hs.exp.navTitle" },
  { id: "how-to-get-there", titleKey: "hs.route.title" },
  { id: "best-time", titleKey: "hs.time.title" },
  { id: "how-much", titleKey: "hs.cost.navTitle" },
  { id: "what-to-bring", titleKey: "hs.bring.title" },
  { id: "rules", titleKey: "hs.rules.title" },
  { id: "safety", titleKey: "hs.safety.title" },
  { id: "activities", titleKey: "hs.do.title" },
  { id: "why-emerald-eyes", titleKey: "hs.advantage.navTitle" },
  { id: "nearby", titleKey: "hs.nearby.title" },
];

const TIMING_CARDS = [
  {
    titleKey: "hs.time.weekday.title",
    textKey: "hs.time.weekday.text",
    accent: "emerald" as const,
    icon: Sun,
  },
  {
    titleKey: "hs.time.weekend.title",
    textKey: "hs.time.weekend.text",
    accent: "gold" as const,
    icon: Waves,
  },
  {
    titleKey: "hs.time.tide.title",
    textKey: "hs.time.tide.text",
    accent: "emerald" as const,
    icon: Anchor,
  },
  {
    titleKey: "hs.time.season.title",
    textKey: "hs.time.season.text",
    accent: "gold" as const,
    icon: Clock,
  },
  {
    titleKey: "hs.time.arrival.title",
    textKey: "hs.time.arrival.text",
    accent: "emerald" as const,
    icon: Compass,
  },
];

const ADVANTAGE_ITEMS = [
  {
    titleKey: "hs.advantage.captain.title",
    textKey: "hs.advantage.captain.text",
    icon: ShieldCheck,
  },
  {
    titleKey: "hs.advantage.gear.title",
    textKey: "hs.advantage.gear.text",
    icon: Anchor,
  },
  {
    titleKey: "hs.advantage.spot.title",
    textKey: "hs.advantage.spot.text",
    icon: MapPin,
  },
  {
    titleKey: "hs.advantage.vip.title",
    textKey: "hs.advantage.vip.text",
    icon: Star,
  },
  {
    titleKey: "hs.advantage.group.title",
    textKey: "hs.advantage.group.text",
    icon: Users,
  },
  {
    titleKey: "hs.advantage.stress.title",
    textKey: "hs.advantage.stress.text",
    icon: Sparkles,
  },
];

const BRING_ITEMS = [
  { emoji: "\u{2600}\uFE0F", key: "sunscreen" },
  { emoji: "\u{1F576}\uFE0F", key: "sunglasses" },
  { emoji: "\u{1F4F1}", key: "phone" },
  { emoji: "\u{1F4B5}", key: "cash" },
  { emoji: "\u{1F355}", key: "food" },
  { emoji: "\u{1FA74}", key: "swimsuit" },
];

const EE_PROVIDES = [
  { emoji: "\u{1F3B5}", key: "sound" },
  { emoji: "\u{1F9CA}", key: "ice" },
  { emoji: "\u{1FA82}", key: "mats" },
  { emoji: "\u{1F3C4}", key: "toys" },
  { emoji: "\u{1F964}", key: "glass" },
  { emoji: "\u{2693}", key: "captain" },
];

const RULES = [
  {
    num: 1,
    titleKey: "hs.rule1.title",
    items: ["hs.rule1.li1", "hs.rule1.li2"],
    accent: "emerald" as const,
  },
  {
    num: 2,
    titleKey: "hs.rule2.title",
    items: ["hs.rule2.li1", "hs.rule2.li2"],
    accent: "emerald" as const,
  },
  {
    num: 3,
    titleKey: "hs.rule3.title",
    items: ["hs.rule3.li1", "hs.rule3.li2"],
    accent: "gold" as const,
  },
  {
    num: 4,
    titleKey: "hs.rule4.title",
    items: ["hs.rule4.li1", "hs.rule4.li2"],
    accent: "gold" as const,
  },
];

const ACTIVITIES = [
  {
    titleKey: "hs.act.wade.title",
    textKey: "hs.act.wade.text",
    icon: Waves,
  },
  {
    titleKey: "hs.act.food.title",
    textKey: "hs.act.food.text",
    icon: Anchor,
  },
  {
    titleKey: "hs.act.photo.title",
    textKey: "hs.act.photo.text",
    icon: Sun,
  },
  {
    titleKey: "hs.act.hop.title",
    textKey: "hs.act.hop.text",
    icon: Compass,
  },
];

const ADDONS = [
  { titleKey: "hs.addon.sax.title", textKey: "hs.addon.sax.text" },
  { titleKey: "hs.addon.sushi.title", textKey: "hs.addon.sushi.text" },
  { titleKey: "hs.addon.jetski.title", textKey: "hs.addon.jetski.text" },
];

const NEARBY_ITEMS = [
  {
    titleKey: "hs.near.marina.title",
    textKey: "hs.near.marina.text",
    icon: Anchor,
  },
  {
    titleKey: "hs.near.beach.title",
    textKey: "hs.near.beach.text",
    icon: Sun,
  },
  {
    titleKey: "hs.near.oleta.title",
    textKey: "hs.near.oleta.text",
    icon: Compass,
  },
];

const RELATED_LINKS = [
  {
    href: "/experiences/haulover-sandbar-yacht-miami",
    labelKey: "hs.related.experience",
  },
  {
    href: "/blog/miami-yacht-charter-prices",
    labelKey: "hs.related.prices",
  },
  {
    href: "/blog/bachelorette-party-yacht-miami",
    labelKey: "hs.related.bachelorette",
  },
  {
    href: "/blog/first-time-yacht-rental-miami",
    labelKey: "hs.related.firstTimer",
  },
  {
    href: "/blog/coast-guard-inspection-bareboat-charter",
    labelKey: "hs.related.coastGuard",
  },
  {
    href: "/blog/jet-ski-license-miami",
    labelKey: "hs.related.jetski",
  },
  {
    href: "/experiences/sunset-cruise-miami",
    labelKey: "hs.related.sunset",
  },
  { href: "/about", labelKey: "hs.related.about" },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function HauloverSandbarArticle() {
  const { t } = useLanguage();

  return (
    <article itemScope itemType="https://schema.org/Article">
      {/* ── Hero ─────────────────────────────────────────────────── */}
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
                <Compass className="h-3.5 w-3.5" />
                {t("blog.cat.destinations")}
              </span>
              <span className="text-white/50">
                <time dateTime="2026-03-14" itemProp="datePublished">
                  March 14, 2026
                </time>{" "}
                &middot; {t("blog.hs.readTime")}
              </span>
            </div>
            <h1
              className="mt-6 font-[family-name:var(--font-heading)] text-2xl leading-tight text-white sm:text-3xl md:text-5xl lg:text-6xl"
              itemProp="headline"
            >
              {t("hs.heroTitle")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/72">
              {t("hs.intro1")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/58">
              {t("hs.intro2")}
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
                {t("hs.guide.title")}
              </a>
              <Button href="/book" variant="secondary" size="lg">
                {t("hs.cta.book")}
              </Button>
            </div>
          </div>

          <div className="space-y-5">
            <div className="relative mx-auto w-full max-w-md">
              <div className="overflow-hidden rounded-[2rem] border-2 border-[--color-emerald]/20 shadow-[0_30px_80px_rgba(0,0,0,0.32)]">
                <Image
                  src={asset("/images/beach.jpg")}
                  alt="Haulover Sandbar beach scene — Emerald Eyes Miami"
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
                {t("hs.quick.title")}
              </p>
              <div className="mt-4 space-y-3">
                {[
                  { icon: MapPin, textKey: "hs.quick.location" },
                  { icon: Clock, textKey: "hs.quick.depth" },
                  { icon: Compass, textKey: "hs.quick.distance" },
                  { icon: Waves, textKey: "hs.quick.best" },
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

      {/* ── Trust Strip ──────────────────────────────────────────── */}
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

      {/* ── Guide Nav + What Is Haulover ─────────────────────────── */}
      <Section id="guide" className="scroll-mt-28">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div
            id="what-is"
            className="scroll-mt-28 rounded-[2rem] border border-white/8 bg-[--color-navy-light]/55 p-5 sm:p-6 md:p-8 lg:p-10"
          >
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white md:text-4xl">
              {t("hs.what.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75">
              {t("hs.what.p1")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/68">
              {t("hs.what.p2")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/68">
              {t("hs.what.p3")}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              {["hs.what.tag1", "hs.what.tag2", "hs.what.tag3"].map((key) => (
                <span
                  key={key}
                  className="rounded-full border border-[--color-emerald]/30 bg-[--color-emerald]/10 px-4 py-1.5 font-medium text-[--color-emerald]"
                >
                  {t(key)}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar Nav */}
          <aside className="self-start rounded-[2rem] border border-white/8 bg-[--color-navy-light]/80 p-6 lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-gold]">
              {t("hs.guide.title")}
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

      {/* ── The Sandbar Experience ──────────────────────────────── */}
      <Section id="the-experience" dark className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {t("hs.exp.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/55">
              {t("hs.exp.intro")}
            </p>
          </div>

          <div className="mt-10 space-y-5">
            <div className="rounded-[1.75rem] border border-white/8 bg-[--color-navy]/70 p-5 sm:p-6 md:p-8">
              <Anchor className="h-7 w-7 text-[--color-emerald]" />
              <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl text-white">
                {t("hs.exp.anchor.title")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {t("hs.exp.anchor.text")}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/8 bg-[--color-navy]/70 p-5 sm:p-6 md:p-8">
                <Waves className="h-7 w-7 text-[--color-emerald]" />
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl text-white">
                  {t("hs.exp.wade.title")}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {t("hs.exp.wade.text")}
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/8 bg-[--color-navy]/70 p-5 sm:p-6 md:p-8">
                <Sun className="h-7 w-7 text-[--color-gold]" />
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl text-white">
                  {t("hs.exp.vendors.title")}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {t("hs.exp.vendors.text")}
                </p>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[--color-gold]/20 bg-[--color-navy]/70 p-5 sm:p-6 md:p-8">
              <Users className="h-7 w-7 text-[--color-gold]" />
              <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl text-white">
                {t("hs.exp.party.title")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {t("hs.exp.party.text")}
              </p>
            </div>
          </div>

          {/* Cross-link to first-timer guide */}
          <div className="mt-8 text-center">
            <Link
              href="/blog/first-time-yacht-rental-miami"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[--color-emerald] hover:underline underline-offset-4"
            >
              <BookOpen className="h-4 w-4" />
              {t("hs.exp.firstTimerLink")}
            </Link>
          </div>
        </div>
      </Section>

      {/* ── How to Get There ─────────────────────────────────────── */}
      <Section id="how-to-get-there" className="scroll-mt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-6 md:gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-[2rem] border-2 border-[--color-emerald]/20 shadow-[0_26px_70px_rgba(0,0,0,0.26)]">
              <Image
                src={asset("/images/sushi.jpg")}
                alt="Yacht cruising to Haulover Sandbar through Biscayne Bay"
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
              {t("blog.cat.destinations")}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl text-white md:text-4xl">
              {t("hs.route.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75">
              {t("hs.route.p1")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/68">
              {t("hs.route.p2")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/68">
              {t("hs.route.p3")}
            </p>
            <div className="mt-6 rounded-2xl border border-[--color-emerald]/20 bg-[--color-emerald]/5 px-5 py-4">
              <p className="text-sm font-medium text-[--color-emerald]">
                {t("hs.route.note")}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Best Time to Visit ───────────────────────────────────── */}
      <Section id="best-time" dark className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {t("hs.time.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/55">
              {t("hs.time.intro")}
            </p>
          </div>

          {/* Top row: 3 cards */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TIMING_CARDS.slice(0, 3).map((card) => (
              <div
                key={card.titleKey}
                className="rounded-[1.75rem] border border-white/8 bg-[--color-navy-light]/55 p-5 sm:p-6"
              >
                <card.icon
                  className={`h-8 w-8 ${
                    card.accent === "gold"
                      ? "text-[--color-gold]"
                      : "text-[--color-emerald]"
                  }`}
                />
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-lg text-white sm:text-xl">
                  {t(card.titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {t(card.textKey)}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom row: 2 cards */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {TIMING_CARDS.slice(3).map((card) => (
              <div
                key={card.titleKey}
                className="rounded-[1.75rem] border border-white/8 bg-[--color-navy-light]/55 p-5 sm:p-6"
              >
                <card.icon
                  className={`h-8 w-8 ${
                    card.accent === "gold"
                      ? "text-[--color-gold]"
                      : "text-[--color-emerald]"
                  }`}
                />
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-lg text-white sm:text-xl">
                  {t(card.titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {t(card.textKey)}
                </p>
              </div>
            ))}
          </div>

          {/* Tide detail callout */}
          <div className="mt-8 rounded-2xl border border-[--color-emerald]/20 bg-[--color-emerald]/5 px-5 py-4">
            <p className="text-sm leading-relaxed text-[--color-emerald]">
              {t("hs.time.tideDetail")}
            </p>
          </div>

          {/* Cross-link: bachelorette */}
          <div className="mt-6 text-center">
            <Link
              href="/blog/bachelorette-party-yacht-miami"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[--color-gold] hover:underline underline-offset-4"
            >
              <Heart className="h-4 w-4" />
              {t("hs.time.bachLink")}
            </Link>
          </div>
        </div>
      </Section>

      {/* ── How Much Does It Cost ───────────────────────────────── */}
      <Section id="how-much" className="scroll-mt-28">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[2rem] border border-[--color-gold]/25 bg-gradient-to-br from-[--color-navy-light]/80 to-[--color-navy]/60 p-6 sm:p-8 md:p-10">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[--color-gold]/30 bg-[--color-gold]/10 sm:h-14 sm:w-14">
                <DollarSign className="h-6 w-6 text-[--color-gold] sm:h-7 sm:w-7" />
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-xl text-white sm:text-2xl md:text-3xl">
                  {t("hs.cost.title")}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-white/72">
                  {t("hs.cost.p1")}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/58">
                  {t("hs.cost.p2")}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/blog/miami-yacht-charter-prices"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[--color-gold] bg-transparent px-6 py-3 text-sm font-semibold text-[--color-gold] transition-colors hover:bg-[--color-gold]/10"
                  >
                    <DollarSign className="h-4 w-4" />
                    {t("hs.cost.priceLink")}
                  </Link>
                  <Button href="/book" variant="secondary" size="md">
                    {t("hs.cta.book")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── What to Bring ────────────────────────────────────────── */}
      <Section id="what-to-bring" dark className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white sm:text-4xl md:text-5xl">
              {t("hs.bring.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/50">
              {t("hs.bring.intro")}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* You Bring */}
            <div className="rounded-[2rem] border border-white/8 bg-[--color-navy]/70 p-5 sm:p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-gold]">
                {t("hs.bring.you")}
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
                        {t(`hs.bring.${item.key}.title`)}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-white/55">
                        {t(`hs.bring.${item.key}.text`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* We Provide */}
            <div className="rounded-[2rem] border border-[--color-emerald]/20 bg-[--color-navy]/70 p-5 sm:p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-emerald]">
                {t("hs.bring.we")}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {EE_PROVIDES.map((item) => (
                  <div
                    key={item.key}
                    className="flex items-start gap-3 rounded-2xl border border-[--color-emerald]/10 bg-[--color-emerald]/[0.03] p-4"
                  >
                    <span className="shrink-0 text-2xl">{item.emoji}</span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {t(`hs.provide.${item.key}.title`)}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-white/55">
                        {t(`hs.provide.${item.key}.text`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Rules & Regulations ──────────────────────────────────── */}
      <Section id="rules" className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white sm:text-4xl md:text-5xl">
              {t("hs.rules.title")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/50">
              {t("hs.rules.intro")}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {RULES.map((rule) => (
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
                <div className="mt-5 space-y-3">
                  {rule.items.map((key) => (
                    <div key={key} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[--color-emerald]" />
                      <p className="text-sm leading-relaxed text-white/65">
                        {t(key)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/blog/coast-guard-inspection-bareboat-charter"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[--color-emerald] hover:underline underline-offset-4"
            >
              <ShieldCheck className="h-4 w-4" />
              {t("hs.rules.cgLink")}
            </Link>
          </div>
        </div>
      </Section>

      {/* ── Safety ───────────────────────────────────────────────── */}
      <Section id="safety" dark className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold] sm:text-4xl md:text-5xl">
              {t("hs.safety.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/55">
              {t("hs.safety.intro")}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-5">
            <div className="rounded-[1.5rem] border border-[--color-gold]/20 bg-[--color-navy]/70 p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-xl text-white">
                {t("hs.safety.inlet.title")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {t("hs.safety.inlet.text")}
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-[--color-gold]/20 bg-[--color-navy]/70 p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-xl text-white">
                {t("hs.safety.current.title")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {t("hs.safety.current.text")}
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/8 bg-[--color-navy]/70 p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-xl text-white">
                {t("hs.safety.captain.title")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {t("hs.safety.captain.text")}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── What to Do ───────────────────────────────────────────── */}
      <Section id="activities" className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white sm:text-4xl md:text-5xl">
              {t("hs.do.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/50">
              {t("hs.do.intro")}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {ACTIVITIES.map((act) => (
              <div
                key={act.titleKey}
                className="rounded-[1.5rem] border border-white/8 bg-[--color-navy-light]/55 p-6"
              >
                <act.icon className="h-7 w-7 text-[--color-emerald]" />
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl text-white">
                  {t(act.titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {t(act.textKey)}
                </p>
              </div>
            ))}
          </div>

          {/* Add-ons Strip */}
          <div className="mt-10">
            <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.3em] text-[--color-gold]">
              {t("hs.addon.title")}
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {ADDONS.map((addon) => (
                <div
                  key={addon.titleKey}
                  className="rounded-[1.5rem] border border-[--color-gold]/20 bg-[--color-navy-light]/55 p-5 text-center"
                >
                  <h3 className="font-[family-name:var(--font-heading)] text-lg text-[--color-gold]">
                    {t(addon.titleKey)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {t(addon.textKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Mid CTA ──────────────────────────────────────────────── */}
      <Section dark>
        <div className="mx-auto grid max-w-6xl items-center gap-6 md:gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-2xl">
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-emerald]">
              {t("blog.cat.destinations")}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl text-white md:text-4xl">
              {t("hs.midCta.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/72">
              {t("hs.midCta.text")}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                href="/experiences/haulover-sandbar-yacht-miami"
                size="lg"
              >
                {t("hs.midCta.btn")}
              </Button>
              <Button href="/book" variant="secondary" size="lg">
                {t("hs.cta.book")}
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-[2rem] border-2 border-[--color-gold]/20 shadow-[0_26px_70px_rgba(0,0,0,0.26)]">
              <Image
                src={asset("/images/emeraldeyes.jpg")}
                alt="Emerald Eyes Miami yacht charter brand"
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

      {/* ── Nearby + Related ─────────────────────────────────────── */}
      <Section id="nearby" className="scroll-mt-28">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/8 bg-[--color-navy-light]/55 p-5 sm:p-6 md:p-8">
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-white sm:text-3xl md:text-4xl">
              {t("hs.nearby.title")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              {t("hs.nearby.intro")}
            </p>
            <div className="mt-6 space-y-4">
              {NEARBY_ITEMS.map((item) => (
                <div
                  key={item.titleKey}
                  className="rounded-[1.5rem] border border-white/8 bg-[--color-navy]/70 p-5"
                >
                  <div className="flex items-start gap-3">
                    <item.icon className="mt-0.5 h-5 w-5 text-[--color-emerald]" />
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {t(item.titleKey)}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-white/55">
                        {t(item.textKey)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/8 bg-[--color-navy-light]/55 p-5 sm:p-6 md:p-8">
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-white sm:text-3xl">
              {t("hs.related.title")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              {t("hs.related.intro")}
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

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <Image
          src={asset("/images/beach.jpg")}
          alt="Beach view at Haulover Sandbar — Emerald Eyes Miami"
          fill
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[--color-navy]/85 via-[--color-navy]/55 to-[--color-navy]/35" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 py-16 text-center md:px-6 md:py-28">
          <Anchor className="mx-auto mb-5 h-10 w-10 text-[--color-emerald] drop-shadow-lg md:h-12 md:w-12" />
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-white drop-shadow-lg sm:text-3xl md:text-5xl">
            {t("hs.cta.title")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/88 drop-shadow-md">
            {t("hs.cta.text")}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/book" size="lg">
              {t("hs.cta.book")}
            </Button>
            <Button href="/experiences" variant="secondary" size="lg">
              {t("hs.cta.explore")}
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}
