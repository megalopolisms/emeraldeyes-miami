"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ChatWidget from "@/components/chat/ChatWidget";
import { BUSINESS, OCCASION_OPTIONS } from "@/lib/constants";
import { submitInquiry } from "@/lib/submit-inquiry";

const inquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(7, "Phone number is required"),
  email: z.string().email("Valid email required"),
  date: z.string().optional(),
  groupSize: z.string().optional(),
  charterType: z.string().optional(),
  occasion: z.string().optional(),
  budget: z.string().optional(),
  pickup: z.string().optional(),
  notes: z.string().optional(),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

interface BookPageClientProps {
  initialOccasion?: string;
}

export default function BookPageClient({
  initialOccasion,
}: BookPageClientProps) {
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const prefilledOccasion = OCCASION_OPTIONS.some(
    (option) => option.id === initialOccasion,
  )
    ? initialOccasion
    : undefined;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      charterType: prefilledOccasion ?? "",
    },
  });

  async function onSubmit(data: InquiryFormData) {
    setSubmitError(null);

    try {
      await submitInquiry({
        selections: {
          occasion: data.occasion || data.charterType || null,
          groupSize: data.groupSize || null,
          date: data.date || null,
          duration: null,
          addons: [],
          pickup: data.pickup || null,
          name: data.name,
          phone: data.phone,
          email: data.email,
          notes:
            [
              data.budget ? `Budget: ${data.budget}` : null,
              data.notes || null,
            ]
              .filter(Boolean)
              .join(" | ") || "",
        },
        estimate: {
          low: 0,
          high: 0,
          breakdown: { base: 0, addons: 0, transport: 0, premium: 0 },
        },
        source: "/book",
        submittedAt: new Date().toISOString(),
      });

      setFormSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to send your inquiry right now.",
      );
    }
  }

  return (
    <main>
      <section className="relative flex items-center justify-center min-h-[40vh] px-6 py-28 bg-gradient-to-b from-[--color-navy] to-[--color-navy-light]">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl text-white mb-4">
            Book Your Charter
          </h1>
          <p className="text-xl text-white/70">
            Build your itinerary now or send us the essentials and we&apos;ll
            follow up fast.
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-white/10 bg-[--color-navy-light] overflow-hidden min-h-[720px]">
            <ChatWidget
              mode="panel"
              initialSelections={
                prefilledOccasion
                  ? {
                      occasion: prefilledOccasion,
                    }
                  : undefined
              }
            />
          </div>

          <div className="rounded-2xl border border-white/10 bg-[--color-navy-light] p-6">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white">
              Prefer a form?
            </h2>
            <p className="mt-3 text-white/60">
              Use the planner for the fastest route. If you already know the
              basics, the form works too.
            </p>

            {!showForm && !formSubmitted && (
              <Button
                type="button"
                onClick={() => setShowForm(true)}
                variant="secondary"
                className="mt-6"
              >
                Open the form
              </Button>
            )}

            {formSubmitted && (
              <div className="mt-8 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[--color-emerald]">
                  Inquiry Sent
                </p>
                <p className="mt-3 text-white/75">
                  We&apos;ll confirm within {BUSINESS.responseTime}. If your
                  charter is urgent, reach out on Instagram as well.
                </p>
              </div>
            )}

            {showForm && !formSubmitted && (
              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                <div>
                  <label className="block text-white/60 text-sm mb-1">
                    Name *
                  </label>
                  <input
                    {...register("name")}
                    className="w-full rounded-lg bg-[--color-navy] border border-white/20 px-4 py-3 text-white placeholder-white/30 focus:border-[--color-emerald] focus:outline-none"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-rose-400 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-1">
                    Phone *
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className="w-full rounded-lg bg-[--color-navy] border border-white/20 px-4 py-3 text-white placeholder-white/30 focus:border-[--color-emerald] focus:outline-none"
                    placeholder="(305) 555-0100"
                  />
                  {errors.phone && (
                    <p className="text-rose-400 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-1">
                    Email *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full rounded-lg bg-[--color-navy] border border-white/20 px-4 py-3 text-white placeholder-white/30 focus:border-[--color-emerald] focus:outline-none"
                    placeholder="you@email.com"
                  />
                  {errors.email && (
                    <p className="text-rose-400 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-1">
                    Preferred Date
                  </label>
                  <input
                    {...register("date")}
                    type="date"
                    className="w-full rounded-lg bg-[--color-navy] border border-white/20 px-4 py-3 text-white focus:border-[--color-emerald] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-1">
                    Group Size
                  </label>
                  <input
                    {...register("groupSize")}
                    className="w-full rounded-lg bg-[--color-navy] border border-white/20 px-4 py-3 text-white placeholder-white/30 focus:border-[--color-emerald] focus:outline-none"
                    placeholder="e.g. 8 people"
                  />
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-1">
                    Charter Type
                  </label>
                  <select
                    {...register("charterType")}
                    className="w-full rounded-lg bg-[--color-navy] border border-white/20 px-4 py-3 text-white focus:border-[--color-emerald] focus:outline-none"
                  >
                    <option value="">Select an experience...</option>
                    {OCCASION_OPTIONS.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-1">
                    Occasion
                  </label>
                  <input
                    {...register("occasion")}
                    className="w-full rounded-lg bg-[--color-navy] border border-white/20 px-4 py-3 text-white placeholder-white/30 focus:border-[--color-emerald] focus:outline-none"
                    placeholder="Birthday, proposal, just because..."
                  />
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-1">
                    Budget Range
                  </label>
                  <select
                    {...register("budget")}
                    className="w-full rounded-lg bg-[--color-navy] border border-white/20 px-4 py-3 text-white focus:border-[--color-emerald] focus:outline-none"
                  >
                    <option value="">Select...</option>
                    <option value="2000-3500">$2,000 - $3,500</option>
                    <option value="3500-5000">$3,500 - $5,000</option>
                    <option value="5000-8000">$5,000 - $8,000</option>
                    <option value="8000+">$8,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-1">
                    Pickup Location
                  </label>
                  <input
                    {...register("pickup")}
                    className="w-full rounded-lg bg-[--color-navy] border border-white/20 px-4 py-3 text-white placeholder-white/30 focus:border-[--color-emerald] focus:outline-none"
                    placeholder="South Beach, Brickell, Downtown..."
                  />
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-1">
                    Anything else?
                  </label>
                  <textarea
                    {...register("notes")}
                    rows={3}
                    className="w-full rounded-lg bg-[--color-navy] border border-white/20 px-4 py-3 text-white placeholder-white/30 focus:border-[--color-emerald] focus:outline-none resize-none"
                    placeholder="Special requests, dietary needs, vision for the day..."
                  />
                </div>

                {submitError && (
                  <p className="text-sm text-rose-300">{submitError}</p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-[--color-gold]">
            Other Ways to Reach Us
          </h2>
          <div className="space-y-2 text-white/60">
            {BUSINESS.phone && (
              <p>
                Phone:{" "}
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="text-[--color-emerald] hover:underline"
                >
                  {BUSINESS.phone}
                </a>
              </p>
            )}
            {BUSINESS.email && (
              <p>
                Email:{" "}
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-[--color-emerald] hover:underline"
                >
                  {BUSINESS.email}
                </a>
              </p>
            )}
            <p>
              Instagram:{" "}
              <a
                href="https://instagram.com/EmeraldEyesMiami"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[--color-emerald] hover:underline"
              >
                {BUSINESS.instagram}
              </a>
            </p>
            <p className="text-white/40 text-sm mt-4">
              We respond within {BUSINESS.responseTime}.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
