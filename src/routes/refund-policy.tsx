import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "./privacy";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({ meta: [{ title: "Refund Policy — Lotlite" }, { name: "description", content: "How Lotlite handles fee refunds and withdrawals." }] }),
  component: () => <LegalPage title="Refund Policy" intro="Our refund policy is designed to be transparent and fair to both admitted students and the cohort they join." />,
});
