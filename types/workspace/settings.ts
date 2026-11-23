export type BillingEntry = {
  id: string;
  date: string;
  label: string;
  amount: string;
};

export type SettingsData = {
  email: string;
  isEmailVerified: boolean;
  card: { brand: string; last4: string; expires: string };
  renewsOn: string;
  usage: {
    applicationsThisMonth: number;
    referralDraftsUsed: number;
    mockInterviewsThisMonth: number;
  };
  billingHistory: BillingEntry[];
  isAgentPaused: boolean;
};
