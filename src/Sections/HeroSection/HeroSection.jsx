import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section
      id="Home"
      className="w-full h-screen items-center flex flex-col justify-center gap-8 relative"
    >
      <h1 className="font-semibold text-6xl sm:text-4xl md:text-[165px] lg:text-10xl pb-9 dark:text-white ">
        Code Catalyst
      </h1>
      <p className="dark:text-white text-center text-slate-500  mx-auto">
        Read more Celebrate the joy of accomplishment with an <br /> app
        designed to track your progress, motivate <br /> your efforts, and
        celebrate your successes.
      </p>
      <div className="button_wrapper flex items-center justify-center pt-12">
        <button className="bg-white text-black px-4 py-2 rounded-lg font-bold">
          Know More{" "}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
