import { PayloadAction } from "@reduxjs/toolkit";
import {
  mailSettingSlice,
  ModalType,
  showModal,
  hideModal,
} from "provider/actions";
import {
  getMailSettingApi,
  updateMailSettingApi,
} from "provider/apis/mailSetting";
import { MailSetting } from "provider/models/mail-setting";
import { put, select, takeLatest } from "redux-saga/effects";

function* updateCall(payloadAction: PayloadAction<MailSetting>) {
  try {
    yield put(showModal(ModalType.Loading, ""));
    const data = yield updateMailSettingApi(payloadAction.payload);
    if (data.error) {
      yield put(
        showModal(
          ModalType.Error,
          "Can't update setting at this time. Please refresh your browser and try again"
        )
      );
    } else {
      yield put(showModal(ModalType.Success, "Update Successfully"));
    }
  } catch (error) {
    yield put(
      showModal(
        ModalType.Error,
        `Can't update setting at this time. Please refresh your browser and try again`
      )
    );
  }
}

export function* mailSettingSaga() {
  yield takeLatest(mailSettingSlice.actions.update, updateCall);
}
