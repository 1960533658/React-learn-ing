# React-day-01

## React

### React课程定位和收获
1. 面向零基础同学（会基本h5c3 js就能学会）
2. 能收获基本的React基础及周边配套技术（13天 三周）
3. 能收获使用React开发企业级项目的实战经验（好租客）

### React课程只是体系
1. React基础
- 基础语法
- 路由
- 状态管理插件

2. React项目
- 好租客，移动端租房项目
- 前端项目的开发和部署

### 如何学好React

1. 每天代码至少两遍
2. 回顾html、css、js的基本功，活跃的思维
3. 打破自己的常规思维，积极使用能想到的各种方法

### React起源、特点、现状
> 起源
- React起源于Facebook的内部限免
- 因为该公司对市场上所有的JavaScript MVC 框架都不满意，就决定自己写一套，用来假设Instagram的网站，做出来以后发现这套东西很好用，就在2013年5月开源了


> 概念
- React是一个用于构建用户界面的JavaScript库
- 用户界面：HTML页面（前端O）
- React主要用来写HTML页面，或构建Web应用
- 如果从MVC的角度来看，React仅仅是视图层
- 只是负责视图的渲染
- 并非提供了完整的M和C的功能

> 特点
1. 声明式
2. 组件化
3. 一次学习 随处编写

> 现状
1. 国外流行
- 2020 StackOverflow 全球开发者调研报告中，最受欢迎的框架排第二
https://www.sohu.com/a/398379279_827544
https://insights.stackoverflow.com/survey/2020

> 为什么学习React
1. 安全可靠
  （React是由Facebook来更新维护，所以一般不会出现跑路的情况
2. 思想生化
  React是一个开源项目，融合了全时间诸多优秀成员的编程思想
3. 值得借鉴
  vue.js设计之初，有很多灵感来自Angular和React、vue3的很多新特性，在React中你也能看到它们的身影

### React初体验

### 使用React的2种方式
1. 自行配置
- http://zh-hans.reactjs.org/docs/add-react-to-a-website.html

2. 通过脚手架配置
- https://zh-hans.reactjs.org/docs/create-a-new-react-app.html

### 虚拟DOM和真实DOM
1. 虚拟DOM是相对于浏览器所渲染出来的真实DOM
2. 虚拟DOM就是使用JS对象来表是页面上的真实DOM

### 如何创建虚拟虚拟DOm
createelement通过React.createElement() 方法
该参数接收三个参数：
1. 第一个参数：需要创建的元素类型或者组件
2. 第二个参数：内创建迟来的元素拥有的属性
3. 第三个参数： 被创建出来的元素拥有的内容（可以是多个）
> https://zh-hans.reactjs.org/docs/react-api.html#

### 如何通过虚拟DOM渲染真实DOM到浏览器
1. 通过reactCOM.render()方法
2. 第一个参数：被渲染的虚拟DOM
3. 第二个参数：要渲染到哪个元素中
4. 第三个参数：渲染或更新完成后的回调函数
> https://zh-hans.reactjs.org/docs/react-api.html#render

### render方法的注意点
- 多次渲染，后渲染会覆盖先渲染的
- render方法一次只能渲染一个元素/组件

### createElement方法注意点
可以添加三个一上参数，后续参数都会作为当前创建元素内容处理

## React中的JSX语法

### 为什么需要JSX
如果结构简单还好，但是如果结构比较复杂就比较拿一下收
所有就发明了JSX，专门用来编写React中的页面结构

### JSX是什么
JSX是一个看起来很像XML的JavaScript语法扩展

### 为什么使用JSX
使用JSX使得我们在React中编写页面结构更为简单、灵活
JSX是类型安全的，在编译过程中就能发现错误
JSX执行更快，因为它在编译为JavaScript代码后进行优化
放置XSS攻击
> https://zh-hans.reactjs.org/docs/introducing-jsx.html

### JSX的本质
浏览器只认识JS不认识JSX，所以我们编写的JSX代码是无法在浏览器中执行的
为了解决这个问题，我们需要磅数babel将JSX转换成JS，也就是转换成React.createElement()
> https://zh-hans.reactjs.org/docs/react-without-jsx.html
> https://babeljs.io/repl

### JSX创建渲染虚拟节点

1. 链入包
- 注意： 顺序不能乱必须严格按照下面的引入顺序链入
- react.development.js 虚拟包，创建虚拟节点
- react-dom.development.js 渲染包，将虚拟结点渲染到页面中
- babel.min.js JSX语法包 JSX转化为JS-创建虚拟结点React.createElement()

2. 使用JSX 
- 创建构造函数 function Home() {return <div>hello</div>}
- 挂载到页面上 React.render(<Homw />, documebt.querySelector("#app"))

```html 
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <!-- 虚拟包 -->
  <script src="./lib/react.development.js"></script>
  <!-- 渲染包 -->
  <script src="./lib/react-dom.development.js"></script>
  <!-- babel JSX语法包 -->
  <script src="./lib/babel.min.js"></script>
</head>

<body>
  <div id="app"></div>
  <script type="text/babel">
    // let simple = <div>hello</div>

    // ReactDOM.render(simple, document.querySelector("#app"))

    // ! 
    /** 
     * ! 创建组件的方法
     * 
     * - 使用构造函数的方式 返回就行了 --> 函数式组件
     * - class类 --> 类组件
     */

    function Home() {
      return (
        <div className="aaa">
          <span>kangakang</span>
        </div>
      )
    }

    ReactDOM.render(<Home />, document.querySelector("#app"))
  </script>
</body>

</html>
```

### JSX中使用表达式
在JSX只要看到{}就会当作JS解析（执行里面的JS代码）
所以无论是绑定属性还是绑定类名，还是绑定样式，只需要将字符串改为{}
然后通过JS动态获取，动态绑定即可
注意：{} 中不能出现语句 if、for、switch

以下嵌入的内容不会被显示出来[]、true、false、for、null、undefined
如果想显示上面的内容，你们就逆序转换成字符串，但是对于空数组而言，即使转换成字符串也不能显示

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <!-- 虚拟包 -->
  <script src="./lib/react.development.js"></script>
  <!-- 渲染包 -->
  <script src="./lib/react-dom.development.js"></script>
  <!-- babel JSX语法包 -->
  <script src="./lib/babel.min.js"></script>
</head>
<body>
  <div id="app">

  </div>
  <script type="text/babel">
    function Home() {
      return (
        <div>
          <p>{1 + 2}</p>
          <p>{[1, 2].join("_")}</p>
          <p>{[].toString}</p>
          <p>{undefined}</p>
          <p>{undefined+""}</p>
          <p>{true}</p>
          <p>{true+""}</p>
          <p>{1 + 2}</p>
          <p>{1 + 2}</p>

        </div>
      )
      }
    ReactDOM.render(<Home />, document.querySelector("#app"))
  </script>
</body>
</html>
```
### JSX中的条件渲染
> if/else
> 三元表达式
> 逻辑与运算符

```js
// if/else 
let flag = true;
function Home() {
  if(flag) {
    return (
      <p>我是为true的渲染</p>
    )
  }else {
    return (
      <p>我是为false的渲染</p>
    )
  }
}
// 挂载
ReactDOM.render(<Home />, document.querySelector("#app"))
```

```js
// 三元表达式
let flag = true
function Home() {
    return flag? (
      <p>我是为true的渲染</p>
    ) : (
      <p>我是为false的渲染</p>
    )
}
// 挂载
ReactDOM.render(<Home />, documnet.querySelector("#app"))
```

```js
// 逻辑与运算符
let flag = true
function Home() {
  return flag && (<p>我是为false的渲染</p>)
}
// 挂载
ReactDOM.render(<Home />, documnet.querySelector("#app"))
```
### JSX中渲染列表

```js
const star = [
  {
    name: "高圆圆",
    age: 33
  },
  {
    name: "阿屎",
    age: 32
  }
]
// 定义组件
function Hoem() {
  return (
    <ul>{
      star.map((item, index) => {
        // 循环需要key属性
        return <li key={index}>{item.name}</li>
      })
    }</ul>
  )
}

// 挂载
ReactDOM.render(<Hoem />, document.querySelector('#app'))
```

### JSX中绑定属性

1. 绑定内容
- 在JSX中只要看见{}就会当作js解析
- 无论是绑定类名还是绑定样式，只要将字符换改为{}包裹然后通过js动态获取即可
2. 绑定普通属性
- <p title="我是标题">我是段落</p>
- <p title={message}>我是段落</p>
3. 绑定类名
- 由于js本质是装欢JS代码，而在JS中class有特殊含义（关键字），所以不能使用，同理但凡属性名是关键字的都不能直接使用
4. 绑定样式
- 由于样式是键值对形式的，所以在JSX中想要动态绑定样式，你需要将样式放到一个对象中，并且所有以“－”连接的样式名称都要转换成驼峰命名
+ \<p style={{color: "red",fontSize: "100px"}}></p\>

```js
function Home() {
return (<div title={"newTitle"} className={"box"} style={{fontSize: "100px"}}>你好</div>)
}

// 挂载
ReactDOM.render(<Home />, document.querySelector('#app'))
```
