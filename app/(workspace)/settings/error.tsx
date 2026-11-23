"use client";

import ScreenError from "@/components/shared/ScreenError";

export default function SettingsError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <ScreenError
      title="Settings & billing couldn’t load"
      error={error}
      retry={retry}
    />
  );
}
