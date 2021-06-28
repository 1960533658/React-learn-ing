
//导入路由组件
// import {  NavLink } from "react-router-dom"
// import { renderRoutes, } from "react-router-config"
import { TabBar } from "antd-mobile"
import React from "react";
import { renderRoutes } from "react-router-config";

class App extends React.Component {
  // 获取当前页面路由地址
  state = {
    selectedTab: this.props.history.location.pathname,
    tabbarList: [
      { title: "首页", icon: "icon-ind", path: "/home" },
      { title: "找房", icon: "icon-findHouse", path: "/findhouse" },
      { title: "资讯", icon: "icon-infom", path: "/news" },
      { title: "我的", icon: "icon-my", path: "my" }
    ]
  }
  
  render() {
    return (
      <div className="App">
        {renderRoutes(this.props.route.children)}
        <div className="tabbar">
          <TabBar
          >
            {this.state.tabbarList.map(item => (
              <TabBar.Item
                // 标题
                title={item.title}
                // 标识符
                key={item.title}
                // 图标
                icon={<i className={`iconfont ${item.icon}`}></i>}
                // 选中后的展示图片
                selectedIcon={<i className={`iconfont ${item.icon}`}></i>}
                // 是否选中
                selected={this.state.selectedTab === item.path}
                // 点击时触发的事件
                onPress={() => {
                  this.props.history.push(item.path)
                  this.setState({
                    selectedTab: item.path
                  })
                }}
              >
              </TabBar.Item>
            ))}
          </TabBar>
        </div>
      </div>
    );
  }
}

export default App;
