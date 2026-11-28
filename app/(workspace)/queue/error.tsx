"use client";

import ScreenError from "@/components/shared/ScreenError";

export default function ReviewQueueError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <ScreenError
      title="Review queue couldn’t load"
      error={error}
      retry={retry}
    />
  );
}
