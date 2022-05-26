import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Faq = () => {
  const [visible, setVisible] = useState(false);
  const [visibleOne, setVisibleOne] = useState(false);

  return (
    <>
      <div className="lg:relative lg:h-visina">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 md:ml-auto sm:px-8 xl:pl-16">
            <h2 className="text-4xl tracking-tight  text-pesak-300 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              The clothes you love and the planet you care about
            </h2>
            <p className="mt-3 max-w-md  mx-auto text-lg text-pesak-400 sm:text-xl md:mt-5 md:max-w-3xl">
                With Bundu clothing, you not only look stylish and comfortable,
                but you're also doing something good for the environment. All of
                our clothes are made with organic, recycled materials like
                bamboo and linen, so you can feel good about what you're
                wearing. Our clothes are also designed to last, so you can wear
                them season after season.
              </p>
            {/* <div
              className={
                visible ? "block transition testo " : "hidden transition"
              }
            >
              <p className="mt-3 max-w-md  mx-auto text-lg text-pesak-400 sm:text-xl md:mt-5 md:max-w-3xl">
                With Bundu clothing, you not only look stylish and comfortable,
                but you're also doing something good for the environment. All of
                our clothes are made with organic, recycled materials like
                bamboo and linen, so you can feel good about what you're
                wearing. Our clothes are also designed to last, so you can wear
                them season after season.
              </p>
            </div> */}
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <button
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pesak hover:bg-pesak-150 md:py-4 md:text-lg md:px-10"
                  onClick={() => setVisible(!visible)}
                >
                  {visible ? "Learn more" : "Learn more"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="/faq-1.png"
            alt=""
          />
        </div>
      </div>
      <div className="lg:relative lg:h-visina">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h2 className="text-4xl tracking-tight  text-pesak-300 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              The clothes you love and the planet you care about
            </h2>
            <p className="mt-3 max-w-md  mx-auto text-lg text-pesak-400 sm:text-xl md:mt-5 md:max-w-3xl">
                Bundu Untamed is determined to make a difference in our world.
                We have set out on this journey with one mission: To bring
                awareness about the issue of wild life and nature conservation
                in Africa.
              </p>
            {/* <div
              className={
                visibleOne ? "block transition testo " : "hidden transition"
              }
            >
              <p className="mt-3 max-w-md  mx-auto text-lg text-pesak-400 sm:text-xl md:mt-5 md:max-w-3xl">
                Bundu Untamed is determined to make a difference in our world.
                We have set out on this journey with one mission: To bring
                awareness about the issue of wild life and nature conservation
                in Africa.
              </p>
            </div> */}
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <button
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pesak hover:bg-pesak-150 md:py-4 md:text-lg md:px-10"
                  onClick={() => setVisibleOne(!visibleOne)}
                >
                  {visible ? "Learn more" : "Learn more"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="/faq-2.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Faq;
