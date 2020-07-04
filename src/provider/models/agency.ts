export class Agency {
  id: string | null;
  name: string;
  email: string;
  registrationUrl: string;
  enterpriseNumber: string;
  phone: string;
  country: string;
  address: string;
  city: string;
  zipCode: string;
  constructor(
    id: string | null = null,
    name: string,
    email: string,
    enterpriseNumber: string,
    phone: string,
    country: string,
    address: string,
    city: string,
    zipCode: string,
    registrationUrl: string = ""
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.registrationUrl = registrationUrl;
    this.enterpriseNumber = enterpriseNumber;
    this.phone = phone;
    this.country = country;
    this.address = address;
    this.city = city;
    this.zipCode = zipCode;
  }
}
