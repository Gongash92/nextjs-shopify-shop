import React, { useState, useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

// object with images
const featuredProducts = [
  "./images/1.png",
  "./images/2.png",
  "./images/3.png",
  "./images/4.png",
];

// define variables
let count = 0;
let slideInterval;

// function for image slider
const ImageSlider = () => {

	// get image index
  const [currentIndex, setCurrentIndex] = useState(0);

	// return current property
  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

	// add event listener
  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
  }, []);

// start image slider
  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

	//pause image slider
  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

	// on click  next image
  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
		// add style to animate slider
    slideRef.current.classList.add("fade-anim");
  };
	// on click prevision image
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
		// add style to animate slider
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div>
      <div className="text-center pt-28">
        <h1 className=" font-semibold text-pesak-300 tracking-wide sans text-xl">Nigeria</h1>
        <p className="mt-2  text-5xl leading-10 px-4 text-pesak-300 serif">
          Nkhotakota Wildlife Reserve Malawi
        </p>
      </div>
      <div
        ref={slideRef}
        className="max-w-6xl mx-auto pt-10  select-none relative"
      >
        <div className="aspect-w-16 aspect-h-9">
          <img src={featuredProducts[currentIndex]} alt="" />
        </div>

        <div className="absolute w-full top-1/2 transform -translate-y-1/2  flex justify-between items-center  margin-project">
          <button
            className="bg-pesak text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnPrevClick}
          >
            <ChevronLeftIcon className="w-8 h-8 " />
          </button>
          <button
            className="bg-pesak text-white p-1 right-20 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnNextClick}
          >
            <ChevronRightIcon className="w-8 h-8 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
