export type MatchFilterId = "all" | "sponsor" | "top" | "email" | "flagged";
export type TrustLevel = "verified" | "new" | "ghost";

export type JobMatch = {
  id: string;
  categories: MatchFilterId[];
  initials: string;
  logoColor: string;
  role: string;
  company: string;
  location: string;
  salary: string;
  match: string;
  trust: TrustLevel;
  trustLabel: string;
  sponsorLabel?: string;
  tags: string[];
  noteHead: string;
  note: string;
  duplicateNote?: string;
  isAutoSkipped: boolean;
  isSkipped: boolean;
};

export type MatchesData = {
  filters: { id: MatchFilterId; label: string }[];
  matches: JobMatch[];
};
