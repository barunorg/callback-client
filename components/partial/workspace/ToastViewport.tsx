import { cn } from "@/lib/utils";
import type { Toast } from "@/stores/ToastProvider";
import ToastItem from "./ToastItem";

export default function ToastViewport({
  toasts,
  onDismiss,
  className,
}: {
  toasts: Toast[];
  onDismiss: (id: string) => void;
  className?: string;
}) {
  return (
    <section
      aria-label="Status messages"
      aria-live="polite"
      className={cn(
        "pointer-events-none fixed right-4 bottom-5.5 z-130 flex w-[min(360px,calc(100vw-2rem))] flex-col gap-2.25 sm:right-6",
        className,
      )}
    >
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </section>
  );
}
