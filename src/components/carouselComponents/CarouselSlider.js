import React, {useState} from 'react';
import style from "../../css/Carousel.module.css";
import { NavLink } from "react-router-dom";

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
                      <p>15% sale!</p>
                    </div>
                  </div>
                  <div id={style.sliderProductInfo}>
                    <div>
                      <span id={style.boldText}>Car model: </span>{slide.make} {slide.model}
                      <br></br>
                      <span id={style.boldText}>Special price: </span> ${Number(slide.price).toLocaleString()}
                    </div>
                    <NavLink id={style.btnReadMore} exact to={`/car/${slide.vin}`}>
                      <span>Read more</span>
                    </NavLink>
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






  