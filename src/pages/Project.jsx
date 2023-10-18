import React from "react";
import { BiLogoJavascript as JsIcon } from "react-icons/bi";
import { BiLogoTailwindCss as TailwindIcon } from "react-icons/bi";
import { BiLogoNodejs as NodejsIcon } from "react-icons/bi";
import { BiLogoReact as ReactIcon } from "react-icons/bi";
import { BiLogoCss3 as CssIcon } from "react-icons/bi";
import { BiLogoHtml5 as HtmlIcon } from "react-icons/bi";
import { BiLogoGithub as GithubIcon } from "react-icons/bi";
import App1 from "../images/app1.png";
import App2 from "../images/app2.png";
import App3 from "../images/app3.png";
import App4 from "../images/app4.png";
import App5 from "../images/app5.png";

const Project = () => {
  // imported icons from react-icons
  //projects sections
  //the projects are in span to help me adjust propery
  return (
    <main className="h-[80vh] flex flex-col justify-center items-center w-full">
      <div className="flex  justify-center items-center  overflow-x-scroll w-[100%] scrollbar-hide m-0 ">
        <span className="flex justify-center items-center flex-col  ml-[1500px] lg:ml-[1000px] md:ml-[1500px] sm:ml-[1500px]">
          {/* added the margin left because the scroll bar was cutting content */}
          {/* there are links that lead to github code and live demo site */}
          <p> (MERN)To-Do App</p>
          <img
            src={App1}
            alt=""
            className="min-w-[400px] shadow-xl shadow-indigo-300 rounded-2xl"
          />
          <span className="m-2">
            <a
              className="p-1 bg-white text-black rounded-lg m-1   "
              target="_blank"
              href="https://github.com/SamiRose1/to-do-auth-client-.git"
            >
              Visit Code
            </a>

            <a
              className="p-1 bg-white text-black rounded-lg m-1  "
              target="_blank"
              href="https://to-do-kc0f.onrender.com/"
            >
              Visit Site
            </a>
          </span>
        </span>
        <span className="flex justify-center items-center flex-col m-2">
          <p> Portfolio</p>
          <img
            src={App5}
            alt=""
            className="min-w-[400px] shadow-xl shadow-indigo-300 rounded-2xl  "
          />
          <span className="m-2">
            <a
              className="p-1 bg-white text-black rounded-lg m-1  "
              target="_blank"
              href="https://github.com/SamiRose1/react-portfolio.git"
            >
              Visit Code
            </a>
            <a
              className="p-1 bg-white text-black rounded-lg m-1  "
              target="_blank"
              href="https://seim-yemane.onrender.com/"
            >
              Visit Site
            </a>
          </span>
        </span>
        <span className="flex justify-center items-center flex-col m-2 ">
          <p> News App</p>
          <img
            src={App2}
            alt=""
            className="min-w-[400px] shadow-xl shadow-indigo-300 rounded-2xl  "
          />
          <span className="m-2">
            <a
              className="p-1 bg-white text-black rounded-lg m-1  "
              target="_blank"
              href="https://github.com/SamiRose1/News-App.git"
            >
              Visit Code
            </a>
            <a
              className="p-1 bg-white text-black rounded-lg m-1  "
              target="_blank"
              href="https://news-corners.netlify.app/"
            >
              Visit Site
            </a>
          </span>
        </span>
        <span className="flex justify-center items-center flex-col m-2">
          <p> Banking App (Landing Page)</p>
          <img
            src={App3}
            alt=""
            className="min-w-[400px] shadow-xl shadow-indigo-300  rounded-2xl"
          />
          <span className="m-2">
            <a
              className="p-1 bg-white text-black rounded-lg m-1  "
              target="_blank"
              href="https://github.com/SamiRose1/Banker-App.git"
            >
              Visit Code
            </a>
            <a
              className="p-1 bg-white text-black rounded-lg m-1  "
              target="_blank"
              href="https://debanker.netlify.app/"
            >
              Visit Site
            </a>
          </span>
        </span>
        <span className="flex justify-center items-center flex-col m-2">
          <p> Weather App</p>
          <img
            src={App4}
            alt=""
            className="min-w-[400px] shadow-xl shadow-indigo-300 rounded-2xl  "
          />
          <span className="m-2">
            <a
              className="p-1 bg-white text-black rounded-lg m-1  "
              target="_blank"
              href="https://github.com/SamiRose1/weather-app-react.git"
            >
              Visit Code
            </a>
            <a
              className="p-1 bg-white text-black rounded-lg m-1  "
              target="_blank"
              href="https://weather-app-27r7.onrender.com/"
            >
              Visit Site
            </a>
          </span>
        </span>
      </div>
      <h3 className="text-5xl  font-thin p-4">under my belt is,</h3>
      <div className=" flex  justify-between items-center m-0 p-2 flex-row flex-wrap w-2/3">
        <span className="flex justify-center items-center flex-col">
          <HtmlIcon size={35} />
          <p> HTML</p>
        </span>
        <span className="flex justify-center items-center flex-col">
          <CssIcon size={35} />
          <p>CSS</p>
        </span>
        <span className="flex justify-center items-center flex-col">
          <GithubIcon size={35} />
          <p>GitHub & Git</p>
        </span>
        <span className="flex justify-center items-center flex-col">
          <JsIcon size={35} color={"yelow"} />
          <p> JavaScript</p>
        </span>
        <span className="flex justify-center items-center flex-col">
          <ReactIcon size={35} />
          <p>React JS</p>
        </span>

        <span className="flex justify-center items-center flex-col">
          <NodejsIcon size={35} />
          <p> Node JS</p>
        </span>

        <span className="flex justify-center items-center flex-col">
          <TailwindIcon size={35} />
          <p>Tailwind CSS</p>
        </span>
      </div>
    </main>
  );
};

export default Project;
