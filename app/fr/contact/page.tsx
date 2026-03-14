import type { Metadata } from "next";
import ContactPageClient from "@/components/pages/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Emerald Eyes Miami | Charters Yacht à North Miami",
  description:
    "Contactez Emerald Eyes Miami pour vos questions de charter et planification.",
  alternates: {
    canonical: "/fr/contact",
    languages: { en: "/contact", es: "/es/contact", pt: "/pt/contact", de: "/de/contact", fr: "/fr/contact", zh: "/zh/contact", ja: "/ja/contact" },
  },
  openGraph: {
    title: "Contact Emerald Eyes Miami | Charters Yacht à North Miami",
    description:
      "Contactez Emerald Eyes Miami pour vos questions de charter et planification.",
    url: "/fr/contact",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Contact Emerald Eyes Miami | Charters Yacht à North Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Emerald Eyes Miami | Charters Yacht à North Miami",
    description:
      "Contactez Emerald Eyes Miami pour vos questions de charter et planification.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export default function ContactPageFR() {
  return (
    <main itemScope itemType="http://schema.org/ContactPage">
      <ContactPageClient />
    </main>
  );
}
