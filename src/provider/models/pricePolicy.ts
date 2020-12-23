import { PricePolicyResponse } from "./response";

export class PricePolicy {
  id: string;
  productId: string;
  retailId: string;
  unitPrice: number;
  name: string;
  constructor(input: PricePolicyResponse) {
    this.id = input.id;
    this.productId = input.productId;
    this.retailId = input.retailId;
    this.unitPrice = input.unitPrice;
    this.name = input.name;
  }
}
