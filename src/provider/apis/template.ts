interface DeleteUserResponse {
  result: boolean;
}

export const updateTemplateSettingApi = (
  payload: Record<string, File>
): Promise<DeleteUserResponse> => {
  const mkData = {
    result: true,
  };
  return new Promise((resolve) => setTimeout(() => resolve(mkData), 1000));
};
