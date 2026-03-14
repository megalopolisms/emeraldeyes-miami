import type { Metadata } from "next";
import HeroSplit from "@/components/home/HeroSplit";
import BelowFold from "@/components/home/BelowFold";

export const metadata: Metadata = {
  title: "Emerald Eyes Miami | Alquiler de Yates de Lujo en North Miami",
  description:
    "Reserve un charter de yate de lujo en North Miami. Cruceros al atardecer, fiestas privadas, despedidas de soltera, propuestas y eventos corporativos en Biscayne Bay.",
  keywords: [
    "alquiler de yate Miami",
    "charter de yate North Miami",
    "crucero al atardecer Miami",
    "fiesta privada en yate",
    "despedida de soltera yate Miami",
    "alquiler de barco Haulover",
  ],
  alternates: {
    canonical: "/es",
    languages: { en: "/", es: "/es" },
  },
  openGraph: {
    title: "Emerald Eyes Miami | Alquiler de Yates de Lujo en North Miami",
    description:
      "Reserve un charter de yate de lujo en North Miami. Cruceros al atardecer, fiestas privadas, despedidas de soltera, propuestas y eventos corporativos en Biscayne Bay.",
    url: "/es",
    type: "website",
    locale: "es_US",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Emerald Eyes Miami — Alquiler de yates de lujo en North Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emerald Eyes Miami | Alquiler de Yates de Lujo en North Miami",
    description:
      "Reserve un charter de yate de lujo en North Miami. Cruceros al atardecer, fiestas privadas y eventos corporativos en Biscayne Bay.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export default function HomePageES() {
  return (
    <main itemScope itemType="http://schema.org/WebPage">
      <HeroSplit />
      <BelowFold />
    </main>
  );
}
