import React,{ useReducer } from "react"
import reducer from "./utils/reducer"
function Home(props) {
  const [state, dispatch] = useReducer(reducer, {num: 10,})
  console.log("Home渲染");
  const handleAdd = () => {
    props.handleAdd()
  }
  return (
    <div>
      <div>{state.num}</div>
      <button onClick={() => handleAdd()}>+</button>
      <button onClick={() => dispatch({type: "SUB"})}>-</button>
    </div>
  )
}
export default Home