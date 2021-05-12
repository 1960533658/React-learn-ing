# day-05

## 组件的生命周期

### 什么是生命周期
- 组件的生命周期：组件从被创建道挂载页面中运行，再到组件不用时卸载的过程
- 意义：组件的生命周期有助于理解组件的运行方式、完成更复杂的组件功能、分析组件错误原因
- 生命周期的每个阶段总是伴随着一些方法调用，这些方法就是就是钩子函数
- 只有类组件才有生命周期

### 生命周期阶段
> https://projects.wojekmaj.pl/react-lifecycle-methods-diagram/

### 生命周期-挂载阶段
> 创建时机：组件创建时（页面加载时）
> 执行顺序：constructor() --> render() --> coponmentDidMount
> 函数的作用
- constructor()：创建组件时优先执行作用是1.初始换state 2.为事件处理程序绑定this
- render():每次组件渲染都会触发，作用：渲染UI（注意：不能再render中调用setState（））
- componentDidMount组件挂载（完成MOM渲染）后，租用1.发送网络请求2.DOM操作
```js
import React from "react";
class OnMount extends React.Component {
  constructor() {
    super()
    console.log("1.组件挂载--constructor 初始化state");
  }
  componentDidMount() {
    console.log("3.组件挂载--componentDidMount 发送网络请求 操作DOM");
  }
  render() {
    console.log("2.组件挂载--render 渲染UI")
    return (
      <div>11111</div>
    )
  }
}
export default OnMount;
```
### 更新时（更新阶段）
> 执行时机：1.setState() 2.forceUpdate 3.组件接收到新的props
> 说明：以上三种任意一种变化，组件就会渲染
> 函数的作用：
- render: 每次组件渲染会触发 作用：渲染UI（与挂载阶段时同一render）
- componentDidUpdate:组件更新（完成DOM渲染）后，作用：1.发送网络请求 2.DOM操作 注意如果setState（）必须放在一个if条件中
```js
import React from "react";
class AppSon extends React.Component {
  
  componentDidUpdate() {
    console.log("组件更新数据 -- componentDidUpdate 发送请求 操作DOM ")
  }

  
  render() {
    return (
      <div>
        {this.props.count}
      </div>
    )
  }
}
class OnUpdate extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    console.log("1.1组件挂载--constructor 初始化state");
  }
  componentDidUpdate() {
    console.log("组件更新数据 -- componentDidUpdate 发送请求 操作DOM ")
  }

  handeUpdate = () => {
    this.setState({
      count: 1
    })

    this.forceUpdate();
  }
  render() {
    console.log("1.2 组件挂载--render 渲染UI")
      if (this.state.count === 0) {
      } else {
        console.log("2.2 组件更新-- componentDidUpdate 发送请求 操作DOM");
    }
    
    return (
      <div>
        <div>我是Update组件</div>
        <button onClick={this.handeUpdate}>更新count</button>
        <AppSon count={this.state.count}></AppSon>
      </div>
    )
  }
}
export default OnUpdate;
```
### 卸载时（卸载阶段）
> 执行时机：组件从页面中消失
> 函数的作用：componentWill当组件卸载（从页面中消失）时触发 作用执行清理工作 比如定时器
```js
import React from "react";
class AppSon extends React.Component {

  componentWillUnmount() {
    console.log("组件卸载");
  }
  render() {
    return (
      <div>
        {this.props.count}
      </div>
    )
  }
}
class OnUnmount extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      flag: true
    }
  }
  
  handeUpdate = () => {
    // 点击让flag为false 让son消失
    this.setState({
      count: 1,
      flag: false
    })

  }
  render() {
    return (
      <div>
        <div>我是Update组件</div>
        <button onClick={this.handeUpdate}>更新count</button>
        {this.state.flag && <AppSon count={this.state.count}></AppSon>}
      </div>
    )
  }
}
export default OnUnmount;
```
## render-props和高阶组件

### React组件复用概述
> 思考：如果两个组件中的部分功能相似或相同，该如何处理 处理方式：复用相似的功能更
- 复用什么？1.state 2.操作state的方法（组件装填逻辑） 两种方式1.render props模式 2. 高阶组件
> 注意：这两种方式不是新的API，而是利用React滋生特点的编码技巧，演化而成的固定模式（写法）

#### render-props
> 实现小猫跟着鼠标移动且显示所在坐标
**移动的坐标值组件**
```js
// 记录所有的鼠标
import React from "react";
class Mouse extends React.Component {
  state = {
    x: 0,
    y: 0
  }
  // 页面加载时触发生命周期钩子函数
  componentDidMount() {
    // 给window挂添加鼠标事件
    window.addEventListener("mousemove", this.fn)
  }
  fn = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  render() {
    return this.props.render(this.state)
  }
}

export default Mouse;
```

**显示坐标值组件**
```js
import React from "react";
import Mouse from "../Mouse";
class ShowWhere extends React.Component {
  render() {
    return (
      <div>
        <Mouse render={(mouse) => {
          return (
            <div>{mouse.x}---{mouse.y}</div>
          )
        }}>
        </Mouse>
      </div>
    )
  }
}

export default ShowWhere
```

**展示小猫**
```js
import React from "react";
import Mouse from "../Mouse";
import Img from "../../../image/cat.png";
class ShowCat extends React.Component {
  render() {
    return (
      <div>展示小猫
        <Mouse render={mouse => {
          return (
            <div>
              <img src={Img} style={{ position: 'absolute', top: mouse.y, left: mouse.x}} alt=""/>
            </div>
          )
        }}>
       </Mouse>
      </div>
    )
  }
}

export default ShowCat;
```

**展示组件**
```js
import React from "react";

import ShowCat from "../ShowCat";
import ShowWhere from "../ShowWhere";

class ShowCatAndWhere extends React.Component {
  render() {
    return (
      <div>
        <ShowWhere></ShowWhere>
        <ShowCat></ShowCat>
      </div>
    )
  }
}

export default ShowCatAndWhere;
```

#### chlidren-props
1. 与render-props代码不同的是要将数据部分的代码中的render改变为childlren
```js
componentDidMount() {
    // 给window挂添加鼠标事件
    window.addEventListener("mousemove", this.fn)
  }
  fn = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  render() {
    return this.props.children(this.state)
  }
}

export default Mouse;
```
2. 将引用数据的页面中的render全部替换为children
```js
import React from "react";
import Mouse from "../Mouse";
import Img from "../../../image/cat.png";
class ShowCat extends React.Component {
  render() {
    return (
      <div>展示小猫
        <Mouse children={mouse => {
          return (
            <div>
              <img src={Img} style={{ position: 'absolute', top: mouse.y, left: mouse.x}} alt=""/>
            </div>
          )
        }}>
       </Mouse>
      </div>
    )
  }
}

export default ShowCat;
```

3. 或者将children等号后的函数体全部写在标签中
```js
import React from "react";
import Mouse from "../Mouse";
import Img from "../../../image/cat.png";
class ShowCat extends React.Component {
  render() {
    return (
      <div>展示小猫
        <Mouse >
          {mouse => {
            return (
              <img src={Img} style={{ position: 'absolute', top: mouse.y, left: mouse.x }} alt="" />
            )
          }}
        </Mouse>
      </div>
    )
  }
}

export default ShowCat;
```