interface DeleteUserResponse {
  result: boolean;
}

export const deleteUserApi = (id: string): Promise<DeleteUserResponse> => {
  const mkData = {
    result: true,
  };
  const mockupPromise = Promise.resolve(mkData);

  return mockupPromise;
};
