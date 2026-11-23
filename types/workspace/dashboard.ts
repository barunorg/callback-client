export type AttentionItem = {
  id: string;
  title: string;
  detail: string;
  dotColor: string;
  actionLabel: string;
  href: string;
};

export type DashboardSummary = {
  sweepLabel: string;
  newMatches: number;
  newMatchesDetail: string;
  recruiterReplies: number;
  recruiterRepliesDetail: string;
  attention: AttentionItem[];
  ghostRegistry: {
    flaggedThisWeek: string;
    scamsBlocked: string;
    studentsProtecting: string;
    yourReports: number;
    studentsProtectedByYou: number;
    hiddenCompany: string;
  };
};
