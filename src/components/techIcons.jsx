import React from "react";
import TechIconsSM from "./tech_icon_small";
import techIconsData from "./data/techIconsData";

const TechIcons = () => {
  return (
    <div className="flex flex-wrap items-center justify-center lg:mx-44 md:mx-6 sm:mx-6 my-8">
      {techIconsData.map((tech, index) => (
        <TechIconsSM key={index} image={tech.image} name={tech.name} />
      ))}
    </div>
  );
};

export default TechIcons;
