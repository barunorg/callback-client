"use client";

import { PenLine, Sparkles } from "lucide-react";
import * as workspaceApi from "@/lib/api/workspaceApi";
import type { CoverLetter } from "@/types/workspace/documents";
import ActionButton from "@/components/shared/ActionButton";
import Panel from "@/components/shared/Panel";
import { useToast } from "@/stores/ToastProvider";

export default function CoverLettersPanel({
  coverLetters,
}: {
  coverLetters: CoverLetter[];
}) {
  const pushToast = useToast();

  async function openLetter(letterId: string) {
    await workspaceApi.openCoverLetter(letterId);
    pushToast("Cover letter opened — edit, and the send uses this version", {
      kind: "info",
    });
  }

  async function generateLetter() {
    await workspaceApi.generateCoverLetter();
    pushToast(
      "Pick a queued job — a cover letter drafts from your resume + its JD in ~15s",
      { kind: "info" },
    );
  }

  return (
    <Panel
      title="Cover letters & writing"
      description="Generated per role from your resume + the JD when a portal demands one. Edit, then it’s saved here."
    >
      <ul className="flex flex-col gap-2.25">
        {coverLetters.map((letter) => (
          <li
            key={letter.id}
            className="flex items-center gap-3 rounded-[11px] border border-[#E6E1D5] bg-white px-3.5 py-3"
          >
            <span
              aria-hidden="true"
              className="grid size-8.5 shrink-0 place-items-center rounded-md bg-[#1E4A7A] text-white"
            >
              <PenLine className="size-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[12.5px] font-bold">{letter.name}</p>
              <p className="mt-0.5 text-[11px] text-[#6B7A6E]">{letter.stat}</p>
            </div>
            <ActionButton
              variant="light"
              size="sm"
              aria-label={`Open ${letter.name} cover letter`}
              className="rounded-md px-2.75 py-1.5 text-[11px]"
              onClick={() => openLetter(letter.id)}
            >
              Open
            </ActionButton>
          </li>
        ))}
      </ul>

      <ActionButton
        variant="dashed"
        className="mt-2.25 w-full rounded-[11px] p-2.75 text-xs font-semibold whitespace-normal"
        onClick={generateLetter}
      >
        <Sparkles aria-hidden="true" className="size-3.5" />
        Generate a cover letter for a specific job
      </ActionButton>
    </Panel>
  );
}
