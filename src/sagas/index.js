import { put, takeLatest, all } from "redux-saga/effects";
function* fetchNews() {
  yield { data: "Hello World" };
}
function* actionWatcher() {
  yield takeLatest("GET_NEWS", fetchNews);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
