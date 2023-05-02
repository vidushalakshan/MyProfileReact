import React from "react";
import "../styles/Service.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Service = () => {
  return (
    <>
      <h1 className="serviceTitle">
        <dfn className="service">My Service</dfn>
      </h1>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="serviceOne"
      >
        <SwiperSlide className="ones">
          <div className="javas"><h2 className="serName">Mobile App Design</h2></div>
        </SwiperSlide>
        <SwiperSlide className="twos">
          <div className="javas"><h2 className="serName">Mobile App Development</h2></div>
        </SwiperSlide>
        <SwiperSlide className="threes">
          <div className="javas"><h2 className="serName">UI/UX Design</h2></div>
        </SwiperSlide>
      </Swiper>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="serviceTwo"
      >
        <SwiperSlide className="fours">
          <div className="javas"><h2 className="serName">Web Design</h2></div>
        </SwiperSlide>
        <SwiperSlide className="fives">
          <div className="javas"><h2 className="serName">Web Development</h2></div>
        </SwiperSlide>
        <SwiperSlide className="sixs">
          <div className="javas"><h2 className="serName">Standalone App Development</h2></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Service;
