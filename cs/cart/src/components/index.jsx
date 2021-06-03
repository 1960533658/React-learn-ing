import React from "react";
import Botton from "./Botton";
import Top from "./Top";
class Cart extends React.Component {
  state = {
    CartList: [
      { id: 1, pName: "牛奶", src: "./uploads/01.jpg", price: 10, count: 3, flag: false },
      { id: 2, pName: "三只松鼠", src: "./uploads/02.jpg", price: 30, count: 1, flag: false },
      { id: 3, pName: "蓝牙播放器", src: "./uploads/03.jpg", price: 100, count: 1 },
      { id: 4, pName: "大米", src: "./uploads/04.jpg", price: 50, count: 1, flag: false },
      { id: 5, pName: "路由器", src: "./uploads/05.jpg", price: 110, count: 1, flag: false },
      { id: 6, pName: "罐头", src: "./uploads/06.jpg", price: 20, count: 1, flag: false }
    ],
    All: false,
  }

  // #region  修改一项选中状态
  handleItemFlag = (id) => {
    console.log(id);
    // 设置数据中的flag选中状态
    this.setState({
      CartList: this.state.CartList.map(item => {
        if (item.id === id) {
          return { ...item, flag: !item.flag }
        } else {
          return item
        }
      })

      
    }, () => {

      let flag = true;
      this.state.CartList.forEach(item => {
        if (!item.flag) {
          flag = false
        } else {
        //当选中的时候计算选中的个数和总价
          
        }
      })
      this.setState({
        All: flag
      })
      this.handleCom(id)
    })
  };

  // 选中所有
  handleAll = () => {
    this.handleCom()
    this.setState({
      All: !this.state.All
    }, () => {
      if (this.state.All) {
        this.setState({
          CartList: this.state.CartList.map(item => {
            return { ...item, flag: true }
          })
        })
      } else {
        this.setState({
          CartList: this.state.CartList.map(item => {
            return { ...item, flag: false }
          })
        })
      }
    })
  }
  // #endRegion


  // #region  +-改变值
  handelChange = (text, id,e) => {
    if (text === "miu") {
      this.setState({
        CartList: this.state.CartList.map(item => {
          if (item.id === id) {
            return { ...item, count: item.count === 0 ? 0 : item.count - 1 }
          } else {
            return item
          }
        })
      })
    } else if (text === "push") {
      this.setState({
        CartList: this.state.CartList.map(item => {
          if (item.id === id) {
            return { ...item, count: item.count + 1 }
          } else {
            return item
          }
        })
      })
    } else if (text === "change") {
      console.log( e.target.value);
      this.setState({
        CartList: this.state.CartList.map(item => {
          if (item.id === id) {
            return { ...item, count: isNaN(e.target.value - 0) ? 0 : e.target.value - 0  }
          } else {
            return item
          }
        })
      })
    }
  }
  // #endRegion

  
  // #region  遍历计算选中的个数和总价
  handleCom = (id) => {
    let CheCount = 0;
    let ChePrice = 0
    this.state.CartList.forEach(item => {
      if (item.flag) {
        CheCount++;
        ChePrice += item.count * item.price;
      }
    })
    
    return {CheCount: CheCount, ChePrice: ChePrice}
  }
  // #endRegion
  
  // #region  删除当前行
  DelOnce = (id) => {
    this.setState({
      CartList: this.state.CartList.filter(item => item.id !== id)
    })
  }
  // #endRegion
  
  
  // #region  删除所选商品
  DelMany = () => {
    this.setState({
      CartList: this.state.CartList.filter(item => item.flag !== true)
    })
  }
  // #endRegion
  
  // #region  删除所有商品
  DelAll = () => {
    this.setState({
      CartList: []
    })
  }
  // #endRegion
  
  render() {
    return (
      <div className="car">
        <Top
          CartList={this.state.CartList}
          All={this.state.All}
          handleItemFlag={this.handleItemFlag}
          handleAll={this.handleAll}
          handelChange={this.handelChange}
          DelOnce={this.DelOnce}
        ></Top>
        <Botton
          handleCom={this.handleCom()}
          DelMany={this.DelMany}
          DelAll={this.DelAll}
        ></Botton>
      </div>
    )
  }
}
export default Cart