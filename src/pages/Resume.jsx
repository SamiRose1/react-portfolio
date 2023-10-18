import React from "react";

import ResumeDev from "../images/resume.pdf";

const Resume = () => {
  return (
    <div className="h-[85vh] flex justify-around items-center flex-col p-2">
      {/* there's a resume in the h2 and there's a downloadable one below */}
      <h2 className="text-sm lg:text-lg md:text-xl sm:text-xs  w-full ">
        Seim Yemane <br /> 1823 ,24 ST, NW <br /> Alberta, Edmonton, T6T 2G7
        <br />
        seimyemane8@gmail.com <br />
        780-802-9234 <br />
        <br />
        <a
          href="https://www.linkedin.com/in/seim-yemane-b82430259/"
          target="_blank"
          className=""
        >
          -LinkedIn (visit)
        </a>
        <br />
        <a href="https://github.com/SamiRose1" target="_black" className="">
          -GitHub (visit)
        </a>
        <br />
        <br />
        Motivated and self-taught web developer seeking opportunities to
        leverage my skills and showcase my passion for coding through
        challenging web development projects. <br />
        -Skills: <br /> -Front-end Development: HTML, CSS, JavaScript, React{" "}
        <br />
        -Back-end Development: Node.js, Express - Database Management: MongoDB -
        Version Control: Git, GitHub - Responsive Web Design - Problem Solving
        and Troubleshooting - Strong Learning and Adaptability
        <br /> -Education: - Self-taught Web Developer (2020-2023) - Online
        resources, tutorials, and courses - Personal projects, coding
        challenges, and self-study Information: - Participated in coding
        communities, forums, or developer meetups. <br /> projects: Go to
        projects section.
      </h2>
      {/* below is the downloadable one */}
      <a
        href={ResumeDev}
        download="resume.pdf"
        target="_blank"
        className="p-3 text-sm bg-black text-white rounded-xl hover:scale-125 shadow-xl shadow-neutral-500 transition-all lg:text-xl md:text-xl sm:lg"
      >
        Download resume
      </a>
    </div>
  );
};

export default Resume;
