import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 引入字体图标样式
import "./assets/fonts/iconfont.css"
// 引入antd-mobile组件样式
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
import { HashRouter } from 'react-router-dom';
import routes from "./routes/routes"
import { renderRoutes } from 'react-router-config';
ReactDOM.render(
  <HashRouter>
    {/* 由于使用 antd-mobile 中的走马灯出现警告，提示警告删除StrictMode */}
    {/* <React.StrictMode> */}
      {renderRoutes(routes)}
    {/* </React.StrictMode> */}
  </HashRouter>,
  document.getElementById('root')
);

