import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 路由传参
// import Index from "./components/route-parameter"

// 动态路由传参
// import Index from "./components/route-trends-parameter"

// 通过NavLink和Link组件的to属性传递对象
// import Index from './components/route-parameter-object';
// 路由统一管理（一二级路由）
import Index from './components/route-manage';
ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);
