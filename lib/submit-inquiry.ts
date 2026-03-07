import type { InquiryPayload, InquiryResponse } from "@/lib/types";

export async function submitInquiry(
  payload: InquiryPayload,
): Promise<InquiryResponse> {
  const response = await fetch("/api/inquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => null)) as
    | InquiryResponse
    | null;

  if (!response.ok || !data?.success) {
    throw new Error(data?.error || "Unable to send inquiry right now.");
  }

  return data;
}
