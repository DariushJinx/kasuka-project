import styles from "./Advertise.module.css";
import { advertiseData } from "../Data/Data";
import Image from "next/image";

export default function Advertise() {
  return (
    <div className="advertise my-5">
      <div className="container">
        <div className="row">
          <div className="advertise__image col-lg-6">
            <Image
              src="/images/jpeg/advertise.jpg"
              alt="advertise"
              width={636}
              height={477}
              quality={100}
              className="rounded-4 w-100"
            />
          </div>

          <div className="advertise__details col-lg-6 mt-sm-5 mt-lg-0 mt-xl-2W">
            <div className="row">
              {advertiseData.map((info) => (
                <div
                  className="advertise__details_item col-lg-12 d-flex align-items-center my-lg-4 mt-sm-3 mt-lg-3 mt-xl-4"
                  key={info.id}
                >
                  <div className="advertise__details_item_social ms-3">
                    <i
                      class={`${info.icon} ${styles.advertise__details_item_social_icon}`}
                    ></i>
                  </div>
                  <div className="advertise__details_item_desc">
                    <h3
                      className={`${styles.advertise__details_item_desc_title}`}
                    >
                      {info.title}
                    </h3>
                    <p className={`${styles.advertise__details_item_desc_par}`}>
                      {info.par}{" "}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
