"use client";

import ScreenError from "@/components/shared/ScreenError";

export default function TrackerError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <ScreenError title="Tracker couldn’t load" error={error} retry={retry} />
  );
}
