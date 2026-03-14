import type { Metadata } from "next";
import Script from "next/script";
import FAQPageClient from "@/components/pages/FAQPageClient";

export const metadata: Metadata = {
  title:
    "Häufig Gestellte Fragen zu Yachtchartern in Miami | Emerald Eyes Miami",
  description:
    "Antworten auf häufige Fragen zu Emerald Eyes Miami Chartern.",
  alternates: {
    canonical: "/de/faq",
    languages: { en: "/faq", es: "/es/faq", pt: "/pt/faq", de: "/de/faq", fr: "/fr/faq", zh: "/zh/faq", ja: "/ja/faq" },
  },
  openGraph: {
    title: "Häufig Gestellte Fragen zu Yachtchartern in Miami | Emerald Eyes Miami",
    description:
      "Antworten auf häufige Fragen zu Emerald Eyes Miami Chartern.",
    url: "/de/faq",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Häufig Gestellte Fragen zu Yachtchartern in Miami | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Häufig Gestellte Fragen zu Yachtchartern in Miami | Emerald Eyes Miami",
    description:
      "Antworten auf häufige Fragen zu Emerald Eyes Miami Chartern.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Von wo starten die Charter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alle Charter starten von unserer Partnermarina im Bereich North Miami. Die genauen Details erhalten Sie nach der Buchungsbestätigung.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist im Preis enthalten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jeder Charter beinhaltet lizenzierten Kapitän, Crew, Treibstoff, grundlegende Annehmlichkeiten, Wasser, Eis und Soundsystem. Extras wie Fotografie, DJ und Catering sind separat verfügbar.",
      },
    },
    {
      "@type": "Question",
      name: "Können wir eigenes Essen und Getränke mitbringen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Sie können Ihr eigenes Essen und Getränke mitbringen. Für ein sorgenfreies Erlebnis können wir Catering und Flaschenservice koordinieren.",
      },
    },
    {
      "@type": "Question",
      name: "Stellen Sie einen Kapitän?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Kapitän und Crew sind inklusive, damit Sie sich auf das Erlebnis konzentrieren können.",
      },
    },
    {
      "@type": "Question",
      name: "Was passiert bei Wetterwechsel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir überwachen die Bedingungen vor jedem Charter. Bei unsicherem Wetter helfen wir beim Umbuchen.",
      },
    }
  ],
};

export default function FAQPageDE() {
  return (
    <>
      <Script
        id="faq-schema-de"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQPageClient />
    </>
  );
}
