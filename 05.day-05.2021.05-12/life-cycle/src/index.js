import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 挂载时
// import OnMout from "./components/OnMount"
// 更新时
// import OnUpdate from "./components/OnUpdate"

// 卸载时
// import OnUnmount from "./components/OnUnmount"

// import Mouse from "./components/OnMouseCat/Mouse"
// ReactDOM.render(
//   <Mouse />,
//   document.getElementById('root')
// );

// 展示鼠标xy轴
// import ShowWhere from "./components/OnMouseCat/ShowWhere"
// ReactDOM.render(
//   <ShowWhere />,
//   document.getElementById('root')
// ); 

// 展示小猫
// import ShowCat from "./components/OnMouseCat/ShowCat"
// ReactDOM.render(
//   <ShowCat />,
//   document.getElementById('root')
// );

// 展示猫和坐标
import ShowCatAndWhere from "./components/OnMouseCat/ShowCatAndWhere"
ReactDOM.render(
  <ShowCatAndWhere />,
  document.getElementById('root')
);

