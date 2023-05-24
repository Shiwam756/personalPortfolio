import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import "./style.scss";
import logo from "../../../images/logo.png";
import CallToAction from "../../Shared/CallToAction/Index";
import { scrollToSection } from "../../Utils/helpers";

const Navigation = () => {
  const [mobileMenu, setmobileMenu] = useState(false);

  const menuItemClickHandler = (section) => {
    setmobileMenu(!mobileMenu);
    scrollToSection(section);
  };
  return (
    <div className="top-navigation-bar">
      <div className="app-logo">
        <img src={logo} alt="Not Found..." />
      </div>
      <div className="mobile-menu" onClick={() => setmobileMenu(!mobileMenu)}>
        {mobileMenu ? (
          <IoMdClose size={24} color="#fff" />
        ) : (
          <CgMenuRight size={24} color="#fff" />
        )}
      </div>
      <div className={`navigation ${mobileMenu ? "active" : ""}`}>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("skills")}
        >
          Skills
        </span>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("portfolio")}
        >
          Portfolio
        </span>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("blogs")}
        >
          Blogs & Articles
        </span>
        <CallToAction
          text="Contact me"
          action={() => menuItemClickHandler("contact")}
        />
      </div>
    </div>
  );
};

export default Navigation;
