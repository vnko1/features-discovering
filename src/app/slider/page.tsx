"use client";
// import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const slides = [
  { url: "/IMG_5647.jpeg" },
  { url: "/IMG_5652.jpeg" },
  { url: "/IMG_5669.jpeg" },
  { url: "/IMG_5799.jpeg" },
  { url: "/IMG_5804.jpeg" },
];
function Page() {
  const [cIndex, setCIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = cIndex === 0;

    const newIndex = isFirstSlide ? slides.length - 1 : cIndex - 1;
    setCIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = cIndex === slides.length - 1;

    const newIndex = isLastSlide ? 0 : cIndex + 1;
    setCIndex(newIndex);
  };
  useEffect(() => {
    const t = setInterval(() => {
      nextSlide();
    }, 1000 * 5);
    return () => {
      clearInterval(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cIndex]);

  return (
    <main>
      <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[cIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        >
          {/* <Image
            src={slides[cIndex].url}
            alt="alt"
            fill
            className="w-full h-auto object-contain"
          /> */}
        </div>
        <div className="hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight size={30} onClick={nextSlide} />
        </div>
        <div className="flex justify-center pt-2 top-4">
          {slides.map((_, i) => (
            <div
              onClick={() => setCIndex(i)}
              key={i}
              className="text-xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Page;
