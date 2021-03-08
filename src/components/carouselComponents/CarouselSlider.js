import React, {useState} from 'react';
import SliderData from "./PlaceholderImages";
import style from "../../css/Carousel.module.css";

const CarouselSlider = ( {slides} ) => {
const [current, setCurrent] = useState (0)
const length = slides.length


const nextSlide = () => {
  console.log(length, current);
  setCurrent(current === length - 1 ? 0 : current + 1);
};

const prevSlide = () => {
  setCurrent(current === 0 ? length - 1 : current - 1);
};

if (!Array.isArray(slides) || slides.length <= 0) {
  return null;
}


  return (
    <div id={style.slider}>
     
      {SliderData.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}> 
            {index === current && (
              <div id={style.sliderContent}>
                <img src={slide.image} alt="Placeholder car" id={style.image} />
                <div>
                  {slide.name}
                  <br></br>
                  {slide.price}
                </div>
                <div id={style.circleLeft} onClick={prevSlide}>
                  <i id={style.arrowLeft}></i>
                </div>
                <div id={style.circleRight} onClick={nextSlide}>
                  <i id={style.arrowRight}></i>
                </div>
              </div>
            )}
          </div>
        ) 
      })}
    </div>
  );
};

export default CarouselSlider;






  