import { cn } from "@/lib/utils";
import type { VaultField } from "@/types/workspace/profile";

const statusColors: Record<
  VaultField["status"],
  { value: string; tag: string }
> = {
  SET: { value: "text-[#141C17]", tag: "text-[#1E7A4F]" },
  AUTO: { value: "text-[#1E4A7A]", tag: "text-[#1E4A7A]" },
  PARTIAL: { value: "text-[#B4762A]", tag: "text-[#B4762A]" },
  OPTIONAL: { value: "text-[#9A9384]", tag: "text-[#9A9384]" },
};

export default function VaultFieldRow({ field }: { field: VaultField }) {
  const colors = statusColors[field.status];

  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-2.5 rounded-lg border border-[#E6E1D5] bg-white px-3.5 py-2.75">
      <dt className="text-[11px] text-[#6B7A6E]">{field.label}</dt>
      <dd
        className={cn(
          "col-start-1 mt-px text-[12.5px] font-semibold",
          colors.value,
        )}
      >
        {field.value}
      </dd>
      <dd
        className={cn(
          "col-start-2 row-span-2 row-start-1 text-[10.5px] font-bold",
          colors.tag,
        )}
      >
        {field.status}
      </dd>
    </div>
  );
}
