import React from "react";
import { Link, Route } from "react-router-dom";
import { useRef } from "react";
import Contact from "../pages/Contact";
import Project from "../pages/Project";

const Navbar = () => {
  return (
    <main
      className="flex flex-row
    justify-between items-center p-3 rounded-xl text-white   bg-opacity-70 font-extralight font-serif  lg:text-2xl  md:text-lg  md:w-1/2 sm:text-xl sm:w-2/3 lg:w-2/4 bg-indigo-600 shadow-xl shadow-neutral-600 w-fit"
    >
      <Link
        className="hover:shadow shadow-3xl hover:shadow-black p-1 hover:text-black hover:scale-125 rounded-lg  "
        to="/"
      >
        Home
      </Link>
      <Link
        className="hover:shadow shadow-3xl hover:shadow-black p-1 hover:text-black hover:scale-125 rounded-lg "
        to="/about"
      >
        About
      </Link>
      <Link
        className="hover:shadow shadow-3xl hover:shadow-black p-1 hover:text-black hover:scale-125 rounded-lg "
        to="/project"
      >
        Projects
      </Link>
      <Link
        className="hover:shadow shadow-3xl hover:shadow-black p-1 hover:text-black hover:scale-125 rounded-lg "
        to="/contact"
      >
        Contact
      </Link>
      <Link
        className="hover:shadow shadow-3xl hover:shadow-black hover:text-black p-1 hover:scale-125 rounded-lg "
        to="/resume"
      >
        Resume
      </Link>
    </main>
  );
};

export default Navbar;
