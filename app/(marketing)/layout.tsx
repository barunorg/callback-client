import type { ReactNode } from "react";
import NavBar from "@/components/partial/marketing/NavBar";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
