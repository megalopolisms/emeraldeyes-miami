// =============================================================================
// EMERALD EYES MIAMI — Blog Listing Page (/blog)
// =============================================================================
// Server component. Lists all blog articles with cards linking to each.
// =============================================================================

import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "Blog | Emerald Eyes Miami",
  description:
    "Guides, tips, and insider knowledge about yacht charters in Miami. Safety, regulations, destinations, and how to plan the perfect day on the water.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Emerald Eyes Miami",
    description:
      "Yacht charter guides, safety tips, and Miami boating insights from the Emerald Eyes team.",
    url: "/blog",
  },
};

// ---------------------------------------------------------------------------
// Blog Posts Data
// ---------------------------------------------------------------------------
const POSTS = [
  {
    slug: "coast-guard-inspection-bareboat-charter",
    title:
      "What Happens During a Coast Guard Inspection on a Bareboat Charter?",
    excerpt:
      "A complete guide to USCG boardings on bareboat yacht charters in Miami. What they check, what paperwork you need, safety equipment requirements, and how to pass every time.",
    date: "March 13, 2026",
    readTime: "10 min read",
    category: "Safety & Regulations",
  },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default function BlogPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-[40vh] px-6 py-28 bg-gradient-to-b from-[--color-navy] to-[--color-navy-light]">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl text-white mb-4">
            Blog
          </h1>
          <p className="text-white/60 text-lg">
            Guides, tips, and insider knowledge about chartering in Miami.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <Section>
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-[--color-navy-light] rounded-xl border border-white/10 hover:border-[--color-emerald]/30 transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[--color-emerald] bg-[--color-emerald]/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-white/40">
                    {post.date} &middot; {post.readTime}
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-white group-hover:text-[--color-emerald] transition-colors mb-4">
                  {post.title}
                </h2>
                <p className="text-white/60 text-base leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-6 text-[--color-emerald] text-sm font-semibold group-hover:underline underline-offset-4">
                  Read article &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
