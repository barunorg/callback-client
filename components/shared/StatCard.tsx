import { cn } from "@/lib/utils";

export default function StatCard({
  value,
  label,
  detail,
  dark = false,
  valueClassName,
}: {
  value: string;
  label: string;
  detail: string;
  dark?: boolean;
  valueClassName?: string;
}) {
  return (
    <article
      className={cn(
        "rounded-[14px] border px-4.5 pt-4.5 pb-3.75",
        dark
          ? "border-[#0F1F16] bg-[#0F1F16] text-[#E9EFE9]"
          : "border-[#DED9CC] bg-[#FBFAF7]",
      )}
    >
      <p
        className={cn(
          "font-heading text-[34px] leading-[1.15] font-bold tracking-[-0.03em]",
          dark ? "text-[#8FE388]" : "text-[#141C17]",
          valueClassName,
        )}
      >
        {value}
      </p>
      <p className="mt-0.5 text-[12.5px] font-semibold">{label}</p>
      <p
        className={cn(
          "mt-0.75 text-[11.5px] leading-[1.45]",
          dark ? "text-[#E9EFE9]/55" : "text-[#6B7A6E]",
        )}
      >
        {detail}
      </p>
    </article>
  );
}
