import React from "react";

import Person1 from "../images/people/person-1.jpeg";
import Person2 from "../images/people/person-2.jpeg";
import Person3 from "../images/people/person-3.jpeg";
import Person4 from "../images/people/person-4.jpeg";
import Person5 from "../images/people/person-5.jpeg";
import Person6 from "../images/people/person-6.jpeg";

const People = () => {
  return (
    <div className="container">
      <div className="display-4 mb-4 site-heading">People</div>

      <div className="row pt-3 top-row-people d-flex justify-content-md-around justify-content-lg-around justify-content-xl-around justify-content-sm-center">
        <div className="card people-pg-card border-0">
          <img
            src={Person1}
            class="card-img-top w-75 mx-auto"
            alt="people"
          ></img>
          <div className="card-body">
            <h3 className="card-title font-weight-bold site-heading hr-short">
              <span className="people-pg-first-name">first</span>
              <span className="people-pg-last-name">last</span>
            </h3>
            <div className="h5 hr-short-center">
              email: first.last@company.com <br />
              phone: (987) 654-3210
            </div>
            <p className="card-text h6 text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut
              soluta, recusandae, laborum ipsum ea at assumenda magnam incidunt,
              dolores natus iure delectus enim sunt eius corporis fugit
              molestiae dolorum?
            </p>
          </div>
        </div>

        <div className="card people-pg-card border-0">
          <img
            src={Person2}
            class="card-img-top w-75 mx-auto"
            alt="people"
          ></img>
          <div className="card-body">
            <h3 className="card-title font-weight-bold site-heading hr-short">
              <span className="people-pg-first-name">first</span>
              <span className="people-pg-last-name">last</span>
            </h3>
            <div className="h5 hr-short-center">
              email: first.last@company.com <br />
              phone: (987) 654-3210
            </div>
            <p className="card-text h6 text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut
              soluta, recusandae, laborum ipsum ea at assumenda magnam incidunt,
              dolores natus iure delectus enim sunt eius corporis fugit
              molestiae dolorum?
            </p>
          </div>
        </div>

        <div className="card people-pg-card border-0">
          <img
            src={Person3}
            class="card-img-top w-75 mx-auto"
            alt="people"
          ></img>
          <div className="card-body">
            <h3 className="card-title font-weight-bold site-heading hr-short">
              <span className="people-pg-first-name">first</span>
              <span className="people-pg-last-name">last</span>
            </h3>
            <div className="h5 hr-short-center">
              email: first.last@company.com <br />
              phone: (987) 654-3210
            </div>
            <p className="card-text h6 text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut
              soluta, recusandae, laborum ipsum ea at assumenda magnam incidunt,
              dolores natus iure delectus enim sunt eius corporis fugit
              molestiae dolorum?
            </p>
          </div>
        </div>
      </div>

      <div className="row pt-3 bottom-row-people d-flex justify-content-md-around justify-content-lg-around justify-content-xl-around justify-content-sm-center">
        <div className="card people-pg-card border-0">
          <img
            src={Person4}
            class="card-img-top w-75 mx-auto"
            alt="people"
          ></img>
          <div className="card-body">
            <h3 className="card-title font-weight-bold site-heading hr-short">
              <span className="people-pg-first-name">first</span>
              <span className="people-pg-last-name">last</span>
            </h3>
            <div className="h5 hr-short-center">
              email: first.last@company.com <br />
              phone: (987) 654-3210
            </div>
            <p className="card-text h6 text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut
              soluta, recusandae, laborum ipsum ea at assumenda magnam incidunt,
              dolores natus iure delectus enim sunt eius corporis fugit
              molestiae dolorum?
            </p>
          </div>
        </div>

        <div className="card people-pg-card border-0">
          <img
            src={Person5}
            class="card-img-top w-75 mx-auto"
            alt="people"
          ></img>
          <div className="card-body">
            <h3 className="card-title font-weight-bold site-heading hr-short">
              <span className="people-pg-first-name">first</span>
              <span className="people-pg-last-name">last</span>
            </h3>
            <div className="h5 hr-short-center">
              email: first.last@company.com <br />
              phone: (987) 654-3210
            </div>
            <p className="card-text h6 text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut
              soluta, recusandae, laborum ipsum ea at assumenda magnam incidunt,
              dolores natus iure delectus enim sunt eius corporis fugit
              molestiae dolorum?
            </p>
          </div>
        </div>

        <div className="card people-pg-card border-0">
          <img
            src={Person6}
            class="card-img-top w-75 mx-auto"
            alt="people"
          ></img>
          <div className="card-body" id="person6-card-body">
            <h3 className="card-title font-weight-bold site-heading hr-short">
              <span className="people-pg-first-name">first</span>
              <span className="people-pg-last-name">last</span>
            </h3>
            <div className="h5 hr-short-center">
              email: first.last@company.com <br />
              phone: (987) 654-3210
            </div>
            <p className="card-text h6 text-muted">
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

export default People;
