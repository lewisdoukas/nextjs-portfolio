"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../_components/Button";
import dynamic from "next/dynamic";
import Link from "next/link";

const Earth = dynamic(
  () => {
    return import("../_components/Earth");
  },
  { ssr: false }
);

const About = () => {
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <Image
              src="/assets/grid1.png"
              alt="grid-1"
              width={276}
              height={276}
              className="w-full h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Lewis</p>
              <p className="grid-subtext">
                I'm an engineer and a skilled software developer with expertise
                in Python, JavaScript, Pinescript and in several technologies
                used in web development, technical analysis and geoinformatics.
                I have experience in collaborating closely with clients to
                create efficient, scalable and user-friendly solutions that
                solve real-world problems.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <Image
              src="/assets/grid2.png"
              alt="grid-2"
              width={276}
              height={276}
              className="w-full h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in Python for data analysis & desktop
                applications/UI and in JavaScript/TypeScript focusing on Next.js
                & React ecosystem for scalable web applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Earth />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely accross most timezones
              </p>
              <p className="grid-subtext">
                I based in Greece, with remote work available.
              </p>
              <Link href="#contact" className="w-fit">
                <Button
                  name="Contact me"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
