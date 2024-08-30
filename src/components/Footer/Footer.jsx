import React from "react";
import Img from "../../assets/cclogo2-.png";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="bg-zinc-900  h-25vh border-white flex flex-wrap gap-5 text-gray-400 justify-evenly items-center px-6 py-5">
        <div className="about">
          <img src={Img} alt="" className="w-1/5" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            harum similique deserunt distinctio quisquam odio quas. Animi
            quaerat qui alias consequatur. Aperiam debitis beatae provident
            deleniti a minima, nemo quam quas, deserunt aliquid sit fuga
            excepturi accusamus, neque officia ipsum?
          </p>
        </div>

        <div className="qlinks">
          <h2 className="text-blue-500">Quick links</h2>
          <ul>
            <li>
              <a href=""> Home</a>
            </li>
            <li>
              <a href=""> About</a>
            </li>
            <li>
              <a href="">Events</a>
            </li>
            <li>
              <a href="">Teams</a>
            </li>
            <li>
              <a href="">Get in touch</a>
            </li>
            <li>
              <a href="">Site Map</a>
            </li>
          </ul>
        </div>

        <div className="social">
          <h2 className="text-blue-500">FOLLOW US</h2>
          <ul>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Linkedin</a>
            </li>
            <li>
              <a href="">Github</a>
            </li>
            <li>
              <a href="">Discord</a>
            </li>
          </ul>
        </div>

        <div className="blog">
          <h2> Do you want to read some Blog offered by us</h2>
          <a href="" className="text-blue-500">
            Our Blogs
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, enim.
          </p>
        </div>
      </footer>
      <h3 className="bg-gray-700 text-center">
        Designed by <span className="text-white">Code Catalyst Team</span>
        <h2>All Rights reserved to Code Catalyst</h2>
      </h3>
    </>
  );
};

export default Footer;
