import React from "react";
import ProjectCard from "./project_card";

function project() {
  return (
    <div className="mx-20 w-auto py-5">
      <h2 className="text-2xl font-bold mb-8 text-center text-white mx-10 mt-10 w-auto py-5">My Projects</h2>

      <div className="flex flex-wrap -mx-4 justify-center lg:mx-20 md:mx-4">
        <ProjectCard/>
      </div>
    </div>
  );
}


export default project