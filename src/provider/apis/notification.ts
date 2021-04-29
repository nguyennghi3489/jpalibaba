import {
  getNotificationUrl,
  getUnreadNotificationUrl,
  readNotificationUrl,
} from "./apiUrl";
import { callApi } from "./base";

export const getNotificationApi = (agencyId: string): Promise<any> => {
  return callApi("GET", getNotificationUrl(agencyId));
};

export const readNotificationApi = (agencyId: string): Promise<any> => {
  return callApi("GET", readNotificationUrl(agencyId));
};

export const getUnreadNotificationApi = (agencyId: string): Promise<any> => {
  return callApi("GET", getUnreadNotificationUrl(agencyId));
};
