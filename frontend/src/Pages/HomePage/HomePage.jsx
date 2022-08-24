import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HomePage.css";
import { Pagination, Navigation } from "swiper";
import { HomePageL2 } from "../../Data/HomePageL2";

const HomePage = () => {
  console.log(HomePageL2);
  return (
    <div>
      <div id="line1">
        <div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <img
                src="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/10/original-0729-STDCRE-39435-DS-EF-Priority-August-Batch-SHOT24-HomePage_1920x700-050710.jpg"
                alt=""
                width={"200px"}
                height={"300px"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/13/original-Celebrate_Hair_1920x700_%282%29-051513.png"
                alt=""
                width={"200px"}
                height={"300px"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/09/original-0727-STDCRE-39121-DS-EF-August-Refer-A-Friend_%281%29-074809.png"
                alt=""
                width={"200px"}
                height={"300px"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <br />
        <h2>Save with these SkinCeuticals Value Bundles</h2>
        <p>
          Enjoy savings on formulas that work together to help you achieve your
          skin goals.
        </p>
      </div>
      <div id="line2">
        <div style={{ display: "flex" }}>
          <div style={{ width: "45%" }}>
            <img
              src="https://static.thcdn.com/images/medium/webp/widgets/208-us/22/SkinC_Bundles-031222.png"
              alt=""
              width={"550px"}
              height={"450px"}
            />
          </div>
          <div style={{ width: "55%" }}>
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {HomePageL2.map((item) => {
                return (
                  <SwiperSlide style={{ direction: "vertical" }}>
                    <div>
                      <img
                        src={item.imageUrl}
                        alt=""
                        width={"200px"}
                        height={"450px"}
                      />
                      <div>{item.title}</div>
                      <div>{item.Price}</div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default HomePage;
