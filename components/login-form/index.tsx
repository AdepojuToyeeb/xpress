"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignInFormData } from "@/types/form";
import { validateLoginForm } from "@/lib/formValidation";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<SignInFormData>({
    email: "",
    password: "",
  });
  const router = useRouter();
  const searchParams = useSearchParams();

  const [errors, setErrors] = useState<Partial<SignInFormData>>({});

  const updateFormData = (field: keyof SignInFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const stepErrors = validateLoginForm(formData);
    setErrors(stepErrors);

    if (Object.keys(stepErrors).length === 0) {
      try {
        setIsLoading(true);
        const response = await fetch("/api/auth/signin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to sign in");
        }
        const from = searchParams.get("from") || "/dashboard";
        sessionStorage.setItem("token", "sd");
        router.push(from);
        router.refresh();
      } catch (error) {
        console.log(error)
        toast.error("Failed to sign in. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-4">
        <div className="space-y-6">
          <div className="space-y-1">
            <Label
              className="flex justify-between items-center"
              htmlFor="email"
            >
              Email Address
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
            />
          </div>

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
        </div>

        <div className="space-y-6">
          <Link href="/reset-password" className="text-xs ">
            Forgot Password?{" "}
            <span className="font-medium text-primary">Reset it</span>
          </Link>
          <Button
            disabled={isLoading}
            size={"lg"}
            type="submit"
            className="h-12 w-full"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>
        </div>
      </div>
    </form>
  );
}
