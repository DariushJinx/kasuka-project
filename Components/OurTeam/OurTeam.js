import React from "react";
import styles from "./OurTeam.module.css";
import Title from "../Title/Title";
import Image from "next/image";
import { teamData } from "../Data/Data";
export default function OurTeam() {
  return (
    <div className="ourTeam my-5">
      <div className="container">
        <Title title="تیم" par="تیم ما را بررسی کنید" />

        <div className="ourTeam__items">
          <div className="row">
            {
                teamData.map(data => (
            <div className={`${styles.ourTeam__items_item} col-lg-3 mt-5 position-relative`}>

              <div className="ourTeam__items_item_details rounded-top rounded-bottom">
                <Image
                  src={data.img}
                  width={306}
                  height={306}
                  quality={100}
                  className="w-100 rounded-top"
                />

                <div className={`${styles.ourTeam__items_item_details_desc} py-4 px-3`}>
                  <h3 className={`${styles.ourTeam__items_item_details_name}`}>
                    {data.name}
                  </h3>

                  <span className={`${styles.ourTeam__items_item_details_job}`}>
                    {data.job}
                  </span>
                </div>
              </div>

              <div className={`${styles.ourTeam__items_item_details_overlay} position-absolute`}>
                <div className="container">
                  <div className="ourTeam__items_item_details_overlay_socials text-center d-flex align-items-center">
                    <span
                      className={`${styles.ourTeam__items_item_details_overlay_socials_bg} text-center mx-1`}
                    >
                      <i
                        class={`ri-twitter-line ${styles.ourTeam__items_item_details_overlay_socials_icon}`}
                      ></i>
                    </span>
                    <span
                      className={`${styles.ourTeam__items_item_details_overlay_socials_bg} text-center mx-1`}
                    >
                      <i
                        class={`ri-facebook-circle-line ${styles.ourTeam__items_item_details_overlay_socials_icon}`}
                      ></i>
                    </span>
                    <span
                      className={`${styles.ourTeam__items_item_details_overlay_socials_bg} text-center mx-1`}
                    >
                      <i
                        class={`ri-instagram-line ${styles.ourTeam__items_item_details_overlay_socials_icon}`}
                      ></i>
                    </span>
                    <span
                      className={`${styles.ourTeam__items_item_details_overlay_socials_bg} text-center mx-1`}
                    >
                      <i
                        class={`ri-linkedin-box-line ${styles.ourTeam__items_item_details_overlay_socials_icon}`}
                      ></i>
                    </span>
                  </div>
                </div>
              </div>

            </div>
                ))
            }

          </div>
        </div>
      </div>
    </div>
  );
}
