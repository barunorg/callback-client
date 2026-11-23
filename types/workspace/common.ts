export type StatusTone = "green" | "blue" | "amber" | "red" | "neutral";
export type TimelineState = "done" | "current" | "pending";

export type TimelineEntry = {
  state: TimelineState;
  label: string;
  detail: string;
  time: string;
};
