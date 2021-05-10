import React from "react";
class Car extends React.Component {
  state = {
    id: "",
    name: '',
    keywords: '',
    brandList: [
      { id: 1, name: '奔驰', ctime: '2020/9/23' },
      { id: 2, name: '宝马', ctime: '2020/9/21' },
      { id: 3, name: '长安奔奔', ctime: '2014/6/23' },
      { id: 4, name: '千里马', ctime: '2020/5/3' }
    ]
  }

  // #region  添加功能
  getNow() {
    let time = '';
    let date = new Date()
    time += date.getFullYear() + '-';
    time += date.getMonth() + 1 + '-';
    time += date.getDate() + '-';
    time += date.getHours() + ':';
    time += date.getMinutes()
    return time
  }
  // 设置通过事件对象获取到的id
  handleChangeID = (e) => {
    this.setState({
      id: e.target.value
    })
  }
  // 设置通过事件对象获取到的name
  handleChangeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  // 添加数据方法
  handleAdd = () => {
    this.setState({
      brandList: [...this.state.brandList, {
        id: this.state.id,
        name: this.state.name,
        ctime: this.getNow()
      }]
    })
  }
  // #endRegion

  // #region  删除数据
  handleDel = (id) => {
    this.setState({
      brandList: this.state.brandList.filter(item => item.id !== id)
    })

  }
  // #endRegion

  // #region  搜索
  handleSearch = (e) => {
    this.setState({
      keywords: e.target.value
    })
    this.SearchList()
    console.log(this.state.keywords)
  }
  SearchList = () => {
    if (this.state.keywords) {
      console.log(this.state.keywords)
      const result = this.state.brandList.filter(item => {
        return item.name.includes(this.state.keywords)
      })
      console.log(result)
      return result
    } else {
      console.log(2)
      return this.state.brandList
    }
  }
  // #endRegion


  render() {
    return (
      <div id="app">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">添加品牌</h3>

          </div>
          <div className="panel-body">

            <div className="form-group form-inline">
              <div className="input-group">
                <div className="input-group-addon">编号</div>
                <input type="text" className="form-control" value={this.state.id} onChange={this.handleChangeID} />
              </div>

              <div className="input-group">
                <div className="input-group-addon">品牌名称</div>
                <input type="text" className="form-control" value={this.state.name} onChange={this.handleChangeName} />
              </div>

              <div className="input-group">
                <button className="btn btn-primary" onClick={this.handleAdd}>添加</button>
              </div>

              <div className="input-group pull-right">
                <div className="input-group-addon">按名称搜索{this.state.value}</div>
                <input type="text" className="form-control" value={this.state.keywords} onChange={this.handleSearch} />
              </div>
            </div>
          </div>


          {/* 表格区域 */}
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th>编号</th>
                <th>品牌名称</th>
                <th>添加时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {this.SearchList().map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.ctime}</td>
                  <td><a href="#" onClick={this.handleDel.bind(this, item.id)}>删除</a></td>
                </tr>
              ))

              }
            </tbody>
          </table>
        </div>
      </div>

    )
  }
}
export default Car;