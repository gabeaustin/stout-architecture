import React, { useState } from "react";
import "./Carousel.css";
import { images } from "./helpers/CarouselData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Carousel = () => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ backgroundImage: `url(${images[currentImg].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currentImg > 0 && setCurrentImg(currentImg - 1);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: 60 }} />
        </div>

        <div className="center text-white d-flex align-items-end lowercase">
          <div className="p-2 h5 title rounded-bottom">
            {images[currentImg].title}
          </div>
        </div>

        <div
          className="right"
          onClick={() => {
            currentImg < images.length - 1 && setCurrentImg(currentImg + 1);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 60 }} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
