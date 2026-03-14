import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charter Corporativo de Iate Miami | Emerald Eyes Miami",
  description:
    "Impressione sem dizer uma palavra. Eventos executivos na água, entretenimento de clientes e reuniões com a melhor vista. Nós cuidamos de tudo. A partir de $5.000.",
  keywords: [
    "charter corporativo iate Miami",
    "evento empresarial barco Miami"
  ],
  alternates: {
    canonical: "/pt/experiences/corporate-yacht-charter-miami",
    languages: { en: "/experiences/corporate-yacht-charter-miami", es: "/es/experiences/corporate-yacht-charter-miami", pt: "/pt/experiences/corporate-yacht-charter-miami", de: "/de/experiences/corporate-yacht-charter-miami", fr: "/fr/experiences/corporate-yacht-charter-miami", zh: "/zh/experiences/corporate-yacht-charter-miami", ja: "/ja/experiences/corporate-yacht-charter-miami" },
  },
  openGraph: {
    title: "Charter Corporativo de Iate Miami | Emerald Eyes Miami",
    description:
      "Eventos de equipe, entretenimento de clientes e reuniões executivas na água em Miami.",
    url: "/pt/experiences/corporate-yacht-charter-miami",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Charter corporativo de iate — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charter Corporativo de Iate Miami | Emerald Eyes Miami",
    description:
      "Eventos de equipe, entretenimento de clientes e reuniões executivas na água em Miami.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/corporate-yacht-charter-miami/page";
