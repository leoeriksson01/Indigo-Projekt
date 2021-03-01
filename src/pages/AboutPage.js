import React from "react";
import aboutImage from "../assets/aboutimage.jpg";

function AboutPage(props) {
  return (
    <div className="about-container">
        <img src={aboutImage} alt="Image of a car dealership."/>
        <p>About me yo.</p>
    </div>
  )
}
export default AboutPage