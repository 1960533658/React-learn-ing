import React from "react";

class CartList extends React.Component {
  // 删除事件吧删除的id传给父元素
  handleDel = (id) => {
    this.props.delItem(id)
  }

  // 数据数字改变方法
  handleChange = (id, e) => {
    console.log(id,e.target);
    this.props.changeItem({
      type: "change",
      id: id,
      num: e.target.value

    })
  }

  handleAdd = (id) => {
    console.log(222);
    this.props.changeItem({
      type: "add",
      id: id
    })
  }
  handleSub = (id) => {
    console.log(222);
    this.props.changeItem({
      type: "sub",
      id: id
    })
  }
  render() {

    return (
      <div>
        {
          this.props.list.map(item => (
            <div className="item" key={item.id}>
              <img src={item.img} alt="" />
              <div className="name">{item.name}</div>
              <div className="change">
                <a href="javascript;:" onClick={() => this.handleSub(item.id)}>－</a>
                <input type="text" className="num" value={item.num} onChange={ (e)=> this.handleChange(item.id,e) }/>
                <a href="#!" onClick={() => this.handleAdd(item.id)}>＋</a>
              </div>
              <div className="del" onClick={() => this.handleDel(item.id)}>×</div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default CartList