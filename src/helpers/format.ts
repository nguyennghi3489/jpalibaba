import { Moment } from "moment";
import numbro from "numbro";

export function formatCurrency(input: any): string {
  return numbro(input.toString()).formatCurrency({
    thousandSeparated: true,
    currencySymbol: " VND",
    currencyPosition: "postfix"
  });
}

export function formatUserRole(role: number): string {
  switch (role) {
    case 1:
      return "Admin";
    case 2:
      return "Importer";
    case 3:
      return "Retailer";
    default:
      return "Unknown";
  }
}

export function formatStandardDate(date: Moment): string {
  return date.format("L");
}
