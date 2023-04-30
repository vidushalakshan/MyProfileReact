import React from "react";
import "../styles/Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Project = () => {
  return (
    <>
      <h1 className="projectTitle">
        <dfn className="project">My Projects</dfn>
      </h1>
      <section className="section">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="swiperProject"
        >
          <SwiperSlide className="hotel">
            <div className="hotelN"><h2>Blue Ocean Hotel</h2></div>
          </SwiperSlide>
          <SwiperSlide className="shop">
            <div className="hotelN"><h2>Super Market</h2></div>
          </SwiperSlide>
          <SwiperSlide className="market">
            <div className="hotelN"><h2>Book Shop</h2></div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Project;
