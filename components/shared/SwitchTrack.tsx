import { cn } from "@/lib/utils";

/**
 * Visual on/off track. Wrap it in a `<button role="switch">` that owns the
 * click handler and `aria-checked`, so the whole row stays clickable.
 */
export default function SwitchTrack({
  isOn,
  onColor = "green",
}: {
  isOn: boolean;
  onColor?: "green" | "amber";
}) {
  const onClass = onColor === "amber" ? "bg-[#B4762A]" : "bg-[#1E7A4F]";

  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative h-5.5 w-9.5 shrink-0 rounded-full transition-colors duration-200",
        isOn ? onClass : "bg-[#C9C2B0]",
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 size-4.5 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,.25)] transition-[left] duration-200",
          isOn ? "left-4.5" : "left-0.5",
        )}
      />
    </span>
  );
}
