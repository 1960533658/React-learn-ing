import React from "react";
import ReactDOM from "react-dom"
class Son extends React.Component {
// #endRegion
  state = {
  
  }
  render() {
    // ReactDOM.createProtal()
    /**
     * 三个参数
     * 第一个参数：子元素或者组件
     * 第二个参数：把这一段结构渲染到哪里（其实和ReactDOM.render()的第二个参数一样，挂载的位置)
     * 第三个参数：
     */
    return ReactDOM.createPortal(this.props.children,document.getElementById("app"))
    
  }
}
export default Son