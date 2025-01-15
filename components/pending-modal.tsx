import { CircleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Poppins } from "next/font/google";

interface PendingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export function PendingModal({ isOpen, onClose }: PendingModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={`${poppins.variable} font-poppins p-7 py-10 space-y-6 sm:max-w-sm`}
      >
        <DialogHeader className="text-center space-y-6">
          <div className="space-y-2">
            <div className="mx-auto w-12 h-12 rounded-sm bg-pending/10 flex items-center justify-center">
              <CircleAlert className="w-6 h-6 text-pending" />
            </div>
            <DialogTitle className="text-xl mb-6 text-center font-normal text-pending">
              Pending
            </DialogTitle>
          </div>
          <DialogDescription className="text-center text-sm">
            Your registration is awaiting approval from our partnership team
          </DialogDescription>
        </DialogHeader>
        <Button
          size={"lg"}
          onClick={onClose}
          className="w-full h-12 text-white"
        >
          Done
        </Button>
      </DialogContent>
    </Dialog>
  );
}
