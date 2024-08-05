import React, { useEffect, useRef, useState } from "react";
import { IoMenuSharp, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header>
      <nav className="flex items-center justify-between text-white py-5 px-8">
        <div className="nav-head">
          <h1 className="text-xl font-bold select-none">
            Code<span> Catalyst</span>
          </h1>
        </div>
        <div
          id="nav-menu"
          className="md:gap-14 lg:gap-24 items-center hidden md:flex"
        >
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

        {/* Mobile view menu */}
        <span
          className="cursor-pointer text-white text-2xl block md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <IoMenuSharp />
        </span>

        {isMenuOpen && (
          <div
            ref={menuRef}
            className="fixed top-0 bottom-0 right-0 w-[300px] h-screen flex flex-col bg-[#131313] z-20 px-10 py-6"
          >
            <span
              className="cursor-pointer text-white text-2xl self-end"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <IoClose />
            </span>
            <div className="pt-8 flex flex-col justify-between h-full">
              <ul
                id="menuItem"
                className="flex flex-col gap-4 cursor-pointer text-slate-300"
              >
                <li className="rounded-xl py-2 px-5 text-slate-400 hover:bg-gray-900 hover:text-white font-semibold">
                  Home
                </li>
                <li className="rounded-xl py-2 px-5 text-slate-400 hover:bg-gray-900 hover:text-white font-semibold">
                  About Us
                </li>
                <li className="rounded-xl py-2 px-5 text-slate-400 hover:bg-gray-900 hover:text-white font-semibold">
                  Services
                </li>
              </ul>
              <div id="nav-btn" className="flex flex-col gap-6">
                <button className="border rounded-xl py-2 px-5 border-slate-700 text-slate-400 hover:bg-white hover:text-black font-semibold">
                  Sign in
                </button>
                <button className="border rounded-xl py-2 px-5 border-slate-700 text-slate-400 hover:bg-white hover:text-black font-semibold">
                  Connect
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
