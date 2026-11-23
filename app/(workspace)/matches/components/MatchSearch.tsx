import { Search } from "lucide-react";

export default function MatchSearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div role="search" className="relative w-full sm:w-64">
      <label htmlFor="match-search" className="sr-only">
        Search matches
      </label>
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-3 size-3.5 -translate-y-1/2 text-[#9A9384]"
      />
      <input
        id="match-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search role or company"
        className="w-full rounded-full border border-[#CFC9BA] bg-white py-1.75 pr-3.25 pl-8.5 text-xs outline-none placeholder:text-[#9A9384] focus:border-[#141C17]"
      />
    </div>
  );
}
