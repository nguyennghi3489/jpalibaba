import { Address } from "./address";

enum SignupUserType {
  Importer,
  Retailer,
}

export class NewUserInfo {
  type: SignupUserType;
  companyName: string;
  representativeName: string;
  registrationFile: File | null;
  enterpriseNumber: string;
  contactPerson: string;
  contactEmail: string;
  contactTel: string;
  password: string;
  companyAddress: Address | null;
  shippingAddress: Address;
  constructor(
    type: SignupUserType,
    companyName: string,
    representativeName: string,
    enterpriseNumber: string,
    registrationFile: File | null = null,
    contactPerson: string,
    contactEmail: string,
    contactTel: string,
    password: string,
    companyAddress: Address | null = null,
    shippingAddress: Address
  ) {
    this.type = type;
    this.companyName = companyName;
    this.representativeName = representativeName;
    this.enterpriseNumber = enterpriseNumber;
    this.registrationFile = registrationFile;
    this.contactPerson = contactPerson;
    this.contactEmail = contactEmail;
    this.contactTel = contactTel;
    this.password = password;
    this.companyAddress = companyAddress;
    this.shippingAddress = shippingAddress;
  }
}
