import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unsere Flotte | Emerald Eyes Miami",
  description:
    "Intime Yachten, Partyboote und Luxuscharter in North Miami. Sagen Sie uns Ihre Gruppe und Ihren Stil — wir finden die perfekte Yacht.",
  keywords: [
    "Yachtflotte Miami",
    "Yachtgrößen Miami",
    "Partyboote North Miami"
  ],
  alternates: {
    canonical: "/de/fleet",
    languages: { en: "/fleet", es: "/es/fleet", pt: "/pt/fleet", de: "/de/fleet", fr: "/fr/fleet", zh: "/zh/fleet", ja: "/ja/fleet" },
  },
  openGraph: {
    title: "Unsere Flotte | Emerald Eyes Miami",
    description:
      "Intime Yachten, Partyboote und Luxuscharter in North Miami. Sagen Sie uns Ihre Gruppe und Ihren Stil — wir finden die perfekte Yacht.",
    url: "/de/fleet",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Unsere Flotte | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unsere Flotte | Emerald Eyes Miami",
    description:
      "Intime Yachten, Partyboote und Luxuscharter in North Miami. Sagen Sie uns Ihre Gruppe und Ihren Stil — wir finden die perfekte Yacht.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/fleet/page";
