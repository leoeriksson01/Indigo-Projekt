import React from "react";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Phone } from "../assets/phone.svg";
import { ReactComponent as Mail } from "../assets/mail.svg";
import style from "../css/Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <h2 className={style.headerText}> Our Socials </h2>
      <div className={style.contactContainer}>
        <div className={style.container}>
          <div className={style.logo_container}>
            <a href="#">
              <Twitter className={style.logo} />
            </a>
          </div>

          <div className={style.logo_container}>
            <a href="#">
              <Instagram className={style.logo} />
            </a>
          </div>

          <div className={style.logo_container}>
            <a href="#">
              <Facebook className={style.logo} />
            </a>
          </div>
        </div>
        <div className={style.contact}>
          <a href="#">
            <Phone className={style.contactLogo} />
            +070 531 20 90
          </a>
          <a href="#">
            <Mail className={style.contactLogo} />
            Bilgagnat@contact.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
