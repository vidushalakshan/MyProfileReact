import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "../styles/Skils.css";
import "../pages/Data"
import myImage from "../assets/skils/333.png"
const Skils = () => {
  return (
    <>
      <h1 className="skilTitle">
        <dfn className="skil">Skils</dfn>
      </h1>

      {/* <section className="skills">
        <div className="divOne">
        <img alt="There was an error loading.." src={myImage}></img>
          <h2 class="skiltxt">Java</h2>
        </div>
        <div className="divTwo">
        <img alt="There was an error loading.." src={myImageOne}></img>
          <h2 class="skiltxt">MySql</h2>
        </div>
        <div>
        <img alt="There was an error loading.." src={myImageTwo}></img>
          <h2 class="skiltxt">Html</h2>
        </div>
        <div>
        <img alt="There was an error loading.." src={myImageThree}></img>
          <h2 class="skiltxt">Css</h2>
        </div>
      </section> 
      <section>
        
      </section> */}
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="swipers"
    >
      <SwiperSlide className="one"><div className="java">Java</div></SwiperSlide>
      <SwiperSlide className="two"><div className="java">MySql</div></SwiperSlide>
      <SwiperSlide className="three"><div className="java">HTML</div></SwiperSlide>
      <SwiperSlide className="four"><div className="java">CSS</div></SwiperSlide>
    </Swiper>
              
    </>
  );
};

export default Skils;
