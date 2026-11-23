import type { QueueJob } from "@/types/workspace/queue";

export const queueFixture: QueueJob[] = [
  {
    id: 1,
    role: "Junior Data Engineer",
    company: "Datavine",
    match: "92%",
    channel: "direct email",
    deadline: "Closes in 31h — send soon",
    isUrgent: true,
    callbackChance: "31%",
    callbackNote: "top 8% of your matches this month",
    email: "sarah.kim@datavine.io",
    emailNote: "found on company site, verified",
    verify:
      "datavine.io active since 2016, careers page live, 12 employees on LinkedIn posted this month.",
    message:
      "Hi Sarah,\n\nI’m Prakash, an MSc CS student at UT Austin (F-1, OPT-eligible May 2027). Your Junior Data Engineer opening caught my eye because I built almost exactly your stack in my capstone — an Airflow pipeline moving 2M events/day into BigQuery.\n\nI’ve attached a resume tailored to the role. I’d love 15 minutes to show you the pipeline.\n\nBest,\nPrakash",
    enhancedMessage:
      "Hi Sarah,\n\nYour Junior Data Engineer posting reads like my capstone’s job description: I built an Airflow pipeline moving 2M events/day into BigQuery, with dbt tests and cost monitoring.\n\nTwo things I’d bring to Datavine:\n• Pipelines that don’t page anyone at 3am — mine ran 94 days without a failed DAG\n• Documentation your next hire will thank you for\n\nI’m an MSc CS student at UT Austin (F-1, OPT from May 2027). Could I have 15 minutes this week to walk you through the pipeline?\n\n— Prakash",
    changes: [
      "Moved “Distributed Data Pipelines” capstone to top of projects",
      "Added Airflow + dbt keywords matching the JD",
      "Reworded internship bullet to quantify: “cut ETL runtime 40%”",
      "Trimmed unrelated web-dev project to one line",
    ],
    edits: [
      {
        kind: "REORDER",
        before:
          "Projects: ① Personal website ② Distributed Data Pipelines (capstone)",
        after:
          "Projects: ① Distributed Data Pipelines (capstone) ② Personal website",
      },
      {
        kind: "ADD",
        before: "Built ETL pipeline moving 2M events/day into BigQuery",
        after:
          "Built Airflow ETL (dbt-tested) moving 2M events/day into BigQuery",
      },
      {
        kind: "REWORD",
        before: "Improved ETL performance during internship",
        after: "Cut ETL runtime 40% (35→21 min) across 12 daily jobs",
      },
      {
        kind: "TRIM",
        before: "Personal website — 3 bullets on stack and design choices",
        after: "Personal site — Next.js, 5k monthly visits (one line)",
      },
    ],
    keywords: {
      matched: 8,
      total: 11,
      missing: ["Kafka Streams", "Terraform", "Looker"],
    },
  },
  {
    id: 2,
    role: "Software Engineer, New Grad",
    company: "Harborlight",
    match: "89%",
    channel: "careers portal",
    deadline: "Closes Jul 9",
    isUrgent: false,
    callbackChance: "22%",
    callbackNote: "fresh posting + named team in JD",
    email: "careers@harborlight.com",
    emailNote: "company careers inbox",
    verify: "harborlight.com verified, YC-backed, posting is 4 days old.",
    message:
      "Hi Harborlight team,\n\nI’m applying for the New Grad SWE role. My distributed-systems coursework and Go side projects map closely to your backend team’s stack…",
    changes: [
      "Surfaced Go microservices project first",
      "Matched JD phrasing: “event-driven architecture”",
      "Added GPA (3.9) — JD requests it",
    ],
    edits: [
      {
        kind: "REORDER",
        before: "Projects: ① Data pipelines ② Go microservices scheduler",
        after: "Projects: ① Go microservices scheduler ② Data pipelines",
      },
      {
        kind: "REWORD",
        before: "Built services that communicate via APIs",
        after: "Event-driven microservices (gRPC) — mirrors their JD phrasing",
      },
      {
        kind: "ADD",
        before: "Education: MSc CS, UT Austin",
        after: "Education: MSc CS, UT Austin — GPA 3.9 (JD requests it)",
      },
    ],
    keywords: { matched: 6, total: 8, missing: ["Kubernetes", "Terraform"] },
    screening: [
      {
        question: "Are you legally authorized to work in the US?",
        answer: "Yes — F-1, CPT now, OPT from May 2027",
      },
      {
        question: "Will you now or in the future require sponsorship?",
        answer: "Yes — H-1B in 2027",
        flag: "this employer sponsors — safe",
      },
      {
        question: "Years of experience with Go?",
        answer: "2 (from your resume)",
      },
      {
        question: "Earliest start date?",
        answer: "May 2027 (post-graduation)",
      },
    ],
    warmPath: {
      name: "Maya",
      line: "Maya Torres — UT Austin CS ’24, SWE at Harborlight. You share 3 connections",
      email: "maya.t@harborlight.com",
      note: "alumni referral path · found via LinkedIn",
      message:
        "Hi Maya,\n\nFellow Longhorn here — I’m finishing my MSc CS at UT Austin (’27). I saw Harborlight is hiring a New Grad SWE, and the stack looks a lot like my Go microservices project (gRPC, event-driven, on Fly.io).\n\nWould you be open to referring me, or a quick 10-minute chat about the team first? Happy to send my tailored resume — whatever’s easiest.\n\nThanks either way!\nPrakash",
    },
  },
  {
    id: 3,
    role: "ML Engineering Intern",
    company: "Cortexa Labs",
    match: "87%",
    channel: "direct email",
    deadline: "Closes Jul 14",
    isUrgent: false,
    callbackChance: "26%",
    callbackNote: "this recruiter replied to 2 candidates this month",
    email: "j.alvarez@cortexalabs.ai",
    emailNote: "recruiter, found via team page",
    verify:
      "cortexalabs.ai verified, 3 active postings, recruiter replied to 2 candidates this month.",
    message:
      "Hi Jordan,\n\nYour ML Engineering internship aligns with my thesis work on efficient fine-tuning…",
    changes: [
      "Led with PyTorch fine-tuning thesis",
      "Added CUDA keyword from JD",
      "Cut coursework section by half",
    ],
    edits: [
      {
        kind: "REORDER",
        before: "Thesis listed under Education",
        after: "LoRA fine-tuning thesis (−38% GPU hours) leads Projects",
      },
      {
        kind: "ADD",
        before: "GPU optimization experience",
        after: "CUDA + mixed-precision keywords added (both in JD)",
      },
      {
        kind: "TRIM",
        before: "Coursework: 9 courses listed",
        after: "Coursework: the 4 most relevant to ML systems",
      },
    ],
    keywords: { matched: 5, total: 7, missing: ["Triton", "JAX"] },
  },
];
