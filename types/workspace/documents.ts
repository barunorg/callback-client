export type ResumeVersion = {
  id: string;
  name: string;
  tag?: string;
  stat: string;
  isBest: boolean;
};

export type WorkAuthDocument = {
  id: string;
  name: string;
  note: string;
  status: "ON FILE" | "PENDING";
  icon: "graduation" | "id-card" | "file";
  iconColor: string;
};

export type CoverLetter = { id: string; name: string; stat: string };

export type PortfolioItem = {
  id: string;
  kind: "LINK" | "REF";
  name: string;
  meta: string;
};

export type DocumentsData = {
  resumeVersions: ResumeVersion[];
  workAuthorization: WorkAuthDocument[];
  coverLetters: CoverLetter[];
  portfolio: PortfolioItem[];
};
