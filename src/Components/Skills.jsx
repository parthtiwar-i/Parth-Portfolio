import React, { useEffect, useRef } from "react";
import Section from "./Section";
import { collabApps, collabContent } from "../constants";
import { background, check, mern } from "../assets";
import Button from "./Button";
import { LeftCurve, RightCurve } from "../design/Collaboration";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Arrow from "../assets/svg/Arrow";
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const rotate = useRef(null);

  useEffect(() => {
    const el = rotate.current;
    gsap.fromTo(
      el,
      { rotate: 0, translateX: "-11rem" },
      {
        rotate: 360,
        duration: 5,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);

  return (
    <Section crosses id={"skills"}>
      <div className="container lg:flex lg:-mt-10 ">
        <div className="max-w-[25rem] ">
          <h1 className=" h2 mb-4 md:mb-6 ">My Skill Set </h1>
          <ul className=" max-w-[22rem] mb-10 md:mb-10 ">
            {collabContent.map((item) => (
              <li className="mb-2 py-2" key={item.id}>
                <div className="flex items-center ">
                  <img src={item.icon} alt="check" width={24} height={24} />
                  <h6 className="h6 body-2 ml-5 ">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Development</Button>
        </div>
        <div className=" lg:ml-auto xl:w-[38rem] ">
          <p className="body-2 mt-4 mb-7 text-n-4 md:mb-16 lg:mb-32 lg:w--[22rem] lg:mx-auto ">
            Below are my core competencies in web development, encompassing
            various languages, frameworks, and tools. Additionally, I am
            actively exploring additional skills to further enrich my expertise
            in this domain.
          </p>
          <div className="relative  left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    className=""
                    src={mern}
                    alt="me"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
            </div>
            <ul ref={rotate}>
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
