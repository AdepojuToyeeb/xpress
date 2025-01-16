export interface User {
  id: string;
  email: string;
  businessName: string;
  role: "partner";
}

export interface AuthResponse {
  user: User;
  token: string;
}
