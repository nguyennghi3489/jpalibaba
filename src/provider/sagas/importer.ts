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
  getPublicCampaignsSuccess,
  GET_PRODUCTS,
  GET_PUBLIC_CAMPAIGN,
  hideModal,
  ImportProductAction,
  IMPORT_PRODUCT,
  ModalType,
  PickUpdateProductsAction,
  PICK_UPDATE_PRODUCT,
  productFlowSlice,
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
  getCampaignsApi,
  getErrorMessage,
  getProductsApi,
  getPublicCampaignsApi,
  getSuccessMessage,
  importItemApi,
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
import { call, put, takeLatest } from "redux-saga/effects";
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
          getSuccessMessage((data as ResponseMessage<string>).message)
        )
      );
    }
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

function* deleteProductCall({ payload }: DeleteProductAction) {
  yield put(showModal(ModalType.Loading, ""));
  try {
    yield deleteItemApi(payload);
    yield put(deleteProductSuccess(payload));
    yield put(hideModal());
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
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
  try {
    yield importItemApi(payload);
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
          getSuccessMessage((data as ResponseMessage<string>).message)
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
  // yield put(addImageSuccess(payload.images[0].largeUrl));
  yield call(forwardTo, `/admin${appUrl.createProductPage}`);
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
    yield put(getPublicCampaignsSuccess(campaigns));
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
          getSuccessMessage((data as ResponseMessage<string>).message)
        )
      );
    }
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
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
  yield takeLatest(GET_PUBLIC_CAMPAIGN, getPublicCampaignsCall);

  // yield takeLatest(product);
  yield takeLatest(productFlowSlice.actions.addProductFlow, addProductFlowCall);
  yield takeLatest(
    adminCampaignSlice.actions.getAdminCampaign,
    getCampaignsCall
  );
  yield takeLatest(PICK_UPDATE_PRODUCT, pickProductCall);
}
