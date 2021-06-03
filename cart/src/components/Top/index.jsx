import React from "react";
class Top extends React.Component {
  state = {
  }
  componentDidMount()  {
    console.log(this.props)
  }
  // #region  改变选择框状态
  handleItemFlag = (id) => {
    this.props.handleItemFlag(id)
  }

  handleAll = () => {
    console.log(2);
    this.props.handleAll()
  }
  // #endRegion
  
  
  // #region  增加和减少
  handelChange = (text,id,e) => {
    this.props.handelChange(text,id,e)
  }
  // #endRegion
  
  
  // #region  删除当前行
  Del = (id) => {
    this.props.DelOnce(id)
  }
  // #endRegion
  
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" id="all" checked={this.props.All} onChange={() => this.handleAll()}/>全选</th>
            <th>商品</th>
            <th>单价</th>
            <th>商品数量</th>
            <th>小计</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.CartList.map(item => (
              <tr key={item.id}>
                <td><input type="checkbox" checked={item.flag} onChange={() => this.handleItemFlag(item.id)}/></td>
                <td>
                  <img src={item.src} alt="" />
                  <p>{item.pName}</p>
                </td>
                <td>{item.price}</td>
                <td>
                  <div className="count-c clearfix">
                    <button href="javascript;:" className="reduce disabled" onClick={() => this.handelChange("miu", item.id)}>-</button>
                    <input type="text" value={item.count} onChange={(event) => this.handelChange("change", item.id, event) }/>
                    <button href="javascript;:" className="add" onClick={() => this.handelChange("push", item.id)}>+</button>
                  </div>
                </td>
                <td>{item.price * item.count}</td>
                <td>
                  <span href="javascript;:" alt="" className="del" onClick={() => { this.Del(item.id)}}>删除</span>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }
}
export default Top