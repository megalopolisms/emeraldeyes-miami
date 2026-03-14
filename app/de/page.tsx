import type { Metadata } from "next";
import HeroSplit from "@/components/home/HeroSplit";
import BelowFold from "@/components/home/BelowFold";

export const metadata: Metadata = {
  title: "Emerald Eyes Miami | Luxus-Yachtcharter in North Miami",
  description:
    "Buchen Sie einen Luxus-Yachtcharter in North Miami. Sonnenuntergangskreuzfahrten, private Partys, Junggesellinnenabschiede, Heiratsanträge und Firmenevents auf der Biscayne Bay.",
  keywords: [
    "Yacht mieten Miami",
    "Yachtcharter North Miami",
    "Sonnenuntergang Kreuzfahrt Miami",
    "private Yachtparty",
    "Junggesellinnenabschied Yacht Miami"
  ],
  alternates: {
    canonical: "/de",
    languages: { en: "/", es: "/es", pt: "/pt", de: "/de", fr: "/fr", zh: "/zh", ja: "/ja" },
  },
  openGraph: {
    title: "Emerald Eyes Miami | Luxus-Yachtcharter in North Miami",
    description:
      "Buchen Sie einen Luxus-Yachtcharter in North Miami. Sonnenuntergangskreuzfahrten, private Partys, Junggesellinnenabschiede, Heiratsanträge und Firmenevents auf der Biscayne Bay.",
    url: "/de",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Emerald Eyes Miami — Luxus-Yachtcharter in North Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emerald Eyes Miami | Luxus-Yachtcharter in North Miami",
    description:
      "Buchen Sie einen Luxus-Yachtcharter in North Miami. Sonnenuntergangskreuzfahrten, private Partys, Junggesellinnenabschiede, Heiratsanträge und Firmenevents auf der Biscayne Bay.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export default function HomePageDE() {
  return (
    <main itemScope itemType="http://schema.org/WebPage">
      <HeroSplit />
      <BelowFold />
    </main>
  );
}
