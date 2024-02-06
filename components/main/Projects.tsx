import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern React.js Portfolio"
          description="It is my personal websites and it is the fully responsive website. and I used the React.js programming language for this  portfolio website. "
        />
        <ProjectCard
          src="/CardImage.png"
          title=" Next.js E-Commerce web"
          description="It is the E-Commerce website with PWA, I used the Next.js programming language with mongodb database it is full stack responsive website."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="It is the movies exploring websites, I used the next.js programming language with NextOuth."
        />
      </div>
    </div>
  );
};

export default Projects;
