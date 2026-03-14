import type { Metadata } from "next";
import ContactPageClient from "@/components/pages/ContactPageClient";

export const metadata: Metadata = {
  title: "Kontakt Emerald Eyes Miami | Yachtcharter in North Miami",
  description:
    "Kontaktieren Sie Emerald Eyes Miami für Charterfragen und Planung.",
  alternates: {
    canonical: "/de/contact",
    languages: { en: "/contact", es: "/es/contact", pt: "/pt/contact", de: "/de/contact", fr: "/fr/contact", zh: "/zh/contact", ja: "/ja/contact" },
  },
  openGraph: {
    title: "Kontakt Emerald Eyes Miami | Yachtcharter in North Miami",
    description:
      "Kontaktieren Sie Emerald Eyes Miami für Charterfragen und Planung.",
    url: "/de/contact",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Kontakt Emerald Eyes Miami | Yachtcharter in North Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt Emerald Eyes Miami | Yachtcharter in North Miami",
    description:
      "Kontaktieren Sie Emerald Eyes Miami für Charterfragen und Planung.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export default function ContactPageDE() {
  return (
    <main itemScope itemType="http://schema.org/ContactPage">
      <ContactPageClient />
    </main>
  );
}
