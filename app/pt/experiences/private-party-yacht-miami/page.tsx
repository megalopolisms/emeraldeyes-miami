import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Festa Privada em Iate Miami | Emerald Eyes Miami",
  description:
    "Seu barco. Suas regras. Sua playlist. Aniversários, celebrações ou simplesmente porque sim. Sistema de som completo e serviço de garrafas. A partir de $3.500.",
  keywords: [
    "festa privada iate Miami",
    "festa em barco Miami"
  ],
  alternates: {
    canonical: "/pt/experiences/private-party-yacht-miami",
    languages: { en: "/experiences/private-party-yacht-miami", es: "/es/experiences/private-party-yacht-miami", pt: "/pt/experiences/private-party-yacht-miami", de: "/de/experiences/private-party-yacht-miami", fr: "/fr/experiences/private-party-yacht-miami", zh: "/zh/experiences/private-party-yacht-miami", ja: "/ja/experiences/private-party-yacht-miami" },
  },
  openGraph: {
    title: "Festa Privada em Iate Miami | Emerald Eyes Miami",
    description:
      "Celebrações na água. Sistema de som, serviço de garrafas e tripulação que prepara a atmosfera.",
    url: "/pt/experiences/private-party-yacht-miami",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/party.jpg",
        width: 784,
        height: 1168,
        alt: "Festa privada em iate — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Festa Privada em Iate Miami | Emerald Eyes Miami",
    description:
      "Celebrações na água. Sistema de som, serviço de garrafas e tripulação que prepara a atmosfera.",
    images: ["/images/party.jpg"],
  },
};

export { default } from "@/app/experiences/private-party-yacht-miami/page";
