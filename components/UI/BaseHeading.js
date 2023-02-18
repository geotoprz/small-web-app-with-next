import React from "react";

const BaseHeading = ({ children, className = "" }) => {
  return (
    <h2
      className={`text-bold py-2 text-center text-lg font-bold lg:py-5 lg:text-xl xl:text-2xl 2xl:pb-10 2xl:text-3xl ${className}`}
    >
      {children}
    </h2>
  );
};

export default BaseHeading;
