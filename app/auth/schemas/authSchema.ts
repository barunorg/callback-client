import { z } from "zod";

export function createAuthSchema(isLogin: boolean) {
  return z
    .object({
      name: z.string().trim(),
      email: z.string().trim().pipe(z.email("Enter a valid email address.")),
      password: z.string(),
    })
    .superRefine(({ name, password }, context) => {
      if (!isLogin && !name) {
        context.addIssue({
          code: "custom",
          message: "Enter your full name.",
          path: ["name"],
        });
      }

      if (!password) {
        context.addIssue({
          code: "custom",
          message: "Enter your password.",
          path: ["password"],
        });
      } else if (!isLogin && password.length < 8) {
        context.addIssue({
          code: "custom",
          message: "Use at least 8 characters.",
          path: ["password"],
        });
      }
    });
}

export type AuthFormValues = z.infer<ReturnType<typeof createAuthSchema>>;
