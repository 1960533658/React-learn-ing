# day16

## react Hooks

### 什么是Hooks
Hooks是React16.8的新增特性， 它可以让函数式组件有用类组件的特性

### 为什么需要学习Hooks
> 类组件的问题:
- 令人头疼的this管理，容易引入难以最终的BUG
2. 声明周期的划分并不符合“内聚性”原则 例如setInterval和clearInterval这种具有强关联的逻辑被拆分在不同的生命周期方法中
3. 组件的复用（数据共享或功能复用）的困局，从早期的Mixin到高阶组件（HOC）再到Render Props，始终没有一个清晰直观又便于维护的组件复用方案

类组件 --> 生命周期方法 组件的状态和逻辑（高阶组件）
函数组件 --> 没有生命周期方法（函数组件没有状态）有UI没逻辑

### 如何使用Hooks
Hook的使用我们无需安装任何第三方库，因为它就是React的一部分
Hooks只能在函数组件中使用，不能再类组件、或者函数组件之外的地方使用
Hooks只能再函数最外层调用，不能循环、条件判断或者子函数中调用
```js
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

```

### 小结
> hook只能早使用函数组件中使用，其中可以使用useState创建等价于class组件中的state数据，可以使用结构赋值的方式创建出其中第一个名称是这个值的读取，第二个名称是这个值的修改方式
> useEffect是函数组件中模拟出来的类组件中的componentDidMount、componentWillUpdate和return值代表的componentWillUnmount生命周期函数