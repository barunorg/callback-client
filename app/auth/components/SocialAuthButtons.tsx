import GoogleIcon from "@/components/icons/GoogleIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import type { AuthProvider } from "@/types/auth";

const buttonClass =
  "flex items-center justify-center gap-2.5 rounded-[11px] border border-[#CFC9BA] bg-[#FBFAF7] p-3 text-[13.5px] font-bold transition-colors hover:bg-white disabled:cursor-wait disabled:opacity-60";

export default function SocialAuthButtons({
  isLogin,
  isPending,
  onSelect,
}: {
  isLogin: boolean;
  isPending: boolean;
  onSelect: (provider: AuthProvider) => void;
}) {
  return (
    <div className="mb-4.5 flex flex-col gap-2.5">
      <button
        type="button"
        disabled={isPending}
        onClick={() => onSelect("google")}
        className={buttonClass}
      >
        <GoogleIcon />
        {isLogin ? "Continue with Google" : "Sign up with Google"}
      </button>
      <button
        type="button"
        disabled={isPending}
        onClick={() => onSelect("linkedin")}
        className={buttonClass}
      >
        <LinkedInIcon />
        {isLogin ? "Continue with LinkedIn" : "Sign up with LinkedIn"}
      </button>
    </div>
  );
}
