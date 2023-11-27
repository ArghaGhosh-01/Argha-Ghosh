


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
      className={`h-12 m-2 pointer-cursor cursor-pointer ${isVisible ? 'fade-in' : 'fade-out'}`}
      alt={name}
    />
  );
}

export default techiconsm;