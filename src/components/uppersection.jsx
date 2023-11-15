



import React, { useState, useEffect, useRef } from "react";
import Illustration from "../assets/Photos/illu.png";
import Type from "./type";

function uppersection() {
  const [isVisible, setVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });

    observer.observe(sectionRef.current);
    return () => observer.unobserve(sectionRef.current);
  }, []);

  return (
    <div ref={sectionRef} id="home" className={`flex flex-wrap mx-10 my-8 gap-7 justify-center items-center ${isVisible ? 'fade-in' : 'fade-out'}`}>
     <div className="md:w-2/5 w-96 p-4 flex justify-center align-middle my-4 items-center text-white">
        <img  className="h-full illustration" src={Illustration} alt="Illustration" />
        <span className=" rounded-full w-44 h-44 opacity-10 absolute top-28 circle"></span>
      </div>
      <div className="w-full md:w-2/5 p-0 h-40 flex justify-center my-4 text-2xl">
        <div className="bg-opacity-50 backdrop-filter backdrop-blur-lg w-96">
          <div className="text-white flex justify-center font-light ">
            Hi there !
            <span className="wave-emoji wave ml-2" role="img">
  👋🏻
</span>
          </div>
          <div className="text-white font-light text-center">
            I'm{" "}
            <span className="text-green-500 ml-4 font-mono font-bold heading">
              ARGHA GHOSH
            </span>{" "}
          </div>
          <div className="text-green-500 flex justify-center text-xl font-mono font-bold type">
            <Type />
          </div>
          <div className="flex justify-center my-4">
            <a href="https://github.com/ArghaGhosh-01/Argha-Ghosh" target="blank" className="pointer-cursor text-white text-xs font-semibold mx-3 p-2 button_visit">
              Visit Github
            </a>
            <a href="" target="blank" className="pointer-cursor text-white text-xs font-semibold mx-3 p-2 button_visit">
              View Resume
            </a>
          </div>
        </div>
      </div>
      {/* Rest of your code */}
    </div>
  );
}

export default uppersection;