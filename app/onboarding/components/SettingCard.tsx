import type { ReactNode } from "react";

/** Cream card with a small bold title, used for each group of choices. */
export default function SettingCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[14px] border border-[#DED9CC] bg-[#FBFAF7] px-4.75 py-4.25">
      <h2 className="mb-2.75 text-[13px] font-bold">{title}</h2>
      {children}
    </section>
  );
}
