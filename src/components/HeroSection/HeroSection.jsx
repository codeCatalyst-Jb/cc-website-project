import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div
      id="HeroSection"
      className="w-full min-h-[110vh] overflow-hidden relative"
    >
      <div className="h-screen z-0 bg-custom p-3 flex flex-col justify-center items-center md:pb-36">
        <h1 className="text-slate-300 text-[13vw] text-center font-bold pt-8">
          Code Catalyst
        </h1>
        <p className="text-center text-slate-400 max-w-sm mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </p>
        <div className="button_wrapper flex items-center justify-center pt-12">
          <button
            id="hero-btn"
            className="text-white border-2 rounded-full px-6 py-2 font-bold text-lg"
          >
            Know more
          </button>
        </div>
      </div>
      <div className="h-[170px] overflow-hidden absolute bottom-0 w-full z-10">
        <div className="text-white border-4 border-[#b48cde] rounded-full h-[800px] w-[800px] scale-x-[3] custom-shadow bg-[#0A0A0A] z-10 absolute left-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default HeroSection;
