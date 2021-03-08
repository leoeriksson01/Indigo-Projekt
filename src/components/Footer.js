import React from "react";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Phone } from "../assets/phone.svg";
import { ReactComponent as Mail } from "../assets/mail.svg";
import style from "../css/Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className={style.footer}>
      <h2 className={style.headerText}> Our Socials </h2>
      <div className={style.contactContainer}>
        <div className={style.container}>
          <div className={style.logo_container}>
            <NavLink className={style.a} exact to="/">
              <Twitter className={style.logo} />
            </NavLink>
          </div>

          <div className={style.logo_container}>
            <NavLink className={style.a} exact to="#">
              <Instagram className={style.logo} />
            </NavLink>
          </div>

          <div className={style.logo_container}>
            <NavLink className={style.a} exact to="#">
              <Facebook className={style.logo} />
            </NavLink>
          </div>
        </div>
        <div className={style.contact}>
          <NavLink className={style.a} exact to="#">
            <Phone className={style.contactLogo} />
            +070 531 20 90
          </NavLink>
          <NavLink className={style.a} exact to="#">
            <Mail className={style.contactLogo} />
            Bilgagnat@contact.com
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
