import { cn } from "@/lib/utils";

/** Colored square/circle with initials, used as a company or person logo. */
export default function InitialsTile({
  initials,
  color,
  shape = "square",
  className,
}: {
  initials: string;
  color: string;
  shape?: "square" | "circle";
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid size-10.5 shrink-0 place-items-center font-heading text-sm font-bold text-white",
        shape === "circle" ? "rounded-full" : "rounded-[11px]",
        className,
      )}
      style={{ backgroundColor: color }}
    >
      {initials}
    </span>
  );
}
