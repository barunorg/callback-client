export type NotificationKind = "replies" | "queue" | "system";

export type WorkspaceNotification = {
  id: number;
  kind: NotificationKind;
  dotColor: string;
  head: string;
  body: string;
  time: string;
  actionLabel?: string;
  href: string;
  isRead: boolean;
};
