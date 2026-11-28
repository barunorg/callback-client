"use client";

import { useInvalidatingMutation } from "@/hooks/useInvalidatingMutation";
import { Plus } from "lucide-react";
import { useRef, type ChangeEvent } from "react";
import * as workspaceApi from "@/lib/api/workspaceApi";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import { cn } from "@/lib/utils";
import type { ResumeVersion } from "@/types/workspace/documents";
import ActionButton from "@/components/shared/ActionButton";
import Panel from "@/components/shared/Panel";
import Pill from "@/components/shared/Pill";
import { useToast } from "@/stores/ToastProvider";

export default function ResumeVersionsPanel({
  resumeVersions,
}: {
  resumeVersions: ResumeVersion[];
}) {
  const pushToast = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const upload = useInvalidatingMutation({
    mutationFn: (file: File) => workspaceApi.uploadResume(file.name),
    invalidate: [workspaceQueries.documents.queryKey],
    onSuccess: (_result, file) => {
      pushToast(`${file.name} parsed — added as a new base version`);
    },
  });

  function uploadSelectedFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) upload.mutate(file);
    event.target.value = "";
  }

  return (
    <Panel
      title="Resume versions"
      aside={
        <>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx"
            hidden
            onChange={uploadSelectedFile}
          />
          <ActionButton
            size="sm"
            disabled={upload.isPending}
            onClick={() => fileInputRef.current?.click()}
          >
            <Plus aria-hidden="true" className="size-3.5" />
            {upload.isPending ? "Uploading…" : "Upload"}
          </ActionButton>
        </>
      }
      description="The agent picks the best-performing base for each role, then tailors a copy."
    >
      <ul className="flex flex-col gap-2.25">
        {resumeVersions.map((resume) => (
          <li
            key={resume.id}
            className={cn(
              "flex items-center gap-3 rounded-[11px] border bg-white px-3.5 py-3",
              resume.isBest ? "border-[#A9C9AF]" : "border-[#E6E1D5]",
            )}
          >
            <span
              aria-hidden="true"
              className="grid size-8.5 shrink-0 place-items-center rounded-md bg-[#B4483A] text-[9px] font-extrabold text-white"
            >
              PDF
            </span>
            <div className="min-w-0 flex-1">
              <p className="flex flex-wrap items-center gap-2">
                <span className="text-[12.5px] font-bold wrap-anywhere">
                  {resume.name}
                </span>
                {resume.tag && (
                  <Pill className="px-2 py-0.5 text-[9.5px] font-extrabold tracking-[0.04em]">
                    {resume.tag}
                  </Pill>
                )}
              </p>
              <p className="mt-0.5 text-[11px] text-[#6B7A6E]">{resume.stat}</p>
            </div>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
