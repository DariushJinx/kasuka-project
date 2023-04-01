import styles from "./CategoryMenu.module.css";
import { useState } from "react";

export default function CategoryMenu({ categories, filterMenus }) {
  let [mainCategory, setMainCategory] = useState("همه");
  return (
    <div className="category text-center mt-5">
      {categories.map((category) => (
        <button
          type="button"
          className={
            category === mainCategory
              ? `${styles.category__btn} ${styles.active__click}`
              : `${styles.category__btn}`
          }
          onClick={() => {
            filterMenus(category);
            setMainCategory(category);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
