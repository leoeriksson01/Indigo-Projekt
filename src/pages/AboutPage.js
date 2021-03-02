import React from "react";
import style from "../css/AboutPage.module.css";
import aboutImage from "../assets/aboutimage.jpg";

function AboutPage(props) {
  return (
    <div id={style.aboutContainer}>
      <div>
        <img src={aboutImage} id={style.aboutImage} alt="Image of a car dealership."/>
        <h1 id={style.heroText}>ABOUT BILGAGNAT</h1>
      </div>
      <div id={style.textContainer}>
        <h2 id={style.aboutHeading}>Who we are</h2>
      </div>
    </div>
  )
}
export default AboutPage
