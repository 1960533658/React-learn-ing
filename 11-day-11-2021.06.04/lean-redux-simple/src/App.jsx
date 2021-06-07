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