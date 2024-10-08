import React from "react";

const TeamAboutSection = () => {
  return (
    <section id="TeamAboutSection" className="w-full bg-black">
      <div className="heading py-8 ">
        <h1 className="w-full text-center font-bold text-xl text-white">
          {" "}
          About US
        </h1>
        <p className="text-center font-normal text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos expedita
          consectetur itaque?
        </p>
      </div>
      <div className="top-section grid grid-cols-5 p-8">
        <div className="leftDescription col-span-3 text-white">
          <p className="text-slate-600">Exceeding Event Expectations</p>
          <h2
            className="text-[5vw] leading-[4.1rem] text-slate-100"
            style={{ fontFamily: "cursive" }}
          >
            Creating <br /> the best day. <br /> Ever.
          </h2>
        </div>
        <div className="rightDescription col-span-2"></div>
      </div>
      <div className="topGrid-section">
        <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          <div class="bg-orange-400 p-4 rounded-xl">
            <p className="text-white text-md font-medium">Great Speaker</p>
            <span className="text-xs text-slate-100">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
          <div class="bg-blue-400 p-4 rounded-xl">
            <p className="text-white text-md font-medium">Experience</p>
            <span className="text-xs text-slate-100">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
          <div class="bg-yellow-400 p-4 rounded-xl">
            <p className="text-white text-md font-medium">Networking</p>
            <span className="text-xs text-slate-100">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
          <div class="bg-green-400 p-4 rounded-xl">
            <p className="text-white text-md font-medium">Party</p>
            <span className="text-xs text-slate-100">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
        </div>
      </div>

      <div id="live-eventSection" className="mt-14 px-12">
        <div className="live-eventSection_head flex items-center justify-between">
          <h1
            className="text-[4vw] font-bold text-white"
            style={{ fontFamily: "cursive" }}
          >
            Our Live Events
          </h1>
          <div className="icons flex items-center justify-center gap-8">
            <div className="iconBox rounded-full border-2 border-slate-500 w-[40px] h-[40px] flex items-center justify-center text-white cursor-pointer hover:bg-slate-300 hover:text-black">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="iconBox rounded-full border-2 border-slate-500 w-[40px] h-[40px] flex items-center justify-center text-white cursor-pointer hover:bg-slate-300 hover:text-black">
              <i className="fa-brands fa-github"></i>
            </div>
            <div className="iconBox rounded-full border-2 border-slate-500 w-[40px] h-[40px] flex items-center justify-center text-white cursor-pointer hover:bg-slate-300 hover:text-black">
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
        <div className="live-eventSection_box">
          <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
            <div className="box1 bg-slate-800 p-4 rounded-2xl">
              <div className="live-eventDetail-top flex items-center justify-between">
                <p className="text-white text-sm">Aug 12 2024</p>
                <button className="bg-slate-600 text-white rounded-md py-1 px-3 ">
                  Register Now
                </button>
              </div>
              <div className="live-eventDetail-bottom pt-8">
                <h3 className="text-white text-xl font-bold">New 2023</h3>
                <p className="text-xs font-medium text-slate-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium laborum fugiat tempora, iusto nulla blanditiis.
                  Molestiae laudantium labore minima incidunt. z
                </p>
              </div>
            </div>
            <div className="box2 bg-orange-600 p-4 rounded-2xl">
              <div className="live-eventDetail-top flex items-center justify-between">
                <p className="text-white text-sm">Aug 12 2024</p>
                <button className="bg-gray-300 bg-opacity-50 text-white rounded-md py-1 px-3 ">
                  Register Now
                </button>
              </div>
              <div className="live-eventDetail-bottom pt-8">
                <h3 className="text-white text-xl font-bold">New 2023</h3>
                <p className="text-xs font-medium text-slate-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium laborum fugiat tempora, iusto nulla blanditiis.
                  Molestiae laudantium labore minima incidunt. z
                </p>
              </div>
            </div>
            <div className="box3 bg-slate-50 p-4 rounded-2xl">
              <div className="live-eventDetail-top flex items-center justify-between">
                <p className="text-black text-sm">Aug 12 2024</p>
                <button className="bg-slate-800 text-white rounded-md py-1 px-3 ">
                  Register Now
                </button>
              </div>
              <div className="live-eventDetail-bottom pt-8">
                <h3 className="text-black text-xl font-bold">New 2023</h3>
                <p className="text-xs font-medium text-slate-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium laborum fugiat tempora, iusto nulla blanditiis.
                  Molestiae laudantium labore minima incidunt. z
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamAboutSection;
