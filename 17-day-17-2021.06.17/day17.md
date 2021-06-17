# day 17

## Hook -- useContext
> 上下文（Context）因为祖组件和后代组件的通信比较麻烦，因此使用Context让通信变得更加容易
**创建公共方法context.js文件**
```js
import React from "react"
// 传递数据数据默认值
// const TheContext = React.createContext({name: "张三", age: 12})
const TheContext = React.createContext();

export default TheContext;
```
**GrandFather**
```js
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
```

**Father.jsx**
```js
import Son from "./Son";
function Father() {
  return (
    <div>
      <h2>父组件</h2>
      <Son></Son>
    </div>
  )
}

export default Father;
```

**Son.jsx**
```jsx
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
```

### Hook -- Rencer
> 用来解决代码复用的方案
> useState的替代方案。它接收到一个形如(state,action) => newState的reducer，并返回当前的state以及其配套的dispatch方法

- 1. 创建一个utils文件夹用于存放同样的方法
**utils/reducer.js**
```js
const reducer = (state, action) => {
  switch(action.type) {
    case "ADD":
      return {num: state.num + 1}
    case "SUB":
      return {num: state.num - 1}
    default:
      return state
  }
}
```
- 2. 在app.js 中绑定注册子组件
```js
import Home from "./component/home";
import About from "./component/about";
function App() {
  return (
    <div className="App">
      <Home></Home>
      <About></About>
    </div>
  );
}

export default App;
```

- 3. 在about组件中使用useReducer
```js
import {useReducer} from "react";
import reducer from "./utils/reducer.js"
function ABout() {
  const [state, dispatch] = useReducer(reducer, {num: 20})
  return (
    <div>
      <div>{state.num}</div>
      <button onclick={() => {dispatch({type: "ADD"})}>+</button>
      <button onclick={() => dispatch(type: "SUB")}>-</button>
    <div>
  ) 
}
```
- 4. Home组件与Abot组件代码一样

## Hook -- useCallback
> 为什么使用use Callback
- 为了让组件优化在不需要渲染的时候不要渲染
- React.memo的缺点，当参数不会改变的时候，确实不会重新渲染子组件，但是当使用了子传父之后（父组件给子组件传递自定义方法）当父组件更新数据，同时也会重新初始化定义的方法，导致一开始的方法与渲染之后的方法地址不一致，就会导致重新渲染组件
**App.jsx**
```js
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

```

> Home和About中没有使用数据，只在父组件中传递了方法

## Hook -- useMemo
> useMemo 是一样的用法和效果，因为useMemo是继承自useCallback
```js
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

```
> 小结： !!!注意千万不要把重新使用memo包装过的组件在函数组件的内部定义，会被导致重新加载，使得无法阻止重新渲染s