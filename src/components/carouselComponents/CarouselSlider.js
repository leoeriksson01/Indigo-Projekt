import React from "react";
import style from "../../css/Carousel.module.css"
import SliderContent from "./SliderContent";

function CarouselSlider(props) {
    return (
      <div id={style.slider}>
        <SliderContent/>
      </div>
    )
  }
  export default CarouselSlider;





  //GLÖM EJ ATT LÄGGA TILLBAKA HOME.js-COMPONENTERNA EFTER ATT HA KOMMENTERAT UT DEM