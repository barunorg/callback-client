"use client";

import ScreenError from "@/components/shared/ScreenError";

export default function MatchesError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <ScreenError title="Matches couldn’t load" error={error} retry={retry} />
  );
}
