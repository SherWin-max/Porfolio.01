import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skils from "./components/Skils";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Skils />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
