// eslint-disable-next-line
import React, { Fragment } from "react";
class Index extends React.Component {
  state = {
    count: 0,
    hero: [
      {
        id: 1,
        name: "兰陵王"
      },
      {
        id: 2,
        name: "李白"
      },
      {
        id: 3,
        name: "杜甫"
      }
    ]
  }
  render() {
    return (

      // 1. 直接使用碎片
      // <Fragment>
      //   <li>{this.state.hero[0].name}</li>
      //   <li>{this.state.hero[1].name}</li>
      //   <li>{this.state.hero[2].name}</li>
      // </Fragment>

      //2.
    //   <>
    //     <li>{this.state.hero[0].name}</li>
    //     <li>{this.state.hero[1].name}</li>
    //     <li>{this.state.hero[2].name}</li>
    //   </>

      // 3.
      <ul>
        {
          this.state.hero.map(item => (
            <React.Fragment key={item.id}>
              <li>{item.name}</li>
            </React.Fragment>
          ))
        }
      </ul>
    )
  }
}
// export default Index