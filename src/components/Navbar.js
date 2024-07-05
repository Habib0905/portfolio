import React from "react";

const Navbar = () => {
  return (
    <nav className=" dark:bg-gray-900 h-14 flex justify-between px-10 items-center">
      <a href="#">
        <h1 className=" text-2xl text-left text-white  font-bold ">
          My Portfolio
        </h1>
      </a>

      <ul className=" text-l text-left text-white font-semibold flex space-x-7 ">
        <li className="text-white hover:text-gray-400 transition duration-300 cursor-pointer">
          Home
        </li>
        <li className="text-white hover:text-gray-400 transition duration-300 cursor-pointer">
          About Me
        </li>
        <li className="text-white hover:text-gray-400 transition duration-300 cursor-pointer">
          Skills
        </li>
        <li className="text-white hover:text-gray-400 transition duration-300 cursor-pointer">
          Achievments
        </li>
        <li className="text-white hover:text-gray-400 transition duration-300 cursor-pointer">
          Projects
        </li>
        <li className="text-white hover:text-gray-400 transition duration-300 cursor-pointer">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
