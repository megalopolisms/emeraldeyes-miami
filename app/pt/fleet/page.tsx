import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nossa Frota | Emerald Eyes Miami",
  description:
    "Iates íntimos, embarcações para festas e charters de luxo disponíveis em North Miami. Diga-nos seu grupo e estilo — encontramos o iate perfeito.",
  keywords: [
    "frota de iates Miami",
    "tamanhos de iate Miami",
    "barcos para festas North Miami"
  ],
  alternates: {
    canonical: "/pt/fleet",
    languages: { en: "/fleet", es: "/es/fleet", pt: "/pt/fleet", de: "/de/fleet", fr: "/fr/fleet", zh: "/zh/fleet", ja: "/ja/fleet" },
  },
  openGraph: {
    title: "Nossa Frota | Emerald Eyes Miami",
    description:
      "Iates íntimos, embarcações para festas e charters de luxo disponíveis em North Miami. Diga-nos seu grupo e estilo — encontramos o iate perfeito.",
    url: "/pt/fleet",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Nossa Frota | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nossa Frota | Emerald Eyes Miami",
    description:
      "Iates íntimos, embarcações para festas e charters de luxo disponíveis em North Miami. Diga-nos seu grupo e estilo — encontramos o iate perfeito.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/fleet/page";
