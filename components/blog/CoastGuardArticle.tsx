// =============================================================================
// EMERALD EYES MIAMI — Coast Guard Inspection Article (Client Component)
// =============================================================================
// Full article matching home page visual language: image-text grids, visible
// lifestyle photos, card layouts, and real visual contrast.
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
  AlertTriangle,
  CheckCircle,
  MessageCircle,
  ChevronRight,
  Award,
  MapPin,
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
const SAFETY_ITEMS = [
  { emoji: "\u{1F9BA}", key: "pfd" },
  { emoji: "\u{1F9EF}", key: "fire" },
  { emoji: "\u{1F534}", key: "ring" },
  { emoji: "\u{1F4CB}", key: "placard" },
  { emoji: "\u{1F6A8}", key: "vds" },
  { emoji: "\u{1F50A}", key: "sound" },
  { emoji: "\u{1F4A1}", key: "nav" },
];

const INTERVIEW_QS = ["q1", "q2", "q3", "q4", "q5", "q6", "q7"];

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

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function CoastGuardArticle() {
  const { t } = useLanguage();

  return (
    <main>
      {/* ================================================================= */}
      {/* HERO — visible yacht image, light gradient at bottom only         */}
      {/* ================================================================= */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <Image
          src={asset("/images/emeraldeyes.jpg")}
          alt="Emerald Eyes yacht on the water in Miami"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Light gradient only at bottom so image stays visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[--color-navy] via-[--color-navy]/30 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-14"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-[--color-emerald] mb-4 hover:underline underline-offset-4"
          >
            &larr; {t("blog.backToBlog")}
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 text-[--color-emerald] bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" />
              {t("blog.cat.safety")}
            </span>
            <span className="text-xs text-white/80 drop-shadow-md">
              March 13, 2026 &middot; {t("blog.cg.readTime")}
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg">
            {t("cg.heroTitle")}
          </h1>
        </motion.div>
      </section>

      {/* ================================================================= */}
      {/* TRUST STRIP — matching home page TrustSection exactly             */}
      {/* ================================================================= */}
      <Section
        className="py-10 border-y border-white/5 bg-[--color-navy-light]/50"
        dark
      >
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-8">
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
      {/* INTRO — short, punchy, then flows into content                    */}
      {/* ================================================================= */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <p className="text-white/85 text-lg leading-relaxed mb-6">
              {t("cg.intro1")}
            </p>
            <p className="text-white/85 text-lg leading-relaxed">
              {t("cg.intro2")}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* ================================================================= */}
      {/* WHAT IS A BAREBOAT — Image-Text Grid (SashaSection pattern)       */}
      {/* Yacht image LEFT, text RIGHT — matching home page layout          */}
      {/* ================================================================= */}
      <Section dark>
        <div className="mx-auto max-w-5xl grid items-center gap-8 md:gap-12 md:grid-cols-[1fr_1.3fr]">
          {/* Yacht image — same decorative treatment as home */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[280px] md:max-w-sm"
          >
            <div className="overflow-hidden rounded-2xl border-2 border-[--color-emerald]/25 shadow-xl shadow-[--color-emerald]/10">
              <Image
                src={asset("/images/emeraldeyes.jpg")}
                alt="Emerald Eyes yacht — bareboat charter in Miami"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-2xl border border-[--color-emerald]/15 bg-[--color-emerald]/5 -z-10" />
            <div className="absolute -top-3 -left-3 h-16 w-16 rounded-full border border-[--color-gold]/15 bg-[--color-gold]/5 -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-gold]">
              {t("blog.cat.safety")}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white">
              {t("cg.s1.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75">
              {t("cg.s1.p1")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              {t("cg.s1.p2")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              {t("cg.s1.p3")}
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              {["cg.s1.li1", "cg.s1.li2", "cg.s1.li3"].map((key) => (
                <span
                  key={key}
                  className="rounded-full border border-[--color-emerald]/30 bg-[--color-emerald]/10 px-4 py-1.5 text-[--color-emerald] font-medium"
                >
                  {t(key)}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ================================================================= */}
      {/* WHY CG BOARDS — 3-Column Card Grid (WhySection pattern)           */}
      {/* ================================================================= */}
      <Section>
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
          <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white md:text-5xl">
            {t("cg.s2.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/50 text-base leading-relaxed">
            {t("cg.s2.p1")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              titleKey: "cg.s2.c1.title",
              textKey: "cg.s2.c1.text",
              accent: "emerald",
            },
            {
              icon: FileText,
              titleKey: "cg.s2.c2.title",
              textKey: "cg.s2.c2.text",
              accent: "emerald",
            },
            {
              icon: Users,
              titleKey: "cg.s2.c3.title",
              textKey: "cg.s2.c3.text",
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
      {/* FULL-WIDTH SAX IMAGE BREAK — visible lifestyle photo              */}
      {/* Light overlay, text overlay for visual rhythm                     */}
      {/* ================================================================= */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src={asset("/images/sax.jpg")}
          alt="Live saxophone on a yacht at sunset — Emerald Eyes Miami"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[--color-navy]/60 via-transparent to-transparent" />
        <div className="relative z-10 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-md px-8 md:px-16"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-emerald] mb-2 drop-shadow-md">
              {t("cg.s3.title")}
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-white drop-shadow-lg leading-snug">
              {t("cg.s3.intro")}
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* BOARDING STEPS — Timeline with compact step cards                 */}
      {/* ================================================================= */}
      <Section dark>
        <div className="max-w-4xl mx-auto">
          {/* Steps 1-8 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((step) => (
              <motion.div
                key={step}
                variants={staggerItem}
                className="bg-[--color-navy] rounded-xl p-6 border border-white/5 hover:border-[--color-emerald]/15 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[--color-emerald]/15 border border-[--color-emerald]/30 text-[--color-emerald] text-sm font-bold">
                    {step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-[family-name:var(--font-heading)] text-lg text-white mb-2">
                      {t(`cg.step${step}.title`)}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {t(`cg.step${step}.p1`)}
                    </p>
                  </div>
                </div>

                {/* Step 2 — question list */}
                {step === 2 && (
                  <div className="mt-4 ml-14 space-y-1.5">
                    {[
                      "cg.step2.q1",
                      "cg.step2.q2",
                      "cg.step2.q3",
                      "cg.step2.q4",
                    ].map((key) => (
                      <div
                        key={key}
                        className="flex items-start gap-2 text-white/55 text-sm"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-[--color-emerald] mt-0.5 flex-shrink-0" />
                        <span>{t(key)}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Step 4 — passenger counts */}
                {step === 4 && (
                  <div className="mt-4 ml-14 space-y-2">
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
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span
                          className={`${item.color} font-bold text-xs mt-0.5 shrink-0`}
                        >
                          {t(item.count)}
                        </span>
                        <p className="text-white/50 text-xs">
                          {t(item.textKey)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ================================================================= */}
      {/* SAFETY EQUIPMENT — Grid cards with emojis                         */}
      {/* ================================================================= */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white md:text-5xl">
              {t("cg.step6.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/45 text-sm leading-relaxed">
              {t("cg.step6.p1")}
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {SAFETY_ITEMS.map((item) => (
              <motion.div
                key={item.key}
                variants={staggerItem}
                className="flex items-start gap-4 bg-[--color-navy-light] rounded-xl p-5 border border-white/5 hover:border-[--color-emerald]/15 transition-colors"
              >
                <span className="text-3xl flex-shrink-0">{item.emoji}</span>
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {t(`cg.${item.key}.title`)}
                  </h4>
                  <p className="text-white/50 text-xs mt-1 leading-relaxed">
                    {t(`cg.${item.key}.text`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ================================================================= */}
      {/* MID-ARTICLE CTA — visible image, lighter overlay                  */}
      {/* ================================================================= */}
      <section className="relative overflow-hidden">
        <Image
          src={asset("/images/sushi.jpg")}
          alt="Private sushi chef on a yacht — Emerald Eyes Miami"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[--color-navy]/70 via-[--color-navy]/40 to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="max-w-md"
          >
            <Anchor className="w-10 h-10 text-[--color-emerald] mb-4 drop-shadow-lg" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-white mb-4 drop-shadow-lg">
              {t("cg.midCta.title")}
            </h2>
            <p className="text-white/90 text-lg mb-8 drop-shadow-md">
              {t("cg.midCta.text")}
            </p>
            <Button href="/book" size="lg">
              {t("cg.midCta.btn")}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* WHAT MAKES IT PASS — 2-column card grid                           */}
      {/* ================================================================= */}
      <Section dark>
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white md:text-5xl">
              {t("cg.pass.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/45 text-sm leading-relaxed">
              {t("cg.pass.intro")}
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              "cg.pass.li1",
              "cg.pass.li2",
              "cg.pass.li3",
              "cg.pass.li4",
              "cg.pass.li5",
              "cg.pass.li6",
              "cg.pass.li7",
              "cg.pass.li8",
            ].map((key) => (
              <motion.div
                key={key}
                variants={staggerItem}
                className="flex items-start gap-3 bg-[--color-navy] rounded-xl p-5 border border-white/5 hover:border-[--color-emerald]/15 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-[--color-emerald] mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">{t(key)}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ================================================================= */}
      {/* RED FLAGS — compact bordered section                              */}
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
                {t("cg.red.title")}
              </h2>
            </div>
            <p className="text-white/75 text-base leading-relaxed mb-6">
              {t("cg.red.intro")}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-[--color-navy-light] rounded-2xl border border-[--color-gold]/15 p-6 md:p-8"
          >
            {[
              "cg.red.li1",
              "cg.red.li2",
              "cg.red.li3",
              "cg.red.li4",
              "cg.red.li5",
              "cg.red.li6",
              "cg.red.li7",
            ].map((key, idx) => (
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
      {/* SASHA INTERVIEW — EXACT SashaSection pattern from home page       */}
      {/* Image LEFT, text RIGHT, decorative elements, big image            */}
      {/* ================================================================= */}
      <Section dark>
        <div className="mx-auto max-w-5xl grid items-center gap-8 md:gap-12 md:grid-cols-[1fr_1.3fr]">
          {/* Sasha image — identical to home page SashaSection */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[280px] md:max-w-sm"
          >
            <div className="overflow-hidden rounded-2xl border-2 border-[--color-emerald]/25 shadow-xl shadow-[--color-emerald]/10">
              <Image
                src={asset("/images/sasha.jpg")}
                alt="Sasha — Partner & Director of Operations at Emerald Eyes Miami"
                width={928}
                height={1120}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-2xl border border-[--color-emerald]/15 bg-[--color-emerald]/5 -z-10" />
            <div className="absolute -top-3 -left-3 h-16 w-16 rounded-full border border-[--color-gold]/15 bg-[--color-gold]/5 -z-10" />
          </motion.div>

          {/* Sasha info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-gold]">
              {t("sasha.role")}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white">
              {t("cg.sasha.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75">
              {t("cg.sasha.intro")}
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              <span className="rounded-full border border-[--color-emerald]/30 bg-[--color-emerald]/10 px-4 py-1.5 text-[--color-emerald] font-medium">
                {t("sasha.badge1")}
              </span>
              <span className="rounded-full border border-[--color-emerald]/30 bg-[--color-emerald]/10 px-4 py-1.5 text-[--color-emerald] font-medium">
                {t("sasha.badge2")}
              </span>
              <span className="rounded-full border border-[--color-emerald]/30 bg-[--color-emerald]/10 px-4 py-1.5 text-[--color-emerald] font-medium">
                {t("sasha.badge3")}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Interview Q&A — below the image-text grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mt-14 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {INTERVIEW_QS.map((q) => (
            <motion.div
              key={q}
              variants={staggerItem}
              className="bg-[--color-navy] rounded-xl p-5 border border-white/5 hover:border-[--color-emerald]/15 transition-colors"
            >
              <div className="flex items-start gap-3 mb-2">
                <MessageCircle className="w-4 h-4 text-[--color-emerald] mt-0.5 flex-shrink-0" />
                <p className="text-[--color-emerald] font-semibold text-sm">
                  {t(`cg.sasha.${q}.q`)}
                </p>
              </div>
              <p className="text-white/65 text-sm leading-relaxed pl-7">
                {t(`cg.sasha.${q}.a`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ================================================================= */}
      {/* WHAT THIS MEANS FOR YOU — Image-Text Grid (SaxSection pattern)    */}
      {/* Text LEFT, image RIGHT                                            */}
      {/* ================================================================= */}
      <Section>
        <div className="mx-auto max-w-5xl grid items-center gap-8 md:gap-12 md:grid-cols-[1.3fr_1fr]">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-emerald]">
              {t("blog.cat.safety")}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white">
              {t("cg.client.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75">
              {t("cg.client.p1")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              {t("cg.client.p2")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              {t("cg.client.p3")}
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-white/90 font-medium italic font-[family-name:var(--font-heading)]">
              &ldquo;{t("cg.client.p4")}&rdquo;
            </p>
          </motion.div>

          {/* Sax image — decorative treatment matching home */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="relative mx-auto w-full max-w-[280px] md:max-w-sm"
          >
            <div className="overflow-hidden rounded-2xl border-2 border-[--color-gold]/25 shadow-xl shadow-[--color-gold]/10">
              <Image
                src={asset("/images/sax.jpg")}
                alt="Live saxophone experience on the water"
                width={800}
                height={1000}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-2xl border border-[--color-gold]/15 bg-[--color-gold]/5 -z-10" />
            <div className="absolute -top-3 -right-3 h-16 w-16 rounded-full border border-[--color-emerald]/15 bg-[--color-emerald]/5 -z-10" />
          </motion.div>
        </div>
      </Section>

      {/* ================================================================= */}
      {/* REGULATIONS + RELATED LINKS — side by side                        */}
      {/* ================================================================= */}
      <Section dark>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8">
          {/* Regulations */}
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
                {t("cg.ref.title")}
              </h2>
            </div>
            <div className="bg-[--color-navy] rounded-xl p-5 border border-white/5 space-y-3">
              {REGULATIONS.map((reg) => (
                <div key={reg.code} className="flex items-start gap-3">
                  <span className="text-[--color-emerald] font-mono text-xs mt-0.5 shrink-0 bg-[--color-emerald]/5 px-2 py-0.5 rounded">
                    {reg.code}
                  </span>
                  <p className="text-white/55 text-sm">{t(reg.key)}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Related links */}
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
                {t("cg.related.title")}
              </h2>
            </div>
            <div className="space-y-2">
              {[
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
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-3 text-white/60 hover:text-[--color-emerald] transition-all duration-200 text-sm py-3 px-4 rounded-xl hover:bg-[--color-navy] border border-transparent hover:border-white/5"
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
      {/* FINAL CTA — full-width visible yacht image                        */}
      {/* ================================================================= */}
      <section className="relative overflow-hidden">
        <Image
          src={asset("/images/emeraldeyes.jpg")}
          alt="Emerald Eyes Miami yacht"
          fill
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[--color-navy]/80 via-[--color-navy]/40 to-transparent" />
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
              {t("cg.cta.title")}
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-xl mx-auto leading-relaxed drop-shadow-md">
              {t("cg.cta.text")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/book" size="lg">
                {t("cg.cta.book")}
              </Button>
              <Button href="/experiences" variant="secondary" size="lg">
                {t("cg.cta.explore")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
