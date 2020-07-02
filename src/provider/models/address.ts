export class Address {
  street1: string;
  street2: string;
  country: string;
  city: string;
  postalcode: string;
  id: string | null;
  constructor(
    street1: string,
    street2: string,
    country: string,
    city: string,
    postalcode: string,
    id: string | null = null
  ) {
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
