import React from "react";
import ProjectCard from "./project_card";
import projectData from "./data/projectData";

function Project() {
  return (
    <div className="w-auto mx-20 py-5">
  <h2 className="text-2xl font-sans font-bold mb-8 text-center text-white mx-10 mt-10 w-auto py-2 heading">PROJECTS</h2>

  <div className="flex flex-wrap items-center justify-center">
    {projectData.map((data, index) => (
      <ProjectCard
        key={index}
        name={data.name}
        description={data.description}
        link={data.link}
        view={data.view}
      />
    ))}
  </div>
</div>
  );
}

export default Project;