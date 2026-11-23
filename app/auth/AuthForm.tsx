"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState, type FormEvent } from "react";

function AuthFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState("");
  const hasStudentEmail = /\.edu(?:\.[a-z]{2})?$/i.test(email.trim());

  function changeMode(mode: "signup" | "login") {
    setNotice("");
    router.replace(mode === "login" ? "/auth?mode=login" : "/auth", {
      scroll: false,
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(
      "Authentication isn’t connected yet, so your information has not been submitted.",
    );
  }

  return (
    <div className="w-full">
      <div
        role="group"
        aria-label="Account options"
        className="mb-[26px] inline-flex gap-0.5 rounded-[11px] bg-[#E4E0D4] p-[3px]"
      >
        <button
          type="button"
          aria-pressed={!isLogin}
          onClick={() => changeMode("signup")}
          className={
            !isLogin
              ? "rounded-[9px] bg-[#FBFAF7] px-[18px] py-[9px] text-[13px] font-bold text-[#141C17] shadow-sm"
              : "rounded-[9px] px-[18px] py-[9px] text-[13px] font-bold text-[#6B7A6E]"
          }
        >
          Create account
        </button>
        <button
          type="button"
          aria-pressed={isLogin}
          onClick={() => changeMode("login")}
          className={
            isLogin
              ? "rounded-[9px] bg-[#FBFAF7] px-[18px] py-[9px] text-[13px] font-bold text-[#141C17] shadow-sm"
              : "rounded-[9px] px-[18px] py-[9px] text-[13px] font-bold text-[#6B7A6E]"
          }
        >
          Sign in
        </button>
      </div>

      <h1 className="mb-2 font-heading text-[30px] leading-[1.08] font-extrabold tracking-[-0.03em]">
        {isLogin ? "Welcome back." : "Set up once. Apply forever."}
      </h1>
      <p className="mb-6 text-[13.5px] leading-[1.55] text-[#4A554C]">
        {isLogin
          ? "Your agent kept working — new matches and any recruiter replies are waiting."
          : "Create your account, then a 3-minute guided setup. Your first matches arrive before you finish."}
      </p>

      <div className="mb-[18px] flex flex-col gap-2.5">
        <button
          type="button"
          onClick={() => setNotice("Google sign-in isn’t connected yet.")}
          className="flex items-center justify-center gap-2.5 rounded-[11px] border border-[#CFC9BA] bg-[#FBFAF7] p-3 text-[13.5px] font-bold transition-colors hover:bg-white"
        >
          <span aria-hidden="true" className="font-extrabold text-[#4285F4]">
            G
          </span>
          {isLogin ? "Continue with Google" : "Sign up with Google"}
        </button>
        <button
          type="button"
          onClick={() => setNotice("LinkedIn sign-in isn’t connected yet.")}
          className="flex items-center justify-center gap-2.5 rounded-[11px] border border-[#CFC9BA] bg-[#FBFAF7] p-3 text-[13.5px] font-bold transition-colors hover:bg-white"
        >
          <span
            aria-hidden="true"
            className="grid size-[17px] place-items-center rounded-[4px] bg-[#1E4A7A] text-[10px] font-extrabold text-white"
          >
            in
          </span>
          {isLogin ? "Continue with LinkedIn" : "Sign up with LinkedIn"}
        </button>
      </div>

      <div className="mb-[18px] flex items-center gap-3">
        <span className="h-px flex-1 bg-[#D8D2C2]" />
        <span className="text-[11px] font-semibold tracking-[0.05em] text-[#9A9384]">
          OR WITH EMAIL
        </span>
        <span className="h-px flex-1 bg-[#D8D2C2]" />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-[11px]">
          {!isLogin && (
            <div>
              <label
                htmlFor="full-name"
                className="mb-1.5 block text-xs font-bold"
              >
                Full name
              </label>
              <input
                id="full-name"
                name="name"
                autoComplete="name"
                required
                placeholder="Prakash R."
                className="w-full rounded-[10px] border border-[#CFC9BA] bg-[#FBFAF7] px-3.5 py-3 text-[13.5px] outline-none placeholder:text-[#9A9384] focus:border-[#141C17] focus:bg-white"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-bold">
              {isLogin ? "Email" : "University email (or any email)"}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@university.edu"
              className="w-full rounded-[10px] border border-[#CFC9BA] bg-[#FBFAF7] px-3.5 py-3 text-[13.5px] outline-none placeholder:text-[#9A9384] focus:border-[#141C17] focus:bg-white"
            />
            {!isLogin && hasStudentEmail && (
              <p className="mt-2 inline-flex rounded-full border border-[#A9C9AF] bg-[#EFF5EF] px-3 py-1.5 text-[11.5px] font-bold text-[#1E7A4F]">
                University email — student rate unlocked: Pro at $9/mo
              </p>
            )}
          </div>

          <div>
            <div className="mb-1.5 flex items-baseline justify-between">
              <label htmlFor="password" className="text-xs font-bold">
                Password
              </label>
              {isLogin && (
                <button
                  type="button"
                  onClick={() =>
                    setNotice(
                      "Password reset isn’t available until authentication is connected.",
                    )
                  }
                  className="text-[11.5px] font-semibold text-[#1E4A7A] hover:underline"
                >
                  Forgot password?
                </button>
              )}
            </div>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={isPasswordVisible ? "text" : "password"}
                autoComplete={isLogin ? "current-password" : "new-password"}
                minLength={isLogin ? undefined : 8}
                required
                placeholder={
                  isLogin ? "Your password" : "At least 8 characters"
                }
                className="w-full rounded-[10px] border border-[#CFC9BA] bg-[#FBFAF7] px-3.5 py-3 pr-[74px] text-[13.5px] outline-none placeholder:text-[#9A9384] focus:border-[#141C17] focus:bg-white"
              />
              <button
                type="button"
                aria-controls="password"
                aria-label={
                  isPasswordVisible ? "Hide password" : "Show password"
                }
                onClick={() => setIsPasswordVisible((visible) => !visible)}
                className="absolute top-1/2 right-2 -translate-y-1/2 rounded-[7px] bg-[#EDEAE0] px-2.5 py-1.5 text-[11px] font-bold text-[#4A554C]"
              >
                {isPasswordVisible ? "Hide" : "Show"}
              </button>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-5 w-full rounded-[11px] bg-[#141C17] p-3.5 text-sm font-extrabold text-white transition-colors hover:bg-[#0F1F16]"
        >
          {isLogin ? "Sign in" : "Create account → 3-min setup"}
        </button>
      </form>

      {!isLogin && (
        <p className="mt-3.5 text-center text-[11.5px] leading-[1.55] text-[#9A9384]">
          By continuing you agree to the Terms &amp; Privacy Policy. Connections
          are read-only; nothing ever sends without your approval.
        </p>
      )}

      <p className="mt-[18px] text-center text-[12.5px] text-[#4A554C]">
        {isLogin ? "New here?" : "Already have an account?"}{" "}
        <Link
          href={isLogin ? "/auth" : "/auth?mode=login"}
          className="font-bold text-[#1E4A7A] hover:underline"
        >
          {isLogin ? "Create an account" : "Sign in"}
        </Link>
      </p>

      <p
        role="status"
        aria-live="polite"
        className={
          notice
            ? "mt-4 rounded-lg border border-[#CFC9BA] bg-white px-3 py-2.5 text-sm text-[#4A554C]"
            : "sr-only"
        }
      >
        {notice}
      </p>
    </div>
  );
}

export default function AuthForm() {
  return (
    <Suspense
      fallback={
        <p className="text-sm text-[#6B7A6E]" role="status">
          Loading account form…
        </p>
      }
    >
      <AuthFormContent />
    </Suspense>
  );
}
