import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiências | Emerald Eyes Miami",
  description:
    "Cruzeiros ao pôr do sol, festas privadas, charters corporativos, despedidas de solteira, pedidos de casamento e aventuras no Haulover Sandbar. Escolha sua experiência perfeita de iate em Miami.",
  keywords: [
    "experiências iate Miami",
    "pacotes charter barco Miami",
    "tours privados iate Miami"
  ],
  alternates: {
    canonical: "/pt/experiences",
    languages: { en: "/experiences", es: "/es/experiences", pt: "/pt/experiences", de: "/de/experiences", fr: "/fr/experiences", zh: "/zh/experiences", ja: "/ja/experiences" },
  },
  openGraph: {
    title: "Experiências | Emerald Eyes Miami",
    description:
      "Cruzeiros ao pôr do sol, festas privadas, charters corporativos, despedidas de solteira, pedidos de casamento e aventuras no Haulover Sandbar. Escolha sua experiência perfeita de iate em Miami.",
    url: "/pt/experiences",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Experiências | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiências | Emerald Eyes Miami",
    description:
      "Cruzeiros ao pôr do sol, festas privadas, charters corporativos, despedidas de solteira, pedidos de casamento e aventuras no Haulover Sandbar. Escolha sua experiência perfeita de iate em Miami.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/page";
