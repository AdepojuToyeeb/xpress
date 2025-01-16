export type VerifierStatus =
  | VerifierStatusEnum.ACTIVE
  | VerifierStatusEnum.PENDING
  | VerifierStatusEnum.DEACTIVATED;

export enum VerifierStatusEnum {
  ACTIVE = "active",
  PENDING = "awaiting_approval",
  DEACTIVATED = "deactivated",
}

export interface Verifier {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  partner: string;
  location: string;
  status: VerifierStatus;
}
