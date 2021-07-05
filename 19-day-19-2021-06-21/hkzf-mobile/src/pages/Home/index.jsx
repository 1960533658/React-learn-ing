import { Carousel, Flex, Grid } from "antd-mobile";
import React from "react";
// 导入封装axios方法
import { httpGet } from "../../utils/axios/https"
import Nav1 from "../../assets/images/nav-1.png";
import Nav2 from "../../assets/images/nav-2.png";
import Nav3 from "../../assets/images/nav-3.png";
import Nav4 from "../../assets/images/nav-4.png";
import { HomeAPI } from "../../api";
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
    // 轮播图数据
    swiperData: [],
    // 网络请求是否已经存在
    isFinite: false,
    // 租房小组数据
    groupsDate: []
  }
  // 异步方法获取图片数据
  componentDidMount() {
    // 获取轮播图数据
    this.getSwiperDate();
    // 获取租房小组数据
    this.getGropsData();
  }

  //#region  Home组件中所有获取数据的方法

  //#region  异步获取轮播图数据方法
  async getSwiperDate() {
    const res = await httpGet(HomeAPI.swiper);
    if (res.status === 200) {
      this.setState({
        swiperData: res.body,
        isFinite: true
      })
    }
  }
  //#endregion

  //#region  异步获取租房小组数据方法
  async getGropsData() {
    const res = await httpGet(HomeAPI.groups, { area: 'AREA%7C88cff55c-aaa4-e2e0' });
    if (res.status === 200) {
      console.log(res);
      this.setState({
        groupsDate: res.body
      })
    }
  }
  //#endregion

  //#endregion



  //# region  轮播图函数组件
  renderSwiper() {
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


  //#region  创建租房小组类组件
  renderGroups() {
    return (
      <>
        {/* 租房小组头部 */}
        <Flex className="group-title" justify="between">
          <h3>租房小组</h3>
          <span>更多</span>
        </Flex>
        {/* 租房小组内容 */}
        <Grid className="group-content"
          // 每个格子是否固定为正方形 默认为true
          square={false}
          // 是否有边框 默认为true
          hasLine={false}
          // 列数 默认为4
          columnNum={2}
          // 传入的菜单数据
          data={this.state.groupsDate}
          // 自定义每个 grid 条目的创建函数
          renderItem={item => (
            <Flex className="group-content-item" key={item.id} justify="between">
              <div className="group-content-font">
                <h3>{item.title}</h3>
                <span>{item.desc}</span>
              </div>
              <div className="group-content-img">
                <img src={`http://localhost:8080${item.imgSrc}`} alt="" />
              </div>
            </Flex>
          )}
        >

        </Grid>
      </>
    )
  }
  //#endregion

  render() {
    return (
      <div className="Home">
        {/* 轮播图 */}
        {
          this.state.isFinite ?
            <Carousel autoplay infinite>{this.renderSwiper()}</Carousel> : ("")
        }

        {/* 楼梯导航 */}
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

        {/* 租房小组 */}
        <div className="group">
          {console.log(this.state.groupsDate)}
          {this.renderGroups()}
        </div>
      </div>
    )
  }
}

export default Home;


