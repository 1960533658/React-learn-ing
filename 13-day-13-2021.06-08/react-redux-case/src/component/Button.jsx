import React from "react";
import { connect } from "react-redux";
import { addAction, subAction } from "../store/action";
class But extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleAdd}>+</button>
        <button onClick={this.props.handleSub}>-</button>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    handleAdd() {
      dispatch(addAction())
    },
    handleSub() {
      dispatch(subAction())
    }
  }
}
export default connect(null, mapDispatchToProps)(But)