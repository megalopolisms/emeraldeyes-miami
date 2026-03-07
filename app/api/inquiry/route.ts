// =============================================================================
// EMERALD EYES MIAMI — Inquiry API Route (POST /api/inquiry)
// =============================================================================
// Receives InquiryPayload from the chat widget or booking/contact forms.
// Writes a local backup log when possible and optionally forwards to a webhook.
// =============================================================================

import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";
import type { InquiryPayload, InquiryResponse } from "@/lib/types";

export const runtime = "nodejs";

// ---------------------------------------------------------------------------
// Generate a simple UUID (Phase 1 — no crypto dependency needed)
// ---------------------------------------------------------------------------
function generateId(): string {
  return `inq_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

type DeliveryRecord = InquiryPayload & { id: string };

async function writeLocalBackup(record: DeliveryRecord): Promise<boolean> {
  try {
    const logsDir = path.resolve(process.cwd(), "..", "logs");
    const logFile = path.join(logsDir, "inquiries.ndjson");

    await fs.mkdir(logsDir, { recursive: true });
    await fs.appendFile(logFile, `${JSON.stringify(record)}\n`, "utf8");

    return true;
  } catch (error) {
    console.error("[API /inquiry] Local backup failed:", error);
    return false;
  }
}

async function forwardWebhook(record: DeliveryRecord): Promise<boolean> {
  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;

  if (!webhookUrl) {
    return false;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        "[API /inquiry] Webhook returned non-2xx status:",
        response.status,
      );
      return false;
    }

    return true;
  } catch (error) {
    console.error("[API /inquiry] Webhook delivery failed:", error);
    return false;
  }
}

// ---------------------------------------------------------------------------
// POST /api/inquiry
// ---------------------------------------------------------------------------
export async function POST(
  request: Request,
): Promise<NextResponse<InquiryResponse>> {
  try {
    const body = (await request.json()) as InquiryPayload;

    // -----------------------------------------------------------------------
    // Validate required fields
    // -----------------------------------------------------------------------
    const { selections } = body;

    if (!selections?.name || !selections.name.trim()) {
      return NextResponse.json(
        { success: false, error: "Name is required" },
        { status: 400 },
      );
    }

    const isContactOnly = body.source === "/contact";

    if (!isContactOnly && (!selections?.phone || !selections.phone.trim())) {
      return NextResponse.json(
        { success: false, error: "Phone number is required" },
        { status: 400 },
      );
    }

    if (!selections?.email || !selections.email.trim()) {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 },
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(selections.email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 },
      );
    }

    const id = generateId();
    const record: DeliveryRecord = { ...body, id };

    console.log("=== NEW INQUIRY ===");
    console.log("ID:", id);
    console.log("Name:", selections.name);
    console.log("Phone:", selections.phone);
    console.log("Email:", selections.email);
    console.log("Occasion:", selections.occasion);
    console.log("Group Size:", selections.groupSize);
    console.log("Date:", selections.date);
    console.log("Duration:", selections.duration);
    console.log("Add-ons:", selections.addons);
    console.log("Pickup:", selections.pickup);
    console.log("Notes:", selections.notes);
    console.log("Estimate:", JSON.stringify(body.estimate));
    console.log("Source:", body.source);
    console.log("Submitted At:", body.submittedAt);
    console.log("===================");

    const [savedLocally, webhookForwarded] = await Promise.all([
      writeLocalBackup(record),
      forwardWebhook(record),
    ]);

    if (!savedLocally && !webhookForwarded) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Inquiry capture is not configured yet. Add INQUIRY_WEBHOOK_URL or ensure local logs are writable.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json({ success: true, id }, { status: 200 });
  } catch (error) {
    console.error("[API /inquiry] Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
