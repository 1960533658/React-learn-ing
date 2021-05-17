import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 组件优化函数组件
// import App from './components/Memo';

// Protal组件
// import ProTal from "./components/CreateProtal"

// Fragment
// import Fragment from "./components/React.Frament"

// strickMode 严格代码模式
// import Index from "./components/StrictMode/index.jsx"

// Deff0 认识Deff算法
// import Diff0 from "./components/Diff0"
// Diff1 如果两个元素的根元素相同，那么就会删除旧树，添加新树
import Diff1 from "./components/Diff1"

// Virtual DOM 虚拟DOM
// import VartualDOM from './components/VirtualDOM';

ReactDOM.render(
  <React.StrictMode>
    <Diff1 />
  </React.StrictMode>
  , document.getElementById("root")
)

