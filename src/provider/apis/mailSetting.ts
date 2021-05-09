import { MailSettingResponse } from "provider/models";
import { MailSetting } from "provider/models/mail-setting";
import { getMailSettingUrl, updateMailSettingUrl } from "./apiUrl";
import { callApi } from "./base";

export const getMailSettingApi = (id: string): Promise<MailSettingResponse> => {
  return callApi("GET", getMailSettingUrl(id));
};

export const updateMailSettingApi = (
  mailSetting: MailSetting
): Promise<MailSettingResponse> => {
  return callApi("POST", updateMailSettingUrl(), mailSetting);
};
