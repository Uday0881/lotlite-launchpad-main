export type LeadSubmission = {
  fullName: string;
  email: string;
  phone: string;
  programInterest: string;
  source?: string;
};

type SheetResponse = {
  success: boolean;
  error?: string;
};

export async function submitLead(data: LeadSubmission): Promise<void> {
  const url = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  if (!url) {
    throw new Error(
      "Form is not configured yet. Add VITE_GOOGLE_SCRIPT_URL to your .env file.",
    );
  }

  const response = await fetch(url, {
    method: "POST",
    // text/plain avoids a CORS preflight; Apps Script still receives JSON in the body
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      ...data,
      source: data.source ?? "homepage",
      submittedAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error(`Server responded with ${response.status}. Please try again.`);
  }

  let result: SheetResponse;
  try {
    result = (await response.json()) as SheetResponse;
  } catch {
    throw new Error("Unexpected response from the server. Please try again.");
  }

  if (!result.success) {
    throw new Error(result.error ?? "Submission failed. Please try again.");
  }
}
