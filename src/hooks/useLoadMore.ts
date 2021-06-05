import { enhanceUrlWithPagination } from "helpers";
import { useEffect, useState } from "react";

export interface LoadMoreQuery {
  apiUrl: string;
  offset: number;
  limit: number;
}

export interface LoadMoreRequest {
  query: LoadMoreQuery;
  api: (query?: string) => Promise<any>;
}

export interface LoadMoreResponse<T> {
  data: Array<T>;
  setData: Function;
  loading: boolean;
  loadMore: Function;
  reset: Function;
}

export const useLoadMore = <T>({
  query,
  api,
}: LoadMoreRequest): LoadMoreResponse<T> => {
  const [localData, setLocalData] = useState<Array<T>>([]);
  const [loading, setLoading] = useState(false);
  const [localOffset, setLocalOffset] = useState(0);

  useEffect(() => {
      if(query?.offset){
        setLocalOffset(query.offset)
      }
  }, [query]);

  const reset = () => {
    setLocalOffset(0);
  };

  const setData = (data: Array<T>) => {
    setLocalData(data);
  };

  const loadMore = () => {
    const fetch = async () => {
      const {apiUrl, limit} = query
      const urlWithPagination = enhanceUrlWithPagination(
        apiUrl,
        localOffset,
        limit
      );
      setLoading(true);
      try {
        const data = await api(urlWithPagination);
        setLocalData(data);
      } catch (e) {
        setLocalData([]);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  };

  return { data: localData, setData, loading, loadMore, reset };
};
