// CartTotal组件
import React from "react";
class CartTotal extends React.Component {
  conputedTotal = () => {
    let sum = 0;
    this.props.list.forEach(item => {
      sum += item.price * item.num
    })
    return sum;
  }
  render() {
    return (
      <div className="total">
        <span>总价：{this.conputedTotal()}</span>
        <button>结算</button>
      </div>
    )
  }
}

export default CartTotal;