import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Haulover Sandbar: Guide Complet Charter Yacht | Emerald Eyes Miami",
  description:
    "Tout ce que vous devez savoir pour visiter le Haulover Sandbar en charter de yacht.",
  keywords: [
    "Haulover Sandbar charter yacht",
    "banc sable Miami"
  ],
  alternates: {
    canonical: "/fr/blog/haulover-sandbar-yacht-charter-miami",
    languages: { en: "/blog/haulover-sandbar-yacht-charter-miami", es: "/es/blog/haulover-sandbar-yacht-charter-miami", pt: "/pt/blog/haulover-sandbar-yacht-charter-miami", de: "/de/blog/haulover-sandbar-yacht-charter-miami", fr: "/fr/blog/haulover-sandbar-yacht-charter-miami", zh: "/zh/blog/haulover-sandbar-yacht-charter-miami", ja: "/ja/blog/haulover-sandbar-yacht-charter-miami" },
  },
  openGraph: {
    title:
      "Haulover Sandbar: Guide Complet Charter Yacht | Emerald Eyes Miami",
    description:
      "Tout ce que vous devez savoir pour visiter le Haulover Sandbar en charter de yacht.",
    url: "/fr/blog/haulover-sandbar-yacht-charter-miami",
    type: "article",
    locale: "fr_FR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Haulover Sandbar: Guide Complet Charter Yacht | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Haulover Sandbar: Guide Complet Charter Yacht | Emerald Eyes Miami",
    description:
      "Tout ce que vous devez savoir pour visiter le Haulover Sandbar en charter de yacht.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/blog/haulover-sandbar-yacht-charter-miami/page";
