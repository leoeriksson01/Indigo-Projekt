import React, {useState} from 'react';
import SliderData from "./PlaceholderImages";
import style from "../../css/Carousel.module.css";

const CarouselSlider = ( slides ) => {
const [current, setCurrent] = useState (0)
const length = slides.length


  return (
    <div id={style.slider}>
      <div id={style.circleLeft}>
        <i id={style.arrowLeft}></i>
      </div>
      <div id={style.circleRight}>
        <i id={style.arrowRight}></i>
      </div>
      {SliderData.map((slide, index) => {
        return <img src={slide.image} alt="Placeholder car" id={style.image} />
      })}
    </div>
  );
};

export default CarouselSlider;






  