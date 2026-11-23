"use client";

import {
  useMutation,
  useQueryClient,
  type QueryKey,
} from "@tanstack/react-query";
import { useToast } from "@/stores/ToastProvider";

/**
 * TanStack `useMutation` that refetches the given queries after a successful
 * write, then runs `onSuccess` (for example to show a toast). Failed writes
 * show a warning toast, so every caller gets the same error handling.
 *
 * @param mutationFn - the API call that changes data
 * @param invalidate - query keys whose data the write changes
 * @param onSuccess - runs once the refetch has finished
 * @returns the regular `useMutation` result (`mutate`, `isPending`, …)
 */
export function useInvalidatingMutation<TData, TVariables = void>({
  mutationFn,
  invalidate,
  onSuccess,
}: {
  mutationFn: (variables: TVariables) => Promise<TData>;
  invalidate: QueryKey[];
  onSuccess?: (data: TData, variables: TVariables) => void;
}) {
  const queryClient = useQueryClient();
  const pushToast = useToast();

  return useMutation({
    mutationFn,
    onSuccess: async (data, variables) => {
      await Promise.all(
        invalidate.map((queryKey) =>
          queryClient.invalidateQueries({ queryKey }),
        ),
      );
      onSuccess?.(data, variables);
    },
    onError: () => {
      pushToast("That didn’t go through — please try again", {
        kind: "warn",
      });
    },
  });
}
