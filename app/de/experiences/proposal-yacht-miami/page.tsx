import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heiratsantrag auf Yacht Miami | Emerald Eyes Miami",
  description:
    "Das perfekteste Ja Ihres Lebens. Antragssettings auf dem Ozean mit Dekoration, Fotograf und einem Team, das das Geheimnis wahrt. Ab $2.500.",
  keywords: [
    "Heiratsantrag Yacht Miami",
    "romantischer Antrag Yacht Miami"
  ],
  alternates: {
    canonical: "/de/experiences/proposal-yacht-miami",
    languages: { en: "/experiences/proposal-yacht-miami", es: "/es/experiences/proposal-yacht-miami", pt: "/pt/experiences/proposal-yacht-miami", de: "/de/experiences/proposal-yacht-miami", fr: "/fr/experiences/proposal-yacht-miami", zh: "/zh/experiences/proposal-yacht-miami", ja: "/ja/experiences/proposal-yacht-miami" },
  },
  openGraph: {
    title: "Heiratsantrag auf Yacht Miami | Emerald Eyes Miami",
    description:
      "Heiratsanträge auf dem Ozean. Dekoration, Fotograf und ein Team, das das Geheimnis wahrt.",
    url: "/de/experiences/proposal-yacht-miami",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Heiratsantrag auf Yacht — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heiratsantrag auf Yacht Miami | Emerald Eyes Miami",
    description:
      "Heiratsanträge auf dem Ozean. Dekoration, Fotograf und ein Team, das das Geheimnis wahrt.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/proposal-yacht-miami/page";
