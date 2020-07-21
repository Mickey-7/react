// snipper : rafce
import React from "react";
// import css
import "./carousel.css";
import { Carousel } from "antd";

const CarouselComp = () => {
  return (
    <div>
      <h3 style={{ color: "white" }}>Scroll Automatically</h3>
      {/* implement autoplay property */}
      <Carousel autoplay>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>

      <h3 style={{ color: "white" }}>Fade in Automatically</h3>
      {/* implement autoplay 7 effect property */}
      <Carousel autoplay effect="fade">
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>

      <h3 style={{ color: "white" }}>Position</h3>
      {/* implement dotPosition & autoplay property */}
      <Carousel dotPosition="right" autoplay>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
