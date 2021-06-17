import { useState } from "react";
import CartTitle from "./component/CartTitle"
// CartList
import CartList from "./component/cartList"
// CartTotal组件
import CartTotal from "./component/CartTotal"
function App() {
  const [listState, setListState] = useState([
    {
      id: 1,
      name: 'TCL彩电',
      price: 1000,
      num: 1,
      img: 'img/a.jpg'
    },
    {
      id: 2,
      name: '机顶盒',
      price: 1000,
      num: 1,
      img: 'img/b.jpg'
    },
    {
      id: 3,
      name: '海尔冰箱',
      price: 1000,
      num: 1,
      img: 'img/c.jpg'
    },
    {
      id: 4,
      name: '小米手机',
      price: 1000,
      num: 1,
      img: 'img/d.jpg'
    },
    {
      id: 5,
      name: 'PPTV电视',
      price: 1000,
      num: 2,
      img: 'img/e.jpg'
    }
  ])
  const [nameState] = useState("kangkang")


  // #region  个数改变函数
  function ChangeNum(option) {
    switch (option.type) {
      // 个数增加
      case "ADD":
        setListState(prevState => {
          const list = prevState.map(item => {
            if (item.id === option.id) {
              console.log(item);
              return { ...item, num: item.num + 1 }
            } else {
              return item
            }
          })
          setListState(list)
        })
        break;
      // 个数减少
      case "SUB":
        setListState(prevState => {
          const list = prevState.map(item => {
            if (item.id === option.id) {
              console.log(item);
              return { ...item, num: item.num - 1 <= 0 ? 0 : item.num - 1 }
            } else {
              return item
            }
          })
          setListState(list)
        })
        break;
      // 之间改变数字
      case "CHANGE":
        
        console.log(option.value - 0);
        setListState(prevState => {
          const list = prevState.map(item => {
            if (item.id === option.id) {
              return { ...item, num: Number.parseInt(option.value) }
            } else {
              return item
            }
          })
          setListState(list)
        })
        break
      default:
    }
  }
  // #endRegion
  
  // #region  删除商品
  function handleDel(id) {
    setListState(prevState => {
      setListState(prevState.filter(item => item.id !== id))
    })
  }
  // #endRegion
  
  return (
    <div className="container">
      <div className="cart">
        <CartTitle name={nameState}></CartTitle>
        <CartList
          list={listState}
          setListState={setListState}
          ChangeNum={ChangeNum}
          handleDel={handleDel}
        ></CartList>
        <CartTotal list={listState}></CartTotal>
      </div>
    </div>
  )
}

export default App;