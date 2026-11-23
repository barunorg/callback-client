import { Check, Plus } from "lucide-react";
import ActionButton from "@/components/shared/ActionButton";

export default function TailoringPanel({
  changes,
  verify,
  onOpenEditor,
}: {
  changes: string[];
  verify: string;
  onOpenEditor: () => void;
}) {
  return (
    <section aria-labelledby="resume-tailoring-title">
      <h3
        id="resume-tailoring-title"
        className="mb-2.5 text-[11px] font-bold tracking-[0.07em] text-[#6B7A6E]"
      >
        RESUME TAILORING
      </h3>
      <ul className="flex flex-col gap-2">
        {changes.map((change) => (
          <li
            key={change}
            className="flex gap-2.25 text-[12.5px] leading-normal text-[#2A342C]"
          >
            <Plus
              aria-hidden="true"
              strokeWidth={3}
              className="mt-0.75 size-3.5 shrink-0 text-[#1E7A4F]"
            />
            {change}
          </li>
        ))}
      </ul>
      <ActionButton
        variant="light"
        onClick={onOpenEditor}
        className="mt-3 w-full p-2.5 text-xs whitespace-normal"
      >
        Open resume editor — review every change
      </ActionButton>
      <p className="mt-2.5 flex gap-1.5 rounded-lg bg-[#EFF5EF] px-3.25 py-2.75 text-xs leading-normal text-[#2A5A3E]">
        <Check aria-hidden="true" className="mt-0.5 size-3.5 shrink-0" />
        <span>Company verified — {verify}</span>
      </p>
    </section>
  );
}
