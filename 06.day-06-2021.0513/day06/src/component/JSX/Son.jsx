import React from "react";
class Son extends React.PureComponent {
  // 追踪更新钩子函数 数据更新时的钩子函数
  // nextProps(最新的props) nextState(最新的state的值)
 
  render() {
    console.log("孙子组件更新");
    return (
      <h3>我是孙子组件--{this.props.num2}</h3>
    )
  }
}
export default Son;