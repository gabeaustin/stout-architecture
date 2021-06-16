import React from "react";
import FeatureImage from "../images/construction-1-feat.jpeg";
import Image2 from "../images/construction-2.jpeg";
import Image3 from "../images/construction-3.jpeg";

const Projects = () => {
  return (
    <div className="container">
      <div className="feature-image-container">
        <img
          src={FeatureImage}
          alt="Construction project"
          className="rounded mx-auto d-block feature-project w-50 img-fluid"
        />
      </div>

      <div className="row">
        <div className="col-sm-12 site-heading h2 border-bottom">
          Featured Project
        </div>
      </div>

      <div className="row">
        <div className="feature-image-content col-sm-9 h4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
          ipsam, deleniti illum molestiae corporis omnis, voluptatum, aspernatur
          commodi deserunt dolorem alias. Quasi consequatur hic magni iusto
          culpa tempora omnis placeat.
        </div>
        <div className="feature-image-content-cta col-sm-3 text-muted h4">
          Learn More
        </div>
      </div>

      <div className="row d-flex justify-content-md-around justify-content-lg-around justify-content-xl-around justify-content-sm-center">
        <div className="col-sm-12 site-heading h2 border-bottom">
          New Projects
        </div>
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
      </div>
    </div>
  );
};

export default Projects;
