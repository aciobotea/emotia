export type InquiryPayload = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  quantity: string;
  eventDate: string;
  details: string;
};

export const inquiryEventTypeLabels: Record<string, string> = {
  wedding: "Nuntă",
  anniversary: "Aniversare",
  birthday: "Zi de naștere",
  bachelorette: "Bachelorette",
  other: "Alt eveniment",
};

export function normalizeInquiryPayload(input: Partial<InquiryPayload>): InquiryPayload {
  return {
    name: input.name?.trim() ?? "",
    email: input.email?.trim() ?? "",
    phone: input.phone?.trim() ?? "",
    eventType: input.eventType?.trim() ?? "",
    quantity: input.quantity?.trim() ?? "",
    eventDate: input.eventDate?.trim() ?? "",
    details: input.details?.trim() ?? "",
  };
}

export function validateInquiryPayload(payload: InquiryPayload) {
  if (!payload.name) return "Completează numele.";
  if (!payload.email) return "Completează adresa de email.";
  if (!payload.phone) return "Completează numărul de telefon.";
  if (!payload.eventType) return "Alege tipul evenimentului.";
  if (!payload.quantity) return "Completează numărul de exemplare.";
  if (!payload.eventDate) return "Completează data evenimentului.";
  if (!payload.details) return "Adaugă câteva detalii despre cererea ta.";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(payload.email)) {
    return "Adresa de email nu pare validă.";
  }

  return null;
}

export function getEventTypeLabel(eventType: string) {
  return inquiryEventTypeLabels[eventType] ?? eventType;
}
