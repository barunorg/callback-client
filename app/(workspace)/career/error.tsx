"use client";

import ScreenError from "@/components/shared/ScreenError";

export default function CareerModeError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <ScreenError
      title="Career mode couldn’t load"
      error={error}
      retry={retry}
    />
  );
}
