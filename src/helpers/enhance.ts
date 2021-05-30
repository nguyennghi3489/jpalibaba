const ALL_OPTION = {
  label: "All",
  value: undefined,
};

export const enhanceUrlWithPagination = (
  url: string,
  offset: number,
  limit: number
) => {
  return `${url}&offset=${offset}&limit=${limit}`;
};

export const enhanceListWithAllOption = (list: Array<Object>) => {
  return [ALL_OPTION, ...list];
};
