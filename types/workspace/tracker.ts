import type { StatusTone, TimelineEntry } from "./common";

export type TrackerCard = {
  id: string;
  role: string;
  company: string;
  age: string;
  note?: string;
  noteTone?: StatusTone;
  stage: string;
  hasPrep: boolean;
  journey: TimelineEntry[];
};

export type TrackerColumn = {
  id: string;
  title: string;
  count: string;
  isHighlighted: boolean;
  cards: TrackerCard[];
};

export type InterviewPrep = {
  company: string;
  meta: string;
  questions: string[];
  stories: { title: string; source: string }[];
  gap: string;
  about: string;
  holdSlotLabel: string;
};
