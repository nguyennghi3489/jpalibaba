import { SimpleResponse, Error, ResponseMessage } from "provider/models";
import { put } from "redux-saga/effects";
import { showModal, ModalType } from "provider/actions";
import { getErrorMessage, getSuccessMessage } from "provider/apis";

export function* handleSimpleResponseFromAPI(
  data: SimpleResponse<string>,
  callbackOnSuccessCase?: Function
) {
  if ((data as Error).error) {
    yield put(
      showModal(ModalType.Error, getErrorMessage((data as Error).error[0]))
    );
  } else {
    yield put(
      showModal(
        ModalType.Success,
        getSuccessMessage((data as ResponseMessage<string>).message),
        callbackOnSuccessCase
      )
    );
  }
}
