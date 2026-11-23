import type { QueueMode } from "./queue";

export type GuardrailRule = {
  id: string;
  label: string;
  detail: string;
  value: string;
};

export type ExcludedCompany = { id: string; name: string; reason: string };

export type NotificationPreference = {
  key: string;
  label: string;
  detail: string;
  isOn: boolean;
};

export type RulesData = {
  sendMode: QueueMode;
  guardrails: GuardrailRule[];
  excludedCompanies: ExcludedCompany[];
  notificationPreferences: NotificationPreference[];
};
