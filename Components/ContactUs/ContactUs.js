import React from "react";
import styles from "./ContactUs.module.css";
import Title from "../Title/Title";
import { contactData } from "../Data/Data";

export default function ContactUs() {
  return (
    <div className="contact py-5">
      <div className="container">
        <Title title="تماس با ما" par="با ما تماس بگیرید" />

        <div className="contact__details mt-5">
          <div className="row">

            <div className="contact__details_main col-lg-4">
              {contactData.map((data) => (
                <div className="contact__details_main_item d-flex align-items-center mb-3" key={data.id}>
                  <span
                    className={`${styles.contact__details_main_item_social} ms-2 rounded-2`}
                  >
                    <i
                      class={`${styles.contact__details_main_item_social_icon} ${data.icon}`}
                    ></i>
                  </span>
                  <div className="contact__details_main_item_desc">
                    <h5
                      className={`${styles.contact__details_main_item_desc_title}`}
                    >
                      {data.title} :
                    </h5>
                    <p
                      className={`${styles.contact__details_main_item_desc_details}`}
                    >
                      {data.par}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__details_form col-lg-8 text-center">
                <form className="contact__details_form_form">
                    <div className="form-group contact__details_form_group d-flex">

                        <div className="contact__details_form_group_item w-100 ms-2">
                        <input type="text" className="form-control  shadow-none" placeholder="نام" />
                        </div>
                        <div className="contact__details_form_group_item w-100 me-2">
                        <input type="email" className="form-control  shadow-none" placeholder="ایمیل" />
                        </div>

                    </div>

                    <div className="form-group contact__details_form_group my-4">
                        <input type="text" className="form-control  shadow-none" placeholder="عنوان" />
                    </div>

                    <div className="form-group contact__details_form_group">
                        <textarea name="contact_form" id="contact_form" cols="30" rows="5" className="form-control  shadow-none" placeholder="پیام"></textarea>
                    </div>

                    <button className="btn btn-warning mt-4">ارسال پیام</button>

                </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
