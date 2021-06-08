import React from "react";
import { connect } from "react-redux";
class Count extends React.Component {
  render() {
    return (
      <div>{this.props.count}</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}
export default connect(mapStateToProps)(Count)