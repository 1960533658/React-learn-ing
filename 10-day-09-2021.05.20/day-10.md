# day-10

## react的路由传参

### 通过URL传参
1. get请求的传参个是：http://localhost:3000/#/home?key-value&key1=value1
2.在NavLink中把参数向步骤1一样拼接到URL中
3. 在组件中获取this.props.location中的search
3. 通过URLSearchParams内置对象获取search的值
5. URLSearchParams.get("xxx")获取单一对应的值 URLSearchParams.getAll("xxx") 以数组获取大一的值
**index.jsx***
```jsx
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
```

**Home.jsx**
```jsx
import React from "react";
class Home extends React.Component {
  componentDidMount() {
    console.log(this.props.location.search);
    const a = new URLSearchParams(this.props.location.search)
    console.log(a.get("name"))
    console.log(a.get("age"))
    console.log(a.getAll("age"))// 获取的是数组形式
    console.log(a.getAll("name"));
  }
  render() {
    return (
      <div>
        Home组件
      </div>
    )
  }
}
export default Home
```

### 通过动态路由传参
1. 什么是动态路由 http:www.xxx.com/xxx/123
2. 格式 /xxx/123334
**index.jsx**
```jsx
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
          <NavLink to="/about/123456">关于</NavLink>
          <NavLink to="/login">登录</NavLink>
          <Route path="/home" component={Home}></Route>
          <Route path="/about/:id" component={About}></Route>
          <Route path="/Login" component={Login}></Route>
        </HashRouter>
      </div>
    )
  }
}
export default Index
```

**About**
```jsx
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
          <NavLink to="/about/123456">关于</NavLink>
          <NavLink to="/login">登录</NavLink>
          <Route path="/home" component={Home}></Route>
          <Route path="/about/:id" component={About}></Route>
          <Route path="/Login" component={Login}></Route>
        </HashRouter>
      </div>
    )
  }
}
export default Index
```

> 小结：
- 在地址中添加动态路由，通过Route中的path检索区别传递的数据的名称
- 如果path中不存在例如/about/:id中的类似于id这种名称就不会返回值

### 通过NavLink或link组件的to属性传递`对象参数`
> to={{state: {name: "xxx"}}}
**index.jsx**
```jsx
import React from 'react'
import { HashRouter, NavLink, Route } from "react-router-dom"
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';

// 需求: 点击 heme about login跳转到三个组件里面
class App extends React.Component {
  state = {
    name: '张三',
    age: 18
  }

  render() {
    return (
      <HashRouter>
        <div className="App" >
          <NavLink to="/home?name=zs&age=18&hobby=football&hobby=pingpang">首页</NavLink>
          <NavLink to="/about/12343231">关于</NavLink>
          <NavLink to={{
            pathname: "/login",
            state: {
              name: 'zs',
              age: 18,
              hobby: ['football', 'pingpang']
            }
          }}>登录</NavLink>
          <Route path="/home" component={Home}></Route>
          <Route path="/about/:id" component={About}></Route>
          <Route path="/login" component={Login}></Route>
        </div >
      </HashRouter>

    );
  }
}
export default App;
```
**Login.jsx**
```jsx
import React from "react";
class Login extends React.Component {
  componentDidMount() {
    console.log(this.props);

  }
  render() {
    return (
      <div>Login组件</div>
    )
  }
}
export default Login
```
## 路由的统一管理
> npm install --save react-router-config
### 一级路由
1. 在src目录下创建一个routes文件夹，并在其内常见index.js(路由规则)
2. 在需要的展示组件的文件中导入routes和react-router-config包
3. 要使用renderRoutes()方法来渲染映射的组件
**index.jsx**
```jsx
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
```
路由规则**routes/index.js**
```js
import About from "../components/route-manage/About"
import Home from "../components/route-manage/Home"
import Login from "../components/route-manage/Login"
const routes = [
  { path: "/about", component: About },
  { path: "/home", component: Home },
  { path: "/login", component: Login },
]
export default routes
```
### 嵌套路由
1. 编辑routes/index.js 在父路由规则中添加一个属性routes，值是一个数组
2. routes数组中和一级一样 给数组添加对象 对象中有两个属性path和component
3. 在某组件中添加子组件的NavLink并渲染
4. 如果要渲染子路由：引入有renderRoutes方法的插件react-router-config
5. 引入routes路由规则文件，找到路由规则 渲染就可以了
**About.jsx**
```jsx
import React from "react";
import {NavLink} from "react-router-dom";
import { renderRoutes } from "react-router-config"
class About extends React.Component {
  render() {
    return (
      <div>
        <h3>关于我们</h3>
        <NavLink to="/about/my"></NavLink>
        <NavLink to="/about/her"></NavLink>
        {renderRoutes(this.props.route.routes)}
      </div>                                                                                                                                                                                                                           
    )
  }
}
```
路由规则**routes/index.js**
```js
import About from "../components/route-manage/About"
import Home from "../components/route-manage/Home"
import Login from "../components/route-manage/Login"
import AboutMy from "../components/route-manage/AboutMy"
import Abouther from "../components/route-manage/Abouther"

const routes = [
  { path: "/home", component: Home },
  { path: "/login", component: Login },
  { path: "/about", component: About, routes: [
    {
      path: "/about/my",
      compoent: AboutMy
    },
    {
      path: "/about/her",
      compoent: Abouther
    }
    
  ]}
]
```