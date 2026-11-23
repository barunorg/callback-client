import { X } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function ModalHeader({
  titleId,
  eyebrow,
  eyebrowClassName,
  title,
  subtitle,
  onClose,
}: {
  titleId: string;
  eyebrow: string;
  eyebrowClassName?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  onClose: () => void;
}) {
  return (
    <header className="flex items-start justify-between gap-3">
      <div className="min-w-0">
        <p
          className={cn(
            "mb-1.75 font-mono text-[10.5px] tracking-[0.08em] text-[#6B7A6E]",
            eyebrowClassName,
          )}
        >
          {eyebrow}
        </p>
        <h2
          id={titleId}
          className="font-heading text-[21px] font-extrabold tracking-[-0.02em]"
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mt-0.75 text-xs text-[#6B7A6E]">{subtitle}</p>
        )}
      </div>
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="grid size-8 shrink-0 place-items-center rounded-full border border-[#DED9CC] bg-white text-[#4A554C] hover:bg-[#F0EDE4]"
      >
        <X aria-hidden="true" className="size-3.5" />
      </button>
    </header>
  );
}
