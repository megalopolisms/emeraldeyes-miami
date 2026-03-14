import type { Metadata } from "next";
import HeroSplit from "@/components/home/HeroSplit";
import BelowFold from "@/components/home/BelowFold";

export const metadata: Metadata = {
  title: "Emerald Eyes Miami | Aluguel de Iates de Luxo em North Miami",
  description:
    "Reserve um charter de iate de luxo em North Miami. Cruzeiros ao por do sol, festas privadas, despedidas de solteira, pedidos de casamento e eventos corporativos na Biscayne Bay.",
  keywords: [
    "aluguel de iate Miami",
    "charter de iate North Miami",
    "cruzeiro por do sol Miami",
    "festa privada em iate",
    "despedida de solteira iate Miami"
  ],
  alternates: {
    canonical: "/pt",
    languages: { en: "/", es: "/es", pt: "/pt", de: "/de", fr: "/fr", zh: "/zh", ja: "/ja" },
  },
  openGraph: {
    title: "Emerald Eyes Miami | Aluguel de Iates de Luxo em North Miami",
    description:
      "Reserve um charter de iate de luxo em North Miami. Cruzeiros ao por do sol, festas privadas, despedidas de solteira, pedidos de casamento e eventos corporativos na Biscayne Bay.",
    url: "/pt",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Emerald Eyes Miami — Aluguel de iates de luxo em North Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emerald Eyes Miami | Aluguel de Iates de Luxo em North Miami",
    description:
      "Reserve um charter de iate de luxo em North Miami. Cruzeiros ao por do sol, festas privadas, despedidas de solteira, pedidos de casamento e eventos corporativos na Biscayne Bay.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export default function HomePagePT() {
  return (
    <main itemScope itemType="http://schema.org/WebPage">
      <HeroSplit />
      <BelowFold />
    </main>
  );
}
