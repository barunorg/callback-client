import Link from "next/link";

export default function NavBar() {
  return (
    <header className="bg-[#EFECE4] text-[#141C17] border-b border-b-gray-950">
      <div className="mx-auto flex max-w-300 flex-col gap-5 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-12">
        <Link
          href="/"
          className="flex w-fit items-center gap-2.5 text-[#141C17] no-underline"
          aria-label="Callback home"
        >
          <span className="grid size-8 place-items-center rounded-[9px] bg-[#8FE388] font-extrabold text-[#0F1F16]">
            C
          </span>
          <span className="font-bold tracking-tight hidden sm:block">
            Callback
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[13.5px] font-semibold text-[#4A554C] sm:gap-x-6.5"
        >
          <a className="hover:text-[#1E7A4F]" href="#how">
            How it works
          </a>
          <a className="hover:text-[#1E7A4F]" href="#shield">
            Ghost shield
          </a>
          <a className="hover:text-[#1E7A4F]" href="#pricing">
            Pricing
          </a>
          <Link className="hover:text-[#1E7A4F]" href="/auth?mode=login">
            Log in
          </Link>
          <Link
            className="rounded-[10px] bg-[#141C17] px-3.5 py-1.5 sm:px-4.5 sm:py-2.5 text-white transition-colors hover:bg-[#1E7A4F]"
            href="/auth"
          >
            Get started free
          </Link>
        </nav>
      </div>
    </header>
  );
}
