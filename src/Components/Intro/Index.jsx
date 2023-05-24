import React from "react";
import "./style.scss";
import cloud from "../../images/cloud.png";
import cloudSoft from "../../images/cloud-soft.png";
import Navigation from "./navigation-bar";
import IntroContent from "./Intro-Content/Index";

const Intro = () => {
  return (
    <div className="Intro-section">
      <div className="vector-bg" id="parallax"></div>
      <img src={cloud} alt="Not found..." className="cloud" />
      <img src={cloudSoft} alt="Not found..." className="cloud-soft" />
      <div className="content">
        <Navigation />
        <IntroContent />
      </div>
    </div>
  );
};

export default Intro;
