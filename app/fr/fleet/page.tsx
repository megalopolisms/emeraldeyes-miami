import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre Flotte | Emerald Eyes Miami",
  description:
    "Yachts intimes, bateaux de fête et charters de luxe à North Miami. Dites-nous votre groupe et style — nous trouvons le yacht parfait.",
  keywords: [
    "flotte de yachts Miami",
    "tailles de yacht Miami",
    "bateaux de fête North Miami"
  ],
  alternates: {
    canonical: "/fr/fleet",
    languages: { en: "/fleet", es: "/es/fleet", pt: "/pt/fleet", de: "/de/fleet", fr: "/fr/fleet", zh: "/zh/fleet", ja: "/ja/fleet" },
  },
  openGraph: {
    title: "Notre Flotte | Emerald Eyes Miami",
    description:
      "Yachts intimes, bateaux de fête et charters de luxe à North Miami. Dites-nous votre groupe et style — nous trouvons le yacht parfait.",
    url: "/fr/fleet",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Notre Flotte | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notre Flotte | Emerald Eyes Miami",
    description:
      "Yachts intimes, bateaux de fête et charters de luxe à North Miami. Dites-nous votre groupe et style — nous trouvons le yacht parfait.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/fleet/page";
