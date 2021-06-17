import { useEffect, useState } from "react";

// CartTotal组件
const CartTotal = (props) => {
  const [price, setPrice] = useState(0)
  useEffect(() => {
    let num = 0
    props.list.forEach(item => {
      num += item.num * item.price
    })
    setPrice(num)
  },[props.list])
  return (
    <div className="total">
      <span>总价：{price}</span>
      <button>结算</button>
    </div>
  )
}

export default CartTotal;