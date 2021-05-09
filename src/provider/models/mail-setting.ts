export interface MailSetting {
  agencyId: string;
  frequencyType: number;
  minImportLotNotify: boolean;
  newOrderNotify: boolean;
  updateInformationNotify: boolean;
  cancelledOrderNotify: boolean;
}

export enum EmailSettingKey {
  MIN_IMPORT_LOT_NOTIFY = "minImportLotNotify",
  NEW_ORDER_NOTIFY = "newOrderNotify",
  UPDATE_INFORMATION_NOTIFY = "updateInformationNotify",
  CANCELLED_ORDER_NOTIFY = "cancelledOrderNotify",
}
