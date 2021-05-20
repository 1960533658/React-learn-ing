import React from "react";
import { HashRouter, NavLink, Route } from "react-router-dom";
import About from "./About"
import Login from "./Login"
import Home from "./Home"
class Index extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <NavLink to="/home?name=张三&age=18">首页</NavLink>
          <NavLink to="/about">关于</NavLink>
          <NavLink to="/login">登录</NavLink>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/Login" component={Login}></Route>
        </HashRouter>
      </div>
    )
  }
}
export default Index