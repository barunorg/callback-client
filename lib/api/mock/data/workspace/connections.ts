import type { Integration } from "@/types/workspace/connections";

export const connectionsFixture: Integration[] = [
  {
    key: "gh",
    glyph: "GH",
    color: "#141C17",
    name: "GitHub",
    tag: "Code as proof",
    description:
      "The agent reads your public repos so messages cite real work with real numbers — not adjectives.",
    unlocks: [
      "“94 days, zero failed DAGs” — pulled from pipeline-airflow, quoted in 3 messages",
      "Repo links attached when a JD mentions your stack",
      "New commits refresh your proof points weekly",
    ],
    footnote: "12 repos synced · last sync 2h ago",
    isConnected: true,
  },
  {
    key: "li",
    glyph: "in",
    color: "#1E4A7A",
    name: "LinkedIn",
    tag: "Alumni & warm paths",
    description:
      "Your school and connections become a referral map laid over every match.",
    unlocks: [
      "214 UT Austin alumni found across 89 target companies",
      "Warm-intro drafts when an alum works where you’re applying",
      "Referral paths ranked by reply likelihood",
    ],
    footnote: "Active now: Maya Torres @ Harborlight — draft in your queue",
    isConnected: true,
  },
  {
    key: "gm",
    glyph: "@",
    color: "#B4483A",
    name: "Gmail",
    tag: "Sending & replies",
    description:
      "Applications send from your own address. Recruiters reply to you, not to a bot domain.",
    unlocks: [
      "Real deliverability — no shared, spam-flagged servers",
      "Replies land in your inbox and the Tracker together",
      "Reads job threads only. Nothing else, ever.",
    ],
    footnote: "Sending healthy · 0 bounces this month",
    isConnected: true,
  },
  {
    key: "hs",
    glyph: "H",
    color: "#7A3A1E",
    name: "Handshake",
    tag: "University career portal",
    description:
      "Campus-only postings — often a tenth of the competition of public boards.",
    unlocks: [
      "Campus-exclusive roles join the hourly sweep",
      "Career-fair employers matched to your profile",
    ],
    isConnected: false,
  },
  {
    key: "gc",
    glyph: "C",
    color: "#4A2A7A",
    name: "Google Calendar",
    tag: "Interviews",
    description: "Never double-book an interview with a lecture again.",
    unlocks: [
      "Slots auto-held when a recruiter proposes times",
      "Prep reminder 24h before every call",
    ],
    isConnected: false,
  },
];
