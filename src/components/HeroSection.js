import React from "react";
import style from "../css/Hero.module.css";
import heroImage from "../assets/hero-image.jpg";

function HeroSection(props) {
    return (
      <div id={style.heroContainer}>
          Test
          {<img src={heroImage} id={style.heroImage} alt="Image of a landscape and road."/>}
      </div>
    )
  }
  export default HeroSection;