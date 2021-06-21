import { put,takeEvery } from "@redux-saga/core/effects";
import { SaveGetNum } from "./action";

function* getData() {
  const data = yield fetch("http://localhost:8080/getdata")
    .then(response => response.json())
    .then(data => data.quotation)
  // 调用保存数据的方法保存数据
  yield put(SaveGetNum(data))
}
export default function* mySaga() {
  yield takeEvery("GET_NUM",getData)
}