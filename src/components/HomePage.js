import React from "react";

const HomePage = () => {
  return (
    <div className="container">
      <div className="logo-container">
      <div className="co-name-home-page text-uppercase text-center site-heading">
        Stout
      </div>
      </div>

      <div className="display-4 co-byline-name-home-page text-lowercase text-center">
        architecture
      </div>
      <div className="row">
        <div className="tag-line d-flex justify-content-center">
          <p className="border w-75 text-center">
            a birmingham-based architecture firm with experience in all aspects
            of architectural design, management, and construction
            administration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
