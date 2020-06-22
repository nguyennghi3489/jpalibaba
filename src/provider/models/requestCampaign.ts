export class RequestCampaign {
  agencyId: string;
  productId: string;
  category: string;
  title: string;
  owner: string;
  description: string;
  goal: number;
  minAmountPerOrder: number;
  startDate: string;
  endDate: string;
  constructor(
    agencyId: string,
    productId: string,
    category: string,
    title: string,
    owner: string,
    description: string,
    goal: number,
    minAmountPerOrder: number,
    startDate: string,
    endDate: string
  ) {
    this.agencyId = agencyId;
    this.productId = productId;
    this.category = category;
    this.title = title;
    this.owner = owner;
    this.description = description;
    this.goal = goal;
    this.minAmountPerOrder = minAmountPerOrder;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
