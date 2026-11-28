// Auth API — currently mocked. Replace each body with the real auth
// provider / backend call when authentication is connected.

import type { AuthCredentials, AuthProvider } from "@/types/auth";
import { mockRequest } from "./mock/mockRequest";

export const signIn = ({ email }: AuthCredentials) =>
  mockRequest({ email, isNewAccount: false });

export const signUp = ({ name, email }: AuthCredentials) =>
  mockRequest({ name, email, isNewAccount: true });

export const signInWithProvider = (provider: AuthProvider) =>
  mockRequest({ provider });

export const requestPasswordReset = (email: string) => mockRequest({ email });
