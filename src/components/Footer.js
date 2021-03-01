import React from "react";
import "./Footer.css";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Facebook } from "../assets/facebook.svg";

const Footer = () => {
  return (
    <div className="footer">
        <h2 className="headerText"> Our Socials </h2>
        <div className="container">
    

         <div className="logo-container">
          <a href="#">
            <Twitter className="logo" />
          </a>
          
        </div>

         <div className="logo-container">
          <a href="#">
            <Instagram className="logo" />
          </a>
        </div>

        <div className="logo-container">
          <a href="#">
            <Facebook className="logo" />
          </a>
        </div>

        </div>
     
      
    </div>
  );
};

export default Footer;
