import React from "react";
import "./style.scss";
import Section from "../Shared/Section/Index";
import TechIcon from "../../images/tech-icons.png";
import CallToAction from "../Shared/CallToAction/Index";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Skills = () => {
  return (
    <Section background="dark" id="skills">
      <div className="skill-content-wrapper">
        <div className="left-col">
          <img src={TechIcon} alt="Not Found..." />
        </div>
        <div className="right-col">
          <h2>Skills</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            earum deserunt odit nulla dicta, necessitatibus ad quisquam
            eligendi, excepturi maiores fugiat aliquam laboriosam doloribus.
            Mollitia fugiat debitis beatae explicabo assumenda sint
            reprehenderit? Vel, quibusdam aut.
          </p>
          <CallToAction text="Download CV" icon={<AiOutlineCloudDownload />} />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
