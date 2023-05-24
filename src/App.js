import React from "react";
import "./app.scss";
import Intro from "./Components/Intro/Index";
import Skills from "./Components/Skills/Index";
import Portfolio from "./Components/Portfolio/Index";
import Blogs from "./Components/Blogs/Index";
import Contact from "./Components/Contact/Index";
import Footer from "./Components/Footer/Index";

const App = () => {
  return (
    <p>
      <Intro />
      <Skills />
      <Portfolio />
      <Blogs />
      <Contact />
      <Footer />
    </p>
  );
};

export default App;
