"use client";

// =============================================================================
// TypingIndicator — WhatsApp-style typing dots
// =============================================================================

interface TypingIndicatorProps {
  visible: boolean;
}

export default function TypingIndicator({ visible }: TypingIndicatorProps) {
  if (!visible) return null;

  return (
    <div className="flex justify-start animate-bubble-in">
      <div
        className="px-3 py-2 rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-sm flex gap-1 items-center"
        style={{ backgroundColor: "#1f2c34" }}
      >
        <span
          className="animate-typing-dot w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: "#2EC4A5" }}
        />
        <span
          className="animate-typing-dot w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: "#2EC4A5" }}
        />
        <span
          className="animate-typing-dot w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: "#2EC4A5" }}
        />
      </div>
    </div>
  );
}
