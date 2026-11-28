"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { noteTextClasses } from "@/lib/constants/toneClasses";
import type { ReferralPath } from "@/types/workspace/referrals";
import InitialsTile from "@/components/shared/InitialsTile";
import Pill from "@/components/shared/Pill";
import { useToast } from "@/stores/ToastProvider";

export default function ReferralRow({ path }: { path: ReferralPath }) {
  const pushToast = useToast();
  const firstName = path.name.split(" ")[0];

  return (
    <article className="flex flex-col gap-3.5 rounded-[13px] border border-[#DED9CC] bg-[#FBFAF7] px-4.5 py-3.75 sm:flex-row sm:items-center">
      <InitialsTile
        initials={path.initials}
        color={path.color}
        shape="circle"
        className="font-sans text-[13px]"
      />

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2.25">
          <h2 className="text-sm font-bold">{path.name}</h2>
          <Pill tone={path.statusTone}>{path.status}</Pill>
        </div>
        <p className="mt-0.5 text-xs text-[#4A554C]">{path.relation}</p>
        <p className="mt-0.5 text-[11.5px] text-[#6B7A6E]">
          {path.overlap} · for: {path.job}
        </p>
        {path.note && (
          <p
            className={cn(
              "mt-1.25 text-[11.5px] font-semibold",
              noteTextClasses[path.statusTone],
            )}
          >
            {path.note}
          </p>
        )}
      </div>

      {path.queueJobId !== undefined && (
        <Link
          href={`/queue/?job=${path.queueJobId}&referral=true`}
          onClick={() =>
            pushToast(
              `Referral draft loaded — goes to ${firstName}, not the recruiter`,
              { kind: "info" },
            )
          }
          className="w-fit shrink-0 rounded-[9px] bg-[#141C17] px-3.75 py-2.25 text-xs font-bold text-white transition-colors hover:bg-[#1E7A4F]"
        >
          Review draft →
        </Link>
      )}
    </article>
  );
}
