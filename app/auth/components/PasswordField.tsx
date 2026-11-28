import { useState } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import { inputClass } from "../constants/formClasses";
import FieldError from "./FieldError";

export default function PasswordField({
  isLogin,
  error,
  registration,
  onForgotPassword,
}: {
  isLogin: boolean;
  error?: string;
  registration: UseFormRegisterReturn;
  onForgotPassword: () => void;
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between">
        <label htmlFor="password" className="text-xs font-bold">
          Password
        </label>
        {isLogin && (
          <button
            type="button"
            onClick={onForgotPassword}
            className="text-[11.5px] font-semibold text-[#1E4A7A] hover:underline"
          >
            Forgot password?
          </button>
        )}
      </div>
      <div className="relative">
        <input
          id="password"
          type={isPasswordVisible ? "text" : "password"}
          autoComplete={isLogin ? "current-password" : "new-password"}
          placeholder={isLogin ? "Your password" : "At least 8 characters"}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "password-error" : undefined}
          {...registration}
          className={`${inputClass} pr-18.5`}
        />
        <button
          type="button"
          aria-controls="password"
          aria-label={isPasswordVisible ? "Hide password" : "Show password"}
          onClick={() => setIsPasswordVisible((visible) => !visible)}
          className="absolute top-1/2 right-2 -translate-y-1/2 rounded-[7px] bg-[#EDEAE0] px-2.5 py-1.5 text-[11px] font-bold text-[#4A554C]"
        >
          {isPasswordVisible ? "Hide" : "Show"}
        </button>
      </div>
      <FieldError id="password-error" message={error} />
    </div>
  );
}
