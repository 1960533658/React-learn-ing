import React, { Fragment } from "react";
class Stick extends React.Component{
  state = {
    val: ""
  }
  handleChange = (e) => {
    this.setState({
      val: e.target.value
    }, ()=> console.log(this.state.val))
  }
  handleClick = () => {
    console.log(this.state.val);
  }
  render() {
    return (
      <Fragment>
        <div>受控组件{this.state.val}</div>
        <input value={this.state.val} onChange={this.handleChange} />
        <button onClick={this.handleClick}>按钮</button>
      </Fragment>
    )
  }
}
export default Stick;