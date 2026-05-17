import { useState } from "react";
import { ArrowRight, Briefcase, CheckCircle2, Loader2, Rocket } from "lucide-react";
import { submitLead } from "@/lib/submit-lead";

const PROGRAM_OPTIONS = [
  "Data Science",
  "Information Technology",
  "Customer Relationship Management",
] as const;

const inputClass =
  "mt-1.5 w-full bg-white/[0.04] border border-white/10 focus:border-[var(--gold)]/60 outline-none rounded-md px-4 py-3 text-sm transition disabled:opacity-60";

type FormStatus = "idle" | "loading" | "success" | "error";

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      {children}
    </div>
  );
}

export function LeadForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [programInterest, setProgramInterest] = useState<string>(PROGRAM_OPTIONS[0]);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      await submitLead({ fullName, email, phone, programInterest });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border-hairline bg-card/60 p-8 shadow-premium">
        <SuccessCardContent />
      </div>
    );
  }

  const loading = status === "loading";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border-hairline bg-card/60 p-8 shadow-premium"
    >
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--gold)] mb-3">
        <Rocket className="h-3.5 w-3.5" /> Lead Intake
      </div>
      <h3 className="text-2xl font-bold">Start your application</h3>
      <p className="text-sm text-muted-foreground mt-2">
        A program lead will reach you within 24 hours.
      </p>

      {status === "error" && (
        <div
          role="alert"
          className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
        >
          {errorMessage}
        </div>
      )}

      <div className="mt-6 space-y-4">
        <FormField label="Full Name">
          <input
            required
            type="text"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Your full name"
            disabled={loading}
            className={inputClass}
          />
        </FormField>

        <FormField label="Email">
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            disabled={loading}
            className={inputClass}
          />
        </FormField>

        <FormField label="Phone">
          <input
            required
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 90000 00000"
            disabled={loading}
            className={inputClass}
          />
        </FormField>

        <FormField label="Program Interest">
          <select
            name="programInterest"
            value={programInterest}
            onChange={(e) => setProgramInterest(e.target.value)}
            disabled={loading}
            className={inputClass}
          >
            {PROGRAM_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormField>

        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-gradient-to-r from-[var(--gold)] to-[var(--gold-bright)] text-[var(--navy-deep)] font-bold shadow-gold mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting…
            </>
          ) : (
            <>
              Submit Application <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>

        <p className="text-[11px] text-muted-foreground text-center">
          <Briefcase className="h-3 w-3 inline mr-1" />
          By applying you consent to a structured diagnostic interview.
        </p>
      </div>
    </form>
  );
}

function SuccessCardContent() {
  return (
    <>
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--gold)] mb-3">
        <Rocket className="h-3.5 w-3.5" /> Lead Intake
      </div>
      <h3 className="text-2xl font-bold">Start your application</h3>
      <div className="mt-8 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/30 p-6 text-center">
        <CheckCircle2 className="h-10 w-10 text-[var(--gold)] mx-auto mb-3" />
        <h4 className="font-bold text-lg">Application received.</h4>
        <p className="text-sm text-muted-foreground mt-1">
          Watch your inbox for the diagnostic invite.
        </p>
      </div>
    </>
  );
}
