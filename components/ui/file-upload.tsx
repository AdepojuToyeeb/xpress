import { Paperclip } from "lucide-react";
import { Poppins } from "next/font/google";
import { UploadIcon } from "./icons/upload";
import { Label } from "./label";

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  error?: string;
}
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export function FileUpload({ onFileSelect, error }: FileUploadProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium flex justify-between items-center">
        Image (Logo)
        {error && <p className="text-xs text-red-500">{error}</p>}
      </Label>
      <div
        className={`border-2 border-dashed rounded-md p-6 text-center ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer flex flex-col items-center space-y-4"
        >
          <UploadIcon />
          <span
            className={`${poppins.variable} text-xs font-poppins  font-normal`}
          >
            Drag here or click the button below to upload{" "}
          </span>
          <div className="inline-flex items-center justify-center bg-primary text-white shadow hover:bg-primary/90 gap-2 whitespace-nowrap rounded-md font-medium mt-2 px-4 py-2 h-8 text-xs">
            <Paperclip  className="h-5 w-5"/> Choose File
          </div>
          <span
            className={`${poppins.variable} font-poppins text-sm text-[#4B3A5A] font-normal`}
          >
            Maximum upload size: 10MB (.jpg)
          </span>
        </label>
      </div>
    </div>
  );
}
