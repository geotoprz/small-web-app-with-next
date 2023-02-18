import React from "react";
import SectionTwoForm from "./SectionTwoForm";
import SectionTwoGraph from "./SectionTwoGraph";

const SectionTwo = ({ sectionProps }) => {
  console.log("sectionProps", sectionProps);
  return (
    <div className="flex w-full flex-col items-center gap-10 lg:flex-row">
      <SectionTwoGraph
        title={sectionProps.title}
        graphText={sectionProps.graphText}
        stats={sectionProps.stats}
      />
      <SectionTwoForm
        formText={sectionProps.formText}
        formLabels={sectionProps.formLabels}
        buttonText={sectionProps.buttonText}
      />
    </div>
  );
};

export default SectionTwo;
