import React from "react"
import DaugtherCom from "../DaughterCom"
import Son from "../SonCom"
class FatherCOm extends React.Component {
  state = {
    daugther: "吞吞",
    son: "儿子"
    // daugther: 1,
    // son: 2
  }

  // 子传父
  sonToFather = (name) => {
    console.log(name);
  }
  render() {
    return (
      <div className="father">
        <h3>我是父组件</h3>
        <DaugtherCom daugther={this.state.daugther}></DaugtherCom>
        {/* 把父组件的声明传递给子组件 */}
        <Son son={this.state.son} sonToFather={this.sonToFather}></Son>
      </div>
    )
  }
}
export default FatherCOm;