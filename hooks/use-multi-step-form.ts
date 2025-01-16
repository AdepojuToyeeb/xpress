import { useState } from "react";
import { BusinessFormData, FormStep } from "../types/form";
import { validateStep1, validateStep2 } from "@/lib/formValidation";
import { toast } from "sonner";

export function useMultiStepForm() {
  const [step, setStep] = useState<FormStep>(1);
  const [showPendingModal, setShowPendingModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<BusinessFormData>({
    businessName: "",
    businessEmail: "",
    businessPhone: "",
    businessCategory: "",
    accountNumber: "",
    image: undefined,
    houseNumber: "",
    street: "",
    city: "",
    state: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof BusinessFormData, string>>
  >({});

  const updateFormData = (
    field: keyof BusinessFormData,
    value: string | File
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateCurrentStep = () => {
    if (step === 1) {
      const stepErrors = validateStep1(formData);
      setErrors(stepErrors);
      return Object.keys(stepErrors).length === 0;
    } else {
      const stepErrors = validateStep2(formData);
      setErrors(stepErrors);
      return Object.keys(stepErrors).length === 0;
    }
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      setStep(2);
    }
  };

  const prevStep = () => {
    setStep(1);
  };

  const submitForm = async () => {
    if (validateCurrentStep()) {
      try {
        setIsLoading(true);
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to sign up");
        }

        setShowPendingModal(true);
      } catch (error) {
        toast.error("Failed to sign up. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    step,
    formData,
    errors,
    updateFormData,
    nextStep,
    prevStep,
    submitForm,
    showPendingModal,
    isLoading,
    setShowPendingModal,
  };
}
