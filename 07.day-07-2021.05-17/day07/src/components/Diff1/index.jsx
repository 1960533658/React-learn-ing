import React from "react";
import Son  from "./Son";
import Daugther from "./Daugther"
class Doff1 extends React.Component {
  state = {
    flag: false
  }
  handleClick = () => {
    this.setState({
      flag: true
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>按钮</button>
        {this.state.flag ? <Son /> : <Daugther />}
      </div>
    )
  }
}
export default Doff1