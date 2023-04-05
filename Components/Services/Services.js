import Title from "../Title/Title";
import { servicesData } from "../Data/Data";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <div className="services my-5">
      <div className="container">
        <div className="row">
          <Title title="خدمات" par="خدمات ما را بررسی کنید" />

          <div className="services__items mt-5">
            <div className="row">
              {servicesData.map((info) => (
                <div
                  className="services__items_item mt-4 col-lg-4 col-md-6"
                  key={info.id}
                >
                  <div
                    className={`${styles.services__items_item_details} text-center rounded-4`}
                  >
                    <span
                      className={`${styles.services__items_item_details_social} d-inline-block rounded-3`}
                    >
                      <i
                        class={`${info.icon} ${styles.services__items_item_details_social_icon} `}
                      ></i>
                    </span>

                    <h5
                      className={`${styles.services__items_item_details_title} my-2`}
                    >
                      {info.title}
                    </h5>
                    <p
                      className={`${styles.services__items_item_details_par} pt-2`}
                    >
                      {info.par}
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
