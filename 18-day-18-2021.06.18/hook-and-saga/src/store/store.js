import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const storeEnhance = applyMiddleware(sagaMiddleware);

const store = createStore(reducer, storeEnhance);

sagaMiddleware.run(saga);
export default store;