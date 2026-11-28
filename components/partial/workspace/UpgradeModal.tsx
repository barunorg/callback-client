"use client";

import { useQuery } from "@tanstack/react-query";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import ActionButton from "@/components/shared/ActionButton";
import SkeletonBlock from "@/components/shared/skeletons/SkeletonBlock";
import Modal from "@/components/shared/Modal";

export default function UpgradeModal({
  reason,
  isUpgrading,
  onUpgrade,
  onClose,
}: {
  reason: string;
  isUpgrading: boolean;
  onUpgrade: () => void;
  onClose: () => void;
}) {
  const { data: planComparisonRows = [], isPending } = useQuery(
    workspaceQueries.planComparison,
  );

  return (
    <Modal
      labelledBy="upgrade-title"
      onClose={onClose}
      className="max-h-[90vh] max-w-160 sm:px-8 sm:py-7.5"
    >
      <p className="mb-2.5 font-mono text-[11px] font-medium tracking-[0.08em] text-[#B4762A]">
        {reason}
      </p>
      <h2
        id="upgrade-title"
        className="mb-1.5 font-heading text-[26px] font-extrabold tracking-tight"
      >
        Unlock the full autopilot.
      </h2>
      <p className="mb-5 text-[13.5px] leading-normal text-[#6B7A6E]">
        Pro pays for itself the moment one extra recruiter replies.
      </p>

      <table className="mb-5 w-full overflow-hidden rounded-[14px] border border-[#E6E1D5] text-left">
        <thead className="bg-[#EFECE4] text-[10.5px] font-bold tracking-[0.06em] text-[#6B7A6E]">
          <tr>
            <th scope="col" className="px-4.5 py-2.5">
              <span className="sr-only">Feature</span>
            </th>
            <th scope="col" className="w-20 py-2.5 text-center">
              FREE
            </th>
            <th
              scope="col"
              className="w-20 py-2.5 pr-4.5 text-center text-[#1E7A4F]"
            >
              PRO
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {isPending &&
            Array.from({ length: 6 }, (_, index) => (
              <tr
                key={index}
                aria-hidden="true"
                className="border-t border-[#EFECE4]"
              >
                <td colSpan={3} className="px-4.5 py-2.5">
                  <SkeletonBlock tone="row" className="h-4 w-full" />
                </td>
              </tr>
            ))}
          {planComparisonRows.map((row) => (
            <tr key={row.label} className="border-t border-[#EFECE4]">
              <th
                scope="row"
                className="px-4.5 py-2.5 text-[12.5px] font-semibold"
              >
                {row.label}
              </th>
              <td className="text-center text-xs text-[#9A9384]">{row.free}</td>
              <td className="pr-4.5 text-center text-xs font-bold text-[#1E7A4F]">
                {row.pro}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex flex-wrap items-center gap-3">
        <ActionButton
          className="flex-1 rounded-xl p-3.5 text-sm font-extrabold whitespace-normal"
          disabled={isUpgrading}
          onClick={onUpgrade}
        >
          {isUpgrading ? "Upgrading…" : "Upgrade to Pro — $9/mo student rate"}
        </ActionButton>
        <button
          type="button"
          onClick={onClose}
          className="p-2.5 text-[13px] font-semibold text-[#6B7A6E] hover:text-[#141C17]"
        >
          Maybe later
        </button>
      </div>
      <p className="mt-2.75 text-center text-[11.5px] text-[#9A9384]">
        Cancel anytime · 7-day refund · Placement+ with human resume review at
        $19/mo
      </p>
    </Modal>
  );
}
