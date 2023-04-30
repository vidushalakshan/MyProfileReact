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
            <div className="java"></div>
          </SwiperSlide>
          <SwiperSlide className="shop">
            <div className="java"></div>
          </SwiperSlide>
          <SwiperSlide className="market">
            <div className="java"></div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Project;
