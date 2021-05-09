// 函数组件（仅仅只是为了表示html
// 函数组件也被成为无状态组件（无state）
// 语法：构造函数中返回组件的结构即可
import React from "react";
function Fn() {
  
  const handlerClick = function () {
    console.log("我函数式组件的点击事件")
    console.log(this) // undefined
  }
  return (
    <div onClick={handlerClick}>我是函数组件</div>
  )
}
export default Fn