import React from "react";
import Navbar from "../components/Navbar";
import Contact from "./Contact";

const Home = () => {
  return (
    <main className=" flex justify-around flex-col items-center h-[80vh]">
      <article className="shadow-lg shadow-neutral-500 w-1/3 h-1/2 flex items-center justify-center flex-col text-5xl  p-2  font-thin lg:text-6xl md:text-7xl sm:text-5xl    ">
        <span className="shadow-lg shadow-neutral-500 p-2 w-full flex justify-start items-center ">
          Think
        </span>

        <span className="shadow-lg shadow-neutral-500 p-2 w-full flex justify-end items-center ">
          Code
        </span>
        <span className="shadow-lg shadow-neutral-500 p-2 w-full flex justify-start items-center ">
          Solve
        </span>

        <span className="shadow-lg shadow-neutral-500 p-2 w-full flex justify-end items-center">
          Expand
        </span>

        <span className="shadow-lg shadow-neutral-500 p-2 w-full flex justify-start items-center ">
          Conquer
        </span>
        <span className="shadow-xl shadow-neutral-500 p-4 w-2/3 flex justify-center items-center text-center text-white font-extrabold from-neutral-300">
          THE MARATHON CONTINUES
        </span>
      </article>
    </main>
  );
};

export default Home;
