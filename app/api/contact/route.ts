import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/server/storage";
import { sendContactNotification } from "@/server/email";
import { insertContactInquirySchema } from "@/shared/schema";
import { z } from "zod";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const input = insertContactInquirySchema.parse(body);
    const inquiry = await storage.createContactInquiry(input);

    try {
      await sendContactNotification(input);
    } catch (emailErr) {
      console.error("Failed to send contact notification email:", emailErr);
    }

    return NextResponse.json(inquiry, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { message: err.errors[0].message, field: err.errors[0].path.join(".") },
        { status: 400 }
      );
    }
    console.error("Contact API error:", err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
