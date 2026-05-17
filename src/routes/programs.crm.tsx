import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/site/ProgramPage";

export const Route = createFileRoute("/programs/crm")({
  head: () => ({
    meta: [
      { title: "PG Program in CRM for Real Estate — Lotlite" },
      { name: "description", content: "High-ticket property client acquisition, B2B distribution, and recurring enterprise value via advanced CRM." },
    ],
  }),
  component: () => (
    <ProgramPage
      theme="crm"
      heroImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80&auto=format&fit=crop"
      eyebrow="The Growth & Transaction Hub"
      title="Post Graduate Program in Customer Relationship Management (CRM)"
      subtitle="Transform high-ticket property client acquisition and corporate distribution networks into recurring enterprise value through advanced CRM frameworks."
      ctaLabel="Apply to CRM Cohort"
      semesters={[
        { name: "Marketing Foundations", courses: ["Principles and Practices of Management", "Marketing Management", "Customer Relationship Management", "Consumer Behaviour"] },
        { name: "Advanced CRM Systems", courses: ["Advanced CRM", "Sales and Distribution Management", "Services Marketing", "CRM in Service Industry"] },
        { name: "B2B & Research", courses: ["Business Communication", "B2B Markets and CRM", "Marketing Research", "E-Business"] },
        { name: "Strategy & Capstone", courses: ["Consumer Protection Act 2019", "Strategic Marketing", "Research Methodology", "Live Real Estate CRM Capstone Project"] },
      ]}
    />
  ),
});
