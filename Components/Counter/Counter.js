import React from "react";
import styles from "./Counter.module.css";
import Image from "next/image";
import { counterData } from "../Data/Data";
import Countes from "../Countes/Countes";

export default function Counter() {
  return (
    <div className="counter py-5">
      <div className="container">
        <div className="row">
          <div className="counter__image col-lg-6">
            <Image
              src="/images/jpeg/counts-img.jpg"
              width={800}
              height={400}
              quality={100}
              className="w-100 rounded-3"
            />
          </div>

          <div className="counter__desc col-lg-6 mt-sm-5 mt-lg-0">
            <h3 className={`${styles.counter__desc_title}`}>
              شایسته ترین لذت را به هر حال ارائه می دهد
            </h3>

            <p className={`${styles.counter__desc_par}`}>
              خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما
              من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود.
              درد مقصر است
            </p>

            <div className="counter__desc_details">
              <div className="counter__desc_items">
                <div className="row">
                  {counterData.map((data) => (
                    <div
                      className="counter__desc_items_details col-lg-6"
                      key={data.id}
                    >
                      <div className="counter__desc_items_details_social d-flex align-items-center">
                        <i
                          class={`${data.icon} ${styles.counter__desc_items_details_social_icon} ms-3`}
                        ></i>
                        <Countes count={data.num} />
                      </div>

                      <p
                        className={`${styles.counter__desc_items_details_par}`}
                      >
                        {data.par}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
