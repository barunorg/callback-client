import type {
  DailyCap,
  JobType,
  OnboardingAnswers,
  QuietHours,
  VisaStatus,
} from "@/types/onboarding";
import type { QueueMode } from "@/types/workspace/queue";

/** Eyebrow labels for the five steps ("STEP 1 OF 5 — RESUME"). */
export const STEP_LABELS = [
  "RESUME",
  "CONFIRM",
  "TARGETS",
  "WORK AUTHORIZATION",
  "CONTROL",
] as const;

/** What the resume parser reports on, in order. */
export const PARSE_STEP_LABELS = [
  "Contact, links & portfolio",
  "Education",
  "Experience",
  "Projects",
  "Skills",
];

export const ROLE_OPTIONS = [
  "Data Engineer",
  "Backend SWE",
  "ML Engineer / Intern",
  "Data Analyst",
  "Platform Engineer",
  "Full-Stack SWE",
];

export const LOCATION_OPTIONS = [
  "Austin, TX",
  "Remote (US)",
  "Dallas, TX",
  "Bay Area",
  "NYC",
  "Open to relocate",
];

export const JOB_TYPE_OPTIONS: { value: JobType; label: string }[] = [
  { value: "intern", label: "Internships" },
  { value: "grad", label: "New grad" },
  { value: "both", label: "Both" },
];

export const VISA_OPTIONS: {
  value: VisaStatus;
  title: string;
  description: string;
}[] = [
  {
    value: "cpt",
    title: "F-1 — CPT eligible now",
    description: "Internships during study, starting immediately.",
  },
  {
    value: "opt",
    title: "F-1 — OPT from graduation",
    description: "Full-time roles starting May 2027.",
  },
  {
    value: "stem",
    title: "STEM OPT extension",
    description: "Already working, 24-month extension window.",
  },
  {
    value: "none",
    title: "No visa constraints",
    description: "Citizen, PR, or otherwise fully authorized.",
  },
];

export const MODE_OPTIONS: {
  value: QueueMode;
  title: string;
  description: string;
  tag?: { label: string; tone: "green" | "dark" };
}[] = [
  {
    value: "each",
    title: "Approve each application",
    description:
      "Every send waits for your OK. Recommended for your first week — you’ll see exactly how it writes.",
    tag: { label: "RECOMMENDED", tone: "green" },
  },
  {
    value: "batch",
    title: "Daily batch review",
    description:
      "One notification at 6pm — review the day’s batch in ~5 minutes, approve in one tap.",
  },
  {
    value: "auto",
    title: "Agent mode",
    description:
      "Auto-applies where predicted callback chance is highest, within your rules. Unlocks with Pro.",
    tag: { label: "PRO", tone: "dark" },
  },
];

export const DAILY_CAP_OPTIONS: { value: DailyCap; label: string }[] = [
  { value: 5, label: "5 / day" },
  { value: 10, label: "10 / day" },
  { value: 25, label: "25 / day" },
];

export const DAILY_CAP_NOTES: Record<DailyCap, string> = {
  5: "Included free. Quality beats volume early on.",
  10: "10/day needs Pro — $9/mo when you’re ready.",
  25: "25/day needs Pro — $9/mo when you’re ready.",
};

export const QUIET_HOURS_OPTIONS: { value: QuietHours; label: string }[] = [
  { value: "off", label: "Off" },
  { value: "classes", label: "Class hours · 9–3" },
];

/** The first sweep's progress lines and what each one found. */
export const FIRST_SCAN_STEPS: {
  label: string;
  result: string;
  tone: "neutral" | "red" | "green";
}[] = [
  {
    label: "University career portal",
    result: "214 postings",
    tone: "neutral",
  },
  {
    label: "Greenhouse & Lever boards",
    result: "1,722 postings",
    tone: "neutral",
  },
  { label: "Company careers pages", result: "3,911 postings", tone: "neutral" },
  {
    label: "Matching against your profile",
    result: "162 candidates",
    tone: "neutral",
  },
  {
    label: "Ghost shield — screening companies",
    result: "41 removed",
    tone: "red",
  },
  { label: "Tailoring top drafts", result: "3 ready", tone: "green" },
];

/** Pre-selected from the parsed resume (see the design's defaults). */
export const DEFAULT_ANSWERS: OnboardingAnswers = {
  excludedSkills: [],
  roles: ["Data Engineer", "Backend SWE", "ML Engineer / Intern"],
  jobType: "both",
  locations: ["Austin, TX", "Remote (US)", "Open to relocate"],
  visa: "cpt",
  sponsorOnly: true,
  hideClearance: true,
  mode: "each",
  dailyCap: 5,
  quietHours: "classes",
};
