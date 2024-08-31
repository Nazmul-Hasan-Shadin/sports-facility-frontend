import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import banner from "../../../assets/images/Banner/amanwithfootbal.png";
import { AutoComplete, AutoCompleteProps, Button, GetProps, Input } from "antd";
import "./module.banner.css";
import { useEffect, useState } from "react";
import { useLazyGetAllFacilityQuery } from "../../../redux/feature/facillity/facility.auth.api";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../../Container/Container";
import { TFacility } from "../../../types";
type SearchProps = GetProps<typeof Input.Search>;

const Banner = () => {
  const navigate = useNavigate();
  const [getFacilities, { data: featuredFacility, isLoading, isFetching }] =
    useLazyGetAllFacilityQuery();

  console.log(featuredFacility);

  const { Search } = Input;

  const [options, setOptions] = useState<AutoCompleteProps["options"]>([]);

  const handleSearch = (value:string) => {
    if (value) {
      getFacilities({ searchTerm: value, limit: 10, page: 1 });
    } else {
      setOptions([]);
    }
  };

  const onSearch: SearchProps["onSearch"] = (value) => {
    navigate("/offered", { state: { searchTerm: value } });
  };

  useEffect(() => {
    if (featuredFacility?.data) {
      const results = featuredFacility.data.map((facility:TFacility) => ({
        value: facility.name,
        label: (
          <div className="flex justify-between">
            <Link to={`/facility/${facility._id}`}>
              <span>{facility.name}</span>
            </Link>
          </div>
        ),
      }));
      setOptions(results);
    }
  }, [featuredFacility]);
  const onSelect = (value: string) => {
    console.log("onSelect", value);
  };

  return (
    <div className="pt-4">
      <Container>
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
                  <AutoComplete
                    popupMatchSelectWidth={252}
                    style={{ width: 300 }}
                    options={options}
                    onSelect={onSelect}
                    onSearch={handleSearch}
                    size="large"
                    
                  >
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
                  </AutoComplete>

                  <Link to={'/offered'}>
                    <Button
                      size="large"
                      style={{
                        backgroundColor: "#00725A", // Primary color for button
                        color: "#FFFFFF",
                        borderColor: "#00725A",
                        width: "150px",
                      }}
                      className="block mx-auto mt-4"
                    >
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>

              <img
                className=" w-full h-[340px] object-cover md:object-fit md:h-full "
                src={banner}
                alt="A man who kicking the footbal "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default Banner;
