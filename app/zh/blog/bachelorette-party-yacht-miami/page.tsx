import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "迈阿密游艇单身派对：完整指南 | Emerald Eyes Miami",
  description:
    "在迈阿密游艇上规划完美的单身派对。",
  keywords: [
    "迈阿密游艇单身派对",
    "迈阿密游船单身派对"
  ],
  alternates: {
    canonical: "/zh/blog/bachelorette-party-yacht-miami",
    languages: { en: "/blog/bachelorette-party-yacht-miami", es: "/es/blog/bachelorette-party-yacht-miami", pt: "/pt/blog/bachelorette-party-yacht-miami", de: "/de/blog/bachelorette-party-yacht-miami", fr: "/fr/blog/bachelorette-party-yacht-miami", zh: "/zh/blog/bachelorette-party-yacht-miami", ja: "/ja/blog/bachelorette-party-yacht-miami" },
  },
  openGraph: {
    title:
      "迈阿密游艇单身派对：完整指南 | Emerald Eyes Miami",
    description:
      "在迈阿密游艇上规划完美的单身派对。",
    url: "/zh/blog/bachelorette-party-yacht-miami",
    type: "article",
    locale: "zh_CN",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "迈阿密游艇单身派对：完整指南 | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "迈阿密游艇单身派对：完整指南 | Emerald Eyes Miami",
    description:
      "在迈阿密游艇上规划完美的单身派对。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/blog/bachelorette-party-yacht-miami/page";
