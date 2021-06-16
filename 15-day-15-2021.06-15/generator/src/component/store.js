import { applyMiddleware, createStore, compose } from "redux";
//1. 导入redux-saga包,创建它给与的sagaMiddlewareg工厂函数
import createSagaMiddleware from "redux-saga"
import reducer from "./reducer"
import saga from "./saga"
//2. 使用工厂函数创建中间件
const sagaMiddleware = createSagaMiddleware();
//3. 把sagamiddleware注册到redux中
const storeEnhance = applyMiddleware(sagaMiddleware)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true } || compose)
// 3.
const store = createStore(reducer, composeEnhancers(storeEnhance) );
// 4.导入saga文件 创建拦截请求函数
sagaMiddleware.run(saga);
export default store;