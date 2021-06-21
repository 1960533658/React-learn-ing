import {  forwardRef, useRef } from "react";
import Home from "./component/Home";
const ForwardHome = forwardRef(Home)
function App() {
  const refHome = useRef();
  // 点击按钮，让input获取焦点 给input设置一些文字
  function handleGetHome() {
    console.log(refHome.current);
    refHome.current.myFocus()
    refHome.current.setVal("康康")
  }
  return (
    <div className="App">
      <button onClick={handleGetHome}>获取Home</button>
      <ForwardHome ref={refHome}></ForwardHome>
    </div>
  );
}

export default App;
