import type { AnalyticsData } from "@/types/workspace/analytics";

export const analyticsFixture: AnalyticsData = {
  periodLabel: "Last 30 days · 147 applications",
  stats: [
    {
      value: "7.2%",
      label: "Reply rate",
      detail: "vs ~2% average for cold applications",
      tone: "green",
    },
    {
      value: "4.9",
      label: "Applications / day",
      detail: "9 min/day of your time — the free cap is the bottleneck",
      tone: "ink",
    },
    {
      value: "164",
      label: "Ghost jobs avoided",
      detail: "hours of wasted effort you never spent",
      tone: "red",
    },
  ],
  channels: [
    {
      label: "Direct email to recruiter",
      width: "86%",
      rate: "11.8%",
      strength: "strong",
    },
    {
      label: "Company careers portal",
      width: "38%",
      rate: "5.1%",
      strength: "medium",
    },
    {
      label: "Referral requests",
      width: "64%",
      rate: "8.7%",
      strength: "medium",
    },
    {
      label: "LinkedIn Easy Apply",
      width: "16%",
      rate: "2.2%",
      strength: "weak",
    },
  ],
  insight:
    "direct email to a named recruiter replies 5× more often than Easy Apply. The agent now hunts for recruiter emails first.",
  autopsies: [
    {
      id: "ats",
      label: "ATS",
      tone: "red",
      finding: "6 of 9 backend applications died before a human saw them.",
      fix: "lead with the Go project, drop the ML section for these roles.",
      isApplied: true,
    },
    {
      id: "timing",
      label: "TIMING",
      tone: "amber",
      finding: "Healthcare companies ignored your Tuesday-evening sends.",
      fix: "moved to Thursday 8 AM.",
      isApplied: true,
    },
    {
      id: "content",
      label: "CONTENT",
      tone: "blue",
      finding: "Messages opening with pipeline numbers got 3× the replies.",
      fix: "make it the default opener everywhere.",
      isApplied: false,
    },
  ],
};
