import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "./privacy";

export const Route = createFileRoute("/code-of-conduct")({
  head: () => ({ meta: [{ title: "Code of Conduct — Lotlite" }, { name: "description", content: "Standards every Lotlite operator upholds." }] }),
  component: () => <LegalPage title="Code of Conduct" intro="Lotlite is a high-trust, high-performance environment. Every operator agrees to these standards." />,
});
