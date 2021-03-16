import React from "react";
import style from "../css/Hero.module.css";
import heroImage from "../assets/hero-image.jpg";
import Carousel from "../components/carouselComponents/CarouselSlider";
import array from "../json/cars.json";

function HeroSection(props) {
    return (
      <div id={style.heroContainer}>
          {<img src={heroImage} id={style.heroImage} alt="Image of a landscape and road."/>}
          <div id={style.bannerOverlay}></div>
          <div id={style.carouselArea}>
            <Carousel cars={array} />
          </div>
      </div>
    )
  }
  export default HeroSection;