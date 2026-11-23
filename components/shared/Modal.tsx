"use client";

import { Dialog } from "@base-ui/react/dialog";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Centered modal built on Base UI's Dialog (focus trap, scroll lock,
 * Escape / outside-press dismissal). Render it only while it should be open.
 */
export default function Modal({
  labelledBy,
  onClose,
  className,
  children,
}: {
  labelledBy: string;
  onClose: () => void;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Dialog.Root
      open
      onOpenChange={(isOpen) => {
        if (!isOpen) onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-100 min-h-dvh bg-[#0F1F16]/55 backdrop-blur-xs" />
        <Dialog.Viewport className="fixed inset-0 z-100 grid place-items-center overflow-y-auto p-4 sm:p-6">
          <Dialog.Popup
            aria-labelledby={labelledBy}
            className={cn(
              "max-h-[88vh] w-full overflow-y-auto rounded-[20px] bg-[#FBFAF7] px-5 py-6.5 text-[#141C17] shadow-[0_40px_90px_-20px_rgba(0,0,0,.45)] outline-none sm:px-7",
              className,
            )}
          >
            {children}
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
