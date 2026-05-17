import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/site/ProgramPage";

export const Route = createFileRoute("/programs/data-science")({
  head: () => ({
    meta: [
      { title: "PG Program in Data Science — Lotlite School of Real Estate" },
      { name: "description", content: "Predictive modeling, big data, and spatial structures applied to automated property valuation." },
    ],
  }),
  component: () => (
    <ProgramPage
      theme="ds"
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop"
      eyebrow="The Analytics Engine"
      title="Post Graduate Program in Data Science for Real Estate Analytics"
      subtitle="Leverage predictive modeling, big data warehousing, and spatial data structures to automate property valuations and forecast regional growth trends."
      ctaLabel="Apply to Data Science Cohort"
      semesters={[
        { name: "Foundations", courses: ["Basics of Statistics", "Introduction to Data Science", "Data Structures and Algorithms", "Introduction to R Programming"] },
        { name: "Core Engineering", courses: ["Python Programming", "Advanced Statistics", "Big Data with Data Warehousing and Data Mining", "Submission I"] },
        { name: "Applied Intelligence", courses: ["No SQL Database", "Data Visualisation", "Machine Learning with R and Python", "Ethical and Legal Issues in Data Science"] },
        { name: "Capstone & Frontier", courses: ["Emerging Trends in Data Science", "Submission II", "Predictive Land Value Modelling Capstone Project"] },
      ]}
    />
  ),
});
