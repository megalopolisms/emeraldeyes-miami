"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";
import { submitInquiry } from "@/lib/submit-inquiry";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setSubmitError(null);

    try {
      await submitInquiry({
        selections: {
          occasion: null,
          groupSize: null,
          date: null,
          duration: null,
          addons: [],
          pickup: null,
          name: data.name,
          phone: data.phone || "",
          email: data.email,
          notes: data.message,
        },
        estimate: {
          low: 0,
          high: 0,
          breakdown: { base: 0, addons: 0, transport: 0, premium: 0 },
        },
        source: "/contact",
        submittedAt: new Date().toISOString(),
      });

      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to send your message right now.",
      );
    }
  }

  return (
    <main>
      <section className="relative flex items-center justify-center min-h-[35vh] px-6 py-24 bg-gradient-to-b from-[--color-navy] to-[--color-navy-light]">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-white/70">
            Questions, planning ideas, or special requests for your charter.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">&#9989;</div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-[--color-gold] mb-2">
                  Message Sent
                </h2>
                <p className="text-white/70">
                  We&apos;ll get back to you within {BUSINESS.responseTime}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-white/60 text-sm mb-1">
                    Name *
                  </label>
                  <input
                    {...register("name")}
                    className="w-full rounded-lg bg-[--color-navy-light] border border-white/20 px-4 py-3 text-white placeholder-white/30 focus:border-[--color-emerald] focus:outline-none"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-rose-400 text-sm mt-1">
                      {errors.name.message}
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
                    className="w-full rounded-lg bg-[--color-navy-light] border border-white/20 px-4 py-3 text-white placeholder-white/30 focus:border-[--color-emerald] focus:outline-none"
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
                    Phone
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className="w-full rounded-lg bg-[--color-navy-light] border border-white/20 px-4 py-3 text-white placeholder-white/30 focus:border-[--color-emerald] focus:outline-none"
                    placeholder="(305) 555-0100"
                  />
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-1">
                    Message *
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className="w-full rounded-lg bg-[--color-navy-light] border border-white/20 px-4 py-3 text-white placeholder-white/30 focus:border-[--color-emerald] focus:outline-none resize-none"
                    placeholder="Tell us what you're planning..."
                  />
                  {errors.message && (
                    <p className="text-rose-400 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
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
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-xl bg-[--color-navy-light] border border-white/10 p-6 space-y-4">
              <h2 className="font-[family-name:var(--font-heading)] text-xl text-[--color-gold]">
                Get in Touch
              </h2>
              {BUSINESS.phone && (
                <div>
                  <p className="text-white/50 text-sm">Phone</p>
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="text-[--color-emerald] hover:underline"
                  >
                    {BUSINESS.phone}
                  </a>
                </div>
              )}
              {BUSINESS.email && (
                <div>
                  <p className="text-white/50 text-sm">Email</p>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="text-[--color-emerald] hover:underline"
                  >
                    {BUSINESS.email}
                  </a>
                </div>
              )}
              <div>
                <p className="text-white/50 text-sm">Instagram</p>
                <a
                  href="https://instagram.com/EmeraldEyesMiami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[--color-emerald] hover:underline"
                >
                  {BUSINESS.instagram}
                </a>
              </div>
            </div>

            <div className="rounded-xl bg-[--color-navy-light] border border-white/10 p-6 space-y-3">
              <h2 className="font-[family-name:var(--font-heading)] text-xl text-[--color-gold]">
                Hours
              </h2>
              <div className="space-y-1 text-white/60 text-sm">
                <p>Monday - Friday: 9am - 8pm</p>
                <p>Saturday - Sunday: 8am - 9pm</p>
                <p className="text-white/40 mt-2">
                  Charters available 7 days a week, sunrise to late night.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-[--color-navy-light] border border-white/10 p-6 space-y-3">
              <h2 className="font-[family-name:var(--font-heading)] text-xl text-[--color-gold]">
                Location
              </h2>
              <p className="text-white/60 text-sm">
                {BUSINESS.location} — Biscayne Bay Area
              </p>
              <p className="text-white/40 text-xs">
                Exact marina details are provided once your charter is being
                scheduled.
              </p>
            </div>

            <div className="text-center">
              <p className="text-white/50 text-sm mb-3">
                Need a charter quote?
              </p>
              <Button href="/book" variant="secondary" size="sm">
                Use the interactive planner
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
