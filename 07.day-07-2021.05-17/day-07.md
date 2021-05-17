# day-07
## 组件优化
对于函数组件来说：
- 没有继承关系
- 没有生命周期方法
- /
 1. 函数与组件的性能优化
 对于类组件，我们可以通过实现shouldComputedUpdate方法，或者继承来自pureComponment来解决性能优化问题，但是对于函数式组件，是没有生命周期和继承关系的
 2. 通过react.memo()告诫组件
 React.memo会返回也给优化后的组件给我们
`未使用react.memo`
> 未使用memo只要组件父组件的数据更新，子组件也会重新渲染
```js
// 父组件
import React from "react";
import Home from "./Home";
class App extends React.Component {
  state = {
    count: 0
  }
  hanlde = () => {
    this.setState({
      count: 1
    })
  }

  render() {
    console.log("app组件更新");
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.hanlde} >点我改变状态</button>
        <Home count={this.state.count}></Home>
      </div>
    )
  }
}
export default App
// 子组件 
import React from "react";
const Home = (props) => {
  console.log("组件更新");
  return (
    <div>
      <h3>我是home组件{props.count}</h3>
    </div>
  )
}
export default Home;
```
`使用memo`
> 子组件只会在数据与上一次不一致的时候才会更新
```js
// 子组件
const Home = React.memo((props) => {
  console.log("home组件更新")
  return (
    <div>
      <h3>我是Home组件</h3>
      <p>我是Home中的count{props.count}</p>
    </div>
  )
})
```
 ### 虚拟DOM
 - 虚拟DOM（Vitual DOM）
 - 本质上就是一个普通的JS对象，它是用来描述你希望在页面上看到的内容

## Diff算法
1. 初次渲染时，React会根据初始state（model，创建一个虚拟的DOM对象（树）
2. 根据虚拟DOM,渲染到页面中，创建新的虚拟机的对象（树）
3. 当数据发生变化后（setState（））,重新根据新的数据，创建新的虚拟对象（树）
4. 与上一次得到的虚拟对象，使用Diff算法对比。得到需要的内容
5. 最终react只将变化的内容更新（patch）里面，不会渲染到页面
 - 只要想让状态发生变化，就调用setState，就会执组件的render方法setState。来重新渲染组件
 - 注意：render重新执行不代表把整个组件渲染到页面中。而实际上，React内部会使用虚拟DOM和Diff算法来做到部分更新重新，部分更新：之江变化的地方重新渲染到页面上，这样，DOm跟新讲到了最低
```js
import React from "react";
class Deff0 extends React.Component {
  state = {
    count: 0
  }
  handle = () => {
    this.setState({
      count: 1
    })
  }
  render() {
    return (
      <div>
        {/* 通过观察发现count当被更新之后只会修改变化的数据，其他内容不会改变 */}
        <p>我是p标签{this.state.count}</p>
        <button onClick={this.handle}>按钮</button>
      </div>
    )
  }
}
export default Deff0
```
### Diff算法说明1
> 如果两个元素的根元素相同，那么就会删除旧树，添加新树
**父组件**
```js
import React from "react";
import Son  from "./Son";
import Daugther from "./Daugther"
class Doff1 extends React.Component {
  state = {
    flag: false
  }
  handleClick = () => {
    this.setState({
      flag: true
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>按钮</button>
        {this.state.flag ? <Son /> : <Daugther />}
      </div>
    )
  }
}
export default Doff1
```
**Son组件**
```js
import React from "react";
class Son extends React.Component {
  state = {
  
  }
  render() {
    return (
      <p>我是子组件</p>
    )
  }
}
export default Son
```
**Daugther**
```js
import React from "react";
class Daughter extends React.Component {
  state = {

  }
  render() {
    return (
      <p>我是女儿组件</p>
    )
  }
}
export default Daughter
```

### Diff算法说明2
> 对于类型相同的React DOM 元素。Rreat会对比两者的属性师是否同，只要更新不同的属性。
> 当处理完这个DOM结点，React就会递归处理子节点

### Diff算法说明3
当在子节点的后面添加一个结点，这时候两棵树的转化工作执行的很好

## 虚拟DOM
> 虚拟DOM真正的价值从来都不是性能，而是能让React摆脱浏览器的限制。也就是能使用js的地方就能使用React
- 虚拟DOM（Virtual DOM）
- 本质上就是一个普通的js对象，它是用来描述你希望在页面上看到的内容（UI）
```js
import React from "react";
class VirtualDOM extends React.Component {
  state = {

  }
  render() {
    const DIVDOM =
      <div>
        <p>我是p标签</p>
        <button>按钮</button>
      </div>
    console.log(DIVDOM)
    return (DIVDOM)
  }
}
export default VirtualDOM
```
## 将某元素或组件渲染到父组件意外的标签上 Protals
> 默认的情况下，所有的组件都是渲染到root元素中的，Portal提供和了一种将组建渲染到其他元素中的能力
**ReactDOM.createProtal**
```text

三个参数
第一个参数：子元素或者组件
第二个参数：把这一段结构渲染到哪里（其实和ReactDOM.render()的第二个参数一样，挂载的位置)
第三个参数：
```
```js
import React from "react";
import  Home from "./Home";
class App extends React.Component {
// 父组件
  state = {
    count: 0
  }

  handleClick = () => {
    this.setState({
      count:1
  })
  }
  render() {
    return (
      <div>
        <p>{ this.state.count }</p>
        <button onClick={this.handleClick}>点我更新数据</button>
        <Home>
          <div>
            <h3>我是Home组件</h3>
          </div>
        </Home>
      </div>
    )
  }
}
export default App

// 子组件
import React from "react";
import ReactDOM from "react-dom"
class Son extends React.Component {
// #endRegion
  state = {
  
  }
  render() {
    // ReactDOM.createProtal()
    /**
     * 三个参数
     * 第一个参数：子元素或者组件
     * 第二个参数：把这一段结构渲染到哪里（其实和ReactDOM.render()的第二个参数一样，挂载的位置)
     * 第三个参数：
     */
    return ReactDOM.createPortal(this.props.children,document.getElementById("app"))
    
  }
}
export default Son
```
## Fragment-Component
> `<React.Fragment></React.Fragment>`
> `<Fragment></Fragment>`
> `<></>`
注意： 第一、二种支持且只支持key、children属性，初次之外其他属性都不支持，第三种不支持任何属性，只包括子元素
```js
import React, { Fragment } from "react";
class Index extends React.Component {
  state = {
    count: 0,
    hero: [
      {
        id: 1,
        name: "兰陵王"
      },
      {
        id: 2,
        name: "李白"
      },
      {
        id: 3,
        name: "杜甫"
      }
    ]
  }
  render() {
    return (

      // 1. 直接使用碎片
      // <Fragment>
      //   <li>{this.state.hero[0].name}</li>
      //   <li>{this.state.hero[1].name}</li>
      //   <li>{this.state.hero[2].name}</li>
      // </Fragment>

      //2.
      //   <>
      //     <li>{this.state.hero[0].name}</li>
      //     <li>{this.state.hero[1].name}</li>
      //     <li>{this.state.hero[2].name}</li>
      //   </>

      // 3.
      <ul>
        {
          this.state.hero.map(item => (
            <React.Fragment key={item.id}>
              <li>{item.name}</li>
            </React.Fragment>
          ))
        }
      </ul>
    )
  }
}
export default Index
```
## StrictMode
> 严格模式
  - 和fragment一样，不会渲染出任何UI元素
  - 尽在"开发模式下有效"
> 检查内容
  - 检查过时或者废弃的属性、方法
  - 检查意外的副作用
  - 这个组件的constructor会被调用两次
  - 检查这里写的一些逻辑代码被调用多次时，是否产生一些副作用
```js
import React from "react";
class Index extends React.Component {
  constructor() {
    super()
    console.log("construcor被调用了");
  }
  handleCLick = () => {
    console.log(this.refs.pRef)
  }
  render() {
    return (
      <div>
        <p ref={'pRef'}>我是p标签</p>
        <button onClick={this.handleCLick}>按钮</button>
      </div>
    )
  }
}
export default Index
```
## 组件样式

### 行内样式
- 行内样式的有点：
  - 行内样式，样式之间不会有冲突
  - 可以动态获取当前state中的state中的状态
- 行内样式的缺点
  - 写法上都需要驼峰表示
  - 某些样式没有提示
  - 大量的眼视光hi，代码混乱
  - 某些样式无法编写（比如伪类、伪元素）
### 外联样式
> 将css代码写到一个单独的css文件中，在使用的时候导入进来
  - 外链样式的优点
    - 编写简单，有代码提示，支持所有的css语法
  - 外链样式的缺点
    -不可以动态获取当前state中的状态
    - 属于全局css，样式之间会相互影响
### CSS模块化
> React的脚手架已经内置了cssmodules的配置
 - .css/.less/.scss等样式是文件都修改成 .module.css/.module.less/.module.scss等
 - CSS Modules优点
  - 编写简单，有代码提示支持所有的css语法
  - 解决了全局样式相互污染问题
 - CSS Modules却带你
  - 不可以动态获取当前state中的状态
1. 把js文件和css文件放在一个组件文件夹种
2. 把js文件和css文件放在同一个组件的文件夹中
3. css文件的格式必须是xxx.module.css
4. 把xxx.module.css以内响应的组件中
5. 在标签的className属性中使用**{引入名.选择器}** 即可 <p className={firstCssModule.color1}>我是第一行</p>
**xxx.module.css**
```css
// CssModule.module.css
.color1 {
  color: gold;
}
```
```js
import React from "react";
// 引入CssModule.css
import firstCssModule from "./CssModule.module.css"
class CssModule extends React.Component {
  render() {
    return (
      <div>
        <p className={firstCssModule.color1}>我是第一行</p>
      </div>
    )
  }
}
export default CssModule

```
## 模板字符串
```js
fn(text) {
  return text+"!!!!!!!"
}
fn`@@@@@`
```
## CSS in JS
`https://github.com/hengg/styled-components-docs-zh/blob/master/Basics.md#`安装
> CSS in JS
  - 在React中，React认为结构和逻辑是密不可分的，所以在react中结构代码也是通过JS来编写CSS的库
    - styled-components/emotion
  - 利用JS来编写CSS，可以让CSS具备样式嵌套、函数定义、逻辑复用、动态状态等特性
    - 也就是说，从某中层面上，提供了比过去less、scss更为强大的功能
    - 所以CSS in JS，在React中也是一种比较推荐的方式
> styled-components使用
 - 安装 styled-components
  - npm install styled-components --save
 - 导入 styled-components
 import style from "styled-components"
  - 利用styled-components创建组件并设置样式
  - styled.div`xxx:xxx`

> (大神推荐)  https://www.tailwindcss.cn/   