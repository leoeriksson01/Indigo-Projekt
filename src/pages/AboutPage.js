import React from "react";
import style from "../css/AboutPage.module.css";
import aboutImage from "../assets/aboutimage.jpg";

function AboutPage(props) {
  return (
    <div id={style.aboutContainer}>
      <div>
        <img src={aboutImage} id={style.aboutImage} alt="Image of a car dealership."/>
      </div>
        <p>About me yo.</p>
    </div>
  )
}
export default AboutPage
