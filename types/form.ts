export interface BusinessFormData {
  businessName: string;
  businessEmail: string;
  businessPhone: string;
  businessCategory: string;
  accountNumber: string;
  image?: File;
  houseNumber: string;
  street: string;
  city: string;
  state: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  password: string;
  confirmPassword: string;
}
export interface SignInFormData {
  email: string;
  password: string;
}

export type FormStep = 1 | 2;
