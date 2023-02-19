import BaseHeading from "@/components/UI/BaseHeading";
import React from "react";
import SectionTwoForm from "./SectionTwoForm";
import SectionTwoGraph from "./SectionTwoGraph";

const SectionTwo = ({ sectionProps }) => {
  return (
    <>
      {sectionProps ? (
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row xl:gap-20">
          {sectionProps.stats ? (
            <div className="lg:w-1/2">
              <SectionTwoGraph
                title={sectionProps.title}
                graphText={sectionProps.graphText}
                stats={sectionProps.stats}
              />
            </div>
          ) : (
            <BaseHeading>Statistics data not found.</BaseHeading>
          )}
          {sectionProps.formLabels ? (
            <div className="lg:w-1/2">
              <SectionTwoForm
                formText={sectionProps.formText}
                formLabels={sectionProps.formLabels}
                buttonText={sectionProps.buttonText}
              />
            </div>
          ) : (
            <BaseHeading>Form data not found.</BaseHeading>
          )}
        </div>
      ) : (
        <BaseHeading>Data not found.</BaseHeading>
      )}
    </>
  );
};

export default SectionTwo;
