"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  inquiryEventTypeLabels,
  type InquiryPayload,
} from "@/lib/inquiry";

const initialValues: InquiryPayload = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  quantity: "",
  eventDate: "",
  details: "",
};

export function PricingInquiryForm() {
  const [values, setValues] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function updateField<K extends keyof InquiryPayload>(field: K, value: InquiryPayload[K]) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    setError(null);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        setError(result.error ?? "Cererea nu a putut fi trimisă.");
        return;
      }

      setMessage(result.message ?? "Cererea a fost trimisă.");
      setValues(initialValues);
    } catch {
      setError("A apărut o problemă la trimitere. Încearcă din nou.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
      <label className="grid gap-2 sm:col-span-1">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-paper/62">
          Nume
        </span>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={(event) => updateField("name", event.target.value)}
          placeholder="Numele tau"
          required
          className="h-12 rounded-2xl border border-white/12 bg-white/8 px-4 text-sm text-paper placeholder:text-paper/36 outline-none transition focus:border-white/24 focus:bg-white/10"
        />
      </label>

      <label className="grid gap-2 sm:col-span-1">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-paper/62">
          Email
        </span>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={(event) => updateField("email", event.target.value)}
          placeholder="email@exemplu.ro"
          required
          className="h-12 rounded-2xl border border-white/12 bg-white/8 px-4 text-sm text-paper placeholder:text-paper/36 outline-none transition focus:border-white/24 focus:bg-white/10"
        />
      </label>

      <label className="grid gap-2 sm:col-span-1">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-paper/62">
          Telefon
        </span>
        <input
          type="tel"
          name="phone"
          value={values.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          placeholder="07xx xxx xxx"
          required
          className="h-12 rounded-2xl border border-white/12 bg-white/8 px-4 text-sm text-paper placeholder:text-paper/36 outline-none transition focus:border-white/24 focus:bg-white/10"
        />
      </label>

      <label className="grid gap-2 sm:col-span-1">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-paper/62">
          Tip eveniment
        </span>
        <select
          name="eventType"
          value={values.eventType}
          onChange={(event) => updateField("eventType", event.target.value)}
          required
          className="h-12 rounded-2xl border border-white/12 bg-white/8 px-4 text-sm text-paper outline-none transition focus:border-white/24 focus:bg-white/10"
        >
          <option value="" disabled className="text-ink">
            Alege evenimentul
          </option>
          {Object.entries(inquiryEventTypeLabels).map(([value, label]) => (
            <option key={value} value={value} className="text-ink">
              {label}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-2 sm:col-span-1">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-paper/62">
          Numar exemplare
        </span>
        <input
          type="text"
          name="quantity"
          value={values.quantity}
          onChange={(event) => updateField("quantity", event.target.value)}
          placeholder="Ex: 25"
          required
          className="h-12 rounded-2xl border border-white/12 bg-white/8 px-4 text-sm text-paper placeholder:text-paper/36 outline-none transition focus:border-white/24 focus:bg-white/10"
        />
      </label>

      <label className="grid gap-2 sm:col-span-1">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-paper/62">
          Data evenimentului
        </span>
        <input
          type="text"
          name="eventDate"
          value={values.eventDate}
          onChange={(event) => updateField("eventDate", event.target.value)}
          placeholder="Ex: 14 august 2026"
          required
          className="h-12 rounded-2xl border border-white/12 bg-white/8 px-4 text-sm text-paper placeholder:text-paper/36 outline-none transition focus:border-white/24 focus:bg-white/10"
        />
      </label>

      <label className="grid gap-2 sm:col-span-2">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-paper/62">
          Detalii
        </span>
        <textarea
          name="details"
          rows={5}
          value={values.details}
          onChange={(event) => updateField("details", event.target.value)}
          placeholder="Spune-ne pe scurt ce iti doresti, pentru cine este revista si orice alte detalii importante."
          required
          className="min-h-32 rounded-[1.6rem] border border-white/12 bg-white/8 px-4 py-3 text-sm text-paper placeholder:text-paper/36 outline-none transition focus:border-white/24 focus:bg-white/10"
        />
      </label>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-md text-sm leading-7">
          {error ? (
            <p className="text-[#f7c8c8]">{error}</p>
          ) : message ? (
            <p className="text-[#d7f0cb]">{message}</p>
          ) : (
            <p className="text-paper/56">
              Cererea ajunge direct în Google Sheets și trimite și notificare pe email.
            </p>
          )}
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-paper px-7 text-olive-deep shadow-[0_12px_30px_rgba(255,250,244,0.12)] hover:bg-white disabled:opacity-70"
        >
          {isSubmitting ? "Se trimite..." : "Trimite cererea"}
        </Button>
      </div>
    </form>
  );
}
