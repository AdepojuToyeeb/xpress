import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full">
        <div className="container max-w-7xl flex items-center justify-between py-6 px-4 mx-auto">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="XPRESS Logo"
              width={120}
              height={40}
              priority
            />
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600">
              New to Xpress Rewards?{" "}
            </span>
            <Button variant="outline" asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
