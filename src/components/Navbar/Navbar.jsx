import React, { useState } from "react";
import Img from "../../assets/cclogo2-.png";
import "./Navbar.css";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home" },
    { id: 4, text: "About" },
    { id: 5, text: "Contact" },
  ];

  return (
    <header id="navbar">
      <div className="bg-black flex justify-between items-center mx-auto px-4 text-white">
        {/* Logo */}
        <div className="nav-head">
          <img src={Img} alt="" className="w-1/5" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center justify-center">
          {navItems.map((item) => (
            <li key={item.id} className="listItem p-4 m-2">
              {item.text}
            </li>
          ))}

          <div id="nav-btn">
            {" "}
            <button className="bg-white text-black ml-16 px-4 py-2 rounded-lg font-bold">
              Connect
            </button>{" "}
          </div>
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <i className="fa-solid fa-xmark text-white text-2xl"></i>
          ) : (
            <i className="fa-solid fa-bars text-white text-2xl"></i>
          )}
        </div>
        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10 h-screen"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <div className="w-full text-3xl font-bold text-[#00df9a] m-4">
            <img src={Img} alt="" className="w-1/5" />
          </div>

          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <li key={item.id} className="listItem p-4 m-2">
              {item.text}
            </li>
          ))}

          <div id="nav-btn">
            <button className="bg-white text-black ml-4 mt-12 px-4 py-2 rounded-lg font-bold">
              Connect
            </button>
          </div>
        </ul>
      </div>
    </header>

    //
    //   <nav
    //     id="navbar-wrapper"
    //     className="flex items-center justify-between text-white px-8"
    //   >
    //     <div className="nav-head">
    //       <img src={Img} alt="" className="w-1/5" />
    //     </div>
    //     <div id="nav-menu" className="flex gap-24 items-center">
    //       <ul id="menuItem" className="flex gap-8 cursor-pointer">
    //         <li>Home</li>
    //         <li>About Us</li>
    //         <li>Services</li>
    //       </ul>
    //       <div id="nav-btn">
    //         <button className="bg-white text-black px-4 py-2 rounded-lg font-bold">
    //           Connect
    //         </button>
    //       </div>
    //     </div>

    //     <div className="nav-hamMenu">
    //       <div className="hamburger-menu">
    //         <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
    //           <i className="fa-solid fa-bars text-white text-2xl"></i>
    //         </a>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
  );
};

export default Navbar;
