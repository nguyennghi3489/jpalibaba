import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { LOAD_NOTIFICATION_INTERVAL } from "constant";
import { forwardTo, parseJwt } from "helpers";
import { appUrl } from "routing";
import { getUnreadNotificationApi } from "provider/apis/notification";
import { authenticationSlice } from "provider/actions/slice/authentication";

export const useGetNotification = () => {
  const [value, setValue] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(new Date());
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNotification = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const parseAutInfo = parseJwt(token);
        try {
          const data = await getUnreadNotificationApi(parseAutInfo.agencyId);
          setValue(data.notifications);
        } catch (e) {
          localStorage.removeItem("token");
          dispatch(authenticationSlice.actions.removeToken());
          forwardTo(appUrl.loginPage);
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

  return { value, setRefresh: setRefreshFlag };
};
