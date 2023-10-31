import React from "react";
import logo from "/assets/Images/logo.webp";
import { IoLogoYoutube } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-red-500 py-3">
      <div className="container mx-auto flex justify-between items-center px-4">
        <img src={logo} className="w-32 md:w-40" alt="Logo" />

        <ul className="hidden md:flex gap-4 md:gap-14">
          <Link to="/">
            <li className="hover:font-bold cursor-pointer">Home</li>
          </Link>
          <Link to="About">
            <li className="hover:font-bold cursor-pointer">About Us</li>
          </Link>
          <Link to="#">
            <li className="hover:font-bold cursor-pointer">Contact Us</li>
          </Link>
        </ul>

        {/* <button className="bg-red-500 rounded-full text-white flex items-center text-[14px]">
          Subscribe <IoLogoYoutube className="ml-3 text-[20px]" />
        </button> */}
      </div>
    </div>
  );
}

export default Header;
