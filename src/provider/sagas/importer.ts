import { TABLE_ITEMS_LOAD_NUMBER } from "constant";
import { forwardTo } from "helpers";
import {
  AddCampaignAction,
  AddProductAction,
  ADD_CAMPAIGN,
  ADD_PRODUCT,
  adminCampaignSlice,
  DeleteCampaignAction,
  DeleteProductAction,
  deleteProductSuccess,
  DELETE_CAMPAIGN,
  DELETE_PRODUCT,
  GetCampaignAction,
  GetProductsAction,
  getProductsSuccess,
  GET_PRODUCTS,
  hideModal,
  ImportProductAction,
  IMPORT_PRODUCT,
  ModalType,
  PickUpdateProductsAction,
  pickUpdateProductSuccess,
  PICK_UPDATE_PRODUCT,
  productFlowSlice,
  publicCampaignSlice,
  showModal,
  UpdateProductAction,
  UPDATE_PRODUCT,
} from "provider/actions";
import {
  addCampaignApi,
  addItemApi,
  addItemFlowApi,
  deleteCampaignApi,
  deleteItemApi,
  findProductByIdApi,
  getCampaignsApi,
  getErrorMessage,
  getProductsApi,
  getPublicCampaignsApi,
  getSuccessMessage,
  importItemApi,
  updateCampaignStatusApi,
  updateItemApi,
} from "provider/apis";
import {
  CampaignAdmin,
  CampaignAdminResponse,
  CampaignResponse,
  Error,
  Product,
  ProductListResponse,
  ProductResponse,
  ResponseMessage,
  SimpleResponse,
} from "provider/models";
import { Campaign } from "provider/models/campaign";
import { getAgencyIdSelector } from "provider/selectors";
import { put, select, takeLatest } from "redux-saga/effects";
import { appUrl } from "routing";

function* addProductCall({ payload }: AddProductAction) {
  yield put(showModal(ModalType.Loading, ""));
  try {
    const data: SimpleResponse<string> = yield addItemApi(payload);
    if ((data as Error).error) {
      yield put(
        showModal(ModalType.Error, getErrorMessage((data as Error).error[0]))
      );
    } else {
      yield put(
        showModal(
          ModalType.Success,
          getSuccessMessage((data as ResponseMessage<string>).message),
          () => {
            forwardTo(appUrl.adminProductPage);
          }
        )
      );
    }
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

function* deleteProductCall({ payload }: DeleteProductAction) {
  yield put(showModal(ModalType.Loading, ""));
  const data: SimpleResponse<string> = yield deleteItemApi(payload);
  if ((data as Error).error) {
    yield put(
      showModal(ModalType.Error, getErrorMessage((data as Error).error[0]))
    );
  } else {
    yield put(deleteProductSuccess(payload));
    yield put(hideModal());
  }
}

function* getProductsCall({ payload }: GetProductsAction) {
  try {
    const data: ProductListResponse = yield getProductsApi(payload);
    const products = data.products.entities.map((item: ProductResponse) =>
      Product.fromApi(item)
    );
    yield put(getProductsSuccess(products));
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

function* importProductCall({ payload }: ImportProductAction) {
  yield put(showModal(ModalType.Loading, ""));
  const agencyId = yield select(getAgencyIdSelector);
  try {
    yield importItemApi(payload, agencyId);

    const data: ProductListResponse = yield getProductsApi({
      agencyId,
      offset: 0,
      limit: TABLE_ITEMS_LOAD_NUMBER,
    });
    const products = data.products.entities.map((item: ProductResponse) =>
      Product.fromApi(item)
    );
    yield put(getProductsSuccess(products));
    yield put(showModal(ModalType.Success, "Import Product Successfully"));
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

function* addCampaignCall({ payload }: AddCampaignAction) {
  yield put(showModal(ModalType.Loading, ""));

  try {
    const data: SimpleResponse<string> = yield addCampaignApi(payload);
    if ((data as Error).error) {
      yield put(
        showModal(ModalType.Error, getErrorMessage((data as Error).error[0]))
      );
    } else {
      yield put(
        showModal(
          ModalType.Success,
          getSuccessMessage((data as ResponseMessage<string>).message),
          () => {
            forwardTo(appUrl.adminCampaignPage);
          }
        )
      );
    }
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

function* deleteCampaignCall({ payload }: DeleteCampaignAction) {
  yield put(showModal(ModalType.Loading, ""));
  try {
    yield deleteCampaignApi(payload);
    yield put(showModal(ModalType.Success, "Delete Campaign Successfully"));
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

function* pickProductCall({ payload }: PickUpdateProductsAction) {
  yield put(showModal(ModalType.Loading, ""));
  try {
    const data = yield findProductByIdApi(payload);
    if ((data as Error).error) {
      yield put(
        showModal(ModalType.Error, getErrorMessage((data as Error).error[0]))
      );
    } else {
      yield put(pickUpdateProductSuccess(Product.fromApi(data.products)));
      yield put(hideModal());
    }
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

function* updateProductCall({ payload }: UpdateProductAction) {
  yield put(showModal(ModalType.Loading, ""));
  try {
    const data: SimpleResponse<string> = yield updateItemApi(payload);
    if ((data as Error).error) {
      yield put(
        showModal(ModalType.Error, getErrorMessage((data as Error).error[0]))
      );
    } else {
      yield put(
        showModal(
          ModalType.Success,
          getSuccessMessage((data as ResponseMessage<string>).message)
        )
      );
    }
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

function* getCampaignsCall({ payload }: GetCampaignAction) {
  const { agencyId, productId } = payload;
  try {
    const data = yield getCampaignsApi(agencyId, productId);
    if ((data as Error).error) {
      yield put(
        showModal(ModalType.Error, getErrorMessage((data as Error).error[0]))
      );
    } else {
      const campaigns = data.campaigns.entities.map(
        (item: CampaignAdminResponse) => new CampaignAdmin(item)
      );
      yield put(adminCampaignSlice.actions.getAdminCampaignSuccess(campaigns));
    }
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

function* getPublicCampaignsCall() {
  try {
    const data = yield getPublicCampaignsApi();
    const campaigns = data.campaigns.entities.map(
      (item: CampaignResponse) => new Campaign(item)
    );
    yield put(publicCampaignSlice.actions.getPublicCampaignSuccess(campaigns));
  } catch (error) {
    yield put(showModal(ModalType.Error, `Can't get public campaigns`));
  }
}

function* addProductFlowCall({ payload }: any) {
  yield put(showModal(ModalType.Loading, ""));
  try {
    const data: SimpleResponse<string> = yield addItemFlowApi(payload);
    if ((data as Error).error) {
      yield put(
        showModal(ModalType.Error, getErrorMessage((data as Error).error[0]))
      );
    } else {
      yield put(
        showModal(
          ModalType.Success,
          getSuccessMessage((data as ResponseMessage<string>).message),
          () => {
            forwardTo(appUrl.adminCampaignPage);
          }
        )
      );
    }
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

function* updateCampaignStatusCall({ payload }: any) {
  try {
    const data = yield updateCampaignStatusApi(
      payload.campaignId,
      payload.status
    );
    yield put(
      adminCampaignSlice.actions.updateCampaignStatusSuccess(
        payload.campaignId,
        payload.status
      )
    );
  } catch (error) {
    yield put(showModal(ModalType.Error, `Can't update campaign`));
  }
}

export function* importerSaga() {
  yield takeLatest(ADD_PRODUCT, addProductCall);
  yield takeLatest(UPDATE_PRODUCT, updateProductCall);
  yield takeLatest(DELETE_PRODUCT, deleteProductCall);
  yield takeLatest(IMPORT_PRODUCT, importProductCall);
  yield takeLatest(ADD_CAMPAIGN, addCampaignCall);
  yield takeLatest(DELETE_CAMPAIGN, deleteCampaignCall);
  yield takeLatest(GET_PRODUCTS, getProductsCall);
  yield takeLatest(
    publicCampaignSlice.actions.getPublicCampaign,
    getPublicCampaignsCall
  );
  yield takeLatest(
    adminCampaignSlice.actions.updateCampaignStatus,
    updateCampaignStatusCall
  );

  // yield takeLatest(product);
  yield takeLatest(productFlowSlice.actions.addProductFlow, addProductFlowCall);
  yield takeLatest(
    adminCampaignSlice.actions.getAdminCampaign,
    getCampaignsCall
  );
  yield takeLatest(PICK_UPDATE_PRODUCT, pickProductCall);
}
