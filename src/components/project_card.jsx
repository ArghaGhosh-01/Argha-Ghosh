import React from 'react';

function ProjectCard() {
  return (
    <div className=" w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="bg-opacity-50 backdrop-filter backdrop-blur-lg border border-white shadow-md rounded-lg p-6 card_glow">
        <h3 className="text-xl font-bold mb-2 text-center text-green-400">Project 1</h3>
        <p className="text-white mb-4 text-center">This is the first project description.</p>
        <div className="flex justify-center gap-2">
          <a href="https://example.com/project1" target="_blank" rel="noopener noreferrer" className="text-white bg-green-600 border border-green-600 p-2 rounded-md">View Code</a>
          <a href="https://example.com/project1" target="_blank" rel="noopener noreferrer" className="text-white bg-green-600 border border-green-600 p-2 rounded-md">Visit</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
