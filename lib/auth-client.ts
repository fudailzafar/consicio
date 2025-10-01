"use client";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NODE_ENV === "development" 
    ? "http://localhost:3000" 
    : "https://consicio.vercel.app",
});

export const {
  signIn,
  signUp,
  signOut,
  useSession,
  $Infer,
} = authClient;