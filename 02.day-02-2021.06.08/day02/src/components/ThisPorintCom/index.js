// this的指向
import React, { Fragment } from "react";
class Bind extends React.Component {
// 方式一 ： 关键字修改
  // constructor() {
  //   super()
  //   this.state = {
  //     count: 10
  //   }
  //   this.handleThis = this.handleThis.bind(this)
  // }
  // handleThis() {
  //   console.log("我是通过关键字改变this指向的");
  //   console.log(this.state.count)
  // }

  // 方式二
  state = {
    count: 10
  }
  // handleThis = () => {
  //   console.log(this.state.count)
  // }

  // 方式三
  handleThis() {
    console.log("我是利用箭头函数包裹方法修改this指向的方式三");
    console.log(this.state.count)
  }
  render() {
    return (
      <Fragment>
        {/* <div onClick={this.handleThis}>我是关键字修改this指向的方式一</div> */}
        {/* <div onClick={this.handleThis}>我是箭头函数修改this指向的方式二</div> */}
        <div onClick={() => this.handleThis()}>我是利用箭头函数包裹方法修改this指向的方式三</div>
      </Fragment>
    )
  }
}

export default Bind;