import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { aboutSliderData } from "../Data/Data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import styles from "./AboutUsSlider.module.css";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper";
import Image from "next/image";

export default function AboutUsSlider() {
  return (
    <>
      <div className="container">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          {aboutSliderData.map((info) => (
            <SwiperSlide className="mb-5">
              <Image
                key={info.id}
                src={info.img}
                className={`${styles.swiper__img}`}
                alt="client"
                width={150}
                height={0}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
