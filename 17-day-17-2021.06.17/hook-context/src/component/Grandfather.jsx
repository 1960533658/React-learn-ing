import TheContext from "../utils/context";
import Father from "./Father";
function GrandFather() {
  return (
    <TheContext.Provider value={{ name: "张三", age: 12 }}>
      <div>
        <h2>爷爷租件</h2>
        <Father></Father>
      </div>
    </TheContext.Provider>
  )
}

export default GrandFather;