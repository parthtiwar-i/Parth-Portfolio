import React from "react";
import Section from "./Section";
import { collabApps, collabContent} from "../constants";
import { background, check } from "../assets";
import Button from "./Button";
import { LeftCurve, RightCurve } from "../design/Collaboration";

const Skills = () => {
return (
    <Section crosses>
      <div className="container lg:flex ">
        <div className="max-w-[25rem] ">
          <h1 className=" h2 mb-4 md:mb-6 ">My Skill Set </h1>
          <ul className=" max-w-[22rem] mb-10 md:mb-14 ">
            {collabContent.map((item) => (
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
          <p className="body-2 mt-4 m  b-7 text-n-4 md:mb-16 lg:mb-32 lg:w--[22rem] lg:mx-auto ">
            These are my skill sets and languages, frameworks, and tools for web
            development and many more with some in progress
          </p>
          <div className="relative  left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    className="rounded-full"
                    src={background}
                    alt="me"
                    width={58}
                    height={58}
                  />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={` absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    } `}
                  >
                    <img
                      className="m-auto"
                      src={app.icon}
                      alt={app.title}
                      width={app.width}
                      height={app.height}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
