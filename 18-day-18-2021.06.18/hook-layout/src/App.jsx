import { forwardRef, useState } from "react";
import Home from "./component/Home";
const ForwardHome = forwardRef(Home)
function App() {
  const [state, setState] = useState(true);

  const btnClick = () => {
    setState(!state)  
  }
  return (
    <div className="App">
      <button onClick={btnClick}>获取Home</button>
      {/* <ForwardHome></ForwardHome> */}
      {state && <ForwardHome></ForwardHome>}
    </div>
  );
}

export default App;
