import { useDispatch, useSelector } from "react-redux"
import { getNum } from "./store/action";
function App() {
  const num = useSelector((state) => state.num)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>{num}</p>
      <button onClick={() => dispatch(getNum())}>替换字符</button>
    </div>
  );
}

export default App;
