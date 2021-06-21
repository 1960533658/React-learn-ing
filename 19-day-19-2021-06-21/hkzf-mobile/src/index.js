import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
// 引入antd-mobile组件样式
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

