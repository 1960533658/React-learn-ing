import { useContext } from "react";
import TheContext from "../utils/context";

function Son() {
  const main = useContext(TheContext)
  console.log(main);
  return (
    <div>
      <h2>儿子组件</h2>
      <h3>爷爷组件传值 {main.name}--{main.age}</h3>
    </div>
  )
}

export default Son;