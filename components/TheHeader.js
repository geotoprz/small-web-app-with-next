import Link from "next/link";
import React from "react";
import TheSlider from "./TheSlider";
import Select from "react-select";
import { useRouter } from "next/router";
import { getMenuOptions, getReactSelectStyles } from "@/utils/utils";

const TheHeader = ({ menuProps, sliderProps }) => {
  const router = useRouter();
  const options = getMenuOptions();

  const selectHandler = (selectOption) => {
    router.push(selectOption.value);
  };

  return (
    <div className="flex w-full justify-center bg-slate-700 py-4 lg:py-10">
      <div className="flex w-screen max-w-7xl flex-col justify-center gap-5">
        <nav className="flex w-full items-center justify-center gap-5 text-white">
          {menuProps &&
            menuProps.map((menuElement) => {
              return (
                <div
                  key={menuElement.id}
                  className="relative flex flex-col items-center gap-2"
                >
                  <div className="hover:text-teal-300">
                    <Link href={menuElement.link}>{menuElement.title}</Link>
                  </div>
                  <div
                    className={`${
                      router.pathname === menuElement.link
                        ? "absolute"
                        : "hidden"
                    } top-8 h-2 w-2 rounded-full bg-teal-300`}
                  />
                </div>
              );
            })}
          <Select
            options={options}
            onChange={(e) => selectHandler(e)}
            styles={getReactSelectStyles(false)}
            placeholder="Go to..."
          />
        </nav>
        <TheSlider sliderProps={sliderProps} />
      </div>
    </div>
  );
};

export default TheHeader;
