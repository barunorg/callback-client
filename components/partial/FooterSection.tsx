import BrandMark from "@/components/icons/BrandMark";

export default function FooterSection() {
  return (
    <footer className="border-t border-[#DED9CC]">
      <div className="mx-auto flex max-w-300 flex-wrap items-center justify-between gap-4 px-5 py-8 sm:px-12">
        <div className="flex items-center gap-2.5">
          <BrandMark className="size-6 rounded-[7px] text-[13px]" />
          <span className="text-[13px] font-semibold text-[#4A554C]">
            Callback — you study, it applies.
          </span>
        </div>
        <p className="text-xs text-[#9A9384]">
          We never apply without your rules. Your data stays yours.
        </p>
      </div>
    </footer>
  );
}
