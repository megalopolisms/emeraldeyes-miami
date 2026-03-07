// =============================================================================
// EMERALD EYES MIAMI — Guided Chat State Machine
// =============================================================================
// Drives the quote-builder flow with a single "active" state while the current
// step lives in context. This keeps the transcript stable when users go back,
// resume, or change earlier answers.
// =============================================================================

import { setup, assign } from "xstate";
import type { ChatSelections, ChatMessage, ChatStep } from "@/lib/types";
import {
  CHAT_MESSAGES,
  OCCASION_REACTIONS,
  OCCASION_OPTIONS,
  GROUP_SIZE_OPTIONS,
  DURATION_OPTIONS,
  ADDON_OPTIONS,
  PICKUP_OPTIONS,
} from "@/lib/constants";

// ---------------------------------------------------------------------------
// Context Shape
// ---------------------------------------------------------------------------
export interface ChatContext {
  selections: ChatSelections;
  messages: ChatMessage[];
  currentStep: ChatStep;
  isTyping: boolean;
}

// ---------------------------------------------------------------------------
// Event Types
// ---------------------------------------------------------------------------
type ChatEvent =
  | { type: "SELECT"; value: string }
  | { type: "TOGGLE_ADDON"; addonId: string }
  | { type: "CONFIRM_ADDONS" }
  | { type: "SUBMIT_EMAIL"; email: string }
  | { type: "SUBMIT_PHONE"; phone: string }
  | {
      type: "SUBMIT_CONTACT";
      name: string;
      phone: string;
      email: string;
      notes: string;
    }
  | { type: "SUBMIT" }
  | { type: "BACK" }
  | { type: "RESET" }
  | {
      type: "RESTORE";
      selections?: Partial<ChatSelections>;
      currentStep?: ChatStep | null;
    };

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const EDITABLE_STEPS = [
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
] as const satisfies readonly ChatStep[];
type EditableStep = (typeof EDITABLE_STEPS)[number];

function normalizeSelections(
  partialSelections?: Partial<ChatSelections>,
): ChatSelections {
  return {
    occasion: partialSelections?.occasion ?? null,
    groupSize: partialSelections?.groupSize ?? null,
    date: partialSelections?.date ?? null,
    duration: partialSelections?.duration ?? null,
    addons: Array.isArray(partialSelections?.addons)
      ? [...partialSelections.addons]
      : [],
    pickup: partialSelections?.pickup ?? null,
    name: partialSelections?.name?.trim() ?? "",
    phone: partialSelections?.phone?.trim() ?? "",
    email: partialSelections?.email?.trim() ?? "",
    notes: partialSelections?.notes?.trim() ?? "",
  };
}

function hasContactDetails(selections: ChatSelections): boolean {
  return Boolean(
    selections.name.trim() &&
    selections.phone.trim() &&
    selections.email.trim(),
  );
}

function isEditableStep(step?: ChatStep | null): step is EditableStep {
  return Boolean(step && EDITABLE_STEPS.includes(step as EditableStep));
}

function labelFor(
  options: ReadonlyArray<{ id: string; label: string }>,
  id: string,
): string {
  return options.find((option) => option.id === id)?.label ?? id;
}

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatGroupSize(groupSize: string): string {
  const option = GROUP_SIZE_OPTIONS.find((item) => item.id === groupSize);
  return option ? `${option.label} (${option.subtitle})` : groupSize;
}

function formatAddons(addons: string[]): {
  text: string;
  selections: string[];
} {
  if (addons.length === 0) {
    return {
      text: "No add-ons for now",
      selections: ["none"],
    };
  }

  return {
    text: addons.map((addonId) => labelFor(ADDON_OPTIONS, addonId)).join(", "),
    selections: addons,
  };
}

function resolveCurrentStep(
  selections: ChatSelections,
  currentStep?: ChatStep | null,
): ChatStep {
  if (currentStep === "submitted") {
    return "submitted";
  }

  if (isEditableStep(currentStep)) {
    return currentStep;
  }

  if (!selections.occasion) {
    return "occasion";
  }
  if (!selections.groupSize) {
    return "groupSize";
  }
  if (!selections.date) {
    return "date";
  }
  if (!selections.email.trim()) {
    return "email";
  }
  if (!selections.phone.trim()) {
    return "phone";
  }
  if (!selections.duration) {
    return "duration";
  }
  if (!selections.pickup) {
    return "addons";
  }
  if (!hasContactDetails(selections)) {
    return "contact";
  }
  return "summary";
}

function buildMessage(
  id: string,
  sender: ChatMessage["sender"],
  text: string,
  index: number,
  selections?: string[],
): ChatMessage {
  return {
    id,
    sender,
    text,
    timestamp: index,
    ...(selections ? { selections } : {}),
  };
}

function buildMessages(
  selections: ChatSelections,
  currentStep: ChatStep,
): ChatMessage[] {
  const messages: ChatMessage[] = [];
  const push = (
    id: string,
    sender: ChatMessage["sender"],
    text: string,
    selected?: string[],
  ) => {
    messages.push(buildMessage(id, sender, text, messages.length, selected));
  };

  push("welcome", "bot", CHAT_MESSAGES.welcome);
  push("prompt-occasion", "bot", CHAT_MESSAGES.occasion);

  if (currentStep === "occasion") {
    return messages;
  }

  if (selections.occasion) {
    push(
      "answer-occasion",
      "user",
      labelFor(OCCASION_OPTIONS, selections.occasion),
      [selections.occasion],
    );

    const reaction = OCCASION_REACTIONS[selections.occasion];
    if (reaction) {
      push("reaction-occasion", "bot", reaction);
    }
  }

  push("prompt-groupSize", "bot", CHAT_MESSAGES.groupSize);

  if (currentStep === "groupSize") {
    return messages;
  }

  if (selections.groupSize) {
    push("answer-groupSize", "user", formatGroupSize(selections.groupSize), [
      selections.groupSize,
    ]);
  }

  push("prompt-date", "bot", CHAT_MESSAGES.date);

  if (currentStep === "date") {
    return messages;
  }

  if (selections.date) {
    push("answer-date", "user", formatDate(selections.date), [selections.date]);
  }

  push("prompt-email", "bot", "What's your email? We'll send the quote there.");

  if (currentStep === "email") {
    return messages;
  }

  if (selections.email.trim()) {
    push("answer-email", "user", selections.email, [selections.email]);
  }

  push("prompt-phone", "bot", "And your phone number?");

  if (currentStep === "phone") {
    return messages;
  }

  if (selections.phone.trim()) {
    push("answer-phone", "user", selections.phone, [selections.phone]);
  }

  push("prompt-duration", "bot", CHAT_MESSAGES.duration);

  if (currentStep === "duration") {
    return messages;
  }

  if (selections.duration) {
    push(
      "answer-duration",
      "user",
      labelFor(DURATION_OPTIONS, selections.duration),
      [selections.duration],
    );
  }

  push("prompt-addons", "bot", CHAT_MESSAGES.addons);

  if (currentStep === "addons") {
    return messages;
  }

  const addonResponse = formatAddons(selections.addons);
  push("answer-addons", "user", addonResponse.text, addonResponse.selections);

  push("prompt-pickup", "bot", CHAT_MESSAGES.pickup);

  if (currentStep === "pickup") {
    return messages;
  }

  if (selections.pickup) {
    push("answer-pickup", "user", labelFor(PICKUP_OPTIONS, selections.pickup), [
      selections.pickup,
    ]);
  }

  push("prompt-contact", "bot", CHAT_MESSAGES.contact);

  if (currentStep === "contact") {
    return messages;
  }

  if (hasContactDetails(selections)) {
    push("answer-contact", "user", `${selections.name} - ${selections.phone}`, [
      selections.email,
    ]);
  }

  push("prompt-summary", "bot", CHAT_MESSAGES.summary);

  if (currentStep === "summary") {
    return messages;
  }

  push("answer-submit", "user", "Send this request");
  push("prompt-confirmation", "bot", CHAT_MESSAGES.confirmation);

  return messages;
}

function createContext(
  partialSelections?: Partial<ChatSelections>,
  currentStep?: ChatStep | null,
): ChatContext {
  const selections = normalizeSelections(partialSelections);
  const resolvedStep = resolveCurrentStep(selections, currentStep);

  return {
    selections,
    messages: buildMessages(selections, resolvedStep),
    currentStep: resolvedStep,
    isTyping: false,
  };
}

function updateContext(
  context: ChatContext,
  selectionPatch: Partial<ChatSelections>,
  currentStep: ChatStep,
): ChatContext {
  return createContext(
    {
      ...context.selections,
      ...selectionPatch,
    },
    currentStep,
  );
}

function previousStep(currentStep: ChatStep): ChatStep {
  switch (currentStep) {
    case "groupSize":
      return "occasion";
    case "date":
      return "groupSize";
    case "email":
      return "date";
    case "phone":
      return "email";
    case "duration":
      return "phone";
    case "addons":
      return "duration";
    case "pickup":
      return "addons";
    case "contact":
      return "pickup";
    case "summary":
      return "contact";
    default:
      return "occasion";
  }
}

// ---------------------------------------------------------------------------
// Machine Definition (XState v5)
// ---------------------------------------------------------------------------
export const chatMachine = setup({
  types: {
    context: {} as ChatContext,
    events: {} as ChatEvent,
  },
}).createMachine({
  id: "emeraldEyesChat",
  initial: "active",
  context: createContext(),
  states: {
    active: {
      on: {
        SELECT: [
          {
            guard: ({ context }) => context.currentStep === "occasion",
            actions: assign(({ context, event }) =>
              updateContext(context, { occasion: event.value }, "groupSize"),
            ),
          },
          {
            guard: ({ context }) => context.currentStep === "groupSize",
            actions: assign(({ context, event }) =>
              updateContext(context, { groupSize: event.value }, "date"),
            ),
          },
          {
            guard: ({ context }) => context.currentStep === "date",
            actions: assign(({ context, event }) =>
              updateContext(context, { date: event.value }, "email"),
            ),
          },
          {
            guard: ({ context }) => context.currentStep === "duration",
            actions: assign(({ context, event }) =>
              updateContext(context, { duration: event.value }, "addons"),
            ),
          },
          {
            guard: ({ context }) => context.currentStep === "pickup",
            actions: assign(({ context, event }) =>
              updateContext(context, { pickup: event.value }, "contact"),
            ),
          },
        ],

        TOGGLE_ADDON: {
          guard: ({ context }) => context.currentStep === "addons",
          actions: assign(({ context, event }) => {
            const currentAddons = context.selections.addons;

            if (event.addonId === "none") {
              return updateContext(context, { addons: ["none"] }, "addons");
            }

            const addonsWithoutNone = currentAddons.filter(
              (addonId) => addonId !== "none",
            );
            const hasAddon = addonsWithoutNone.includes(event.addonId);
            const updatedAddons = hasAddon
              ? addonsWithoutNone.filter((addonId) => addonId !== event.addonId)
              : [...addonsWithoutNone, event.addonId];

            return updateContext(context, { addons: updatedAddons }, "addons");
          }),
        },

        SUBMIT_EMAIL: {
          guard: ({ context }) => context.currentStep === "email",
          actions: assign(({ context, event }) =>
            updateContext(context, { email: event.email }, "phone"),
          ),
        },

        SUBMIT_PHONE: {
          guard: ({ context }) => context.currentStep === "phone",
          actions: assign(({ context, event }) =>
            updateContext(context, { phone: event.phone }, "duration"),
          ),
        },

        CONFIRM_ADDONS: {
          guard: ({ context }) => context.currentStep === "addons",
          actions: assign(({ context }) =>
            updateContext(context, {}, "pickup"),
          ),
        },

        SUBMIT_CONTACT: {
          guard: ({ context }) => context.currentStep === "contact",
          actions: assign(({ context, event }) =>
            updateContext(
              context,
              {
                name: event.name,
                phone: event.phone,
                email: event.email,
                notes: event.notes,
              },
              "summary",
            ),
          ),
        },

        SUBMIT: {
          guard: ({ context }) => context.currentStep === "summary",
          actions: assign(({ context }) =>
            updateContext(context, {}, "submitted"),
          ),
        },

        BACK: {
          guard: ({ context }) =>
            context.currentStep !== "occasion" &&
            context.currentStep !== "submitted",
          actions: assign(({ context }) =>
            updateContext(context, {}, previousStep(context.currentStep)),
          ),
        },

        RESET: {
          actions: assign(() => createContext()),
        },

        RESTORE: {
          actions: assign(({ event }) =>
            createContext(event.selections, event.currentStep),
          ),
        },
      },
    },
  },
});
