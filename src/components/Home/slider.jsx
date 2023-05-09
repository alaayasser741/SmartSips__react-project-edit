import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./home.css";
import SwiperCore,{
    EffectCoverflow,
    Pagination,
    Navigation
}from "swiper/core";
SwiperCore.use([EffectCoverflow,Pagination,Navigation]);

const Slider = () => {
    return (
    <div className="Slider_container">
      <Swiper
      navigation={true}
      effect={"coverflow"}
      centeredSlides={true}
      slidesPerView={window.innerWidth<768 ? 1:"auto"}
      loop={true}
      coverflowEffect={{
        rotate:50,
        stretch:0,
        depth:100,
        modifier:1,
        slideShadows:true
      }}
      pagination={{
        clickable:true,
      }}
      className="mySwiper"
      >
       <SwiperSlide><img src="./images/pexels-karolina-grabowska-4750273.jpg" alt="waterImages"/></SwiperSlide>
       <SwiperSlide><img src="./images/pexels-ketut-subiyanto-4474062.jpg" alt="waterImages"/></SwiperSlide>
       <SwiperSlide><img src="./images/pexels-pixabay-279947.jpg" alt="waterImages"/></SwiperSlide>
      </Swiper>
    </div> );
}
 
export default Slider;