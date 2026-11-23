import Link from "next/link";
import BrandMark from "@/components/icons/BrandMark";
import AuthForm from "./components/AuthForm";
import AuthProofPanel from "./components/AuthProofPanel";

export default function AuthPage() {
  return (
    <main className="min-h-svh bg-[#EFECE4] text-[#141C17]">
      <div className="grid min-h-svh lg:grid-cols-2">
        <section
          aria-label="Create or sign in to a Callback account"
          className="flex min-h-svh flex-col px-5 pt-6 pb-10 sm:px-12"
        >
          <header className="flex items-center justify-between gap-4">
            <Link
              href="/"
              aria-label="Callback home"
              className="flex items-center gap-2.5 text-[#141C17]"
            >
              <BrandMark className="size-7 rounded-lg text-[15px]" />
              <span className="font-heading text-base font-bold tracking-tight">
                Callback
              </span>
            </Link>
            <Link
              href="/"
              className="text-[12.5px] font-semibold text-[#4A554C] hover:text-[#1E7A4F]"
            >
              ← Back to site
            </Link>
          </header>

          <div className="mx-auto flex w-full max-w-100 flex-1 items-center py-9">
            <AuthForm />
          </div>
        </section>

        <AuthProofPanel />
      </div>
    </main>
  );
}
