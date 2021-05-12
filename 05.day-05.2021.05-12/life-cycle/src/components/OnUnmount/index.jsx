import React from "react";
class AppSon extends React.Component {

  componentWillUnmount() {
    console.log("组件卸载");
  }
  render() {
    return (
      <div>
        {this.props.count}
      </div>
    )
  }
}
class OnUnmount extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      flag: true
    }
  }
  
  handeUpdate = () => {
    // 点击让flag为false 让son消失
    this.setState({
      count: 1,
      flag: false
    })

  }
  render() {
    return (
      <div>
        <div>我是Update组件</div>
        <button onClick={this.handeUpdate}>更新count</button>
        {this.state.flag && <AppSon count={this.state.count}></AppSon>}
      </div>
    )
  }
}
export default OnUnmount;