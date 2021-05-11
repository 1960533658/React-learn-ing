// App
import React from "react"
// CartTitle组件
import CartTitle from "../CartTitle"
// CartList
import CartList from "../CartList"
// CartTotal组件
import CartTotal from "../CartTotal"
class App extends React.Component {
  state = {
    name: "康康",
    list: [{
      id: 1,
      name: 'TCL彩电',
      price: 1000,
      num: 1,
      img: 'img/a.jpg'
    }, {
      id: 2,
      name: '机顶盒',
      price: 1000,
      num: 1,
      img: 'img/b.jpg'
    }, {
      id: 3,
      name: '海尔冰箱',
      price: 1000,
      num: 1,
      img: 'img/c.jpg'
    }, {
      id: 4,
      name: '小米手机',
      price: 1000,
      num: 1,
      img: 'img/d.jpg'
    }, {
      id: 5,
      name: 'PPTV电视',
      price: 1000,
      num: 2,
      img: 'img/e.jpg'
    }]
  }

  // 通过传递过来的id删除数据
  delItem = (id) => {
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    })
  }
  // 改变输入框方法
  changeItem = (option) => {
    if (option.type === "change") {
      this.setState({
        list: this.state.list.map(item => {
          // 找到与id相应的数据并修改
          if (item.id === option.id) {
            return { ...item, num: option.num}
          } else {
            return item
          }
        })
      })
    } else if (option.type === "add") {
      this.setState({
        list: this.state.list.map(item => {
          if (item.id === option.id) {
            return {...item, num: item.num+1}
          } else {
            return item
          }
        })
      })
    } else if (option.type === "sub") {
      this.setState({
        list: this.state.list.map(item => {
          if (item.id === option.id) {
            return { ...item, num: item.num - 1 }
          } else {
            return item
          }
        })
      })
    }
  }
  render() {
    return (
      <div className="container">
        <div className="cart">
          <CartTitle name={this.state.name}></CartTitle>
          <CartList list={this.state.list} delItem={this.delItem} changeItem={this.changeItem}></CartList>
          <CartTotal list={this.state.list}></CartTotal>
        </div>
      </div>
    )
  }
}

export default App