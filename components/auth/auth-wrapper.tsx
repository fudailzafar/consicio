"use client";
import { useSession } from "@/lib/auth-client";

interface AuthWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function SignedIn({ children, fallback }: AuthWrapperProps) {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return fallback ? <>{fallback}</> : null;
  }

  return session ? <>{children}</> : fallback ? <>{fallback}</> : null;
}

export function SignedOut({ children, fallback }: AuthWrapperProps) {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return fallback ? <>{fallback}</> : null;
  }

  return !session ? <>{children}</> : fallback ? <>{fallback}</> : null;
}