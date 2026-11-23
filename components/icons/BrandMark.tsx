import { cn } from "@/lib/utils";

/** The Callback "C" logo tile. Size, radius and text size come from `className`. */
export default function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid shrink-0 place-items-center bg-[#8FE388] font-heading font-extrabold text-[#0F1F16]",
        className,
      )}
    >
      C
    </span>
  );
}
