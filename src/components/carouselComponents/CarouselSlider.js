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
    <h1 id={style.campaignHeader}>Cars on <span id={style.saleColor}>sale!</span></h1>
      <div id={style.mainContainer}>  
      <div id={style.circleLeft} onClick={prevSlide}>
          <i id={style.arrowLeft}></i>
        </div>  
        {SliderData.map((slide, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}> 
              {index === current && (
                <div id={style.sliderContent}>
                  <div id={style.imageContainer}>
                    <img src={slide.image} alt="Placeholder car" id={style.sliderImage} />
                    <div id={style.campaignPercent}>
                      <p>10% sale!</p>
                    </div>
                  </div>
                  <div id={style.sliderProductInfo}>
                    Car model: {slide.name}
                    <br></br>
                    Special price: {slide.price} :-
                    <button id={style.btnReadMore}>Read more &raquo;</button>
                  </div>
                </div>
              )}
            </div>
          ) 
        })}
        <div id={style.circleRight} onClick={nextSlide}>
          <i id={style.arrowRight}></i>
        </div>
  </div>
  </div>
);
};

export default CarouselSlider;






  