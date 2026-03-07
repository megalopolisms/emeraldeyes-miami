// =============================================================================
// EMERALD EYES MIAMI — Split-Screen Hero Container
// =============================================================================
// Desktop: Full viewport height, logo left, chat right in phone mockup.
// Mobile: Stacked — compact logo, bounded chat height, scrollable page.
// =============================================================================

"use client";

import Image from "next/image";
import LogoPanel from "@/components/home/LogoPanel";
import ChatWidget from "@/components/chat/ChatWidget";
import { asset } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";

export default function HeroSplit() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-0 flex-col md:h-screen md:flex-row">
      {/* Left Half — Logo Panel */}
      <div className="h-[28vh] w-full md:h-full md:w-1/2">
        <LogoPanel />
      </div>

      {/* Right Half — Chat in phone mockup */}
      <div className="flex flex-col items-center justify-center md:w-1/2 bg-[--color-navy] md:-ml-[10%] md:pt-[5vh]">
        {/* Phone mockup container */}
        <div className="relative w-full max-w-[360px] h-[420px] md:h-[60vh] flex flex-col mx-auto">
          {/* Phone frame */}
          <div className="flex flex-col h-full overflow-hidden md:rounded-[2rem] md:border-2 md:border-[#2EC4A5]/70 md:shadow-[0_0_30px_rgba(46,196,165,0.4)]">
            {/* Phone notch (desktop only) */}
            <div
              className="hidden md:flex items-center justify-center py-1.5"
              style={{ backgroundColor: "#1a5c4f" }}
            >
              <div className="w-20 h-1 rounded-full bg-white/10" />
            </div>

            {/* Chat fills the phone */}
            <div className="flex-1 min-h-0">
              <ChatWidget mode="panel" />
            </div>
          </div>
        </div>

        {/* City logos + trust line below phone (desktop) */}
        <div className="hidden md:flex flex-col items-center gap-3 mt-5">
          <div className="flex items-center justify-center gap-6">
            <div className="bg-white rounded-lg p-2 h-[5.5rem] flex items-center">
              <Image
                src={asset("/images/miamidade.png")}
                alt="Miami-Dade County"
                width={500}
                height={235}
                className="h-[3.8rem] w-auto"
              />
            </div>
            <Image
              src={asset("/images/northmiamibeach.png")}
              alt="North Miami Beach"
              width={840}
              height={885}
              className="h-[6.6rem] w-auto rounded-full ml-3"
            />
            <Image
              src={asset("/images/bbb.png")}
              alt="BBB Accredited Business"
              width={768}
              height={392}
              className="h-[6.9rem] w-auto"
            />
          </div>
          <div className="flex gap-4 text-[10px] text-white/30">
            <span>{t("trust.responds")}</span>
            <span>|</span>
            <span>{t("trust.charters")}</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex md:absolute md:bottom-6 left-1/2 md:-translate-x-1/2 z-10 flex-col items-center gap-1 animate-bounce py-4 md:py-0 mx-auto">
        <span className="text-[10px] uppercase tracking-widest text-[#2EC4A5]/60">
          {t("scroll.label")}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-[#2EC4A5]/80"
        >
          <path
            d="M4 7l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
