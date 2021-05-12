import React from "react";
class OnMount extends React.Component {
  constructor() {
    super()
    console.log("1.组件挂载--constructor 初始化state");
  }
  componentDidMount() {
    console.log("3.组件挂载--componentDidMount 发送网络请求 操作DOM");
  }
  render() {
    console.log("2.组件挂载--render 渲染UI")
    return (
      <div>11111</div>
    )
  }
}
export default OnMount;