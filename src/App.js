import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Projects from "./components/Projects";
// import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <About />
      <Projects />
      {/* <Carousel /> */}
    </div>
  );
}

export default App;
