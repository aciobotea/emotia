import nodemailer from "nodemailer";
import {
  getEventTypeLabel,
  type InquiryPayload,
} from "@/lib/inquiry";

const SMTP_USER = "email";
const SMTP_APP_PASSWORD = "appPass";
const INQUIRY_NOTIFICATION_TO = "lucy_baciu_2006@yahoo.com";
const INQUIRY_NOTIFICATION_FROM = `"Emotia" <${SMTP_USER}>`;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SMTP_USER,
    pass: SMTP_APP_PASSWORD,
  },
});

function buildInquiryText(payload: InquiryPayload) {
  return [
    "A intrat o noua cerere de oferta.",
    "",
    `Nume: ${payload.name}`,
    `Email: ${payload.email}`,
    `Telefon: ${payload.phone}`,
    `Tip eveniment: ${getEventTypeLabel(payload.eventType)}`,
    `Numar exemplare: ${payload.quantity}`,
    `Data evenimentului: ${payload.eventDate}`,
    "",
    "Detalii:",
    payload.details,
  ].join("\n");
}

function buildInquiryHtml(payload: InquiryPayload) {
  return `
    <h2>Cerere noua de oferta</h2>
    <p><strong>Nume:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Telefon:</strong> ${payload.phone}</p>
    <p><strong>Tip eveniment:</strong> ${getEventTypeLabel(payload.eventType)}</p>
    <p><strong>Numar exemplare:</strong> ${payload.quantity}</p>
    <p><strong>Data evenimentului:</strong> ${payload.eventDate}</p>
    <p><strong>Detalii:</strong></p>
    <p>${payload.details.replace(/\n/g, "<br />")}</p>
  `;
}

export async function sendInquiryEmail(payload: InquiryPayload) {
  await transporter.sendMail({
    from: INQUIRY_NOTIFICATION_FROM,
    to: INQUIRY_NOTIFICATION_TO,
    replyTo: payload.email,
    subject: `Cerere noua de oferta - ${payload.name}`,
    text: buildInquiryText(payload),
    html: buildInquiryHtml(payload),
  });
}
