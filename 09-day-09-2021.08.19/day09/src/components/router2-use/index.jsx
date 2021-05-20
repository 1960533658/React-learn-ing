import React from "react";
/**
 * react-router-dom是应用在网页中的路由包
 * BrowserRouter：history模式的URL 有点手动切换路由方便 H5新特性
 * HashRouter：hash模式的URL 有点兼容性强
 * Link：用来改变浏览器中的URL编译完就是a标签
 * NavLink：和link一摸一样 编译完就是a标签
 * Route：占位符，用来展示组件
 */
import { HashRouter,Link, Route } from "react-router-dom"
import Home from "./Home"
import About from "./about"
/**
 * ! 使用步骤
 * 1.引入import { BrowserRouter, HashRouter, Link, NavLink,Route } from "react-router-dom"
 * 2.使用BrowserRouter或HashRouter包裹整个应用（也可以包裹Link
 * 3.Link标签有一个属性：to跳转到to="地址"
 * 4.Route标签有两个属性 path=”地址“ component={组件}
 */
class Index extends React.Component {
  
  render() {
    return (
      <HashRouter>
        <Link to="/home">Home</Link> <Link to="/about">About</Link>
        {/* 组件 */}
        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </HashRouter>
    )
  }
}
export default Index