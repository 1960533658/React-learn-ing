import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import Index from "./components/ListChange"
// 伪路由
// import Index from './components/Router1';


// react-router-dom组件的使用
// import Index from "./components/router2-use"

// 路由的基本使用NavLink
// import Index from './components/router3'

// Switch
// import Index from './components/router4-switch';

// 重定向
// import Index from "./components/router5-redirect"

// 嵌套路由
// import Index from "./components/router6-nested"

// hash跳转路由
import Index from "./components/router7-jump"
ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);
