import React from "react";

function techiconsm({ image, name }) {
  return (
    <img
      src={image}
      className="h-10 m-2 border border-green-400 p-2 rounded-lg bg-opacity-50 backdrop-filter backdrop-blur-lg icon_glow cursor-pointer"
      alt={name}
    />
  );
}

export default techiconsm;
