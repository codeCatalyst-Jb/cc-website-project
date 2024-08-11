import React from "react";
import Img from '../../assets/cclogo2-.png'
const Navbar = () => {
  return (
    <header>
      <nav className="flex items-center justify-between text-white px-8">
        <div className="nav-head">
         <img src={Img} alt="" className="w-1/5" />
        </div>
        <div id="nav-menu" className="flex gap-24 items-center">
          <ul id="menuItem" className="flex gap-8 cursor-pointer">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
          </ul>
          <div id="nav-btn" className="flex gap-6">
            <button className="border-2 rounded-xl py-2 px-4 border-blue-500">Sign in</button>
            <button className="border-2 rounded-xl py-2 px-4 border-blue-500">Connect</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
