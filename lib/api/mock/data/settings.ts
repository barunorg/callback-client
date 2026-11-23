import type { SettingsData } from "@/types/workspace/settings";

export const settingsFixture: SettingsData = {
  email: "prakash.r@utexas.edu",
  isEmailVerified: true,
  card: { brand: "VISA", last4: "4242", expires: "09/28" },
  renewsOn: "Aug 3, 2026",
  usage: {
    applicationsThisMonth: 92,
    referralDraftsUsed: 4,
    mockInterviewsThisMonth: 3,
  },
  billingHistory: [
    {
      id: "jun",
      date: "Jun 3",
      label: "Pro monthly (student)",
      amount: "$9.00",
    },
    {
      id: "may",
      date: "May 3",
      label: "Pro monthly (student)",
      amount: "$9.00",
    },
    { id: "apr", date: "Apr 3", label: "Free → Pro upgrade", amount: "$9.00" },
  ],
  isAgentPaused: false,
};
