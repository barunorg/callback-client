import type { DashboardSummary } from "@/types/workspace/dashboard";

export const dashboardFixture: DashboardSummary = {
  sweepLabel: "THURSDAY, JUL 2  ·  6:04",
  newMatches: 23,
  newMatchesDetail: "from 6 sources overnight",
  recruiterReplies: 3,
  recruiterRepliesDetail: "1 interview request",
  attention: [
    {
      id: "datavine-deadline",
      title: "Datavine — Junior Data Engineer closes in 31h",
      detail: "92% match, tailored resume ready, recruiter email verified",
      dotColor: "#B4483A",
      actionLabel: "Review",
      href: "/queue/?job=1",
    },
    {
      id: "cortexa-reply",
      title: "Recruiter at Cortexa Labs replied",
      detail: "“Thanks Prakash — are you free Thursday for a quick call?”",
      dotColor: "#1E7A4F",
      actionLabel: "Open",
      href: "/tracker/",
    },
    {
      id: "harborlight-viewed",
      title: "Harborlight application viewed 3× today",
      detail: "Good signal — follow-up email drafted for tomorrow 9am",
      dotColor: "#B4762A",
      actionLabel: "View draft",
      href: "/tracker/",
    },
    {
      id: "maya-warm-path",
      title: "Warm path: Maya Torres (UT Austin ’24) works at Harborlight",
      detail:
        "Referral requests get ~4× more interviews — intro draft ready in your queue",
      dotColor: "#1E4A7A",
      actionLabel: "Use it",
      href: "/queue/?job=2&referral=true",
    },
  ],
  ghostRegistry: {
    flaggedThisWeek: "41",
    scamsBlocked: "9",
    studentsProtecting: "12.4k",
    yourReports: 2,
    studentsProtectedByYou: 61,
    hiddenCompany: "Nexora Global",
  },
};
