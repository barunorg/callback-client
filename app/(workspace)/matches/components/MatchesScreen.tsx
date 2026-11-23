"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useInvalidatingMutation } from "@/hooks/useInvalidatingMutation";
import { useRouter } from "next/navigation";
import {
  debounce,
  parseAsString,
  parseAsStringLiteral,
  useQueryState,
} from "nuqs";
import * as workspaceApi from "@/lib/api/workspaceApi";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import type { JobMatch, MatchFilterId } from "@/types/workspace/matches";
import PageHeading from "@/components/shared/PageHeading";
import { useToast } from "@/stores/ToastProvider";
import MatchCard from "./MatchCard";
import MatchFilters from "./MatchFilters";
import MatchSearch from "./MatchSearch";

const matchFilterIds = [
  "all",
  "sponsor",
  "top",
  "email",
  "flagged",
] as const satisfies readonly MatchFilterId[];

export default function MatchesScreen() {
  const { data } = useSuspenseQuery(workspaceQueries.matches);
  const pushToast = useToast();
  const router = useRouter();

  const [activeFilter, setActiveFilter] = useQueryState(
    "filter",
    parseAsStringLiteral(matchFilterIds).withDefault("all"),
  );
  // The input updates instantly; only the ?q= URL write is debounced.
  const [search, setSearch] = useQueryState(
    "q",
    parseAsString
      .withDefault("")
      .withOptions({ limitUrlUpdates: debounce(300) }),
  );

  const searchTerm = search.trim().toLowerCase();
  const visibleMatches = data.matches.filter((match) => {
    const isInFilter =
      activeFilter === "all" || match.categories.includes(activeFilter);
    const isInSearch =
      !searchTerm ||
      `${match.role} ${match.company}`.toLowerCase().includes(searchTerm);
    return isInFilter && isInSearch;
  });

  const skip = useInvalidatingMutation({
    mutationFn: (match: JobMatch) => workspaceApi.skipMatch(match.id),
    invalidate: [workspaceQueries.matches.queryKey],
    onSuccess: (_result, match) => {
      pushToast(`Skipped ${match.company} — agent will avoid similar roles`, {
        kind: "info",
      });
    },
  });

  async function queueMatch(match: JobMatch) {
    await workspaceApi.queueMatch(match.id);
    pushToast(
      `Queued ${match.company} — tailoring now, find it in Review queue`,
    );
    router.push("/queue/");
  }

  return (
    <div className="max-w-260">
      <PageHeading
        descriptionClassName="max-w-150"
        title="Today’s matches"
        description="Ranked by fit — and every one already survived a company check (domain, careers page, how often they actually post). The junk never made this list."
      />

      <div className="mb-4.5 flex flex-wrap items-center justify-between gap-3">
        <MatchFilters
          filters={data.filters}
          activeFilter={activeFilter}
          onChange={(filterId) => setActiveFilter(filterId)}
        />
        <MatchSearch value={search} onChange={(value) => setSearch(value)} />
      </div>

      {visibleMatches.length > 0 ? (
        <section aria-label="Job matches" className="flex flex-col gap-3">
          {visibleMatches.map((match) => (
            <MatchCard
              key={match.id}
              match={match}
              onSkip={() => skip.mutate(match)}
              onQueue={() => queueMatch(match)}
            />
          ))}
        </section>
      ) : (
        <p className="rounded-xl border border-dashed border-[#CFC9BA] bg-[#FBFAF7] p-8 text-center text-[13px] text-[#6B7A6E]">
          {searchTerm
            ? `No matches for “${search.trim()}”`
            : "No matches in this filter yet."}
        </p>
      )}
    </div>
  );
}
