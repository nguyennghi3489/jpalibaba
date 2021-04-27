import { getNotificationApi } from "provider/apis/notification";
import { useEffect, useState } from "react";
import { LOAD_NOTIFICATION_INTERVAL } from "constant";
import { parseJwt } from "helpers";

export const useGetNotification = () => {
  const [value, setValue] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(new Date());

  useEffect(() => {
    const fetchNotification = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const parseAutInfo = parseJwt(token);
        const data = await getNotificationApi(parseAutInfo.agencyId);
        if (data.notifications.length > 0) {
          setValue(data.notifications);
        }
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
