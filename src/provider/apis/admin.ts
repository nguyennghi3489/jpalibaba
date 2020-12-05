import { ActiveInfo } from "provider/actions";
import { activeUserUrl, callApi } from "provider/apis";
import { ProductExportQuery, ResponseWithBooleanResult } from "provider/models";

export const activeUserApi = (
  payload: ActiveInfo
): Promise<ResponseWithBooleanResult> => {
  return callApi(
    "PATCH",
    `${activeUserUrl}${payload.userId}/${payload.activateId}`
  );
};

export const exportAdminItemsApi = (
  payload: ProductExportQuery
): Promise<ResponseWithBooleanResult> => {
  const mkData = {
    result: true,
  };

  return new Promise((resolve) => setTimeout(() => resolve(mkData), 1000));
};
