import type { ParsedResume } from "@/types/onboarding";

export const parsedResumeFixture: ParsedResume = {
  summary: [
    { label: "Contact, links & portfolio", found: "found GitHub + LinkedIn" },
    { label: "Education", found: "MSc CS, UT Austin" },
    { label: "Experience", found: "1 internship" },
    { label: "Projects", found: "3 found" },
    { label: "Skills", found: "14 extracted" },
  ],
  education: {
    title: "MSc Computer Science — UT Austin",
    detail: "Aug 2025 – May 2027 · GPA 3.9 · Distributed Systems focus",
  },
  experience: {
    title: "Data Engineering Intern — Kinship Labs",
    detail: "Summer 2025 · cut ETL runtime 40% · Python, Airflow, BigQuery",
  },
  projects: [
    {
      title: "Distributed Data Pipelines (capstone)",
      detail: "Airflow → BigQuery, 2M events/day, 94 days zero failed DAGs",
    },
    {
      title: "Go microservices — course scheduler",
      detail: "Event-driven, gRPC, deployed on Fly.io",
    },
  ],
  skills: [
    "Python",
    "SQL",
    "Airflow",
    "dbt",
    "BigQuery",
    "Go",
    "PyTorch",
    "Docker",
    "Kubernetes",
    "Spark",
    "Pandas",
    "gRPC",
    "Linux",
    "Git",
  ],
};
