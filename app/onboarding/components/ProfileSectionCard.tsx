import type { ResumeEntry } from "@/types/onboarding";

/** One parsed resume section (education, experience, projects) + Edit. */
export default function ProfileSectionCard({
  label,
  entries,
  onEdit,
}: {
  label: string;
  entries: ResumeEntry[];
  onEdit: () => void;
}) {
  return (
    <article className="flex items-start gap-3.5 rounded-[14px] border border-[#DED9CC] bg-[#FBFAF7] px-4.75 py-4.25">
      <span className="mt-0.5 shrink-0 rounded-sm bg-[#EDEAE0] px-2 py-1 text-[10.5px] font-extrabold tracking-[0.06em] text-[#6B7A6E]">
        {label}
      </span>
      <div className="flex min-w-0 flex-1 flex-col gap-2.5">
        {entries.map((entry) => (
          <div key={entry.title}>
            <h3 className="text-sm font-bold">{entry.title}</h3>
            <p className="mt-0.5 text-[12.5px] text-[#6B7A6E]">
              {entry.detail}
            </p>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={onEdit}
        className="shrink-0 text-xs font-semibold text-[#1E4A7A] hover:underline"
      >
        Edit
      </button>
    </article>
  );
}
