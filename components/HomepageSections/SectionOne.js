import React from "react";
import Image from "next/image";
import BaseHeading from "../UI/BaseHeading";

const SectionOne = ({ sectionProps }) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {sectionProps ? (
        sectionProps.images?.map((image, i) => {
          return (
            <div
              key={image.title}
              className={`${i === 0 ? "row-span-2" : "row-span-1"}`}
            >
              <div className="relative">
                <h3 className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-2xl font-bold text-white">
                  {image.title}
                </h3>
                <Image
                  src={image.img}
                  alt={`${image.title} picture ${i}`}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className={`w-screen object-cover ${
                    i === 0 ? "h-40 sm:h-69 lg:h-101" : "h-40 sm:h-32 lg:h-48"
                  }`}
                  placeholder="blur"
                  blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                />
              </div>
            </div>
          );
        })
      ) : (
        <BaseHeading>No data found.</BaseHeading>
      )}
    </div>
  );
};

export default SectionOne;
