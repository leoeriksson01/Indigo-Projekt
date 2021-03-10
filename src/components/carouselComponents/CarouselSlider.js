import React, {useState} from 'react';
import style from "../../css/Carousel.module.css";

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
const CarouselContainer = ( {cars} ) => {
  let copy = [...cars]
  shuffle(copy)
  let slides = copy.slice(0, 5)
  return <CarouselSlider slides={slides}/>
}; 

const CarouselSlider = ( {slides} ) => {
const [current, setCurrent] = useState (0)
const length = slides.length


const nextSlide = () => {
  setCurrent(current === length - 1 ? 0 : current + 1);
};

const prevSlide = () => {
  setCurrent(current === 0 ? length - 1 : current - 1);
};

return (
  <div id={style.slider}>
    <h1 id={style.campaignHeader}>Cars on <span id={style.saleColor}>sale!</span></h1>
      <div id={style.mainContainer}>  
      <div id={style.circleLeft} onClick={prevSlide}>
          <i id={style.arrowLeft}></i>
        </div>  
        {slides.map((slide, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}> 
              {index === current && (
                <div id={style.sliderContent}>
                  <div id={style.imageContainer}>
                    <img
                      id={style.sliderImage}
                      src={`/assets/car-pictures/${slide.make}-${slide.model}-${slide.year}.jpg`}
                      alt="product"
                    />
                    <div id={style.campaignPercent}>
                      <p>10% sale!</p>
                    </div>
                  </div>
                  <div id={style.sliderProductInfo}>
                    Car model: {slide.make} {slide.model}
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

export default CarouselContainer;






  