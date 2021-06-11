import {  applyMiddleware, createStore } from "redux";
import reducer from "./reducer";

import thunkMiddleware from "redux-thunk";
const storeEndancer = applyMiddleware(thunkMiddleware)

const store = createStore(reducer, storeEndancer);
export default store;