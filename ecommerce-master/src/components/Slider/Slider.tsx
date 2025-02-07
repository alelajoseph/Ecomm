"use client";

import Image from "next/image";
import React, { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  return (
    <section className=" overflow-hidden w-screen relative " >
      <div className="container flex "   >
        <div className="w-full overflow-hidden flex"  >
          {slides.map((slide, index) => (
            // individual item
            <div
              key={index}
              className="flex flex-col gap transition-all ease-linear duration-1000  w-full md:flex-row flex-shrink-0" style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {/* text section  */}
              <div
                className={`${slide.bg} flex flex-col gap-4 items-center    md:flex-1 text-center py-20 md:py-44`}
              >
                <h3 className=" text-xl lg:text-3xl 2xl:text-5xl">
                  {slide.description}
                </h3>
                <h1 className="text-5xl max-w-md lg:text-6xl 2xl:text-8xl font-bold py-4">
                  {slide.title}
                </h1>
                <button className=" w-max bg-black text-white px-4 py-2 rounded-lg uppercase text-sm lg:text-base">
                  shop now
                </button>
              </div>
              {/* image section  */}
              <div className="relative  h-[300px] md:h-auto md:flex-1  ">
                <Image src={slide.img} alt="" fill className=" bg-cover w-full h-full " />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute  left-1/2 bottom-8 flex gap-4  transform -translate-x-1/2 z-30">
        {slides.map((sl1, in1) => (
          <div
            key={in1}
            className={`flex items-center cursor-pointer justify-center h-3 w-3 ring-1 ring-gray-600 rounded-full ${
              current === in1 ? "scale-150" : ""
            }`}
            onClick={() => setCurrent(in1)}
          >
            {current === in1 && (
              <div className=" w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
