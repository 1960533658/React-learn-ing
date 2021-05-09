// 事件对象
import React from "react";
class Ev extends React.Component {
  handlerClick = (e) => {
    console.log("我是事件对象组件")
    console.log(e)
    console.log(e.target)
  }
  render() {
    return (
      <div onClick={this.handlerClick}>我是事件对象组件</div>
    )
  }
}
export default Ev;