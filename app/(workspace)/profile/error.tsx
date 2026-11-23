"use client";

import ScreenError from "@/components/shared/ScreenError";

export default function ProfileError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <ScreenError title="Profile couldn’t load" error={error} retry={retry} />
  );
}
