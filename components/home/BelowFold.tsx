// =============================================================================
// EMERALD EYES MIAMI — Below-Fold Homepage Content (i18n)
// =============================================================================

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MessageCircle,
  CheckCircle,
  Anchor,
  ShieldCheck,
  MapPin,
  Award,
} from "lucide-react";
import { EXPERIENCES, asset } from "@/lib/constants";
import Section from "@/components/ui/Section";
import { useLanguage } from "@/lib/language-context";

// ---------------------------------------------------------------------------
// Fade-in-on-scroll variant (reused across sections)
// ---------------------------------------------------------------------------
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

// ---------------------------------------------------------------------------
// Section 1: Experiences
// ---------------------------------------------------------------------------
const experienceEmojis: Record<string, string> = {
  "sunset-cruise-miami": "🌅",
  "private-party-yacht-miami": "🎉",
  "corporate-yacht-charter-miami": "🏢",
  "bachelorette-yacht-miami": "🥂",
  "proposal-yacht-miami": "💍",
  "haulover-sandbar-yacht-miami": "🏝️",
  "live-sax-yacht-miami": "🎷",
};

function ExperiencesSection() {
  const { t } = useLanguage();
  return (
    <Section id="experiences">
      <div className="mb-14 text-center">
        <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
        <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white md:text-5xl">
          {t("exp.title")}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-white/45 text-sm leading-relaxed">
          {t("exp.subtitle")}
        </p>
      </div>

      <div className="mx-auto max-w-3xl divide-y divide-white/5">
        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={exp.slug}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
          >
            <Link
              href={`/experiences/${exp.slug}`}
              className="group flex items-center gap-5 py-5 px-4 -mx-4 rounded-xl transition-all duration-300 hover:bg-white/[0.03]"
            >
              <span className="flex-shrink-0 text-3xl w-12 text-center transition-transform duration-300 group-hover:scale-110">
                {experienceEmojis[exp.slug] ?? "⚓"}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[--color-emerald]">
                  {exp.title}
                </h3>
                <p className="mt-0.5 text-sm text-white/40">{exp.tagline}</p>
              </div>
              <span className="flex-shrink-0 text-white/20 transition-all duration-300 group-hover:text-[--color-emerald] group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------------------
// Section 1.5: Trust & Authority
// ---------------------------------------------------------------------------
function TrustSection() {
  const { t } = useLanguage();
  return (
    <Section
      className="py-10 border-y border-white/5 bg-[--color-navy-light]/50"
      dark
    >
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-[--color-emerald]" />
          <div className="text-left">
            <h4 className="text-white font-medium">{t("trust.uscg")}</h4>
            <p className="text-xs text-white/60">{t("trust.uscg.sub")}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Award className="w-8 h-8 text-[--color-emerald]" />
          <div className="text-left">
            <h4 className="text-white font-medium">{t("trust.captains")}</h4>
            <p className="text-xs text-white/60">{t("trust.captains.sub")}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-8 h-8 text-[--color-emerald]" />
          <div className="text-left">
            <h4 className="text-white font-medium">{t("trust.location")}</h4>
            <p className="text-xs text-white/60">{t("trust.location.sub")}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------------------
// Section 1.75: Meet Sasha
// ---------------------------------------------------------------------------
function SashaSection() {
  const { t } = useLanguage();
  return (
    <Section id="meet-sasha">
      <div className="mx-auto max-w-5xl grid items-center gap-12 md:grid-cols-[1fr_1.3fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm"
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
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold text-white md:text-5xl">
            {t("sasha.title")}{" "}
            <span className="text-[--color-emerald]">{t("sasha.name")}</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/75">
            {t("sasha.p1")}
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            {t("sasha.p2.pre")}{" "}
            <strong className="text-white">{t("sasha.p2.jetski")}</strong>
            {t("sasha.p2.mid")}{" "}
            <strong className="text-white">{t("sasha.p2.hundred")}</strong>{" "}
            {t("sasha.p2.post")}{" "}
            <em className="text-[--color-emerald]/90">
              {t("sasha.p2.living")}
            </em>{" "}
            {t("sasha.p2.end")}
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-white/90 font-medium italic font-[family-name:var(--font-heading)]">
            &ldquo;{t("sasha.quote")}&rdquo;
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-xs">
            <span className="rounded-full border border-[--color-emerald]/30 bg-[--color-emerald]/10 px-4 py-1.5 text-[--color-emerald] font-medium">
              🎓 {t("sasha.badge1")}
            </span>
            <span className="rounded-full border border-[--color-emerald]/30 bg-[--color-emerald]/10 px-4 py-1.5 text-[--color-emerald] font-medium">
              🚢 {t("sasha.badge2")}
            </span>
            <span className="rounded-full border border-[--color-emerald]/30 bg-[--color-emerald]/10 px-4 py-1.5 text-[--color-emerald] font-medium">
              🌊 {t("sasha.badge3")}
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------------------
// Section 1.8: Live Sax Experience
// ---------------------------------------------------------------------------
function LiveSaxSection() {
  const { t } = useLanguage();
  return (
    <Section id="live-sax" dark>
      <div className="mx-auto max-w-5xl grid items-center gap-12 md:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-4 h-1 w-12 rounded-full bg-[--color-gold]" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-emerald]">
            {t("sax.label")}
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold text-white md:text-5xl">
            {t("sax.title.pre")}
            <span className="text-[--color-gold]">
              {t("sax.title.highlight")}
            </span>
            {t("sax.title.post")}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/75">
            {t("sax.p1")}
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            {t("sax.p2")}
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-white/90 font-medium italic font-[family-name:var(--font-heading)]">
            &ldquo;{t("sax.quote")}&rdquo;
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-xs">
            <span className="rounded-full border border-[--color-gold]/30 bg-[--color-gold]/10 px-4 py-1.5 text-[--color-gold] font-medium">
              🎷 {t("sax.badge1")}
            </span>
            <span className="rounded-full border border-[--color-gold]/30 bg-[--color-gold]/10 px-4 py-1.5 text-[--color-gold] font-medium">
              🌅 {t("sax.badge2")}
            </span>
            <span className="rounded-full border border-[--color-gold]/30 bg-[--color-gold]/10 px-4 py-1.5 text-[--color-gold] font-medium">
              🎵 {t("sax.badge3")}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="overflow-hidden rounded-2xl border-2 border-[--color-gold]/25 shadow-xl shadow-[--color-gold]/10">
            <Image
              src={asset("/images/sax.jpg")}
              alt="Live saxophone player performing on a yacht at sunset — Emerald Eyes Miami"
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
  );
}

// ---------------------------------------------------------------------------
// Section 1.9: Private Sushi Chef Experience
// ---------------------------------------------------------------------------
function SushiSection() {
  const { t } = useLanguage();
  return (
    <Section id="sushi-chef">
      <div className="mx-auto max-w-5xl grid items-center gap-12 md:grid-cols-[1fr_1.3fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="overflow-hidden rounded-2xl border-2 border-[--color-emerald]/25 shadow-xl shadow-[--color-emerald]/10">
            <Image
              src={asset("/images/sushi.jpg")}
              alt="Private sushi chef preparing fresh rolls on a yacht — Emerald Eyes Miami"
              width={800}
              height={1000}
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
            {t("sushi.label")}
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold text-white md:text-5xl">
            {t("sushi.title.pre")}
            <span className="text-[--color-emerald]">
              {t("sushi.title.highlight")}
            </span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/75">
            {t("sushi.p1")}
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            {t("sushi.p2")}
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-white/90 font-medium italic font-[family-name:var(--font-heading)]">
            &ldquo;{t("sushi.quote")}&rdquo;
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-xs">
            <span className="rounded-full border border-[--color-emerald]/30 bg-[--color-emerald]/10 px-4 py-1.5 text-[--color-emerald] font-medium">
              🍣 {t("sushi.badge1")}
            </span>
            <span className="rounded-full border border-[--color-emerald]/30 bg-[--color-emerald]/10 px-4 py-1.5 text-[--color-emerald] font-medium">
              🔪 {t("sushi.badge2")}
            </span>
            <span className="rounded-full border border-[--color-emerald]/30 bg-[--color-emerald]/10 px-4 py-1.5 text-[--color-emerald] font-medium">
              🐟 {t("sushi.badge3")}
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------------------
// Section 2: Why Emerald Eyes
// ---------------------------------------------------------------------------
function WhySection() {
  const { t } = useLanguage();
  const differentiators = [
    { title: t("why.1.title"), text: t("why.1.text") },
    { title: t("why.2.title"), text: t("why.2.text") },
    { title: t("why.3.title"), text: t("why.3.text") },
  ];

  return (
    <Section id="why" dark>
      <div className="mb-12 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white md:text-5xl">
          {t("why.title")}
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {differentiators.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="rounded-xl border border-white/5 bg-[--color-navy]/60 p-8 text-center"
          >
            <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-[--color-emerald]" />
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/50">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------------------
// Section 3: How It Works
// ---------------------------------------------------------------------------
function HowItWorksSection() {
  const { t } = useLanguage();
  const steps = [
    { icon: MessageCircle, title: t("how.1.title"), text: t("how.1.text") },
    { icon: CheckCircle, title: t("how.2.title"), text: t("how.2.text") },
    { icon: Anchor, title: t("how.3.title"), text: t("how.3.text") },
  ];

  return (
    <Section id="how-it-works">
      <div className="mb-12 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white md:text-5xl">
          {t("how.title")}
        </h2>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[--color-emerald]/30 bg-[--color-emerald]/10">
                  <Icon className="h-7 w-7 text-[--color-emerald]" />
                </div>
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[--color-emerald] text-xs font-bold text-[--color-navy]">
                  {i + 1}
                </span>
              </div>

              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/50">
                {step.text}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="mx-auto mt-16 h-px w-24 bg-[--color-emerald]/40" />
    </Section>
  );
}

// ---------------------------------------------------------------------------
// Main Export
// ---------------------------------------------------------------------------
export default function BelowFold() {
  return (
    <>
      <SashaSection />
      <LiveSaxSection />
      <SushiSection />
      <ExperiencesSection />
      <TrustSection />
      <WhySection />
      <HowItWorksSection />
    </>
  );
}
