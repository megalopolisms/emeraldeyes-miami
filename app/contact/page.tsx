import type { Metadata } from "next";

import ContactPageClient from "@/components/pages/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Emerald Eyes Miami | North Miami Yacht Charters",
  description:
    "Contact Emerald Eyes Miami for charter questions, custom requests, and planning support for North Miami yacht experiences on Biscayne Bay.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Emerald Eyes Miami | North Miami Yacht Charters",
    description:
      "Reach the Emerald Eyes Miami team for charter planning, proposals, events, and custom yacht experiences.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
