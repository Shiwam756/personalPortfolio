import React, { useState } from "react";
import "./style.scss";
import Section from "../Shared/Section/Index";
import Filters from "./Filters/Index";
import Showcase from "./Showcase/Index";

const projectsData = [
  {
    id: 1,
    name: "Healthy Food Restraunt",
    tags: ["web-app", "mobile-app"],
    media: {
      thumbnail: require("../../images/thumb-7.jpg"),
    },
  },
  {
    id: 2,
    name: "Anna & Daniel",
    tags: ["web-page"],
    media: {
      thumbnail: require("../../images/thumb-2.jpg"),
    },
  },
  {
    id: 3,
    name: "Web Design Landing Page",
    tags: ["web-page"],
    media: {
      thumbnail: require("../../images/thumb-8.jpg"),
    },
  },
  {
    id: 4,
    name: "Business Analytics Web App",
    tags: ["web-app", "mobile-app"],
    media: {
      thumbnail: require("../../images/thumb-1.jpg"),
    },
  },
  {
    id: 5,
    name: "Limitless",
    tags: ["web-app", "web-page"],
    media: {
      thumbnail: require("../../images/thumb-6.jpg"),
    },
  },
  {
    id: 6,
    name: "Dashboard",
    tags: ["product", "web-app", "mobile-app"],
    media: {
      thumbnail: require("../../images/thumb-4.jpg"),
    },
  },
  {
    id: 7,
    name: "Digital Creative Agency",
    tags: ["web-app"],
    media: {
      thumbnail: require("../../images/thumb-3.jpg"),
    },
  },
  {
    id: 8,
    name: "Virtual Reality Experience",
    tags: ["web-app", "mobile-app", "web-page"],
    media: {
      thumbnail: require("../../images/thumb-5.jpg"),
    },
  },
];

const Portfolio = () => {
  const [projects, setProjects] = useState(projectsData);
  const [transition, setTransition] = useState(false);

  const filterProjects = (tag) => {
    setTransition("zoomout");

    setTimeout(() => {
      if (tag !== "all") {
        const filteredProjects = projectsData.filter((f) =>
          f.tags.includes(tag)
        );
        setProjects(filteredProjects);
      } else {
        setProjects(projectsData);
      }
      setTransition("zoomin");
    }, 200);
    setTimeout(() => {
      setTransition(false);
    }, 600);
  };

  return (
    <Section id="portfolio" title="Check my Portfolio" background="light">
      <div className="portfolio-content-wrapper">
        <Filters filterProjects={(tag) => filterProjects(tag)} />
        <Showcase data={projects} transition={transition} />
      </div>
    </Section>
  );
};

export default Portfolio;
