import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import banner from "../../../assets/images/Banner/amanwithfootbal.png";
import { Button, GetProps, Input } from "antd";
import "./module.banner.css";
type SearchProps = GetProps<typeof Input.Search>;

const Banner = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  const { Search } = Input;

  return (
    <div className="pt-4">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="relative">
            <div
              style={{ backgroundColor: " rgba(0, 0, 0, 0.9)" }}
              className="mask-backgorund bg-gray-500 opacity-70 z-10 inset-0 flex justify-center items-center absolute"
            >
              <div className="text-center pb-10 space-y-5">
                <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-5 ">
                  Booking Sport Venues Has Never Been Easier
                </h2>
                <Search
                  placeholder="input search text"
                  allowClear
                  enterButton="Search"
                  size="large"
                  onSearch={onSearch}
                  style={{
                  
                    paddingBottom: "10px",
                    color: "#FFA500",
                  }}
                  
                  className="w-[300px]  md:w-[400px]"
                />

                <Button
                  size="large"
                  style={{
                    backgroundColor: "#00725A", // Primary color for button
                    color: "#FFFFFF", // White text for contrast
                    borderColor: "#00725A",
                    width: "150px",
                  }}
                  className="block mx-auto"
                >
                  Book Now
                </Button>
              </div>
            </div>

            <img  className=" w-full h-[340px] object-cover md:object-fit md:h-full " src={banner} alt="A man who kicking the footbal " />
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
