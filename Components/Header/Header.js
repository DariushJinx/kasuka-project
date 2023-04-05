import { useState } from "react";
import TopBar from "../TopBar/TopBar";
import styles from "./Header.module.css";
import { dataHeaderBoxes } from "../Data/Data";


export default function Header() {
  let [infos, setInfos] = useState(dataHeaderBoxes);
  return (
    <div className={`${styles.header}`}>
      <TopBar />

      <div
        className={`${styles.header_style} w-100 text-center`}
      >
      
        <div className={`header__top`}>
          <h1 className={`${styles.header__title}`}>
            راه حل های قدرتمند دیجیتال با
            <span className={`d-block ${styles.header__title_p2}`}>Kasuka</span>
          </h1>
          <p className={`${styles.header__par}`}>ما تیمی از بازاریابان با استعداد دیجیتال هستیم</p>
        </div>

        <div className="header__boxes">
          <div className="row">
            {infos.map((info) => (
              <div
                key={info.id}
                className={`${styles.header__boxes_item} mx-lg-3 rounded-3 col-lg-2 col-md-6`}
              >
                <i class={`${info.icon} ${styles.header__boxes_item_icon}`}></i>

                <h3 className={`${styles.header__boxes_item_title}`}>
                  {info.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
