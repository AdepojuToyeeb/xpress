import { BusinessFormData } from "@/types/form";

export const validateStep1 = (data: Partial<BusinessFormData>) => {
  const errors: Partial<Record<keyof BusinessFormData, string>> = {};

  if (!data.businessName?.trim()) {
    errors.businessName = "Business name is required";
  }

  if (!data.businessEmail?.trim()) {
    errors.businessEmail = "Business email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.businessEmail)) {
    errors.businessEmail = "Invalid email format";
  }

  if (!data.businessPhone?.trim()) {
    errors.businessPhone = "Business phone is required";
  }

  if (!data.businessCategory) {
    errors.businessCategory = "Business category is required";
  }

  if (!data.accountNumber?.trim()) {
    errors.accountNumber = "Account number is required";
  }
  if (!data.image) {
    errors.image = "Logo is required";
  }

  return errors;
};

export const validateStep2 = (data: Partial<BusinessFormData>) => {
  const errors: Partial<Record<keyof BusinessFormData, string>> = {};

  if (!data.street?.trim()) {
    errors.street = "Street is required";
  }

  if (!data.city?.trim()) {
    errors.city = "City is required";
  }

  if (!data.state?.trim()) {
    errors.state = "State is required";
  }

  if (!data.contactName?.trim()) {
    errors.contactName = "Contact name is required";
  }

  if (!data.contactPhone?.trim()) {
    errors.contactPhone = "Contact phone is required";
  }

  if (!data.contactEmail?.trim()) {
    errors.contactEmail = "Contact email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contactEmail)) {
    errors.contactEmail = "Invalid email format";
  }

  if (!data.password?.trim()) {
    errors.password = "Password is required";
  }

  if (!data.confirmPassword?.trim()) {
    errors.confirmPassword = "Please confirm your password";
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};
