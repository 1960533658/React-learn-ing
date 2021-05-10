import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css"

// 非受控组件
// import Unstick from "./Components/Unstrict";

// 父传女 函数组件通信
// import FatherCom from "./Components/FatherCom"

// context注入传值
import GrandeFather from "./Components/GrandFatherCom"
ReactDOM.render(<GrandeFather />, document.querySelector('#root'))