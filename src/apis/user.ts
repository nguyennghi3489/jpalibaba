interface DeleteUserResponse {
  result: boolean;
}

export const deleteUserApi = (id: string): Promise<DeleteUserResponse> => {
  const mkData = {
    result: true,
  };

  return new Promise((resolve) => setTimeout(() => resolve(mkData), 1000));
};
