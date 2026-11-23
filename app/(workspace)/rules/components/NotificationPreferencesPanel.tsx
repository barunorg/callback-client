"use client";

import { useInvalidatingMutation } from "@/hooks/useInvalidatingMutation";
import * as workspaceApi from "@/lib/api/workspaceApi";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import type { NotificationPreference } from "@/types/workspace/rules";
import Panel from "@/components/shared/Panel";
import { useToast } from "@/stores/ToastProvider";
import NotificationPreferenceRow from "./NotificationPreferenceRow";

export default function NotificationPreferencesPanel({
  preferences,
}: {
  preferences: NotificationPreference[];
}) {
  const pushToast = useToast();

  const togglePreference = useInvalidatingMutation({
    mutationFn: workspaceApi.toggleNotificationPreference,
    invalidate: [workspaceQueries.rules.queryKey],
  });

  // Flip the toggled row right away while the mock request runs.
  const pendingKey = togglePreference.isPending
    ? togglePreference.variables
    : null;

  function showEmailPreviewHint() {
    pushToast("Email previews — daily digest, reply alerts and weekly report", {
      kind: "info",
    });
  }

  return (
    <Panel
      titleClassName="text-[15px]"
      title="Notifications & email"
      aside={
        <button
          type="button"
          onClick={showEmailPreviewHint}
          className="text-xs font-semibold text-[#1E4A7A] hover:underline"
        >
          Preview the emails →
        </button>
      }
      description="One digest a day. Instant pings only when a human replies or a deadline looms."
    >
      <ul className="flex flex-col gap-2.25">
        {preferences.map((preference) => (
          <li key={preference.key}>
            <NotificationPreferenceRow
              preference={preference}
              isOn={
                preference.key === pendingKey
                  ? !preference.isOn
                  : preference.isOn
              }
              onToggle={() => togglePreference.mutate(preference.key)}
            />
          </li>
        ))}
      </ul>
    </Panel>
  );
}
