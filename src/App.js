import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <About />
    </div>
  );
}

export default App;
