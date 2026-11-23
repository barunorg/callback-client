const activeClass =
  "rounded-[9px] bg-[#FBFAF7] px-4.5 py-2.25 text-[13px] font-bold text-[#141C17] shadow-sm";
const inactiveClass =
  "rounded-[9px] px-4.5 py-2.25 text-[13px] font-bold text-[#6B7A6E]";

export default function AuthModeToggle({
  isLogin,
  onChange,
}: {
  isLogin: boolean;
  onChange: (mode: "signup" | "login") => void;
}) {
  return (
    <div
      role="group"
      aria-label="Account options"
      className="mb-6.5 inline-flex gap-0.5 rounded-[11px] bg-[#E4E0D4] p-0.75"
    >
      <button
        type="button"
        aria-pressed={!isLogin}
        onClick={() => onChange("signup")}
        className={isLogin ? inactiveClass : activeClass}
      >
        Create account
      </button>
      <button
        type="button"
        aria-pressed={isLogin}
        onClick={() => onChange("login")}
        className={isLogin ? activeClass : inactiveClass}
      >
        Sign in
      </button>
    </div>
  );
}
