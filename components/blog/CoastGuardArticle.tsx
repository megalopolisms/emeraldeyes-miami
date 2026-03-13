// =============================================================================
// EMERALD EYES MIAMI — Coast Guard Inspection Article (Client Component)
// =============================================================================
// Full article with images, alternating backgrounds, animations, and i18n.
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
// Safety Equipment Data
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

// ---------------------------------------------------------------------------
// Interview Questions
// ---------------------------------------------------------------------------
const INTERVIEW_QS = ["q1", "q2", "q3", "q4", "q5", "q6", "q7"];

// ---------------------------------------------------------------------------
// Regulations Reference
// ---------------------------------------------------------------------------
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
      {/* ============================================================= */}
      {/* HERO — full-width image background with overlay                */}
      {/* ============================================================= */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <Image
          src={asset("/images/emeraldeyes.jpg")}
          alt="Emerald Eyes yacht on the water in Miami"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[--color-navy] via-[--color-navy]/70 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-[--color-emerald] mb-4 hover:underline underline-offset-4"
          >
            &larr; {t("blog.backToBlog")}
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 text-[--color-emerald] bg-[--color-emerald]/15 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" />
              {t("blog.cat.safety")}
            </span>
            <span className="text-xs text-white/60">
              March 13, 2026 &middot; {t("blog.cg.readTime")}
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl lg:text-6xl text-white leading-tight">
            {t("cg.heroTitle")}
          </h1>
        </motion.div>
      </section>

      {/* ============================================================= */}
      {/* TRUST STRIP — authority badges                                 */}
      {/* ============================================================= */}
      <section className="border-y border-white/5 bg-[--color-navy-light]/50">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6 px-6 py-6">
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
              <item.icon className="w-7 h-7 text-[--color-emerald]" />
              <div>
                <h4 className="text-white font-medium text-sm">{item.label}</h4>
                <p className="text-xs text-white/50">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================= */}
      {/* INTRO — white-ish background for contrast                      */}
      {/* ============================================================= */}
      <section className="bg-gradient-to-b from-[--color-navy-light] to-[--color-navy]">
        <div className="mx-auto max-w-3xl px-6 py-16">
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
      </section>

      {/* ============================================================= */}
      {/* SECTION 1: What Is a Bareboat Charter — dark bg                */}
      {/* ============================================================= */}
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
                {t("cg.s1.title")}
              </h2>
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {t("cg.s1.p1")}
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {t("cg.s1.p2")}
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {t("cg.s1.p3")}
            </p>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-3 mb-8"
          >
            {[
              "cg.s1.li1",
              "cg.s1.li2",
              "cg.s1.li3",
              "cg.s1.li4",
              "cg.s1.li5",
            ].map((key) => (
              <motion.li
                key={key}
                variants={staggerItem}
                className="flex items-start gap-3 text-white/80 text-lg leading-relaxed"
              >
                <CheckCircle className="w-5 h-5 text-[--color-emerald] mt-1 flex-shrink-0" />
                <span>{t(key)}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-white/80 text-lg leading-relaxed"
          >
            {t("cg.s1.p4")}
          </motion.p>
        </div>
      </Section>

      {/* ============================================================= */}
      {/* SECTION 2: Why CG Boards — lighter background                  */}
      {/* ============================================================= */}
      <Section dark>
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
                {t("cg.s2.title")}
              </h2>
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {t("cg.s2.p1")}
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {t("cg.s2.p2")}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          >
            {[
              {
                icon: ShieldCheck,
                num: "1",
                titleKey: "cg.s2.c1.title",
                textKey: "cg.s2.c1.text",
                color: "emerald",
              },
              {
                icon: FileText,
                num: "2",
                titleKey: "cg.s2.c2.title",
                textKey: "cg.s2.c2.text",
                color: "emerald",
              },
              {
                icon: Users,
                num: "3",
                titleKey: "cg.s2.c3.title",
                textKey: "cg.s2.c3.text",
                color: "gold",
              },
            ].map((card) => (
              <motion.div
                key={card.num}
                variants={staggerItem}
                className="bg-[--color-navy] rounded-2xl p-6 border border-white/10 hover:border-[--color-emerald]/20 transition-all duration-300"
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${card.color === "gold" ? "bg-[--color-gold]/10 text-[--color-gold]" : "bg-[--color-emerald]/10 text-[--color-emerald]"}`}
                >
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {t(card.titleKey)}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t(card.textKey)}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-white/80 text-lg leading-relaxed"
          >
            {t("cg.s2.p3")}
          </motion.p>
        </div>
      </Section>

      {/* ============================================================= */}
      {/* SECTION 3: Boarding Steps — visual timeline                    */}
      {/* ============================================================= */}
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
                {t("cg.s3.title")}
              </h2>
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              {t("cg.s3.intro")}
            </p>
          </motion.div>

          {/* Steps 1-8 as visual timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[--color-emerald]/40 via-[--color-emerald]/20 to-transparent hidden md:block" />

            {[1, 2, 3, 4, 5, 6, 7, 8].map((step) => (
              <motion.div
                key={step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                custom={0}
                className="relative mb-10 md:pl-16"
              >
                {/* Step number badge */}
                <div className="md:absolute md:left-0 md:top-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-[--color-emerald]/15 border border-[--color-emerald]/30 text-[--color-emerald] text-sm font-bold mb-3 md:mb-0">
                  {step}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl text-white mb-3">
                  {t(`cg.step${step}.title`)}
                </h3>
                <p className="text-white/75 text-base leading-relaxed mb-3">
                  {t(`cg.step${step}.p1`)}
                </p>
                {t(`cg.step${step}.p2`) !== `cg.step${step}.p2` && (
                  <p className="text-white/75 text-base leading-relaxed">
                    {t(`cg.step${step}.p2`)}
                  </p>
                )}

                {/* Step 2 — question list */}
                {step === 2 && (
                  <div className="mt-4 space-y-2">
                    {[
                      "cg.step2.q1",
                      "cg.step2.q2",
                      "cg.step2.q3",
                      "cg.step2.q4",
                    ].map((key) => (
                      <div
                        key={key}
                        className="flex items-start gap-3 text-white/75 text-base leading-relaxed"
                      >
                        <ChevronRight className="w-4 h-4 text-[--color-emerald] mt-1 flex-shrink-0" />
                        <span>{t(key)}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Step 4 — passenger count card */}
                {step === 4 && (
                  <div className="mt-4 bg-[--color-navy-light] rounded-xl p-5 border border-white/10 space-y-3">
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
                      <div key={idx}>
                        {idx > 0 && <hr className="border-white/10 mb-3" />}
                        <div className="flex items-start gap-3">
                          <span
                            className={`${item.color} font-bold text-base mt-0.5 shrink-0`}
                          >
                            {t(item.count)}
                          </span>
                          <p className="text-white/60 text-sm">
                            {t(item.textKey)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Step 6 — safety equipment grid */}
                {step === 6 && (
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SAFETY_ITEMS.map((item) => (
                      <div
                        key={item.key}
                        className="flex items-start gap-3 bg-[--color-navy-light] rounded-xl p-4 border border-white/10"
                      >
                        <span className="text-2xl flex-shrink-0">
                          {item.emoji}
                        </span>
                        <div>
                          <h4 className="text-white font-semibold text-sm">
                            {t(`cg.${item.key}.title`)}
                          </h4>
                          <p className="text-white/55 text-xs mt-1 leading-relaxed">
                            {t(`cg.${item.key}.text`)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================================= */}
      {/* MID-ARTICLE CTA with yacht image                               */}
      {/* ============================================================= */}
      <section className="relative overflow-hidden">
        <Image
          src={asset("/images/sax.jpg")}
          alt="Yacht charter experience in Miami"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[--color-navy]/80 backdrop-blur-sm" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center"
          >
            <Anchor className="w-10 h-10 text-[--color-emerald] mx-auto mb-4" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-white mb-4">
              {t("cg.midCta.title")}
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              {t("cg.midCta.text")}
            </p>
            <Button href="/book" size="lg">
              {t("cg.midCta.btn")}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* WHAT MAKES IT PASS — lighter background                        */}
      {/* ============================================================= */}
      <Section dark>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-8 rounded-full bg-[--color-emerald]" />
              <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white">
                {t("cg.pass.title")}
              </h2>
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {t("cg.pass.intro")}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
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
                className="flex items-start gap-3 bg-[--color-navy] rounded-xl p-4 border border-white/5"
              >
                <CheckCircle className="w-5 h-5 text-[--color-emerald] mt-0.5 flex-shrink-0" />
                <span className="text-white/75 text-sm">{t(key)}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-white/80 text-lg leading-relaxed"
          >
            {t("cg.pass.closing")}
          </motion.p>
        </div>
      </Section>

      {/* ============================================================= */}
      {/* RED FLAGS                                                      */}
      {/* ============================================================= */}
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
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {t("cg.red.intro")}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-[--color-navy-light] rounded-2xl border border-[--color-gold]/15 p-6 md:p-8 mb-8"
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
                  <span className="text-white/75 text-base">{t(key)}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-white/80 text-lg leading-relaxed"
          >
            {t("cg.red.closing")}
          </motion.p>
        </div>
      </Section>

      {/* ============================================================= */}
      {/* SASHA INTERVIEW — image + text grid like home page             */}
      {/* ============================================================= */}
      <Section dark>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-8 rounded-full bg-[--color-gold]" />
              <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold]">
                {t("cg.sasha.title")}
              </h2>
            </div>
          </motion.div>

          {/* Sasha image + intro — matching home page layout */}
          <div className="grid items-center gap-8 md:gap-12 md:grid-cols-[280px_1fr] mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-[240px]"
            >
              <div className="overflow-hidden rounded-2xl border-2 border-[--color-emerald]/25 shadow-xl shadow-[--color-emerald]/10">
                <Image
                  src={asset("/images/sasha.jpg")}
                  alt="Sasha — Operations Lead at Emerald Eyes Miami"
                  width={928}
                  height={1120}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-2xl border border-[--color-emerald]/15 bg-[--color-emerald]/5 -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-gold] mb-2">
                {t("sasha.role")}
              </p>
              <p className="text-white/80 text-base leading-relaxed mb-4">
                {t("cg.sasha.intro")}
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded-full border border-[--color-emerald]/30 bg-[--color-emerald]/10 px-3 py-1 text-[--color-emerald] font-medium">
                  {t("sasha.badge1")}
                </span>
                <span className="rounded-full border border-[--color-emerald]/30 bg-[--color-emerald]/10 px-3 py-1 text-[--color-emerald] font-medium">
                  {t("sasha.badge2")}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Interview Q&A */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-5 max-w-3xl mx-auto"
          >
            {INTERVIEW_QS.map((q) => (
              <motion.div
                key={q}
                variants={staggerItem}
                className="bg-[--color-navy] rounded-xl p-6 border border-white/10 hover:border-[--color-emerald]/20 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <MessageCircle className="w-5 h-5 text-[--color-emerald] mt-0.5 flex-shrink-0" />
                  <p className="text-[--color-emerald] font-semibold text-sm">
                    {t(`cg.sasha.${q}.q`)}
                  </p>
                </div>
                <p className="text-white/80 text-base leading-relaxed pl-8">
                  {t(`cg.sasha.${q}.a`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ============================================================= */}
      {/* WHAT THIS MEANS FOR YOU                                        */}
      {/* ============================================================= */}
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
              <div className="h-1 w-8 rounded-full bg-[--color-emerald]" />
              <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white">
                {t("cg.client.title")}
              </h2>
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-5">
              {t("cg.client.p1")}
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-5">
              {t("cg.client.p2")}
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-5">
              {t("cg.client.p3")}
            </p>
            <p className="text-white/90 text-lg leading-relaxed font-medium italic font-[family-name:var(--font-heading)]">
              &ldquo;{t("cg.client.p4")}&rdquo;
            </p>
          </motion.div>
        </div>
      </Section>

      {/* ============================================================= */}
      {/* REGULATIONS TABLE + RELATED LINKS — side by side               */}
      {/* ============================================================= */}
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
            <div className="bg-[--color-navy] rounded-xl p-5 border border-white/10 space-y-3">
              {REGULATIONS.map((reg) => (
                <div key={reg.code} className="flex items-start gap-3">
                  <span className="text-[--color-emerald] font-mono text-xs mt-0.5 shrink-0 bg-[--color-emerald]/5 px-2 py-0.5 rounded">
                    {reg.code}
                  </span>
                  <p className="text-white/60 text-sm">{t(reg.key)}</p>
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
                  className="group flex items-center gap-3 text-white/70 hover:text-[--color-emerald] transition-all duration-200 text-sm py-3 px-4 rounded-xl hover:bg-[--color-navy] border border-transparent hover:border-white/5"
                >
                  <ChevronRight className="w-4 h-4 text-[--color-emerald] transition-transform group-hover:translate-x-1" />
                  {t(link.labelKey)}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ============================================================= */}
      {/* FINAL CTA — full-width image background                        */}
      {/* ============================================================= */}
      <section className="relative overflow-hidden">
        <Image
          src={asset("/images/emeraldeyes.jpg")}
          alt="Emerald Eyes Miami yacht"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[--color-navy]/85" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <Anchor className="w-12 h-12 text-[--color-emerald] mx-auto mb-5" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl text-white mb-5">
              {t("cg.cta.title")}
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
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
