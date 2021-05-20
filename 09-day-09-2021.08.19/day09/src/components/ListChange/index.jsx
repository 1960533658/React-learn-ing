import React from "react";
import {CSSTransition,TransitionGroup}  from "react-transition-group";
import "./index.css"
class Index extends React.Component {
  state = {
    heroList: [{
      id: 1,
      name: "李元芳"
    },
    {
      id: 2,
      name: "小乔"
    },
    {
      id: 3,
      name: "吕布"
      }]
    }
    handleRemove = (id) => {
      this.setState({
        heroList: this.state.heroList.filter(item => item.id !== id)
      })
  }
  add = () => {
    this.setState({
      heroList: [...this.state.heroList,{id: this.state.heroList.length+1, name: "康康"}]

    })
  } 
  render() {
    return (
      <div>
        <ul>
          <TransitionGroup>
            {
              this.state.heroList.map(item => (
                <CSSTransition key={item.id} classNames="lsit" timeout={3000}>
                  <li onClick={() => this.handleRemove(item.id)}>{item.name}</li>
                </CSSTransition>
              ))
            }
          </TransitionGroup>
        </ul>
        <button onClick={this.add}>增加</button>
      </div>
    )
  }
}
export default Index