import SwitchTrack from "@/components/shared/SwitchTrack";

export default function ToggleRow({
  label,
  description,
  isOn,
  onToggle,
}: {
  label: string;
  description: string;
  isOn: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOn}
      onClick={onToggle}
      className="flex w-full items-center gap-3.25 rounded-xl border border-[#DED9CC] bg-[#FBFAF7] px-4 py-3.5 text-left"
    >
      <SwitchTrack isOn={isOn} />
      <span className="flex-1">
        <span className="block text-[13px] font-bold">{label}</span>
        <span className="mt-px block text-[11.5px] text-[#6B7A6E]">
          {description}
        </span>
      </span>
    </button>
  );
}
