// 记录所有的鼠标
import React from "react";
class Mouse extends React.Component {
  state = {
    x: 0,
    y: 0
  }
  // 页面加载时触发生命周期钩子函数
  componentDidMount() {
    // 给window挂添加鼠标事件
    window.addEventListener("mousemove", this.fn)
  }
  fn = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  render() {
    return this.props.children(this.state)
  }
}

export default Mouse;