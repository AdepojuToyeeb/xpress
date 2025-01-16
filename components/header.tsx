import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BellIcon } from "./ui/icons/bell";
import { ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 px-4">
      <div className="flex h-16 items-center justify-between w-full px-4 gap-4">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-2xl font-bold">Verifiers</h1>
          <span className="text-xs bg-[#F2FAFF] text-primary flex items-center justify-center h-6 w-6 rounded-full">
            11
          </span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <BellIcon />
            <span className="absolute top-[10px] right-[10px] h-1.5 w-1.5 rounded-full bg-[#E85652]" />
            <span className="sr-only">Notifications</span>
          </Button>

          <Image
            src="/images/profile.png"
            alt="Profile"
            className="rounded-full"
            width={40}
            height={40}
            priority
          />
          <ChevronDown className="text-[#787678]" />
        </div>
      </div>
    </header>
  );
}
