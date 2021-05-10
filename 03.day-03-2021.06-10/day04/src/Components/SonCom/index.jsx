// 传入的数据的类型限制
import propTypes from "prop-types";

import React from "react"
// 引入消费者组件
import { Consumer } from "../../utils/context"
class SonCom extends React.Component {
  // 如果props没有son值，就会使用这个默认的son值
  static defaultProps = {
    son: "冰淇凌",
  }
  // 传入的数据的类型限制
  static propTypes = {
    // 限制为字符串
    son: propTypes.string
  }
  state = {
    father: "曹操2"
  }
  toFather = () => {
    this.props.sonToFather(this.state.father)
  }
  render() {
    return (
      
        <div className="son">
          <h3>儿子组件{this.props.son}</h3>
          <button onClick={this.toFather}>点击传递给父组件</button>
          <h1>context传递过来给孙子的数据-<Consumer>{(date) => (<strong>{ date }</strong>)}</Consumer></h1>
        </div>
      
    )
  }
}
export default SonCom;