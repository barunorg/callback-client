import { cn } from "@/lib/utils";
import type { NotificationPreference } from "@/types/workspace/rules";
import SwitchTrack from "@/components/shared/SwitchTrack";

export default function NotificationPreferenceRow({
  preference,
  isOn,
  onToggle,
}: {
  preference: NotificationPreference;
  isOn: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOn}
      onClick={onToggle}
      className="flex w-full items-center gap-3.25 rounded-lg border border-[#E6E1D5] bg-white px-3.5 py-3 text-left hover:border-[#B8B19E]"
    >
      <SwitchTrack isOn={isOn} />
      <span className="min-w-0 flex-1">
        <span className="block text-[12.5px] font-semibold">
          {preference.label}
        </span>
        <span className="mt-px block text-[11px] text-[#6B7A6E]">
          {preference.detail}
        </span>
      </span>
      <span
        className={cn(
          "shrink-0 text-[11px] font-bold",
          isOn ? "text-[#1E7A4F]" : "text-[#9A9384]",
        )}
      >
        {isOn ? "ON" : "OFF"}
      </span>
    </button>
  );
}
