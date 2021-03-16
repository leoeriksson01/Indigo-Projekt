import React from "react";
import style from "../css/Hero.module.css";
import heroImage from "../assets/hero-image.jpg";

function HeroSection(props) {
    return (
      <div id={style.heroContainer}>
          {<img src={heroImage} id={style.heroImage} alt="Image of a landscape and road."/>}
          <div id={style.bannerOverlay}></div>
          <div id={style.carouselArea}>Placeholder</div>
      </div>
    )
  }
  export default HeroSection;