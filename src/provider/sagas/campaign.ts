import { put, takeLatest, call } from "redux-saga/effects";
import { addCampaignApi, getCampaignsApi } from "provider/apis";
import {
  GetCampaignAction,
  GET_CAMPAIGN,
  ADD_CAMPAIGN,
  AddCampaignAction,
  showModal,
  ModalType,
} from "provider/actions";
import { parseJwt, forwardTo } from "helpers";
import { UPDATE_ITEM_ROUTE } from "constant";

function* getCampaignsCall({ payload }: GetCampaignAction) {
  console.log("HIE");
  yield put(showModal(ModalType.Loading, ""));
  try {
    const data = yield getCampaignsApi(payload);
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}
function* addCampaignCall({ payload }: AddCampaignAction) {
  //   yield put(showModal(ModalType.Loading, ""));
  try {
    const data = yield addCampaignApi(payload);
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}
export function* importerSaga() {
  yield takeLatest(GET_CAMPAIGN, getCampaignsCall);
  yield takeLatest(ADD_CAMPAIGN, addCampaignCall);
}
