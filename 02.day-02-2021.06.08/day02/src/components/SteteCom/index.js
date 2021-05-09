// 修改state
import React from "react";

class Status extends React.Component{
  constructor() {
    super();
// 定义statge
    this.state = {
      count: 0
    }
  }

  //或者使用
  // state = {
  //   count: 0
  // }
  handleAnd = () => {
    this.setState({
      count: this.state.count + 1
    }, () => { console.log(this.state.count) })// 1
    console.log(this.state.count)// 0
  }
  render() {
    return (
      <div>
        <p>这是修改state中的文件：{this.state.count}</p>
        <button onClick={this.handleAnd}>按钮</button>
      </div>
    )
  }
}

export default Status;