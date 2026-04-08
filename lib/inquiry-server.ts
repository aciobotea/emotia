import { google } from "googleapis";
import {
  getEventTypeLabel,
  type InquiryPayload,
} from "@/lib/inquiry";

type InquiryEnv = {
  spreadsheetId: string;
  sheetName: string;
  serviceAccountEmail: string;
  serviceAccountPrivateKey: string;
  resendApiKey: string;
  notificationTo: string;
  notificationFrom: string;
};

function getInquiryEnv(): InquiryEnv {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID ?? "";
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME ?? "Cereri";
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ?? "";
  const serviceAccountPrivateKey =
    process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n") ?? "";
  const resendApiKey = process.env.RESEND_API_KEY ?? "";
  const notificationTo = process.env.INQUIRY_NOTIFICATION_TO ?? "";
  const notificationFrom =
    process.env.INQUIRY_NOTIFICATION_FROM ?? "Emotia <onboarding@resend.dev>";

  const missing = [
    !spreadsheetId && "GOOGLE_SHEETS_SPREADSHEET_ID",
    !serviceAccountEmail && "GOOGLE_SERVICE_ACCOUNT_EMAIL",
    !serviceAccountPrivateKey && "GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY",
    !resendApiKey && "RESEND_API_KEY",
    !notificationTo && "INQUIRY_NOTIFICATION_TO",
  ].filter(Boolean);

  if (missing.length > 0) {
    throw new Error(`Lipsesc variabilele de mediu: ${missing.join(", ")}`);
  }

  return {
    spreadsheetId,
    sheetName,
    serviceAccountEmail,
    serviceAccountPrivateKey,
    resendApiKey,
    notificationTo,
    notificationFrom,
  };
}

function formatInquiryTimestamp(date = new Date()) {
  return new Intl.DateTimeFormat("ro-RO", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Bucharest",
  }).format(date);
}

export async function appendInquiryToSheet(payload: InquiryPayload) {
  const env = getInquiryEnv();
  const auth = new google.auth.JWT({
    email: env.serviceAccountEmail,
    key: env.serviceAccountPrivateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: env.spreadsheetId,
    range: `${env.sheetName}!A:H`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          formatInquiryTimestamp(),
          payload.name,
          payload.email,
          payload.phone,
          getEventTypeLabel(payload.eventType),
          payload.quantity,
          payload.eventDate,
          payload.details,
        ],
      ],
    },
  });
}

export async function sendInquiryEmail(payload: InquiryPayload) {
  const env = getInquiryEnv();
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.notificationFrom,
      to: [env.notificationTo],
      reply_to: payload.email,
      subject: `Cerere nouă de ofertă - ${payload.name}`,
      text: [
        "A intrat o nouă cerere de ofertă.",
        "",
        `Nume: ${payload.name}`,
        `Email: ${payload.email}`,
        `Telefon: ${payload.phone}`,
        `Tip eveniment: ${getEventTypeLabel(payload.eventType)}`,
        `Număr exemplare: ${payload.quantity}`,
        `Data evenimentului: ${payload.eventDate}`,
        "",
        "Detalii:",
        payload.details,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Trimiterea emailului a eșuat: ${errorText}`);
  }
}
