import React from "react";
import About_card from "./about_card";
import aboutData from "./data/aboutData";

function about() {
  return (
    <div className="bg-black backdrop-blur-lg shadow-md mb-4 rounded-lg lg:mx-96 mx-16 text-white border border-white">
      <div className="flex items-center justify-center text-xl font-mono font-bold text-white  mt-0 bg-slate-500 glow_card">
        <span className="w-3 h-3 bg-red-500 rounded-full absolute left-11"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full absolute left-16"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full absolute left-20"></span>
        ABOUT
      </div>
      <div className="my-6">
        {aboutData.map((data, index) => (
          <About_card key={index} cmd={data.cmd} description={data.description} />
        ))}
      </div>
    </div>
  );
}

export default about;
