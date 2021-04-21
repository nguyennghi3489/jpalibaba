import { getNotificationApi } from "provider/apis/notification";
import { useEffect, useState } from "react";
import { LOAD_NOTIFICATION_INTERVAL } from "constant";

export const useGetNotification = () => {
  const [value, setValue] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(new Date());

  useEffect(() => {
    const fetchNotification = async () => {
      const data = await getNotificationApi();

      // TODO: Is the new List has some chances Recheck logic
      if (
        data.filter((i: any) => i.read).length !==
        value.filter((i: any) => i.read).length
      ) {
        setValue(data);
      }
    };
    fetchNotification();
  }, [refreshFlag]);

  useEffect(() => {
    setInterval(() => {
      setRefreshFlag(new Date());
    }, LOAD_NOTIFICATION_INTERVAL);
  }, []);

  return [value];
};
