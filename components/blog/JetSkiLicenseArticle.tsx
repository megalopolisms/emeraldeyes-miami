// =============================================================================
// EMERALD EYES MIAMI — Jet Ski License Article (Client Component)
// =============================================================================
// Full article matching home page visual language: image-text grids, visible
// lifestyle photos, card layouts, and real visual contrast.
// Miami-positive SEO-optimized content about jet ski licensing requirements.
// =============================================================================

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileText,
  Users,
  Anchor,
  Clock,
  MapPin,
  ChevronRight,
  Waves,
  AlertTriangle,
  BookOpen,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/lib/language-context";
import { asset } from "@/lib/constants";

// ---------------------------------------------------------------------------
// Animation Variants
// ---------------------------------------------------------------------------
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// ---------------------------------------------------------------------------
// Data Arrays
// ---------------------------------------------------------------------------
const CHECKLIST_ITEMS = [
  { emoji: "\u{1F4CB}", key: "photoId" },
  { emoji: "\u{1F3AB}", key: "boaterCard" },
  { emoji: "\u{1F4B3}", key: "creditCard" },
  { emoji: "\u2705", key: "age18" },
];

const RULES_CARDS = [
  {
    icon: Clock,
    titleKey: "js.rules.hours.title",
    textKey: "js.rules.hours.text",
    accent: "emerald" as const,
  },
  {
    icon: ShieldCheck,
    titleKey: "js.rules.pfd.title",
    textKey: "js.rules.pfd.text",
    accent: "emerald" as const,
  },
  {
    icon: AlertTriangle,
    titleKey: "js.rules.bui.title",
    textKey: "js.rules.bui.text",
    accent: "gold" as const,
  },
];

const SPOTS = [
  { emoji: "\u{1F30A}", key: "biscayne" },
  { emoji: "\u2B50", key: "star" },
  { emoji: "\u{1F3DD}\uFE0F", key: "virginia" },
  { emoji: "\u{1F3D9}\uFE0F", key: "intracoastal" },
  { emoji: "\u{1F42C}", key: "wildlife" },
];

const RESTRICTED_ZONES = [
  "js.zone.haulover",
  "js.zone.miamiRiver",
  "js.zone.oleta",
  "js.zone.keyBiscayne",
  "js.zone.manatee",
];

const FAQ_ITEMS = [
  "license",
  "age",
  "night",
  "cost",
  "where",
  "tourist",
  "equipment",
  "bestTime",
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function JetSkiLicenseArticle() {
  const { t } = useLanguage();

  return (
    <main>
      {/* ================================================================= */}
      {/* HERO — split layout: title LEFT, lifestyle photo RIGHT            */}
      {/* ================================================================= */}
      <section className="bg-gradient-to-b from-[--color-navy] to-[--color-navy-light]">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-24 grid items-center gap-8 md:gap-12 md:grid-cols-[1.3fr_1fr]">
          {/* Title + metadata */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-[--color-emerald] mb-6 hover:underline underline-offset-4"
            >
              &larr; {t("blog.backToBlog")}
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 text-[--color-emerald] bg-[--color-emerald]/10 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
                <Waves className="w-3.5 h-3.5" />
                {t("blog.cat.guides")}
              </span>
              <span className="text-xs text-white/50">
                March 14, 2026 &middot; {t("blog.js.readTime")}
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
              {t("js.heroTitle")}
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-lg">
              {t("js.heroIntro")}
            </p>
          </motion.div>

          {/* Lifestyle photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="relative mx-auto w-full max-w-[280px] md:max-w-sm"
          >
            <div className="overflow-hidden rounded-2xl border-2 border-[--color-emerald]/25 shadow-xl shadow-[--color-emerald]/10">
              <Image
                src={asset("/images/jetski.jpg")}
                alt="Jet skiing on Biscayne Bay with the Miami skyline — Emerald Eyes Miami"
                width={784}
                height={1168}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-2xl border border-[--color-emerald]/15 bg-[--color-emerald]/5 -z-10" />
            <div className="absolute -top-3 -left-3 h-16 w-16 rounded-full border border-[--color-gold]/15 bg-[--color-gold]/5 -z-10" />
          </motion.div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* TRUST STRIP                                                       */}
      {/* ================================================================= */}
      <Section
        className="py-10 border-y border-white/5 bg-[--color-navy-light]/50"
        dark
      >
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-8">
          {[
            {
              icon: Waves,
              label: t("js.trust.yearRound"),
              sub: t("js.trust.yearRound.sub"),
            },
            {
              icon: ShieldCheck,
              label: t("js.trust.noLicense"),
              sub: t("js.trust.noLicense.sub"),
            },
            {
              icon: MapPin,
              label: t("js.trust.biscayne"),
              sub: t("js.trust.biscayne.sub"),
            },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <item.icon className="w-8 h-8 text-[--color-emerald]" />
              <div className="text-left">
                <h4 className="text-white font-medium">{item.label}</h4>
                <p className="text-xs text-white/60">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ================================================================= */}
      {/* THE SHORT ANSWER — Image-Text Grid                                */}
      {/* ================================================================= */}
      <Section dark>
        <div className="mx-auto max-w-5xl grid items-center gap-8 md:gap-12 md:grid-cols-[1fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[280px] md:max-w-sm"
          >
            <div className="overflow-hidden rounded-2xl border-2 border-[--color-emerald]/25 shadow-xl shadow-[--color-emerald]/10">
              <Image
                src={asset("/images/sushi.jpg")}
                alt="Miami Biscayne Bay waters — perfect for jet skiing"
                width={832}
                height={1248}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-2xl border border-[--color-emerald]/15 bg-[--color-emerald]/5 -z-10" />
            <div className="absolute -top-3 -left-3 h-16 w-16 rounded-full border border-[--color-gold]/15 bg-[--color-gold]/5 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-gold]">
              {t("js.answer.eyebrow")}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white">
              {t("js.answer.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75">
              {t("js.answer.p1")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              {t("js.answer.p2")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              {t("js.answer.p3")}
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              {["js.answer.tag1", "js.answer.tag2", "js.answer.tag3"].map(
                (key) => (
                  <span
                    key={key}
                    className="rounded-full border border-[--color-emerald]/30 bg-[--color-emerald]/10 px-4 py-1.5 text-[--color-emerald] font-medium"
                  >
                    {t(key)}
                  </span>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ================================================================= */}
      {/* HOW TO GET CERTIFIED — 3-Column Card Grid                         */}
      {/* ================================================================= */}
      <Section>
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
          <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white md:text-5xl">
            {t("js.cert.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/50 text-base leading-relaxed">
            {t("js.cert.intro")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Clock,
              titleKey: "js.cert.temp.title",
              textKey: "js.cert.temp.text",
              accent: "emerald",
            },
            {
              icon: FileText,
              titleKey: "js.cert.lifetime.title",
              textKey: "js.cert.lifetime.text",
              accent: "emerald",
            },
            {
              icon: Users,
              titleKey: "js.cert.outOfState.title",
              textKey: "js.cert.outOfState.text",
              accent: "gold",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="rounded-xl border border-white/5 bg-[--color-navy-light]/60 p-8 text-center"
            >
              <div
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full mb-5 ${
                  card.accent === "gold"
                    ? "border border-[--color-gold]/30 bg-[--color-gold]/10"
                    : "border border-[--color-emerald]/30 bg-[--color-emerald]/10"
                }`}
              >
                <card.icon
                  className={`w-7 h-7 ${
                    card.accent === "gold"
                      ? "text-[--color-gold]"
                      : "text-[--color-emerald]"
                  }`}
                />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-white">
                {t(card.titleKey)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                {t(card.textKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ================================================================= */}
      {/* WHAT TO BRING — Checklist cards                                   */}
      {/* ================================================================= */}
      <Section dark>
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white md:text-5xl">
              {t("js.checklist.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/45 text-sm leading-relaxed">
              {t("js.checklist.intro")}
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {CHECKLIST_ITEMS.map((item) => (
              <motion.div
                key={item.key}
                variants={staggerItem}
                className="flex items-start gap-4 bg-[--color-navy] rounded-xl p-5 border border-white/5 hover:border-[--color-emerald]/15 transition-colors"
              >
                <span className="text-3xl flex-shrink-0">{item.emoji}</span>
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {t(`js.check.${item.key}.title`)}
                  </h4>
                  <p className="text-white/50 text-xs mt-1 leading-relaxed">
                    {t(`js.check.${item.key}.text`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ================================================================= */}
      {/* FLORIDA RULES — 3 Key Rules Cards                                 */}
      {/* ================================================================= */}
      <Section>
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
          <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white md:text-5xl">
            {t("js.rules.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/50 text-base leading-relaxed">
            {t("js.rules.intro")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {RULES_CARDS.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="rounded-xl border border-white/5 bg-[--color-navy-light]/60 p-8 text-center"
            >
              <div
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full mb-5 ${
                  card.accent === "gold"
                    ? "border border-[--color-gold]/30 bg-[--color-gold]/10"
                    : "border border-[--color-emerald]/30 bg-[--color-emerald]/10"
                }`}
              >
                <card.icon
                  className={`w-7 h-7 ${
                    card.accent === "gold"
                      ? "text-[--color-gold]"
                      : "text-[--color-emerald]"
                  }`}
                />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-white">
                {t(card.titleKey)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                {t(card.textKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ================================================================= */}
      {/* MID-ARTICLE CTA — image-text grid                                 */}
      {/* ================================================================= */}
      <Section>
        <div className="mx-auto max-w-5xl grid items-center gap-8 md:gap-12 md:grid-cols-[1fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[280px] md:max-w-sm"
          >
            <div className="overflow-hidden rounded-2xl border-2 border-[--color-gold]/25 shadow-xl shadow-[--color-gold]/10">
              <Image
                src={asset("/images/sasha.jpg")}
                alt="Private yacht charter on Biscayne Bay — Emerald Eyes Miami"
                width={832}
                height={1248}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-2xl border border-[--color-gold]/15 bg-[--color-gold]/5 -z-10" />
            <div className="absolute -top-3 -left-3 h-16 w-16 rounded-full border border-[--color-emerald]/15 bg-[--color-emerald]/5 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-emerald]">
              Emerald Eyes Miami
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white">
              {t("js.midCta.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75">
              {t("js.midCta.text")}
            </p>
            <div className="mt-8">
              <Button href="/book" size="lg">
                {t("js.midCta.btn")}
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ================================================================= */}
      {/* WHERE TO RIDE — Miami's Best Spots                                */}
      {/* ================================================================= */}
      <Section dark>
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white md:text-5xl">
              {t("js.spots.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/45 text-sm leading-relaxed">
              {t("js.spots.intro")}
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {SPOTS.map((spot) => (
              <motion.div
                key={spot.key}
                variants={staggerItem}
                className="flex items-start gap-4 bg-[--color-navy] rounded-xl p-5 border border-white/5 hover:border-[--color-emerald]/15 transition-colors"
              >
                <span className="text-3xl flex-shrink-0">{spot.emoji}</span>
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {t(`js.spot.${spot.key}.title`)}
                  </h4>
                  <p className="text-white/50 text-xs mt-1 leading-relaxed">
                    {t(`js.spot.${spot.key}.text`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ================================================================= */}
      {/* RESTRICTED ZONES — compact bordered section                       */}
      {/* ================================================================= */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-8 rounded-full bg-[--color-gold]" />
              <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold]">
                {t("js.zones.title")}
              </h2>
            </div>
            <p className="text-white/75 text-base leading-relaxed mb-6">
              {t("js.zones.intro")}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-[--color-navy-light] rounded-2xl border border-[--color-gold]/15 p-6 md:p-8"
          >
            {RESTRICTED_ZONES.map((key, idx) => (
              <motion.div key={key} variants={staggerItem}>
                {idx > 0 && <hr className="border-white/5 my-4" />}
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[--color-gold] mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 text-base">{t(key)}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ================================================================= */}
      {/* PRICING — clean card with costs                                   */}
      {/* ================================================================= */}
      <Section dark>
        <div className="mx-auto max-w-5xl grid items-center gap-8 md:gap-12 md:grid-cols-[1.3fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-emerald]">
              {t("js.pricing.eyebrow")}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white">
              {t("js.pricing.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75">
              {t("js.pricing.p1")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              {t("js.pricing.p2")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              {t("js.pricing.p3")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="relative mx-auto w-full max-w-[280px] md:max-w-sm"
          >
            <div className="overflow-hidden rounded-2xl border-2 border-[--color-gold]/25 shadow-xl shadow-[--color-gold]/10">
              <Image
                src={asset("/images/emeraldeyes.jpg")}
                alt="Emerald Eyes Miami — upgrade from jet ski to private yacht charter"
                width={784}
                height={1168}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-2xl border border-[--color-gold]/15 bg-[--color-gold]/5 -z-10" />
            <div className="absolute -top-3 -right-3 h-16 w-16 rounded-full border border-[--color-emerald]/15 bg-[--color-emerald]/5 -z-10" />
          </motion.div>
        </div>
      </Section>

      {/* ================================================================= */}
      {/* SAFETY STATS — why certification matters                          */}
      {/* ================================================================= */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white md:text-5xl">
              {t("js.safety.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75 max-w-2xl mx-auto">
              {t("js.safety.p1")}
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { num: "#1", labelKey: "js.safety.stat1" },
                { num: "69%", labelKey: "js.safety.stat2" },
                { num: "$9", labelKey: "js.safety.stat3" },
              ].map((stat) => (
                <div key={stat.num}>
                  <p className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-[--color-emerald] font-bold">
                    {stat.num}
                  </p>
                  <p className="text-white/50 text-xs mt-1">
                    {t(stat.labelKey)}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-base leading-relaxed text-white/75 max-w-2xl mx-auto">
              {t("js.safety.p2")}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* ================================================================= */}
      {/* FAQ SECTION                                                       */}
      {/* ================================================================= */}
      <Section dark>
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white md:text-5xl">
              {t("js.faq.title")}
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {FAQ_ITEMS.map((faq) => (
              <motion.div
                key={faq}
                variants={staggerItem}
                className="bg-[--color-navy] rounded-xl p-5 border border-white/5 hover:border-[--color-emerald]/15 transition-colors"
              >
                <div className="flex items-start gap-3 mb-2">
                  <BookOpen className="w-4 h-4 text-[--color-emerald] mt-0.5 flex-shrink-0" />
                  <p className="text-[--color-emerald] font-semibold text-sm">
                    {t(`js.faq.${faq}.q`)}
                  </p>
                </div>
                <p className="text-white/65 text-sm leading-relaxed pl-7">
                  {t(`js.faq.${faq}.a`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ================================================================= */}
      {/* RELATED LINKS + INTERNAL LINKS                                    */}
      {/* ================================================================= */}
      <Section>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-8 rounded-full bg-[--color-gold]" />
              <h2 className="font-[family-name:var(--font-heading)] text-2xl text-[--color-gold]">
                {t("js.quickRef.title")}
              </h2>
            </div>
            <div className="bg-[--color-navy-light] rounded-xl p-5 border border-white/5 space-y-3">
              {[
                "js.ref.license",
                "js.ref.age",
                "js.ref.rent",
                "js.ref.night",
                "js.ref.pfd",
                "js.ref.bui",
                "js.ref.tourist",
              ].map((key) => (
                <div key={key} className="flex items-start gap-3">
                  <ChevronRight className="w-4 h-4 text-[--color-emerald] mt-0.5 flex-shrink-0" />
                  <p className="text-white/60 text-sm">{t(key)}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-8 rounded-full bg-[--color-emerald]" />
              <h2 className="font-[family-name:var(--font-heading)] text-2xl text-white">
                {t("js.related.title")}
              </h2>
            </div>
            <div className="space-y-2">
              {[
                {
                  href: "/blog/coast-guard-inspection-bareboat-charter",
                  labelKey: "js.related.coastGuard",
                },
                {
                  href: "/experiences/sunset-cruise-miami",
                  labelKey: "js.related.sunset",
                },
                {
                  href: "/experiences/haulover-sandbar-yacht-miami",
                  labelKey: "js.related.sandbar",
                },
                { href: "/fleet", labelKey: "js.related.fleet" },
                { href: "/book", labelKey: "js.related.book" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-3 text-white/60 hover:text-[--color-emerald] transition-all duration-200 text-sm py-3 px-4 rounded-xl hover:bg-[--color-navy-light] border border-transparent hover:border-white/5"
                >
                  <ChevronRight className="w-4 h-4 text-[--color-emerald] transition-transform group-hover:translate-x-1" />
                  {t(link.labelKey)}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ================================================================= */}
      {/* FINAL CTA — full-bleed image background                           */}
      {/* ================================================================= */}
      <section className="relative overflow-hidden">
        <Image
          src={asset("/images/emeraldeyes.jpg")}
          alt="Miami waterfront at sunset — Emerald Eyes yacht charter"
          fill
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[--color-navy]/80 via-[--color-navy]/50 to-[--color-navy]/30" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-28 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <Anchor className="w-12 h-12 text-[--color-emerald] mx-auto mb-5 drop-shadow-lg" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl text-white mb-5 drop-shadow-lg">
              {t("js.cta.title")}
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-xl mx-auto leading-relaxed drop-shadow-md">
              {t("js.cta.text")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/book" size="lg">
                {t("js.cta.book")}
              </Button>
              <Button href="/experiences" variant="secondary" size="lg">
                {t("js.cta.explore")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
