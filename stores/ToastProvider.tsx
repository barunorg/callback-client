"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import ToastViewport from "@/components/partial/workspace/ToastViewport";

export type ToastKind = "success" | "info" | "warn";

export type Toast = {
  id: string;
  message: string;
  kind: ToastKind;
  action?: { label: string; href: string };
};

type PushToast = (
  message: string,
  options?: { kind?: ToastKind; action?: Toast["action"] },
) => void;

const TOAST_DURATION_MS = 4600;

const ToastContext = createContext<PushToast | null>(null);

export function useToast() {
  const pushToast = useContext(ToastContext);
  if (!pushToast) throw new Error("useToast must be used inside ToastProvider");
  return pushToast;
}

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismissToast = useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const pushToast = useCallback<PushToast>(
    (message, { kind = "success", action } = {}) => {
      const id = crypto.randomUUID();
      setToasts((current) => [...current, { id, message, kind, action }]);
      setTimeout(() => dismissToast(id), TOAST_DURATION_MS);
    },
    [dismissToast],
  );

  return (
    <ToastContext value={pushToast}>
      {children}
      <ToastViewport toasts={toasts} onDismiss={dismissToast} />
    </ToastContext>
  );
}
