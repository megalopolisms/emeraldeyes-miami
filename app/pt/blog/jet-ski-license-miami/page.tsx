import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Licença de Jet Ski em Miami: Tudo que Você Precisa Saber | Emerald Eyes Miami",
  description:
    "Precisa de licença para pilotar jet ski em Miami? Guia completo sobre requisitos.",
  keywords: [
    "licença jet ski Miami",
    "certificação navegação Florida"
  ],
  alternates: {
    canonical: "/pt/blog/jet-ski-license-miami",
    languages: { en: "/blog/jet-ski-license-miami", es: "/es/blog/jet-ski-license-miami", pt: "/pt/blog/jet-ski-license-miami", de: "/de/blog/jet-ski-license-miami", fr: "/fr/blog/jet-ski-license-miami", zh: "/zh/blog/jet-ski-license-miami", ja: "/ja/blog/jet-ski-license-miami" },
  },
  openGraph: {
    title:
      "Licença de Jet Ski em Miami: Tudo que Você Precisa Saber | Emerald Eyes Miami",
    description:
      "Precisa de licença para pilotar jet ski em Miami? Guia completo sobre requisitos.",
    url: "/pt/blog/jet-ski-license-miami",
    type: "article",
    locale: "pt_BR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Licença de Jet Ski em Miami: Tudo que Você Precisa Saber | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Licença de Jet Ski em Miami: Tudo que Você Precisa Saber | Emerald Eyes Miami",
    description:
      "Precisa de licença para pilotar jet ski em Miami? Guia completo sobre requisitos.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/blog/jet-ski-license-miami/page";
