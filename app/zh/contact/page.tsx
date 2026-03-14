import type { Metadata } from "next";
import ContactPageClient from "@/components/pages/ContactPageClient";

export const metadata: Metadata = {
  title: "联系 Emerald Eyes Miami | 北迈阿密游艇包船",
  description:
    "联系Emerald Eyes Miami咨询包船问题和规划。",
  alternates: {
    canonical: "/zh/contact",
    languages: { en: "/contact", es: "/es/contact", pt: "/pt/contact", de: "/de/contact", fr: "/fr/contact", zh: "/zh/contact", ja: "/ja/contact" },
  },
  openGraph: {
    title: "联系 Emerald Eyes Miami | 北迈阿密游艇包船",
    description:
      "联系Emerald Eyes Miami咨询包船问题和规划。",
    url: "/zh/contact",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "联系 Emerald Eyes Miami | 北迈阿密游艇包船",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "联系 Emerald Eyes Miami | 北迈阿密游艇包船",
    description:
      "联系Emerald Eyes Miami咨询包船问题和规划。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export default function ContactPageZH() {
  return (
    <main itemScope itemType="http://schema.org/ContactPage">
      <ContactPageClient />
    </main>
  );
}
