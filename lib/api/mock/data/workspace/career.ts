import type { CareerData } from "@/types/workspace/career";

export const careerFixture: CareerData = {
  visaTimeline: [
    {
      state: "done",
      label: "F-1 · MSc CS, UT Austin",
      time: "now → May 2027",
      detail: "CPT available for internships — agent filters accordingly.",
    },
    {
      state: "current",
      label: "You sign at Datavine",
      time: "Jul 2027",
      detail:
        "OPT application window opens Feb 2027 — we file the reminder now, not in a panic later.",
    },
    {
      state: "pending",
      label: "OPT — 12 months",
      time: "Jul 2027 → Jul 2028",
      detail:
        "90-day unemployment cap tracked automatically. You’ll never learn about it the hard way.",
    },
    {
      state: "pending",
      label: "H-1B lottery — three shots",
      time: "Mar 2027 · 2028 · 2029",
      detail:
        "Registration windows watched; your employer’s attorney gets a polite nudge each spring.",
    },
    {
      state: "pending",
      label: "STEM OPT +24 months",
      time: "file by Apr 2028",
      detail:
        "Keeps you working through the lotteries. Checklist ready 90 days out.",
    },
    {
      state: "pending",
      label: "Green card groundwork",
      time: "from year 2",
      detail:
        "PERM timing recommendation, drafted for the conversation with your manager.",
    },
  ],
  radarBars: [
    {
      label: "SALARY",
      bar: "Above $118k — your current base",
      met: "2 cleared",
    },
    { label: "TIME OFF", bar: "20+ PTO days (you have 14)", met: "4 cleared" },
    { label: "LOCATION", bar: "Remote-first, or Austin", met: "9 cleared" },
    { label: "VISA", bar: "H-1B filed in year one", met: "3 cleared" },
  ],
  radarSummary: { quietMatches: 14, clearedEveryBar: 2 },
  isStandbyOn: true,
  watchlist: ["Brightpath", "Cortexa Labs", "Merrow Health"],
  standbyDigest: { matchedRoles: 14, medianComp: "$128k", delta: "+9%" },
  negotiation: {
    figures: [
      {
        label: "THEIR OFFER",
        value: "$118k",
        detail: "Datavine · Junior Data Engineer",
      },
      {
        label: "MARKET P50",
        value: "$128k",
        detail: "Austin · new-grad DE, 2026",
      },
      {
        label: "THEIR OWN H-1B BAND",
        value: "$110–135k",
        detail: "from their public filings",
      },
    ],
    suggestedCounter: "$127k",
    acceptanceOdds: "~78%",
  },
};
