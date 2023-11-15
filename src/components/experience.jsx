import React, { useState, useEffect, useRef } from "react";

function experience() {
  const [isVisible, setVisible] = useState(false);
  const experienceRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });

    observer.observe(experienceRef.current);
    return () => observer.unobserve(experienceRef.current);
  }, []);

  return (
    <div ref={experienceRef} className={`w-auto mx-16 py-5 mt-28 ${isVisible ? 'fade-in' : 'fade-out'}`}>
     <h2 id="experience" className="text-2xl font-bold mb-4 flex justify-center text-white font-sans heading "> 
        EXPERIENCES
      </h2>
      <div className="flex justify-center items-center">
      <div className=" glow w-1 h-52 line"></div>
      <svg className="glow" width="117" height="18" viewBox="0 0 117 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M117.004 9C117.004 4.58172 113.422 1 109.004 1C104.585 1 101.004 4.58172 101.004 9C101.004 13.4183 104.585 17 109.004 17C113.422 17 117.004 13.4183 117.004 9ZM15 7.5L-2.28882e-05 0.339746V17.6603L15 10.5V7.5ZM109.004 7.5L13.5 7.5V10.5L109.004 10.5V7.5Z" fill="url(#paint0_linear_32_79)"/>
  <defs>
    <linearGradient id="paint0_linear_32_79" x1="-4.0372" y1="8.99824" x2="233.483" y2="9.00516" gradientUnits="userSpaceOnUse">
      <stop offset="0.0663799" stop-color="#00F0FF"/>
      <stop offset="1" stop-color="#00FF85" stop-opacity="0.295898"/>
    </linearGradient>
  </defs>
</svg>
        <p className="text-white w-64 ml-4 para">
          Web Designing & Web Development Internship Oasis Infobyte 2023 March - 2023 June 
        </p>
      </div>



      <div className="flex justify-center items-center">
      <div className=" glow w-1 h-52 line"></div>
      <svg className="glow" width="117" height="18" viewBox="0 0 117 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M117.004 9C117.004 4.58172 113.422 1 109.004 1C104.585 1 101.004 4.58172 101.004 9C101.004 13.4183 104.585 17 109.004 17C113.422 17 117.004 13.4183 117.004 9ZM15 7.5L-2.28882e-05 0.339746V17.6603L15 10.5V7.5ZM109.004 7.5L13.5 7.5V10.5L109.004 10.5V7.5Z" fill="url(#paint0_linear_32_79)"/>
  <defs>
    <linearGradient id="paint0_linear_32_79" x1="-4.0372" y1="8.99824" x2="233.483" y2="9.00516" gradientUnits="userSpaceOnUse">
      <stop offset="0.0663799" stop-color="#00F0FF"/>
      <stop offset="1" stop-color="#00FF85" stop-opacity="0.295898"/>
    </linearGradient>
  </defs>
</svg>
        <p className="text-white w-64 ml-4 para">
          Postman Student Expert 
        </p>
      </div>
      {/* Rest of your code */}
    </div>
  );
}

export default experience;