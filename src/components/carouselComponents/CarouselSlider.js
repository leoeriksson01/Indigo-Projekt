import React, {useState} from 'react';
import SliderData from "./PlaceholderImages";
import style from "../../css/Carousel.module.css";

const CarouselSlider = ( slides ) => {
const [current, setCurrent] = useState (0)
const length = slides.length

const nextSlide = () => {
  setCurrent(current === length - 1 ? 0 : current +1)
}

console.log(current);

if(!Array.isArray(slides) || slides.length <= 0) {
  return null;
}


  return (
    <div id={style.slider}>
      <div id={style.circleLeft}>
        <i id={style.arrowLeft}></i>
      </div>
      <div id={style.circleRight} onClick={nextSlide}>
        <i id={style.arrowRight}></i>
      </div>
      {SliderData.map((slide, index) => {
        return <img src={slide.image} alt="Placeholder car" id={style.image} />
      })}
    </div>
  );
};

export default CarouselSlider;






  