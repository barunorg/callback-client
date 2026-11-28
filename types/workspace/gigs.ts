export type Gig = {
  id: string;
  initials: string;
  color: string;
  client: string;
  vetting: string;
  brief: string;
  pay: string;
  duration: string;
  why: string;
  status: "INVITE" | "PROPOSAL SENT";
};
