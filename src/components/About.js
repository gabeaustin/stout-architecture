import React from "react";
import People from "./People";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="display-3 mb-4 site-heading">About Us</div>
        <div className="row d-flex justify-content-md-around justify-content-lg-around justify-content-xl-around justify-content-sm-center">
          <div className="card about-pg-card">
            <div className="card-body">
              <h5 className="card-title font-weight-bold site-heading hr-short">
                mission
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut
                soluta, recusandae, laborum ipsum ea at assumenda magnam
                incidunt, dolores natus iure delectus enim sunt eius corporis
                fugit molestiae dolorum?
              </p>
            </div>
          </div>

          <div className="card about-pg-card">
            <div className="card-body">
              <h5 className="card-title font-weight-bold site-heading hr-short">
                services
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut
                soluta, recusandae, laborum ipsum ea at assumenda magnam
                incidunt, dolores natus iure delectus enim sunt eius corporis
                fugit molestiae dolorum?
              </p>
            </div>
          </div>
        </div> {/* this div ends the entire row */}
      </div>

      <People />
    </>
  );
};

export default About;
