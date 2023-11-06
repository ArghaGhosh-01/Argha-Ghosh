import React from 'react';
import Card from "./skills_card";
import skillsData from "./data/skillsData";

function Skills() {
  return (
    <div className="mx-10 w-auto py-5 mt-28">
      <h2 className="text-2xl font-bold mb-4 flex justify-center text-white font-mono">SKILLS</h2>
      <span className="bg-green-400 rounded-full w-96 h-96 opacity-10 absolute -left-20 circle"></span>
      <span className="bg-green-400 rounded-full w-60 h-60 opacity-10 absolute -right-0 -top-28 circle"></span>
      <span className="bg-green-400 rounded-full w-96 h-96 opacity-10 absolute right-0 bottom-60 circle"></span>
      <div className="flex flex-wrap items-center justify-center ">
        {skillsData.map((data, index) => (
          <Card key={index} topic={data.topic} status={data.status} percentage={data.percentage} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
