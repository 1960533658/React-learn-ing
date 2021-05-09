import React from 'react';
import ReactDOM from 'react-dom';


// 函数组件
// import Fn from "./components/FnCom/index";

// 类组件
// import Home from "./components/ClassCom"

// 事件对象组件
// import Ev from "./components/EventCom"

// 修改数据使数据同步更新
// import Status from "./components/SteteCom"

// 修改this指向
// import This from "./components/ThisPorintCom"

// 受控组件
import Stick from "./components/StickCom"
ReactDOM.render(<Stick />, document.querySelector('#root'))