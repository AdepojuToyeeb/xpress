"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UsersRound } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { NoteIcon } from "./ui/icons/note";
import { TagIcon } from "./ui/icons/tags";
import { UserIcon } from "./ui/icons/users";

const navigation = [
  { name: "Verifiers", href: "/dashboard/verifiers", icon: UserIcon },
  { name: "Deals", href: "#", icon: TagIcon },
  { name: "Transactions", href: "#", icon: NoteIcon },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:block h-screen bg-white w-60 flex-col shadow-lg">
      <div className="p-4 py-6 flex justify-center items-center">
        <Link href="/dashboard" className="">
          <Image
            src="/images/logo.png"
            alt="XPRESS Logo"
            width={120}
            height={40}
            priority
          />
        </Link>
      </div>
      <nav className="flex-1 space-y-1 px-4 py-4">
        {navigation.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center p-3 gap-3 text-sm font-normal rounded-md ",
                isActive
                  ? "bg-[#F2FAFF] text-primary border-primary border-l-[3px]"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <item.icon />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
