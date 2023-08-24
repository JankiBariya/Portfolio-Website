import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#368BFA]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-white">
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React or Next, I am a quick learner and can pick up new tech stacks
            as needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className="py-2 text-white">
            Additionally, I excel in machine learning & data science and have a strong aptitude
            for leveraging data-driven insights. Skilled in effective
            communication, collaboration, and delivering comprehensive
            solutions, I bring a versatile skill set that encompasses both web
            development and data science domains.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-white underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-auto h-auto m-auto flex items-center justify-center p-6 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-full" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
