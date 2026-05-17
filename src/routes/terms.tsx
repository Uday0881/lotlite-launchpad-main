import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "./privacy";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms of Service — Lotlite" }, { name: "description", content: "Terms governing use of Lotlite programs and platforms." }] }),
  component: () => <LegalPage title="Terms of Service" intro="By enrolling in or accessing Lotlite programs and digital properties, you agree to the following terms." />,
});
