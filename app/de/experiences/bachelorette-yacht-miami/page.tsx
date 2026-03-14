import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Junggesellinnenabschied Yacht Miami | Emerald Eyes Miami",
  description:
    "Die perfekte Kulisse für den Abschied. Champagner, DJ, Dekoration und Instagram-Fotos auf dem Wasser. Die Braut verdient das Beste. Ab $3.500.",
  keywords: [
    "Junggesellinnenabschied Yacht Miami",
    "Bachelorette Boot Miami"
  ],
  alternates: {
    canonical: "/de/experiences/bachelorette-yacht-miami",
    languages: { en: "/experiences/bachelorette-yacht-miami", es: "/es/experiences/bachelorette-yacht-miami", pt: "/pt/experiences/bachelorette-yacht-miami", de: "/de/experiences/bachelorette-yacht-miami", fr: "/fr/experiences/bachelorette-yacht-miami", zh: "/zh/experiences/bachelorette-yacht-miami", ja: "/ja/experiences/bachelorette-yacht-miami" },
  },
  openGraph: {
    title: "Junggesellinnenabschied Yacht Miami | Emerald Eyes Miami",
    description:
      "Champagner, DJ, Dekoration und die perfekte Kulisse für den Junggesellinnenabschied.",
    url: "/de/experiences/bachelorette-yacht-miami",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Junggesellinnenabschied Yacht — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junggesellinnenabschied Yacht Miami | Emerald Eyes Miami",
    description:
      "Champagner, DJ, Dekoration und die perfekte Kulisse für den Junggesellinnenabschied.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/bachelorette-yacht-miami/page";
