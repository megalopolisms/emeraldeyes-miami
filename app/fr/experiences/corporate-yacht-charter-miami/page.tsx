import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charter Yacht d'Entreprise Miami | Emerald Eyes Miami",
  description:
    "Impressionnez sans dire un mot. Événements exécutifs sur l'eau, divertissement clients et réunions avec la meilleure vue. Nous gérons tout. À partir de 5 000 $.",
  keywords: [
    "charter yacht entreprise Miami",
    "événement professionnel bateau Miami"
  ],
  alternates: {
    canonical: "/fr/experiences/corporate-yacht-charter-miami",
    languages: { en: "/experiences/corporate-yacht-charter-miami", es: "/es/experiences/corporate-yacht-charter-miami", pt: "/pt/experiences/corporate-yacht-charter-miami", de: "/de/experiences/corporate-yacht-charter-miami", fr: "/fr/experiences/corporate-yacht-charter-miami", zh: "/zh/experiences/corporate-yacht-charter-miami", ja: "/ja/experiences/corporate-yacht-charter-miami" },
  },
  openGraph: {
    title: "Charter Yacht d'Entreprise Miami | Emerald Eyes Miami",
    description:
      "Événements d'équipe, divertissement clients et réunions exécutives sur l'eau à Miami.",
    url: "/fr/experiences/corporate-yacht-charter-miami",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Charter yacht d'entreprise — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charter Yacht d'Entreprise Miami | Emerald Eyes Miami",
    description:
      "Événements d'équipe, divertissement clients et réunions exécutives sur l'eau à Miami.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/corporate-yacht-charter-miami/page";
