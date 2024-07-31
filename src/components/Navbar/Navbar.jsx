import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="flex items-center justify-between text-white py-5">
        <div className="nav-head">
          <h1>
            Code<span> Catalyst</span>
          </h1>
        </div>
        <div id="nav-menu" className="flex gap-24 items-center">
          <ul id="menuItem" className="flex gap-6">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
          </ul>
          <div id="nav-btn" className="flex gap-6">
            <button>Sign in</button>
            <button>Connect</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
