import React, { createRef } from 'react';
import { addData, delData, exitCate, exitData } from './store/action';
// 分析5. 在app.js中导入store获取数据
import store from "./store/store";
class App extends React.Component {
  constructor() {
    super();
    // 把数据映射到state中
    this.state = store.getState();
    // 添加-2. 创建ref对象
    this.inputRef = createRef()
  }
  // 数据订阅
  componentDidMount()  {
  store.subscribe(() => {
    this.setState({
      ...store.getState()
    }, () => {
      console.log(this.state);
    })
  })
  }
  
  // #region  给数据在不同情况下进行分类
  Cate = () => {
    if (this.state.viewKey === "all") {
      return this.state.list
    } else if (this.state.viewKey === "undone") {
      return this.state.list.filter(item => item.status === false)
    } else if (this.state.viewKey === "done") {
      return this.state.list.filter(item => item.status)
    }
  }
  // #endRegion
  
  componentDidUpdate() {
    // this.Cate()
  }
  // #region  添加数据
  handleAdd = () => {
    // 获取输入框的值
    // console.log(this.inputRef.current.value);

    // 添加-3 把数格式化为对象的格式
    let Task = {
      id: new Date().valueOf(),
      info: this.inputRef.current.value,
      status: false
    }
    store.dispatch(addData(Task))
  }
  // #endRegion
  
  // #region  删除数据
  handleDel = (id) => {
    store.dispatch(delData(id))
  }
  // #endRegion
  
  // #region  修改状态
  exitStatus = (id) => {
    store.dispatch(exitData(id))
  }
  // #endRegion
  
  // #region  分类
  handleCate = (key) => {
    store.dispatch(exitCate(key))
  }
  // #endRegion

  render() {
    return (
      <div className="App todo" >
        {/* 输入框及搜索按钮 */}
        < div className="todo-header" >
          {/* 添加 2. 绑定input */}
          <input type="text" placeholder="请输入任务" ref={this.inputRef}/>
          <button onClick={this.handleAdd}>添加事项</button>
        </div>
        {/* 列表 */}
        < ul className="todo-main" >
          {/* 分析- 6. 在模板中渲染数据 */}
          {
            this.Cate().map(item => (
              <li key={item.id}>
                <input type="checkbox" checked={item.status} onChange={() => this.exitStatus(item.id)} /> <span>{item.info}</span>
                <a href="javascript;:" onClick={() => this.handleDel(item.id)}>删除</a>
              </li>
            ))
          }
        </ul >
        {/* 底部菜单 */}
        < div className="todo-footer" >
          <p>{this.state.list.length}条剩余</p>
          <div className="todo-footer-button">
            {/* all 全部  undone 未完成  done 已完成  */}
            <button onClick={() => this.handleCate("all")} className={this.state.viewKey==="all" ? "primary": ""}>全&nbsp;&nbsp;部</button>
            <button onClick={() => this.handleCate("undone")} className={this.state.viewKey === "undone" ? "primary" : ""}>未完成</button>
            <button onClick={() => this.handleCate("done")} className={this.state.viewKey === "done" ? "primary" : ""}>已完成</button>
          </div>
          <a href="javascript;:" >清除已完成</a>
        </div >
      </div >
    );
  }
}

export default App;
