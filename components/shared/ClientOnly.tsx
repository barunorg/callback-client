"use client";

import { useSyncExternalStore, type ReactNode } from "react";

const subscribe = () => () => {};

/**
 * Renders `fallback` during the static build / hydration and `children` once
 * running in the browser. Workspace data is per-user, so screens should only
 * fetch client-side — never at build time.
 */
export default function ClientOnly({
  children,
  fallback,
}: {
  children: ReactNode;
  fallback: ReactNode;
}) {
  const isClient = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  return isClient ? children : fallback;
}
