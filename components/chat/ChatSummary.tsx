"use client";

// =============================================================================
// ChatSummary — WhatsApp-style summary card (Step 8)
// =============================================================================

import type { ChatSelections } from "@/lib/types";
import { estimatePrice, formatPrice } from "@/lib/pricing";
import {
  OCCASION_OPTIONS,
  GROUP_SIZE_OPTIONS,
  DURATION_OPTIONS,
  ADDON_OPTIONS,
  PICKUP_OPTIONS,
} from "@/lib/constants";

interface ChatSummaryProps {
  selections: ChatSelections;
  onSubmit: () => void;
  isSubmitting?: boolean;
  error?: string | null;
}

function getLabel(
  options: ReadonlyArray<{ id: string; label: string }>,
  id: string | null,
): string {
  if (!id) return "---";
  return options.find((o) => o.id === id)?.label ?? id;
}

export default function ChatSummary({
  selections,
  onSubmit,
  isSubmitting = false,
  error = null,
}: ChatSummaryProps) {
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
    .map((id) => getLabel(ADDON_OPTIONS, id));
  const addonsDisplay =
    addonLabels.length > 0 ? addonLabels.join(", ") : "None";

  return (
    <div className="animate-bubble-in max-w-xs space-y-2">
      <div
        className="rounded-lg p-3 space-y-2"
        style={{ backgroundColor: "#1f2c34" }}
      >
        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#2EC4A5]">
          Your Charter
        </p>

        <div className="space-y-1 text-[12px]">
          <Row
            label="Occasion"
            value={getLabel(OCCASION_OPTIONS, selections.occasion)}
          />
          <Row
            label="Guests"
            value={getLabel(GROUP_SIZE_OPTIONS, selections.groupSize)}
          />
          <Row label="Date" value={dateDisplay} />
          <Row
            label="Duration"
            value={getLabel(DURATION_OPTIONS, selections.duration)}
          />
          <Row label="Add-ons" value={addonsDisplay} />
          <Row
            label="Pickup"
            value={getLabel(PICKUP_OPTIONS, selections.pickup)}
          />
        </div>

        <div className="h-px w-full bg-white/8" />

        <div className="flex items-center justify-between">
          <span className="text-[11px] text-white/40">Estimate</span>
          <span className="text-[15px] font-bold text-[#2EC4A5]">
            {formatPrice(estimate.low)} &ndash; {formatPrice(estimate.high)}
          </span>
        </div>

        <p className="text-[10px] text-white/30 leading-relaxed">
          Planning range. Final quote confirmed within 1 hour.
        </p>
      </div>

      <button
        type="button"
        onClick={onSubmit}
        disabled={isSubmitting}
        className="w-full py-2.5 rounded-lg text-[13px] font-bold transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
        style={{ backgroundColor: "#2EC4A5", color: "#fff" }}
      >
        {isSubmitting ? "Sending..." : "Send My Request"}
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
