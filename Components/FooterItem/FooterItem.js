import React from "react";
import styles from "./FooterItem.module.css";
import stylesFooterItem from "./FooterItem.module.css";
export default function FooterItem({ children, title }) {
  return (
    <div className="footer__item col-lg-3">
      <h5 className={`${stylesFooterItem.footer__item_title}`}>{title}</h5>
      {children}
    </div>
  );
}
