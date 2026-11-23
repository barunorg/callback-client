"use client";

import ScreenError from "@/components/shared/ScreenError";

export default function ConnectionsError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <ScreenError
      title="Connections couldn’t load"
      error={error}
      retry={retry}
    />
  );
}
