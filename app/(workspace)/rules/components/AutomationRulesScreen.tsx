"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import PageHeading from "@/components/shared/PageHeading";
import ExcludedCompaniesPanel from "./ExcludedCompaniesPanel";
import GuardrailsPanel from "./GuardrailsPanel";
import NotificationPreferencesPanel from "./NotificationPreferencesPanel";
import SendModePanel from "./SendModePanel";

export default function AutomationRulesScreen() {
  const { data: rules } = useSuspenseQuery(workspaceQueries.rules);

  return (
    <div className="max-w-195">
      <PageHeading
        eyebrow="⚙ YOUR BOUNDARIES"
        title="Automation rules"
        description="The agent only ever acts inside these lines. Move them anytime — you’re the one holding the leash."
      />

      <div className="flex flex-col gap-3.5">
        <SendModePanel sendMode={rules.sendMode} />
        <GuardrailsPanel guardrails={rules.guardrails} />
        <ExcludedCompaniesPanel companies={rules.excludedCompanies} />
        <NotificationPreferencesPanel
          preferences={rules.notificationPreferences}
        />
      </div>
    </div>
  );
}
