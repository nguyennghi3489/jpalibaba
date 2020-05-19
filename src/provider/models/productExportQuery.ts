export class ProductExportQuery {
  importerId: string | null;
  makerId: string | null;
  categoryId: string | null;
  zoneId: string | null;
  fromPrice: string | null;
  toPrice: string | null;
  fromImportLot: string | null;
  toImportLot: string | null;
  startDate: string | null;
  endDate: string | null;
  constructor(
    importerId: string | null,
    makerId: string | null,
    categoryId: string | null,
    zoneId: string | null,
    fromPrice: string | null,
    toPrice: string | null,
    fromImportLot: string | null,
    toImportLot: string | null,
    startDate: string | null,
    endDate: string | null
  ) {
    this.importerId = importerId;
    this.makerId = makerId;
    this.categoryId = categoryId;
    this.zoneId = zoneId;
    this.fromPrice = fromPrice;
    this.toPrice = toPrice;
    this.fromImportLot = fromImportLot;
    this.toImportLot = toImportLot;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
