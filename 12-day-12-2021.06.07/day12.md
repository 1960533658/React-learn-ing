# day12

## 项目需求
```shell
// antd组件下载
npm install antd --save
// redux数据共享
npm install redux
```
### 状态管理redux
1. 创建store文件夹
2. store.js文件（总文件） action.js（指令）reducer（执行操作）constants（常量存储）
3. 创建store --> 初始换状态

## 项目功能

### 分析
1. 在reducer.js中初始化数据 --> list
2. 在reduce.jsr中创建reducer函数
3. 导出reduce.jsr到store.js中去
4. 在store.js创建store.js并导出
5. 在app.js中导入store.js，获取list数据
6. 在模板中显示
### 任务添加
1. 给添加事项按钮绑定点击事件
2. 用代码完成非受控组件(创建red方法、绑定ref给input)
3. 把数据以正确的格式传递数去
4. 调用store.dispatch 把对象当作参数发送给action
5. reducer接收添加到添加数据的action,把数据添加到store中去
6. 在app.js中对state进行数据·订阅
### 任务删除
1. 给删除按钮添加点击事件 传递id
2. 调用dispatch方法触发 action.js中的删除数据的事件
3. 在action中,返回一个对象给reducer
4. 在reducer中,接收传来的action,指向删除数据的实际操作
### 更新状态
1. 渲染复选框的状态
2. 给复选框添加onChange事件 获取id
3. 声明事件处理函数,调用store.dispatch 把id传递给action
4. 在action中返回一个对象给reducer
5. 使用reducer修改复选框状态
### 任务分类
1. 判断viewKey 的值是哪一个 分别对应 三个任务状态按钮, 符合哪一个就给它添加primary类名 
2. 添加点击事件点击不同的按钮,返回不同的参数,通过store.dispatch传递参数给action.js
3. 在action返回一个对象给reducer
4. 通过reducer改变viewKey的值
5. 通过部疼痛的viewKey过滤出不同的数据给state
### 任务数量