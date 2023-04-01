import styles from "./Menu.module.css";
import { useState } from "react";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import {dataPortfolio} from "../Data/Data";
import MenuDetails from "../MenuDetails/MenuDetails";
import Title from "../Title/Title";
let allCategories = [
  "همه",
  ...new Set(dataPortfolio.map((menu) => menu.category)),
];

export default function Menu() {
  let [categories, setCategories] = useState(allCategories);
  let [allMenus,setAllMenu] = useState(dataPortfolio)

  let filterMenus = (category) => {
    if(category === 'همه'){
        setAllMenu(dataPortfolio)
        return
    }

    let filteredMenus = dataPortfolio.filter(data => data.category === category)

    setAllMenu(filteredMenus)

  }

  return (
    <div className="menu my-5">
      <div className="container">
        <div className="row">

        <Title title="خدمات" par="خدمات ما را بررسی کنید" />

          <CategoryMenu categories={categories} filterMenus={filterMenus} />
          <MenuDetails allMenus={allMenus} />
        </div>
      </div>
    </div>
  );
}
