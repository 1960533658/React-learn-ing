import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer";
/**
 * redux这个东西要求我们action必须是对象否则无法处理
 * 为了让action可以接收函数，因此我要给redux添加一个中间件
 * redux-thunk是redux的插件，怎么才能把这个插件用到redux？？？
 * 需要一个方法把插件挂载到redux，这时候就需要applyMiddleware
 */
import thunkMiddleware from "redux-thunk";
const storeEnhancer = applyMiddleware(thunkMiddleware);


const store = createStore(reducer, storeEnhancer);
export default store;