import Link from "next/link";
import React from "react";
import TheSlider from "./TheSlider";

const TheHeader = ({ menuProps, sliderProps }) => {

  console.log("menuProps", menuProps)
  console.log("sliderProps", sliderProps)
  return (
    <div className="w-full flex justify-center bg-slate-700 py-10">
      <div className="flex flex-col gap-5">
      <nav className="w-full max-w-7xl flex gap-5 justify-center text-white">
        {menuProps &&
          menuProps.map((menuElement) => {
            return (
              <div key={menuElement.id}>
                <Link href={menuElement.link}>{menuElement.title}</Link>
              </div>
            );
          })}
        {/* <select>
          <option>Homepage</option>
        </select> */}
      </nav>
      <TheSlider sliderProps={sliderProps}/>
      </div>
    </div>
  );
};

export default TheHeader;
