"use client";

// =============================================================================
// ChatBubble — WhatsApp Dark Mode Style Message Bubble
// =============================================================================

import type { ChatBubbleProps } from "@/lib/types";

export default function ChatBubble({ message }: ChatBubbleProps) {
  const isBot = message.sender === "bot";

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
          color: isBot ? "#e9edef" : "#e9edef",
        }}
      >
        {message.text}
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
