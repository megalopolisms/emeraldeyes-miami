import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despedida de Solteira em Iate Miami | Emerald Eyes Miami",
  description:
    "O cenário perfeito para a despedida. Champanhe, DJ, decorações e fotos de Instagram na água. A noiva merece o melhor. A partir de $3.500.",
  keywords: [
    "despedida solteira iate Miami",
    "bachelorette barco Miami"
  ],
  alternates: {
    canonical: "/pt/experiences/bachelorette-yacht-miami",
    languages: { en: "/experiences/bachelorette-yacht-miami", es: "/es/experiences/bachelorette-yacht-miami", pt: "/pt/experiences/bachelorette-yacht-miami", de: "/de/experiences/bachelorette-yacht-miami", fr: "/fr/experiences/bachelorette-yacht-miami", zh: "/zh/experiences/bachelorette-yacht-miami", ja: "/ja/experiences/bachelorette-yacht-miami" },
  },
  openGraph: {
    title: "Despedida de Solteira em Iate Miami | Emerald Eyes Miami",
    description:
      "Champanhe, DJ, decorações e o cenário perfeito para a despedida de solteira na água.",
    url: "/pt/experiences/bachelorette-yacht-miami",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Despedida de solteira em iate — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Despedida de Solteira em Iate Miami | Emerald Eyes Miami",
    description:
      "Champanhe, DJ, decorações e o cenário perfeito para a despedida de solteira na água.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/bachelorette-yacht-miami/page";
