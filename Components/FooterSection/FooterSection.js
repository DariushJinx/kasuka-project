import React from "react";
import styles from "./FooterSection.module.css";
import { contactData } from "../Data/Data";
import Image from "next/image";
import FooterItem from "../FooterItem/FooterItem";
import FooterItemLink from "../FooterItemLink/FooterItemLink";
export default function FooterSection() {
  return (
    <footer className={`${styles.footer} mt-5`}>
      <div className="container">
        <div className="row">
          <div className="footer__item col-xl-3 col-sm-6">
            <h3 className={`${styles.footer__item_title}`}>
              <Image
                src="/images/png/logo.png"
                width={70}
                height={70}
                quality={100}
                className="footer__item_title_icon"
              />
              Mine
            </h3>

            {contactData.map((data) => (
              <p className={`${styles.footer__item_par} d-flex align-items-center`}>
                <span className="footer__item_title">{data.title} : </span>
                <span className="footer__item_par"> {data.par}</span>
              </p>
            ))}

            <div className="footer__item_socials">
              <span className={`${styles.footer__item_socials_bg}`}>
                <i class="ri-twitter-line"></i>
              </span>
              <span className={`${styles.footer__item_socials_bg}`}>
                <i class="ri-facebook-fill"></i>
              </span>
              <span className={`${styles.footer__item_socials_bg}`}>
                <i class="ri-instagram-line"></i>
              </span>
              <span className={`${styles.footer__item_socials_bg}`}>
                <i class="ri-skype-line"></i>
              </span>
              <span className={`${styles.footer__item_socials_bg}`}>
                <i class="ri-linkedin-fill"></i>
              </span>
            </div>
          </div>

          <FooterItem title="لینک های مفید">
            <FooterItemLink link="خانه" />
            <FooterItemLink link="درباره ی ما" />
            <FooterItemLink link="خدمات" />
            <FooterItemLink link="شرایط استفاده از خدمات" />
            <FooterItemLink link="سیاست حفظ حریم خصوصی" />
          </FooterItem>

          <FooterItem title="خدمات ما">
            <FooterItemLink link="طراحی وب سایت" />
            <FooterItemLink link="توسعه وب" />
            <FooterItemLink link="مدیریت تولید" />
            <FooterItemLink link="ازار یابی" />
            <FooterItemLink link="طراحی گرافیک" />
          </FooterItem>

          
          <FooterItem title="خبرنامه ما">
            <p className={`${styles.footer__item_par}`}>
            با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد بود
            </p>
            <form className="footer__item_form pt-3">
                <div className="form-group">
                    <div className="input-group">
                        <input type="email" className="form-control shadow-none rounded-0 rounded-end" />
                        <button className="btn btn-warning footer__item_form_btn rounded-start rounded-0">
                            دنبال کردن
                        </button>
                    </div>
                </div>
            </form>
          </FooterItem>

          
        </div>
      </div>
    </footer>
  );
}
