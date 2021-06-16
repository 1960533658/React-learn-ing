# day15
## Generator

### 什么是Generator函数
> Generator 函数是ES6提供的一种异步编程解决方案
> Genertor 函数内部可以封装多个状态，因此可以理解为一个状态机

### 如何定义Generator函数
> 只需要在普通函数的function后面加上 * 即可

### Generator函数和普通函数的区别
> 调用Genderator无论函数有没有返回值都会返回一个迭代器对对象
> 调用Generator函数后，函数中封装的代码不会立即被执行

### Generator具有价值的是yield关键字
> 在Generator函数内部使用yield关键字定义状态
> 并且yield关键字可以让generator内部的逻辑能够切割成多个部分
> 通过调用迭代器对象的next方法指向一个部分代码。执行哪个部分就会返回哪个部分定义的状态

### next传递参数
> 在调用next方法的时候可以传递一个参数，这个参数会传递个上一个yield
**generator一般使用**
```js
function* sayhi() {
  console.log(111)// 调用之后第一步执行
  yield "kangkang"; 
  console.log("Spring_Long")
  yield "longlong"
}
// console.log(sayhi().next());// 
// console.log(sayhi().next());// 
// console.log(sayhi().next());// 
const done = sayhi()
console.log(done.next().value);// kangkang
console.log(done.next().value);// Spring_Long
console.log()
```
**Generator应用场景——传参**
```js
function* sayhi() {
  yield "第一个yield"
  const awa = yield "第二个yield"
  console.log(awa)
  yield "第三个yield"
}
const done = sayhi()
console.log(done.next())
console.log(done.next())
console.log(done.next(5)) // 传递的值会由上一个yield的返回值获取到，也就是说，我是第三个调用的next传递的值，最总会由第二个awa获取到传递的值
```

**Generator应用场景——异步**
```js
function request(fn) {
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          resolve("拿到的数据")
        }, 1000);
      })
    }
    function* gen() {
      yield request();
      yield request();
      yield request();
    }

    const it = gen();
    it.next().value.then(function(data) {
        console.log(data, "1")
        return it.next().value
    }).then(function (data) {
      console.log(data, "2")
      return it.next().value
    }).then(function (data) {
      console.log(data, "3")
      return it.next().value
    })
```
### 小结
> 一次调用代表一个周期，只有在同一个周期内连续使用next才能获取到第一个之后的状态，所以需要使用变量介绍
> 一个next() 的调用范围是以自第一个开始yield关键字声明的代码开始之上所有的语句代码，之后的next()的范围是到第一个next()之间所有的代码包括自己（yield）定义的状态值。
## Saga

### 下载saga
> npm install --save redux-saga

### 为什么学习redux-saga
> 可以不学，因为redux-thunk中已经解决了异步请求的问题，在redux中action必须传递对象，但是使用了redux-thunk之后，它可以帮我们拦截请求，并且可以让我们给action传递一个异步请求函数
> redux-saga也是来解决一部秦桧去的问题的
redux-saga可以让我燃着redux的思想 不需要传递函数，依然传递对象
还会拦截请求

### redux-saga的基本使用
1. 安装redux-saga
2. 在store中进行设置
  - 导入redux-saga（其内部导出的内容是一个工厂函数）
  - 1. 使用工厂函数创建中间件
  - 2. 把创建的中间件注册到redux中
  - 3. 把注册过中间件的内容绑定到store中
  - 4. 导入saga文件 常见拦截请求函数
```js
import { applyMiddleware, createStore } from "redux";
//1. 导入redux-saga包,创建它给与的sagaMiddlewareg工厂函数
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer"
import saga from "./saga"
//2. 使用工厂函数创建中间件
const sagaMiddleware = createSagaMiddleware();
//3. 把sagamiddleware注册到redux中
const storeEnhance = applyMiddleware(sagaMiddleware)

// 3.
const store = createStore(reducer, storeEnhance );
// 4. 导入saga文件 创建拦截请求函数
sagaMiddleware.run(saga);
export default store;
```
saga.js
```js
// 导入redux-saga中拦截action中的请求
import { put, takeEvery } from "redux-saga/effects";
import { SavaGetNum } from "./action";

function* getData() {
  const data = yield fetch("http://localhost:8080/getdata")
    .then(response => response.json())
    .then(data => data.quotation)
  
    // 触发action中保存数据的方法
  yield put(SavaGetNum(data))
}
export default function* mySaga() {
  // takeEvery方法判断是那种类型的Action，如果是这种类型的action方法，就拦截
  // 第一个参数代表判断是那种类型的action方法 ，第二个代表要触发哪种方法
  yield takeEvery("GET_NUM", getData)
  
  /**
   * takeEvery和takeLatest的区别
   * 场景：由三次连续的请求，且每个请求耗时2秒
   * takeEvery
   * 所有的请求都能完成的发送并且收到的数据
   * takeLatest
   * 只发送罪行的请i去，三次请求都很短，那么三次都可以成功，但是如果事件很长，就没有作用
   */
}
```

action.js
```js
export const getNum = () => {
  // 拦截住GET_NUM之后，发起了一个请求，并把数据返回了
  // redux-thunk的时候 写了几个action一个是发送球求的，一个是改变数据的
  return {
    type: "GET_NUM",
  }
}
export const SavaGetNum = (num) => {
  console.log(num);
  return {
    type: "SAVE_NUM",
    num: num
  }
}
```

app.jsx
```js
import React from "react";
import { connect } from "react-redux"
import { getNum } from "./component/action"
class App extends React.Component {
  render() {
    return (
      <div className="box">
        <p>{this.props.num}</p>
        <button onClick={this.props.splic}>点击替换数据</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    num: state.num
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    splic() {
      dispatch(getNum())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

```

## react devTools
> 是浏览器插件但是需要自己在项目中进行配置
```js
// 1. 导入compose
import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga"
import reducer from "./reducer"
import saga from "./saga"
const sagaMiddleware = createSagaMiddleware();
const storeEnhance = applyMiddleware(sagaMiddleware)
// 在window中进行挂载配置
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true } || compose)
// 3. 使用包裹数据流
const store = createStore(reducer, composeEnhancers(storeEnhance) );
sagaMiddleware.run(saga);
export default store;
```