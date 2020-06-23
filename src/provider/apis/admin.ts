import { ResponseWithBooleanResult, ProductExportQuery } from "provider/models";
import { ActiveInfo } from "provider/actions";
import { callApi, activeUserUrl } from "provider/apis";

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
