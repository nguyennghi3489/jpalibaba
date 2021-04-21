export const getNotificationApi = (): Promise<any> => {
  const mockupData = [
    { id: 1, message: "hello bro you got a new order request", read: 0 },
    { id: 2, message: "hello bro you got a new order request", read: 1 },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockupData);
    }, 1000);
  });
};
