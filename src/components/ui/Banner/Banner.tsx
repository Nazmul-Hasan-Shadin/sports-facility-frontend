
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import banner from '../Banner/amanwithfootbal.png'

const Banner = () => {
  return (
    <div>
      <Swiper Pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
            <img src={banner} alt="" />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
