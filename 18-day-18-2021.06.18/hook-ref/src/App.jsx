import { useEffect, useRef, useState } from "react";
// import Home from "./component/Home";

// useRef 和createRef一样，获取任何元素html元素和类组件，但是不能获取
// 函数组件 
// useRef比createRef()好饿地方，useRef可以保存值，只保存初始值
// 当你在开发中既想取当前值又想获取上一次的值就可以使用useRef
function App() {
  const refH2 = useRef();
  const refHome = useRef();
  const [state, setState] = useState(0);
  const ageRef = useRef(0);

  useEffect(() => {
    console.log(state);
    ageRef.current = state
    console.log(ageRef.current);
  })
  function handleGet() {
    refH2.current.innerText = "App2"
    console.dir(refHome);

    setState(prevState => prevState + 1)
  }
  return (
    <div className="App">
      {console.log(ageRef.current)}
      <p >{ageRef.current}</p>
      <p>{state}</p>
      <p ref={refH2}>App</p>
      <button onClick={handleGet}>获取文字</button>
      {/* 不可以在函数组件中传递传递这个使用useRef，只能在类组件中使用 */}
      {/* <Home ref={refHome}></Home> */}
    </div>
  );
}

export default App;
