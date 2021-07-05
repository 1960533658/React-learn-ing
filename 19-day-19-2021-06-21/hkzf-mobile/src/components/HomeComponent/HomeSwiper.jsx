import { useEffect, useState } from "react";
import { HomeAPI } from "../../api";
import { httpGet } from "../../utils/axios/https";
const [imgHeight, setImgHeight] = "176";
function HomeSwiper() {
  useEffect(() => {
  console.log(111);  
    getSwiperData()
  })
  const [swiperData,setSwiperData] = useState([])
  async function  getSwiperData() {
    const res = await httpGet(HomeAPI.swiper);
    console.log(res);
    if (res.status === 200) {
      setSwiperData(res.body)
    }
  }
  return swiperData.map(item => (
    <a
      key={item.id}
      href="http://www.czxy.com"
      style={{ display: 'inline-block', width: '100%', height: imgHeight }}
    >
      <img
        src={`http://localhost:8080${item.imgSrc}`}
        alt={item.alt}
        style={{ width: '100%', verticalAlign: 'top' }}
        onLoad={() => {
          window.dispatchEvent(new Event('resize'));
          setImgHeight('auto' );
        }}
      />
    </a>
  ))
}
export default HomeSwiper;