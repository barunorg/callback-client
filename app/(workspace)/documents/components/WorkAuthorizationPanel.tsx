import { FileText, GraduationCap, IdCard, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { WorkAuthDocument } from "@/types/workspace/documents";
import Panel from "@/components/shared/Panel";

const documentIcons: Record<WorkAuthDocument["icon"], LucideIcon> = {
  graduation: GraduationCap,
  "id-card": IdCard,
  file: FileText,
};

export default function WorkAuthorizationPanel({
  documents,
}: {
  documents: WorkAuthDocument[];
}) {
  return (
    <Panel
      title="Work authorization"
      description={
        <>
          Stored encrypted, attached only when <em>you</em> approve a request.
          Never sent automatically.
        </>
      }
    >
      <ul className="flex flex-col gap-2.25">
        {documents.map((item) => {
          const Icon = documentIcons[item.icon];
          const isPending = item.status === "PENDING";

          return (
            <li
              key={item.id}
              className="flex items-center gap-3 rounded-[11px] border border-[#E6E1D5] bg-white px-3.5 py-3"
            >
              <span
                aria-hidden="true"
                className="grid size-8.5 shrink-0 place-items-center rounded-md text-white"
                style={{ backgroundColor: item.iconColor }}
              >
                <Icon className="size-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[12.5px] font-bold">{item.name}</p>
                <p
                  className={cn(
                    "mt-0.5 text-[11px]",
                    isPending ? "text-[#B4762A]" : "text-[#6B7A6E]",
                  )}
                >
                  {item.note}
                </p>
              </div>
              <span
                className={cn(
                  "shrink-0 text-[11px] font-bold",
                  isPending ? "text-[#B4762A]" : "text-[#1E7A4F]",
                )}
              >
                {item.status}
              </span>
            </li>
          );
        })}
      </ul>
    </Panel>
  );
}
