import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import About from "./components/About";
// import Projects from "./components/Projects";
// import Projects2 from "./components/Carousel";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <HomePage />
      <About /> */}
      {/* <Projects /> */}
      {/* <Projects2 /> */}
      {/* <Carousel /> */}
      <Carousel />
    </div>
  );
}

export default App;
