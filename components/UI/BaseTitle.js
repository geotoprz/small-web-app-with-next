import React from "react";

const BaseTitle = ({ children, className = "" }) => {
  return (
    <h3
      className={`text-bold text-base lg:text-lg xl:text-xl 2xl:text-2xl ${className}`}
    >
      {children}
    </h3>
  );
};

export default BaseTitle;
