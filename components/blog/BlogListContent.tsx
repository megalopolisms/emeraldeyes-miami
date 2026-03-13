// =============================================================================
// EMERALD EYES MIAMI — Blog Listing Content (Client Component)
// =============================================================================
// Animated blog listing with i18n support. Imported by app/blog/page.tsx.
// =============================================================================

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, ShieldCheck, Anchor } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/lib/language-context";

// ---------------------------------------------------------------------------
// Animation Variant
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
// Posts Data
// ---------------------------------------------------------------------------
const POSTS = [
  {
    slug: "coast-guard-inspection-bareboat-charter",
    titleKey: "blog.cg.title",
    excerptKey: "blog.cg.excerpt",
    date: "March 13, 2026",
    readTimeKey: "blog.cg.readTime",
    categoryKey: "blog.cat.safety",
    icon: ShieldCheck,
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function BlogListContent() {
  const { t } = useLanguage();

  return (
    <main>
      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-[45vh] px-6 py-28 bg-gradient-to-b from-[--color-navy] to-[--color-navy-light]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[--color-emerald]" />
          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl text-white mb-4">
            {t("blog.title")}
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            {t("blog.subtitle")}
          </p>
        </motion.div>
      </section>

      {/* Posts Grid */}
      <Section>
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
          {POSTS.map((post, i) => {
            const Icon = post.icon;
            return (
              <motion.div
                key={post.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-[--color-navy-light] rounded-2xl border border-white/10 hover:border-[--color-emerald]/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[--color-emerald] bg-[--color-emerald]/10 px-3 py-1.5 rounded-full">
                        <Icon className="w-3.5 h-3.5" />
                        {t(post.categoryKey)}
                      </span>
                      <span className="text-xs text-white/40">
                        {post.date} &middot; {t(post.readTimeKey)}
                      </span>
                    </div>
                    <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-white group-hover:text-[--color-emerald] transition-colors mb-4 leading-snug">
                      {t(post.titleKey)}
                    </h2>
                    <p className="text-white/60 text-base leading-relaxed mb-6">
                      {t(post.excerptKey)}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[--color-emerald] text-sm font-semibold group-hover:underline underline-offset-4">
                      <BookOpen className="w-4 h-4" />
                      {t("blog.readArticle")}
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* CTA Strip */}
      <Section dark>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center py-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Anchor className="w-6 h-6 text-[--color-emerald]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white">
              {t("blog.ctaTitle")}
            </h2>
          </div>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            {t("blog.ctaText")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/book" size="lg">
              {t("blog.ctaBook")}
            </Button>
            <Button href="/experiences" variant="secondary" size="lg">
              {t("blog.ctaExperiences")}
            </Button>
          </div>
        </motion.div>
      </Section>
    </main>
  );
}
