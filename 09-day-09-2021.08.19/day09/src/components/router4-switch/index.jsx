import React from "react";
import "./index.css"
/**
 * react-router-dom是应用在网页中的路由包
 * BrowserRouter：history模式的URL 有点手动切换路由方便 H5新特性
 * HashRouter：hash模式的URL 有点兼容性强
 * Link：用来改变浏览器中的URL编译完就是a标签
 * NavLink：和link一摸一样 编译完就是a标签
 * Route：占位符，用来展示组件
 */
import { BrowserRouter, HashRouter, Link, NavLink, Route,Switch } from "react-router-dom"
import Home from "./Home"
import About from "./about"
import Other from './Otehr';
class Index extends React.Component {
  render() {
    return (
      <HashRouter>
        <NavLink exact to="/home">Home</NavLink>
        <NavLink exact to="/home/about">about</NavLink>
        {/* Switch 只能匹配一个路由 匹配到一次就再匹配了 */}
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/home/about" component={About}></Route>
          <Route component={Other}></Route>
        </Switch>
      </HashRouter>
    )
  }
}
export default Index