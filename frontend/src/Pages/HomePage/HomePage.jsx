import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HomePage.css";
import { Pagination, Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import {
  getL2Data,
  getL3Data,
  getL4Data,
  getL5Data,
  getL6Data,
  getL7Data,
} from "../../Redux/HomeReducer/homeAction";
import NavbarHeader from "../../Components/Navbar/NavbarHeader";
import Navbar from "../../Components/Navbar/Navbar";

const HomePage = () => {
  const productsL2 = useSelector((state) => state.homeReducer.productsL2);
  const productsL3 = useSelector((state) => state.homeReducer.productsL3);
  const productsL4 = useSelector((state) => state.homeReducer.productsL4);
  const productsL5 = useSelector((state) => state.homeReducer.productsL5);
  const productsL6 = useSelector((state) => state.homeReducer.productsL6);
  const productsL7 = useSelector((state) => state.homeReducer.productsL7);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productsL2.length === 0) {
      dispatch(getL2Data());
    }
    if (productsL3.length === 0) {
      dispatch(getL3Data());
    }
    if (productsL4.length === 0) {
      dispatch(getL4Data());
    }
    if (productsL5.length === 0) {
      dispatch(getL5Data());
    }
    if (productsL6.length === 0) {
      dispatch(getL6Data());
    }
    if (productsL7.length === 0) {
      dispatch(getL7Data());
    }
  }, []);

  return (
    <div>
      <NavbarHeader />
      <Navbar />
      <div id="line1">
        <div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <img
                src="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/10/original-0729-STDCRE-39435-DS-EF-Priority-August-Batch-SHOT24-HomePage_1920x700-050710.jpg"
                width={"200px"}
                height={"300px"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/13/original-Celebrate_Hair_1920x700_%282%29-051513.png"
                width={"200px"}
                height={"300px"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/09/original-0727-STDCRE-39121-DS-EF-August-Refer-A-Friend_%281%29-074809.png"
                width={"200px"}
                height={"300px"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <br />
        <br />
        <br />
      </div>
      <div id="line2">
        <h2 id="headingL2">Save with these SkinCeuticals Value Bundles</h2>
        <p id="paraL2">
          Enjoy savings on formulas that work together to help you achieve your
          skin goals.
        </p>
        <div style={{ display: "flex" }}>
          <div style={{ width: "45%" }}>
            <img
              style={{ marginLeft: "40px" }}
              src="https://static.thcdn.com/images/medium/webp/widgets/208-us/22/SkinC_Bundles-031222.png"
              width={"550px"}
              height={"450px"}
            />
          </div>
          <div style={{ width: "55%", height: "550px" }}>
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
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
              {productsL2.map((item) => {
                return (
                  <SwiperSlide style={{ direction: "vertical" }}>
                    <div key={item.id}>
                      <img
                        src={item.imageUrl}
                        width={"200px"}
                        height={"450px"}
                      />
                      <div id="TitleL2">{item.title}</div>
                      <div id="PriceL2">{item.Price}</div>
                      <button id="ButtonL2">Quick Buy</button>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <br />
        <br />
      </div>
      <br />
      <br />
      <div id="line3">
        <div>
          <h1 id="headingL3">Best Seller</h1>
          <Swiper
            slidesPerView={4}
            spaceBetween={5}
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
            {productsL3.map((item) => {
              return (
                <SwiperSlide style={{ direction: "vertical" }}>
                  <div key={item.id}>
                    <img src={item.imageUrl} width={"200px"} height={"250px"} />
                    <div id="TitleL2">{item.title}</div>
                    <div id="PriceL2">{item.Price}</div>
                    <button id="ButtonL2">Quick Buy</button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <br />
      <br />
      <div id="line4">
        <h2 id="headingL4">Buy One, Get One Free: RevitaLash Cosmetics</h2>
        <p id="paraL4">
          For a limited time, buy a full-size RevitaBrow Advanced & get a FREE
          RevitaLash 1.0 mL or buy a full size RevitaLash Advanced & get a FREE
          RevitaBrow Advanced 1.5 mL or a RevitaLash Advanced 1.0 mL.
        </p>
        <div style={{ display: "flex" }}>
          <div style={{ width: "45%" }}>
            <img
              style={{ marginLeft: "40px" }}
              src="https://static.thcdn.com/images/medium/webp/widgets/208-us/41/0801-STDCRE-39436-DS-JH-Aug_Batching_-_Second_Priority-Shot_17-HP_LPSQ_BANNER_676x556-050541.jpg"
              width={"550px"}
              height={"450px"}
            />
          </div>
          <div style={{ width: "55%", height: "550px" }}>
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
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
              {productsL4.map((item) => {
                return (
                  <SwiperSlide style={{ direction: "vertical" }}>
                    <div key={item.id}>
                      <img
                        src={item.imageUrl}
                        width={"200px"}
                        height={"450px"}
                      />
                      <div id="TitleL2">{item.title}</div>
                      <div id="PriceL2">{item.Rating}</div>
                      <div id="PriceL2">{item.Price}</div>
                      <button id="ButtonL2">Quick Buy</button>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <div id="line5">
        <div>
          <h1 id="headingL5">Shop By Category</h1>
          <div id="lin5Main" style={{ display: "flex" }}>
            {productsL5.map((item) => {
              return (
                <div key={item.id}>
                  <img src={item.imageUrl} width={"30%"} height={"75%"} />
                  <div id="TitleL2">{item.title}</div>
                  <div id="PriceL2">{item.detail}</div>``
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <br />
      <br />
      <div id="line6">
        <div>
          <h1 id="headingL6">New Arival</h1>
          <div>
            <Swiper
              slidesPerView={5}
              spaceBetween={5}
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
              {productsL6.map((item) => {
                return (
                  <SwiperSlide style={{ direction: "vertical" }}>
                    <div key={item.id}>
                      <img
                        src={item.imageUrl}
                        width={"200px"}
                        height={"250px"}
                      />
                      <div id="TitleL2">{item.title}</div>
                      <div id="TitleL2">{item.Rating}</div>
                      <div id="PriceL2">{item.Price}</div>
                      <button id="ButtonL2">Quick Buy</button>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div id="line7">
        <div>
          <h1 id="headingL7">Now Trending</h1>
          <div>
            <Swiper
              slidesPerView={4}
              spaceBetween={40}
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
              {productsL7.map((item) => {
                return (
                  <SwiperSlide style={{ direction: "vertical" }}>
                    <div key={item.id}>
                      <img
                        src={item.imageUrl}
                        width={"200px"}
                        height={"250px"}
                      />
                      <div id="TitleL2">{item.title}</div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>
        <h1 id="headingL8">Featured Brands</h1>
        <div
          id="line8"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/208-us/14/original-obagi_logo-105214.png"
            alt=""
            width={"150px"}
            height={"100px"}
          />
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/208-us/59/Skinc-014559.jpg"
            alt=""
            width={"200px"}
            height={"20px"}
          />
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/208-us/34/original-220322-ELTAMD-LOGO-RGB-01_%28002%29-014534.png"
            alt=""
            width={"180px"}
            height={"100px"}
          />
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/208-us/33/Untitled_design_%2814%29-033933.png"
            alt=""
            width={"190px"}
            height={"100px"}
          />
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/208-us/08/SkinMedica-014608.jpg"
            alt=""
            width={"180px"}
            height={"80px"}
          />
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/208-us/21/augustinusbader-124221.gif"
            alt=""
            width={"180px"}
            height={"80px"}
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div id="line9">
        <div>
          <video width={"100%"} height={"500px"} controls="controls">
            <source
              src="https://s1.thcdn.com/productvideo/12902717/dermstore_60sec_16x9_new.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <br />
        <br />
        <br />
        <div id="line10">
          <h1 id="headingL10">#MyDermstoreGlow</h1>
          <p id="paraL10" style={{ width: "90%", margin: "auto" }}>
            We care about what goes on your skin, because of what’s within. Our
            assortment is top-rated, curated & authenticated—bringing you the
            highest quality products and straight-from-the-experts info to help
            you navigate all things beauty and skin care. Join the conversation
            on Instagram with #MyDermstoreGlow—show us your favorite #Dermstore
            finds that help you care for the skin you’re in! We’re excited to
            feature our community’s must-haves all season long.
          </p>
          <br />
          <img
            src="https://static.thcdn.com/images/large/webp/widgets/208-us/06/original-6-055106.png"
            alt=""
            width={"100%"}
            height={"200px"}
          />
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default HomePage;
