export class UserBasicInfo {
  companyName: string;
  representativeName: string;
  enterpriseNumber: string;
  contactPerson: string;
  contactEmail: string;
  contactTel: string;
  aboutMe: string;
  constructor(
    companyName: string,
    representativeName: string,
    enterpriseNumber: string,
    contactPerson: string,
    contactEmail: string,
    contactTel: string,
    aboutMe: string
  ) {
    this.companyName = companyName;
    this.representativeName = representativeName;
    this.enterpriseNumber = enterpriseNumber;
    this.contactPerson = contactPerson;
    this.contactEmail = contactEmail;
    this.contactTel = contactTel;
    this.aboutMe = aboutMe;
  }
}
