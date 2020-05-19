export class Address {
  street1: string;
  street2: string;
  country: string;
  city: string;
  postalcode: string;
  constructor(
    street1: string,
    street2: string,
    country: string,
    city: string,
    postalcode: string
  ) {
    this.street1 = street1;
    this.street2 = street2;
    this.country = country;
    this.city = city;
    this.postalcode = postalcode;
  }
}

export enum AddressType {
  Company,
  Shipping,
}
