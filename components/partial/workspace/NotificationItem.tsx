import { cn } from "@/lib/utils";
import type {
  NotificationKind,
  WorkspaceNotification,
} from "@/types/workspace/notifications";

const kindLabels: Record<NotificationKind, string> = {
  replies: "Replies",
  queue: "Queue",
  system: "System",
};

export default function NotificationItem({
  notification,
  onOpen,
}: {
  notification: WorkspaceNotification;
  onOpen: () => void;
}) {
  const { isRead } = notification;

  return (
    <li className="border-b border-[#EFECE4]">
      <button
        type="button"
        onClick={onOpen}
        className={cn(
          "flex w-full gap-3 px-4.5 py-3.5 text-left hover:bg-[#F0EDE4]",
          isRead ? "bg-[#FBFAF7]" : "bg-[#F2F7F2]",
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "mt-1.25 size-2 shrink-0 rounded-full",
            isRead && "border-[1.5px] border-[#C9C2B0]",
          )}
          style={
            isRead ? undefined : { backgroundColor: notification.dotColor }
          }
        />
        <span className="min-w-0 flex-1">
          <span
            className={cn(
              "block text-[12.5px] leading-normal",
              isRead ? "text-[#4A554C]" : "text-[#141C17]",
            )}
          >
            <strong>{notification.head}</strong> {notification.body}
          </span>
          {!isRead && notification.actionLabel && (
            <span className="mt-2 inline-block rounded-lg bg-[#141C17] px-2.75 py-1.5 text-[11.5px] font-bold text-white">
              {notification.actionLabel}
            </span>
          )}
          <span className="mt-1.5 block text-[10.5px] text-[#9A9384]">
            {notification.time} · {kindLabels[notification.kind]}
          </span>
        </span>
      </button>
    </li>
  );
}
