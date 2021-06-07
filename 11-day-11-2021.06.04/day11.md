# day11-Redux

## 为什么学习Redux
```txt
react是一个用于构建用户界面的JavaScript库，并不是web应用的完整解决方案,关于如何组织代码、如何完成组件之间的通信，React解决的并不是很好，对于大型且复杂的应用来说这两方面恰恰是关键。因此，只用react是无法开发大型且复杂的应用。为了解决这个问题，2014年Facebook提供了Flux架构的概念，这引发了很多实现。2015年，Redux出现，将Flux与函数式编程结合在一起，成为了当下最热门的前端架构
```

## Redux是什么
- Redux是JavaScript状态容器，提供可预测化的状态管理
- 可以让你构建一致化的应用，运行于不同的环境（客户端、服务器端、原生应用），并且易于测试。不仅如此，它还提供超爽的开发体验。
- Redux出了和React一致化意外，还支持其它界面库，它体小精悍（只有2KB，包括依赖）
- Redux的实际思想，就两句话
1. Web应用是是一个状态机，视图与状态是一一对应的。
2. 所有的状态，保存在一个对象中和

## 什么是可预测的状态管理
> 数据在什么时候，因为什么，发生了改变，都是可以控制和追踪的，我们就称之为预测的状态管理

## Redux的应用场景
1. 某个组件的状态，需要共享
2. 某个状态需要在任何地方都可以拿到
3. 一个组件需要改变全局状态
4. 一个组件需要改变另一个组件的状态
Redux核心理念

## Redux核心概念
1. 使用store保存数据
2. 通过action来修改数据
3. 通过reducer将store和action串联起来
 ```shell
                      -------------
          --------->  | Component |  ---------
         |            -------------           |
         |                                    ⬇
  -------------       -------------       -------------
  |   Store   | <---- |  Reducer  | <---- |  Action   |
  -------------       -------------       -------------

  ```
## Redux三大原则

### 单一数据源
1. 整个应用程序的state只能存储在store中
2. Redux并没有强制让我们不能创建多个Store，但那样做并不利于数据的维护
3. 单一的数据源可以让整个应用程序的state变得方便维护、追踪修改

### State是只读的
1. 唯一修改State的方法一定是触发action，不要试图在其它地方通过任何方式修改State
2. 这样就确保来自视图或网络请求都不能直接修改state，他们只能通过action来描述自己想要如何修改state
3. 这样就可以保证所有的修改被集中化处理，并且按照严格顺序来执行，所以我们不需要担心race condition（静态）的问题

### 使用纯函数来执行修改
1. 通过reducer将旧的state和action联系在一起，并且返回一个新的state
2. 随着应用程序的复杂度增加，我们可以将reducer拆分成多个小的reducers分别操作不同的state tree的一部分
3. 但是所有的reducer都应该是纯函数，不能产生副作用

#### 函数的定义
1. 如果函数的调用参数相同，则永远返回相同的结果。他不依赖程序执行期间函数外部之外的任何状态或数据，必须只依赖其输入参数。
2. 该函数不会产生任何可观察的副作用，例如网络请求，输入和输出设备或数据突变（mutation）
这就是纯函数，如果一个函数符合上述两个要求，它就是纯函数

#### 什么是可观察的副作用
> 一个可以被观察的副作用是在函数内部与其外部任意交互。这可能是在函数内修改外部的变量，或者在函数里调用另外一个函数等。
> 如果纯函数调用纯函数，则不会产生副作用，依旧是纯函数
副作用来自，但不限于
1. 进行一个HTTP请求
2. Mutating tate
3. 输出数据到屏幕或者控制台
4. DOM查询/插座
5. Math.random()
6. 获取的当前时间
副作用本身并不是毒药，某些时候往往是必须的但是，对于要保持纯粹的函数，他不能包含任何副作用，当然，并非所有函数都需要是纯函数

#### 纯函数例子
```js
function PriceAfter(productPrice) {return (productPrice * 0.20) + productPrice;}
```
它符合我们所说的两条纯函数的定义，不改变外部数据、没有副作用。
机士你用同样的方法输入运行这条数据运行这个函数1000次它依旧产生同样的结果。

#### 非纯函数例子
```js
var tax = 20;
function calculate(producPrice) {
  return (producPrice * (tax/100) + producPrice)
}
```
其中函数的计算结果取决于外部tax变量，而纯函数不能依赖外部变量，它没有满足第一个要求，所以它不是纯函数

## 简单使用redux
```js
// 导入redux
const redux require "redux";
// 定义初始化数据
cosnt initialState = {
  heroList: [
      { id: 1, name: '狄仁杰', age: 18 }
    ]
}

// 定义action来修改状态
const addAction =  {
  type: "ADD_HERO",
  payload: {
    id: 2,
    name: "女娲",
    age: 25
  }
}
// 使用reducer将store和action链接起来
const reducer = (state = inittialState, action) {
  switch(action.type) {
    case: "ADD_HERO":
      return {
        heroList: [...state, action.payload]
      }
    default:
      return state;
  }
}

// 利用store来保存状态
const store = redux.createState(reducer);
// 监听变化
store.subscribe(() => {
  console.log(store.getState);
})

// 修改state的值
state.dispatch(AddAction())
```
**存在的问题**
1. store、action、reducer都在同一个文件里，不利于维护
2. action和reducer都是使用字符串来指定和判断操作类型，写错不报错
3. action中操作写死了，不够灵活

## 在react中使用redux
**App.jsx**
```js
import React from "react";
// 引入store
import store from "./store/store"
// 引入store的action方法用于触发事件
import { addAction, subAction } from "./store/action.js";
class App extends React.Component {
  // 给state赋值store中的值
  state = store.getState();
  // 当页面加载的时候让数据监听store的数据，使其跟随store中的数据变化
  componentDidMount() {
    // console.log(store);
    store.subscribe(() => {
      this.setState({
        count: store.getState().count
      })
    })
  }
  // +1方法
  handleAdd = () => {
    store.dispatch(addAction());
  }
  // -1方法
  handleSub = () => {
    store.dispatch(subAction())
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleSub}>-</button>
      </div>
    )
  }
}
export default App;
```
**action.js**
```js
// 导入不同方法中所对应的返回值的js文件
import { ADD_COUNT, SUB_COUNT } from "./constants";
// 当触发增加方法时返回相应的字符
export const addAction = () => {
  return {
    type: ADD_COUNT
  }
}

// 当-1方法时返回相应的字符
export const subAction = () => {
  return {
    type: SUB_COUNT
  }
}
```

**reducer.js**
```js
// 导入指定方法中对应返回值的js文件
import { ADD_COUNT, SUB_COUNT } from "./constants"
// 创建初始化数据
const inittialState = {
  count: 0,
  list: [1, 2, 3, 4]
}

// 更具不同方法传递过来的值进行不同的操作计算
const reducer = (state = inittialState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return { count: state.count + 1 }
    case SUB_COUNT:
      return { count: state.count - 1 }
    default:
      return state;
  }
}
export default reducer;
```

**store.js**
```js
// 引入createStore
import { createStore } from "redux"
// 引入reducer
import reducer from "./reducer"
const store = createStore(reducer)

export default store;
```

**contants.js**
```js
// 定义两个不同的字符串，分别对应+1和-1的不同方法
export const ADD_COUNT = "ADD_COUNT";
export const SUB_COUNT = "SUB_COUNT";
```