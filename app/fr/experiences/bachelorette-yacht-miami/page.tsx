import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterrement de Vie de Jeune Fille Yacht Miami | Emerald Eyes Miami",
  description:
    "Le cadre parfait pour l'enterrement de vie de jeune fille. Champagne, DJ, décorations et photos Instagram sur l'eau. La mariée mérite le meilleur. À partir de 3 500 $.",
  keywords: [
    "enterrement vie jeune fille yacht Miami",
    "bachelorette bateau Miami"
  ],
  alternates: {
    canonical: "/fr/experiences/bachelorette-yacht-miami",
    languages: { en: "/experiences/bachelorette-yacht-miami", es: "/es/experiences/bachelorette-yacht-miami", pt: "/pt/experiences/bachelorette-yacht-miami", de: "/de/experiences/bachelorette-yacht-miami", fr: "/fr/experiences/bachelorette-yacht-miami", zh: "/zh/experiences/bachelorette-yacht-miami", ja: "/ja/experiences/bachelorette-yacht-miami" },
  },
  openGraph: {
    title: "Enterrement de Vie de Jeune Fille Yacht Miami | Emerald Eyes Miami",
    description:
      "Champagne, DJ, décorations et le cadre parfait pour l'EVJF sur l'eau.",
    url: "/fr/experiences/bachelorette-yacht-miami",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Enterrement de vie de jeune fille yacht — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterrement de Vie de Jeune Fille Yacht Miami | Emerald Eyes Miami",
    description:
      "Champagne, DJ, décorations et le cadre parfait pour l'EVJF sur l'eau.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/bachelorette-yacht-miami/page";
