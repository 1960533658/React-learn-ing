import React from "react";
import { connect } from "react-redux";
import { GetNum } from "./store/action";
class App extends React.Component {

  render() {
    return (
      <main>
        <div>{this.props.num}</div>
        <button onClick={this.props.handleNum}>点击替换为随机数</button>
      </main>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    num: state.num
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    handleNum() {
      dispatch(GetNum)
    }



    // async handleNum() {
    //   dispatch(await numChange())
    // }
    // handleNum() {
    //   dispatch(numChange())
    // }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)