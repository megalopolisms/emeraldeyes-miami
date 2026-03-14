import type { Metadata } from "next";

import ContactPageClient from "@/components/pages/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Emerald Eyes Miami | North Miami Yacht Charters",
  description:
    "Contact Emerald Eyes Miami for charter questions, custom requests, and planning support for North Miami yacht experiences on Biscayne Bay.",
  keywords: [
    "contact Emerald Eyes Miami",
    "yacht rental contact Miami",
    "book a yacht North Miami",
    "Miami yacht charter phone number",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Emerald Eyes Miami | North Miami Yacht Charters",
    description:
      "Reach the Emerald Eyes Miami team for charter planning, proposals, events, and custom yacht experiences.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Contact Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Emerald Eyes Miami | North Miami Yacht Charters",
    description:
      "Reach the Emerald Eyes Miami team for charter planning, proposals, events, and custom yacht experiences.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export default function ContactPage() {
  return (
    <main itemScope itemType="http://schema.org/ContactPage">
      <ContactPageClient />
    </main>
  );
}
