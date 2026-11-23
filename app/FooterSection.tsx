export default function FooterSection() {
  return (
    <footer className="border-t border-[#DED9CC]">
      <div className="mx-auto flex max-w-300 flex-wrap items-center justify-between gap-4 px-5 py-8 sm:px-12">
        <div className="flex items-center gap-2.5">
          <span className="grid size-6 place-items-center rounded-[7px] bg-[#8FE388] font-heading text-[13px] font-extrabold text-[#0F1F16]">
            C
          </span>
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
