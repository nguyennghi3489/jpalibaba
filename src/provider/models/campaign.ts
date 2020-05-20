export class Campaign {
  campaignName: string;
  productId: string;
  categoryId: string;
  minimumOrderLot: string;
  minimumOrderImport: string;
  startDate: Date;
  endDate: Date;
  introduction: string;
  constructor(
    campaignName: string,
    productId: string,
    categoryId: string,
    minimumOrderLot: string,
    minimumOrderImport: string,
    startDate: Date,
    endDate: Date,
    introduction: string
  ) {
    this.campaignName = campaignName;
    this.productId = productId;
    this.categoryId = categoryId;
    this.minimumOrderLot = minimumOrderLot;
    this.minimumOrderImport = minimumOrderImport;
    this.startDate = startDate;
    this.endDate = endDate;
    this.introduction = introduction;
  }
}
