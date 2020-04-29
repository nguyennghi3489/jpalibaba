import { ResponseWithBooleanResult, ProductExportQuery } from "models";

export const activeUserApi = (
  payload: boolean
): Promise<ResponseWithBooleanResult> => {
  const mkData = {
    result: true,
  };

  return new Promise((resolve) => setTimeout(() => resolve(mkData), 1000));
};

export const exportAdminItemsApi = (
  payload: ProductExportQuery
): Promise<ResponseWithBooleanResult> => {
  const mkData = {
    result: true,
  };

  return new Promise((resolve) => setTimeout(() => resolve(mkData), 1000));
};
