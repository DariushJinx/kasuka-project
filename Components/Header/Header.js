import { useState } from "react";
import TopBar from "../TopBar/TopBar";
import styles from "./Header.module.css";
import { dataHeaderBoxes } from "../Data/Data";

// let dataHeaderBoxes = [
//   { id: 1, icon: "ri-store-line", title: "متن نمایشی" },
//   { id: 2, icon: "ri-bar-chart-box-line", title: "نمودار کیفی" },
//   { id: 3, icon: "ri-calendar-todo-fill", title: "نمونه کارها" },
//   { id: 4, icon: "ri-paint-brush-line", title: "عملکردهای پایانی" },
//   { id: 5, icon: "ri-database-2-line", title: "اطلاعات ذخیره شده" },
// ];

export default function Header() {
  let [infos, setInfos] = useState(dataHeaderBoxes);
  return (
    <>
      <TopBar />

      <div
        className={`${styles.header_style} w-100 d-flex flex-column align-items-center justify-content-center text-center`}
      >
        <div className="header__top">
          <h1 className={`${styles.header__title}`}>
            راه حل های قدرتمند دیجیتال با
            <span className={`d-block ${styles.header__title_p2}`}>Kasuka</span>
          </h1>
          <p className={`${styles.header__par}`}>ما تیمی از بازاریابان با استعداد دیجیتال هستیم</p>
        </div>

        <div className="header__boxes mt-5">
          <div className="row">
            {infos.map((info) => (
              <div
                key={info.id}
                className={`${styles.header__boxes_item} mx-3 rounded-3 col-lg-2`}
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
    </>
  );
}
