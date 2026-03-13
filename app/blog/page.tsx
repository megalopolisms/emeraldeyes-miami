// =============================================================================
// EMERALD EYES MIAMI — Blog Listing Page (/blog)
// =============================================================================
// Server component for SEO metadata. Client content in BlogListContent.
// =============================================================================

import type { Metadata } from "next";
import Script from "next/script";
import BlogListContent from "@/components/blog/BlogListContent";

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "Blog | Emerald Eyes Miami — Yacht Charter Guides & Tips",
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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Emerald Eyes Miami",
    description:
      "Yacht charter guides, safety tips, and Miami boating insights from the Emerald Eyes team.",
  },
};

// ---------------------------------------------------------------------------
// JSON-LD Schemas
// ---------------------------------------------------------------------------
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://emeraldeyesmiami.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://emeraldeyesmiami.com/blog",
    },
  ],
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default function BlogPage() {
  return (
    <>
      <Script
        id="blog-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <BlogListContent />
    </>
  );
}
