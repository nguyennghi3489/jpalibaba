import { Address } from "./address";

enum SignupUserType {
  Importer,
  Retailer,
}

export class NewUserInfo {
  role: SignupUserType;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  companyAddress: Address | null;
  shippingAddress: Address;
  constructor(
    role: SignupUserType,
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    confirmPassword: string,
    companyAddress: Address | null = null,
    shippingAddress: Address
  ) {
    this.role = role;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.confirmPassword = confirmPassword;
    this.password = password;
    this.companyAddress = companyAddress;
    this.shippingAddress = shippingAddress;
  }
}
