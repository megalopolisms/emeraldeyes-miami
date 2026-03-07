"use client";

// =============================================================================
// ContactForm — WhatsApp-style inline contact form (i18n)
// =============================================================================

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";

interface ContactFormProps {
  onSubmit: (data: {
    name: string;
    phone: string;
    email: string;
    notes: string;
  }) => void;
  initialValues?: {
    name?: string;
    phone?: string;
    email?: string;
    notes?: string;
  };
  submitLabel?: string;
}

export default function ContactForm({
  onSubmit,
  initialValues,
  submitLabel,
}: ContactFormProps) {
  const { t } = useLanguage();
  const [name, setName] = useState(initialValues?.name ?? "");
  const [phone, setPhone] = useState(initialValues?.phone ?? "");
  const [email, setEmail] = useState(initialValues?.email ?? "");
  const [notes, setNotes] = useState(initialValues?.notes ?? "");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setName(initialValues?.name ?? "");
    setPhone(initialValues?.phone ?? "");
    setEmail(initialValues?.email ?? "");
    setNotes(initialValues?.notes ?? "");
  }, [
    initialValues?.email,
    initialValues?.name,
    initialValues?.notes,
    initialValues?.phone,
  ]);

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = t("form.required");
    if (!phone.trim()) newErrors.phone = t("form.required");
    if (!email.trim().includes("@")) newErrors.email = t("form.validEmail");
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    onSubmit({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      notes: notes.trim(),
    });
  };

  return (
    <div
      className="rounded-lg p-3 space-y-2 animate-bubble-in max-w-xs"
      style={{ backgroundColor: "#1f2c34" }}
    >
      {[
        {
          key: "name",
          type: "text",
          placeholder: t("form.name"),
          value: name,
          set: setName,
        },
        {
          key: "phone",
          type: "tel",
          placeholder: t("form.phone"),
          value: phone,
          set: setPhone,
        },
        {
          key: "email",
          type: "email",
          placeholder: t("form.email"),
          value: email,
          set: setEmail,
        },
      ].map((f) => (
        <div key={f.key}>
          <input
            type={f.type}
            placeholder={f.placeholder}
            value={f.value}
            onChange={(e) => f.set(e.target.value)}
            className="w-full px-3 py-2 rounded-lg text-[13px] text-[#e9edef] border border-white/8 focus:outline-none focus:border-[#2EC4A5] transition-colors placeholder:text-white/25"
            style={{ backgroundColor: "#0b141a" }}
          />
          {errors[f.key] && (
            <p className="text-[10px] mt-0.5 text-red-400">{errors[f.key]}</p>
          )}
        </div>
      ))}
      <textarea
        placeholder={t("form.notes")}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows={2}
        className="w-full px-3 py-2 rounded-lg text-[13px] text-[#e9edef] border border-white/8 focus:outline-none focus:border-[#2EC4A5] transition-colors placeholder:text-white/25 resize-none"
        style={{ backgroundColor: "#0b141a" }}
      />
      <button
        type="button"
        onClick={handleSubmit}
        className="w-full py-2 rounded-lg text-[13px] font-semibold transition-all hover:opacity-90 active:scale-[0.98]"
        style={{ backgroundColor: "#2EC4A5", color: "#fff" }}
      >
        {submitLabel ?? t("chat.continue")}
      </button>
    </div>
  );
}
