"use client";

// =============================================================================
// ChatBubble — WhatsApp Dark Mode Style Message Bubble (i18n)
// =============================================================================

import type { ChatBubbleProps } from "@/lib/types";
import { useLanguage } from "@/lib/language-context";

function translateText(text: string, t: (key: string) => string): string {
  // Try direct translation (works for single keys like "chat.welcome", "opt.birthday")
  const direct = t(text);
  if (direct !== text) return direct;

  // Try comma-separated parts (for addon lists like "opt.photo, opt.sushi")
  if (text.includes(", ")) {
    const parts = text.split(", ");
    const translated = parts.map((p) => t(p));
    if (translated.some((tr, i) => tr !== parts[i])) {
      return translated.join(", ");
    }
  }

  return text;
}

export default function ChatBubble({ message }: ChatBubbleProps) {
  const { t } = useLanguage();
  const isBot = message.sender === "bot";
  const displayText = translateText(message.text, t);

  return (
    <div
      className={`flex animate-bubble-in ${isBot ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`relative max-w-[85%] px-3 py-1.5 text-[13px] leading-relaxed ${
          isBot
            ? "rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-sm"
            : "rounded-tl-lg rounded-tr-sm rounded-bl-lg rounded-br-lg"
        }`}
        style={{
          backgroundColor: isBot ? "#1f2c34" : "#1a6b5a",
          color: "#e9edef",
        }}
      >
        {displayText}
        <span className="ml-2 inline-block text-[10px] text-white/30 align-bottom leading-none">
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
        </span>
      </div>
    </div>
  );
}
