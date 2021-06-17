import { useEffect, useState } from "react";

function App() {
  /**
   * 结构赋值
   * 第一个参数是这个值是使用的时候所代表的变量
   * 第二个参数是这个值是这是新值时所代表的变量
   */
  const [state, setState] = useState(21321321);
  const [addressState, setAddressState] = useState({
    country: "中国",
    provice: "江苏",
    city: "宿迁"
  })

  const [showHome, setIshowHome] = useState(true)
  // 设置数据是异步的，使用设置数据的回调函数可以实时获取元素上一次变化的数据
  const handleAdd = () => {
    console.log(1);
    setState((prevState) => {
      setState(prevState+10)
    })
  }

  // useEffect 作用监听 -- 用来哦代替数类组件中的三个生命周期函数
  // useEffect(回调函数,[依赖项])
  // 如果依赖项为空数组 代表不依赖任何数据的变化，导致了数据更新也不会发生任何的代码运行
  // 如果依赖项为未设置 代表依赖任何数据的变化，导致了数据更新所有的的代码再次全部运行
  // 如果依赖项为其中一种数据（依赖数据state) 代表依赖state变化，导致了只有state数据更新才会运行所有的

  useEffect(() => {
    // componentDidMount
    console.log("组件初始化");
    // componentDidUpdate
    console.log("组件数据变化");
    
  }, [state])
  
  const isHow = () => {
    setIshowHome((proshowHome) => {
      setIshowHome(!proshowHome)
    })
  }
  return (
    <div>
      <p>{state}</p>
      <p>{addressState.country}--{addressState.provice}---{addressState.city}</p>
      <button onClick={() => handleAdd()}>替换数据</button>
      <button onClick={() => setAddressState({...addressState, city: "南通"})}>替换城市为南通</button>
      <button onClick={() =>isHow()}>是否显示Home</button>
      {showHome && <Home></Home>}
    </div>
  );
}

export default App;


// 卸载组件
function Home() {
  useEffect(() => {
    // return 值就是卸载生命周期函数 componentWillUnmount
    return () => {
      console.log("组件卸载");
    }
  })
  return (
    <div>Home组件</div>
  )
}
