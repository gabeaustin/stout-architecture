import React from "react";

const HomePage = () => {
  return (
    <div className="container">
      <div className="logo-container center-screen">
        <div className="co-name-home-page text-uppercase text-center site-heading">
          Stout
        </div>

        <div className="display-4 co-byline-name-home-page text-lowercase text-center">
          architecture
        </div>
      </div>

      <div className="tag-line d-flex justify-content-center mb-5">
        <p className="border-top border-bottom w-75 text-center mb-5">
          a birmingham-based architecture firm with experience in all aspects of
          architectural design, management, and construction administration.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
