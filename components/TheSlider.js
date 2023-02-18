import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import BaseTitle from "./UI/BaseTitle";

const TheSlider = ({ sliderProps }) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
    <div className="relative flex w-full items-center justify-center pb-7 lg:pb-12">
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
        className="relative h-full w-full"
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
      >
        {sliderProps &&
          sliderProps.map((sliderElement, i) => {
            return (
              <SwiperSlide key={sliderElement.id}>
                <div className="flex flex-col items-center gap-2 font-bold text-slate-700">
                  <BaseTitle className="p-2 text-white lg:p-5">
                    {sliderElement.title}
                  </BaseTitle>
                  <div className="relative">
                    <BaseTitle className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                      {sliderElement.subtitle}
                    </BaseTitle>
                    <Image
                      src={sliderElement?.image}
                      alt={`${sliderElement?.title} slider picture ${i}`}
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="h-32 w-screen object-cover lg:h-48"
                      priority={true}
                      placeholder="blur"
                      blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className="absolute bottom-0 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {sliderProps &&
          sliderProps.map((_, i) => {
            return (
              <button
                key={i}
                type="button"
                className={`h-4 w-4 rounded-full border border-white ${
                  mapSwiperActiveIndexToCustomBulletIndex(activeIndex) == i
                    ? "bg-teal-300 opacity-70"
                    : "bg-transparent"
                }`}
                onClick={() => controlledSwiper.slideTo(i)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TheSlider;
