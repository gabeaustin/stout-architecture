import React from "react";
import Image2 from "../images/construction-2.jpeg";
import Image3 from "../images/construction-3.jpeg";
import Carousel from "./Carousel";

const Projects = () => {
  return (
    <div className="container">
      <div className="carousel-container mb-5 mobile-view">
        <div className="mb-5 display-3 site-heading">Projects</div>
        <Carousel />
      </div>

      <div className="row mb-4 d-flex justify-content-md-around justify-content-lg-around justify-content-xl-around justify-content-sm-center">
        <div className="col-sm-12 site-heading h2">New Projects</div>
      </div>

      <div className="row d-flex justify-content-md-around justify-content-lg-around justify-content-xl-around justify-content-sm-center">
        <div className="new-projects">
          <div className="card border-0">
            <img
              src={Image3}
              className="card-img-top w-75 mx-auto"
              alt="Construction site"
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="new-projects">
          <div className="card border-0">
            <img
              src={Image2}
              className="card-img-top w-75 mx-auto"
              alt="Construction site"
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-md-around justify-content-lg-around justify-content-xl-around justify-content-sm-center">

      </div>
    </div>
  );
};

export default Projects;
