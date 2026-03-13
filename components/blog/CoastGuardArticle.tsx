// =============================================================================
// EMERALD EYES MIAMI — Coast Guard Inspection Article (Client Component)
// =============================================================================
// Full article with framer-motion animations and i18n via useLanguage().
// Imported by app/blog/coast-guard-inspection-bareboat-charter/page.tsx.
// =============================================================================

"use client";

import Link from "next/link";
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
} from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/lib/language-context";

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
  { emoji: "🦺", key: "pfd", cfrKey: "cg.pfd.cfr" },
  { emoji: "🧯", key: "fire", cfrKey: "cg.fire.cfr" },
  { emoji: "🔴", key: "ring", cfrKey: "cg.ring.cfr" },
  { emoji: "📋", key: "placard", cfrKey: "" },
  { emoji: "🚨", key: "vds", cfrKey: "cg.vds.cfr" },
  { emoji: "🔊", key: "sound", cfrKey: "cg.sound.cfr" },
  { emoji: "💡", key: "nav", cfrKey: "cg.nav.cfr" },
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
      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-[50vh] px-6 py-28 bg-gradient-to-b from-[--color-navy] to-[--color-navy-light]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-[--color-emerald] mb-6 hover:underline underline-offset-4"
          >
            &larr; {t("blog.backToBlog")}
          </Link>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            {t("cg.heroTitle")}
          </h1>
          <div className="flex items-center justify-center gap-3 text-sm text-white/50">
            <span className="inline-flex items-center gap-1.5 text-[--color-emerald] bg-[--color-emerald]/10 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" />
              {t("blog.cat.safety")}
            </span>
            <span>March 13, 2026 &middot; {t("blog.cg.readTime")}</span>
          </div>
        </motion.div>
      </section>

      {/* Article Body */}
      <Section>
        <article className="max-w-3xl mx-auto">
          {/* Intro */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {t("cg.intro1")}
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              {t("cg.intro2")}
            </p>
          </motion.div>

          {/* Section: What is a bareboat charter */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="flex items-center gap-3 mt-16 mb-6">
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
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              {t("cg.s1.p3")}
            </p>
          </motion.div>

          {/* Bareboat criteria list */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-3 mb-8 pl-0"
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
            className="text-white/80 text-lg leading-relaxed mb-10"
          >
            {t("cg.s1.p4")}
          </motion.p>

          {/* Section: Why does CG board */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="flex items-center gap-3 mt-16 mb-6">
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

          {/* Three checks cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4 mb-8"
          >
            {[
              {
                icon: ShieldCheck,
                num: "1",
                titleKey: "cg.s2.c1.title",
                textKey: "cg.s2.c1.text",
              },
              {
                icon: FileText,
                num: "2",
                titleKey: "cg.s2.c2.title",
                textKey: "cg.s2.c2.text",
              },
              {
                icon: Users,
                num: "3",
                titleKey: "cg.s2.c3.title",
                textKey: "cg.s2.c3.text",
              },
            ].map((card) => (
              <motion.div
                key={card.num}
                variants={staggerItem}
                className="bg-[--color-navy-light] rounded-xl p-6 border border-white/10 hover:border-[--color-emerald]/20 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[--color-emerald]/10 text-[--color-emerald] flex-shrink-0">
                    <card.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[--color-emerald] font-semibold text-lg mb-2">
                      {card.num}. {t(card.titleKey)}
                    </h3>
                    <p className="text-white/70 text-base leading-relaxed">
                      {t(card.textKey)}
                    </p>
                  </div>
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
            className="text-white/80 text-lg leading-relaxed mb-10"
          >
            {t("cg.s2.p3")}
          </motion.p>

          {/* Section: What actually happens */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="flex items-center gap-3 mt-16 mb-6">
              <div className="h-1 w-8 rounded-full bg-[--color-gold]" />
              <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold]">
                {t("cg.s3.title")}
              </h2>
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              {t("cg.s3.intro")}
            </p>
          </motion.div>

          {/* Steps 1-8 */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((step) => (
            <motion.div
              key={step}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <h3 className="font-[family-name:var(--font-heading)] text-2xl text-white mt-10 mb-4 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[--color-emerald]/15 text-[--color-emerald] text-sm font-bold flex-shrink-0">
                  {step}
                </span>
                {t(`cg.step${step}.title`)}
              </h3>
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                {t(`cg.step${step}.p1`)}
              </p>
              {t(`cg.step${step}.p2`) !== `cg.step${step}.p2` && (
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  {t(`cg.step${step}.p2`)}
                </p>
              )}
            </motion.div>
          ))}

          {/* Step 2 question list */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="-mt-2 mb-8"
          >
            <ul className="space-y-3">
              {["cg.step2.q1", "cg.step2.q2", "cg.step2.q3", "cg.step2.q4"].map(
                (key) => (
                  <li
                    key={key}
                    className="flex items-start gap-3 text-white/80 text-lg leading-relaxed"
                  >
                    <ChevronRight className="w-5 h-5 text-[--color-emerald] mt-1 flex-shrink-0" />
                    <span>{t(key)}</span>
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Step 4 passenger count card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="bg-[--color-navy-light] rounded-xl p-6 border border-white/10 mb-10 -mt-2"
          >
            <div className="space-y-4">
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
                  {idx > 0 && <hr className="border-white/10 mb-4" />}
                  <div className="flex items-start gap-3">
                    <span
                      className={`${item.color} font-bold text-lg mt-0.5 shrink-0`}
                    >
                      {t(item.count)}
                    </span>
                    <p className="text-white/70 text-base">{t(item.textKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Safety equipment section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h3 className="font-[family-name:var(--font-heading)] text-2xl text-white mt-10 mb-4 flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[--color-emerald]/15 text-[--color-emerald] text-sm font-bold flex-shrink-0">
                6
              </span>
              {t("cg.step6.title")}
            </h3>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {t("cg.step6.intro")}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4 mb-10"
          >
            {SAFETY_ITEMS.map((item) => (
              <motion.div
                key={item.key}
                variants={staggerItem}
                className="flex items-start gap-4 bg-[--color-navy-light] rounded-xl p-5 border border-white/10 hover:border-[--color-emerald]/20 transition-colors"
              >
                <div className="text-3xl flex-shrink-0">{item.emoji}</div>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {t(`cg.${item.key}.title`)}
                  </h4>
                  <p className="text-white/70 text-base mt-1 leading-relaxed">
                    {t(`cg.${item.key}.text`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mid-article CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="bg-gradient-to-r from-[--color-emerald]/10 to-transparent rounded-2xl p-8 border border-[--color-emerald]/20 mb-10"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-white mb-2">
                  {t("cg.midCta.title")}
                </h3>
                <p className="text-white/60 text-base">{t("cg.midCta.text")}</p>
              </div>
              <Button href="/book" size="md">
                {t("cg.midCta.btn")}
              </Button>
            </div>
          </motion.div>

          {/* What makes it pass */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="flex items-center gap-3 mt-16 mb-6">
              <div className="h-1 w-8 rounded-full bg-[--color-gold]" />
              <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold]">
                {t("cg.pass.title")}
              </h2>
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {t("cg.pass.intro")}
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
              "cg.pass.li1",
              "cg.pass.li2",
              "cg.pass.li3",
              "cg.pass.li4",
              "cg.pass.li5",
              "cg.pass.li6",
              "cg.pass.li7",
              "cg.pass.li8",
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
            className="text-white/80 text-lg leading-relaxed mb-10"
          >
            {t("cg.pass.closing")}
          </motion.p>

          {/* Red flags */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="flex items-center gap-3 mt-16 mb-6">
              <div className="h-1 w-8 rounded-full bg-[--color-gold]" />
              <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold]">
                {t("cg.red.title")}
              </h2>
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {t("cg.red.intro")}
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
              "cg.red.li1",
              "cg.red.li2",
              "cg.red.li3",
              "cg.red.li4",
              "cg.red.li5",
              "cg.red.li6",
              "cg.red.li7",
            ].map((key) => (
              <motion.li
                key={key}
                variants={staggerItem}
                className="flex items-start gap-3 text-white/80 text-lg leading-relaxed"
              >
                <AlertTriangle className="w-5 h-5 text-[--color-gold] mt-1 flex-shrink-0" />
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
            className="text-white/80 text-lg leading-relaxed mb-10"
          >
            {t("cg.red.closing")}
          </motion.p>

          {/* Sasha Interview */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="flex items-center gap-3 mt-16 mb-6">
              <div className="h-1 w-8 rounded-full bg-[--color-gold]" />
              <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold]">
                {t("cg.sasha.title")}
              </h2>
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              {t("cg.sasha.intro")}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6 mb-10"
          >
            {INTERVIEW_QS.map((q) => (
              <motion.div
                key={q}
                variants={staggerItem}
                className="bg-[--color-navy-light] rounded-xl p-6 border border-white/10 hover:border-[--color-emerald]/20 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <MessageCircle className="w-5 h-5 text-[--color-emerald] mt-0.5 flex-shrink-0" />
                  <p className="text-[--color-emerald] font-semibold text-base">
                    {t(`cg.sasha.${q}.q`)}
                  </p>
                </div>
                <p className="text-white/80 text-lg leading-relaxed pl-8">
                  {t(`cg.sasha.${q}.a`)}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* What this means for you */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="flex items-center gap-3 mt-16 mb-6">
              <div className="h-1 w-8 rounded-full bg-[--color-gold]" />
              <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold]">
                {t("cg.client.title")}
              </h2>
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {t("cg.client.p1")}
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {t("cg.client.p2")}
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {t("cg.client.p3")}
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              {t("cg.client.p4")}
            </p>
          </motion.div>

          {/* Quick Reference Table */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="flex items-center gap-3 mt-16 mb-6">
              <div className="h-1 w-8 rounded-full bg-[--color-gold]" />
              <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold]">
                {t("cg.ref.title")}
              </h2>
            </div>
            <div className="bg-[--color-navy-light] rounded-xl p-6 border border-white/10 mb-10 space-y-3">
              {REGULATIONS.map((reg) => (
                <div key={reg.code} className="flex items-start gap-3">
                  <span className="text-[--color-emerald] font-mono text-sm mt-1 shrink-0">
                    {reg.code}
                  </span>
                  <p className="text-white/70 text-sm">{t(reg.key)}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Internal links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="bg-[--color-navy-light] rounded-2xl p-8 border border-white/10 mb-10"
          >
            <h3 className="font-[family-name:var(--font-heading)] text-xl text-white mb-4">
              {t("cg.related.title")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                  className="flex items-center gap-2 text-white/70 hover:text-[--color-emerald] transition-colors text-sm py-2"
                >
                  <ChevronRight className="w-4 h-4 text-[--color-emerald]" />
                  {t(link.labelKey)}
                </Link>
              ))}
            </div>
          </motion.div>
        </article>
      </Section>

      {/* Trust Strip */}
      <Section dark>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-14 py-4"
        >
          {[
            {
              icon: ShieldCheck,
              label: t("trust.uscg"),
              sub: t("trust.uscg.sub"),
            },
            {
              icon: Anchor,
              label: t("trust.captains"),
              sub: t("trust.captains.sub"),
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 text-center sm:text-left"
            >
              <item.icon className="w-8 h-8 text-[--color-emerald]" />
              <div>
                <p className="text-white font-semibold text-sm">{item.label}</p>
                <p className="text-white/40 text-xs">{item.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </Section>

      {/* Final CTA */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center py-8"
        >
          <Anchor className="w-10 h-10 text-[--color-emerald] mx-auto mb-4" />
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-white mb-4">
            {t("cg.cta.title")}
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
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
      </Section>
    </main>
  );
}
