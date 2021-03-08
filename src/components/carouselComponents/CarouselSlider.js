import React, {useState} from 'react';
import SliderData from "./PlaceholderImages";
import style from "../../css/Carousel.module.css";

const CarouselSlider = () => {
const [current, setCurrent] = useState (0)
//const length = slides.length


  return (
    <div>
      <div id={style.circle}>
        <i id={style.arrowLeft}></i>
      </div>
      {SliderData.map((slide, index) => {
        return <img src={slide.image} alt="Placeholder car" />
      })}
      <div id={style.circle}>
        <i id={style.arrowRight}></i>
      </div>
    </div>
  );
};

export default CarouselSlider;






  