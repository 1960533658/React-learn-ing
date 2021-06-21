# day-19
## ant-design-mobile 案例项目
## 试试使用vite实现这个项目

## 项目依赖
* React 核心库：react、react-dom、react-router-dom
* 脚手架：create-react-app
* 数据秦桧去： axios
* 其他组件库react-Virtualized（长列表优化，比如说地名）、formik+yup（表单校验）、react-spring（react动画）
* 百度API

## 项目搭建

### 本地接口部署
1. 创建并导入数据：数据库库名称 hkzf(固定名称)
2. 启动接口：在API目录中执行 npm start
3. 测试接口：接口地址 http://localhost:8080
### Swagger
> 用于复杂的接口文档数据请求文档的自动处理
### 初始化项目
1. 初始化项目npx create-react-app hkzf-mobile
  npm install --save react-router-dom
2. 启动项目 项目更目录执行命令：yarn start
src/ 文件代码目录
  assets 项目静态资源
  component 公共组件
  pages/页面
  utils 工具（公共方法）
  app.js 根目录
  index.css 全局样式
  index.js 项目入口文件

### 组件库 antd-mobile
官网：https://mobile.ant.design/index-cn
1. 打开 antd-mobile 的文档
2. 安装: npm install antd-mobile --save
3. 在app.js 根组件中导入要使用的组件
4. 渲染组件
5. 在 index.js 中导入组件库样式