import React from "react";
import Home from "./Home";
class App extends React.Component {
  state = {
    count: 0
  }
  hanlde = () => {
    this.setState({
      count: 1
    })
  }

  render() {
    console.log("app组件更新");
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.hanlde} >点我改变状态</button>
        <Home count={this.state.count}></Home>
      </div>
    )
  }
}
export default App
