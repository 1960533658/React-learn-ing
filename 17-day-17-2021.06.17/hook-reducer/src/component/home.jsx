import { useReducer } from "react"
import reducer from "./utils/reducer"
function Home() {
  const [state, dispatch] = useReducer(reducer, {num: 10})
  return (
    <div>
      <div>{state.num}</div>
      <button onClick={() => dispatch({type: "ADD"})}>+</button>
      <button onClick={() => dispatch({type: "SUB"})}>-</button>
    </div>
  )
}
export default Home