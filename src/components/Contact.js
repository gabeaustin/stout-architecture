import React from "react";

import OfficeBuilding1 from "../images/office-building-1.jpeg";
import OfficeBuilding2 from "../images/office-building-2.jpeg";
import BhamBuilding from "../images/office-building-3.jpeg";
import SoHoBuilding from "../images/office-building-4.jpeg";

const Contact = () => {
  return (
    <div className="container">
      <div className="display-3 mb-5 site-heading">Contact Us</div>
      <div className="row">
        {/* <div className="office-building-container col-md-6 border border-black">
          <div className="h3 mb-3 text-muted site-heading">New York Office</div>
        </div> */}
        <div className="col-md-2"></div>
        <div className="col-md-4 col-sm-6 mb-5">
          <div class="card border-0">
            <div className="h3 mb-3 text-muted site-heading">
              New York Office
            </div>
            <img
              src={SoHoBuilding}
              alt="New York Office"
              className="card-img-top"
            />
            <div class="card-body">
              <p className="h4 mt-3 card-text">
                1010 Broadway <br />
                Suite 405 <br />
                New York, NY 10003 <br />
                (917)987-6543
              </p>
            </div>
          </div>
        </div>

        {/* <div className="col-md-2"></div> */}
        <div className="col-md-4 col-sm-6 mb-5">
          <div class="card border-0">
            <div className="h3 mb-3 text-muted site-heading">
              Alabama Office
            </div>
            <img
              src={BhamBuilding}
              alt="Alabama Office"
              className="card-img-top"
            />
            <div class="card-body">
              <p className="h4 mt-3 pt-4">
                1234 8th Avenue North <br />
                Suite 200 <br />
                Birmingham, AL 35205 <br />
                (205)345-6789
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
