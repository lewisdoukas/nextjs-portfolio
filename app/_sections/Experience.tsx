"use client";
import { experiences } from "@/constants";
import Image from "next/image";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }: any) => (
  <VerticalTimelineElement
    visible={true}
    contentStyle={{ background: "#0E0E10", color: "#d6d9e9" }}
    contentArrowStyle={{ borderRight: "7px solid #0E0E10" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <Image
          src={experience.icon}
          alt={experience.company_name}
          height={36}
          width={36}
          className="object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p
        className="text-white-700 text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point: any, index: number) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-600 text-[14px] pl-1"
        >
          {point !== "Check out my profile" ? (
            point
          ) : (
            <a
              className="hover:text-emerald-500"
              href="https://www.fiverr.com/lewisdoukas"
              target="_blank"
            >
              Check out my profile
            </a>
          )}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <section className="c-space my-20" id="work">
      <p className="head-text">Studies & Work Experience</p>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
