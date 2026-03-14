import type { Metadata } from "next";
import HeroSplit from "@/components/home/HeroSplit";
import BelowFold from "@/components/home/BelowFold";

export const metadata: Metadata = {
  title: "Emerald Eyes Miami | Location de Yacht de Luxe à North Miami",
  description:
    "Réservez une croisière en yacht de luxe à North Miami. Croisières au coucher du soleil, fêtes privées, enterrements de vie de jeune fille, demandes en mariage et événements d'entreprise sur Biscayne Bay.",
  keywords: [
    "location yacht Miami",
    "charter yacht North Miami",
    "croisière coucher soleil Miami",
    "fête privée yacht",
    "enterrement vie jeune fille yacht Miami"
  ],
  alternates: {
    canonical: "/fr",
    languages: { en: "/", es: "/es", pt: "/pt", de: "/de", fr: "/fr", zh: "/zh", ja: "/ja" },
  },
  openGraph: {
    title: "Emerald Eyes Miami | Location de Yacht de Luxe à North Miami",
    description:
      "Réservez une croisière en yacht de luxe à North Miami. Croisières au coucher du soleil, fêtes privées, enterrements de vie de jeune fille, demandes en mariage et événements d'entreprise sur Biscayne Bay.",
    url: "/fr",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Emerald Eyes Miami — Location de yacht de luxe à North Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emerald Eyes Miami | Location de Yacht de Luxe à North Miami",
    description:
      "Réservez une croisière en yacht de luxe à North Miami. Croisières au coucher du soleil, fêtes privées, enterrements de vie de jeune fille, demandes en mariage et événements d'entreprise sur Biscayne Bay.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export default function HomePageFR() {
  return (
    <main itemScope itemType="http://schema.org/WebPage">
      <HeroSplit />
      <BelowFold />
    </main>
  );
}
