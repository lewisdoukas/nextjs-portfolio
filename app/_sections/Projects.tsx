import { myProjects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  const currentProject = myProjects[0];

  return (
    <section className="c-space my-20">
      <p className="head-text">My Work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <Image
              src={currentProject.spotlight}
              alt="spotlight"
              height={384}
              width={384}
              className="w-full object-cover rounded-xl"
            />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <Image
              src={currentProject.logo}
              alt="logo"
              height={40}
              width={40}
              className="shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <Image
                    src={tag.path}
                    alt={tag.name}
                    height={40}
                    width={40}
                    className="shadow-sm"
                  />
                </div>
              ))}
            </div>

            <Link
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 cursor-pointer text-white-600"
            >
              <p>Check Live Site</p>
              <Image
                src="/assets/arrow-up.png"
                alt="arrow"
                height={12}
                width={12}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
