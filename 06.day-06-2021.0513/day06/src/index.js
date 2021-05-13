import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 高阶组件
// import App from './component/Hign-Order-Components/App';

// JSX语法的转化过程
// import JSX from "./component/JSX"

// 组件的更新和避免不必要的重新渲染 shouldComponentUptate
// import GrandFather from "./component/JSX/GrandFather"

// 纯组件
import GrandFather from "./component/ProuComponent/GrandFather"
ReactDOM.render(
  <GrandFather />,
  document.getElementById('root')
);

