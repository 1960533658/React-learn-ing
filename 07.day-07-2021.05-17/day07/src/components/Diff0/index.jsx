import React from "react";
class Deff0 extends React.Component {
  state = {
    count: 0
  }
  handle = () => {
    this.setState({
      count: 1
    })
  }
  render() {
    return (
      <div>
        <p>我是p标签{this.state.count}</p>
        <button onClick={this.handle}>按钮</button>
      </div>
    )
  }
}
export default Deff0