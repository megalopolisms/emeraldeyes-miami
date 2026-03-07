"use client";

// =============================================================================
// ChatSummary — WhatsApp-style summary card (i18n)
// =============================================================================

import type { ChatSelections } from "@/lib/types";
import { estimatePrice, formatPrice } from "@/lib/pricing";
import { useLanguage } from "@/lib/language-context";

interface ChatSummaryProps {
  selections: ChatSelections;
  onSubmit: () => void;
  isSubmitting?: boolean;
  error?: string | null;
}

export default function ChatSummary({
  selections,
  onSubmit,
  isSubmitting = false,
  error = null,
}: ChatSummaryProps) {
  const { t } = useLanguage();
  const estimate = estimatePrice(selections);

  const dateDisplay = selections.date
    ? new Date(selections.date).toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      })
    : "---";

  const addonLabels = selections.addons
    .filter((id) => id !== "none")
    .map((id) => t("opt." + id));
  const addonsDisplay =
    addonLabels.length > 0 ? addonLabels.join(", ") : t("opt.none");

  return (
    <div className="animate-bubble-in max-w-xs space-y-2">
      <div
        className="rounded-lg p-3 space-y-2"
        style={{ backgroundColor: "#1f2c34" }}
      >
        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#2EC4A5]">
          {t("summary.yourCharter")}
        </p>

        <div className="space-y-1 text-[12px]">
          <Row
            label={t("summary.occasion")}
            value={
              selections.occasion ? t("opt." + selections.occasion) : "---"
            }
          />
          <Row
            label={t("summary.guests")}
            value={selections.groupSize ?? "---"}
          />
          <Row label={t("summary.date")} value={dateDisplay} />
          <Row
            label={t("summary.duration")}
            value={
              selections.duration ? t("opt." + selections.duration) : "---"
            }
          />
          <Row label={t("summary.addons")} value={addonsDisplay} />
          <Row
            label={t("summary.pickup")}
            value={selections.pickup ? t("opt." + selections.pickup) : "---"}
          />
        </div>

        <div className="h-px w-full bg-white/8" />

        <div className="flex items-center justify-between">
          <span className="text-[11px] text-white/40">
            {t("summary.estimate")}
          </span>
          <span className="text-[15px] font-bold text-[#2EC4A5]">
            {formatPrice(estimate.low)} &ndash; {formatPrice(estimate.high)}
          </span>
        </div>

        <p className="text-[10px] text-white/30 leading-relaxed">
          {t("summary.disclaimer")}
        </p>
      </div>

      <button
        type="button"
        onClick={onSubmit}
        disabled={isSubmitting}
        className="w-full py-2.5 rounded-lg text-[13px] font-bold transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
        style={{ backgroundColor: "#2EC4A5", color: "#fff" }}
      >
        {isSubmitting ? t("chat.sending") : t("chat.sendRequest")}
      </button>

      {error && <p className="text-[11px] text-red-400">{error}</p>}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3">
      <span className="text-white/35 flex-shrink-0">{label}</span>
      <span className="text-right text-[#e9edef] font-medium truncate">
        {value}
      </span>
    </div>
  );
}
