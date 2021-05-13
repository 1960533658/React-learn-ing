import React from "react";
import Son from "./Son"
class Father extends React.Component {
  state = {
    num2: 2
  }
  handleFather = () => {
    this.setState({
      num2: 3
    })
  }
  render() {
    return (
      <div>
        <h3>父组件--{this.props.num}</h3>
        <button onClick={this.handleFather}>改变父组件中的state</button>
        <Son num={this.state.num2}></Son>
      </div>
    )
  }
}
export default Father;