# day18
## hook -- ref
**app.jsx**
```js
import { useEffect, useRef, useState } from "react";
// import Home from "./component/Home";

// useRef 和createRef一样，获取任何元素html元素和类组件，但是不能获取
// 函数组件 
// useRef比createRef()好用的地方，useRef可以保存值，只保存初始值
// 当你在开发中既想取当前值又想获取上一次的值就可以使用useRef
function App() {
  const refH2 = useRef();
  const refHome = useRef();
  const [state, setState] = useState(0);
  const ageRef = useRef();

  useEffect(() => {
    ageRef.current = state
  })
  function handleGet() {
    refH2.current.innerText = "App2"
    console.dir(refHome);

    setState(prevState => prevState + 1)
  }
  return (
    <div className="App">
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

```

> 小结：
- 不可以将函数组件作为ref使用，类组件可以作为ref使用
- ageRef.current是ref的值
- useEffect更改值（非returncomponentDidUnmount方式更改）,因为数据state更新之后触发useEffect

## hook-useLayoutEffect
```js
import {forwardRef, useState } from "react";
import Home from "./component/Home";
const ForwardHome = forwardRef(Home)
```
```js
import { useEffect, useLayoutEffect} from "react";
function Home() {
  useEffect(() => {
    console.log("组件初始换/更新");
    return () => {
      console.log("组件即将卸载");
    }
  })
  useLayoutEffect(() => {
    console.log("组件初始换/更新--layout");
    return () => {
      console.log("组件即将卸载--layout");
    }
  })
  return (
    <div>
      <h2>Home组件</h2>
    </div>
    
  )
}
export default Home;
```

> 打印结果
1. 页面初始化
组件初始换/更新--layout 
组件初始换/更新
2. 组件卸载
组件即将卸载--layout
组件即将卸载

- 由上述打印结果可知useLayoutEffect的执行先于useEffect，这是因为useLayoutEffect是同步的，useEffect的执行结果是异步的


## hook-useImperativeHandle
**Home.jsx**
```js
import { useImperativeHandle, useRef } from "react";
/**
 * useInperativeHandle 可以让你在使用ref时自定义暴露给父组件的实例值
 * 在大多是情况下，应当避免使用ref这样的命令式代码
 * useImperativeHandle应当与forwarRef一起使用
 */
function Home(props, ref) {
  const inputRef = useRef();
  // 第一个参数父元素传进来的Ref
  // 第二个参数：回调函数，作用是：暴露哪些元素给父组件
  useImperativeHandle(ref, () => {
    return {
      myFocus: function () {
        inputRef.current.focus()
      },
      setVal: function (val) {
        inputRef.current.value = val
      }
    }
  })
  return (
    <div>
      <input type="text" placeholder="请输入" ref={inputRef}/>
    </div>
  )
}
export default Home;
```

**App.jsx**
```js
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
```

> 总结： 
- 必须使用forwardRef重新包装组件才能给函数组件传递Ref对象
- 一定要在给函数组件定义两个形参，一个是props，另一个是ref，ref代表的是父组件传递给子组件的ref对象，给子组件需要使用ref的元素添加ref (const inputRef = useRef()) 再使用useImperativeHandle(ref, () => {return {}})定义个可以返回给父组件的可选择操作对象 最后就可以再父组件中通过返回的对象进行对子组件内容的操作了

## Hook与saga一起使用（useSelect&useDispatch)
```js
import { useDispatch, useSelector } from "react-redux"
import { getNum } from "./store/action";
function App() {
  const num = useSelector((state) => state.num)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>{num}</p>
      <button onClick={() => dispatch(getNum())}>替换字符</button>
    </div>
  );
}

export default App;

```
> 总结
  在配置号saga的前提下，在app.js中从react-redux内导入useDispatch和useSelector，使用useSelector可以导入数据，使用useDispatch可以调用action中的方法
  语法：
    useSelector((state) => state)其中state就是传递过来的数据
    useDispatch(action中的方法())