import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Despedida de Solteira em Iate Miami: Guia Completo | Emerald Eyes Miami",
  description:
    "Planeje a despedida de solteira perfeita em um iate em Miami.",
  keywords: [
    "despedida solteira iate Miami",
    "bachelorette party barco Miami"
  ],
  alternates: {
    canonical: "/pt/blog/bachelorette-party-yacht-miami",
    languages: { en: "/blog/bachelorette-party-yacht-miami", es: "/es/blog/bachelorette-party-yacht-miami", pt: "/pt/blog/bachelorette-party-yacht-miami", de: "/de/blog/bachelorette-party-yacht-miami", fr: "/fr/blog/bachelorette-party-yacht-miami", zh: "/zh/blog/bachelorette-party-yacht-miami", ja: "/ja/blog/bachelorette-party-yacht-miami" },
  },
  openGraph: {
    title:
      "Despedida de Solteira em Iate Miami: Guia Completo | Emerald Eyes Miami",
    description:
      "Planeje a despedida de solteira perfeita em um iate em Miami.",
    url: "/pt/blog/bachelorette-party-yacht-miami",
    type: "article",
    locale: "pt_BR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Despedida de Solteira em Iate Miami: Guia Completo | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Despedida de Solteira em Iate Miami: Guia Completo | Emerald Eyes Miami",
    description:
      "Planeje a despedida de solteira perfeita em um iate em Miami.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/blog/bachelorette-party-yacht-miami/page";
