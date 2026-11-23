import type { ReferralsData } from "@/types/workspace/referrals";

export const referralsFixture: ReferralsData = {
  stats: {
    school: "UT Austin",
    alumniFound: 214,
    targetCompanies: 89,
    replyRate: "41%",
  },
  paths: [
    {
      id: "maya",
      initials: "MT",
      color: "#1E4A7A",
      name: "Maya Torres",
      relation: "UT Austin CS ’24 · SWE @ Harborlight",
      overlap: "3 shared connections · same distributed-systems lab",
      job: "SWE New Grad (89%)",
      status: "DRAFT READY",
      statusTone: "green",
      queueJobId: 2,
    },
    {
      id: "arjun",
      initials: "AS",
      color: "#7A3A1E",
      name: "Arjun Shah",
      relation: "UT Austin ’23 · Data Engineer @ Brightpath",
      overlap: "TA’d your algorithms course",
      job: "Data Engineer",
      status: "REFERRED YOU",
      statusTone: "blue",
      note: "Referred you Jul 1 — phone screen booked for Jul 8",
    },
    {
      id: "lena",
      initials: "LC",
      color: "#4A2A7A",
      name: "Lena Cho",
      relation: "UT Austin ’22 · ML Engineer @ Ostro",
      overlap: "2 shared connections",
      job: "Platform Intern (84%)",
      status: "REQUEST SENT",
      statusTone: "amber",
      note: "Sent 2d ago · gentle nudge Friday if quiet — never sooner",
    },
  ],
  lockedCount: 11,
};
