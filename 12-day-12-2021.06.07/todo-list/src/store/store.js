import { createStore } from "redux";

// 分析： 3. 导出reducer导入到store中
import reducer from "./reducer"
// 分析： 4. 在store.js创建store并导出
const store = createStore(reducer);
export default store;