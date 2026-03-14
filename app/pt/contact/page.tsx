import type { Metadata } from "next";
import ContactPageClient from "@/components/pages/ContactPageClient";

export const metadata: Metadata = {
  title: "Contato Emerald Eyes Miami | Charters de Iate em North Miami",
  description:
    "Entre em contato com a Emerald Eyes Miami para perguntas sobre charters e planejamento.",
  alternates: {
    canonical: "/pt/contact",
    languages: { en: "/contact", es: "/es/contact", pt: "/pt/contact", de: "/de/contact", fr: "/fr/contact", zh: "/zh/contact", ja: "/ja/contact" },
  },
  openGraph: {
    title: "Contato Emerald Eyes Miami | Charters de Iate em North Miami",
    description:
      "Entre em contato com a Emerald Eyes Miami para perguntas sobre charters e planejamento.",
    url: "/pt/contact",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Contato Emerald Eyes Miami | Charters de Iate em North Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contato Emerald Eyes Miami | Charters de Iate em North Miami",
    description:
      "Entre em contato com a Emerald Eyes Miami para perguntas sobre charters e planejamento.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export default function ContactPagePT() {
  return (
    <main itemScope itemType="http://schema.org/ContactPage">
      <ContactPageClient />
    </main>
  );
}
