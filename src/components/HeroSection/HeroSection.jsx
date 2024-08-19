import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div id="HeroSection" className="w-full h-screen">
      <h1 className="text-blue-500 text-[10vw] text-center font-bolder pt-8">
        Code Catalyst
      </h1>
      <p className="text-white text-center text-slate-500  mx-auto">
        Read more Celebrate the joy of accomplishment with an <br /> app
        designed to track your progress, motivate <br /> your efforts, and
        celebrate your successes.
      </p>
      <div className="button_wrapper flex items-center justify-center pt-12">
        <button
          id="hero-btn"
          className="text-white border-2 border-blue-500 rounded-full px-6 py-2 font-bold text-lg"
        >
          Know more
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
