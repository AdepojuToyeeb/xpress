"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BusinessFormData } from "../../types/form";
import { US_STATES } from "@/constants/states";

interface StepTwoProps {
  formData: BusinessFormData;
  errors: Partial<Record<keyof BusinessFormData, string>>;
  updateFormData: (field: keyof BusinessFormData, value: string) => void;
}

export function StepTwo({ formData, errors, updateFormData }: StepTwoProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <p className="text-primary text-sm font-medium">Business Address</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-1">
            <Label
              className="flex justify-between items-center"
              htmlFor="houseNumber"
            >
              House Number{" "}
              {errors.houseNumber && (
                <p className="text-xs text-red-500">{errors.houseNumber}</p>
              )}
            </Label>
            <Input
              id="houseNumber"
              value={formData.houseNumber}
              onChange={(e) => updateFormData("houseNumber", e.target.value)}
            />
          </div>
          <div className="col-span-2 space-y-1">
            <Label
              className="flex justify-between items-center"
              htmlFor="street"
            >
              Street
              {errors.street && (
                <p className="text-xs text-red-500">{errors.street}</p>
              )}
            </Label>
            <Input
              id="street"
              value={formData.street}
              onChange={(e) => updateFormData("street", e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label className="flex justify-between items-center" htmlFor="city">
              City
              {errors.city && (
                <p className="text-xs text-red-500">{errors.city}</p>
              )}
            </Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) => updateFormData("city", e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <Label
              className="flex justify-between items-center"
              htmlFor="state"
            >
              State
              {errors.state && (
                <p className="text-xs text-red-500">{errors.state}</p>
              )}
            </Label>
            <Select
              value={formData.state}
              onValueChange={(value) => updateFormData("state", value)}
            >
              <SelectTrigger id="state">
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                {US_STATES.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-primary text-sm font-medium">
          Contact Person Information
        </p>
        <div className="space-y-1">
          <Label
            className="flex justify-between items-center"
            htmlFor="contactName"
          >
            Contact Name{" "}
            {errors.contactName && (
              <p className="text-xs text-red-500">{errors.contactName}</p>
            )}
          </Label>
          <Input
            id="contactName"
            value={formData.contactName}
            onChange={(e) => updateFormData("contactName", e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <Label
            className="flex justify-between items-center"
            htmlFor="contactPhone"
          >
            Contact Phone Number{" "}
            {errors.contactPhone && (
              <p className="text-xs text-red-500">{errors.contactPhone}</p>
            )}
          </Label>
          <Input
            id="contactPhone"
            type="tel"
            value={formData.contactPhone}
            onChange={(e) => updateFormData("contactPhone", e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <Label
            className="flex justify-between items-center"
            htmlFor="contactEmail"
          >
            Contact Email Address{" "}
            {errors.contactEmail && (
              <p className="text-xs text-red-500">{errors.contactEmail}</p>
            )}
          </Label>
          <Input
            id="contactEmail"
            type="email"
            value={formData.contactEmail}
            onChange={(e) => updateFormData("contactEmail", e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-primary text-sm font-medium">Password</p>
        <div className="space-y-1">
          <Label
            className="flex justify-between items-center"
            htmlFor="password"
          >
            Password{" "}
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password}</p>
            )}
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => updateFormData("password", e.target.value)}
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
              <span className="sr-only">
                {showPassword ? "Hide password" : "Show password"}
              </span>
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          <Label
            className="flex justify-between items-center"
            htmlFor="confirmPassword"
          >
            Confirm Password
            {errors.confirmPassword && (
              <p className="text-xs text-red-500">{errors.confirmPassword}</p>
            )}
          </Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={(e) =>
                updateFormData("confirmPassword", e.target.value)
              }
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
              <span className="sr-only">
                {showConfirmPassword ? "Hide password" : "Show password"}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
