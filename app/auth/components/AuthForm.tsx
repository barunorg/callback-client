import { Suspense } from "react";
import AuthFormContent from "./AuthFormContent";

// AuthFormContent reads the URL (?mode=login), so it needs a Suspense
// boundary to be statically exported.
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
