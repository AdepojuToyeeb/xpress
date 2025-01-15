import { useState } from "react";
import { BusinessFormData, FormStep } from "../types/form";
import { validateStep1, validateStep2 } from "@/lib/formValidation";

export function useMultiStepForm() {
  const [step, setStep] = useState<FormStep>(1);
  const [showPendingModal, setShowPendingModal] = useState(false);
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
    // Clear error when field is updated
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
      // Handle form submission
      setShowPendingModal(true);
      // Add your API call here
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
    setShowPendingModal,
  };
}
