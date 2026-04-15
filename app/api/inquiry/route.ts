import { NextResponse } from "next/server";
import {
  normalizeInquiryPayload,
  validateInquiryPayload,
} from "@/lib/inquiry";
import { sendInquiryEmail } from "@/lib/inquiry-server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = normalizeInquiryPayload(body);
    const validationError = validateInquiryPayload(payload);

    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 },
      );
    }

    console.log("Landing page inquiry received", payload);
    await sendInquiryEmail(payload);

    return NextResponse.json({
      success: true,
      message: "Cererea a fost trimisa. Revenim curand cu o oferta.",
    });
  } catch (error) {
    console.error("Inquiry submission failed", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Cererea nu a putut fi trimisa acum.",
      },
      { status: 500 },
    );
  }
}
