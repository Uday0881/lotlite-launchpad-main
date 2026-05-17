import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/site/ProgramPage";

export const Route = createFileRoute("/programs/information-technology")({
  head: () => ({
    meta: [
      { title: "PG Program in IT for PropTech Systems — Lotlite" },
      { name: "description", content: "Master cloud architectures, UML software engineering, and enterprise databases for the PropTech stack." },
    ],
  }),
  component: () => (
    <ProgramPage
      theme="it"
      heroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&auto=format&fit=crop"
      eyebrow="The Infrastructure Stack"
      title="Post Graduate Program in Information Technology for PropTech Systems"
      subtitle="Master smart cloud architectures, software engineering with UML, and enterprise database systems driving the future of real estate tech infrastructures."
      ctaLabel="Apply to IT Cohort"
      semesters={[
        { name: "IT Foundations", courses: ["Principles and Practices of Management", "Business Communication", "Information Technology Concepts", "Database Management Systems", "Algorithms and Programming Concepts"] },
        { name: "Engineering Practice", courses: ["Business Requirement Analysis", "Project Management (IT)", "Business Process Modeling", "Software Engineering with UML", "Software Testing & Agile Methodology"] },
        { name: "Intelligence & Security", courses: ["Software Quality Management", "Introduction to Data Science", "Machine Learning and AI", "E-Business", "Information Security Management", "Software Documentation"] },
        { name: "Enterprise & Cloud", courses: ["Latest Trends in IT", "Business Applications and ERP", "Cloud Computing", "Enterprise Infrastructure Capstone Project"] },
      ]}
    />
  ),
});
