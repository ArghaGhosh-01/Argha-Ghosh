import React, { useState, useEffect, useRef } from "react";
import About_card from "./about_card";
import aboutData from "./data/aboutData";

function about() {
  const [isVisible, setVisible] = useState(false);
  const aboutRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });

    observer.observe(aboutRef.current);
    return () => observer.unobserve(aboutRef.current);
  }, []);

  return (
    <div ref={aboutRef} className={`card-hover backdrop-blur-lg shadow-md mb-4 rounded-lg lg:mx-60 my-20 mx-16 text-white card_glow ${isVisible ? 'fade-in' : 'fade-out'}`}>
    <div className="flex items-center justify-center text-xl font-mono font-bold text-white  mt-0 bg-slate-500 glow_card  rounded-tl-lg rounded-tr-lg rounded-br-md  rounded-bl-md">
        <span  className="w-3 h-3 bg-red-500 rounded-full absolute left-4"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full absolute left-8"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full absolute left-12"></span>
        <span id="about" className="relative right-0 heading">ABOUT ME</span>
      </div>
      <div  className="my-6">
        {aboutData.map((data, index) => (
          <About_card key={index} cmd={data.cmd} description={data.description} />
        ))}
      </div>
      {/* Rest of your code */}
    </div>
  );
}

export default about;