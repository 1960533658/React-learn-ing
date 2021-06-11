import React from "react";
import { numGet } from "./store/action"
import { connect } from "react-redux";
class App extends React.Component {
  // state=store.getState()
  // constructor() {
  //   super();
  //   this.state = store.getState()
  // }
  // 使用异步方法获取数据
  componentDidMount() {
    // store.subscribe(() => {
    //   this.setState({
    //     ...store.getState()
    //   })
    // })
  }
  // async handleNum()  { 
  //    传递数据给redux
  //   store.dispatch(await numGet())
  // }
  render() {
    return (
      <div>
        <div>{this.props.num}</div>
        {/* <button onClick={this.handleNum}>点击改变获取的数据</button> */}
        <button onClick={this.props.handleNum}>点击改变获取的数据</button>
      </div>
    )
  }

  // 使用react-redux
}
const mapStateToProps = (state) => {
  return {
    num: state.num
  }
}
const mapDispatchToProps = (dispatch) => {
  console.log(111);
  return {
    handleNum() {
      dispatch(numGet)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)