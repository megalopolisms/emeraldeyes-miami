import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos | Emerald Eyes Miami",
  description:
    "Fondée à North Miami. Expériences de yacht premium depuis le détroit de Floride. Luxe sans prétention, chaque détail soigné.",
  keywords: [
    "à propos Emerald Eyes Miami",
    "entreprise yachts Miami",
    "location bateau North Miami"
  ],
  alternates: {
    canonical: "/fr/about",
    languages: { en: "/about", es: "/es/about", pt: "/pt/about", de: "/de/about", fr: "/fr/about", zh: "/zh/about", ja: "/ja/about" },
  },
  openGraph: {
    title: "À Propos | Emerald Eyes Miami",
    description:
      "Fondée à North Miami. Expériences de yacht premium depuis le détroit de Floride. Luxe sans prétention, chaque détail soigné.",
    url: "/fr/about",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "À Propos | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "À Propos | Emerald Eyes Miami",
    description:
      "Fondée à North Miami. Expériences de yacht premium depuis le détroit de Floride. Luxe sans prétention, chaque détail soigné.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/about/page";
