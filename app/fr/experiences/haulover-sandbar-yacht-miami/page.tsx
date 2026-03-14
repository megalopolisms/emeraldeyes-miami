import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haulover Sandbar en Yacht Miami | Emerald Eyes Miami",
  description:
    "La fête sur le banc de sable la plus célèbre de Miami. Mouillage au Haulover Sandbar, baignade dans les eaux turquoise et plaisir avec votre groupe. À partir de 2 500 $.",
  keywords: [
    "Haulover Sandbar yacht Miami",
    "banc de sable Miami"
  ],
  alternates: {
    canonical: "/fr/experiences/haulover-sandbar-yacht-miami",
    languages: { en: "/experiences/haulover-sandbar-yacht-miami", es: "/es/experiences/haulover-sandbar-yacht-miami", pt: "/pt/experiences/haulover-sandbar-yacht-miami", de: "/de/experiences/haulover-sandbar-yacht-miami", fr: "/fr/experiences/haulover-sandbar-yacht-miami", zh: "/zh/experiences/haulover-sandbar-yacht-miami", ja: "/ja/experiences/haulover-sandbar-yacht-miami" },
  },
  openGraph: {
    title: "Haulover Sandbar en Yacht Miami | Emerald Eyes Miami",
    description:
      "La fête sur le banc de sable la plus célèbre de Miami. Mouillage, baignade et plaisir.",
    url: "/fr/experiences/haulover-sandbar-yacht-miami",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Haulover Sandbar en yacht — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haulover Sandbar en Yacht Miami | Emerald Eyes Miami",
    description:
      "La fête sur le banc de sable la plus célèbre de Miami. Mouillage, baignade et plaisir.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/haulover-sandbar-yacht-miami/page";
