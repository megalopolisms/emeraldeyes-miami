"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Anchor,
  Award,
  Camera,
  CheckCircle,
  ChevronRight,
  Clock,
  Compass,
  Crown,
  Gift,
  Heart,
  MapPin,
  Music,
  PartyPopper,
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
  { id: "why-yacht", titleKey: "bach.nav.whyYacht" },
  { id: "planning", titleKey: "bach.nav.planning" },
  { id: "itinerary", titleKey: "bach.nav.itinerary" },
  { id: "included", titleKey: "bach.nav.included" },
  { id: "addons", titleKey: "bach.nav.addons" },
  { id: "what-to-bring", titleKey: "bach.nav.whatToBring" },
  { id: "pricing", titleKey: "bach.nav.pricing" },
  { id: "tips", titleKey: "bach.nav.tips" },
  { id: "faq", titleKey: "bach.nav.faq" },
];

const WHY_CARDS = [
  {
    titleKey: "bach.why.privacy.title",
    textKey: "bach.why.privacy.text",
    icon: ShieldCheck,
    accent: "emerald" as const,
  },
  {
    titleKey: "bach.why.views.title",
    textKey: "bach.why.views.text",
    icon: Camera,
    accent: "gold" as const,
  },
  {
    titleKey: "bach.why.freedom.title",
    textKey: "bach.why.freedom.text",
    icon: Music,
    accent: "emerald" as const,
  },
];

const ITINERARY_CARDS = [
  {
    titleKey: "bach.itin.morning.title",
    textKey: "bach.itin.morning.text",
    icon: Sun,
    accent: "emerald" as const,
  },
  {
    titleKey: "bach.itin.sunset.title",
    textKey: "bach.itin.sunset.text",
    icon: Heart,
    accent: "gold" as const,
  },
  {
    titleKey: "bach.itin.evening.title",
    textKey: "bach.itin.evening.text",
    icon: Sparkles,
    accent: "emerald" as const,
  },
];

const INCLUDED_ITEMS = [
  { emoji: "\u{2693}", key: "captain" },
  { emoji: "\u{1F3B5}", key: "sound" },
  { emoji: "\u{1FA82}", key: "mats" },
  { emoji: "\u{1F9CA}", key: "ice" },
  { emoji: "\u{1F964}", key: "glass" },
  { emoji: "\u{1F3C4}", key: "toys" },
];

const ADDON_ITEMS = [
  {
    titleKey: "bach.addon.sax.title",
    textKey: "bach.addon.sax.text",
    priceKey: "bach.addon.sax.price",
    icon: Music,
  },
  {
    titleKey: "bach.addon.sushi.title",
    textKey: "bach.addon.sushi.text",
    priceKey: "bach.addon.sushi.price",
    icon: Star,
  },
  {
    titleKey: "bach.addon.jetski.title",
    textKey: "bach.addon.jetski.text",
    priceKey: "bach.addon.jetski.price",
    icon: Waves,
  },
  {
    titleKey: "bach.addon.decor.title",
    textKey: "bach.addon.decor.text",
    priceKey: "bach.addon.decor.price",
    icon: PartyPopper,
  },
  {
    titleKey: "bach.addon.photo.title",
    textKey: "bach.addon.photo.text",
    priceKey: "bach.addon.photo.price",
    icon: Camera,
  },
  {
    titleKey: "bach.addon.champagne.title",
    textKey: "bach.addon.champagne.text",
    priceKey: "bach.addon.champagne.price",
    icon: Sparkles,
  },
];

const BRIDE_ITEMS = [
  { emoji: "\u{1F451}", key: "outfit" },
  { emoji: "\u{1F576}\uFE0F", key: "sunglasses" },
  { emoji: "\u{1F4F1}", key: "phone" },
  { emoji: "\u{1F484}", key: "touch" },
];

const PARTY_ITEMS = [
  { emoji: "\u{1FA74}", key: "matching" },
  { emoji: "\u{2600}\uFE0F", key: "sunscreen" },
  { emoji: "\u{1F381}", key: "props" },
  { emoji: "\u{1F4B5}", key: "cash" },
];

const PRICING_TIERS = [
  {
    titleKey: "bach.price.intimate.title",
    sizeKey: "bach.price.intimate.size",
    priceKey: "bach.price.intimate.price",
    accent: "emerald" as const,
  },
  {
    titleKey: "bach.price.party.title",
    sizeKey: "bach.price.party.size",
    priceKey: "bach.price.party.price",
    accent: "gold" as const,
  },
  {
    titleKey: "bach.price.big.title",
    sizeKey: "bach.price.big.size",
    priceKey: "bach.price.big.price",
    accent: "emerald" as const,
  },
];

const FAQ_ITEMS = [
  { qKey: "bach.faq.q1", aKey: "bach.faq.a1" },
  { qKey: "bach.faq.q2", aKey: "bach.faq.a2" },
  { qKey: "bach.faq.q3", aKey: "bach.faq.a3" },
  { qKey: "bach.faq.q4", aKey: "bach.faq.a4" },
  { qKey: "bach.faq.q5", aKey: "bach.faq.a5" },
  { qKey: "bach.faq.q6", aKey: "bach.faq.a6" },
  { qKey: "bach.faq.q7", aKey: "bach.faq.a7" },
  { qKey: "bach.faq.q8", aKey: "bach.faq.a8" },
];

const RELATED_LINKS = [
  {
    href: "/experiences/bachelorette-yacht-miami",
    labelKey: "bach.related.experience",
  },
  {
    href: "/blog/haulover-sandbar-yacht-charter-miami",
    labelKey: "bach.related.haulover",
  },
  {
    href: "/experiences/sunset-cruise-miami",
    labelKey: "bach.related.sunset",
  },
  { href: "/about", labelKey: "bach.related.about" },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function BacheloretteArticle() {
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
                <Heart className="h-3.5 w-3.5" />
                {t("bach.category")}
              </span>
              <span className="text-white/50">
                <time dateTime="2026-03-14" itemProp="datePublished">
                  March 14, 2026
                </time>{" "}
                &middot; {t("bach.readTime")}
              </span>
            </div>
            <h1
              className="mt-6 font-[family-name:var(--font-heading)] text-2xl leading-tight text-white sm:text-3xl md:text-5xl lg:text-6xl"
              itemProp="headline"
            >
              {t("bach.heroTitle")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/72">
              {t("bach.intro1")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/58">
              {t("bach.intro2")}
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
                {t("bach.guide.title")}
              </a>
              <Button href="/book" variant="secondary" size="lg">
                {t("bach.cta.book")}
              </Button>
            </div>
          </div>

          <div className="space-y-5">
            <div className="relative mx-auto w-full max-w-md">
              <div className="overflow-hidden rounded-[2rem] border-2 border-[--color-emerald]/20 shadow-[0_30px_80px_rgba(0,0,0,0.32)]">
                <Image
                  src={asset("/images/sax.jpg")}
                  alt="Bachelorette party on a yacht in Miami — Emerald Eyes Miami"
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
                {t("bach.quick.title")}
              </p>
              <div className="mt-4 space-y-3">
                {[
                  { icon: Users, textKey: "bach.quick.group" },
                  { icon: Clock, textKey: "bach.quick.duration" },
                  { icon: MapPin, textKey: "bach.quick.route" },
                  { icon: Compass, textKey: "bach.quick.starting" },
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

      {/* -- Why a Yacht + Sidebar Nav ------------------------------------ */}
      <Section id="guide" className="scroll-mt-28">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div
            id="why-yacht"
            className="scroll-mt-28 rounded-[2rem] border border-white/8 bg-[--color-navy-light]/55 p-5 sm:p-6 md:p-8 lg:p-10"
          >
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white md:text-4xl">
              {t("bach.why.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75">
              {t("bach.why.p1")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/68">
              {t("bach.why.p2")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/68">
              {t("bach.why.p3")}
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {WHY_CARDS.map((card) => (
                <div
                  key={card.titleKey}
                  className="rounded-[1.75rem] border border-white/8 bg-[--color-navy]/70 p-6"
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

            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              {["bach.why.tag1", "bach.why.tag2", "bach.why.tag3"].map(
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
              {t("bach.guide.title")}
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

      {/* -- Planning Timeline -------------------------------------------- */}
      <Section id="planning" dark className="scroll-mt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-6 md:gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-[2rem] border-2 border-[--color-emerald]/20 shadow-[0_26px_70px_rgba(0,0,0,0.26)]">
              <Image
                src={asset("/images/sushi.jpg")}
                alt="Sushi chef preparing fresh sushi aboard a yacht — Emerald Eyes Miami"
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
              {t("bach.category")}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl text-white md:text-4xl">
              {t("bach.plan.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75">
              {t("bach.plan.p1")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/68">
              {t("bach.plan.p2")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/68">
              {t("bach.plan.p3")}
            </p>
            <div className="mt-6 rounded-2xl border border-[--color-emerald]/20 bg-[--color-emerald]/5 px-5 py-4">
              <p className="text-sm font-medium text-[--color-emerald]">
                {t("bach.plan.tip")}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* -- The Perfect Itinerary ---------------------------------------- */}
      <Section id="itinerary" className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white sm:text-4xl md:text-5xl">
              {t("bach.itin.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/50">
              {t("bach.itin.intro")}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {ITINERARY_CARDS.map((card) => (
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

      {/* -- What's Included ---------------------------------------------- */}
      <Section id="included" dark className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white sm:text-4xl md:text-5xl">
              {t("bach.included.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/50">
              {t("bach.included.intro")}
            </p>
          </div>

          <div className="rounded-[2rem] border border-[--color-emerald]/20 bg-[--color-navy]/70 p-5 sm:p-6 md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-emerald]">
              {t("bach.included.label")}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {INCLUDED_ITEMS.map((item) => (
                <div
                  key={item.key}
                  className="flex items-start gap-3 rounded-2xl border border-[--color-emerald]/10 bg-[--color-emerald]/[0.03] p-4"
                >
                  <span className="shrink-0 text-2xl">{item.emoji}</span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {t(`bach.included.${item.key}.title`)}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-white/55">
                      {t(`bach.included.${item.key}.text`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* -- Popular Add-Ons ---------------------------------------------- */}
      <Section id="addons" className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold] sm:text-4xl md:text-5xl">
              {t("bach.addon.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/55">
              {t("bach.addon.intro")}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ADDON_ITEMS.map((addon) => (
              <div
                key={addon.titleKey}
                className="rounded-[1.5rem] border border-[--color-gold]/20 bg-[--color-navy-light]/55 p-6"
              >
                <addon.icon className="h-7 w-7 text-[--color-gold]" />
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl text-white">
                  {t(addon.titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {t(addon.textKey)}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-[--color-gold]">
                  {t(addon.priceKey)}
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
              {t("bach.bring.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/50">
              {t("bach.bring.intro")}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Bride-to-Be */}
            <div className="rounded-[2rem] border border-[--color-gold]/20 bg-[--color-navy]/70 p-5 sm:p-6 md:p-7">
              <div className="flex items-center gap-2">
                <Crown className="h-5 w-5 text-[--color-gold]" />
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-gold]">
                  {t("bach.bring.bride")}
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {BRIDE_ITEMS.map((item) => (
                  <div
                    key={item.key}
                    className="flex items-start gap-3 rounded-2xl border border-[--color-gold]/10 bg-[--color-gold]/[0.03] p-4"
                  >
                    <span className="shrink-0 text-2xl">{item.emoji}</span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {t(`bach.bride.${item.key}.title`)}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-white/55">
                        {t(`bach.bride.${item.key}.text`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bridal Party */}
            <div className="rounded-[2rem] border border-[--color-emerald]/20 bg-[--color-navy]/70 p-5 sm:p-6 md:p-7">
              <div className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-[--color-emerald]" />
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-emerald]">
                  {t("bach.bring.party")}
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {PARTY_ITEMS.map((item) => (
                  <div
                    key={item.key}
                    className="flex items-start gap-3 rounded-2xl border border-[--color-emerald]/10 bg-[--color-emerald]/[0.03] p-4"
                  >
                    <span className="shrink-0 text-2xl">{item.emoji}</span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {t(`bach.party.${item.key}.title`)}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-white/55">
                        {t(`bach.party.${item.key}.text`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* -- Group Size & Pricing ----------------------------------------- */}
      <Section id="pricing" className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white sm:text-4xl md:text-5xl">
              {t("bach.price.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/50">
              {t("bach.price.intro")}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.titleKey}
                className={`rounded-[1.75rem] border p-6 ${
                  tier.accent === "gold"
                    ? "border-[--color-gold]/30 bg-[--color-gold]/5"
                    : "border-white/8 bg-[--color-navy-light]/55"
                }`}
              >
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-white">
                  {t(tier.titleKey)}
                </h3>
                <p className="mt-2 text-sm text-white/55">{t(tier.sizeKey)}</p>
                <p
                  className={`mt-4 font-[family-name:var(--font-heading)] text-3xl ${
                    tier.accent === "gold"
                      ? "text-[--color-gold]"
                      : "text-[--color-emerald]"
                  }`}
                >
                  {t(tier.priceKey)}
                </p>
                <p className="mt-2 text-xs text-white/40">
                  {t("bach.price.perHour")}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[--color-emerald]/20 bg-[--color-emerald]/5 px-5 py-4 text-center">
            <p className="text-sm font-medium text-[--color-emerald]">
              {t("bach.price.note")}
            </p>
          </div>
        </div>
      </Section>

      {/* -- Tips from Our Team ------------------------------------------- */}
      <Section id="tips" dark className="scroll-mt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-6 md:gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-emerald]">
              {t("bach.tips.label")}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl text-white md:text-4xl">
              {t("bach.tips.title")}
            </h2>
            <div className="mt-6 space-y-5">
              {[
                "bach.tips.tip1",
                "bach.tips.tip2",
                "bach.tips.tip3",
                "bach.tips.tip4",
                "bach.tips.tip5",
              ].map((key) => (
                <div key={key} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[--color-emerald]" />
                  <p className="text-sm leading-relaxed text-white/65">
                    {t(key)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-[2rem] border-2 border-[--color-gold]/20 shadow-[0_26px_70px_rgba(0,0,0,0.26)]">
              <Image
                src={asset("/images/sasha.jpg")}
                alt="Sasha, Partner and Director of Operations — Emerald Eyes Miami"
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

      {/* -- Mid CTA ------------------------------------------------------ */}
      <Section>
        <div className="mx-auto grid max-w-6xl items-center gap-6 md:gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-2xl">
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-emerald]">
              {t("bach.category")}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl text-white md:text-4xl">
              {t("bach.midCta.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/72">
              {t("bach.midCta.text")}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/experiences/bachelorette-yacht-miami" size="lg">
                {t("bach.midCta.btn")}
              </Button>
              <Button href="/book" variant="secondary" size="lg">
                {t("bach.cta.book")}
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

      {/* -- FAQ ---------------------------------------------------------- */}
      <Section id="faq" dark className="scroll-mt-28">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white sm:text-4xl md:text-5xl">
              {t("bach.faq.title")}
            </h2>
          </div>

          <div className="space-y-4">
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
              {t("bach.related.title")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              {t("bach.related.intro")}
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
              {t("bach.share.title")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              {t("bach.share.text")}
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button href="/book" size="lg">
                {t("bach.cta.book")}
              </Button>
              <Button href="/experiences" variant="secondary" size="lg">
                {t("bach.cta.explore")}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* -- Final CTA ---------------------------------------------------- */}
      <section className="relative overflow-hidden">
        <Image
          src={asset("/images/emeraldeyes.jpg")}
          alt="Bachelorette yacht party under the Miami skyline — Emerald Eyes Miami"
          fill
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[--color-navy]/85 via-[--color-navy]/55 to-[--color-navy]/35" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 py-16 text-center md:px-6 md:py-28">
          <Heart className="mx-auto mb-5 h-10 w-10 text-[--color-emerald] drop-shadow-lg md:h-12 md:w-12" />
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-white drop-shadow-lg sm:text-3xl md:text-5xl">
            {t("bach.final.title")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/88 drop-shadow-md">
            {t("bach.final.text")}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/book" size="lg">
              {t("bach.cta.book")}
            </Button>
            <Button href="/experiences" variant="secondary" size="lg">
              {t("bach.cta.explore")}
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}
