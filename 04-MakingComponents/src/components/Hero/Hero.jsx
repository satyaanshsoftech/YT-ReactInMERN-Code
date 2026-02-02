import React from "react";
import heroImage from "../../assets/images/heroImage.png";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div>
        <div className="heroSection">
          <div className="heroText">
            <h3>Welcome to Our Channel</h3>
            <p>Go for Learning our free course on JavaScript and Reactjs.</p>
            <a href="https://www.satyaanshsoftech.com/courses/30_Javascript_2025">
              <button className="btn shopNowBtn">Course Here</button>
            </a>
          </div>

          <div className="heroImage">
            <img src={heroImage} alt="Hero Image" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Hero;
