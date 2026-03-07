// =============================================================================
// EMERALD EYES MIAMI — Navigation Header (Minimal + Language Flags)
// =============================================================================

"use client";

import Link from "next/link";
import { useLanguage, type Lang } from "@/lib/language-context";

const LANGUAGES: { code: Lang; flag: string; label: string }[] = [
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "pt", flag: "🇧🇷", label: "Português" },
  { code: "de", flag: "🇩🇪", label: "Deutsch" },
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "zh", flag: "🇨🇳", label: "中文" },
  { code: "ja", flag: "🇯🇵", label: "日本語" },
];

export default function Header() {
  const { lang: active, setLang: setActive } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="w-8">
          <span className="sr-only">Emerald Eyes Miami</span>
        </Link>

        <div className="flex items-center gap-1.5">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => setActive(lang.code)}
              title={lang.label}
              className={`text-lg leading-none rounded-full w-8 h-8 flex items-center justify-center transition-all ${
                active === lang.code
                  ? "bg-white/10 scale-110"
                  : "opacity-50 hover:opacity-100 hover:bg-white/5"
              }`}
            >
              {lang.flag}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
