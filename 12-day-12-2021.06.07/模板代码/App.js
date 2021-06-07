import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App todo" >
        {/* 输入框及搜索按钮 */}
        < div className="todo-header" >
          <input type="text" placeholder="请输入任务" />
          <button>添加事项</button>
        </div>
        {/* 列表 */}
        < ul className="todo-main" >

          <li>
            <input type="checkbox" /> <span>标记静态内容，并区分动态内容</span>
            <a href="#">删除</a>
          </li>
          <li>
            <input type="checkbox" /> <span>标记静态内容，并区分动态内容</span>
            <a href="#">删除</a>
          </li>
        </ul >
        {/* 底部菜单 */}
        < div className="todo-footer" >
          <p>5条剩余</p>
          <div className="todo-footer-button">
            {/* all 全部  undone 未完成  done 已完成  */}
            <button>全&nbsp;&nbsp;部</button>
            <button>未完成</button>
            <button>已完成</button>
          </div>
          <a href="#" >清除已完成</a>
        </div >
      </div >
    );
  }
}

export default App;
