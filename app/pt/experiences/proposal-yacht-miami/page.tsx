import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pedido de Casamento em Iate Miami | Emerald Eyes Miami",
  description:
    "O sim mais perfeito das suas vidas. Configurações de pedido no oceano com decorações, fotógrafo e uma equipe que guarda o segredo. A partir de $2.500.",
  keywords: [
    "pedido casamento iate Miami",
    "proposta romântica iate Miami"
  ],
  alternates: {
    canonical: "/pt/experiences/proposal-yacht-miami",
    languages: { en: "/experiences/proposal-yacht-miami", es: "/es/experiences/proposal-yacht-miami", pt: "/pt/experiences/proposal-yacht-miami", de: "/de/experiences/proposal-yacht-miami", fr: "/fr/experiences/proposal-yacht-miami", zh: "/zh/experiences/proposal-yacht-miami", ja: "/ja/experiences/proposal-yacht-miami" },
  },
  openGraph: {
    title: "Pedido de Casamento em Iate Miami | Emerald Eyes Miami",
    description:
      "Pedidos de casamento no oceano. Decorações, fotógrafo e equipe que guarda o segredo.",
    url: "/pt/experiences/proposal-yacht-miami",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Pedido de casamento em iate — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedido de Casamento em Iate Miami | Emerald Eyes Miami",
    description:
      "Pedidos de casamento no oceano. Decorações, fotógrafo e equipe que guarda o segredo.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/proposal-yacht-miami/page";
