"use client";

import ScreenError from "@/components/shared/ScreenError";

export default function GigsError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return <ScreenError title="Gigs couldn’t load" error={error} retry={retry} />;
}
