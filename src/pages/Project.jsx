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
            <div className="hotelN">
              <h2 className="trans">Blue Ocean Hotel</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shop">
            <div className="hotelN">
              <h2 className="trans">Super Market</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="market">
            <div className="hotelN">
              <h2 className="trans">Book Shop</h2>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div>
        <button class="btn2">More</button>
      </div> */}
      </section>
      <div>
        <button class="btnMore">More</button>
      </div>
    </>
  );
};

export default Project;
