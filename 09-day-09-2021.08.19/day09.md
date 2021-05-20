# day-09
## 给增加删除添加动画效果
```css
.list-enter {
  transform: translateX(100%);
  opacity: 0;
}
.list-enter-active {
  transform: translateX(0%);
  opacity: 1;
  transition: all 3s;
}

.list-enter-done {
  transform: translateX(0%);
  opacity: 1;
}

.list-exit {
  transform: translateX(0%);
  opacity: 1;
}
.list-exit-active {
  transform: translateX(100%);
  opacity: 0;
  transition: all 3s;
}
.list-exit-done {
  transform: translateX(100%);
  opacity: 0;
}
li {
  background-color: skyblue;
}
```
```js
import React from "react";
import {CSSTransition,TransitionGroup}  from "react-transition-group";
import "./index.css"
class Index extends React.Component {
  state = {
    heroList: [{
      id: 1,
      name: "李元芳"
    },
    {
      id: 2,
      name: "小乔"
    },
    {
      id: 3,
      name: "吕布"
      }]
    }
    handleRemove = (id) => {
      this.setState({
        heroList: this.state.heroList.filter(item => item.id !== id)
      })
  }
  add = () => {
    this.setState({
      heroList: [...this.state.heroList,{id: this.state.heroList.length+1, name: "康康"}]

    })
  } 
  render() {
    return (
      <div>
        <ul>
          <TransitionGroup>
            {
              this.state.heroList.map(item => (
                <CSSTransition key={item.id} classNames="lsit" timeout={3000}>
                  <li onClick={() => this.handleRemove(item.id)}>{item.name}</li>
                </CSSTransition>
              ))
            }
          </TransitionGroup>
        </ul>
        <button onClick={this.add}>增加</button>
      </div>
    )
  }
}
export default Index
```
## 路由介绍

### 什么是路由
路由维护了URL地址和组件的隐射关系，通过这个映射关系，我们就可以根据不同的URL地址，去渲染不同的组件

### 如何再React中安装路由
```cmd
npm install react-router-dom
```
## 路由的基本使用

### 使用步骤
**使用步骤**
1. 引入import { BrowserRouter, HashRouter, Link, NavLink,Route } from "react-router-dom"
2. 使用BrowserRouter或HashRouter包裹整个应用（也可以包裹Link
3. Link标签有一个属性：to跳转到to="地址"
4. Route标签有两个属性 path=”地址“ component={组件}
 

### 常用组件的说明
- BrowserRouter 组件：包裹整个React应用，整个应用中使用一次即可
- Link 组件：最终会生成一个a标签 通过to属性指定pathname（history /）或hash（hash 模式）
- router组件：用来配置路由规则和要展示的组件
  - path属性：配置路由规则
  - component 属性：指定当前路由规则匹配时要展示的组件
  - Router 组件放在哪，组件的内容就展示在哪，并且每一个路由都是一个单独的Router组件

- react-router之前，所有的代码都是统一放到react-router中管理的
  - react-router4之前，拆分为了两个包react-router-dom和react-router-native
    + react-router-dom再浏览器中使用路由
    + react-router- 在原生应用中使用路由

- BrowserRouter history模式使用的是H5的特性，所以兼容性会比HashRouter hash模式差异i邪恶
  - 在企业开发中如果不需要兼容低版本浏览器，建议使用BrowserRouter荣国需要兼容低版本就是用HashRouter
- 无论是Link还是Router都只能放到BrowserRouter和HashRouter中才有效
```jsx
import React from "react";
/**
 * react-router-dom是应用在网页中的路由包
 * BrowserRouter：history模式的URL 有点手动切换路由方便 H5新特性
 * HashRouter：hash模式的URL 有点兼容性强
 * Link：用来改变浏览器中的URL编译完就是a标签
 * NavLink：和link一摸一样 编译完就是a标签
 * Route：占位符，用来展示组件
 */
import { BrowserRouter, HashRouter, Link, NavLink,Route } from "react-router-dom"
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
  state = {
    flag: true
  }
  buttonClick = (f) => {
    this.setState({
      flag: f
    })
  }
  render() {
    return (
      <HashRouter>
        <Link to="/home">Home</Link> <Link to="/about">about</Link>
        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </HashRouter>
    )
  }
}
export default Index
```
#### NavLink
> Navlink和Link的区别
- 可以使用Route的一些属性 exact
```jsx
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
import { BrowserRouter, HashRouter, Link, NavLink, Route, Switch } from "react-router-dom"
import Home from "./Home"
import About from "./about"
class Index extends React.Component {
  render() {
    return (
      <HashRouter>
        {/* // Link标签的作用：改变URL的地址 a标签 不是精准匹配，是自左而右的模糊匹配，显示所有的匹配结果 */}
        {/* <Link to="/home">Home</Link> <Link to="/home/about">about</Link> */}
        {/* exact 可以让路径精准匹配 */}
        <NavLink  activeClassName="active" to="/home">Home</NavLink>
        <NavLink  activeClassName="active" to="/home/about">About</NavLink>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/home/about" component={About}></Route>
      </HashRouter>
    )
  }
}
export default Index
```

### 路由的执行过程
1. 当点击Link（a标签）的时候，就会修改浏览器中的pathname
2. 只要浏览器地址栏中的pathname发生改变，React路由就会监听到这个改变
3. React 路由监听到pathname改变后，就会遍历所有route组件，分别使用Route组件中的path路由规则，与当前的浏览器地址栏中的pathname进行匹配
4. 只要匹配成功，就会把当前Route对应的组件展示在页面中
- 注意：匹配值不是找到第一个匹配的路由就停下来了。而是：所有的Route都会进行匹配，只要匹配就会展示该组件

## Switch
默认情况下路由会从上至下匹配所有的Route，只要匹配就会显示
但是在企业开发中大部分情况下我们希望的是以但到了后续就不要再匹配了
此时我们就可以通过Switch来实现
```js
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
        {/* Switch 只能匹配一个路由 匹配到一次就再匹配了,不会在匹配到其他组件的时候出现Other组件 */}
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
```

## Redirect
资源重定向，也就是可以在访问某个资源地址的时候重定向到另外一个资源地址
例如：访问/user 重定向到/login
1. 定义User和Login组件
2. 给user和Login添加路由
3. 点击user 显示user组件，单机login希纳是user组件
4. 改变user组件，在user中定义一个state： islogin：false
5. 使用Redirect组件 重定向Login组件
> 当isLogin状态不为true就跳转登陆页面
**User组件**
```jsx
import React from "react";
import { Redirect } from "react-router-dom";
class User extends React.Component {
  state = {
    isLogin: false
  }
  render() {
    let user = <div>User页面</div>
    return this.state.isLogin ? user : <Redirect to="/login" />
  }
}
export default User
```
**index页面**
```jsx
import React from "react";
/**
 * react-router-dom是应用在网页中的路由包
 * BrowserRouter：history模式的URL 有点手动切换路由方便 H5新特性
 * HashRouter：hash模式的URL 有点兼容性强
 * Link：用来改变浏览器中的URL编译完就是a标签
 * NavLink：和link一摸一样 编译完就是a标签
 * Route：占位符，用来展示组件
 */
import { BrowserRouter, HashRouter, Link, NavLink, Route, Switch } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import User from './User';
class Index extends React.Component {
  render() {
    return (
      <HashRouter>
        <NavLink exact to="/home">Home</NavLink>
        <NavLink exact to="/Login">Login</NavLink>
        <NavLink exact to="/User">User</NavLink>
        {/* Switch 只能匹配一个路由 匹配到一次就再匹配了 */}
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/User" component={User}></Route>
          <Route exact path="/Login" component={Login}></Route>
        </Switch>
      </HashRouter>
    )
  }
}
export default Index
```

## 嵌套路由
注意：由于组件是在BrowserRouter or HashRouter中显示的 所以当前组件中不用使用BrowserRouter or HashRouter来包裹NavLinkSwitch/Route
1. 在home中创建三个连接，推荐、歌单、排行版
2. 在Home中创建NavLink Route

**注意**
- 如果使用嵌套路由，不能在一级路由的地方写精确匹配，二级路由号进行路径拼接
```jsx
import React from "react";
import { NavLink, Switch, Route} from 'react-router-dom';
const Recod = () => {
  return (
    <div>我是推荐</div>
  )
}
const TopList = () => {
  return (
    <div>我是排行榜</div>
  )
}
class Home extends React.Component {
  render() {
    return (
      <div>
        <div>Home组件</div>
        <NavLink exact to="/home/recod">推荐</NavLink>
        <NavLink exact to="/home/toplist">排行榜</NavLink>
        <Switch>
          <Route exact path="/home/recod" component={Recod} />
          <Route exact path="/home/toplist" component={TopList} />
        </Switch>
      </div>
    )
  }
}
export default Home
```
## 手动路由跳转
- 不能通过Link，NavLink来设置组员地址，而是通过JS来设置资源地址
- 如果是Hash模式。那么只需要通过JS设置Hash值即可
  - window.location.hash = "hash值"；
- 如果一个组件是通过路由创建出来的，那么系统就会自动传递一个history给我们
- 通过push方法修改资源地址即可
this.props.history.push("地址值")；
**hash模式跳转**
```jsx
import React from "react";
class Login extends React.Component {
  handle = () => {
    window.location.hash = "/home"
  }
  render() {
    return (
      <div>
        <div>Login组件</div>
        <button onClick={this.handle}>hash跳转到Home</button>
      </div>
    )
  }
}
export default Login
```

**history模式调换**
```jsx
import React from "react";
class Login extends React.Component {
  handle = () => {
   this.props.history.push("/home")
  }
  render() {
    return (
      <div>
        <div>Login组件</div>
        <button onClick={this.handle}>hash跳转到Home</button>
      </div>
    )
  }
}
export default Login
```