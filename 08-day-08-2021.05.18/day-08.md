# day-08

## css-in-js



### styled-components
> 安装
```cmd
npm install --sava styled-components
```
> 定义样式组件
```js
const DivStyle = styled.div`
  width: 200px;
  height: 200px;
  background-color: skyblue;
`
```
> 使用
```js
import React from "react";
import styled from "styled-components";

const DivStyle = styled.div`
  width: 200px;
  height: 200px;
  background-color: skyblue;
`
class StyledComponents extends React.Component {
  state = {
  }
  
  render() {
    return (
      <DivStyle></DivStyle>
    )
  }
}
export default StyledComponents
```

#### styled-components的属性判断
```js
import React from "react";
import styled from "styled-components";
const DivStyle = styled.div`
  width: 200px;
  height: 200px;
  background-color: skyblue;
`
const Button = styled.button`
  width: ${props => {
  console.log(props);
  // 如哦props所在的组件存在primary属性就让修改width
  if (props.primary) {
    return "100px";
  } else {
    return props.width
  }
  }};
  height: 30px;
  background-color: gold;
  color: skyblue;
  border: none;
`
class StyledComponents extends React.Component {
  state = {
    width: "70px",
    height: "30px"
  }
  
  render() {
    return (
      <div>
        <DivStyle></DivStyle>
        <Button primary {...this.state}>主要按钮</Button>
        <Button>按钮</Button>
      </div>
    )
  }
}
export default StyledComponents
```
#### styled-components的样式继承
```js
import React from "react";
import styled from "styled-components";
// 基础样式按钮
const Button1 = styled.button`
  width: 100px;
  height: 30px;
  background-color: goldenrod;
  color: skyblue;
  border: none;
`
// 扩展样式按钮
const Button2 = styled(Button)`
  border: 10px solid gold;
`
class StyledComponents extends React.Component {
  state = {
    width: "70px",
    height: "30px"
  }
  
  render() {
    return (
      <div>
        <Button1>按钮</Button1>
        <Button2>继承按钮</Button2>
      </div>
    )
  }
}
export default StyledComponents
```

## 动画
> http://reactcommunity.org/react-transition-group/transition
- Transition
  - 该组件时一个和平台无关的组件（不一定要结合css）
  - 在前端开发中我们一般都是结合css来完成样式，所以比较常用的是CSSTransition
- CssTransition
  - 在前端开发中，通常使用CSSTransition来完成过渡动画效果
- SwitchTransition
  - 两个组件显示和隐藏切换时，使用SwitchTransition
- TransactionGroup
  - 将多个动画包裹在其中，一般用列表中的动画
### 原生动画
```js

// #region  原生动画
import React from "react";
import styled from "styled-components";
const Div = styled.div`
  width: ${props=> props.width};
  height: ${props => props.height};
  background: gold;
  opacity: ${props => props.opacity};
  transition: all 3s;
`
// 点击按钮时，让div发生过渡
class Transition extends React.Component {
  state = {
    width: "0px",
    height: "0px",
    opacity: 1
  }
  handle = () => {
    this.setState({
      width: "50px",
      height: "50px",
    })
  }
  render() {
    return (
      <div>
        <Div {...this.state}></Div>
        <button onClick={this.handle}>按钮</button>
      </div>
    )
  }
}
export default Transition;
// #endRegion

```

### 插件动画 TransitionGroup
> 下载命令
```cmd
npm install react-transition-group --save
```
#### CSSTransition的使用
1. 安装插件npm install react-transition-group --save
2. 在使用过渡效果中导入 import {CSSTransition} from "react-transition-group";
3. 使用导入的CSSTransaction组件吧需要过渡的标签包起来
4. 书写过渡的样式
5.设置CSSTransaction的属性 in classNames timeout
**css**
```css
/* xxx-enter 进入动画执行前绑定的类名 */
/* xxx-enter-active 进入动画执行中绑定的类名 */
/* xxx-enter-done 进入动画执行完毕绑定的类名 */

.box-enter {
  width: 0;
  height: 0;
  opacity: 0;
  background-color: gold;
}

.box-enter-active {
  width: 100px;
  height: 100px;
  opacity: 1;
  background-color: gold;
  transition: all 3s;
}

.box-enter-done {
  width: 100px;
  height: 100px;
  opacity: 1;
  background-color: gold;
}
```
**组件 Transaction/index.jsx
```jsx
// #region  CssTransition的基本使用
import React from "react";
import "./index.css"
import {CSSTransition} from "react-transition-group";

// 点击按钮时，让div发生过渡
class Transition extends React.Component {
  state = {
    isShow: false
  }
  handle = () => {
    this.setState({
      isShow: true
    })
  }
  render() {
    return (
      <div>
        {/* 
          in 触发动画开始或退出的状态
          classNames 告诉react-transition-group 类的前缀是什么
          timeout 动画运行多久退出 一定要大于等于transition属性定义的时间
        */}
        <CSSTransition in={this.state.isShow} classNames="box" timeout={3000}>
          <div></div>
        </CSSTransition>
        <button onClick={this.handle}>按钮</button>
      </div>
    )
  }
}
export default Transition;
// #endRegion

```

#### 隐藏动画
```css
/* xxx-enter 进入动画执行前绑定的类名 */
/* xxx-enter-active 进入动画执行中绑定的类名 */
/* xxx-enter-done 进入动画执行完毕绑定的类名 */

.box-enter {
  width: 0;
  height: 0;
  opacity: 0;
  background-color: gold;
}

.box-enter-active {
  width: 100px;
  height: 100px;
  opacity: 1;
  background-color: gold;
  transition: all 3s;
}

.box-enter-done {
  width: 100px;
  height: 100px;
  opacity: 1;
  background-color: gold;
}

/* xxx-exit 退出动画执行前绑定的类名 */
/* xxx-exit-active 退出动画执行中绑定的类名 */
/* xxx-exit-done 退出动画执行完毕绑定的类名 */
.box-exit {
  width: 100px;
  height: 100px;
  opacity: 1;
  background-color: gold;
}

.box-exit-active {
  width: 0;
  height: 0;
  opacity: 1;
  background-color: gold;
  transition: all 3s;
}

.box-exit-done {
  width: 0;
  height: 0;
  opacity: 1;
  background-color: gold;
}
```
```jsx
// #region  CssTransition的基本使用
import React from "react";
import "./index.css"
import {CSSTransition} from "react-transition-group";

// 点击按钮时，让div发生过渡
class Transition extends React.Component {
  state = {
    isShow: false
  }
  handle = () => {
    this.setState({
      isShow: true
    })
  }
  handleHide = () => {
    this.setState({
      isShow: false
    })
  }
  render() {
    return (
      <div>
        {/* 
          in 触发动画开始或退出的状态
          classNames 告诉react-transition-group 类的前缀是什么
          timeout 动画运行多久退出 一定要大于等于transition属性定义的时间
        */}
        <CSSTransition in={this.state.isShow} classNames="box" timeout={3000}>
          <div></div>
        </CSSTransition>
        <button onClick={this.handle}>按钮</button>
        <button onClick={this.handleHide}>隐藏按钮</button>
      </div>
    )
  }
}
export default Transition;
// #endRegion
```

#### 页面刷新展示动画
```css
/* xxx-enter 进入动画执行前绑定的类名 */
/* xxx-enter-active 进入动画执行中绑定的类名 */
/* xxx-enter-done 进入动画执行完毕绑定的类名 */

.box-enter {
  width: 0;
  height: 0;
  opacity: 0;
  background-color: gold;
}

.box-enter-active {
  width: 100px;
  height: 100px;
  opacity: 1;
  background-color: gold;
  transition: all 3s;
}

.box-enter-done {
  width: 100px;
  height: 100px;
  opacity: 1;
  background-color: gold;
}

/* xxx-exit 退出动画执行前绑定的类名 */
/* xxx-exit-active 退出动画执行中绑定的类名 */
/* xxx-exit-done 退出动画执行完毕绑定的类名 */
.box-exit {
  width: 100px;
  height: 100px;
  opacity: 1;
  background-color: gold;
}

.box-exit-active {
  width: 0;
  height: 0;
  opacity: 1;
  background-color: gold;
  transition: all 3s;
}

.box-exit-done {
  width: 0;
  height: 0;
  opacity: 1;
  background-color: gold;
}

.box-appear {
  width: 0;
  height: 0;
  opacity: 0;
  background-color: green;
  transition: all 3s;
}

.box-appear-active {
  width: 100px;
  height: 100px;
  opacity: 1;
  background-color: green;
}

.box-appear-done {
  width: 100px;
  height: 100px;
  opacity: 1;
  background-color: green;
}
```
```jsx
// #region  CssTransition的基本使用
import React from "react";
import "./index.css"
import {CSSTransition} from "react-transition-group";

// 点击按钮时，让div发生过渡
class Transition extends React.Component {
  state = {
    isShow: true
  }
  handle = () => {
    this.setState({
      isShow: true
    })
  }
  handleHide = () => {
    this.setState({
      isShow: false
    })
  }
  render() {
    return (
      <div>
        {/* 
          in 触发动画开始或退出的状态
          classNames 告诉react-transition-group 类的前缀是什么
          timeout 动画运行多久退出 一定要大于等于transition属性定义的时间
        */}
        <CSSTransition in={this.state.isShow} classNames="box" timeout={3000} appear>
          <div></div>
        </CSSTransition>
        <button onClick={this.handle}>按钮</button>
        <button onClick={this.handleHide}>隐藏按钮</button>
      </div>
    )
  }
}
export default Transition;
// #endRegion
```

#### 当样式动画完成删除DOM
```jsx
// #region  CssTransition的基本使用
import React from "react";
import "./index.css"
import {CSSTransition} from "react-transition-group";

// 点击按钮时，让div发生过渡
class Transition extends React.Component {
  state = {
    isShow: true
  }
  handle = () => {
    this.setState({
      isShow: true
    })
  }
  handleHide = () => {
    this.setState({
      isShow: false
    })
  }
  render() {
    return (
      <div>
        {/* unmountOnExit 等状态为Done就删除元素 */}
        <CSSTransition in={this.state.isShow} classNames="box" timeout={3000} appear unmountOnExit={true}>
          <div></div>
        </CSSTransition>
        <button onClick={this.handle}>按钮</button>
        <button onClick={this.handleHide}>隐藏按钮</button>
      </div>
    )
  }
}
export default Transition;
// #endRegion
```

#### 动画状态中的回调函数
```jsx
import React from "react";
import "./index.css"
import { CSSTransition } from "react-transition-group";

// 点击按钮时，让div发生过渡
class Transition extends React.Component {
  state = {
    isShow: true
  }
  handle = () => {
    this.setState({
      isShow: true
    })
  }
  handleHide = () => {
    this.setState({
      isShow: false
    })
  }
  render() {
    return (
      <div>
        {/* 
          in 触发动画开始或退出的状态
          classNames 告诉react-transition-group 类的前缀是什么
          timeout 动画运行多久退出 一定要大于等于transition属性定义的时间
        */}
        <CSSTransition
          in={this.state.isShow}
          classNames="box" timeout={3000}
          appear
          unmountOnExit={true}
          // 执行动画时的回调，在react-transition-group中有更多回调
          onEnter={(HtmlElement, isAppearing) => console.log(HtmlElement, isAppearing)}
        >
          <div></div>
        </CSSTransition>
        <button onClick={this.handle}>按钮</button>
        <button onClick={this.handleHide}>隐藏按钮</button>
      </div>
    )
  }
}
export default Transition;
// #endRegion
```

#### 切换 SwitchTransaction
1. 导入SwitchTransaction
2. 使用SwitchTransaction包裹CSSTransaction
3. 注意： 以前在CSSTransaction中的in现在使用key
4. 写变化的演示出去进来。类名前缀classNames 
5. timeout 时间
```css
.box2-enter {
  width: 120px;
  height: 40px;opacity: 0;
  opacity: 0;
  transform: translate(-100%);
}
.box2-enter-active {
  width: 120px;
  height: 40px;
  opacity: 1;
  transform: translate(0%);
  transition: all 1s;
}
.box2-enter-done {
  width: 120px;
  height: 40px;
  opacity: 1;
  transform: translate(0%);
}

.box2-exit {
  width: 120px;
  height: 40px;
  opacity: 1;
  transform: translate(0%);
}
.box2-exit-active {
  width: 120px;
  height: 40px;
  opacity: 1;
  transform: translate(100%);
}
.box2-exit-done {
  width: 120px;
  height: 40px;
  opacity: 1;
  transform: translate(100%);
}
button {
  display: block;
  width: 120px;
  height: 40px;
  margin: 0 auto;
}
```

```jsx
// #region  SwitchTransition
import React from "react";
import "./index.css"
import { CSSTransition, SwitchTransition } from "react-transition-group";

// 点击按钮时，让div发生过渡
class Transition extends React.Component {
  state = {
    flag: true
  }
  handle = () => {
    this.setState({
      flag: !this.state.flag
    })
  }
  render() {
    return (
      <SwitchTransition>
        <CSSTransition
          in={this.state.flag}
          classNames="box2"
          timeout={3000}
        >
          <button onClick={this.handle}>{this.state.flag ? "Hello,word" : "Goodbay,word"}</button>
        </CSSTransition>
      </SwitchTransition>
    )
  }
}
export default Transition;
// #endRegion

```