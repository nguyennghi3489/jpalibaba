interface DeleteUserResponse {
  result: boolean;
}

export const updateTemplateSettingApi = (
  payload: Record<string, File>
): Promise<DeleteUserResponse> => {
  const mkData = {
    result: true,
  };
  const mockupPromise = Promise.resolve(mkData);

  return mockupPromise;
};
