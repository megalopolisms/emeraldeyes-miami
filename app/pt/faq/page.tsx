import type { Metadata } from "next";
import Script from "next/script";
import FAQPageClient from "@/components/pages/FAQPageClient";

export const metadata: Metadata = {
  title:
    "Perguntas Frequentes sobre Charter de Iate em Miami | Emerald Eyes Miami",
  description:
    "Respostas às perguntas mais comuns sobre charters da Emerald Eyes Miami.",
  alternates: {
    canonical: "/pt/faq",
    languages: { en: "/faq", es: "/es/faq", pt: "/pt/faq", de: "/de/faq", fr: "/fr/faq", zh: "/zh/faq", ja: "/ja/faq" },
  },
  openGraph: {
    title: "Perguntas Frequentes sobre Charter de Iate em Miami | Emerald Eyes Miami",
    description:
      "Respostas às perguntas mais comuns sobre charters da Emerald Eyes Miami.",
    url: "/pt/faq",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Perguntas Frequentes sobre Charter de Iate em Miami | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perguntas Frequentes sobre Charter de Iate em Miami | Emerald Eyes Miami",
    description:
      "Respostas às perguntas mais comuns sobre charters da Emerald Eyes Miami.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "De onde saem os charters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Todos os charters saem de nossa marina parceira na área de North Miami. Os detalhes exatos são fornecidos após a confirmação da reserva.",
      },
    },
    {
      "@type": "Question",
      name: "O que está incluído no preço?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cada charter inclui capitão licenciado, tripulação, combustível, amenidades básicas, água, gelo e sistema de som. Extras como fotografia, DJ e catering estão disponíveis separadamente.",
      },
    },
    {
      "@type": "Question",
      name: "Podemos levar nossa própria comida e bebida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Você pode trazer sua própria comida e bebidas. Se preferir uma experiência sem preocupações, podemos coordenar catering e serviço de garrafas.",
      },
    },
    {
      "@type": "Question",
      name: "Vocês fornecem capitão?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Capitães e tripulação estão incluídos para que você possa focar na experiência.",
      },
    },
    {
      "@type": "Question",
      name: "E se o tempo mudar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Monitoramos as condições antes de cada charter. Se o clima tornar inseguro sair, ajudaremos a reagendar.",
      },
    }
  ],
};

export default function FAQPagePT() {
  return (
    <>
      <Script
        id="faq-schema-pt"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQPageClient />
    </>
  );
}
