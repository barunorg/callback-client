import type { ReactNode } from "react";
import NavBar from "@/components/partial/NavBar";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
