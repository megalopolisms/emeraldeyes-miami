import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cruzeiro ao Pôr do Sol em Miami | Emerald Eyes Miami",
  description:
    "Veja o skyline de Miami brilhar enquanto o sol se põe no horizonte. Grupos íntimos, champanhe e uma noite inesquecível. A partir de $2.500.",
  keywords: [
    "cruzeiro pôr do sol Miami",
    "passeio romântico barco Miami"
  ],
  alternates: {
    canonical: "/pt/experiences/sunset-cruise-miami",
    languages: { en: "/experiences/sunset-cruise-miami", es: "/es/experiences/sunset-cruise-miami", pt: "/pt/experiences/sunset-cruise-miami", de: "/de/experiences/sunset-cruise-miami", fr: "/fr/experiences/sunset-cruise-miami", zh: "/zh/experiences/sunset-cruise-miami", ja: "/ja/experiences/sunset-cruise-miami" },
  },
  openGraph: {
    title: "Cruzeiro ao Pôr do Sol em Miami | Emerald Eyes Miami",
    description:
      "Hora dourada na água. Champanhe, brisa do oceano e o skyline de Miami ao pôr do sol.",
    url: "/pt/experiences/sunset-cruise-miami",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/sunset.jpg",
        width: 784,
        height: 1168,
        alt: "Cruzeiro ao pôr do sol na Biscayne Bay — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cruzeiro ao Pôr do Sol em Miami | Emerald Eyes Miami",
    description:
      "Hora dourada na água. Champanhe, brisa do oceano e o skyline de Miami ao pôr do sol.",
    images: ["/images/sunset.jpg"],
  },
};

export { default } from "@/app/experiences/sunset-cruise-miami/page";
