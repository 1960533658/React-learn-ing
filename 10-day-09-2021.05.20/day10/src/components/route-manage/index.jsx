import React from "react";
import { HashRouter, NavLink, Route } from "react-router-dom";

// 引入路由规则包
import { renderRoutes } from "react-router-config"
// 引入路由规则
import routes from "../../routes"
class Index extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <NavLink to="/home?name=张三&age=18">首页</NavLink>
          <NavLink to="/about/123456">关于</NavLink>
          <NavLink to="/login">登录</NavLink>
          {renderRoutes(routes)}
        </HashRouter>
      </div>
    )
  }
}
export default Index