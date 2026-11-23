import type { RulesData } from "@/types/workspace/rules";

export const rulesFixture: RulesData = {
  sendMode: "batch",
  guardrails: [
    {
      id: "cap",
      label: "Daily cap",
      detail: "max applications sent per day",
      value: "25",
    },
    {
      id: "score",
      label: "Minimum match score",
      detail: "below this, jobs are only suggested",
      value: "85%",
    },
    {
      id: "trust",
      label: "Company trust",
      detail: "ghost-risk listings",
      value: "Never apply",
    },
    {
      id: "visa",
      label: "Visa filter",
      detail: "only employers with sponsorship history",
      value: "On",
    },
    {
      id: "quiet",
      label: "Quiet hours",
      detail: "no sends during your classes",
      value: "9am–3pm",
    },
    {
      id: "followups",
      label: "Follow-ups",
      detail: "polite nudge if no reply",
      value: "After 5 days",
    },
  ],
  excludedCompanies: [
    { id: "kinship", name: "Kinship Labs", reason: "current employer" },
    { id: "nexora", name: "Nexora Global", reason: "ghost-flagged" },
    { id: "apex", name: "Apex Staffing", reason: "body-shop" },
  ],
  notificationPreferences: [
    {
      key: "digest",
      label: "Daily digest email — 6 PM",
      detail: "One email with the day’s batch, ~5 min to review",
      isOn: true,
    },
    {
      key: "replies",
      label: "Recruiter replies — instant",
      detail: "Email + push · the only alert that skips quiet hours",
      isOn: true,
    },
    {
      key: "deadlines",
      label: "Deadline alerts",
      detail: "Only for matches ≥ 85% about to close",
      isOn: true,
    },
    {
      key: "weekly",
      label: "Weekly report — Sunday 10 AM",
      detail: "Stats, what worked, what the agent changed",
      isOn: true,
    },
    {
      key: "tips",
      label: "Product tips & news",
      detail: "Occasional. Off by default — we hate spam too",
      isOn: false,
    },
  ],
};
