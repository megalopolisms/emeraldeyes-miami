"use client";

// =============================================================================
// ChatWidget — WhatsApp-Style Chat Orchestrator (i18n)
// =============================================================================

import { useRef, useEffect, useCallback, useState } from "react";
import { useMachine } from "@xstate/react";
import { chatMachine } from "@/lib/chat-machine";
import { estimatePrice } from "@/lib/pricing";
import { submitInquiry } from "@/lib/submit-inquiry";
import type { ChatSelections, ChatStep } from "@/lib/types";
import {
  BUSINESS,
  OCCASION_OPTIONS,
  GROUP_SIZE_OPTIONS,
  DURATION_OPTIONS,
  ADDON_OPTIONS,
  PICKUP_OPTIONS,
} from "@/lib/constants";
import { asset } from "@/lib/constants";
import { formatPrice } from "@/lib/pricing";
import { useLanguage } from "@/lib/language-context";

import Image from "next/image";
import ChatBubble from "./ChatBubble";
import OptionChips from "./OptionChips";
import DatePicker from "./DatePicker";
import ContactForm from "./ContactForm";
import ChatSummary from "./ChatSummary";
import TypingIndicator from "./TypingIndicator";

interface ChatWidgetProps {
  mode: "panel" | "floating";
  onClose?: () => void;
  initialSelections?: Partial<ChatSelections>;
}

const STORAGE_KEY = "emerald-eyes-chat-state-v2";

function hasPrefill(selections?: Partial<ChatSelections>): boolean {
  if (!selections) return false;
  return Boolean(
    selections.occasion ||
    selections.groupSize ||
    selections.date ||
    selections.duration ||
    selections.pickup ||
    selections.name ||
    selections.phone ||
    selections.email ||
    selections.notes ||
    (Array.isArray(selections.addons) && selections.addons.length > 0),
  );
}

function isChatStep(step: string): step is ChatStep {
  return [
    "welcome",
    "occasion",
    "groupSize",
    "date",
    "email",
    "phone",
    "duration",
    "addons",
    "pickup",
    "contact",
    "summary",
    "submitted",
  ].includes(step);
}

export default function ChatWidget({
  mode,
  onClose,
  initialSelections,
}: ChatWidgetProps) {
  const [state, send] = useMachine(chatMachine);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasHydratedRef = useRef(false);
  const { t } = useLanguage();

  const { messages, currentStep, isTyping, selections } = state.context;

  // Hydration
  useEffect(() => {
    if (hasHydratedRef.current || typeof window === "undefined") return;
    hasHydratedRef.current = true;
    const persistedState = window.sessionStorage.getItem(STORAGE_KEY);
    if (persistedState) {
      try {
        const parsed = JSON.parse(persistedState) as {
          selections?: Partial<ChatSelections>;
          currentStep?: string;
        };
        send({
          type: "RESTORE",
          selections: parsed.selections,
          currentStep:
            parsed.currentStep && isChatStep(parsed.currentStep)
              ? parsed.currentStep
              : undefined,
        });
        return;
      } catch {
        window.sessionStorage.removeItem(STORAGE_KEY);
      }
    }
    if (hasPrefill(initialSelections)) {
      send({ type: "RESTORE", selections: initialSelections });
    }
  }, [initialSelections, send]);

  // Persist
  useEffect(() => {
    if (!hasHydratedRef.current || typeof window === "undefined") return;
    if (currentStep === "submitted") return;
    window.sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ selections, currentStep }),
    );
  }, [currentStep, selections]);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping, currentStep]);

  const clearTransientState = useCallback(() => setSubmitError(null), []);

  const handleSelect = useCallback(
    (value: string) => {
      clearTransientState();
      send({ type: "SELECT", value });
    },
    [clearTransientState, send],
  );

  const handleToggleAddon = useCallback(
    (addonId: string) => {
      clearTransientState();
      send({ type: "TOGGLE_ADDON", addonId });
    },
    [clearTransientState, send],
  );

  const handleConfirmAddons = useCallback(() => {
    clearTransientState();
    send({ type: "CONFIRM_ADDONS" });
  }, [clearTransientState, send]);

  const handleSubmitContact = useCallback(
    (data: { name: string; phone: string; email: string; notes: string }) => {
      clearTransientState();
      send({ type: "SUBMIT_CONTACT", ...data });
    },
    [clearTransientState, send],
  );

  const handleSubmit = useCallback(() => {
    const payload = {
      selections,
      estimate: estimatePrice(selections),
      source:
        typeof window !== "undefined" ? window.location.pathname : "/planner",
      submittedAt: new Date().toISOString(),
    };
    const whatsappUrl = buildWhatsAppUrl(selections);

    setIsSubmitting(true);
    setSubmitError(null);

    void submitInquiry(payload)
      .then(() => {
        if (typeof window !== "undefined") {
          window.sessionStorage.removeItem(STORAGE_KEY);
        }
        send({ type: "SUBMIT" });

        if (typeof window !== "undefined") {
          window.location.assign(whatsappUrl);
        }
      })
      .catch((error: unknown) => {
        setSubmitError(
          error instanceof Error
            ? error.message
            : "Unable to send your inquiry right now.",
        );
      })
      .finally(() => setIsSubmitting(false));
  }, [selections, send]);

  const handleBack = useCallback(() => {
    clearTransientState();
    send({ type: "BACK" });
  }, [clearTransientState, send]);

  const handleReset = useCallback(() => {
    clearTransientState();
    setIsSubmitting(false);
    if (typeof window !== "undefined")
      window.sessionStorage.removeItem(STORAGE_KEY);
    send({ type: "RESET" });
  }, [clearTransientState, send]);

  const renderStepInput = () => {
    switch (currentStep) {
      case "occasion":
        return (
          <OptionChips
            options={OCCASION_OPTIONS.map((o) => ({
              ...o,
              label: t("opt." + o.id),
            }))}
            selected={selections.occasion ?? ""}
            onSelect={handleSelect}
          />
        );
      case "groupSize":
        return (
          <OptionChips
            options={GROUP_SIZE_OPTIONS.map((o) => ({
              id: o.id,
              label: o.label,
              subtitle: t("opt." + o.tKey),
            }))}
            selected={selections.groupSize ?? ""}
            onSelect={handleSelect}
          />
        );
      case "date":
        return (
          <DatePicker
            onSelect={handleSelect}
            initialDate={selections.date ?? undefined}
          />
        );
      case "email":
        return (
          <div className="animate-bubble-in max-w-xs">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const val = (
                  e.currentTarget.elements.namedItem(
                    "email",
                  ) as HTMLInputElement
                ).value.trim();
                if (val.includes("@"))
                  send({ type: "SUBMIT_EMAIL", email: val });
              }}
              className="flex gap-2"
            >
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                defaultValue={selections.email}
                className="flex-1 px-3 py-2 rounded-lg text-[13px] text-[#e9edef] border border-white/8 focus:outline-none focus:border-[#2EC4A5] transition-colors placeholder:text-white/25"
                style={{ backgroundColor: "#0b141a" }}
                autoFocus
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg text-xs font-semibold"
                style={{ backgroundColor: "#2EC4A5", color: "#fff" }}
              >
                {t("chat.ok")}
              </button>
            </form>
          </div>
        );
      case "phone":
        return (
          <div className="animate-bubble-in max-w-xs">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const val = (
                  e.currentTarget.elements.namedItem(
                    "phone",
                  ) as HTMLInputElement
                ).value.trim();
                if (val.length >= 7) send({ type: "SUBMIT_PHONE", phone: val });
              }}
              className="flex gap-2"
            >
              <input
                name="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                defaultValue={selections.phone}
                className="flex-1 px-3 py-2 rounded-lg text-[13px] text-[#e9edef] border border-white/8 focus:outline-none focus:border-[#2EC4A5] transition-colors placeholder:text-white/25"
                style={{ backgroundColor: "#0b141a" }}
                autoFocus
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg text-xs font-semibold"
                style={{ backgroundColor: "#2EC4A5", color: "#fff" }}
              >
                {t("chat.ok")}
              </button>
            </form>
          </div>
        );
      case "duration":
        return (
          <OptionChips
            options={DURATION_OPTIONS.map((d) => ({
              id: d.id,
              label: t("opt." + d.id),
              subtitle:
                d.price > 0
                  ? `${t("opt.from")} $${d.price.toLocaleString()}`
                  : t("opt.customQuote"),
            }))}
            selected={selections.duration ?? ""}
            onSelect={handleSelect}
          />
        );
      case "addons":
        return (
          <div className="space-y-2">
            <OptionChips
              options={ADDON_OPTIONS.map((o) => ({
                ...o,
                label: t("opt." + o.id),
              }))}
              selected={selections.addons}
              onSelect={handleToggleAddon}
              multiSelect
            />
            <button
              type="button"
              onClick={handleConfirmAddons}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold transition-all hover:opacity-90 active:scale-[0.98] animate-bubble-in"
              style={{ backgroundColor: "#2EC4A5", color: "#fff" }}
            >
              {selections.addons.length > 0
                ? t("chat.continue")
                : t("chat.skip")}
            </button>
          </div>
        );
      case "pickup":
        return (
          <OptionChips
            options={PICKUP_OPTIONS.map((o) => ({
              ...o,
              label: t("opt." + o.id),
            }))}
            selected={selections.pickup ?? ""}
            onSelect={handleSelect}
          />
        );
      case "contact":
        return (
          <ContactForm
            onSubmit={handleSubmitContact}
            initialValues={{
              name: selections.name,
              phone: selections.phone,
              email: selections.email,
              notes: selections.notes,
            }}
            submitLabel={t("chat.reviewQuote")}
          />
        );
      case "summary":
        return (
          <ChatSummary
            selections={selections}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            error={submitError}
          />
        );
      case "submitted":
        return (
          <div
            className="animate-bubble-in rounded-lg p-3 space-y-2"
            style={{ backgroundColor: "#1f2c34" }}
          >
            <a
              href={buildWhatsAppUrl(selections)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-[13px] font-bold transition-all hover:opacity-90 active:scale-[0.98]"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t("chat.continueWhatsApp")}
            </a>
            <p className="text-[10px] text-white/30 text-center">
              {t("chat.or")}
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="w-full rounded-lg px-3 py-1.5 text-xs font-semibold text-white/50 hover:text-white/80 transition-colors"
              style={{
                backgroundColor: "transparent",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {t("chat.planAnother")}
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  const canGoBack =
    currentStep !== "occasion" &&
    currentStep !== "welcome" &&
    currentStep !== "submitted";

  return (
    <div
      className="flex flex-col h-full"
      style={{ backgroundColor: "#0b141a" }}
    >
      {/* WhatsApp-style header */}
      <div
        className="flex items-center gap-3 px-3 py-2 flex-shrink-0"
        style={{ backgroundColor: "#1f2c34" }}
      >
        <Image
          src={asset("/images/boat-icon.jpg")}
          alt="Emerald Eyes"
          width={44}
          height={44}
          className="w-11 h-11 rounded-full flex-shrink-0 object-cover"
        />
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-medium text-white leading-tight truncate">
            {t("chat.header")}{" "}
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[--color-gold]/70">
              {t("chat.yachtRentals")}
            </span>
          </p>
          <p className="text-[11px] text-[#2EC4A5] leading-tight">
            {isTyping
              ? t("chat.typing")
              : `${t("chat.online")} \u2022 ${t("chat.repliesIn")} ${BUSINESS.responseTime}`}
          </p>
        </div>
        {mode === "floating" && onClose && (
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-colors"
            aria-label="Close chat"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 4l8 8M12 4l-8 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Chat messages area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-3 py-3 space-y-1.5 chat-wa-bg"
      >
        {messages.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))}
        <TypingIndicator visible={isTyping} />
        {!isTyping && <div className="space-y-2 mt-1">{renderStepInput()}</div>}
        <div className="h-1" />
      </div>

      {/* Footer bar */}
      <div
        className="flex items-center justify-between px-3 py-1.5 flex-shrink-0"
        style={{ backgroundColor: "#1f2c34" }}
      >
        {canGoBack ? (
          <button
            type="button"
            onClick={handleBack}
            className="text-[11px] text-[#2EC4A5] hover:text-white transition-colors flex items-center gap-1"
          >
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
              <path
                d="M7.5 2.5L4 6l3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {t("chat.back")}
          </button>
        ) : (
          <span />
        )}
        <div className="flex items-center gap-2">
          {currentStep !== "submitted" && (
            <span className="text-[10px] text-white/25">
              {getStepNumber(currentStep)}/10
            </span>
          )}
          <button
            type="button"
            onClick={handleReset}
            className="text-[10px] text-white/30 hover:text-white/60 transition-colors"
          >
            {t("chat.restart")}
          </button>
        </div>
      </div>
    </div>
  );
}

function buildWhatsAppUrl(selections: ChatSelections): string {
  const find = (
    opts: ReadonlyArray<{ id: string; label: string }>,
    id: string | null,
  ) => opts.find((o) => o.id === id)?.label ?? "";

  const estimate = estimatePrice(selections);
  const lines = [
    `Hi! I'd like to book a charter:`,
    ``,
    `Occasion: ${find(OCCASION_OPTIONS, selections.occasion)}`,
    `Guests: ${find(GROUP_SIZE_OPTIONS, selections.groupSize)}`,
    selections.date
      ? `Date: ${new Date(selections.date).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}`
      : "",
    `Duration: ${find(DURATION_OPTIONS, selections.duration)}`,
    selections.addons.filter((a) => a !== "none").length > 0
      ? `Add-ons: ${selections.addons
          .filter((a) => a !== "none")
          .map((a) => find(ADDON_OPTIONS, a))
          .join(", ")}`
      : "",
    `Pickup: ${find(PICKUP_OPTIONS, selections.pickup)}`,
    ``,
    `Estimate: ${formatPrice(estimate.low)} – ${formatPrice(estimate.high)}`,
    ``,
    selections.name ? `Name: ${selections.name}` : "",
    selections.phone ? `Phone: ${selections.phone}` : "",
    selections.email ? `Email: ${selections.email}` : "",
    selections.notes ? `Notes: ${selections.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(lines)}`;
}

function getStepNumber(step: ChatStep): number {
  const map: Record<ChatStep, number> = {
    welcome: 1,
    occasion: 1,
    groupSize: 2,
    date: 3,
    email: 4,
    phone: 5,
    duration: 6,
    addons: 7,
    pickup: 8,
    contact: 9,
    summary: 10,
    submitted: 10,
  };
  return map[step] ?? 1;
}
