import { getNotificationApi } from "provider/apis/notification";
import { useEffect, useState } from "react";
import { LOAD_NOTIFICATION_INTERVAL } from "constant";

export const useGetNotification = () => {
  const [value, setValue] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(new Date());

  useEffect(() => {
    const fetchNotification = async () => {
      const data = await getNotificationApi(
        "01d13653-695b-47af-88b0-187fab3368a1"
      );
      // TODO: Is the new List has some chances Recheck logic
      if (data.notifications.length > 0) {
        console.log("Here");
        console.log(data.notifications);
        setValue(data.notifications);
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
