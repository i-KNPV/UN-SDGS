import React from "react";
import LOGO from "../assets/LOGO/un.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={LOGO} alt="UN Logo" />
      <div className="buttons">
        <button className="border-none bg-color text-black font-normal text-sm px-2 py-1 rounded cursor-pointer transition-font duration-500 ease-in-out hover:font-bold">
          <a href="#">PROGRESS</a>
        </button>
        <button className="border-none bg-transparent text-black font-normal text-sm px-2 py-1 rounded cursor-pointer transition-font duration-500 ease-in-out hover:font-bold">
          <a href="#">HISTORY</a>
        </button>
        <button className="border-none bg-transparent text-black font-normal text-sm px-2 py-1 rounded cursor-pointer transition-font duration-500 ease-in-out hover:font-bold">
          <a href="#">RESOURCES</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
