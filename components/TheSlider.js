import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Autoplay,
  Pagination,
  Controller,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const TheSlider = ({ sliderProps }) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  console.log("sliderProps", sliderProps);

  function mapSwiperActiveIndexToCustomBulletIndex(index) {
    switch (index) {
      case sliderProps.length: {
        return 0;
      }
      case sliderProps.length + 1: {
        return 1;
      }
      default: {
        return index;
      }
    }
  }

  return (
    <div className="flex w-full max-w-7xl justify-center">
      <Swiper
        modules={[Controller]}
        onSwiper={setControlledSwiper}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        speed={1000}
        className="h-full w-full"
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
      >
        {sliderProps &&
          sliderProps.map((sliderElement, i) => {
            return (
              <SwiperSlide key={sliderElement.id}>
                <div className="flex flex-col items-center gap-10 text-white">
                  <h2>{sliderElement.title}</h2>
                  <h3>{sliderElement.subtitle}</h3>
                  <div className="">
                    <Image
                      src={sliderElement?.image}
                      alt={`${sliderElement?.title} slider picture ${i}`}
                      fill="true"
                      style={{ objectFit: "contain" }}
                      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                      className="opacity-75 duration-300 ease-in"
                      priority={true}
                      placeholder="blur"
                      blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        {sliderProps &&
          sliderProps.map((_, i) => {
            return (
              <button
                key={i}
                type="button"
                className={`h-4 w-4 rounded-full bg-white 2xl:h-6 2xl:w-6 ${
                  mapSwiperActiveIndexToCustomBulletIndex(activeIndex) == i
                    ? "bg-white opacity-70"
                    : ""
                }`}
                onClick={() => controlledSwiper.slideTo(i)}
              />
            );
          })}
      </Swiper>
    </div>
  );
};

export default TheSlider;
