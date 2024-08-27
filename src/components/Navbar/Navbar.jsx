import React, { useState } from "react";
import Img from "../../assets/cclogo2-.png";
import "./Navbar.css";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <header id="navbar">
      <nav
        id="navbar-wrapper"
        className="flex items-center justify-between text-white px-8"
      >
        <div className="nav-head">
          <img src={Img} alt="" className="w-1/5" />
        </div>
        <div id="nav-menu" className="flex gap-24 items-center">
          <ul id="menuItem" className="flex gap-8 cursor-pointer">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
          </ul>
          <div id="nav-btn">
            <button className="bg-white text-black px-4 py-2 rounded-lg font-bold">
              Connect
            </button>
          </div>
        </div>

        <div className="nav-hamMenu">
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <i className="fa-solid fa-bars text-white text-2xl"></i>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
