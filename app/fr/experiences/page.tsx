import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expériences | Emerald Eyes Miami",
  description:
    "Croisières au coucher du soleil, fêtes privées, charters d'entreprise, enterrements de vie de jeune fille, demandes en mariage et aventures au Haulover Sandbar. Choisissez votre expérience de yacht parfaite à Miami.",
  keywords: [
    "expériences yacht Miami",
    "forfaits charter bateau Miami",
    "tours privés yacht Miami"
  ],
  alternates: {
    canonical: "/fr/experiences",
    languages: { en: "/experiences", es: "/es/experiences", pt: "/pt/experiences", de: "/de/experiences", fr: "/fr/experiences", zh: "/zh/experiences", ja: "/ja/experiences" },
  },
  openGraph: {
    title: "Expériences | Emerald Eyes Miami",
    description:
      "Croisières au coucher du soleil, fêtes privées, charters d'entreprise, enterrements de vie de jeune fille, demandes en mariage et aventures au Haulover Sandbar. Choisissez votre expérience de yacht parfaite à Miami.",
    url: "/fr/experiences",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Expériences | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expériences | Emerald Eyes Miami",
    description:
      "Croisières au coucher du soleil, fêtes privées, charters d'entreprise, enterrements de vie de jeune fille, demandes en mariage et aventures au Haulover Sandbar. Choisissez votre expérience de yacht parfaite à Miami.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/page";
