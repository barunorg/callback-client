"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { WorkspaceNotification } from "@/types/workspace/notifications";
import NotificationItem from "./NotificationItem";

const notificationFilters = [
  { id: "all", label: "All" },
  { id: "replies", label: "Replies" },
  { id: "queue", label: "Queue" },
  { id: "system", label: "System" },
] as const;

type NotificationFilter = (typeof notificationFilters)[number]["id"];

export default function NotificationCenter({
  notifications,
  onMarkRead,
  onMarkAllRead,
  onClose,
}: {
  notifications: WorkspaceNotification[];
  onMarkRead: (id: number) => void;
  onMarkAllRead: () => void;
  onClose: () => void;
}) {
  const router = useRouter();
  const [filter, setFilter] = useState<NotificationFilter>("all");
  const visibleNotifications = notifications.filter(
    (notification) => filter === "all" || notification.kind === filter,
  );

  function openNotification(notification: WorkspaceNotification) {
    onMarkRead(notification.id);
    onClose();
    router.push(notification.href);
  }

  function viewAllActivity() {
    onClose();
    router.push("/tracker/");
  }

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0 z-85"
      />
      <section
        aria-labelledby="notification-center-title"
        className="fixed top-16.5 right-3 z-90 w-[min(392px,calc(100vw-1.5rem))] overflow-hidden rounded-2xl border border-[#D5CFC0] bg-[#FBFAF7] text-[#141C17] shadow-[0_24px_60px_-18px_rgba(15,31,22,.35)] sm:right-6"
      >
        <header className="flex items-center justify-between border-b border-[#E6E1D5] px-4.5 py-3.5">
          <h2
            id="notification-center-title"
            className="font-heading text-[15px] font-bold"
          >
            Notifications
          </h2>
          <button
            type="button"
            onClick={onMarkAllRead}
            className="text-[11.5px] font-semibold text-[#1E4A7A] hover:underline"
          >
            Mark all read
          </button>
        </header>

        <div
          role="group"
          aria-label="Filter notifications"
          className="flex gap-1.5 border-b border-[#EFECE4] px-4.5 py-2.5"
        >
          {notificationFilters.map((chip) => (
            <button
              key={chip.id}
              type="button"
              aria-pressed={filter === chip.id}
              onClick={() => setFilter(chip.id)}
              className={cn(
                "rounded-full border px-3 py-1.25 text-[11.5px] font-bold",
                filter === chip.id
                  ? "border-[#141C17] bg-[#141C17] text-white"
                  : "border-[#DED9CC] text-[#6B7A6E] hover:bg-[#F0EDE4]",
              )}
            >
              {chip.label}
            </button>
          ))}
        </div>

        <div className="max-h-[min(430px,64vh)] overflow-y-auto">
          {visibleNotifications.length > 0 ? (
            <ul>
              {visibleNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  onOpen={() => openNotification(notification)}
                />
              ))}
            </ul>
          ) : (
            <p className="p-7 text-center text-[12.5px] text-[#9A9384]">
              Nothing here — all quiet.
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={viewAllActivity}
          className="block w-full border-t border-[#E6E1D5] p-3 text-center text-xs font-semibold text-[#1E4A7A] hover:bg-[#F0EDE4]"
        >
          View all activity
        </button>
      </section>
    </>
  );
}
