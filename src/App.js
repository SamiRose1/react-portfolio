import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <main className="bg-orange-300 h-[100vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/resume" element={<Resume />} />
      </Routes>
      <div className="flex w-full justify-center items-center">
        <Navbar />
      </div>
    </main>
  );
};

export default App;
