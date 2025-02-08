"use client";
import Image from "next/image";
import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../_components/Button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("doukas.lewis@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
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
              <p className="grid-subtext">Description...</p>
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
                I specialize in Python and JavaScript/TypeScript focusing on
                React & Next.js ecosystem.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 40,
                    lng: -100,
                    text: "I'm here!",
                    color: "white",
                    size: 20,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely accross most timezones
              </p>
              <p className="grid-subtext">
                I based in Greek, with remote work available.
              </p>
              <Button name="Contact me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <Image
            src="/assets/grid3.png"
            alt="grid-3"
            width={276}
            height={276}
            className="w-full h-fit object-contain"
          />

          <div>
            <p className="grid-headtext">My Passion for Coding</p>
            <p className="grid-subtext">I like... description</p>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <Image
              src="/assets/grid4.png"
              alt="grid-4"
              width={276}
              height={276}
              className="w-full h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <Image
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
