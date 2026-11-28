export type SetupStep = {
  id: string;
  title: string;
  detail: string;
  isDone: boolean;
};

export type VaultField = {
  id: string;
  label: string;
  value: string;
  status: "SET" | "AUTO" | "PARTIAL" | "OPTIONAL";
};

export type ProfileData = {
  setupSteps: SetupStep[];
  vaultFields: VaultField[];
};
