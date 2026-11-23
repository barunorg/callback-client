import type { Toast } from "@/stores/ToastProvider";
import ToastItem from "./ToastItem";

export default function ToastViewport({
  toasts,
  onDismiss,
}: {
  toasts: Toast[];
  onDismiss: (id: string) => void;
}) {
  return (
    <section
      aria-label="Notifications"
      aria-live="polite"
      className="pointer-events-none fixed right-4 bottom-5.5 z-130 flex w-[min(360px,calc(100vw-2rem))] flex-col gap-2.25 sm:right-6"
    >
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </section>
  );
}
