import { put, takeLatest, call } from "redux-saga/effects";
import { ProductListResponse, ProductResponse, Product } from "provider/models";
import {
  addItemApi,
  deleteItemApi,
  importItemApi,
  addCampaignApi,
  deleteCampaignApi,
  getProductsApi,
  updateItemApi,
} from "provider/apis";
import {
  UPDATE_PRODUCT,
  UpdateProductAction,
  addImageSuccess,
  PickUpdateProductsAction,
  PICK_UPDATE_PRODUCT,
  GET_PRODUCTS,
  GetProductsAction,
  getProductsSuccess,
  ADD_PRODUCT,
  AddProductAction,
  DELETE_PRODUCT,
  DeleteProductAction,
  deleteProductSuccess,
  ADD_CAMPAIGN,
  AddCampaignAction,
  DELETE_CAMPAIGN,
  DeleteCampaignAction,
  IMPORT_PRODUCT,
  ImportProductAction,
  ModalType,
  showModal,
  hideModal,
} from "provider/actions";
import { parseJwt, forwardTo } from "helpers";
import { UPDATE_ITEM_ROUTE } from "constant";

function* addProductCall({ payload }: AddProductAction) {
  yield put(showModal(ModalType.Loading, ""));
  try {
    const data = yield addItemApi(payload);
    yield put(showModal(ModalType.Success, "Add Product Successfully"));
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

function* deleteProductCall({ payload }: DeleteProductAction) {
  yield put(showModal(ModalType.Loading, ""));
  try {
    const data = yield deleteItemApi(payload);
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
    const data = yield importItemApi(payload);
    yield put(showModal(ModalType.Success, "Import Product Successfully"));
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

function* addCampaignCall({ payload }: AddCampaignAction) {
  yield put(showModal(ModalType.Loading, ""));
  try {
    const data = yield addCampaignApi(payload);
    yield put(showModal(ModalType.Success, "Add Campaign Successfully"));
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

function* deleteCampaignCall({ payload }: DeleteCampaignAction) {
  yield put(showModal(ModalType.Loading, ""));
  try {
    const data = yield deleteCampaignApi(payload);
    yield put(showModal(ModalType.Success, "Delete Campaign Successfully"));
  } catch (error) {
    yield put(showModal(ModalType.Error, error));
  }
}

function* pickProductCall({ payload }: PickUpdateProductsAction) {
  yield put(addImageSuccess(payload.images[0]));
  yield call(forwardTo, UPDATE_ITEM_ROUTE);
}

function* updateProductCall({ payload }: UpdateProductAction) {
  yield put(showModal(ModalType.Loading, ""));
  try {
    const data = yield updateItemApi(payload);
    yield put(showModal(ModalType.Success, "Update Product Successfully"));
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
  yield takeLatest(PICK_UPDATE_PRODUCT, pickProductCall);
}
