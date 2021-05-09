// 类组件 被称为有状态组件,有this，this中存在state
import React from "react";
class Home extends React.Component{
  constructor() {
    super();
    this.state = {
      count: 10
    }
  }

  handleClick = () => {
    console.log("我是类组件中的事件")
    console.log(this.state.count)
  }

  render() {
    return (
      <div onClick={this.handleClick}>我是类组件</div>
    )
  }
}
export default Home