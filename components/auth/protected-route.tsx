"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/context/auth-context";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoading } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check token only on the client side
    const token =
      typeof window !== "undefined" ? sessionStorage.getItem("token") : null;

    if (!isLoading && !token) {
      router.push(`/signin?from=${encodeURIComponent(pathname)}`);
    } else if (token) {
      setIsAuthenticated(true); // Update authentication state if token exists
    }
  }, [isLoading, router, pathname]);
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
