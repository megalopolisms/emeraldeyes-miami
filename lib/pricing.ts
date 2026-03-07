// =============================================================================
// EMERALD EYES MIAMI — Price Estimator
// =============================================================================
// Calculates estimated price range from chat selections.
// Used in: ChatSummary.tsx (step 8), API route validation.
// =============================================================================

import { DURATION_OPTIONS, ADDON_OPTIONS } from "./constants";
import type { ChatSelections, PriceEstimate } from "./types";

/**
 * Calculate estimated price range from user's chat selections.
 * Returns low/high range + breakdown by category.
 */
export function estimatePrice(selections: ChatSelections): PriceEstimate {
  // --- Base price from duration ---
  const durationOption = DURATION_OPTIONS.find(
    (d) => d.id === selections.duration,
  );
  const basePrice = durationOption?.price ?? 2500;

  // Multi-day = custom quote, show minimum
  const isCustomQuote = selections.duration === "multiday";

  // --- Group size multiplier (larger groups = premium vessels) ---
  const groupMultiplier = getGroupMultiplier(selections.groupSize);

  // --- Add-on costs ---
  const addonTotal = selections.addons
    .filter((id) => id !== "none")
    .reduce((sum, addonId) => {
      const addon = ADDON_OPTIONS.find((a) => a.id === addonId);
      return sum + (addon?.price ?? 0);
    }, 0);

  // --- Transport surcharge ---
  const transportCost =
    selections.pickup && selections.pickup !== "self" ? 200 : 0;

  // --- Weekend/holiday premium (15%) ---
  const isPremiumDay = checkPremiumDay(selections.date);
  const premiumMultiplier = isPremiumDay ? 0.15 : 0;

  // --- Calculate range ---
  const subtotal = basePrice * groupMultiplier + addonTotal + transportCost;
  const premium = Math.round(subtotal * premiumMultiplier);
  const total = subtotal + premium;

  // Low estimate = total, high estimate = total + 20% (vessel variance)
  const low = isCustomQuote ? 7000 : Math.round(total);
  const high = isCustomQuote ? 15000 : Math.round(total * 1.2);

  return {
    low,
    high,
    breakdown: {
      base: Math.round(basePrice * groupMultiplier),
      addons: addonTotal,
      transport: transportCost,
      premium,
    },
  };
}

/** Larger groups require bigger vessels = higher base price */
function getGroupMultiplier(groupSize: string | null): number {
  switch (groupSize) {
    case "2-4":
      return 1.0;
    case "5-8":
      return 1.0;
    case "9-15":
      return 1.15;
    case "16-25":
      return 1.35;
    case "25+":
      return 1.6;
    default:
      return 1.0;
  }
}

/** Check if selected date falls on a weekend or known holiday */
function checkPremiumDay(dateStr: string | null): boolean {
  if (!dateStr) return false;
  try {
    const date = new Date(dateStr);
    const day = date.getDay();
    // Friday (5), Saturday (6), Sunday (0) = premium
    return day === 0 || day === 5 || day === 6;
  } catch {
    return false;
  }
}

/** Format price as "$X,XXX" */
export function formatPrice(amount: number): string {
  return `$${amount.toLocaleString("en-US")}`;
}
