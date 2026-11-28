"use client";

import ScreenError from "@/components/shared/ScreenError";

export default function AutomationRulesError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <ScreenError
      title="Automation rules couldn’t load"
      error={error}
      retry={retry}
    />
  );
}
