// =============================================================================
// EMERALD EYES MIAMI — Navigation Header (Polished Language Selector)
// =============================================================================

"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage, type Lang } from "@/lib/language-context";
import { NAV_LINKS } from "@/lib/constants";

const LANGUAGES: { code: Lang; flag: string; label: string }[] = [
  { code: "en", flag: "🇺🇸", label: "EN" },
  { code: "es", flag: "🇪🇸", label: "ES" },
  { code: "pt", flag: "🇧🇷", label: "PT" },
  { code: "de", flag: "🇩🇪", label: "DE" },
  { code: "fr", flag: "🇫🇷", label: "FR" },
  { code: "zh", flag: "🇨🇳", label: "中文" },
  { code: "ja", flag: "🇯🇵", label: "日本" },
];

export default function Header() {
  const { lang: active, setLang: setActive } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === active) ?? LANGUAGES[0];

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#08131d]/72 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="min-w-0">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.32em] text-[--color-emerald]/70">
            North Miami Yacht Charters
          </span>
          <span className="font-[family-name:var(--font-heading)] text-lg text-white sm:text-xl">
            Emerald Eyes Miami
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center justify-center gap-1 lg:flex"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(`${link.href}/`));

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-sm transition-colors ${
                  link.cta
                    ? "border border-[--color-emerald]/40 bg-[--color-emerald]/12 font-semibold text-[--color-emerald] hover:bg-[--color-emerald]/20"
                    : isActive
                      ? "bg-white/8 text-white"
                      : "text-white/65 hover:bg-white/6 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div ref={ref} className="relative">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm transition-all hover:border-white/20 hover:bg-white/10"
            aria-label="Change language"
          >
            <span className="text-base leading-none">{current.flag}</span>
            <span className="text-xs font-medium text-white/70">
              {current.label}
            </span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              className={`text-white/40 transition-transform ${open ? "rotate-180" : ""}`}
            >
              <path
                d="M2 3.5l3 3 3-3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {open && (
            <div
              className="absolute right-0 mt-2 overflow-hidden rounded-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] animate-bubble-in"
              style={{ backgroundColor: "rgba(15, 25, 32, 0.95)" }}
            >
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    setActive(lang.code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm transition-colors ${
                    active === lang.code
                      ? "bg-[#2EC4A5]/15 text-[#2EC4A5]"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="text-lg leading-none">{lang.flag}</span>
                  <span className="min-w-[2rem] font-medium">{lang.label}</span>
                  {active === lang.code && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="ml-auto text-[#2EC4A5]"
                    >
                      <path
                        d="M3 7l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
