import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós | Emerald Eyes Miami",
  description:
    "Fundada em North Miami. Experiências premium de iate curadas no Estreito da Flórida. Luxo sem pretensão, cada detalhe cuidado.",
  keywords: [
    "sobre Emerald Eyes Miami",
    "empresa de iates Miami",
    "aluguel barco North Miami"
  ],
  alternates: {
    canonical: "/pt/about",
    languages: { en: "/about", es: "/es/about", pt: "/pt/about", de: "/de/about", fr: "/fr/about", zh: "/zh/about", ja: "/ja/about" },
  },
  openGraph: {
    title: "Sobre Nós | Emerald Eyes Miami",
    description:
      "Fundada em North Miami. Experiências premium de iate curadas no Estreito da Flórida. Luxo sem pretensão, cada detalhe cuidado.",
    url: "/pt/about",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Sobre Nós | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Nós | Emerald Eyes Miami",
    description:
      "Fundada em North Miami. Experiências premium de iate curadas no Estreito da Flórida. Luxo sem pretensão, cada detalhe cuidado.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/about/page";
