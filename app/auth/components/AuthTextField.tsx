import type { ReactNode } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import { inputClass } from "../constants/formClasses";
import FieldError from "./FieldError";

export default function AuthTextField({
  id,
  label,
  type = "text",
  autoComplete,
  placeholder,
  error,
  registration,
  children,
}: {
  id: string;
  label: string;
  type?: "text" | "email";
  autoComplete: string;
  placeholder: string;
  error?: string;
  registration: UseFormRegisterReturn;
  children?: ReactNode;
}) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-bold">
        {label}
      </label>
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        {...registration}
        className={inputClass}
      />
      <FieldError id={errorId} message={error} />
      {children}
    </div>
  );
}
