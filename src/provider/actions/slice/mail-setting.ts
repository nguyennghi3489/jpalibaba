import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MailSetting } from "provider/models/mail-setting";

export interface MailSettingState {
  settings: MailSetting;
}

export const mailSettingsInitialState: MailSettingState = {
  settings: {} as MailSetting,
};

export const mailSettingSlice = createSlice({
  name: "emailSettings",
  initialState: mailSettingsInitialState,
  reducers: {
    get(state, action: PayloadAction<string>) {},
    getSuccess(state, action: PayloadAction<MailSetting>) {
      state.settings = action.payload;
    },
    update(state, action: PayloadAction<MailSetting>) {},
    updateSuccess(state, action: PayloadAction<MailSetting>) {
      state.settings = action.payload;
    },
  },
});

export default mailSettingSlice.reducer;
