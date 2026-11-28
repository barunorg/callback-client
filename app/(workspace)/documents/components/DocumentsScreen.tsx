"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import PageHeading from "@/components/shared/PageHeading";
import CoverLettersPanel from "./CoverLettersPanel";
import PortfolioPanel from "./PortfolioPanel";
import ResumeVersionsPanel from "./ResumeVersionsPanel";
import WorkAuthorizationPanel from "./WorkAuthorizationPanel";

export default function DocumentsScreen() {
  const { data: documents } = useSuspenseQuery(workspaceQueries.documents);

  return (
    <div className="max-w-230">
      <PageHeading
        descriptionClassName="max-w-160"
        eyebrow="❑ YOUR APPLICATION KIT"
        title="Documents"
        description="One locker for everything an application asks for — no more hunting through Downloads for the right resume version or your I-20. The agent attaches the correct file automatically."
      />

      <div className="grid grid-cols-1 items-start gap-3.5 lg:grid-cols-2">
        <ResumeVersionsPanel resumeVersions={documents.resumeVersions} />
        <WorkAuthorizationPanel documents={documents.workAuthorization} />
        <CoverLettersPanel coverLetters={documents.coverLetters} />
        <PortfolioPanel items={documents.portfolio} />
      </div>
    </div>
  );
}
