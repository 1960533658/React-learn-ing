import React from "react";
class Botton extends React.Component {
  componentDidMount() {
    console.log(this.props.handleCom);
  }
  state = {

  }
  // 删除选中
  DelMany = () => {
    console.log(1);
    this.props.DelMany()
  }
  // 删除所有
  DelAll = () => {
    this.props.DelAll()
  }

  // 去结算
  goto = (e) => {
    e.preventDefault();
    console.log(e.preventDefault());
  }
  render() {
    return (
      <div className="controls clearfix">
        <span href="javascript;:" alt="" className="del-all" onClick={() => this.DelMany()}>删除所选商品</span>
        <span href="javascript;:" alt="" className="clear" onClick={() => this.DelAll()}>清理购物车</span>
        <a href="javascript;:" alt="" className="pay"
          onClick={($event) => { this.goto($event)}}>去结算</a>
        <p>
          已经选中<span id="totalCount">{this.props.handleCom.CheCount}</span>件商品;
          总价：
          <span id="totalPrice" className="total-price">{this.props.handleCom.ChePrice}￥</span>
        </p>
      </div>
    )
  }
}
export default Botton