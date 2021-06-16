// 导入redux-saga中拦截action中的请求
import { put, takeEvery } from "redux-saga/effects";
import { SavaGetNum } from "./action";

function* getData() {
  const data = yield fetch("http://localhost:8080/getdata")
    .then(response => response.json())
    .then(data => data.quotation)
  
    // 触发action中保存数据的方法
  yield put(SavaGetNum(data))
}
export default function* mySaga() {
  // takeEvery方法判断是那种类型的Action，如果是这种类型的action方法，就拦截
  // 第一个参数代表判断是那种类型的action方法 ，第二个代表要触发哪种方法
  yield takeEvery("GET_NUM", getData)
  
  /**
   * takeEvery和takeLatest的区别
   * 场景：由三次连续的请求，且每个请求耗时2秒
   * takeEvery
   * 所有的请求都能完成的发送并且收到的数据
   * takeLatest
   * 只发送罪行的请i去，三次请求都很短，那么三次都可以成功，但是如果事件很长，就没有作用
   */
}