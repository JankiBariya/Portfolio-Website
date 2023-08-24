import Link from "next/link";
import React from "react";
// import Typed from 'typed.js';
// import { TypedJS } from 'wc-typed-js'
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Main = () => {
  const el = React.useRef(null);
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-white">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h2 className="py-4 text-white text-m">
            Hi, I&#39;m <span className="text-[#ffffff]"> Janki</span>
          </h2>
          <h1 className="py-2 text-[#368BFA]">
            <div className="text">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay:40,

                  strings: [
                    "A Web Developer.",
                    "A Software Developer.",
                    "A Web Designer.",
                    "A Frontend Developer.",
                    "An UI/UX Designer.",
                    "An iOS Developer.",
                    "A Python Developer.",
                    "ML Enthusiast.",
                    "DataScience Enthusiast.",
                  ],
                  typeSpeed: 80,
                }}
              />
            </div>
          </h1>

          <p className="py-4 text-white sm:max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/janki-bariya/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300  text-[#368BFA]">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/JankiBariya"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300  text-[#368BFA]">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300  text-[#368BFA]">
                <AiOutlineMail />
              </div>
            </Link>
            <a href="https://drive.google.com/file/d/1BYNpbnR4hUOXD1NiN5XUg0I_5MnaZAD4/view?usp=sharing">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300  text-[#368BFA]">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
