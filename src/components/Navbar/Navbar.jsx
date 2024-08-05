import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="flex items-center justify-between text-white py-5 px-8">
        <div className="nav-head">
          <h1 className="text-xl font-bold select-none">
            Code<span> Catalyst</span>
          </h1>
        </div>
        <div id="nav-menu" className="flex gap-24 items-center">
          <ul
            id="menuItem"
            className="flex gap-8 cursor-pointer text-slate-300"
          >
            <li className="hover:text-white">Home</li>
            <li className="hover:text-white">About Us</li>
            <li className="hover:text-white">Services</li>
          </ul>
          <div id="nav-btn" className="flex gap-6">
            <button className="border rounded-xl py-2 px-5 border-slate-700 text-slate-400 hover:bg-white hover:text-black font-semibold">
              Sign in
            </button>
            <button className="border rounded-xl py-2 px-5 border-slate-700 text-slate-400 hover:bg-white hover:text-black font-semibold">
              Connect
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
