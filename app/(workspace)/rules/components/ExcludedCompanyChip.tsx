import { X } from "lucide-react";
import type { ExcludedCompany } from "@/types/workspace/rules";

export default function ExcludedCompanyChip({
  company,
  onRemove,
}: {
  company: ExcludedCompany;
  onRemove: () => void;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#E0DBCE] bg-white px-3 py-2 text-[12.5px] font-semibold text-[#4A554C]">
      {company.name}
      <span className="text-[10px] font-normal text-[#9A9384]">
        · {company.reason}
      </span>
      <button
        type="button"
        aria-label={`Remove ${company.name}`}
        onClick={onRemove}
        className="grid place-items-center rounded-full text-[#B4483A] hover:bg-[#FBEAE7]"
      >
        <X aria-hidden="true" strokeWidth={3} className="size-3.5" />
      </button>
    </span>
  );
}
