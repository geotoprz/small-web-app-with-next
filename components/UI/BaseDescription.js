import React from "react";

const BaseDescription = ({ children, className = "" }) => {
  return (
    <h4
      className={`text-bold text-sm lg:text-base xl:text-lg 2xl:text-xl ${className}`}
    >
      {children}
    </h4>
  );
};

export default BaseDescription;
