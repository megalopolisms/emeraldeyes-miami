import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Jet-Ski-Lizenz in Miami: Alles was Sie Wissen Müssen | Emerald Eyes Miami",
  description:
    "Brauchen Sie einen Führerschein für Jet-Ski in Miami? Vollständiger Guide.",
  keywords: [
    "Jet-Ski Lizenz Miami",
    "Bootsführerschein Florida"
  ],
  alternates: {
    canonical: "/de/blog/jet-ski-license-miami",
    languages: { en: "/blog/jet-ski-license-miami", es: "/es/blog/jet-ski-license-miami", pt: "/pt/blog/jet-ski-license-miami", de: "/de/blog/jet-ski-license-miami", fr: "/fr/blog/jet-ski-license-miami", zh: "/zh/blog/jet-ski-license-miami", ja: "/ja/blog/jet-ski-license-miami" },
  },
  openGraph: {
    title:
      "Jet-Ski-Lizenz in Miami: Alles was Sie Wissen Müssen | Emerald Eyes Miami",
    description:
      "Brauchen Sie einen Führerschein für Jet-Ski in Miami? Vollständiger Guide.",
    url: "/de/blog/jet-ski-license-miami",
    type: "article",
    locale: "de_DE",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Jet-Ski-Lizenz in Miami: Alles was Sie Wissen Müssen | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jet-Ski-Lizenz in Miami: Alles was Sie Wissen Müssen | Emerald Eyes Miami",
    description:
      "Brauchen Sie einen Führerschein für Jet-Ski in Miami? Vollständiger Guide.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/blog/jet-ski-license-miami/page";
