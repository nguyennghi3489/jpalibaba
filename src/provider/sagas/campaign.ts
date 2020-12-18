import {
  AddCampaignAction,
  ADD_CAMPAIGN,
  GetCampaignAction,
  GET_CAMPAIGN,
  ModalType,
  showModal,
} from "provider/actions";
import { addCampaignApi, getCampaignsApi } from "provider/apis";
import { put, takeLatest } from "redux-saga/effects";

function* getCampaignsCall({ payload }: GetCampaignAction) {
  yield put(showModal(ModalType.Loading, ""));
  const { agencyId, productId } = payload;
  try {
    const data = yield getCampaignsApi(agencyId, productId);
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
