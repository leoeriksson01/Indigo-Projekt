import React, {useState} from 'react';
import SliderData from "./PlaceholderImages";

const CarouselSlider = () => {
const [current, setCurrent] = useState (0)
//const length = slides.length

  return (
    <div>
      {SliderData.map((slide, index) => {
        return <img src={slide.image} alt="Placeholder car" />
      })}
    </div>
  );
};

export default CarouselSlider;






  