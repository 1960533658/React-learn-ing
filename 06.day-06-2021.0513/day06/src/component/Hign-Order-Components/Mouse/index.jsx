// 高阶组件
/**
 * * 是一个函数
 * * 参数是一个组件
 * * 返回值是一个增强型的组件
 */
import React from "react"

const widthMouse = WarppedComponent => {

  class Mouse extends React.Component {
    state = {
      x: 0,
      y: 0
    }
    fn = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }
    componentDidMount() {
      window.addEventListener("mousemove", this.fn)
    }
    render() {
      // return this.props.children(this.state)
      return <WarppedComponent {...this.state} {...this.props}></WarppedComponent>
    }
  }

  function getDisplayName(WarppedComponent) {
    return WarppedComponent.displayName || WarppedComponent.name || "Component"
  }
  Mouse.displayName = `widthMouse${getDisplayName(WarppedComponent)}`
  return Mouse;
}

export default widthMouse;