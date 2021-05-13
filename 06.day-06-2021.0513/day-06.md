# day-05.md

## 高阶组件

### 什么是高阶组件
> 高阶组件：实际上是一个函数，这个函数能够接收一个参数组件，然后返回一个增强后的组件
> 参数组件：就是被包装的组件
> 返回的组件： 增强后的组件。这个组件中就是通过props来接收复用的状态逻辑的
显示
### 给高阶组件添加displayName
> displayName：用于设置react-dev-tools （浏览器中的react插件）中展示组件的名称
>注意： 该属性仅仅只设置展示名称，不会对组件功能产生影响，如果不想再react-dev-tools 中进行区分实际上可以省略
```js
// 卸载函数组件中的return的上面
function getDisplayName(WarppedComponent) {
    return WarppedComponent.displayName || WarppedComponent.name || "Component"
  }
  Mouse.displayName = `widthMouse${getDisplayName(WarppedComponent)}`
```
> 数据组件（记录数据，函数包装类组件，这个函数的参数必须是大驼峰且必须存在，必须存在return返回内部的类组件）-- Hign-order-Component\Mouse

```js
// 高阶组件
/**
 * * 是一个函数
 * * 参数是一个组件
 * * 返回值是一个增强型的组件
 */
import React from "react"

const widthMouse = WarppedComponent => {

  class Mouse extends React.Component {
    state = {
      x: 0,
      y: 0
    }
    fn = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }
    componentDidMount() {
      window.addEventListener("mousemove", this.fn)
    }
    render() {
      // return this.props.children(this.state)
      return <WarppedComponent {...this.state} {...this.props}></WarppedComponent>
    }
  }

  function getDisplayName(WarppedComponent) {
    return WarppedComponent.displayName || WarppedComponent.name || "Component"
  }
  Mouse.displayName = `widthMouse${getDisplayName(WarppedComponent)}`
  return Mouse;
}

export default widthMouse;
```
> Com-1 
1. 导入数据组件
2. 定义函数组件，函数组件的参数props就是其中的数据，使用**props.**的方式使用数据
3. 导出必须使用导入的导入的名称且将本次定义的函数组件以实参的方式使用
```js
import widthMouse from "../Mouse"
const Position = (props) => {
  return (
    <div>
      <p>我是康康{props.x}--{props.y}---{props.a}</p>
    </div>
  )
}
// const MousePosition = widthMouse(Position)
export default widthMouse(Position);
```

> App
1. 导入react和com-1组件在render方法中直接以标签的方式使用
```js
import React from "react";
import WidthMouse from "../Com-1"
class App extends React.Component {
  render() {
    return (
      <div>
        {/* <MousePosition></MousePosition> */}
        <WidthMouse a={1}></WidthMouse>
      </div>
    )
  }
}
export default App;
```
在index.js中导入使用即可显示（只能导入App组件）

### 高阶组件传值
> 在显示的组件中
```js
<WidthMouse a={1}></WidthMouse>
```
> 在函数组件中 Mouse.jsx
```js
// 高阶组件
/**
 * * 是一个函数
 * * 参数是一个组件
 * * 返回值是一个增强型的组件
 */
import React from "react"

const widthMouse = WarppedComponent => {

  class Mouse extends React.Component {
    state = {
      x: 0,
      y: 0
    }
    fn = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }
    componentDidMount() {
      window.addEventListener("mousemove", this.fn)
    }
    render() {
      // return this.props.children(this.state)
      /**
       * ! 结构props
       */
      return <WarppedComponent {...this.state} {...this.props}></WarppedComponent>
    }
  }
  return Mouse;
}

export default widthMouse;
```
> 在导出的组件中
```js
import widthMouse from "../Mouse"
const Position = (props) => {
  return (
    <div>
      /**
       * ! 直接是哟个吗props.a使用父组件传递的a
       */
      <p>我是康康{props.x}--{props.y}---{props.a}</p>
    </div>
  )
}
// const MousePosition = widthMouse(Position)
export default widthMouse(Position);
```



## setState() 的说明

### 更新数据
- setState() 是异步更新数据的
- 注意:使用该方法时，后面的setState() 不要依赖于前面的setState()
- 可以注意调用setState()，只会触发一次重新渲染
> 推荐语法
- 推荐使用 setState((state,props) => {}) 语法
- state表示的时最新的state
- props表示的时最新的props
```js
handleClick = ()=> {
  // state表示的时最新的state
  // props表示的时最新的props
  this.setState((state,props) => {
    console.log(state.count)
    return {
      count: 1
    }
  })
}
render() {
  <div Onclick={handleClick}>{this.state}</div>  
}
```
## JSX语法的转化过程

> JSX仅仅只是createElement()方法的语法塘（简化语法）
> JSX语法被@babel/preset-react插件编译为createElement()方法
> React 元素：是一个对象，用来表述你希望在屏幕上看到的内容


## 组件的更新机制
> setState() 的两个作用：1.修改state 2.更新组件（UI）
> 过程：父组件重新渲染时，也会重新渲染子组件。但是只会渲染当前组件子树，（当前组件及其所有的子组件）

## **组件的性能优化**

### 减轻state
> 减轻state： 只存储跟组件渲染相关的数据（比如：count、列表数据、loading等）
> 注意：不用做渲染的数据不要放在state中，比如定时器id等
> 对于这种需要在多个方法中用到的数据，应该放在this中

### 避免不必要的重新渲染
> 组件更新机制：父组件的更新会引起子组件也被更新，这种思路很清晰
> 问题：子组件没有任何变化时也会重新渲染，所以要让子组件必要时不更新
> 使用钩子函数shouldComponentUpdate（nextProps，nextState）1
> 作用：通过返回值决定组件是否被渲染，返回true可以被渲染，false表示不重新渲染
> 触发时机：更新阶段的钩子函数，组件重新渲染前执行（shouldComponentUpdate.render)

#### 代码
> 目的：在爷爷组件中的state更新时子组件会不会重新渲染，如果重新渲染能不能避免不必要的重新渲染
子组件
```js
import React from "react";
class Son extends React.Component {
  // 追踪更新钩子函数 数据更新时的钩子函数
  // nextProps(最新的props) nextState(最新的state的值)
  // shouldComponentUpdate(nextProps,nextState) {
  //   console.log(nextProps)
  //   console.log(nextState)
  //   console.log("孙子组件更新了");
  //   return false;
  // }
  render() {
    console.log("孙子组件更新");
    return (
      <h3>我是孙子组件</h3>
    )
  }
}
export default Son;
```

父组件
```js
import React from "react";
import Son from "./Son"
class Father extends React.Component {
  render() {
    return (
      <div>
        <h3>父组件--{this.props.num}</h3>
        <Son></Son>
      </div>
    )
  }
}
export default Father;
```
爷爷组件
```js
import React from "react";
// 父组件
import Father from './Father';
class GrandFather extends React.Component {
  state = {
    num: 1
  }
  StateUpdate = () => {
    this.setState({
      num: 2
    })
  }
  render() {
    return (
      <div>
        <h3>爷爷组件</h3>
        <button onClick={this.StateUpdate}>点我更新组件state</button>
        <Father num={this.state.num}></Father>
      </div>

    )
  }
}
export default GrandFather;

```
> 由上述代码得知，如果爷爷组件的state的值改变的话儿子组件也会重新渲染，而钩子函数shouldComponentUpdate可以避免它的重新渲染
```js
import React from "react";
class Son extends React.Component {
  // 追踪更新钩子函数 数据更新时的钩子函数
  // nextProps(最新的props) nextState(最新的state的值)
  shouldComponentUpdate(nextProps,nextState) {
    console.log(nextProps)
    console.log(nextState)
    console.log("孙子组件更新了");
    return false;
  }
  render() {
    console.log("孙子组件更新");
    return (
      <h3>我是孙子组件</h3>
    )
  }
}
export default Son;
```
> 注意！shouldComponentUpdate必须存在return值，而且返回布尔值，为true会重新渲染子组件，为false并不会渲染子组件。
### 纯组件
> 但是当多种组件实现在页面上的话，不能一直写shouldComponentUpdate，因为组件的个数天多了
> 纯组件：PureComponent与React.Component**功能相似 **
> 区别：PureComponent内部自动实现了shouldComponentUpdate钩子，不需要手动比较
> 原理：纯组件内部通过分别对比前后两次props和state的值来决定是否重新渲染组件

> 说明：村组件内部的对比时 shallow compare（浅层对比）
> 对于值类型来说：比较两个值是否相同（直接赋值即可）
> 注意state或props中属性值为引用类型时，应该创建新数据，不要直接修改元数据（示例）

- 
```js
import React from "react";


/**
 * !!!            PureComponent
 */
class Son extends React.PureComponent {
  // 追踪更新钩子函数 数据更新时的钩子函数
  // nextProps(最新的props) nextState(最新的state的值)
 
  render() {
    console.log("孙子组件更新");
    return (
      <h3>我是孙子组件--{this.props.num2}</h3>
    )
  }
}
export default Son;
```