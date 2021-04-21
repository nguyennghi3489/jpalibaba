import moment from "moment";
import { formatStandardDate } from "./format";

export const isAfterToday = (date: string) => {
  const expiredDate = formatStandardDate(date);
  const today = formatStandardDate(moment());
  return moment(expiredDate).isAfter(moment(today), "day");
};
