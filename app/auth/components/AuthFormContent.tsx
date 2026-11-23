"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import * as authApi from "@/lib/api/authApi";
import AuthModeToggle from "./AuthModeToggle";
import AuthTextField from "./AuthTextField";
import PasswordField from "./PasswordField";
import SocialAuthButtons from "./SocialAuthButtons";
import { createAuthSchema, type AuthFormValues } from "../schemas/authSchema";

export default function AuthFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const [notice, setNotice] = useState("");
  const authSchema = useMemo(() => createAuthSchema(isLogin), [isLogin]);
  const {
    clearErrors,
    control,
    getValues,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AuthFormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onBlur",
    resolver: zodResolver(authSchema),
  });
  const email = useWatch({ control, name: "email" }) ?? "";
  const hasStudentEmail = /\.edu(?:\.[a-z]{2})?$/i.test(email.trim());

  const enterWorkspace = () => router.replace("/dashboard/");
  const emailAuth = useMutation({
    mutationFn: (values: AuthFormValues) =>
      isLogin ? authApi.signIn(values) : authApi.signUp(values),
    onSuccess: enterWorkspace,
  });
  const providerAuth = useMutation({
    mutationFn: authApi.signInWithProvider,
    onSuccess: enterWorkspace,
  });
  const isPending = emailAuth.isPending || providerAuth.isPending;

  function changeMode(mode: "signup" | "login") {
    setNotice("");
    clearErrors();
    router.replace(mode === "login" ? "/auth?mode=login" : "/auth", {
      scroll: false,
    });
  }

  async function sendPasswordReset() {
    const typedEmail = getValues("email").trim();

    if (!typedEmail) {
      setNotice("Enter your email above, then tap “Forgot password?” again.");
      return;
    }

    await authApi.requestPasswordReset(typedEmail);
    setNotice(`Password reset link sent to ${typedEmail}.`);
  }

  return (
    <div className="w-full">
      <AuthModeToggle isLogin={isLogin} onChange={changeMode} />

      <h1 className="mb-2 font-heading text-[30px] leading-[1.08] font-extrabold tracking-[-0.03em]">
        {isLogin ? "Welcome back." : "Set up once. Apply forever."}
      </h1>
      <p className="mb-6 text-[13.5px] leading-[1.55] text-[#4A554C]">
        {isLogin
          ? "Your agent kept working — new matches and any recruiter replies are waiting."
          : "Create your account, then a 3-minute guided setup. Your first matches arrive before you finish."}
      </p>

      <SocialAuthButtons
        isLogin={isLogin}
        isPending={isPending}
        onSelect={(provider) => providerAuth.mutate(provider)}
      />

      <div className="mb-4.5 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#D8D2C2]" />
        <span className="text-[11px] font-semibold tracking-wider text-[#9A9384]">
          OR WITH EMAIL
        </span>
        <span className="h-px flex-1 bg-[#D8D2C2]" />
      </div>

      <form
        noValidate
        onSubmit={handleSubmit((values) => emailAuth.mutate(values))}
      >
        <div className="flex flex-col gap-2.75">
          {!isLogin && (
            <AuthTextField
              id="full-name"
              label="Full name"
              autoComplete="name"
              placeholder="Prakash R."
              error={errors.name?.message}
              registration={register("name")}
            />
          )}

          <AuthTextField
            id="email"
            label={isLogin ? "Email" : "University email (or any email)"}
            type="email"
            autoComplete="email"
            placeholder="you@university.edu"
            error={errors.email?.message}
            registration={register("email")}
          >
            {!isLogin && hasStudentEmail && (
              <p className="mt-2 inline-flex rounded-full border border-[#A9C9AF] bg-[#EFF5EF] px-3 py-1.5 text-[11.5px] font-bold text-[#1E7A4F]">
                University email — student rate unlocked: Pro at $9/mo
              </p>
            )}
          </AuthTextField>

          <PasswordField
            isLogin={isLogin}
            error={errors.password?.message}
            registration={register("password")}
            onForgotPassword={sendPasswordReset}
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="mt-5 w-full rounded-[11px] bg-[#141C17] p-3.5 text-sm font-extrabold text-white transition-colors hover:bg-[#0F1F16] disabled:cursor-wait disabled:opacity-70"
        >
          {emailAuth.isPending
            ? "One moment…"
            : isLogin
              ? "Sign in"
              : "Create account → 3-min setup"}
        </button>
      </form>

      {!isLogin && (
        <p className="mt-3.5 text-center text-[11.5px] leading-[1.55] text-[#9A9384]">
          By continuing you agree to the Terms &amp; Privacy Policy. Connections
          are read-only; nothing ever sends without your approval.
        </p>
      )}

      <p className="mt-4.5 text-center text-[12.5px] text-[#4A554C]">
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
