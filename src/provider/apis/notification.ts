import { getNotificationUrl } from "./apiUrl";
import { callApi } from "./base";

export const getNotificationApi = (agencyId: string): Promise<any> => {
  return callApi("GET", getNotificationUrl(agencyId));
};
