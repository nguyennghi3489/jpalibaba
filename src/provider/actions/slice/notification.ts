import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Notification } from "provider/models/notification";

export interface State {
  notifications: Notification[];
}

export const initialState: State = {
  notifications: [],
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState: initialState,
  reducers: {
    updateNotification: {
      reducer(state: State, { payload }: PayloadAction<Notification[]>) {
        state.notifications = payload;
      },
      prepare(notificationList: Notification[]) {
        return { payload: notificationList };
      },
    },
  },
});

export default notificationSlice.reducer;
