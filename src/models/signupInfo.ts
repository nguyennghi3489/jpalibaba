import { Address } from "./address";

enum SignupUserType {
  Importer,
  Retailer,
}

export class SignupInfo {
  type: SignupUserType;
  companyName: string;
  representativeName: string;
  enterpriseNumber: string;
  contactPerson: string;
  contactEmail: string;
  contactTel: string;
  password: string;
  companyAddress: Address;
  shippingAddress: Address;
  constructor(
    type: SignupUserType,
    companyName: string,
    representativeName: string,
    enterpriseNumber: string,
    contactPerson: string,
    contactEmail: string,
    contactTel: string,
    password: string,
    companyAddress: Address,
    shippingAddress: Address
  ) {
    this.type = type;
    this.companyName = companyName;
    this.representativeName = representativeName;
    this.enterpriseNumber = enterpriseNumber;
    this.contactPerson = contactPerson;
    this.contactEmail = contactEmail;
    this.contactTel = contactTel;
    this.password = password;
    this.companyAddress = companyAddress;
    this.shippingAddress = shippingAddress;
  }
}
