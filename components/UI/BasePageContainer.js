import React from "react";

const BasePageContainer = ({ children }) => {
  return (
    <main className="flex h-full w-full justify-center">
      <div className="flex w-full max-w-7xl flex-col items-center gap-5 p-5 sm:p-8 lg:p-10 xl:py-10 xl:px-0">
        {children}
      </div>
    </main>
  );
};

export default BasePageContainer;
