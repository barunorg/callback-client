"use client";

import { useInvalidatingMutation } from "@/hooks/useInvalidatingMutation";
import * as workspaceApi from "@/lib/api/workspaceApi";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import type { QueueJob } from "@/types/workspace/queue";
import { usePlan } from "@/stores/PlanProvider";
import { useToast } from "@/stores/ToastProvider";

// Sending changes both the queue and today's send count.
const queueAndAccount = [
  workspaceQueries.queue.queryKey,
  workspaceQueries.account.queryKey,
];

/** Send / discard / batch-send actions for the review queue. */
export function useQueueActions() {
  const pushToast = useToast();
  const { dailyCap, remainingSends, openUpgrade } = usePlan();

  const send = useInvalidatingMutation({
    mutationFn: (job: QueueJob) => workspaceApi.sendApplication(job.id),
    invalidate: queueAndAccount,
    onSuccess: ({ sentToday }, job) => {
      pushToast(`Sent to ${job.company} — ${sentToday} of ${dailyCap} today`, {
        action: { label: "View", href: "/tracker/" },
      });
    },
  });

  const discard = useInvalidatingMutation({
    mutationFn: (job: QueueJob) => workspaceApi.discardApplication(job.id),
    invalidate: [workspaceQueries.queue.queryKey],
    onSuccess: () => {
      pushToast("Discarded — the agent will deprioritize similar roles", {
        kind: "info",
      });
    },
  });

  const sendAll = useInvalidatingMutation({
    mutationFn: workspaceApi.sendAllApplications,
    invalidate: queueAndAccount,
    onSuccess: ({ sentCount }) => {
      pushToast(`Batch sent — ${sentCount} applications on their way`, {
        action: { label: "Track", href: "/tracker/" },
      });
    },
  });

  function approveJob(job: QueueJob) {
    if (remainingSends <= 0) {
      openUpgrade(
        `DAILY LIMIT REACHED — ${dailyCap} OF ${dailyCap} FREE SENDS USED`,
      );
      return;
    }
    send.mutate(job);
  }

  function approveAll(queue: QueueJob[]) {
    if (queue.length > remainingSends) {
      const plural = remainingSends === 1 ? "" : "S";
      openUpgrade(
        `BATCH OF ${queue.length} NEEDS PRO — ONLY ${remainingSends} FREE SEND${plural} LEFT TODAY`,
      );
      return;
    }
    sendAll.mutate();
  }

  return {
    approveJob,
    discardJob: (job: QueueJob) => discard.mutate(job),
    approveAll,
    isBusy: send.isPending || discard.isPending || sendAll.isPending,
  };
}
