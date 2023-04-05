import React from "react";
import styles from "./FooterItem.module.css";
import stylesFooterItem from "./FooterItem.module.css";
export default function FooterItem({ children, title }) {
  return (
    <div className="footer__item col-xl-3 col-sm-6 mt-sm-5">
      <h5 className={`${stylesFooterItem.footer__item_title}`}>{title}</h5>
      {children}
    </div>
  );
}
