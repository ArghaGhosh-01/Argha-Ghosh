




import React, { useState, useEffect, useRef } from "react";

function Card({ topic, status, percentage = 50 }) {
  const [isVisible, setVisible] = useState(false);
  const cardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });

    observer.observe(cardRef.current);
    return () => observer.unobserve(cardRef.current);
  }, []);

  return (
    <div ref={cardRef} className={`bg-opacity-50 backdrop-filter backdrop-blur-lg p-4 shadow-md rounded-lg border border-white mx-8 my-4 w-full md:w-1/2 lg:w-1/3 card_glow pointer-cursor ${isVisible ? 'fade-in' : 'fade-out'}`}>
     <h3 className="text-lg font-mono font-bold mb-2 text-white">{topic}</h3>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-medium inline-block py-1 px-2 uppercase rounded-full text-white bg-white-200 para">
              {status}
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-cyan-400">
              {percentage}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-transparent glow_skill">
          <div
            style={{ width: `${percentage}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-400 rounded-full glow_skill"
          ></div>
        </div>
      </div>
      {/* Rest of your code */}
    </div>
  );
}

export default Card;