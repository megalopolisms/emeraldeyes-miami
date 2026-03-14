import type { Metadata } from "next";
import Script from "next/script";
import FAQPageClient from "@/components/pages/FAQPageClient";

export const metadata: Metadata = {
  title:
    "Questions Fréquentes sur les Charters Yacht à Miami | Emerald Eyes Miami",
  description:
    "Réponses aux questions fréquentes sur les charters Emerald Eyes Miami.",
  alternates: {
    canonical: "/fr/faq",
    languages: { en: "/faq", es: "/es/faq", pt: "/pt/faq", de: "/de/faq", fr: "/fr/faq", zh: "/zh/faq", ja: "/ja/faq" },
  },
  openGraph: {
    title: "Questions Fréquentes sur les Charters Yacht à Miami | Emerald Eyes Miami",
    description:
      "Réponses aux questions fréquentes sur les charters Emerald Eyes Miami.",
    url: "/fr/faq",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Questions Fréquentes sur les Charters Yacht à Miami | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Questions Fréquentes sur les Charters Yacht à Miami | Emerald Eyes Miami",
    description:
      "Réponses aux questions fréquentes sur les charters Emerald Eyes Miami.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "D'où partent les charters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tous les charters partent de notre marina partenaire dans la zone de North Miami. Les détails exacts sont fournis après confirmation de la réservation.",
      },
    },
    {
      "@type": "Question",
      name: "Qu'est-ce qui est inclus dans le prix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chaque charter comprend un capitaine licencié, l'équipage, le carburant, les commodités de base, l'eau, la glace et le système de son. Les extras comme la photographie, DJ et traiteur sont disponibles séparément.",
      },
    },
    {
      "@type": "Question",
      name: "Pouvons-nous apporter notre propre nourriture et boissons?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Vous pouvez apporter votre propre nourriture et boissons. Pour une expérience sans souci, nous pouvons coordonner traiteur et service de bouteilles.",
      },
    },
    {
      "@type": "Question",
      name: "Fournissez-vous un capitaine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Les capitaines et l'équipage sont inclus pour que vous puissiez vous concentrer sur l'expérience.",
      },
    },
    {
      "@type": "Question",
      name: "Que se passe-t-il si le temps change?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous surveillons les conditions avant chaque charter. Si le temps rend la sortie dangereuse, nous vous aiderons à reprogrammer.",
      },
    }
  ],
};

export default function FAQPageFR() {
  return (
    <>
      <Script
        id="faq-schema-fr"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQPageClient />
    </>
  );
}
