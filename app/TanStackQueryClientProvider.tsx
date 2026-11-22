"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React from "react";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      // gcTime: 60 * 1000,
      retry: false,
    },
  },
});
// This code is only for TypeScript
// declare global {
//   interface Window {
//     __TANSTACK_QUERY_CLIENT__: import('@tanstack/query-core').QueryClient
//   }
// }

// // This code is for all users
// window.__TANSTACK_QUERY_CLIENT__ = queryClient

export default function TanStackQueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
