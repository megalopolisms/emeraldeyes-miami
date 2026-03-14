"use client";

import Link from "next/link";
import Image from "next/image";
import {
  AlertTriangle,
  Anchor,
  Award,
  Ban,
  CheckCircle,
  ChevronRight,
  FileText,
  Gavel,
  Heart,
  MapPin,
  ShieldAlert,
  ShieldCheck,
  Ship,
  Star,
  Users,
  XCircle,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/lib/language-context";
import { asset } from "@/lib/constants";

const SAFETY_ITEMS = [
  { emoji: "\u{1F9BA}", key: "pfd" },
  { emoji: "\u{1F9EF}", key: "fire" },
  { emoji: "\u{1F534}", key: "ring" },
  { emoji: "\u{1F4CB}", key: "placard" },
  { emoji: "\u{1F6A8}", key: "vds" },
  { emoji: "\u{1F50A}", key: "sound" },
  { emoji: "\u{1F4A1}", key: "nav" },
];

const RULES = [
  {
    num: 1,
    titleKey: "cg.rule1.title",
    items: ["cg.rule1.li1", "cg.rule1.li2"],
    accent: "emerald" as const,
  },
  {
    num: 2,
    titleKey: "cg.rule2.title",
    items: ["cg.rule2.li1", "cg.rule2.li2", "cg.rule2.li3"],
    accent: "emerald" as const,
  },
  {
    num: 3,
    titleKey: "cg.rule3.title",
    items: ["cg.rule3.li1", "cg.rule3.li2", "cg.rule3.li3"],
    accent: "gold" as const,
  },
  {
    num: 4,
    titleKey: "cg.rule4.title",
    items: ["cg.rule4.li1", "cg.rule4.li2"],
    accent: "gold" as const,
  },
];

const REGULATIONS = [
  { code: "NVIC 7-94", key: "cg.reg.nvic" },
  { code: "46 C.F.R. Part 25", key: "cg.reg.cfr25" },
  { code: "46 C.F.R. \u00A7 175.110", key: "cg.reg.175" },
  { code: "46 C.F.R. \u00A7 176.100", key: "cg.reg.176" },
  { code: "46 U.S.C. \u00A7 2101", key: "cg.reg.2101" },
  { code: "46 C.F.R. \u00A7 15.605", key: "cg.reg.15605" },
  { code: "33 C.F.R. Part 83", key: "cg.reg.83" },
  { code: "46 C.F.R. Part 16", key: "cg.reg.16" },
];

const GUIDE_SECTIONS = [
  { id: "basics", titleKey: "cg.s1.title" },
  { id: "boarding", titleKey: "cg.s3.title" },
  { id: "equipment", titleKey: "cg.equip.title" },
  { id: "checklist", titleKey: "cg.checklist.navTitle" },
  { id: "rules", titleKey: "cg.rules.title" },
  { id: "pass", titleKey: "cg.pass.title" },
  { id: "red-flags", titleKey: "cg.red.title" },
  { id: "fail-consequences", titleKey: "cg.fail.navTitle" },
  { id: "emerald-eyes-difference", titleKey: "cg.ee.navTitle" },
  { id: "client", titleKey: "cg.client.title" },
  { id: "references", titleKey: "cg.ref.title" },
];

const SUMMARY_ITEMS = [
  { icon: Users, titleKey: "cg.step2.title", textKey: "cg.step2.p1" },
  { icon: FileText, titleKey: "cg.step3.title", textKey: "cg.step3.p1" },
  { icon: ShieldCheck, titleKey: "cg.step6.title", textKey: "cg.step6.intro" },
  { icon: Anchor, titleKey: "cg.pass.title", textKey: "cg.pass.intro" },
];

const PASS_ITEMS = [
  "cg.pass.li1",
  "cg.pass.li2",
  "cg.pass.li3",
  "cg.pass.li4",
  "cg.pass.li5",
  "cg.pass.li6",
  "cg.pass.li7",
  "cg.pass.li8",
];

const RED_FLAGS = [
  "cg.red.li1",
  "cg.red.li2",
  "cg.red.li3",
  "cg.red.li4",
  "cg.red.li5",
  "cg.red.li6",
  "cg.red.li7",
];

const CHECKLIST_ITEMS = [
  { key: "pfd", emoji: "\u{1F9BA}" },
  { key: "fire", emoji: "\u{1F9EF}" },
  { key: "ring", emoji: "\u{1F534}" },
  { key: "vds", emoji: "\u{1F6A8}" },
  { key: "sound", emoji: "\u{1F50A}" },
  { key: "nav", emoji: "\u{1F4A1}" },
  { key: "placard", emoji: "\u{1F4CB}" },
  { key: "engine", emoji: "\u{2699}\u{FE0F}" },
  { key: "contract", emoji: "\u{1F4DD}" },
];

const FAIL_ITEMS = [
  { key: "terminate", icon: Ban },
  { key: "fine", icon: Gavel },
  { key: "seize", icon: Ship },
  { key: "criminal", icon: ShieldAlert },
  { key: "captain", icon: XCircle },
  { key: "insurance", icon: AlertTriangle },
];

const EE_ITEMS = [
  { key: "inspect", icon: ShieldCheck },
  { key: "captains", icon: Award },
  { key: "contract", icon: FileText },
  { key: "briefing", icon: Users },
  { key: "equipment", icon: Star },
  { key: "record", icon: Heart },
];

const CROSS_LINKS = [
  {
    href: "/blog/miami-yacht-charter-prices",
    labelKey: "cg.related.yachtPrices",
    descKey: "cg.xlink.pricing",
  },
  {
    href: "/blog/bachelorette-party-yacht-miami",
    labelKey: "cg.related.bachelorette",
    descKey: "cg.xlink.bachelorette",
  },
  {
    href: "/blog/first-time-yacht-rental-miami",
    labelKey: "cg.related.firstTimer",
    descKey: "cg.xlink.firstTimer",
  },
  {
    href: "/blog/haulover-sandbar-yacht-charter-miami",
    labelKey: "cg.related.haulover",
    descKey: "cg.xlink.haulover",
  },
  {
    href: "/blog/jet-ski-license-miami",
    labelKey: "cg.related.jetSki",
    descKey: "cg.xlink.jetSki",
  },
];

const RELATED_LINKS = [
  {
    href: "/experiences/sunset-cruise-miami",
    labelKey: "cg.related.sunset",
  },
  {
    href: "/experiences/private-party-yacht-miami",
    labelKey: "cg.related.party",
  },
  {
    href: "/experiences/haulover-sandbar-yacht-miami",
    labelKey: "cg.related.sandbar",
  },
  { href: "/about", labelKey: "cg.related.about" },
];

export default function CoastGuardArticle() {
  const { t } = useLanguage();

  return (
    <main>
      {/* Hero */}
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
                <ShieldCheck className="h-3.5 w-3.5" />
                {t("blog.cat.safety")}
              </span>
              <span className="text-white/50">
                March 13, 2026 &middot; {t("blog.cg.readTime")}
              </span>
            </div>
            <h1 className="mt-6 font-[family-name:var(--font-heading)] text-2xl leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {t("cg.heroTitle")}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/72 sm:text-lg">
              {t("cg.intro1")}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/58 sm:text-base">
              {t("cg.intro2")}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#guide"
                className="inline-flex items-center justify-center rounded-full border border-[--color-emerald] bg-transparent px-8 py-3.5 text-base text-[--color-emerald] transition-colors hover:bg-[--color-emerald-dim] sm:text-lg"
              >
                {t("cg.guide.title")}
              </a>
              <Button href="/book" variant="secondary" size="lg">
                {t("cg.cta.book")}
              </Button>
            </div>
          </div>

          <div className="space-y-5">
            <div className="relative mx-auto w-full max-w-md">
              <div className="overflow-hidden rounded-[2rem] border-2 border-[--color-emerald]/20 shadow-[0_30px_80px_rgba(0,0,0,0.32)]">
                <Image
                  src={asset("/images/sax.jpg")}
                  alt="Live saxophone on a yacht in Miami — Emerald Eyes charter experience"
                  width={784}
                  height={1168}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-[2rem] border border-[--color-emerald]/15 bg-[--color-emerald]/5 -z-10" />
              <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full border border-[--color-gold]/15 bg-[--color-gold]/5 -z-10" />
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[--color-navy]/80 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.25)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-gold]">
                {t("cg.quick.title")}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {t("cg.s3.intro")}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {SUMMARY_ITEMS.map((item) => (
                  <div
                    key={item.titleKey}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                  >
                    <item.icon className="h-5 w-5 text-[--color-emerald]" />
                    <p className="mt-3 text-sm leading-relaxed text-white/75">
                      {t(item.titleKey)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
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
              <h2 className="mt-4 text-base font-medium text-white sm:text-lg">
                {item.label}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-white/60">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Guide overview + sidebar nav */}
      <Section id="guide" className="scroll-mt-28">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="rounded-[2rem] border border-white/8 bg-[--color-navy-light]/55 p-5 sm:p-6 md:p-8 lg:p-10">
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-white sm:text-3xl md:text-4xl">
              {t("cg.quick.title")}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
              {t("blog.cg.excerpt")}
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {SUMMARY_ITEMS.map((item) => (
                <div
                  key={item.titleKey}
                  className="rounded-[1.5rem] border border-white/8 bg-[--color-navy]/70 p-5"
                >
                  <div className="flex items-start gap-3">
                    <item.icon className="mt-0.5 h-5 w-5 text-[--color-emerald]" />
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] text-lg text-white sm:text-xl">
                        {t(item.titleKey)}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">
                        {t(item.textKey)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="self-start rounded-[2rem] border border-white/8 bg-[--color-navy-light]/80 p-6 lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-gold]">
              {t("cg.guide.title")}
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

      {/* Basics: What is a bareboat charter? */}
      <Section id="basics" dark className="scroll-mt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-6 md:gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-[2rem] border-2 border-[--color-emerald]/20 shadow-[0_26px_70px_rgba(0,0,0,0.26)]">
              <Image
                src={asset("/images/sushi.jpg")}
                alt="Luxury yacht deck at night — bareboat charter in Miami"
                width={832}
                height={1248}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-[2rem] border border-[--color-emerald]/15 bg-[--color-emerald]/5 -z-10" />
            <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full border border-[--color-gold]/15 bg-[--color-gold]/5 -z-10" />
          </div>

          <div className="max-w-2xl">
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-gold]">
              {t("blog.cat.safety")}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl text-white sm:text-3xl md:text-4xl">
              {t("cg.s1.title")}
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/75 sm:text-base">
              {t("cg.s1.p1")}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/72 sm:text-base">
              {t("cg.s1.p2")}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/72 sm:text-base">
              {t("cg.s1.p3")}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              {["cg.s1.li1", "cg.s1.li2", "cg.s1.li3"].map((key) => (
                <span
                  key={key}
                  className="rounded-full border border-[--color-emerald]/30 bg-[--color-emerald]/10 px-4 py-1.5 font-medium text-[--color-emerald]"
                >
                  {t(key)}
                </span>
              ))}
            </div>
            {/* Cross-link: first-timer */}
            <Link
              href="/blog/first-time-yacht-rental-miami"
              className="mt-6 flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm text-white/60 transition-all hover:border-[--color-emerald]/30 hover:text-[--color-emerald]"
            >
              <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[--color-emerald]" />
              <span>{t("cg.xlink.firstTimer")}</span>
            </Link>
          </div>
        </div>
      </Section>

      {/* Boarding steps */}
      <Section id="boarding" className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {t("cg.s3.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/50 sm:text-base">
              {t("cg.s3.intro")}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {([1, 2, 3, 4, 5, 6, 7, 8] as const).map((step) => (
              <div
                key={step}
                className="rounded-[1.5rem] border border-white/8 bg-[--color-navy-light]/55 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[--color-emerald]/30 bg-[--color-emerald]/15 text-sm font-bold text-[--color-emerald]">
                    {step}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-[family-name:var(--font-heading)] text-lg text-white sm:text-xl">
                      {t(`cg.step${step}.title`)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {t(step === 6 ? "cg.step6.intro" : `cg.step${step}.p1`)}
                    </p>
                  </div>
                </div>

                {step === 2 && (
                  <div className="mt-5 space-y-2 pl-14">
                    {[
                      "cg.step2.q1",
                      "cg.step2.q2",
                      "cg.step2.q3",
                      "cg.step2.q4",
                    ].map((key) => (
                      <div
                        key={key}
                        className="flex items-start gap-2 text-sm text-white/55"
                      >
                        <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[--color-emerald]" />
                        <span>{t(key)}</span>
                      </div>
                    ))}
                  </div>
                )}

                {step === 4 && (
                  <div className="mt-5 space-y-2 pl-14">
                    {[
                      {
                        count: "cg.pax.6",
                        color: "text-[--color-emerald]",
                        textKey: "cg.pax.6.text",
                      },
                      {
                        count: "cg.pax.712",
                        color: "text-[--color-emerald]",
                        textKey: "cg.pax.712.text",
                      },
                      {
                        count: "cg.pax.13",
                        color: "text-[--color-gold]",
                        textKey: "cg.pax.13.text",
                      },
                    ].map((item) => (
                      <div key={item.count} className="flex items-start gap-2">
                        <span
                          className={`${item.color} shrink-0 text-xs font-bold`}
                        >
                          {t(item.count)}
                        </span>
                        <p className="text-xs leading-relaxed text-white/50">
                          {t(item.textKey)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Cross-link: haulover sandbar */}
          <Link
            href="/blog/haulover-sandbar-yacht-charter-miami"
            className="mt-8 flex items-start gap-3 rounded-2xl border border-white/8 bg-[--color-navy-light]/55 p-5 text-sm text-white/60 transition-all hover:border-[--color-emerald]/30 hover:text-[--color-emerald]"
          >
            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[--color-emerald]" />
            <span>{t("cg.xlink.haulover")}</span>
          </Link>
        </div>
      </Section>

      {/* Safety equipment overview */}
      <Section id="equipment" dark className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {t("cg.equip.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/50">
              {t("cg.equip.intro")}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SAFETY_ITEMS.map((item) => (
              <div
                key={item.key}
                className="flex items-start gap-4 rounded-[1.5rem] border border-white/8 bg-[--color-navy]/75 p-5"
              >
                <span className="shrink-0 text-3xl">{item.emoji}</span>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {t(`cg.${item.key}.title`)}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/55">
                    {t(`cg.${item.key}.text`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* NEW: Full Inspection Checklist with pass/fail detail */}
      <Section id="checklist" className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {t("cg.checklist.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
              {t("cg.checklist.intro")}
            </p>
          </div>

          <div className="mt-10 space-y-5">
            {CHECKLIST_ITEMS.map((item) => (
              <div
                key={item.key}
                className="rounded-[1.75rem] border border-white/8 bg-[--color-navy-light]/55 p-5 sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="shrink-0 text-2xl">{item.emoji}</span>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg text-white sm:text-xl">
                    {t(`cg.check.${item.key}.title`)}
                  </h3>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-[--color-emerald]/20 bg-[--color-emerald]/5 p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[--color-emerald]">
                      <CheckCircle className="h-3.5 w-3.5" />
                      Pass
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {t(`cg.check.${item.key}.pass`)}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[--color-gold]/20 bg-[--color-gold]/5 p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[--color-gold]">
                      <XCircle className="h-3.5 w-3.5" />
                      Fail
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {t(`cg.check.${item.key}.fail`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Rules */}
      <Section id="rules" dark className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {t("cg.rules.title")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/50 sm:text-base">
              {t("cg.rules.intro")}
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
                  <h3 className="font-[family-name:var(--font-heading)] text-lg text-white sm:text-2xl">
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

          {/* Cross-link: jet ski license */}
          <Link
            href="/blog/jet-ski-license-miami"
            className="mt-8 flex items-start gap-3 rounded-2xl border border-white/8 bg-[--color-navy]/70 p-5 text-sm text-white/60 transition-all hover:border-[--color-emerald]/30 hover:text-[--color-emerald]"
          >
            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[--color-emerald]" />
            <span>{t("cg.xlink.jetSki")}</span>
          </Link>
        </div>
      </Section>

      {/* Pass / Red flags side-by-side */}
      <Section className="scroll-mt-28">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <div
            id="pass"
            className="scroll-mt-28 rounded-[2rem] border border-white/8 bg-[--color-navy]/70 p-5 sm:p-6 md:p-8"
          >
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-white sm:text-3xl md:text-4xl">
              {t("cg.pass.title")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              {t("cg.pass.intro")}
            </p>

            <div className="mt-6 space-y-4">
              {PASS_ITEMS.map((key) => (
                <div key={key} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[--color-emerald]" />
                  <span className="text-sm leading-relaxed text-white/72">
                    {t(key)}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-white/55">
              {t("cg.pass.closing")}
            </p>
          </div>

          <div
            id="red-flags"
            className="scroll-mt-28 rounded-[2rem] border border-[--color-gold]/20 bg-[--color-navy]/70 p-5 sm:p-6 md:p-8"
          >
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-[--color-gold] sm:text-3xl md:text-4xl">
              {t("cg.red.title")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              {t("cg.red.intro")}
            </p>

            <div className="mt-6 space-y-4">
              {RED_FLAGS.map((key) => (
                <div key={key} className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[--color-gold]" />
                  <span className="text-sm leading-relaxed text-white/72">
                    {t(key)}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-white/55">
              {t("cg.red.closing")}
            </p>
          </div>
        </div>
      </Section>

      {/* NEW: What Happens If You Fail */}
      <Section id="fail-consequences" dark className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-[--color-gold] sm:text-3xl md:text-4xl lg:text-5xl">
              {t("cg.fail.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
              {t("cg.fail.intro")}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FAIL_ITEMS.map((item) => (
              <div
                key={item.key}
                className="rounded-[1.75rem] border border-[--color-gold]/15 bg-[--color-navy]/70 p-5 sm:p-6"
              >
                <item.icon className="h-6 w-6 text-[--color-gold]" />
                <h3 className="mt-3 font-[family-name:var(--font-heading)] text-lg text-white">
                  {t(`cg.fail.${item.key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {t(`cg.fail.${item.key}.text`)}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-white/55 sm:text-base">
            {t("cg.fail.closing")}
          </p>

          {/* Cross-link: yacht prices */}
          <Link
            href="/blog/miami-yacht-charter-prices"
            className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-2xl border border-white/8 bg-[--color-navy-light]/55 p-5 text-sm text-white/60 transition-all hover:border-[--color-emerald]/30 hover:text-[--color-emerald]"
          >
            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[--color-emerald]" />
            <span>{t("cg.xlink.pricing")}</span>
          </Link>
        </div>
      </Section>

      {/* NEW: What Emerald Eyes Does Differently */}
      <Section id="emerald-eyes-difference" className="scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {t("cg.ee.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
              {t("cg.ee.intro")}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EE_ITEMS.map((item) => (
              <div
                key={item.key}
                className="rounded-[1.75rem] border border-[--color-emerald]/20 bg-[--color-navy-light]/55 p-5 sm:p-6"
              >
                <item.icon className="h-6 w-6 text-[--color-emerald]" />
                <h3 className="mt-3 font-[family-name:var(--font-heading)] text-lg text-white">
                  {t(`cg.ee.${item.key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {t(`cg.ee.${item.key}.text`)}
                </p>
              </div>
            ))}
          </div>

          {/* Cross-link: bachelorette */}
          <Link
            href="/blog/bachelorette-party-yacht-miami"
            className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-2xl border border-white/8 bg-[--color-navy-light]/55 p-5 text-sm text-white/60 transition-all hover:border-[--color-emerald]/30 hover:text-[--color-emerald]"
          >
            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[--color-emerald]" />
            <span>{t("cg.xlink.bachelorette")}</span>
          </Link>
        </div>
      </Section>

      {/* What this means for you */}
      <Section id="client" dark className="scroll-mt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-6 md:gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-2xl">
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-emerald]">
              {t("blog.cat.safety")}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl text-white sm:text-3xl md:text-4xl">
              {t("cg.client.title")}
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/72 sm:text-base">
              {t("cg.client.p1")}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/68 sm:text-base">
              {t("cg.client.p2")}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/68 sm:text-base">
              {t("cg.client.p3")}
            </p>
            <p className="mt-5 font-[family-name:var(--font-heading)] text-xl italic leading-relaxed text-white/90 sm:text-2xl">
              &ldquo;{t("cg.client.p4")}&rdquo;
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-[2rem] border-2 border-[--color-gold]/20 shadow-[0_26px_70px_rgba(0,0,0,0.26)]">
              <Image
                src={asset("/images/emeraldeyes.jpg")}
                alt="Emerald Eyes Miami yacht charter brand"
                width={784}
                height={1168}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-[2rem] border border-[--color-gold]/15 bg-[--color-gold]/5 -z-10" />
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full border border-[--color-emerald]/15 bg-[--color-emerald]/5 -z-10" />
          </div>
        </div>
      </Section>

      {/* References + Related links + Cross-links */}
      <Section id="references" className="scroll-mt-28">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/8 bg-[--color-navy-light]/55 p-5 sm:p-6 md:p-8">
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-[--color-gold] sm:text-2xl md:text-3xl">
              {t("cg.ref.title")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              {t("cg.s2.p1")}
            </p>

            <div className="mt-6 space-y-3">
              {REGULATIONS.map((reg) => (
                <div key={reg.code} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded bg-[--color-emerald]/5 px-2 py-0.5 font-mono text-xs text-[--color-emerald]">
                    {reg.code}
                  </span>
                  <p className="text-sm leading-relaxed text-white/55">
                    {t(reg.key)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/8 bg-[--color-navy-light]/55 p-5 sm:p-6 md:p-8">
              <div className="mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
              <h2 className="font-[family-name:var(--font-heading)] text-xl text-white sm:text-2xl md:text-3xl">
                {t("cg.related.title")}
              </h2>

              <div className="mt-4 space-y-2">
                {CROSS_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center gap-3 rounded-2xl border border-transparent px-4 py-3 text-sm text-white/60 transition-all hover:border-white/8 hover:bg-[--color-navy]/80 hover:text-[--color-emerald]"
                  >
                    <ChevronRight className="h-4 w-4 text-[--color-emerald] transition-transform group-hover:translate-x-1" />
                    {t(link.labelKey)}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/8 bg-[--color-navy-light]/55 p-5 sm:p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-gold]">
                Experiences
              </p>
              <div className="mt-4 space-y-2">
                {RELATED_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center gap-3 rounded-2xl border border-transparent px-4 py-3 text-sm text-white/60 transition-all hover:border-white/8 hover:bg-[--color-navy]/80 hover:text-[--color-emerald]"
                  >
                    <ChevronRight className="h-4 w-4 text-[--color-emerald] transition-transform group-hover:translate-x-1" />
                    {t(link.labelKey)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <Image
          src={asset("/images/sax.jpg")}
          alt="Live sax on yacht — Emerald Eyes Miami"
          fill
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[--color-navy]/85 via-[--color-navy]/55 to-[--color-navy]/35" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 py-16 text-center md:px-6 md:py-28">
          <Anchor className="mx-auto mb-5 h-10 w-10 text-[--color-emerald] drop-shadow-lg md:h-12 md:w-12" />
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-white drop-shadow-lg sm:text-3xl md:text-4xl lg:text-5xl">
            {t("cg.cta.title")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/88 drop-shadow-md sm:text-lg">
            {t("cg.cta.text")}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/book" size="lg">
              {t("cg.cta.book")}
            </Button>
            <Button href="/experiences" variant="secondary" size="lg">
              {t("cg.cta.explore")}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
