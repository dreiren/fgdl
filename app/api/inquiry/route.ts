import { NextResponse } from "next/server";
import { inquiryDuplicateMessage } from "@/lib/inquiry";
import { processInquiry } from "@/lib/process-inquiry";

export async function POST(request: Request) {
  const input = await request.json().catch(() => ({}));
  const result = await processInquiry(input);

  if (result.status === "success") {
    return NextResponse.json({
      ok: true,
      message: result.message,
    });
  }

  const status =
    result.message === inquiryDuplicateMessage
      ? 409
      : result.fieldErrors
        ? 400
        : 502;

  return NextResponse.json(
    {
      ok: false,
      message: result.message,
      fieldErrors: result.fieldErrors,
    },
    { status },
  );
}
