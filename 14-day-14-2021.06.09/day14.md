# day14

## 为什么要使用Redux，是否可以不使用，它有什么作用
> 为了更方便的管理数据，可以不使用，为了解决数据通讯的问题

## 为什么使用React-redux
> React-Redux是redux官方的绑定库能够让我们在组件中更好地读取操作Redux的保存状态    
1. 在使用Redux的时候，冗余代码太多，每次使用都需要在构造函数中获取，且需要监听数据
2. 操作store的代码过于分散
## 为什么要使用Redux-thunk

1. 当前保存一部数据存在的问题
一部数据既然要保存到Redux中，所以获取一部数据也应该是Redux的一部分，所以获取异步数据的代码应该放到Redux中，而不是放到组件声明走起方法中
2. 如何在Redux中获取网络数据？
使用redux-thunk
## redux-thunk的作用
> 默认情况下dispatch只能接收一个对象
> 使用热镀锌-thunk（https://www.redux.org.cn/docs/advanced/AsyncActions.html)可以让dispatch出了可以接收一个对象以外，还可以接收一个函数
> 是通过dispatch派发一个函数的时候能够去执行这个函数，而不是执行reducer函数
```bush
npm install --save redux-thunk
```

## 使用thunk之前与之后的对比
```shell
使用redux-thunk之前:
                 --------------------
        ------>  | Component 异步请求 |  -----
       |         --------------------       |
       |                                    ↓
-------------       -------------       -------------
|   Store   | <---- |  Reducer  | <---- |  Action   | dispatch({type:ADD_ATION})
-------------       -------------       -------------


我想要的是: dispatch Action的时候，不再传入一个对象 而是调用一个方法，这个方法就是请求方法
等这个方法执行完毕之后,再去把数据dispatch给reducer


使用redux-thunk之后:
                    -------------
        --------->  | Component |  ---------------------------------
       |            -------------                                   |
       |                                                            ↓
-------------       -------------       -------------       -------------
|   Store   | <---- |  Reducer  | <---- |  异步请求   | <---- |  Action   |
-------------       -------------       -------------       -------------
``` 

## 使用redux + react-redux + redux-thunk
> index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 导入Provider组件并包裹APP组件
import { Provider } from "react-redux"
import store from "./store/store"
ReactDOM.render(
  // 传递store数据
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);
```

> store/store.js
```js
// 导入 createStore 用于创建store数据流 
// 导入 applyMiddleware 用于绑定redux-thunk
import { createStore, applyMiddleware } from "redux";
// 导入reducer数据
import reducer from "./reducer";
// 导入redux-thunk包
import thunkMiddleware from "redux-thunk";
// 使用applyMiddleware挂载redux-thunk
const storeEnhancer = applyMiddleware(thunkMiddleware);
// 把挂载好的 applyMiddleware 和 reducer 关在到store数据楼中
const store = createStore(reducer, storeEnhancer);
// 导出store
export default store;
```

> store/reducer
```js
// 初始化数据
const initialState = {
  num: 0
}
// 创建reducer函数
const reducer = (state = initialState, action) => {
  // 判断触发的方法是哪些
  switch (action.type) {
    // 返回随机数
    case "RANDOM_COUNT":
      return {
        ...state,num: action.num
      }
    // 默认返回数据
    default:
      return state;
  }
}
// 导出reducer
export default reducer;
```

> store/action
```js
// 导出用于外部触发修改随机数的方法
export const randeomNumm =  (dispatch) =>  {
  // 通过fatch获取后台返回的的随机数
  fetch("http://localhost:8080/getdata")
    .then(response => response.json())
    // 触发调用random方法,并传递后台获取的书v就
    .then(json => dispatch(random(json.num)))
}

// 导出方法random方法用于传递修改数据的参数
export const random = (num) => {
  return {
    type: "RANDOM_COUNT",
    num: num
  }
}
```

> app.jsx
```jsx
import React from "react";
// 导入connet 用于获取已被绑定到props中的数据
import { connect } from "react-redux";
// 导入action中的方法
import { SubNum } from "./store/action";
import store from "./store/store"
class App extends React.Component {
  render() {
    return (
      <main>
        {/* 通过props获取store中的数据 */}
        <div>{this.props.num}</div>
        {/* 通过props获取store中的事件处理函数 */}
        <button onClick={this.props.handleRandom}>替换为随机数</button>
      </main>
    )
  }
}

// 定义方法用于获取props中的数据
const mapStateToProps = (state) => {
  return {
    num: state.num
  }
}
// 定义方法用于获取props中的方法
const mapDispatchToProps = (dispatch) => {
  return {
     handleRandom() {
      dispatch(randeomNumm)
    }
  }
}
// 将定义的 获取props中的数据的函数 和获取props中的事件处理函数 挂载到connect中 app
export default connect(mapStateToProps, mapDispatchToProps)(App)
```

