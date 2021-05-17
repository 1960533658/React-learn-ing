import React from "react";
import  Home from "./Home";
class App extends React.Component {
// #endRegion
  state = {
    count: 0
  }

  handleClick = () => {
    this.setState({
      count:1
  })
  }
  render() {
    return (
      <div>
        <p>{ this.state.count }</p>
        <button onClick={this.handleClick}>点我更新数据</button>
        <Home>
          <div>
            <h3>我是Home组件</h3>
          </div>
        </Home>
      </div>
    )
  }
}
export default App