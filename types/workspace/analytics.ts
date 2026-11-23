import type { StatusTone } from "./common";

export type AnalyticsStat = {
  value: string;
  label: string;
  detail: string;
  tone: "green" | "ink" | "red";
};

export type ResponseChannel = {
  label: string;
  rate: string;
  width: string;
  strength: "strong" | "medium" | "weak";
};

export type AutopsyItem = {
  id: string;
  label: string;
  tone: StatusTone;
  finding: string;
  fix: string;
  isApplied: boolean;
};

export type AnalyticsData = {
  periodLabel: string;
  stats: AnalyticsStat[];
  channels: ResponseChannel[];
  insight: string;
  autopsies: AutopsyItem[];
};
