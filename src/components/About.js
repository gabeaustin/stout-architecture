import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="display-3 mb-5 site-heading">About Us</div>

      <div className="about-cards-container row d-flex justify-content-md-around justify-content-lg-around justify-content-xl-around justify-content-sm-center">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title font-weight-bold site-heading hr-short">
              mission
            </h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut
              soluta, recusandae, laborum ipsum ea at assumenda magnam incidunt,
              dolores natus iure delectus enim sunt eius corporis fugit
              molestiae dolorum?
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title font-weight-bold site-heading hr-short">
              about
            </h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut
              soluta, recusandae, laborum ipsum ea at assumenda magnam incidunt,
              dolores natus iure delectus enim sunt eius corporis fugit
              molestiae dolorum?
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title font-weight-bold site-heading hr-short">
              services
            </h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut
              soluta, recusandae, laborum ipsum ea at assumenda magnam incidunt,
              dolores natus iure delectus enim sunt eius corporis fugit
              molestiae dolorum?
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
