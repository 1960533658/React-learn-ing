import React from "react";
// 引入store
// import store from "./store/store"
// 引入store的action方法用于触发事件
import { addAction, subAction } from "./store/action.js";

import { connect } from "react-redux"

class App extends React.Component {
  // 给state赋值store中的值
  // state = store.getState();
  // 当页面加载的时候让数据监听store的数据，使其跟随store中的数据变化
  // componentDidMount() {
  //   // console.log(store);
  //   store.subscribe(() => {
  //     this.setState({
  //       count: store.getState().count
  //     })
  //   })
  // }
  // +1方法
  
  render() {
    return (
      <div>
        <p>{this.props.count}</p>
        <p>{this.props.name}</p>
        <button onClick={this.props.handleAdd}>+</button>
        <button onClick={this.props.handleSub}>-</button>
      </div>
    )
  }
}

const mapStateToprops = (state) => {
  return {
    count: state.count,
    name: state.name
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleAdd() {
      dispatch(addAction())
    },
    handleSub() {
      dispatch(subAction())
    }
  }
}
export default connect(mapStateToprops,mapDispatchToProps)(App);