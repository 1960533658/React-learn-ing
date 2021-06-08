# day13

## react-redux
> https://react-redux.js.org/introduction/getting-started
- react-redux依托于redux进行数据的传递
```bush
npm install react-redux
```
### 基本使用-映射数据
1.在index.js中引入 import {Provider} from "react-redux" 和 import store from "./store"
2. 通过Provider包裹组件
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 1
import { Provider } from "react-redux";
import store from "./store/store"
import App from './App';

ReactDOM.render(
  // 2
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);
```
3. 在各个组件中显示数据，比如（Home）
  - 在Home组件中 使用一下代码
4.如果想要访问数据
```js
import React from "react";
import { connect } from "react-redux";
class Count extends React.Component {
  render() {
    return (
      // 4
      <div>{this.props.count}</div>
    )
  }
}
// 3
function mapStateToProps(state) {
  return {
    count: state.count
  }
}
export default connect(mapStateToProps)(Count)
```

### 基本使用-映射方法
1. 创建mapDispatchToProps方法，并用定义的函数触发action的方法
2. 绑定传递过来的方法
```js
import React from "react";
import { connect } from "react-redux";
import { addAction, subAction } from "../store/action";
class But extends React.Component {
  render() {
    return (
      <div>
      // 2
        <button onClick={this.props.handleAdd}>+</button>
        <button onClick={this.props.handleSub}>-</button>
      </div>
    )
  }
}
// 1
function mapDispatchToProps(dispatch) {
  return {
    handleAdd() {
      dispatch(addAction())
    },
    handleSub() {
      dispatch(subAction())
    }
  }
}
// 1
export default connect(null, mapDispatchToProps)(But)
```