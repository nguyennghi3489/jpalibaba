export class Address {
  firstName: string;
  lastName: string;
  phone: string;
  street1: string;
  street2: string;
  country: string;
  city: string;
  postalcode: string;
  id: string | null;
  isCompanyAddress: boolean;
  constructor(
    firstName: string,
    lastName: string,
    phone: string,
    street1: string,
    street2: string,
    country: string,
    city: string,
    postalcode: string,
    id: string | null = null,
    isCompanyAddress: boolean = false
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.street1 = street1 ?? '';
    this.street2 = street2 ?? '';
    this.country = country;
    this.city = city;
    this.postalcode = postalcode;
    this.id = id;
    this.isCompanyAddress = isCompanyAddress;
  }

  static fromApi(data: any) {
    return new Address(
      data.firstName,
      data.lastName,
      data.phone,
      data.street1,
      data.street2,
      data.country,
      data.city,
      data.postalcode,
      data.id,
      data.isCompanyAddress
    );
  }
}

export enum AddressType {
  Company,
  Shipping,
}
