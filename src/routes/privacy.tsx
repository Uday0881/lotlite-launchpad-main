import { createFileRoute } from "@tanstack/react-router";
import { usePageTheme } from "@/hooks/use-page-theme";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — Lotlite" }, { name: "description", content: "How Lotlite handles your data." }] }),
  component: () => <LegalPage title="Privacy Policy" intro="Lotlite School of Real Estate is committed to protecting the privacy of applicants, students, alumni, and partners." />,
});

export function LegalPage({ title, intro }: { title: string; intro: string }) {
  usePageTheme("home");
  return (
    <section className="pt-36 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">Legal</div>
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="mt-5 text-muted-foreground">{intro}</p>
        <div className="prose prose-invert mt-10 space-y-5 text-sm md:text-base text-foreground/85 leading-relaxed">
          <p>This document outlines the standard practices Lotlite follows. For specific requests, contact legal@lotlite.in.</p>
          <p>We collect only the information necessary to evaluate applications, deliver the program, and operate placement and incubation services. Sensitive data is stored encrypted at rest and accessed only by authorized program staff.</p>
          <p>You may request access, correction, or deletion of your personal data at any time by writing to our admissions team. We do not sell personal data to third parties.</p>
          <p>This policy is reviewed annually and updated to reflect changes in regulation or program operations.</p>
        </div>
      </div>
    </section>
  );
}
