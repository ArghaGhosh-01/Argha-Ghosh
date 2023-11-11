import React from 'react';

function ProjectCard({name,description,link,view}) {
  return (
    <div className=" w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="bg-opacity-50 backdrop-filter backdrop-blur-lg border border-white shadow-md rounded-lg p-6 card_glow">
        <h3 className="text-xl font-mono font-bold mb-2 text-center text-gray-300">{name}</h3>
        <p className="text-white mb-4 text-center font-extralight text-sm">{description}</p>
        <div className="flex justify-center gap-2">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-white font-medium bg-green-600 border border-green-600 hover:bg-black hover:text-green-600  p-2 rounded-md ">Code</a>
          <a href={view} target="_blank" rel="noopener noreferrer" className="text-white font-medium bg-green-600 border border-green-600 hover:bg-black hover:text-green-600  p-2 rounded-md">Demo</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;