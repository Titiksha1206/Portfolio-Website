import React, { useState, useEffect } from "react";
import { projectsData } from "./WorkData";
import { projectsNav } from "./WorkData";
import WorkItems from "./WorkItems";

const Works = () => {
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const handleClick = (e, index) => {
    setActive(index);
    const categoryName = e.target.textContent;
    if (categoryName === "All") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === categoryName;
      });
      setProjects(newProjects);
    }
  };

  return (
    <>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => handleClick(e, index)}
              className={`${active === index ? "active-work" : "work__item"} `}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItems key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default Works;
