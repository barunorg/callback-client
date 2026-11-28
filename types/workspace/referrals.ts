import type { StatusTone } from "./common";

export type ReferralPath = {
  id: string;
  initials: string;
  color: string;
  name: string;
  relation: string;
  overlap: string;
  job: string;
  status: string;
  statusTone: StatusTone;
  note?: string;
  /** Queue job that holds the drafted referral, if one is ready. */
  queueJobId?: number;
};

export type ReferralsData = {
  stats: {
    school: string;
    alumniFound: number;
    targetCompanies: number;
    replyRate: string;
  };
  paths: ReferralPath[];
  lockedCount: number;
};
