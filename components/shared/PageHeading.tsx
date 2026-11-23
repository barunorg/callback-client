import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function PageHeading({
  eyebrow,
  title,
  titleBadge,
  description,
  descriptionClassName,
  action,
}: {
  eyebrow?: string;
  title: ReactNode;
  titleBadge?: ReactNode;
  description?: ReactNode;
  descriptionClassName?: string;
  action?: ReactNode;
}) {
  return (
    <header className="mb-5 flex flex-wrap items-center justify-between gap-4">
      <div className="min-w-0">
        {eyebrow && (
          <p className="mb-1.75 font-mono text-[10.5px] font-medium tracking-[0.14em] text-[#B4762A]">
            {eyebrow}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="font-heading text-[28px] leading-[1.05] font-bold tracking-[-0.035em] sm:text-[33px]">
            {title}
          </h1>
          {titleBadge}
        </div>
        {description && (
          <p
            className={cn(
              "mt-1.5 text-[13px] leading-normal text-[#6B7A6E]",
              descriptionClassName,
            )}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </header>
  );
}
