import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BUSINESS_CATEGORIES } from "../../constants/categories";
import { BusinessFormData } from "../../types/form";
import { FileUpload } from "../ui/file-upload";

interface StepOneProps {
  formData: BusinessFormData;
  errors: Partial<Record<keyof BusinessFormData, string>>;
  updateFormData: (field: keyof BusinessFormData, value: string | File) => void;
}

export function StepOne({ formData, errors, updateFormData }: StepOneProps) {
  return (
    <div className="space-y-4">
      <p className="text-primary text-sm font-medium">Business Information</p>
      <div className="space-y-1">
        <Label
          className="flex justify-between items-center"
          htmlFor="businessName"
        >
          Business name{" "}
          {errors.businessName && (
            <p className="text-xs text-red-500">{errors.businessName}</p>
          )}
        </Label>
        <Input
          id="businessName"
          value={formData.businessName}
          onChange={(e) => updateFormData("businessName", e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <Label
          className="flex justify-between items-center"
          htmlFor="businessEmail"
        >
          Business Email Address{" "}
          {errors.businessEmail && (
            <p className="text-xs text-red-500">{errors.businessEmail}</p>
          )}
        </Label>
        <Input
          id="businessEmail"
          type="email"
          value={formData.businessEmail}
          onChange={(e) => updateFormData("businessEmail", e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <Label
          className="flex justify-between items-center"
          htmlFor="businessPhone"
        >
          Business Phone Number{" "}
          {errors.businessPhone && (
            <p className="text-xs text-red-500">{errors.businessPhone}</p>
          )}
        </Label>
        <Input
          id="businessPhone"
          type="tel"
          value={formData.businessPhone}
          onChange={(e) => updateFormData("businessPhone", e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <Label
          className="flex justify-between items-center"
          htmlFor="businessCategory"
        >
          Business Category
          {errors.businessCategory && (
            <p className="text-xs text-red-500">{errors.businessCategory}</p>
          )}
        </Label>
        <Select
          value={formData.businessCategory}
          onValueChange={(value) => updateFormData("businessCategory", value)}
        >
          <SelectTrigger className="text-xs">
            <SelectValue
              className="capitalize"
              placeholder="Select an option"
            />
          </SelectTrigger>
          <SelectContent>
            {BUSINESS_CATEGORIES.map((option) => (
              <SelectItem
                className="text-xs capitalize"
                key={option}
                value={option}
              >
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <Label
          className="flex justify-between items-center"
          htmlFor="accountNumber"
        >
          Account No
          {errors.accountNumber && (
            <p className="text-xs text-red-500">{errors.accountNumber}</p>
          )}
        </Label>
        <Input
          id="accountNumber"
          value={formData.accountNumber}
          onChange={(e) => updateFormData("accountNumber", e.target.value)}
        />
      </div>
      <div className="space-y-4">
        <FileUpload
          onFileSelect={(file) => updateFormData("image", file)}
          error={errors.image}
        />
      </div>
    </div>
  );
}
