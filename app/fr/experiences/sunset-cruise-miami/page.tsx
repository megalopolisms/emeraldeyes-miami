import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Croisière au Coucher du Soleil Miami | Emerald Eyes Miami",
  description:
    "Admirez le skyline de Miami s'illuminer au coucher du soleil. Groupes intimes, champagne et une soirée inoubliable. À partir de 2 500 $.",
  keywords: [
    "croisière coucher soleil Miami",
    "balade romantique bateau Miami"
  ],
  alternates: {
    canonical: "/fr/experiences/sunset-cruise-miami",
    languages: { en: "/experiences/sunset-cruise-miami", es: "/es/experiences/sunset-cruise-miami", pt: "/pt/experiences/sunset-cruise-miami", de: "/de/experiences/sunset-cruise-miami", fr: "/fr/experiences/sunset-cruise-miami", zh: "/zh/experiences/sunset-cruise-miami", ja: "/ja/experiences/sunset-cruise-miami" },
  },
  openGraph: {
    title: "Croisière au Coucher du Soleil Miami | Emerald Eyes Miami",
    description:
      "Heure dorée sur l'eau. Champagne, brise marine et le skyline de Miami au coucher du soleil.",
    url: "/fr/experiences/sunset-cruise-miami",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/sunset.jpg",
        width: 784,
        height: 1168,
        alt: "Croisière au coucher du soleil Biscayne Bay — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Croisière au Coucher du Soleil Miami | Emerald Eyes Miami",
    description:
      "Heure dorée sur l'eau. Champagne, brise marine et le skyline de Miami au coucher du soleil.",
    images: ["/images/sunset.jpg"],
  },
};

export { default } from "@/app/experiences/sunset-cruise-miami/page";
