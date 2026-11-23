import type { ReactNode } from "react";

/**
 * Wrapper for a route skeleton: announces loading to screen readers and hides
 * the placeholder shapes from assistive tech.
 */
export default function ScreenSkeleton({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div role="status" aria-live="polite" className={className}>
      <span className="sr-only">{label}</span>
      <div aria-hidden="true" className="contents">
        {children}
      </div>
    </div>
  );
}
