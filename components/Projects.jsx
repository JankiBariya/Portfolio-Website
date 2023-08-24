import Image from "next/image";
import Link from "next/link";
import React from "react";
import shoppingCart from "../public/assets/projects/shoppingcart.jpg";
import dashboardImg from "../public/assets/projects/dashboardImg.png";
import tictactoeImg from "../public/assets/projects/tictactoe.png";
import igCloneImg from "../public/assets/projects/igclone.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#368BFA]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="E-Commerce Shopping Website"
            backgroundImg={shoppingCart}
            projectUrl="/shoppingcart"
            tech="Angular 12"
          />

          <ProjectItem
            title="AI powered TicTacToe Game"
            backgroundImg={tictactoeImg}
            projectUrl="/tictactoe"
            tech="Python"
          />
          <ProjectItem
            title="Sales Dashboard"
            backgroundImg={dashboardImg}
            projectUrl="/dashboard"
            tech="Power BI"
          />
          <ProjectItem
            title="Instagram Clone UI"
            backgroundImg={igCloneImg}
            projectUrl="/igclone"
            tech="Xcode (Swift)"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
