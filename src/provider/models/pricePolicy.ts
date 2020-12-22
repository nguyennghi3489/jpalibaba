import { PricePolicyResponse } from "./response";

export class PricePolicy {
  id: string;
  productId: string;
  retailId: string;
  unitPrice: number;
  constructor(input: PricePolicyResponse) {
    this.id = input.id;
    this.productId = input.productId;
    this.retailId = input.retailId;
    this.unitPrice = input.unitPrice;
  }
}
