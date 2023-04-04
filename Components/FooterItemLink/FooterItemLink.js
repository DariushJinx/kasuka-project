import React from 'react'
import styles from './FooterItemLink.module.css';
export default function FooterItemLink({link}) {
  return (
    <div className="footer__item_details">
            <a href="#" className={`${styles.footer__item_details_link} text-decoration-none mt-3 d-block`}>
            <i class="ri-arrow-left-s-line footer__item_details_link_icon ms-2 d-inline-block"></i>
            {link}
            </a>
        </div>
  )
}
