import Home from "./component/home";
import About from "./component/about"
import { memo, useMemo, useState } from "react";
const MemoHoem = memo(Home)
const MemoAbout = memo(About)
function App() {
  console.log("App组件重新加载");
  const [state, setState] = useState(0)
  const handleAdd = useMemo(() => {
    return () => {
      setState(prevState => prevState + 1)
    }
  }, [])
  const handleSub = useMemo(() => {
    return () => setState(prevState => prevState - 1)
  },[])
  return (
    <div>
      <p>{state}</p>
      <button onClick={() => handleAdd()}>+</button>
      <button onClick={() => handleSub()}>-</button>
      <MemoHoem handleAdd={handleAdd}></MemoHoem>
      <MemoAbout handleSub={handleSub}></MemoAbout>
      {/* 不是用memo组件就会重新加载 */}
      {/* <Home></Home>
      <About></About> */}
    </div>
  );
}

export default App;
