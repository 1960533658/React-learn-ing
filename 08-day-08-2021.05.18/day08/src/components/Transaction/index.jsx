
// #region  原生动画
// import React from "react";
// import styled from "styled-components";
// const Div = styled.div`
//   width: ${props=> props.width};
//   height: ${props => props.height};
//   background: gold;
//   opacity: ${props => props.opacity};
//   transition: all 3s;
// `
// // 点击按钮时，让div发生过渡
// class Transition extends React.Component {
//   state = {
//     width: "0px",
//     height: "0px",
//     opacity: 1
//   }
//   handle = () => {
//     this.setState({
//       width: "50px",
//       height: "50px",
//     })
//   }
//   render() {
//     return (
//       <div>
//         <Div {...this.state}></Div>
//         <button onClick={this.handle}>按钮</button>
//       </div>
//     )
//   }
// }
// export default Transition;
// #endRegion


// #region  CssTransition的基本使用
// import React from "react";
// import "./index.css"
// import { CSSTransition } from "react-transition-group";

// // 点击按钮时，让div发生过渡
// class Transition extends React.Component {
//   state = {
//     isShow: true
//   }
//   handle = () => {
//     this.setState({
//       isShow: true
//     })
//   }
//   handleHide = () => {
//     this.setState({
//       isShow: false
//     })
//   }
//   render() {
//     return (
//       <div>
//         {/* 
//           in 触发动画开始或退出的状态
//           classNames 告诉react-transition-group 类的前缀是什么
//           timeout 动画运行多久退出 一定要大于等于transition属性定义的时间
//         */}
//         <CSSTransition
//           in={this.state.isShow}
//           classNames="box" timeout={3000}
//           appear
//           unmountOnExit={true}
//           onEnter={(HtmlElement, isAppearing) => console.log(HtmlElement, isAppearing)}
//         >
//           <div></div>
//         </CSSTransition>
//         <button onClick={this.handle}>按钮</button>
//         <button onClick={this.handleHide}>隐藏按钮</button>
//       </div>
//     )
//   }
// }
// export default Transition;
// #endRegion


// #region  SwitchTransition
import React from "react";
import "./index.css"
import { CSSTransition, SwitchTransition } from "react-transition-group";

// 点击按钮时，让div发生过渡
class Transition extends React.Component {
  state = {
    flag: true
  }
  handle = () => {
    this.setState({
      flag: !this.state.flag
    })
  }
  render() {
    return (
      <SwitchTransition>
        <CSSTransition
          in={this.state.flag}
          classNames="box2"
          timeout={3000}
        >
          <button onClick={this.handle}>{this.state.flag ? "Hello,word" : "Goodbay,word"}</button>
        </CSSTransition>
      </SwitchTransition>
    )
  }
}
export default Transition;
// #endRegion
