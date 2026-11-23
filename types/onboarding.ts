import type { QueueMode } from "@/types/workspace/queue";

export type ResumeEntry = { title: string; detail: string };

/** What the resume parser extracts — confirmed by the student on step 2. */
export type ParsedResume = {
  summary: { label: string; found: string }[];
  education: ResumeEntry;
  experience: ResumeEntry;
  projects: ResumeEntry[];
  skills: string[];
};

export type JobType = "intern" | "grad" | "both";
export type VisaStatus = "cpt" | "opt" | "stem" | "none";
export type DailyCap = 5 | 10 | 25;
export type QuietHours = "off" | "classes";

/** Everything the guided setup collects. */
export type OnboardingAnswers = {
  excludedSkills: string[];
  roles: string[];
  jobType: JobType;
  locations: string[];
  visa: VisaStatus;
  sponsorOnly: boolean;
  hideClearance: boolean;
  mode: QueueMode;
  dailyCap: DailyCap;
  quietHours: QuietHours;
};
