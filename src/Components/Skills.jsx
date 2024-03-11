import React from "react";
import Section from "./Section";
import { collabContent, collabText } from "../constants";
import { check } from "../assets";
import Button from "./Button";

const Skills = () => {
  return (
    <Section crosses>
      <div className="container lg:flex ">
        <div className="max-w-[25rem] ">
          <h1 className=" h2 mb-4 md:mb-6 ">My Skill Sets & Technologies </h1>
          <ul className=" max-w-[22rem] mb-10 md:mb-14 ">
            {collabContent.map((item, index) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center ">
                  <img src={check} alt="check" width={24} height={24} />
                  <h6 className="h6 body-2 ml-5 ">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Rate My Skills</Button>
        </div>
        <div className=" lg:ml-auto xl:w-[38rem] ">
          <p className="body-2 mt-4 mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w--[22rem] lg:mx-auto ">
            These are my skill sets and languages, frameworks, and tools for web
            development and many more with some in progress
          </p>
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100 ">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full "></div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
