import React from "react";
// 父组件
import Father from './Father';
class GrandFather extends React.Component {
  state = {
    num: 1
  }
  StateUpdate = () => {
    this.setState({
      num: 2
    })
  }
  render() {
    return (
      <div>
        <h3>爷爷组件</h3>
        <button onClick={this.StateUpdate}>点我更新组件state</button>
        <Father num={this.state.num}></Father>
      </div>

    )
  }
}
export default GrandFather;
