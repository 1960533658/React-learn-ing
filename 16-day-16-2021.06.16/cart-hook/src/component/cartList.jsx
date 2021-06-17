const CartList = (props) => {
  // 删除事件吧删除的id传给父元素
  function handleAdd(id) {
    props.ChangeNum({
      type: "ADD",
      id: id
    })
  }
  function handleSub(id) {
    props.ChangeNum({
      type: "SUB",
      id: id
    })
  }
  function handleChange(e,id) {
    console.log(e.target.value, id);
    props.ChangeNum({
      type: "CHANGE",
      id: id,
      value: e.target.value
    })
  }
  function handleDel(id) {
    props.handleDel(id)
  }
  return (
    <div>
      {
        props.list.map(item => (
          <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="name">{item.name}</div>
            <div className="change">
              <a href="#!" onClick={() => handleSub(item.id)}>－</a>
              <input type="text" className="num" value={item.num} onChange={($event) => handleChange($event,item.id)}/>
              <a href="#!" onClick={() => handleAdd(item.id)}>＋</a>
            </div>
            <div className="del" onClick={() => handleDel(item.id)}>×</div>
          </div>
        ))
      }
    </div>
  )
}

export default CartList