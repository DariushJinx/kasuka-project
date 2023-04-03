import React from "react";
import styles from "./Testimonial.module.css";
import { testimonialData } from "../Data/Data";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";

export default function Testimonial() {
  return (
    <div className={`${styles.testimonial}`}>
      <div className="container">
        <div className="testimonial__details">
          <Swiper
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {testimonialData.map((data) => (
              <SwiperSlide className="my-5">
                {
                  <div className="testimonial__details_item">
                    <Image
                      src={data.img}
                      width={100}
                      height={50}
                      quality={100}
                      className={`${styles.testimonial__details_item_img} rounded-circle d-inline-block`}
                    />

                    <div className="testimonial__details_item_desc">
                      <h3
                        className={`${styles.testimonial__details_item_desc_name} my-3`}
                      >
                        {data.name}
                      </h3>

                      {data.position ? (
                        <p
                          className={`${styles.testimonial__details_item_desc_position_job}`}
                        >
                          <span className="testimonial__details_item_desc_position">
                            {data.position} :
                          </span>
                          <span className="testimonial__details_item_desc_job">
                            {" "}
                            {data.job}
                          </span>
                        </p>
                      ) : (
                        <p
                          className={`${styles.testimonial__details_item_desc_position_job}`}
                        >
                          <span className="testimonial__details_item_desc_job">
                            {data.job}
                          </span>
                        </p>
                      )}

                      <p
                        className={`${styles.testimonial__details_item_desc_par}`}
                      >
                        <i
                          class={`ri-double-quotes-l ${styles.testimonial__details_item_desc_par_icon}`}
                        ></i>
                        {data.par}
                        <i
                          class={`ri-double-quotes-r ${styles.testimonial__details_item_desc_par_icon}`}
                        ></i>
                      </p>
                    </div>
                  </div>
                }
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
