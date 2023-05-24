import React from "react";
import "./style.scss";
import Arrow from "../../Shared/Arrow/Index";

const Showcase = ({ data, transition }) => {
  return (
    <div className="projects-showcase">
      {data.map((project) => {
        return (
          <div
            key={project.name}
            className={`showcase-item ${
              transition === "zoomout"
                ? "zoomOut"
                : transition === "zoomin"
                ? "zommIn"
                : ""
            }`}
          >
            <div className="meta-content">
              <h3>{project.name}</h3>
              <div className="go-to-cta">
                <span className="text">Project Details</span>
                <Arrow />
              </div>
            </div>
            <img src={project.media.thumbnail} alt="Not Found..." />
          </div>
        );
      })}
    </div>
  );
};

export default Showcase;
