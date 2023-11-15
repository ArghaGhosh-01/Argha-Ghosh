


import React, { useState, useEffect, useRef } from 'react';

function techiconsm({ image, name }) {
  const [isVisible, setVisible] = useState(false);
  const iconRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });

    observer.observe(iconRef.current);
    return () => observer.unobserve(iconRef.current);
  }, []);

  return (
    <img
      ref={iconRef}
      src={image}
      className={`h-10 m-4 border border-cyan-400 p-2 rounded-lg bg-opacity-50 backdrop-filter pointer-cursor backdrop-blur-lg icon_glow cursor-pointer ${isVisible ? 'fade-in' : 'fade-out'}`}
      alt={name}
    />
  );
}

export default techiconsm;