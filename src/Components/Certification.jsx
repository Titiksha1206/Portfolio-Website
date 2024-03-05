import React from "react";
import "./Certification.css";
import { ImgData } from "./ImgData";

// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Certification = () => {
  return (
    <section className="certification container section" id="certification">
      <h2 className="section__title">Certifications</h2>
      {/* <span className="section__subtitle">My Personal Journey</span> */}

      <Swiper
        style={{
          "--swiper-pagination-color": "#71859f",
          "--swiper-pagination-bullet-inactive-color": "#E0E1DD",
          "--swiper-pagination-bullet-inactive-opacity": "1",
        }}
        modules={[Pagination, Autoplay]}
        // spaceBetween={15}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        breakpoints={{
          576: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        className="certification__container"
      >
        {ImgData.map(({ id, image, title }) => {
          return (
            <SwiperSlide className="certification_card" key={id}>
              <img src={image} alt="" className="certification_img" />
              <h3 className="certification_name">{title}</h3>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="separator"></div>
    </section>
  );
};

export default Certification;
