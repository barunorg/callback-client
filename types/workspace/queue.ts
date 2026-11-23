export type ResumeEditKind = "REORDER" | "ADD" | "REWORD" | "TRIM";

export type ResumeEdit = {
  kind: ResumeEditKind;
  before: string;
  after: string;
};

export type ScreeningAnswer = {
  question: string;
  answer: string;
  flag?: string;
};

export type WarmPath = {
  name: string;
  line: string;
  email: string;
  note: string;
  message: string;
};

export type QueueJob = {
  id: number;
  role: string;
  company: string;
  match: string;
  channel: string;
  deadline: string;
  isUrgent: boolean;
  callbackChance: string;
  callbackNote: string;
  email: string;
  emailNote: string;
  verify: string;
  message: string;
  enhancedMessage?: string;
  changes: string[];
  edits: ResumeEdit[];
  keywords: { matched: number; total: number; missing: string[] };
  screening?: ScreeningAnswer[];
  warmPath?: WarmPath;
};

export type QueueMode = "each" | "batch" | "auto";
