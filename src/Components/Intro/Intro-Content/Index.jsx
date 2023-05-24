import React from "react";
import "./style.scss";
import hand from "../../../images/hand.png";
import CallToAction from "../../Shared/CallToAction/Index";
import girl from "../../../images/girl.png";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { scrollToSection } from "../../Utils/helpers";

const IntroContent = () => {
  return (
    <div className="intro-content">
      <div className="layout">
        <div className="left-col">
          <h1 className="title">
            <span className="small-text">
              <span className="text">Hello</span>
              <img className="icon" src={hand} alt="Not Found" />
              <span className="text">, I Am</span>
            </span>
            <span className="big-text">JS Dev Hindi</span>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            maxime repudiandae impedit distinctio officia saepe quam soluta
            exercitationem assumenda mollitia.
          </p>
          <CallToAction
            text="Contact me"
            action={() => scrollToSection("contact")}
          />
        </div>
        <div className="right-col">
          <img src={girl} alt="Not Found..." />
          <div className="highlights horizontal">
            <div className="icon">
              <BsAwardFill />
            </div>
            <div className="text">Best Design Award</div>
          </div>
          <div className="highlights vertical">
            <div className="icon">
              <FaUser />
            </div>
            <div className="text">
              <span>4k+</span>
              Happy Customers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
