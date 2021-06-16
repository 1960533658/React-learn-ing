import React from "react";
import { connect } from "react-redux"
import { getNum } from "./component/action"
class App extends React.Component {
  render() {
    return (
      <div className="box">
        <p>{this.props.num}</p>
        <button onClick={this.props.splic}>点击替换数据</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    num: state.num
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    splic() {
      dispatch(getNum())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
