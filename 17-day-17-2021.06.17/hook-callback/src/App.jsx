import Home from "./component/home";
import About from "./component/about";
import { memo, useCallback, useState } from "react";
const MomeHome = memo(Home)
const MomeAbout = memo(About)
function App() {

  console.log("App渲染");
  const [state, setState] = useState(0)
  // function handleAdd() {
  //   setState((prevState) => prevState+1)
  // }
  // function handledDle() {
  //   setState(prevState => prevState - 1)
  // }
  const handleAdd = useCallback(() => {
    setState((prevState) => prevState + 1)
  }, [])
  const handleDel = useCallback(() => {
    setState(prevState => prevState - 1)
  }, [])

  return (
    <div className="App">
      <p>{state}</p>
      <button onClick={handleAdd}>+</button>
      <button>-</button>
      <h2>当App重新渲染的让子组件不重新渲染</h2>
      <MomeHome handleAdd={handleAdd}></MomeHome>
      {/* 
        使用了React.memo出现了当组件问题重新渲染的问题，因为，父组件传递了方法给
        子组件，当父组件重新渲染的话它不能阻止子组件的重新渲染，使用callBack
        组织它冲新渲染
      */}
      <MomeAbout handleDel={handleDel}></MomeAbout>
    </div>
  );
}

export default App;
