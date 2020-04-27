import { ProductExportQuery } from "models";

export const EXPORT_ADMIN_ITEM = "ADMIN.EXPORT_ADMIN_ITEM";
export const EXPORT_ADMIN_ITEM_SUCCESS = "ADMIN.EXPORT_ADMIN_ITEM_SUCCESS";
export const EXPORT_ADMIN_ITEM_FAILURE = "ADMIN.EXPORT_ADMIN_ITEM_FAILURE";

export interface ExportAdminItemAction {
  type: typeof EXPORT_ADMIN_ITEM;
  payload: ProductExportQuery;
}

interface ExportAdminItemSuccessAction {
  type: typeof EXPORT_ADMIN_ITEM_SUCCESS;
  result: boolean;
}

interface ExportAdminItemFailureAction {
  type: typeof EXPORT_ADMIN_ITEM_FAILURE;
}

export const exportAdminItem = (
  payload: ProductExportQuery
): ExportAdminItemAction => ({
  type: EXPORT_ADMIN_ITEM,
  payload,
});

export const exportAdminItemSuccess = (
  result: boolean
): ExportAdminItemSuccessAction => ({
  type: EXPORT_ADMIN_ITEM_SUCCESS,
  result,
});

export const exportAdminItemFailure = (): ExportAdminItemFailureAction => ({
  type: EXPORT_ADMIN_ITEM_FAILURE,
});
