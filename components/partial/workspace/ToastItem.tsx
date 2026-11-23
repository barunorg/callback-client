"use client";

import { useRouter } from "next/navigation";
import { Check, Plus, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Toast } from "@/stores/ToastProvider";

const kindStyles = {
  success: { icon: Check, className: "bg-[#1E7A4F] text-white" },
  info: { icon: Plus, className: "bg-[#8FB8E3] text-[#0F1F16]" },
  warn: { icon: TriangleAlert, className: "bg-[#F4B942] text-[#0F1F16]" },
};

export default function ToastItem({
  toast,
  onDismiss,
}: {
  toast: Toast;
  onDismiss: (id: string) => void;
}) {
  const router = useRouter();
  const { icon: Icon, className } = kindStyles[toast.kind];

  function runAction() {
    if (toast.action) router.push(toast.action.href);
    onDismiss(toast.id);
  }

  return (
    <article className="pointer-events-auto flex items-center gap-2.75 rounded-xl bg-[#0F1F16] px-4 py-3 text-[#E9EFE9] shadow-[0_10px_30px_-10px_rgba(15,31,22,.45)]">
      <span
        aria-hidden="true"
        className={cn(
          "grid size-5 shrink-0 place-items-center rounded-full",
          className,
        )}
      >
        <Icon className="size-3" strokeWidth={3} />
      </span>
      <p className="flex-1 text-[12.5px] leading-[1.4] font-semibold">
        {toast.message}
      </p>
      {toast.action && (
        <button
          type="button"
          onClick={runAction}
          className="shrink-0 text-xs font-bold text-[#8FE388] hover:underline"
        >
          {toast.action.label}
        </button>
      )}
    </article>
  );
}
