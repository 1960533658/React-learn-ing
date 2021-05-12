import React from "react";
class AppSon extends React.Component {
  
  componentDidUpdate() {
    console.log("组件更新数据 -- componentDidUpdate 发送请求 操作DOM ")
  }

  
  render() {
    return (
      <div>
        {this.props.count}
      </div>
    )
  }
}
class OnUpdate extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    console.log("1.1组件挂载--constructor 初始化state");
  }
  componentDidUpdate() {
    console.log("组件更新数据 -- componentDidUpdate 发送请求 操作DOM ")
  }

  handeUpdate = () => {
    this.setState({
      count: 1
    })

    this.forceUpdate();
  }
  render() {
    console.log("1.2 组件挂载--render 渲染UI")
      if (this.state.count === 0) {
      } else {
        console.log("2.2 组件更新-- componentDidUpdate 发送请求 操作DOM");
    }
    
    return (
      <div>
        <div>我是Update组件</div>
        <button onClick={this.handeUpdate}>更新count</button>
        <AppSon count={this.state.count}></AppSon>
      </div>
    )
  }
}
export default OnUpdate;