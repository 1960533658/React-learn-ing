import { Carousel, Flex } from "antd-mobile";
import React from "react";
// 导入axios
import axios from "axios";
import Nav1 from "../../assets/images/nav-1.png";
import Nav2 from "../../assets/images/nav-2.png";
import Nav3 from "../../assets/images/nav-3.png";
import Nav4 from "../../assets/images/nav-4.png";
// 外部定义数据，当数据为固定时就可以在外部定义数据
const NavList = [
  { title: "整租", path: "/findhouse", imgSrc: Nav1 },
  { title: "合租", path: "/findhouse", imgSrc: Nav2 },
  { title: "地图找房", path: "/findhouse", imgSrc: Nav3 },
  { title: "去出租", path: "/findhouse", imgSrc: Nav4 }
]
class Home extends React.Component {
  state = {
    imgHeight: "176",
    swiperData: [],
    // 网络请求是否已经存在
    isFinite: false
  }
  // 异步方法获取图片数据
  componentDidMount() {
    let _this = this;
    axios.get("http://localhost:8080/home/swiper")
      .then(function (res) {
        if (res.data.status === 200) {

          _this.setState({
            swiperData: res.data.body,
            isFinite: true
          }, () => {
            console.log(_this.state.swiperData)
          })
        }
      })
  }
  
  //# region  轮播图函数组件
  getSwiper() {
    return this.state.swiperData.map(item => (
      <a
        key={item.id}
        href="http://www.czxy.com"
        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
      >
        <img
          src={`http://localhost:8080${item.imgSrc}`}
          alt={item.alt}
          style={{ width: '100%', verticalAlign: 'top' }}
          onLoad={() => {
            window.dispatchEvent(new Event('resize'));
            this.setState({ imgHeight: 'auto' });
          }}
        />
      </a>
    ))
  }
  //# endRegion
  
  render() {
    return (
      <div className="Home">
        {
          this.state.isFinite ?
            <Carousel autoplay infinite>{this.getSwiper()}</Carousel> : ("")
        }
        <Flex className="nav">
          {
            NavList.map((item, index) => (
              <Flex.Item key={index} onClick={() => { this.props.history.push(item.path); }}>
                <img src={item.imgSrc} alt="" />
                <p>{item.title}</p>
              </Flex.Item>
            ))
          }
        </Flex>
      </div>
    )
  }
}

export default Home;


