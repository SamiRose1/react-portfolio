import React from "react";
import { BsGithub as GithubIcon } from "react-icons/bs";
import { BsLinkedin as LinkedInIcon } from "react-icons/bs";
const About = () => {
  return (
    <main className="h-[80vh] flex justify-around items-center flex-col w-fit">
      <span className=" shadow-xl shadow-neutral-500 p-2 rounded-xl">
        About Me
      </span>
      <div className="h-2/3 w-[90%] rounded-2xl shadow-2xl shadow-neutral-500 bg-opacity-50 lg:p-8 md:p-6 sm:p-2  flex justify-center items-center   ">
        <h2 className="w-fit h-fit font-extralight   text-black text-start shadow-2xl shadow-neutral-600 p-2 rounded-3xl text-sm lg:text-2xl md:text-2xl sm:text-xl  lg:h-fit md:h-60vh sm:h-fit  ">
          My name is Seim Yemane and I'm a passionate web developer who loves
          bringing ideas to life online. With a strong blend of technical
          expertise and a keen eye for design, I create user-friendly websites
          that leave a lasting impact. My journey in web development started
          with a fascination for the endless possibilities of the digital world.
          I specialize in both front-end and back-end development, continuously
          staying up-to-date with industry trends. I believe in the web's power
          to connect, inform, and inspire, and I'm dedicated to helping
          businesses and individuals harness that power. I enjoy collaborating
          closely with clients to understand their unique goals and turning
          their vision into a reality. Feel free to explore my portfolio to see
          my work, and don't hesitate to get in touch if you'd like to discuss
          your next web project. Let's work together to make your digital vision
          a reality.
        </h2>
      </div>
      <div className="w-2/5 flex justify-around items-center ">
        <span className="flex justify-center items-center flex-col">
          <a
            href="https://github.com/SamiRose1"
            target="_black"
            className="flex justify-center items-center flex-col"
          >
            {<GithubIcon size={25} />}
            (visit) GitHub
          </a>
        </span>

        <span className="flex justify-center items-center flex-col">
          <a
            href="https://www.linkedin.com/in/seim-yemane-b82430259/"
            target="_blank"
            className="flex justify-center items-center flex-col"
          >
            <LinkedInIcon size={25} />
            (visit) LinkedIn
          </a>
        </span>
      </div>
    </main>
  );
};

export default About;
