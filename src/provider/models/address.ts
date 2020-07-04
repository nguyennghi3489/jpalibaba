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
  constructor(
    firstName: string,
    lastName: string,
    phone: string,
    street1: string,
    street2: string,
    country: string,
    city: string,
    postalcode: string,
    id: string | null = null
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.street1 = street1;
    this.street2 = street2;
    this.country = country;
    this.city = city;
    this.postalcode = postalcode;
    this.id = id;
  }
}

export enum AddressType {
  Company,
  Shipping,
}
