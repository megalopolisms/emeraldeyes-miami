// =============================================================================
// EMERALD EYES MIAMI — Gallery Page (/gallery)
// =============================================================================
// Server component. Masonry-style grid of placeholder cards with gradient
// backgrounds and overlay text. Real photos coming soon.
// =============================================================================

import type { Metadata } from "next";
import Section from "@/components/ui/Section";

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "Gallery | Emerald Eyes Miami",
  description:
    "See what's waiting for you on the water. Sunset cruises, champagne setups, sandbar vibes, and celebrations on private yachts in Miami.",
  keywords: [
    "Miami yacht gallery",
    "yacht interior photos Miami",
    "sunset cruise pictures",
    "yacht party images",
    "boat rental gallery",
  ],
  alternates: {
    canonical: "/gallery",
    languages: {
      en: "/gallery",
      es: "/es/gallery",
      pt: "/pt/gallery",
      de: "/de/gallery",
      fr: "/fr/gallery",
      zh: "/zh/gallery",
      ja: "/ja/gallery",
    },
  },
  openGraph: {
    title: "Photo Gallery | Emerald Eyes Miami",
    description:
      "Golden hour, champagne, ocean views, and Miami's skyline. See what your charter will look like.",
    url: "/gallery",
    type: "website",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Emerald Eyes Miami yacht charter gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | Emerald Eyes Miami",
    description:
      "Golden hour, champagne, ocean views, and Miami's skyline. See what your charter will look like.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

// ---------------------------------------------------------------------------
// Gallery Placeholder Items
// ---------------------------------------------------------------------------
const GALLERY_ITEMS = [
  {
    label: "Golden Hour",
    gradient: "from-amber-600 to-[--color-emerald]",
    tall: true,
  },
  {
    label: "Champagne Setup",
    gradient: "from-[--color-navy-light] to-[--color-gold]",
    tall: false,
  },
  {
    label: "Sandbar Vibes",
    gradient: "from-[--color-emerald] to-cyan-400",
    tall: false,
  },
  {
    label: "Sunset Silhouette",
    gradient: "from-[--color-navy-light] to-amber-600",
    tall: true,
  },
  {
    label: "Celebration",
    gradient: "from-fuchsia-600 to-rose-400",
    tall: false,
  },
  {
    label: "Dockside Arrival",
    gradient: "from-[--color-navy-light] to-[--color-emerald]",
    tall: false,
  },
  {
    label: "Ocean Breeze",
    gradient: "from-cyan-600 to-[--color-emerald]",
    tall: true,
  },
  {
    label: "Star Island Pass",
    gradient: "from-[--color-navy-light] to-[--color-gold]",
    tall: false,
  },
  {
    label: "Night Cruise",
    gradient: "from-indigo-900 to-purple-600",
    tall: false,
  },
  {
    label: "Bachelorette Vibes",
    gradient: "from-pink-500 to-amber-400",
    tall: true,
  },
  {
    label: "Proposal Moment",
    gradient: "from-rose-500 to-[--color-gold]",
    tall: false,
  },
  {
    label: "Skyline at Dusk",
    gradient: "from-[--color-navy-light] to-amber-500",
    tall: false,
  },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default function GalleryPage() {
  return (
    <main itemScope itemType="http://schema.org/ImageGallery">
      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-[40vh] px-6 py-28 bg-gradient-to-b from-[--color-navy] to-[--color-navy-light]">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl text-white mb-4">
            Gallery
          </h1>
          <p className="text-xl text-white/70">
            See what&apos;s waiting for you on the water.
          </p>
        </div>
      </section>

      {/* Masonry Grid */}
      <Section>
        <p className="text-center text-white/50 text-sm mb-10">
          Real photos coming soon. This is what your day will look like.
        </p>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.label}
              className={`
                break-inside-avoid rounded-xl overflow-hidden
                bg-gradient-to-br ${item.gradient}
                ${item.tall ? "h-80" : "h-52"}
                flex items-end p-5
                relative group
              `}
            >
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              <span className="relative text-white font-semibold text-lg drop-shadow-lg">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Instagram CTA */}
      <Section dark>
        <div className="text-center py-8">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white mb-4">
            Follow the journey
          </h2>
          <p className="text-white/60 text-lg mb-6">
            Follow us{" "}
            <span className="text-[--color-emerald] font-semibold">
              @EmeraldEyesMiami
            </span>{" "}
            for the latest.
          </p>
          <a
            href="https://instagram.com/EmeraldEyesMiami"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[--color-emerald] text-[--color-emerald] hover:bg-[--color-emerald-dim] transition-all"
          >
            Follow on Instagram
          </a>
        </div>
      </Section>
    </main>
  );
}
